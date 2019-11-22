var response = JSON.parse(context.getVariable('response.content'));
var newresponse = {};

 
if(response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse){
    
//all transaction types

newresponse["transactionID"] = {};

if ("epTransactionID" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionID)
    newresponse["transactionID"]["epTransactionID"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionID.epTransactionID;
if ("merchantTransactionID" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionID)
    newresponse["transactionID"]["merchantTransactionID"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionID.merchantTransactionID;

if ("timestamp" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail)
    newresponse["timestamp"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.timestamp;

if ("transactionType" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail)
    newresponse["transactionType"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.transactionType;

if(response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.transactionStatus){
    newresponse["transactionStatus"] = {};
if ("code" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.transactionStatus)
    newresponse["transactionStatus"]["code"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.transactionStatus.code;
if ("description" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.transactionStatus)
    newresponse["transactionStatus"]["description"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.transactionStatus.description;
}
    newresponse["amount"] = {};
if ("amount" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.amount)
    newresponse["amount"]["amount"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.amount.amount;
if ("currency" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.amount)
    newresponse["amount"]["currency"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.amount.currency;

if ("movementType" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail)
    newresponse["movementType"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.movementType;

if(response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.statementDetail){
if (Array.isArray(response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.statementDetail.StatementDetailItem)) {
    newresponse["statementDetails"] = [];
    var total = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.statementDetail.StatementDetailItem.length;
    if (total > 0)
        for (var i = 0; i < total; i++) {
            var t = {
                "key": response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.statementDetail.StatementDetailItem[i]["type"],
                "value": response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.statementDetail.StatementDetailItem[i].TEXT
            };
            newresponse["statementDetails"][i] = t;
        }
} else if ("StatementDetailItem" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.statementDetail) {
    newresponse["statementDetails"] = [];
    var t = {
        "key": response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.statementDetail.StatementDetailItem["type"],
        "value": response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.statementDetail.StatementDetailItem.TEXT
    };
    newresponse["statementDetails"][0] = t;
}
}

    
    if(response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.usersBankId){
    newresponse["usersBankID"] = {};
    newresponse["usersBankID"]["userID"] = {};
    if ("epUserID" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.usersBankId.userID)
        newresponse["usersBankID"]["userID"]["epUserID"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.usersBankId.userID.epUserID;
    if ("merchantUserID" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.usersBankId.userID)
        newresponse["usersBankID"]["userID"]["merchantUserID"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.usersBankId.userID.merchantUserID;
    newresponse["usersBankID"]["benBankID"] = {};
    if ("epBankID" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.usersBankId.benBankID)
        newresponse["usersBankID"]["benBankID"]["epBankID"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.usersBankId.benBankID.epBankID;
    if ("merchantBankID" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.usersBankId.benBankID)
        newresponse["usersBankID"]["benBankID"]["merchantBankID"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.usersBankId.benBankID.merchantBankID;
    }
    
    if(response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.fxExecutedDetail){
    newresponse["fxExecutedDetail"] = {};
    if(response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.fxExecutedDetail.fxFeeAmount){
    newresponse["fxExecutedDetail"]["fxFeeAmount"] = {};
    if ("amount" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.fxExecutedDetail.fxFeeAmount)
        newresponse["fxExecutedDetail"]["fxFeeAmount"]["amount"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.fxExecutedDetail.fxFeeAmount.amount;
    if ("currency" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.fxExecutedDetail.fxFeeAmount)
        newresponse["fxExecutedDetail"]["fxFeeAmount"]["currency"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.fxExecutedDetail.fxFeeAmount.currency;
    }
    
    if(response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.fxExecutedDetail.fxRate){
    newresponse["fxExecutedDetail"]["fxRate"] = {};
    if ("buyCurrency" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.fxExecutedDetail.fxRate)
        newresponse["fxExecutedDetail"]["fxRate"]["buyCurrency"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.fxExecutedDetail.fxRate.buyCurrency;
    if ("rate" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.fxExecutedDetail.fxRate)
        newresponse["fxExecutedDetail"]["fxRate"]["rate"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.fxExecutedDetail.fxRate.rate;
    if ("sellCurrency" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.fxExecutedDetail.fxRate)
        newresponse["fxExecutedDetail"]["fxRate"]["sellCurrency"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.fxExecutedDetail.fxRate.sellCurrency;
    }
    if(response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.fxExecutedDetail.fxTicketID){
    newresponse["fxExecutedDetail"]["fxTicketID"] = {};
    if ("ticketID" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.fxExecutedDetail.fxTicketID)
        newresponse["fxExecutedDetail"]["fxTicketID"]["ticketID"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.fxExecutedDetail.fxTicketID.ticketID;
    }
    }
    
    if(response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payoutRequestAmount){
    newresponse["payoutRequestAmount"] = {};
    if ("amount" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payoutRequestAmount)
        newresponse["payoutRequestAmount"]["amount"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payoutRequestAmount.amount;
    if ("currency" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payoutRequestAmount)
        newresponse["payoutRequestAmount"]["currency"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payoutRequestAmount.currency;
    }
    
    if(response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.settlementInstructionAmount){
    newresponse["settlementInstructionAmount"] = {};
    if ("amount" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.settlementInstructionAmount)
        newresponse["settlementInstructionAmount"]["amount"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.settlementInstructionAmount.amount;
    if ("currency" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.settlementInstructionAmount)
        newresponse["settlementInstructionAmount"]["currency"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.settlementInstructionAmount.currency;
    }
    
    if ("beneficiaryStatementNarrative" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail)
        newresponse["beneficiaryStatementNarrative"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.beneficiaryStatementNarrative;

    if(response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payoutDetails){
    if (Array.isArray(response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payoutDetails)) {
        newresponse["payoutDetails"] = [];
        var total = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payoutDetails.length;
        if (total > 0)
            for (var i = 0; i < total; i++) {
                var t = {
                    "key": response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payoutDetails[i].key,
                    "value": response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payoutDetails[i].value
                };
                newresponse["payoutDetails"][i] = t;
            }
    } else if ("payoutDetails" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail) {
        newresponse["payoutDetails"] = [];
        var t = {
            "key": response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payoutDetails.key,
            "value": response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payoutDetails.value
        };
        newresponse["payoutDetails"][0] = t;
    }        
    }
    if ("dateSentToBank" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail)
        newresponse["dateSentToBank"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.dateSentToBank;

    if ("expectedSettlementDate" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail)
        newresponse["expectedSettlementDate"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.expectedSettlementDate;

    if ("beneficiaryBankCountry" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail)
        newresponse["beneficiaryBankCountry"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.beneficiaryBankCountry;

    if ("beneficiaryBankCurrency" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail)
        newresponse["beneficiaryBankCurrency"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.beneficiaryBankCurrency;

    if(response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.refundPayoutID){
    newresponse["refundPayoutID"] = {};
    if ("paymentID" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.refundPayoutID)
        newresponse["refundPayoutID"]["paymentID"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.refundPayoutID.paymentID;
    }
        
    if ("debitValueDate" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail)
        newresponse["debitValueDate"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.debitValueDate;

    if(response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity){
    newresponse["payerIdentity"] = {};
    
    if(response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerIndividualIdentity){
    newresponse["payerIdentity"]["individualIdentity"] = {};
    newresponse["payerIdentity"]["individualIdentity"]["name"] = {};
    if ("familyName" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerIndividualIdentity.name)
        newresponse["payerIdentity"]["individualIdentity"]["name"]["familyName"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerIndividualIdentity.name.familyName;
    if ("givenNames" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerIndividualIdentity.name)
        newresponse["payerIdentity"]["individualIdentity"]["name"]["givenNames"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerIndividualIdentity.name.givenNames;
    
    if ("address" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerIndividualIdentity){
    newresponse["payerIdentity"]["individualIdentity"]["address"] = {};
    if ("addressLine1" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerIndividualIdentity.address)
        newresponse["payerIdentity"]["individualIdentity"]["address"]["addressLine1"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerIndividualIdentity.address.addressLine1;
    if ("addressLine2" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerIndividualIdentity.address)
        newresponse["payerIdentity"]["individualIdentity"]["address"]["addressLine2"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerIndividualIdentity.address.addressLine2;
    if ("addressLine3" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerIndividualIdentity.address)
        newresponse["payerIdentity"]["individualIdentity"]["address"]["addressLine3"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerIndividualIdentity.address.addressLine3;
    if ("city" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerIndividualIdentity.address)
        newresponse["payerIdentity"]["individualIdentity"]["address"]["city"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerIndividualIdentity.address.city;
    if ("country" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerIndividualIdentity.address)
        newresponse["payerIdentity"]["individualIdentity"]["address"]["country"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerIndividualIdentity.address.country;
    if ("postcode" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerIndividualIdentity.address)
        newresponse["payerIdentity"]["individualIdentity"]["address"]["postcode"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerIndividualIdentity.address.postcode;
    if ("province" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerIndividualIdentity.address)
        newresponse["payerIdentity"]["individualIdentity"]["address"]["province"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerIndividualIdentity.address.province;
    }
    
    if(response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerIndividualIdentity.birthInformation){
    newresponse["payerIdentity"]["individualIdentity"]["birthInformation"] = {};
    if ("cityOfBirth" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerIndividualIdentity.birthInformation)
        newresponse["payerIdentity"]["individualIdentity"]["birthInformation"]["cityOfBirth"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerIndividualIdentity.birthInformation.cityOfBirth;
    if ("countryOfBirth" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerIndividualIdentity.birthInformation)
        newresponse["payerIdentity"]["individualIdentity"]["birthInformation"]["countryOfBirth"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerIndividualIdentity.birthInformation.countryOfBirth;
    if ("dateOfBirth" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerIndividualIdentity.birthInformation)
        newresponse["payerIdentity"]["individualIdentity"]["birthInformation"]["dateOfBirth"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerIndividualIdentity.birthInformation.dateOfBirth;
    }
    if(response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerIndividualIdentity.identificationList!="NULL"){
    if (Array.isArray(response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerIndividualIdentity.identificationList.identification)) {
        newresponse["payerIdentity"]["individualIdentity"]["identification"] = [];
        var total = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerIndividualIdentity.identificationList.identification.length;
        if (total > 0)
            for (var i = 0; i < total; i++) {
                var t = {
                    "idType": response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerIndividualIdentity.identificationList.identification[i].idType,
                    "identificationCountry": response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerIndividualIdentity.identificationList.identification[i].identificationCountry,
                    "identificationNumber": response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerIndividualIdentity.identificationList.identification[i].identificationNumber,
                    "validFromDate": response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerIndividualIdentity.identificationList.identification[i].validFromDate,
                    "validToDate": response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerIndividualIdentity.identificationList.identification[i].validToDate
                };
                newresponse["payerIdentity"]["individualIdentity"]["identification"][i] = t;
            }
    } else if ("identification" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerIndividualIdentity.identificationList) {
        newresponse["payerIdentity"]["individualIdentity"]["identification"] = [];
            var t = {
            "idType": response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerIndividualIdentity.identificationList.identification.idType,
            "identificationCountry": response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerIndividualIdentity.identificationList.identification.identificationCountry,
            "identificationNumber": response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerIndividualIdentity.identificationList.identification.identificationNumber,
            "validFromDate": response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerIndividualIdentity.identificationList.identification.validFromDate,
            "validToDate": response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerIndividualIdentity.identificationList.identification.validToDate
        };
        newresponse["payerIdentity"]["individualIdentity"]["identification"][0] = t;
    }
    }
    }
    
    if(response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerLegalEntityIdentity){
    newresponse["payerIdentity"]["legalEntityIdentity"] = {};
    if ("legalEntityName" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerLegalEntityIdentity)
        newresponse["payerIdentity"]["legalEntityIdentity"]["legalEntityName"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerLegalEntityIdentity.legalEntityName;

    if ("legalEntityRegistration" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerLegalEntityIdentity){
    newresponse["payerIdentity"]["legalEntityIdentity"]["legalEntityRegistration"] = {};
    if ("legalEntityRegistrationCountry" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerLegalEntityIdentity.legalEntityRegistration)
        newresponse["payerIdentity"]["legalEntityIdentity"]["legalEntityRegistration"]["legalEntityRegistrationCountry"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerLegalEntityIdentity.legalEntityRegistration.legalEntityRegistrationCountry;
    if ("legalEntityRegistrationNumber" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerLegalEntityIdentity.legalEntityRegistration)
        newresponse["payerIdentity"]["legalEntityIdentity"]["legalEntityRegistration"]["legalEntityRegistrationNumber"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerLegalEntityIdentity.legalEntityRegistration.legalEntityRegistrationNumber;
    if ("legalEntityRegistrationProvince" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerLegalEntityIdentity.legalEntityRegistration)
        newresponse["payerIdentity"]["legalEntityIdentity"]["legalEntityRegistration"]["legalEntityRegistrationProvince"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerLegalEntityIdentity.legalEntityRegistration.legalEntityRegistrationProvince;
    }

    if ("address" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerLegalEntityIdentity){
    newresponse["payerIdentity"]["legalEntityIdentity"]["address"] = {};
    if ("addressLine1" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerLegalEntityIdentity.address)
        newresponse["payerIdentity"]["legalEntityIdentity"]["address"]["addressLine1"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerLegalEntityIdentity.address.addressLine1;
    if ("addressLine2" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerLegalEntityIdentity.address)
        newresponse["payerIdentity"]["legalEntityIdentity"]["address"]["addressLine2"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerLegalEntityIdentity.address.addressLine2;
    if ("addressLine3" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerLegalEntityIdentity.address)
        newresponse["payerIdentity"]["legalEntityIdentity"]["address"]["addressLine3"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerLegalEntityIdentity.address.addressLine3;
    if ("city" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerLegalEntityIdentity.address)
        newresponse["payerIdentity"]["legalEntityIdentity"]["address"]["city"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerLegalEntityIdentity.address.city;
    if ("country" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerLegalEntityIdentity.address)
        newresponse["payerIdentity"]["legalEntityIdentity"]["address"]["country"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerLegalEntityIdentity.address.country;
    if ("postcode" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerLegalEntityIdentity.address)
        newresponse["payerIdentity"]["legalEntityIdentity"]["address"]["postcode"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerLegalEntityIdentity.address.postcode;
    if ("province" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerLegalEntityIdentity.address)
        newresponse["payerIdentity"]["legalEntityIdentity"]["address"]["province"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerLegalEntityIdentity.address.province;
    }  

    }

    
    if(response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerUnstructuredIdentity){
    if (Array.isArray(response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerUnstructuredIdentity.unstructuredIdentityData)) {
        newresponse["payerIdentity"]["unstructuredIdentity"] = [];
        var total = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerUnstructuredIdentity.unstructuredIdentityData.length;
        if (total > 0)
            for (var i = 0; i < total; i++) {
                var t = {
                    "key": response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerUnstructuredIdentity.unstructuredIdentityData[i].unstructuredIdentityDataKey,
                    "value": response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerUnstructuredIdentity.unstructuredIdentityData[i].unstructuredIdentityDataValue
                };
                newresponse["payerIdentity"]["unstructuredIdentity"][i] = t;
            }
    } else if ("unstructuredIdentityData" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerUnstructuredIdentity) {
        newresponse["payerIdentity"]["unstructuredIdentity"] = [];
        var t = {
            "key": response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerUnstructuredIdentity.unstructuredIdentityData.unstructuredIdentityDataKey,
            "value": response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.payerUnstructuredIdentity.unstructuredIdentityData.unstructuredIdentityDataValue
        };
        newresponse["payerIdentity"]["unstructuredIdentity"][0] = t;
    }
    }
    if(response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.additionalDataList){
    if (Array.isArray(response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.additionalDataList.additionalData)) {
        newresponse["payerIdentity"]["additionalData"] = [];
        var total = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.additionalDataList.additionalData.length;
        if (total > 0)
            for (var i = 0; i < total; i++) {
                var t = {
                    "key": response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.additionalDataList.additionalData[i].additionalDataKey,
                    "value": response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.additionalDataList.additionalData[i].additionalDataValue
                };
                newresponse["payerIdentity"]["additionalData"][i] = t;
            }
    } else if ("additionalData" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.additionalDataList) {
        newresponse["payerIdentity"]["additionalData"] = [];
        var t = {
            "key": response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.additionalDataList.additionalData.additionalDataKey,
            "value": response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.additionalDataList.additionalData.additionalDataValue
        };
        newresponse["payerIdentity"]["additionalData"][0] = t;
    }
    }
    if(response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.createdDate){
newresponse.payerCreatedDate=response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.payerIdentity.createdDate;
}
    }

    if(response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.userID){
    newresponse["userID"] = {};
    if ("epUserID" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.userID)
        newresponse["userID"]["epUserID"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.userID.epUserID;
    if ("merchantUserID" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.userID)
        newresponse["userID"]["merchantUserID"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.userID.merchantUserID;
    }

if(response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.amountRefundedByBank){
    newresponse["amountRefundedByBank"] = {};
    if ("amount" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.amountRefundedByBank)
        newresponse["amountRefundedByBank"]["amount"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.amountRefundedByBank.amount;
    if ("currency" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.amountRefundedByBank)
        newresponse["amountRefundedByBank"]["currency"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.amountRefundedByBank.currency;
}
    if(response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.amountRefundedToCustomer){
    newresponse["amountRefundedToCustomer"] = {};
    if ("amount" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.amountRefundedToCustomer)
        newresponse["amountRefundedToCustomer"]["amount"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.amountRefundedToCustomer.amount;
    if ("currency" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.amountRefundedToCustomer)
        newresponse["amountRefundedToCustomer"]["currency"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.amountRefundedToCustomer.currency;
    }
    
    if(response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.reason){
    newresponse["reason"] = {};
    if ("code" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.reason)
        newresponse["reason"]["code"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.reason.code;
    if ("description" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.reason)
        newresponse["reason"]["description"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.reason.description;
    }
    
    if(response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.originalPayoutTransaction){
    newresponse["originalPayoutTransaction"] = {};

    newresponse["originalPayoutTransaction"]["transactionID"] = {};
    if ("epTransactionID" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.originalPayoutTransaction)
        newresponse["originalPayoutTransaction"]["transactionID"]["epTransactionID"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.originalPayoutTransaction.epTransactionID;
    if(response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionID){
    if ("merchantTransactionID" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionID)
        newresponse["originalPayoutTransaction"]["transactionID"]["merchantTransactionID"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionID.merchantTransactionID;
    }
    if ("timestamp" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.originalPayoutTransaction)
        newresponse["originalPayoutTransaction"]["timestamp"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.originalPayoutTransaction.timestamp;
    if ("transactionType" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.originalPayoutTransaction)
        newresponse["originalPayoutTransaction"]["transactionType"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.originalPayoutTransaction.transactionType;
    
    if(response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.originalPayoutTransaction.transactionStatus){
    newresponse["originalPayoutTransaction"]["transactionStatus"] = {};
    if ("code" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.originalPayoutTransaction.transactionStatus)
        newresponse["originalPayoutTransaction"]["transactionStatus"]["code"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.originalPayoutTransaction.transactionStatus.code;
    if ("description" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.originalPayoutTransaction.transactionStatus)
        newresponse["originalPayoutTransaction"]["transactionStatus"]["description"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.originalPayoutTransaction.transactionStatus.description;
    }
    
    if(response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.originalPayoutTransaction.amount){
    newresponse["originalPayoutTransaction"]["amount"] = {};
    if ("amount" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.originalPayoutTransaction.amount)
        newresponse["originalPayoutTransaction"]["amount"]["amount"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.originalPayoutTransaction.amount.amount;
    if ("currency" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.originalPayoutTransaction.amount)
        newresponse["originalPayoutTransaction"]["amount"]["currency"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.originalPayoutTransaction.amount.currency;
    }
    
    if ("movementType" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.originalPayoutTransaction)
        newresponse["originalPayoutTransaction"]["movementType"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.originalPayoutTransaction.movementType;

    if ("statementDetail" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.originalPayoutTransaction){
    if (Array.isArray(response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.originalPayoutTransaction.statementDetail.StatementDetailItem)) {
        newresponse["originalPayoutTransaction"]["statementDetails"] = [];
        var total = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.originalPayoutTransaction.statementDetail.StatementDetailItem.length;
        if (total > 0)
            for (var i = 0; i < total; i++) {
                var t = {
                    "key": response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.originalPayoutTransaction.statementDetail.StatementDetailItem[i]["type"],
                    "value": response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.originalPayoutTransaction.statementDetail.StatementDetailItem[i].TEXT
                };
                newresponse["originalPayoutTransaction"]["statementDetails"][i] = t;
            }
    } else if ("StatementDetailItem" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.originalPayoutTransaction.statementDetail) {
        newresponse["originalPayoutTransaction"]["statementDetails"] = [];
        var t = {
            "key": response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.originalPayoutTransaction.statementDetail.StatementDetailItem["type"],
            "value": response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.originalPayoutTransaction.statementDetail.StatementDetailItem.TEXT
        };
        newresponse["originalPayoutTransaction"]["statementDetails"][0] = t;
    }
    }
    
    
    if(response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.originalPayoutTransaction.usersBankId){
    newresponse["originalPayoutTransaction"]["usersBankId"] = {};
    newresponse["originalPayoutTransaction"]["usersBankId"]["userID"] = {};
    if ("epUserID" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.originalPayoutTransaction.usersBankId.userID)
        newresponse["originalPayoutTransaction"]["usersBankId"]["userID"]["epUserID"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.originalPayoutTransaction.usersBankId.userID.epUserID;
    if ("merchantUserID" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.originalPayoutTransaction.usersBankId.userID)
        newresponse["originalPayoutTransaction"]["usersBankId"]["userID"]["merchantUserID"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.originalPayoutTransaction.usersBankId.userID.merchantUserID;
    newresponse["originalPayoutTransaction"]["usersBankId"]["benBankID"] = {};
    if ("epBankID" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.originalPayoutTransaction.usersBankId.benBankID)
        newresponse["originalPayoutTransaction"]["usersBankId"]["benBankID"]["epBankID"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.originalPayoutTransaction.usersBankId.benBankID.epBankID;
    if ("merchantBankID" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.originalPayoutTransaction.usersBankId.benBankID)
        newresponse["originalPayoutTransaction"]["usersBankId"]["benBankID"]["merchantBankID"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.originalPayoutTransaction.usersBankId.benBankID.merchantBankID;
    }
    }


    if ("depositDate" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail)
        newresponse["depositDate"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.depositDate;
    if ("depositCountry" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail)
        newresponse["depositCountry"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.depositCountry;
    if ("unappliedReason" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail)
        newresponse["unappliedReason"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.unappliedReason;
    if ("depositReference" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail)
        newresponse["depositReference"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.depositReference;
        
    if(response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.amountDepositedByUser){
    newresponse["amountDepositedByUser"] = {};
    if ("amount" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.amountDepositedByUser)
        newresponse["amountDepositedByUser"]["amount"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.amountDepositedByUser.amount;
    if ("currency" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.amountDepositedByUser)
        newresponse["amountDepositedByUser"]["currency"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.amountDepositedByUser.currency;
    }
    
    if(response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.amountDepositedToMerchant){
    newresponse["amountDepositedToMerchant"] = {};
    if ("amount" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.amountDepositedToMerchant)
        newresponse["amountDepositedToMerchant"]["amount"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.amountDepositedToMerchant.amount;
    if ("currency" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.amountDepositedToMerchant)
        newresponse["amountDepositedToMerchant"]["currency"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.amountDepositedToMerchant.currency;
    }


    if(response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.amountCreditedToMerchantAccount){
    newresponse["amountCreditedToMerchantAccount"] = {};
    if ("amount" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.amountCreditedToMerchantAccount)
        newresponse["amountCreditedToMerchantAccount"]["amount"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.amountCreditedToMerchantAccount.amount;
    if ("currency" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.amountCreditedToMerchantAccount)
        newresponse["amountCreditedToMerchantAccount"]["currency"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.amountCreditedToMerchantAccount.currency;
    }
    
    if(response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.amountRecievedAtBank){
    newresponse["amountReceivedAtBank"] = {};
    if ("amount" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.amountRecievedAtBank)
        newresponse["amountReceivedAtBank"]["amount"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.amountRecievedAtBank.amount;
    if ("currency" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.amountRecievedAtBank)
        newresponse["amountReceivedAtBank"]["currency"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.amountRecievedAtBank.currency;
    }
    


    if ("description" in response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail)
        newresponse["description"] = response.submitDocumentResponse.submitDocumentReturn.getTransactionDetailResponse.transactionDetailMappings.transactionDetailMapping.transactionDetail.description;


responseStatusCode = 200;
}
else if ('errors' in response.submitDocumentResponse.submitDocumentReturn) {
     newresponse = response.submitDocumentResponse.submitDocumentReturn.errors;
     responseStatusCode = 400;
     context.setVariable("triggerError", "true");
}

context.setVariable('response.content', JSON.stringify(newresponse));
context.setVariable("response.status.code", responseStatusCode);