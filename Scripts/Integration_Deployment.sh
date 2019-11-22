
./../node_modules/.bin/mocha ./../ProxyBundleTest/TestScripts/Integration/test.js --reporter mocha-teamcity-reporter options  useStdError=true 

./../node_modules/.bin/mocha ./../ProxyBundleTest/TestScripts/Integration/test.js --reporter mochawesome


if [ $? -eq 0 ]
then
mv ./mochawesome-report ./../ProxyBundleTest/TestReports/Integration
echo "Integration Test Passed"

else
mv ./mochawesome-report ./../ProxyBundleTest/TestReports/Integration
echo "Integration Test Failed"

echo $user 
echo $password 
echo $Organization 
echo $ProxyName
echo $Environment

sleep 5

./../node_modules/.bin/apigeetool undeploy -u $user -p $password -o $Organization  -n $ProxyName -e $Environment

   if [  -z $previous_revision  ]
        then
           echo "ci is not deployed before"
   else
           ./../node_modules/.bin/apigeetool deployExistingRevision -u $user -p $password -o $Organization  -n $ProxyName -e $Environment -r $previous_revision
		        echo "successfully rollback "

    fi
      
 fi



