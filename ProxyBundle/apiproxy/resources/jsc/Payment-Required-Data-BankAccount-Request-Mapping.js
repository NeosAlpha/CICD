var userID = context.getVariable('urirequest.userID');
var bankID = context.getVariable('urirequest.bankID');
var amount = context.getVariable('urirequest.amount');
var currency = context.getVariable('urirequest.currency');
var payerType = context.getVariable('urirequest.payerType');
var serviceLevel = context.getVariable('urirequest.serviceLevel');
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
            "ns14": "http://customer.endpoint.earthport.com/api/merchant/v1/services/getPayoutRequiredData",
            "ns1": "http://customer.endpoint.earthport.com/api/merchant/v2/components/core",
            "ns4": "http://customer.endpoint.earthport.com/api/merchant/v3/components/bankBase"
        },
        "ns14:getPayoutRequiredData": {}
    }
};
var ver = {
    "version": "1.1"
};
latestrequest["parameters"]["ns14:getPayoutRequiredData"]["#attrs"] = ver;

latestrequest["parameters"]["ns14:getPayoutRequiredData"]["ns14:getPayoutRequiredDataForBank"] = {};
latestrequest["parameters"]["ns14:getPayoutRequiredData"]["ns14:getPayoutRequiredDataForBank"]["ns14:usersBankID"] = {};
latestrequest["parameters"]["ns14:getPayoutRequiredData"]["ns14:getPayoutRequiredDataForBank"]["ns14:usersBankID"]["ns4:userID"] = {};
latestrequest["parameters"]["ns14:getPayoutRequiredData"]["ns14:getPayoutRequiredDataForBank"]["ns14:usersBankID"]["ns4:benBankID"] = {};
if(idType=='earthport'){
latestrequest["parameters"]["ns14:getPayoutRequiredData"]["ns14:getPayoutRequiredDataForBank"]["ns14:usersBankID"]["ns4:userID"]["ns1:epUserID"]=userID;
latestrequest["parameters"]["ns14:getPayoutRequiredData"]["ns14:getPayoutRequiredDataForBank"]["ns14:usersBankID"]["ns4:benBankID"]["ns4:epBankID"]=bankID;
}
else if(idType=='merchant'){
latestrequest["parameters"]["ns14:getPayoutRequiredData"]["ns14:getPayoutRequiredDataForBank"]["ns14:usersBankID"]["ns4:userID"]["ns1:merchantUserID"]=userID;
latestrequest["parameters"]["ns14:getPayoutRequiredData"]["ns14:getPayoutRequiredDataForBank"]["ns14:usersBankID"]["ns4:benBankID"]["ns4:merchantBankID"]=bankID;
}


if(amount!==null && amount!==''){
    latestrequest["parameters"]["ns14:getPayoutRequiredData"]["ns14:getPayoutRequiredDataForBank"]["ns14:amount"]={};
    latestrequest["parameters"]["ns14:getPayoutRequiredData"]["ns14:getPayoutRequiredDataForBank"]["ns14:amount"]["ns1:amount"] = amount;
    if(currency!==null && currency!==''){
    latestrequest["parameters"]["ns14:getPayoutRequiredData"]["ns14:getPayoutRequiredDataForBank"]["ns14:amount"]["ns1:currency"] = currency;
    }
}

if(payerType!==null && payerType!==''){
 latestrequest["parameters"]["ns14:getPayoutRequiredData"]["ns14:getPayoutRequiredDataForBank"]["ns14:payerType"] = payerType;
}

if(serviceLevel!==null && serviceLevel!==''){
 latestrequest["parameters"]["ns14:getPayoutRequiredData"]["ns14:getPayoutRequiredDataForBank"]["ns14:serviceLevel"] = serviceLevel;
}



context.setVariable('request.content', JSON.stringify(latestrequest));
