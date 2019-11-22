var response = JSON.parse(context.getVariable('response.content'));
var newresponse = {};

if(response.submitDocumentResponse.submitDocumentReturn.getStatementResponse){
    

newresponse["statementLineItems"]=[];

if(Array.isArray(response.submitDocumentResponse.submitDocumentReturn.getStatementResponse.statementLineItemsList.statementLineItem)){
var total=response.submitDocumentResponse.submitDocumentReturn.getStatementResponse.statementLineItemsList.statementLineItem.length;
for(var i=0;i<total;i++) {

   newresponse["statementLineItems"][i]={};
   newresponse["statementLineItems"][i]["transaction"]={};
   newresponse["statementLineItems"][i]["transaction"]["transactionID"]={};
   if('epTransactionID' in response.submitDocumentResponse.submitDocumentReturn.getStatementResponse.statementLineItemsList.statementLineItem[i].transaction){
   newresponse["statementLineItems"][i]["transaction"]["transactionID"]["epTransactionID"]=response.submitDocumentResponse.submitDocumentReturn.getStatementResponse.statementLineItemsList.statementLineItem[i].transaction.epTransactionID;
   }    
   
   if('timestamp' in response.submitDocumentResponse.submitDocumentReturn.getStatementResponse.statementLineItemsList.statementLineItem[i].transaction){
       newresponse["statementLineItems"][i]["transaction"]["timestamp"]=response.submitDocumentResponse.submitDocumentReturn.getStatementResponse.statementLineItemsList.statementLineItem[i].transaction.timestamp;
   }

   if('transactionType' in response.submitDocumentResponse.submitDocumentReturn.getStatementResponse.statementLineItemsList.statementLineItem[i].transaction){
       newresponse["statementLineItems"][i]["transaction"]["transactionType"]=response.submitDocumentResponse.submitDocumentReturn.getStatementResponse.statementLineItemsList.statementLineItem[i].transaction.transactionType;
   }

   if('transactionStatus' in response.submitDocumentResponse.submitDocumentReturn.getStatementResponse.statementLineItemsList.statementLineItem[i].transaction){
       newresponse["statementLineItems"][i]["transaction"]["transactionStatus"]=response.submitDocumentResponse.submitDocumentReturn.getStatementResponse.statementLineItemsList.statementLineItem[i].transaction.transactionStatus;
   }

   if('amount' in response.submitDocumentResponse.submitDocumentReturn.getStatementResponse.statementLineItemsList.statementLineItem[i].transaction){
       newresponse["statementLineItems"][i]["transaction"]["amount"]=response.submitDocumentResponse.submitDocumentReturn.getStatementResponse.statementLineItemsList.statementLineItem[i].transaction.amount;
   }

   if('movementType' in response.submitDocumentResponse.submitDocumentReturn.getStatementResponse.statementLineItemsList.statementLineItem[i].transaction){
       newresponse["statementLineItems"][i]["transaction"]["movementType"]=response.submitDocumentResponse.submitDocumentReturn.getStatementResponse.statementLineItemsList.statementLineItem[i].transaction.movementType;
   }

   if('statementDetails' in response.submitDocumentResponse.submitDocumentReturn.getStatementResponse.statementLineItemsList.statementLineItem[i].transaction){
       newresponse["statementLineItems"][i]["transaction"]["statementDetails"]=response.submitDocumentResponse.submitDocumentReturn.getStatementResponse.statementLineItemsList.statementLineItem[i].transaction.statementDetails;
   }

   if('usersBankId' in response.submitDocumentResponse.submitDocumentReturn.getStatementResponse.statementLineItemsList.statementLineItem[i].transaction){
       newresponse["statementLineItems"][i]["transaction"]["usersBankId"]=response.submitDocumentResponse.submitDocumentReturn.getStatementResponse.statementLineItemsList.statementLineItem[i].transaction.usersBankId;
   }

   if('userID' in response.submitDocumentResponse.submitDocumentReturn.getStatementResponse.statementLineItemsList.statementLineItem[i].transaction){
       newresponse["statementLineItems"][i]["transaction"]["userID"]=response.submitDocumentResponse.submitDocumentReturn.getStatementResponse.statementLineItemsList.statementLineItem[i].transaction.userID;
   }

   if('description' in response.submitDocumentResponse.submitDocumentReturn.getStatementResponse.statementLineItemsList.statementLineItem[i].transaction){
       newresponse["statementLineItems"][i]["transaction"]["description"]=response.submitDocumentResponse.submitDocumentReturn.getStatementResponse.statementLineItemsList.statementLineItem[i].transaction.description;
   }

   
   if('balance' in response.submitDocumentResponse.submitDocumentReturn.getStatementResponse.statementLineItemsList.statementLineItem[i]){
       newresponse["statementLineItems"][i]["balance"]=response.submitDocumentResponse.submitDocumentReturn.getStatementResponse.statementLineItemsList.statementLineItem[i].balance;
   }

}
}

else if('NULL' == response.submitDocumentResponse.submitDocumentReturn.getStatementResponse.statementLineItemsList){
}
else if('statementLineItem' in response.submitDocumentResponse.submitDocumentReturn.getStatementResponse.statementLineItemsList){

   newresponse["statementLineItems"][0]={};
   newresponse["statementLineItems"][0]["transaction"]={};
   newresponse["statementLineItems"][0]["transaction"]["transactionID"]={};
   if('epTransactionID' in response.submitDocumentResponse.submitDocumentReturn.getStatementResponse.statementLineItemsList.statementLineItem.transaction){
   newresponse["statementLineItems"][0]["transaction"]["transactionID"]["epTransactionID"]=response.submitDocumentResponse.submitDocumentReturn.getStatementResponse.statementLineItemsList.statementLineItem.transaction.epTransactionID;
   }    
   
   if('timestamp' in response.submitDocumentResponse.submitDocumentReturn.getStatementResponse.statementLineItemsList.statementLineItem.transaction){
       newresponse["statementLineItems"][0]["transaction"]["timestamp"]=response.submitDocumentResponse.submitDocumentReturn.getStatementResponse.statementLineItemsList.statementLineItem.transaction.timestamp;
   }

   if('transactionType' in response.submitDocumentResponse.submitDocumentReturn.getStatementResponse.statementLineItemsList.statementLineItem.transaction){
       newresponse["statementLineItems"][0]["transaction"]["transactionType"]=response.submitDocumentResponse.submitDocumentReturn.getStatementResponse.statementLineItemsList.statementLineItem.transaction.transactionType;
   }

   if('transactionStatus' in response.submitDocumentResponse.submitDocumentReturn.getStatementResponse.statementLineItemsList.statementLineItem.transaction){
       newresponse["statementLineItems"][0]["transaction"]["transactionStatus"]=response.submitDocumentResponse.submitDocumentReturn.getStatementResponse.statementLineItemsList.statementLineItem.transaction.transactionStatus;
   }

   if('amount' in response.submitDocumentResponse.submitDocumentReturn.getStatementResponse.statementLineItemsList.statementLineItem.transaction){
       newresponse["statementLineItems"][0]["transaction"]["amount"]=response.submitDocumentResponse.submitDocumentReturn.getStatementResponse.statementLineItemsList.statementLineItem.transaction.amount;
   }

   if('movementType' in response.submitDocumentResponse.submitDocumentReturn.getStatementResponse.statementLineItemsList.statementLineItem.transaction){
       newresponse["statementLineItems"][0]["transaction"]["movementType"]=response.submitDocumentResponse.submitDocumentReturn.getStatementResponse.statementLineItemsList.statementLineItem.transaction.movementType;
   }

   if('statementDetails' in response.submitDocumentResponse.submitDocumentReturn.getStatementResponse.statementLineItemsList.statementLineItem.transaction){
       newresponse["statementLineItems"][0]["transaction"]["statementDetails"]=response.submitDocumentResponse.submitDocumentReturn.getStatementResponse.statementLineItemsList.statementLineItem.transaction.statementDetails;
   }

   if('usersBankId' in response.submitDocumentResponse.submitDocumentReturn.getStatementResponse.statementLineItemsList.statementLineItem.transaction){
       newresponse["statementLineItems"][0]["transaction"]["usersBankId"]=response.submitDocumentResponse.submitDocumentReturn.getStatementResponse.statementLineItemsList.statementLineItem.transaction.usersBankId;
   }

   if('userID' in response.submitDocumentResponse.submitDocumentReturn.getStatementResponse.statementLineItemsList.statementLineItem.transaction){
       newresponse["statementLineItems"][0]["transaction"]["userID"]=response.submitDocumentResponse.submitDocumentReturn.getStatementResponse.statementLineItemsList.statementLineItem.transaction.userID;
   }

   if('description' in response.submitDocumentResponse.submitDocumentReturn.getStatementResponse.statementLineItemsList.statementLineItem.transaction){
       newresponse["statementLineItems"][0]["transaction"]["description"]=response.submitDocumentResponse.submitDocumentReturn.getStatementResponse.statementLineItemsList.statementLineItem.transaction.description;
   }

   
   if('balance' in response.submitDocumentResponse.submitDocumentReturn.getStatementResponse.statementLineItemsList.statementLineItem){
       newresponse["statementLineItems"][0]["balance"]=response.submitDocumentResponse.submitDocumentReturn.getStatementResponse.statementLineItemsList.statementLineItem.balance;
   }

}





if('paginationResult' in response.submitDocumentResponse.submitDocumentReturn.getStatementResponse)
newresponse["paginationResult"]=response.submitDocumentResponse.submitDocumentReturn.getStatementResponse.paginationResult;

if('openingBalance' in response.submitDocumentResponse.submitDocumentReturn.getStatementResponse){
newresponse["openingBalance"]={};
newresponse["openingBalance"]["balance"]={};
newresponse["openingBalance"]["balance"]["amount"]=response.submitDocumentResponse.submitDocumentReturn.getStatementResponse.openingBalance.amount;
newresponse["openingBalance"]["balance"]["currency"]=response.submitDocumentResponse.submitDocumentReturn.getStatementResponse.openingBalance.currency;
newresponse["openingBalance"]["balanceTimestamp"]=response.submitDocumentResponse.submitDocumentReturn.getStatementResponse.openingBalance.balanceTimestamp;
}

if('closingBalance' in response.submitDocumentResponse.submitDocumentReturn.getStatementResponse){
   newresponse["closingBalance"]={};
   newresponse["closingBalance"]["balance"]={};
   newresponse["closingBalance"]["balance"]["amount"]=response.submitDocumentResponse.submitDocumentReturn.getStatementResponse.closingBalance.amount;
   newresponse["closingBalance"]["balance"]["currency"]=response.submitDocumentResponse.submitDocumentReturn.getStatementResponse.closingBalance.currency;
   newresponse["closingBalance"]["balanceTimestamp"]=response.submitDocumentResponse.submitDocumentReturn.getStatementResponse.closingBalance.balanceTimestamp;
}
responseStatusCode = 200;
}

else if ('errors' in response.submitDocumentResponse.submitDocumentReturn) {
    newresponse = response.submitDocumentResponse.submitDocumentReturn.errors;
    responseStatusCode = 400;
    context.setVariable("triggerError", "true");
}



    context.setVariable('response.content', JSON.stringify(newresponse));
     context.setVariable("response.status.code", responseStatusCode);