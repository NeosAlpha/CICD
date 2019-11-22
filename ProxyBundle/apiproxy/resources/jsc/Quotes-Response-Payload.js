 var response = JSON.parse(context.getVariable('response.content'));

var newresponse = {};
if ("getFXQuoteResponse" in response.submitDocumentResponse.submitDocumentReturn) {
    newresponse["fxTicketID"] = response.submitDocumentResponse.submitDocumentReturn.getFXQuoteResponse.fxTicketID;
    context.setVariable("response.fxTicketID", response.submitDocumentResponse.submitDocumentReturn.getFXQuoteResponse.fxTicketID)
    if ("fxDetail" in response.submitDocumentResponse.submitDocumentReturn.getFXQuoteResponse)
        newresponse["fxDetail"] = {};
    newresponse["fxDetail"]["sellAmount"] = {};
    if ("currency" in response.submitDocumentResponse.submitDocumentReturn.getFXQuoteResponse.fxDetail.sellAmount)
        newresponse["fxDetail"]["sellAmount"]["currency"] = response.submitDocumentResponse.submitDocumentReturn.getFXQuoteResponse.fxDetail.sellAmount.currency;
    if ("amount" in response.submitDocumentResponse.submitDocumentReturn.getFXQuoteResponse.fxDetail.sellAmount)
        newresponse["fxDetail"]["sellAmount"]["amount"] = response.submitDocumentResponse.submitDocumentReturn.getFXQuoteResponse.fxDetail.sellAmount.amount;
    newresponse["fxDetail"]["buyAmount"] = {};
    if ("currency" in response.submitDocumentResponse.submitDocumentReturn.getFXQuoteResponse.fxDetail.buyAmount)
        newresponse["fxDetail"]["buyAmount"]["currency"] = response.submitDocumentResponse.submitDocumentReturn.getFXQuoteResponse.fxDetail.buyAmount.currency;
    if ("amount" in response.submitDocumentResponse.submitDocumentReturn.getFXQuoteResponse.fxDetail.buyAmount)
        newresponse["fxDetail"]["buyAmount"]["amount"] = response.submitDocumentResponse.submitDocumentReturn.getFXQuoteResponse.fxDetail.buyAmount.amount;
    newresponse["fxDetail"]["fxRate"] = {};
    newresponse["fxDetail"]["fxRate"]["sellCurrency"] = response.submitDocumentResponse.submitDocumentReturn.getFXQuoteResponse.fxDetail.fxRate.sellCurrency;
    newresponse["fxDetail"]["fxRate"]["buyCurrency"] = response.submitDocumentResponse.submitDocumentReturn.getFXQuoteResponse.fxDetail.fxRate.buyCurrency;
    newresponse["fxDetail"]["fxRate"]["rate"] = response.submitDocumentResponse.submitDocumentReturn.getFXQuoteResponse.fxDetail.fxRate.rate;

    
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