 var response = JSON.parse(context.getVariable('response.content'));
 var newresponse = {};
 if ('createOrUpdateUserAddBeneficiaryBankAccountAndPayoutResponse' in response.submitDocumentResponse.submitDocumentReturn) {
     
     if ('usersBankID' in response.submitDocumentResponse.submitDocumentReturn.createOrUpdateUserAddBeneficiaryBankAccountAndPayoutResponse){
        if ('userID' in response.submitDocumentResponse.submitDocumentReturn.createOrUpdateUserAddBeneficiaryBankAccountAndPayoutResponse.usersBankID) 
         newresponse["userID"] = response.submitDocumentResponse.submitDocumentReturn.createOrUpdateUserAddBeneficiaryBankAccountAndPayoutResponse.usersBankID.userID;
        if ('benBankID' in response.submitDocumentResponse.submitDocumentReturn.createOrUpdateUserAddBeneficiaryBankAccountAndPayoutResponse.usersBankID) 
         newresponse["benBankID"] = response.submitDocumentResponse.submitDocumentReturn.createOrUpdateUserAddBeneficiaryBankAccountAndPayoutResponse.usersBankID.benBankID;
     }
     
     newresponse["transactionID"] = {};
     if ('paymentID' in response.submitDocumentResponse.submitDocumentReturn.createOrUpdateUserAddBeneficiaryBankAccountAndPayoutResponse)
         newresponse["transactionID"]["epTransactionID"] = response.submitDocumentResponse.submitDocumentReturn.createOrUpdateUserAddBeneficiaryBankAccountAndPayoutResponse.paymentID;
     if ('merchantTransactionReference' in response.submitDocumentResponse.submitDocumentReturn.createOrUpdateUserAddBeneficiaryBankAccountAndPayoutResponse)
         newresponse["transactionID"]["merchantTransactionID"] = response.submitDocumentResponse.submitDocumentReturn.createOrUpdateUserAddBeneficiaryBankAccountAndPayoutResponse.merchantTransactionReference;

	 	 
	 
     if ('correspondentChargesExpected' in response.submitDocumentResponse.submitDocumentReturn.createOrUpdateUserAddBeneficiaryBankAccountAndPayoutResponse)
         newresponse["correspondentChargesExpected"] = response.submitDocumentResponse.submitDocumentReturn.createOrUpdateUserAddBeneficiaryBankAccountAndPayoutResponse.correspondentChargesExpected;

     if ('liquidityValue' in response.submitDocumentResponse.submitDocumentReturn.createOrUpdateUserAddBeneficiaryBankAccountAndPayoutResponse) {
         newresponse["liquidityValue"] = {};
         if ('amount' in response.submitDocumentResponse.submitDocumentReturn.createOrUpdateUserAddBeneficiaryBankAccountAndPayoutResponse.liquidityValue)
             newresponse["liquidityValue"]["amount"] = response.submitDocumentResponse.submitDocumentReturn.createOrUpdateUserAddBeneficiaryBankAccountAndPayoutResponse.liquidityValue.amount;
         if ('currency' in response.submitDocumentResponse.submitDocumentReturn.createOrUpdateUserAddBeneficiaryBankAccountAndPayoutResponse.liquidityValue)
             newresponse["liquidityValue"]["currency"] = response.submitDocumentResponse.submitDocumentReturn.createOrUpdateUserAddBeneficiaryBankAccountAndPayoutResponse.liquidityValue.currency;
     }

     if ('settlementValue' in response.submitDocumentResponse.submitDocumentReturn.createOrUpdateUserAddBeneficiaryBankAccountAndPayoutResponse) {
         newresponse["settlementValue"] = {};
         if ('amount' in response.submitDocumentResponse.submitDocumentReturn.createOrUpdateUserAddBeneficiaryBankAccountAndPayoutResponse.settlementValue)
             newresponse["settlementValue"]["amount"] = response.submitDocumentResponse.submitDocumentReturn.createOrUpdateUserAddBeneficiaryBankAccountAndPayoutResponse.settlementValue.amount;
         if ('currency' in response.submitDocumentResponse.submitDocumentReturn.createOrUpdateUserAddBeneficiaryBankAccountAndPayoutResponse.settlementValue)
             newresponse["settlementValue"]["currency"] = response.submitDocumentResponse.submitDocumentReturn.createOrUpdateUserAddBeneficiaryBankAccountAndPayoutResponse.settlementValue.currency;
     }

     if ('feeValue' in response.submitDocumentResponse.submitDocumentReturn.createOrUpdateUserAddBeneficiaryBankAccountAndPayoutResponse) {
         newresponse["feeValue"] = {};
         if ('amount' in response.submitDocumentResponse.submitDocumentReturn.createOrUpdateUserAddBeneficiaryBankAccountAndPayoutResponse.feeValue)
             newresponse["feeValue"]["amount"] = response.submitDocumentResponse.submitDocumentReturn.createOrUpdateUserAddBeneficiaryBankAccountAndPayoutResponse.feeValue.amount;
         if ('currency' in response.submitDocumentResponse.submitDocumentReturn.createOrUpdateUserAddBeneficiaryBankAccountAndPayoutResponse.feeValue)
             newresponse["feeValue"]["currency"] = response.submitDocumentResponse.submitDocumentReturn.createOrUpdateUserAddBeneficiaryBankAccountAndPayoutResponse.feeValue.currency;
     }

     if ('fxMethodExpected' in response.submitDocumentResponse.submitDocumentReturn.createOrUpdateUserAddBeneficiaryBankAccountAndPayoutResponse)
         newresponse["fxMethodExpected"] = response.submitDocumentResponse.submitDocumentReturn.createOrUpdateUserAddBeneficiaryBankAccountAndPayoutResponse.fxMethodExpected;

     if ('fxRate' in response.submitDocumentResponse.submitDocumentReturn.createOrUpdateUserAddBeneficiaryBankAccountAndPayoutResponse) {
         newresponse["fxRate"] = {};
         if ('buyCurrency' in response.submitDocumentResponse.submitDocumentReturn.createOrUpdateUserAddBeneficiaryBankAccountAndPayoutResponse.fxRate)
             newresponse["fxRate"]["buyCurrency"] = response.submitDocumentResponse.submitDocumentReturn.createOrUpdateUserAddBeneficiaryBankAccountAndPayoutResponse.fxRate.buyCurrency;
         if ('rate' in response.submitDocumentResponse.submitDocumentReturn.createOrUpdateUserAddBeneficiaryBankAccountAndPayoutResponse.fxRate)
             newresponse["fxRate"]["rate"] = response.submitDocumentResponse.submitDocumentReturn.createOrUpdateUserAddBeneficiaryBankAccountAndPayoutResponse.fxRate.rate;
         if ('sellCurrency' in response.submitDocumentResponse.submitDocumentReturn.createOrUpdateUserAddBeneficiaryBankAccountAndPayoutResponse.fxRate)
             newresponse["fxRate"]["sellCurrency"] = response.submitDocumentResponse.submitDocumentReturn.createOrUpdateUserAddBeneficiaryBankAccountAndPayoutResponse.fxRate.sellCurrency;
     }

     if ('acceptedDate' in response.submitDocumentResponse.submitDocumentReturn.createOrUpdateUserAddBeneficiaryBankAccountAndPayoutResponse)
         newresponse["acceptedDate"] = response.submitDocumentResponse.submitDocumentReturn.createOrUpdateUserAddBeneficiaryBankAccountAndPayoutResponse.acceptedDate;

     if ('expectedSettlementDate' in response.submitDocumentResponse.submitDocumentReturn.createOrUpdateUserAddBeneficiaryBankAccountAndPayoutResponse)
         newresponse["expectedSettlementDate"] = response.submitDocumentResponse.submitDocumentReturn.createOrUpdateUserAddBeneficiaryBankAccountAndPayoutResponse.expectedSettlementDate;

     responseStatusCode = 200;
 }
 if ('errors' in response.submitDocumentResponse.submitDocumentReturn) {
     newresponse = response.submitDocumentResponse.submitDocumentReturn.errors;
     responseStatusCode = 400;
     context.setVariable("triggerError", "true");
 }
 context.setVariable('response.content', JSON.stringify(newresponse));
 context.setVariable("response.status.code", responseStatusCode)