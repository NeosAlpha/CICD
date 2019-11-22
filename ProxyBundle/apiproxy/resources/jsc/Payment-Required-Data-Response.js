 
var response=JSON.parse(context.getVariable('response.content'));
var newresponse={};

function format(json_string, key_to_skip) {
   return JSON.parse(json_string, function (key, value) {
      var array_keys = new Array('beneficiaryIdentityFieldGroup','beneficiaryIdentityField','beneficiaryBankAccountFieldGroup','beneficiaryBankAccountField');
       if (key !== key_to_skip && value!="NULL") {

         if(array_keys.indexOf(key)!=-1){
           if(Array.isArray(value)){
             return value;
           }
           else {
             return [].concat(value);
           }
         }
         else {
           return value;
         }


       }
   });
}

response=JSON.parse(JSON.stringify(format(JSON.stringify(response), 'TEXT')));

if ("getPayoutRequiredDataResponse" in response.submitDocumentResponse.submitDocumentReturn) {
newresponse = response.submitDocumentResponse.submitDocumentReturn.getPayoutRequiredDataResponse;
if(newresponse.getPayoutRequiredDataForCountryCurrency){
delete newresponse.getPayoutRequiredDataForCountryCurrency;
}
if(newresponse.getPayoutRequiredDataForBank){
delete newresponse.getPayoutRequiredDataForBank;
}
if('purposeOfPaymentFieldGroupsList' in newresponse){
if('TEXT' in newresponse.purposeOfPaymentFieldGroupsList)  
    delete newresponse.purposeOfPaymentFieldGroupsList.TEXT;
}



responseStatusCode=200;
}

if(response.submitDocumentResponse.submitDocumentReturn.errors){
newresponse=response.submitDocumentResponse.submitDocumentReturn.errors;
responseStatusCode=400;
context.setVariable("triggerError", "true");
}


context.setVariable('response.content', JSON.stringify(newresponse));
context.setVariable("response.status.code", responseStatusCode);