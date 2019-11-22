var latestrequest ={
"parameters": {
  "@xmlns": {
    "ns21": "http://customer.endpoint.earthport.com/api/merchant/v2/services/getPayerIdentity",
    "ns1": "http://customer.endpoint.earthport.com/api/merchant/v2/components/core"
  },
  "ns21:getPayerIdentity": {

  }
}
};

var b = {
  "version": "2.1"
};

latestrequest.parameters["ns21:getPayerIdentity"]["#attrs"] = b;

var userID = context.getVariable('urirequest.userID');
var idType = context.getVariable('urirequest.idType');

if (idType===null || idType==='')
{
idType= 'earthport';
}
else{
  idType=idType.toLowerCase();
}

latestrequest.parameters["ns21:getPayerIdentity"]["ns21:userID"]={};

if(idType=='earthport') 	
latestrequest.parameters["ns21:getPayerIdentity"]["ns21:userID"]["ns1:epUserID"]= userID; 
else if(idType=='merchant') 	
latestrequest.parameters["ns21:getPayerIdentity"]["ns21:userID"]["ns1:merchantUserID"]= userID; 



context.setVariable('request.content', JSON.stringify(latestrequest));