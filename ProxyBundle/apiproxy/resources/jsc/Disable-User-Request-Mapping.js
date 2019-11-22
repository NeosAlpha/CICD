var latestrequest ={
"parameters": {
 "@xmlns": {
   "ns25": "http://customer.endpoint.earthport.com/api/merchant/v2/services/disableUser",
   "ns1": "http://customer.endpoint.earthport.com/api/merchant/v2/components/core"
 },
 "ns25:disableUser": {

 }
}
};

var b = {
 "version": "2.0"
};

latestrequest.parameters["ns25:disableUser"]["#attrs"] = b;

var userID = context.getVariable('urirequest.userID');
var idType = context.getVariable('urirequest.idType');
if (idType===null || idType==='')
{
idType= 'earthport';
}
else{
  idType=idType.toLowerCase();
}

latestrequest.parameters["ns25:disableUser"]["ns25:userID"]={};


if(idType=='earthport')
latestrequest.parameters["ns25:disableUser"]["ns25:userID"]["ns1:epUserID"]= userID; 


else if(idType=='merchant')
latestrequest.parameters["ns25:disableUser"]["ns25:userID"]["ns1:merchantUserID"]= userID;


context.setVariable('request.content', JSON.stringify(latestrequest));