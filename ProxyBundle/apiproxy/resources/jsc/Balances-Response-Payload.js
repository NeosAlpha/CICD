var response = JSON.parse(context.getVariable('response.content'));

if(response.submitDocumentResponse.submitDocumentReturn.getBalanceResponse){
    
if (Array.isArray(response.submitDocumentResponse.submitDocumentReturn.getBalanceResponse.balance)) {
    var newresponse = [];
    var totalId = response.submitDocumentResponse.submitDocumentReturn.getBalanceResponse.balance.length;
    if (totalId > 0) {

        for (var i = 0; i < totalId; i++) {
            var id = {
                "currency": response.submitDocumentResponse.submitDocumentReturn.getBalanceResponse.balance[i].currency,
                "amount": response.submitDocumentResponse.submitDocumentReturn.getBalanceResponse.balance[i].amount

            };
            newresponse[i] = {};
            newresponse[i]["balance"] = id;
            if ('balanceTimestamp' in response.submitDocumentResponse.submitDocumentReturn.getBalanceResponse.balance[i])
                newresponse[i]["balanceTimestamp"] = response.submitDocumentResponse.submitDocumentReturn.getBalanceResponse.balance[i].balanceTimestamp;
            if ('lastMovementTimestamp' in response.submitDocumentResponse.submitDocumentReturn.getBalanceResponse.balance[i])
                newresponse[i]["lastMovementTimestamp"] = response.submitDocumentResponse.submitDocumentReturn.getBalanceResponse.balance[i].lastMovementTimestamp;
        }
    }

} 
else if ('balance' in response.submitDocumentResponse.submitDocumentReturn.getBalanceResponse) {
    var newresponse = [];
    newresponse[0]={};
    newresponse[0]["balance"] = {};
    if ('currency' in response.submitDocumentResponse.submitDocumentReturn.getBalanceResponse.balance)
        newresponse[0]["balance"]["currency"] = response.submitDocumentResponse.submitDocumentReturn.getBalanceResponse.balance.currency;
    if ('amount' in response.submitDocumentResponse.submitDocumentReturn.getBalanceResponse.balance)
        newresponse[0]["balance"]["amount"] = response.submitDocumentResponse.submitDocumentReturn.getBalanceResponse.balance.amount;
    if ('balanceTimestamp' in response.submitDocumentResponse.submitDocumentReturn.getBalanceResponse.balance)
        newresponse[0]["balanceTimestamp"] = response.submitDocumentResponse.submitDocumentReturn.getBalanceResponse.balance.balanceTimestamp;
    if ('lastMovementTimestamp' in response.submitDocumentResponse.submitDocumentReturn.getBalanceResponse.balance)
        newresponse[0]["lastMovementTimestamp"] = response.submitDocumentResponse.submitDocumentReturn.getBalanceResponse.balance.lastMovementTimestamp;

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

