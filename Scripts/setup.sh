
#delete the old apiproxy 
#rm -rf ./../ProxyBundle/apiproxy 

### Check if a directory does not exist ###
if [ -d "./../ProxyBundle/apiproxy" ] 
then
    rm -rf ./../ProxyBundle/apiproxy 
fi

cd ./..

proxyName=$ProxyName".zip"

node_modules/.bin/extract-zip node_modules/.bin/$proxyName

#move the apiproxy folder to proxyBundle folder

mv ./apiproxy ProxyBundle/

#delete old reports of unitTest
rm -rf ./ProxyBundleTest/TestReports/UnitTest/mochawesome-report

echo "Successully setup!!!"
