 var response = JSON.parse(context.getVariable('response.content'));

var newresponse = {};
if ("getBulkFXQuoteResponse" in response.submitDocumentResponse.submitDocumentReturn) {


//for array 
if ("fxTicketID" in response.submitDocumentResponse.submitDocumentReturn.getBulkFXQuoteResponse)
    newresponse.fxTicketID = response.submitDocumentResponse.submitDocumentReturn.getBulkFXQuoteResponse.fxTicketID;
if ("expiryTimestamp" in response.submitDocumentResponse.submitDocumentReturn.getBulkFXQuoteResponse)
    newresponse.expiryTimestamp = response.submitDocumentResponse.submitDocumentReturn.getBulkFXQuoteResponse.expiryTimestamp;
if (Array.isArray(response.submitDocumentResponse.submitDocumentReturn.getBulkFXQuoteResponse.bulkFXDetail)) {
    var total = response.submitDocumentResponse.submitDocumentReturn.getBulkFXQuoteResponse.bulkFXDetail.length;
    newresponse.bulkFXDetail = [];
    for (i = 0; i < total; i++) {
        var temp = {};
        if ("sellCurrency" in response.submitDocumentResponse.submitDocumentReturn.getBulkFXQuoteResponse.bulkFXDetail[i])
            temp.sellCurrency = response.submitDocumentResponse.submitDocumentReturn.getBulkFXQuoteResponse.bulkFXDetail[i].sellCurrency;
        if ("buyCountry" in response.submitDocumentResponse.submitDocumentReturn.getBulkFXQuoteResponse.bulkFXDetail[i])
            temp.buyCountry = response.submitDocumentResponse.submitDocumentReturn.getBulkFXQuoteResponse.bulkFXDetail[i].buyCountry;
        if ("buyCurrency" in response.submitDocumentResponse.submitDocumentReturn.getBulkFXQuoteResponse.bulkFXDetail[i])
            temp.buyCurrency = response.submitDocumentResponse.submitDocumentReturn.getBulkFXQuoteResponse.bulkFXDetail[i].buyCurrency;
        if ("serviceLevel" in response.submitDocumentResponse.submitDocumentReturn.getBulkFXQuoteResponse.bulkFXDetail[i])
            temp.serviceLevel = response.submitDocumentResponse.submitDocumentReturn.getBulkFXQuoteResponse.bulkFXDetail[i].serviceLevel;
        if ("buyFxRate" in response.submitDocumentResponse.submitDocumentReturn.getBulkFXQuoteResponse.bulkFXDetail[i])
            temp.buyFxRate = response.submitDocumentResponse.submitDocumentReturn.getBulkFXQuoteResponse.bulkFXDetail[i].buyFxRate;
        if ("sellFxRate" in response.submitDocumentResponse.submitDocumentReturn.getBulkFXQuoteResponse.bulkFXDetail[i])
            temp.sellFxRate = response.submitDocumentResponse.submitDocumentReturn.getBulkFXQuoteResponse.bulkFXDetail[i].sellFxRate;

        newresponse.bulkFXDetail[i] = temp;
    }
}
// for object 
else if ("bulkFXDetail" in response.submitDocumentResponse.submitDocumentReturn.getBulkFXQuoteResponse) {
    
    newresponse.bulkFXDetail = [];
    if ("bulkFXDetail" in response.submitDocumentResponse.submitDocumentReturn.getBulkFXQuoteResponse)
        newresponse.bulkFXDetail[0] = response.submitDocumentResponse.submitDocumentReturn.getBulkFXQuoteResponse.bulkFXDetail;

}
    
   responseStatusCode = 200; 
}





else if ('errors' in response.submitDocumentResponse.submitDocumentReturn) {
     newresponse = response.submitDocumentResponse.submitDocumentReturn.errors;
     responseStatusCode = 400;
     context.setVariable("triggerError", "true");
 }
 //delete response.NumberToWordsResponse;
 context.setVariable('response.content', JSON.stringify(newresponse));
 context.setVariable("response.status.code", responseStatusCode)