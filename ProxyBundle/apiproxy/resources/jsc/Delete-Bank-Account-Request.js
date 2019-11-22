var latestrequest ={
"parameters": {
"@xmlns": {
  "ns24": "http://customer.endpoint.earthport.com/api/merchant/v3/services/deleteBeneficiaryBankAccount",
  "ns1": "http://customer.endpoint.earthport.com/api/merchant/v2/components/core",
  "ns4": "http://customer.endpoint.earthport.com/api/merchant/v3/components/bankBase"
},
"ns24:deleteBeneficiaryBankAccount": {

}
}
};

var b = {
"version": "3.1"
};

latestrequest.parameters["ns24:deleteBeneficiaryBankAccount"]["#attrs"] = b;

var userID = context.getVariable('urirequest.userID');
var bankID = context.getVariable('urirequest.bankID');
var idType = context.getVariable('urirequest.idType');
if (idType===null || idType==='')
{
idType= 'earthport';
}
else{
  idType=idType.toLowerCase();
}

latestrequest.parameters["ns24:deleteBeneficiaryBankAccount"]["ns24:usersBankID"]={};
latestrequest.parameters["ns24:deleteBeneficiaryBankAccount"]["ns24:usersBankID"]["ns4:userID"]={};
latestrequest.parameters["ns24:deleteBeneficiaryBankAccount"]["ns24:usersBankID"]["ns4:benBankID"]={};

if(idType=='earthport'){
latestrequest.parameters["ns24:deleteBeneficiaryBankAccount"]["ns24:usersBankID"]["ns4:userID"]["ns1:epUserID"]= userID; 
latestrequest.parameters["ns24:deleteBeneficiaryBankAccount"]["ns24:usersBankID"]["ns4:benBankID"]["ns4:epBankID"]= bankID; 
}
else if(idType=='merchant'){
latestrequest.parameters["ns24:deleteBeneficiaryBankAccount"]["ns24:usersBankID"]["ns4:userID"]["ns1:merchantUserID"]= userID; 
latestrequest.parameters["ns24:deleteBeneficiaryBankAccount"]["ns24:usersBankID"]["ns4:benBankID"]["ns4:merchantBankID"]= bankID; 
}

context.setVariable('request.content', JSON.stringify(latestrequest));