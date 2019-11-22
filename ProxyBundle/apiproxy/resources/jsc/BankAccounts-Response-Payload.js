  var response = JSON.parse(context.getVariable('response.content'));
var newresponse = {

};
// Validate Beneficiary Bank Account Response

if ("validateBeneficiaryBankAccountResponse" in response.submitDocumentResponse.submitDocumentReturn){
    newresponse["isBankAccountValid"] = response.submitDocumentResponse.submitDocumentReturn.validateBeneficiaryBankAccountResponse.isBankAccountValid;
     responseStatusCode = 200;

    
}




 if ('errors' in response.submitDocumentResponse.submitDocumentReturn) {
     newresponse = response.submitDocumentResponse.submitDocumentReturn.errors;
     responseStatusCode = 400;
     context.setVariable("triggerError", "true");
 }
 //delete response.NumberToWordsResponse;
 context.setVariable('response.content', JSON.stringify(newresponse));
 context.setVariable("response.status.code", responseStatusCode)