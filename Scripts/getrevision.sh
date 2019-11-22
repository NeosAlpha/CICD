revision_info=$(curl -H "Authorization: Basic cGF3YW4uc2hhcm1hQG5lb3NhbHBoYS5jb206UDEyMzQ1NkBq" "https://api.enterprise.apigee.com/v1/organizations/earthport-test/environments/ci/apis/Earthport_Payment_CICD/deployments" >>output.json) 

node revision.js

if [ $? -eq 0 ]
then
echo "if called"

	variable=$(cat output.json)
	count=0
	
		for i in $(echo $variable | sed "s/,/ /g")
		do
		    count=$((count+1))

			if [ $count -eq 1 ]
			then
			   echo echo "##teamcity[setParameter name='env.previous_revision' value='$i']" 
			fi

			if [ $count -eq 2 ]
			then
			   echo  "##teamcity[setParameter name='env.ProxyName' value='$i']" 
			fi
		
		done


else
echo "else called"

fi

rm -rf ./output.json 
