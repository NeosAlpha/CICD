var request = JSON.parse(context.getVariable('request.content')); 

var userID = context.getVariable('urirequest.userID');
var idType = context.getVariable('urirequest.idType');
if (idType===null || idType==='')
{
idType= 'earthport';
}
else{
  idType=idType.toLowerCase();
}

var latestrequest = {
 "parameters": {
   "@xmlns": {
     "ns30": "http://customer.endpoint.earthport.com/api/merchant/v2/services/addDepositReference",
     "ns1": "http://customer.endpoint.earthport.com/api/merchant/v2/components/core"
   },
   "ns30:addDepositReference": {}
 }
};
var ver = {
 "version": "2.0"
};
latestrequest["parameters"]["ns30:addDepositReference"]["#attrs"] = ver;
if("depositReference" in request){
   latestrequest["parameters"]["ns30:addDepositReference"]["ns30:userID"]={};
 if(idType=='earthport')
 latestrequest["parameters"]["ns30:addDepositReference"]["ns30:userID"]["ns1:epUserID"]=userID;
 else if(idType=='merchant')
 latestrequest["parameters"]["ns30:addDepositReference"]["ns30:userID"]["ns1:merchantUserID"]=userID;

 latestrequest["parameters"]["ns30:addDepositReference"]["ns30:depositReference"]=request.depositReference;
}


context.setVariable('request.content', JSON.stringify(latestrequest));