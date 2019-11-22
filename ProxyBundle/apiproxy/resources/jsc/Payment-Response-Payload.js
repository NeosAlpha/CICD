 var response = JSON.parse(context.getVariable('response.content'));
 var newresponse = {};
 //newresponse.ack=response.submitDocumentResponse.submitDocumentReturn.ack;
 if ('payoutRequestResponse' in response.submitDocumentResponse.submitDocumentReturn) {
     newresponse["transactionID"] = {};
     if ('epTransactionID' in response.submitDocumentResponse.submitDocumentReturn.payoutRequestResponse)
         newresponse["transactionID"]["epTransactionID"] = response.submitDocumentResponse.submitDocumentReturn.payoutRequestResponse.epTransactionID;
     if ('merchantTransactionReference' in response.submitDocumentResponse.submitDocumentReturn.payoutRequestResponse)
         newresponse["transactionID"]["merchantTransactionID"] = response.submitDocumentResponse.submitDocumentReturn.payoutRequestResponse.merchantTransactionReference;

     if ('correspondentChargesExpected' in response.submitDocumentResponse.submitDocumentReturn.payoutRequestResponse)
         newresponse["correspondentChargesExpected"] = response.submitDocumentResponse.submitDocumentReturn.payoutRequestResponse.correspondentChargesExpected;

     if ('liquidityValue' in response.submitDocumentResponse.submitDocumentReturn.payoutRequestResponse) {
         newresponse["liquidityValue"] = {};
         if ('amount' in response.submitDocumentResponse.submitDocumentReturn.payoutRequestResponse.liquidityValue)
             newresponse["liquidityValue"]["amount"] = response.submitDocumentResponse.submitDocumentReturn.payoutRequestResponse.liquidityValue.amount;
         if ('currency' in response.submitDocumentResponse.submitDocumentReturn.payoutRequestResponse.liquidityValue)
             newresponse["liquidityValue"]["currency"] = response.submitDocumentResponse.submitDocumentReturn.payoutRequestResponse.liquidityValue.currency;
     }

     if ('settlementValue' in response.submitDocumentResponse.submitDocumentReturn.payoutRequestResponse) {
         newresponse["settlementValue"] = {};
         if ('amount' in response.submitDocumentResponse.submitDocumentReturn.payoutRequestResponse.settlementValue)
             newresponse["settlementValue"]["amount"] = response.submitDocumentResponse.submitDocumentReturn.payoutRequestResponse.settlementValue.amount;
         if ('currency' in response.submitDocumentResponse.submitDocumentReturn.payoutRequestResponse.settlementValue)
             newresponse["settlementValue"]["currency"] = response.submitDocumentResponse.submitDocumentReturn.payoutRequestResponse.settlementValue.currency;
     }

     if ('feeValue' in response.submitDocumentResponse.submitDocumentReturn.payoutRequestResponse) {
         newresponse["feeValue"] = {};
         if ('amount' in response.submitDocumentResponse.submitDocumentReturn.payoutRequestResponse.feeValue)
             newresponse["feeValue"]["amount"] = response.submitDocumentResponse.submitDocumentReturn.payoutRequestResponse.feeValue.amount;
         if ('currency' in response.submitDocumentResponse.submitDocumentReturn.payoutRequestResponse.feeValue)
             newresponse["feeValue"]["currency"] = response.submitDocumentResponse.submitDocumentReturn.payoutRequestResponse.feeValue.currency;
     }

     if ('fxMethodExpected' in response.submitDocumentResponse.submitDocumentReturn.payoutRequestResponse)
         newresponse["fxMethodExpected"] = response.submitDocumentResponse.submitDocumentReturn.payoutRequestResponse.fxMethodExpected;

     if ('fxRate' in response.submitDocumentResponse.submitDocumentReturn.payoutRequestResponse) {
         newresponse["fxRate"] = {};
         if ('buyCurrency' in response.submitDocumentResponse.submitDocumentReturn.payoutRequestResponse.fxRate)
             newresponse["fxRate"]["buyCurrency"] = response.submitDocumentResponse.submitDocumentReturn.payoutRequestResponse.fxRate.buyCurrency;
         if ('rate' in response.submitDocumentResponse.submitDocumentReturn.payoutRequestResponse.fxRate)
             newresponse["fxRate"]["rate"] = response.submitDocumentResponse.submitDocumentReturn.payoutRequestResponse.fxRate.rate;
         if ('sellCurrency' in response.submitDocumentResponse.submitDocumentReturn.payoutRequestResponse.fxRate)
             newresponse["fxRate"]["sellCurrency"] = response.submitDocumentResponse.submitDocumentReturn.payoutRequestResponse.fxRate.sellCurrency;
     }

     if ('acceptedDate' in response.submitDocumentResponse.submitDocumentReturn.payoutRequestResponse)
         newresponse["acceptedDate"] = response.submitDocumentResponse.submitDocumentReturn.payoutRequestResponse.acceptedDate;

     if ('expectedSettlementDate' in response.submitDocumentResponse.submitDocumentReturn.payoutRequestResponse)
         newresponse["expectedSettlementDate"] = response.submitDocumentResponse.submitDocumentReturn.payoutRequestResponse.expectedSettlementDate;

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