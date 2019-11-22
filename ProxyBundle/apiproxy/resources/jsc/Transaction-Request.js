var latestrequest ={
 "parameters": {
   "@xmlns": {"ns10": "http://customer.endpoint.earthport.com/api/merchant/v4/services/getTransactionDetail"},
   "ns10:getTransactionDetail": {
       
   }
 }
};


var b = {
   "version": "4.4"
};



latestrequest.parameters["ns10:getTransactionDetail"]["#attrs"] = b;

var idType = context.getVariable('urirequest.idType');
if (idType===null || idType==='')
{
idType= 'earthport';
}
else{
  idType=idType.toLowerCase();
}
var transactionID = context.getVariable('urirequest.transactionID');
var managedMerchantName = context.getVariable('urirequest.managedMerchantName');

if(managedMerchantName!==null && managedMerchantName!==''){
latestrequest.parameters["ns10:getTransactionDetail"]["ns10:managedMerchantIdentity"]=managedMerchantName;
}

latestrequest.parameters["ns10:getTransactionDetail"]["ns10:transactionID"]={};
 if(idType=='earthport')
latestrequest.parameters["ns10:getTransactionDetail"]["ns10:transactionID"]["ns10:epTransactionID"]= transactionID; 
else if(idType=='merchant')
latestrequest.parameters["ns10:getTransactionDetail"]["ns10:transactionID"]["ns10:merchantTransactionID"]= transactionID; 



context.setVariable('request.content', JSON.stringify(latestrequest));