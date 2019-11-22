  var response = JSON.parse(context.getVariable('response.content'));
 var newresponse = {};
 
 if(response.submitDocumentResponse.submitDocumentReturn.searchTransactionsResponse){
     
 
newresponse["transactions"]=[];

if(response.submitDocumentResponse.submitDocumentReturn.searchTransactionsResponse.financialTransactions!="NULL"){

if(Array.isArray(response.submitDocumentResponse.submitDocumentReturn.searchTransactionsResponse.financialTransactions.financialTransaction)){
var total=response.submitDocumentResponse.submitDocumentReturn.searchTransactionsResponse.financialTransactions.financialTransaction.length;
for(var i=0;i<total;i++) {

    newresponse["transactions"][i]={};
    newresponse["transactions"][i]["transactionID"]={};
	
    if('epTransactionID' in response.submitDocumentResponse.submitDocumentReturn.searchTransactionsResponse.financialTransactions.financialTransaction[i]){
    newresponse["transactions"][i]["transactionID"]["epTransactionID"]=response.submitDocumentResponse.submitDocumentReturn.searchTransactionsResponse.financialTransactions.financialTransaction[i].epTransactionID;
    }

	if('merchantTransactionReference' in response.submitDocumentResponse.submitDocumentReturn.searchTransactionsResponse.financialTransactions.financialTransaction[i]){
    newresponse["transactions"][i]["transactionID"]["merchantTransactionID"]=response.submitDocumentResponse.submitDocumentReturn.searchTransactionsResponse.financialTransactions.financialTransaction[i].merchantTransactionReference;
    }    
    
    if('timestamp' in response.submitDocumentResponse.submitDocumentReturn.searchTransactionsResponse.financialTransactions.financialTransaction[i]){
        newresponse["transactions"][i]["timestamp"]=response.submitDocumentResponse.submitDocumentReturn.searchTransactionsResponse.financialTransactions.financialTransaction[i].timestamp;
    }

    if('transactionType' in response.submitDocumentResponse.submitDocumentReturn.searchTransactionsResponse.financialTransactions.financialTransaction[i]){
        newresponse["transactions"][i]["transactionType"]=response.submitDocumentResponse.submitDocumentReturn.searchTransactionsResponse.financialTransactions.financialTransaction[i].transactionType;
    }

    if('transactionStatus' in response.submitDocumentResponse.submitDocumentReturn.searchTransactionsResponse.financialTransactions.financialTransaction[i]){
        newresponse["transactions"][i]["transactionStatus"]=response.submitDocumentResponse.submitDocumentReturn.searchTransactionsResponse.financialTransactions.financialTransaction[i].transactionStatus;
    }

    if('amount' in response.submitDocumentResponse.submitDocumentReturn.searchTransactionsResponse.financialTransactions.financialTransaction[i]){
        newresponse["transactions"][i]["amount"]=response.submitDocumentResponse.submitDocumentReturn.searchTransactionsResponse.financialTransactions.financialTransaction[i].amount;
    }

    if('movementType' in response.submitDocumentResponse.submitDocumentReturn.searchTransactionsResponse.financialTransactions.financialTransaction[i]){
        newresponse["transactions"][i]["movementType"]=response.submitDocumentResponse.submitDocumentReturn.searchTransactionsResponse.financialTransactions.financialTransaction[i].movementType;
    }

    if('statementDetails' in response.submitDocumentResponse.submitDocumentReturn.searchTransactionsResponse.financialTransactions.financialTransaction[i]){
        newresponse["transactions"][i]["statementDetails"]=response.submitDocumentResponse.submitDocumentReturn.searchTransactionsResponse.financialTransactions.financialTransaction[i].statementDetails;
    }

    if('usersBankId' in response.submitDocumentResponse.submitDocumentReturn.searchTransactionsResponse.financialTransactions.financialTransaction[i]){
        newresponse["transactions"][i]["usersBankId"]=response.submitDocumentResponse.submitDocumentReturn.searchTransactionsResponse.financialTransactions.financialTransaction[i].usersBankId;
    }

    if('userID' in response.submitDocumentResponse.submitDocumentReturn.searchTransactionsResponse.financialTransactions.financialTransaction[i]){
        newresponse["transactions"][i]["userID"]=response.submitDocumentResponse.submitDocumentReturn.searchTransactionsResponse.financialTransactions.financialTransaction[i].userID;
    }

    if('description' in response.submitDocumentResponse.submitDocumentReturn.searchTransactionsResponse.financialTransactions.financialTransaction[i]){
        newresponse["transactions"][i]["description"]=response.submitDocumentResponse.submitDocumentReturn.searchTransactionsResponse.financialTransactions.financialTransaction[i].description;
    }

    

}
}

else if("financialTransaction" in response.submitDocumentResponse.submitDocumentReturn.searchTransactionsResponse.financialTransactions){

    newresponse["transactions"][0]={};
    newresponse["transactions"][0]["transactionID"]={};
    if('epTransactionID' in response.submitDocumentResponse.submitDocumentReturn.searchTransactionsResponse.financialTransactions.financialTransaction){
    newresponse["transactions"][0]["transactionID"]["epTransactionID"]=response.submitDocumentResponse.submitDocumentReturn.searchTransactionsResponse.financialTransactions.financialTransaction.epTransactionID;
    }    
    
    if('timestamp' in response.submitDocumentResponse.submitDocumentReturn.searchTransactionsResponse.financialTransactions.financialTransaction){
        newresponse["transactions"][0]["timestamp"]=response.submitDocumentResponse.submitDocumentReturn.searchTransactionsResponse.financialTransactions.financialTransaction.timestamp;
    }

    if('transactionType' in response.submitDocumentResponse.submitDocumentReturn.searchTransactionsResponse.financialTransactions.financialTransaction){
        newresponse["transactions"][0]["transactionType"]=response.submitDocumentResponse.submitDocumentReturn.searchTransactionsResponse.financialTransactions.financialTransaction.transactionType;
    }

    if('transactionStatus' in response.submitDocumentResponse.submitDocumentReturn.searchTransactionsResponse.financialTransactions.financialTransaction){
        newresponse["transactions"][0]["transactionStatus"]=response.submitDocumentResponse.submitDocumentReturn.searchTransactionsResponse.financialTransactions.financialTransaction.transactionStatus;
    }

    if('amount' in response.submitDocumentResponse.submitDocumentReturn.searchTransactionsResponse.financialTransactions.financialTransaction){
        newresponse["transactions"][0]["amount"]=response.submitDocumentResponse.submitDocumentReturn.searchTransactionsResponse.financialTransactions.financialTransaction.amount;
    }

    if('movementType' in response.submitDocumentResponse.submitDocumentReturn.searchTransactionsResponse.financialTransactions.financialTransaction){
        newresponse["transactions"][0]["movementType"]=response.submitDocumentResponse.submitDocumentReturn.searchTransactionsResponse.financialTransactions.financialTransaction.movementType;
    }

    if('statementDetails' in response.submitDocumentResponse.submitDocumentReturn.searchTransactionsResponse.financialTransactions.financialTransaction){
        newresponse["transactions"][0]["statementDetails"]=response.submitDocumentResponse.submitDocumentReturn.searchTransactionsResponse.financialTransactions.financialTransaction.statementDetails;
    }

    if('usersBankId' in response.submitDocumentResponse.submitDocumentReturn.searchTransactionsResponse.financialTransactions.financialTransaction){
        newresponse["transactions"][0]["usersBankId"]=response.submitDocumentResponse.submitDocumentReturn.searchTransactionsResponse.financialTransactions.financialTransaction.usersBankId;
    }

    if('userID' in response.submitDocumentResponse.submitDocumentReturn.searchTransactionsResponse.financialTransactions.financialTransaction){
        newresponse["transactions"][0]["userID"]=response.submitDocumentResponse.submitDocumentReturn.searchTransactionsResponse.financialTransactions.financialTransaction.userID;
    }

    if('description' in response.submitDocumentResponse.submitDocumentReturn.searchTransactionsResponse.financialTransactions.financialTransaction){
        newresponse["transactions"][0]["description"]=response.submitDocumentResponse.submitDocumentReturn.searchTransactionsResponse.financialTransactions.financialTransaction.description;
    }

    


}


}



if('paginationResult' in response.submitDocumentResponse.submitDocumentReturn.searchTransactionsResponse)
newresponse["paginationResult"]=response.submitDocumentResponse.submitDocumentReturn.searchTransactionsResponse.paginationResult;


responseStatusCode = 200;
}

else if ('errors' in response.submitDocumentResponse.submitDocumentReturn) {
     newresponse = response.submitDocumentResponse.submitDocumentReturn.errors;
     responseStatusCode = 400;
     context.setVariable("triggerError", "true");
 }



     context.setVariable('response.content', JSON.stringify(newresponse));
      context.setVariable("response.status.code", responseStatusCode);