var latestrequest ={
"parameters": {
"@xmlns": {
 "ns29": "http://customer.endpoint.earthport.com/api/merchant/v3/services/getBeneficiaryBankAccount",
 "ns1": "http://customer.endpoint.earthport.com/api/merchant/v2/components/core",
 "ns4": "http://customer.endpoint.earthport.com/api/merchant/v3/components/bankBase"
},
"ns29:getBeneficiaryBankAccount": {
}
}
};

var b = {
"version": "3.1"
};

latestrequest.parameters["ns29:getBeneficiaryBankAccount"]["#attrs"] = b;

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

latestrequest.parameters["ns29:getBeneficiaryBankAccount"]["ns29:usersBankID"]={};
latestrequest.parameters["ns29:getBeneficiaryBankAccount"]["ns29:usersBankID"]["ns4:userID"]={};
latestrequest.parameters["ns29:getBeneficiaryBankAccount"]["ns29:usersBankID"]["ns4:benBankID"]={};

if(idType=='earthport'){
latestrequest.parameters["ns29:getBeneficiaryBankAccount"]["ns29:usersBankID"]["ns4:userID"]["ns1:epUserID"]= userID; 
latestrequest.parameters["ns29:getBeneficiaryBankAccount"]["ns29:usersBankID"]["ns4:benBankID"]["ns4:epBankID"]= bankID; 
}

else if(idType=='merchant')
{
latestrequest.parameters["ns29:getBeneficiaryBankAccount"]["ns29:usersBankID"]["ns4:userID"]["ns1:merchantUserID"]= userID; 
latestrequest.parameters["ns29:getBeneficiaryBankAccount"]["ns29:usersBankID"]["ns4:benBankID"]["ns4:merchantBankID"]= bankID; 
}

context.setVariable('request.content', JSON.stringify(latestrequest));