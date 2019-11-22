  var response = JSON.parse(context.getVariable('response.content'));
var newresponse = {

};
// Validate Beneficiary Bank Account Response

if ("validateBeneficiaryBankWithExpectedSettlementResponse" in response.submitDocumentResponse.submitDocumentReturn){
    newresponse = response.submitDocumentResponse.submitDocumentReturn.validateBeneficiaryBankWithExpectedSettlementResponse;
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