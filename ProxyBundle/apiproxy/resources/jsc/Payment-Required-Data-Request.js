
var latestrequest = {
    "parameters": {
        "@xmlns": {
            "ns14": "http://customer.endpoint.earthport.com/api/merchant/v1/services/getPayoutRequiredData"
        },
        "ns14:getPayoutRequiredData": {}
    }
};
var ver = {
    "version": "1.1"
};
latestrequest["parameters"]["ns14:getPayoutRequiredData"]["#attrs"] = ver;

latestrequest["parameters"]["ns14:getPayoutRequiredData"]["ns14:getPayoutRequiredDataForCountryCurrency"] = {};


var countryCode = context.getVariable('urirequest.countryCode');
var currencyCode = context.getVariable('urirequest.currencyCode');
var beneficiaryIdentityEntityType = context.getVariable('urirequest.beneficiaryIdentityEntityType');
var locale = context.getVariable('urirequest.locale');
var serviceLevel = context.getVariable('urirequest.serviceLevel');


if(countryCode!==null && countryCode!==''){
 latestrequest["parameters"]["ns14:getPayoutRequiredData"]["ns14:getPayoutRequiredDataForCountryCurrency"]["ns14:countryCode"] = countryCode;
}

if(currencyCode!==null && currencyCode!==''){
 latestrequest["parameters"]["ns14:getPayoutRequiredData"]["ns14:getPayoutRequiredDataForCountryCurrency"]["ns14:currencyCode"] = currencyCode;
}

if(beneficiaryIdentityEntityType!==null && beneficiaryIdentityEntityType!==''){
 latestrequest["parameters"]["ns14:getPayoutRequiredData"]["ns14:getPayoutRequiredDataForCountryCurrency"]["ns14:beneficiaryIdentityEntityType"] = beneficiaryIdentityEntityType;
}

if(locale!==null && locale!==''){
 latestrequest["parameters"]["ns14:getPayoutRequiredData"]["ns14:getPayoutRequiredDataForCountryCurrency"]["ns14:locale"] = locale;
}

if(serviceLevel!==null && serviceLevel!==''){
 latestrequest["parameters"]["ns14:getPayoutRequiredData"]["ns14:getPayoutRequiredDataForCountryCurrency"]["ns14:serviceLevel"] = serviceLevel;
}




context.setVariable('request.content', JSON.stringify(latestrequest));
