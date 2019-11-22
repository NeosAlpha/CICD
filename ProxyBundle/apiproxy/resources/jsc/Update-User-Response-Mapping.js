   var response = JSON.parse(context.getVariable('response.content'));
var newresponse;
if(response.submitDocumentResponse.submitDocumentReturn.ack=="success"){
responseStatusCode=204;
context.setVariable('response.content', null);
}


else if(response.submitDocumentResponse.submitDocumentReturn.errors){
newresponse=response.submitDocumentResponse.submitDocumentReturn.errors;
responseStatusCode=400;
context.setVariable("triggerError", "true");
context.setVariable('response.content', JSON.stringify(newresponse));
}
context.setVariable("response.status.code", responseStatusCode)

