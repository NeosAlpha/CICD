 var response = JSON.parse(context.getVariable('response.content'));

if(response.submitDocumentResponse.submitDocumentReturn.getSettlementCalendarResponse){
var newresponse = {};

 if ('responseTimeStamp' in response.submitDocumentResponse.submitDocumentReturn.getSettlementCalendarResponse)
                newresponse["responseTimeStamp"] = response.submitDocumentResponse.submitDocumentReturn.getSettlementCalendarResponse.responseTimeStamp;
           

if (Array.isArray(response.submitDocumentResponse.submitDocumentReturn.getSettlementCalendarResponse.payoutDetailCalendar.payoutSettlementCalendar)) {
    var totalId = response.submitDocumentResponse.submitDocumentReturn.getSettlementCalendarResponse.payoutDetailCalendar.payoutSettlementCalendar.length;
    if (totalId > 0) {

        for (var i = 0; i < totalId; i++) {
            newresponse["settlementCalendar"]=response.submitDocumentResponse.submitDocumentReturn.getSettlementCalendarResponse.payoutDetailCalendar.payoutSettlementCalendar;
            }
    }

} 
else if ('payoutSettlementCalendar' in response.submitDocumentResponse.submitDocumentReturn.getSettlementCalendarResponse.payoutDetailCalendar) {
    
            newresponse["settlementCalendar"]=[];
            newresponse["settlementCalendar"][0]=response.submitDocumentResponse.submitDocumentReturn.getSettlementCalendarResponse.payoutDetailCalendar.payoutSettlementCalendar;
} 



responseStatusCode=200;
}


else if(response.submitDocumentResponse.submitDocumentReturn.errors){
newresponse=response.submitDocumentResponse.submitDocumentReturn.errors;
responseStatusCode=400;
context.setVariable("triggerError", "true");
}
context.setVariable('response.content', JSON.stringify(newresponse));
context.setVariable("response.status.code", responseStatusCode)

