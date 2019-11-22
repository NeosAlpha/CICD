 var response = JSON.parse(context.getVariable('response.content'));
var newresponse;
if(response.submitDocumentResponse.submitDocumentReturn.cancellationRequestResponse){
    

    newresponse = {};
    
    if ('status' in response.submitDocumentResponse.submitDocumentReturn.cancellationRequestResponse)
        newresponse["status"] = response.submitDocumentResponse.submitDocumentReturn.cancellationRequestResponse.status;
    if ('statusDescription' in response.submitDocumentResponse.submitDocumentReturn.cancellationRequestResponse)
        newresponse["statusDescription"] = response.submitDocumentResponse.submitDocumentReturn.cancellationRequestResponse.statusDescription;
    if ('timestamp' in response.submitDocumentResponse.submitDocumentReturn.cancellationRequestResponse)
        newresponse["timestamp"] = response.submitDocumentResponse.submitDocumentReturn.cancellationRequestResponse.timestamp;
   
responseStatusCode=200;
}


else if(response.submitDocumentResponse.submitDocumentReturn.errors){
newresponse=response.submitDocumentResponse.submitDocumentReturn.errors;
responseStatusCode=400;
context.setVariable("triggerError", "true");
}
context.setVariable('response.content', JSON.stringify(newresponse));
context.setVariable("response.status.code", responseStatusCode)