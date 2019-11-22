 var response=JSON.parse(context.getVariable('response.content'));
var newresponse={};
//newresponse.ack=response.submitDocumentResponse.submitDocumentReturn.ack;
if(response.submitDocumentResponse.submitDocumentReturn.addBeneficiaryBankAccountResponse){
newresponse=response.submitDocumentResponse.submitDocumentReturn.addBeneficiaryBankAccountResponse.usersBankID;
responseStatusCode=200;
}
if(response.submitDocumentResponse.submitDocumentReturn.errors){
newresponse=response.submitDocumentResponse.submitDocumentReturn.errors;
responseStatusCode=400;
context.setVariable("triggerError", "true");
}
//delete response.NumberToWordsResponse;
context.setVariable('response.content', JSON.stringify(newresponse));
context.setVariable("response.status.code", responseStatusCode)