var response=JSON.parse(context.getVariable('response.content'));
var newresponse={};
//newresponse.ack=response.submitDocumentResponse.submitDocumentReturn.ack;
if(response.submitDocumentResponse.submitDocumentReturn.createUserResponse){
newresponse=response.submitDocumentResponse.submitDocumentReturn.createUserResponse.userID;
// if(context.getVariable('developerEmail'))
// newresponse["Email"]=context.getVariable('developerEmail');
// if(context.getVariable('developerPassword'))
// newresponse["Password"]=context.getVariable('developerPassword');
responseStatusCode=200;
}
if(response.submitDocumentResponse.submitDocumentReturn.errors){
newresponse=response.submitDocumentResponse.submitDocumentReturn.errors;
responseStatusCode=400;
context.setVariable("triggerError", "true");
}

if("Fault" in  response){
    responseStatusCode=500;
context.setVariable("triggerError", "true");
}
//delete response.NumberToWordsResponse;
context.setVariable('response.content', JSON.stringify(newresponse));
context.setVariable("response.status.code", responseStatusCode)