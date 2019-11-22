var response = JSON.parse(context.getVariable('response.content').replace(/:\s*(\d\d\d\d\d\d\d\d\d\d\d\d\d\d\d\d+)\s*([,\}])/g, ':"$1"$2'));


var newresponse = {};


if(response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse){
   
 if(response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.usersBankID){
   newresponse["userID"] = {};
   if ("epUserID" in response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.usersBankID.userID)
       newresponse["userID"]["epUserID"] = response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.usersBankID.userID.epUserID;
   if ("merchantUserID" in response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.usersBankID.userID)
       newresponse["userID"]["merchantUserID"] = response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.usersBankID.userID.merchantUserID;
   newresponse["benBankID"] = {};
   if ("epBankID" in response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.usersBankID.benBankID)
       newresponse["benBankID"]["epBankID"] = response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.usersBankID.benBankID.epBankID;
   if ("merchantBankID" in response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.usersBankID.benBankID)
       newresponse["benBankID"]["merchantBankID"] = response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.usersBankID.benBankID.merchantBankID;
   }
   
   
   if(response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity){
   newresponse["beneficiaryIdentity"] = {};
   
   if(response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryIndividualIdentity){
   newresponse["beneficiaryIdentity"]["individualIdentity"] = {};
   newresponse["beneficiaryIdentity"]["individualIdentity"]["name"] = {};
   if ("familyName" in response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryIndividualIdentity.name)
       newresponse["beneficiaryIdentity"]["individualIdentity"]["name"]["familyName"] = response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryIndividualIdentity.name.familyName;
   if ("givenNames" in response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryIndividualIdentity.name)
       newresponse["beneficiaryIdentity"]["individualIdentity"]["name"]["givenNames"] = response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryIndividualIdentity.name.givenNames;
       
   if ("address" in response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryIndividualIdentity){
   newresponse["beneficiaryIdentity"]["individualIdentity"]["address"] = {};
   if ("addressLine1" in response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryIndividualIdentity.address)
       newresponse["beneficiaryIdentity"]["individualIdentity"]["address"]["addressLine1"] = response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryIndividualIdentity.address.addressLine1;
   if ("addressLine2" in response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryIndividualIdentity.address)
       newresponse["beneficiaryIdentity"]["individualIdentity"]["address"]["addressLine2"] = response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryIndividualIdentity.address.addressLine2;
   if ("addressLine3" in response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryIndividualIdentity.address)
       newresponse["beneficiaryIdentity"]["individualIdentity"]["address"]["addressLine3"] = response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryIndividualIdentity.address.addressLine3;
   if ("city" in response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryIndividualIdentity.address)
       newresponse["beneficiaryIdentity"]["individualIdentity"]["address"]["city"] = response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryIndividualIdentity.address.city;
   if ("country" in response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryIndividualIdentity.address)
       newresponse["beneficiaryIdentity"]["individualIdentity"]["address"]["country"] = response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryIndividualIdentity.address.country;
   if ("postcode" in response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryIndividualIdentity.address)
       newresponse["beneficiaryIdentity"]["individualIdentity"]["address"]["postcode"] = response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryIndividualIdentity.address.postcode;
   if ("province" in response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryIndividualIdentity.address)
       newresponse["beneficiaryIdentity"]["individualIdentity"]["address"]["province"] = response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryIndividualIdentity.address.province;
   }
   
   if(response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryIndividualIdentity.birthInformation){
   newresponse["beneficiaryIdentity"]["individualIdentity"]["birthInformation"] = {};
   if ("cityOfBirth" in response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryIndividualIdentity.birthInformation)
       newresponse["beneficiaryIdentity"]["individualIdentity"]["birthInformation"]["cityOfBirth"] = response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryIndividualIdentity.birthInformation.cityOfBirth;
   if ("countryOfBirth" in response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryIndividualIdentity.birthInformation)
       newresponse["beneficiaryIdentity"]["individualIdentity"]["birthInformation"]["countryOfBirth"] = response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryIndividualIdentity.birthInformation.countryOfBirth;
   if ("dateOfBirth" in response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryIndividualIdentity.birthInformation)
       newresponse["beneficiaryIdentity"]["individualIdentity"]["birthInformation"]["dateOfBirth"] = response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryIndividualIdentity.birthInformation.dateOfBirth;
   }
   if(response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryIndividualIdentity.identificationList!="NULL"){
   if (Array.isArray(response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryIndividualIdentity.identificationList.identification)) {
       newresponse["beneficiaryIdentity"]["individualIdentity"]["identification"] = [];
       var total = response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryIndividualIdentity.identificationList.identification.length;
       if (total > 0)
           for (var i = 0; i < total; i++) {
               var t = {
                   "idType": response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryIndividualIdentity.identificationList.identification[i].idType,
                   "identificationCountry": response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryIndividualIdentity.identificationList.identification[i].identificationCountry,
                   "identificationNumber": response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryIndividualIdentity.identificationList.identification[i].identificationNumber,
                   "validFromDate": response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryIndividualIdentity.identificationList.identification[i].validFromDate,
                   "validToDate": response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryIndividualIdentity.identificationList.identification[i].validToDate
               };
               newresponse["beneficiaryIdentity"]["individualIdentity"]["identification"][i] = t;
           }
   } else if ("identification" in response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryIndividualIdentity.identificationList) {
       newresponse["beneficiaryIdentity"]["individualIdentity"]["identification"] = [];
           var t = {
           "idType": response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryIndividualIdentity.identificationList.identification.idType,
           "identificationCountry": response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryIndividualIdentity.identificationList.identification.identificationCountry,
           "identificationNumber": response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryIndividualIdentity.identificationList.identification.identificationNumber,
           "validFromDate": response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryIndividualIdentity.identificationList.identification.validFromDate,
           "validToDate": response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryIndividualIdentity.identificationList.identification.validToDate
       };
       newresponse["beneficiaryIdentity"]["individualIdentity"]["identification"][0] = t;
   }
   }
   }

   
   if(response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryLegalEntityIdentity){
   newresponse["beneficiaryIdentity"]["legalEntityIdentity"] = {};
   if ("legalEntityName" in response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryLegalEntityIdentity)
       newresponse["beneficiaryIdentity"]["legalEntityIdentity"]["legalEntityName"] = response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryLegalEntityIdentity.legalEntityName;

  if ("legalEntityRegistration" in response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryLegalEntityIdentity){
   newresponse["beneficiaryIdentity"]["legalEntityIdentity"]["legalEntityRegistration"] = {};
   if ("legalEntityRegistrationCountry" in response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryLegalEntityIdentity.legalEntityRegistration)
       newresponse["beneficiaryIdentity"]["legalEntityIdentity"]["legalEntityRegistration"]["legalEntityRegistrationCountry"] = response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryLegalEntityIdentity.legalEntityRegistration.legalEntityRegistrationCountry;
   if ("legalEntityRegistrationNumber" in response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryLegalEntityIdentity.legalEntityRegistration)
       newresponse["beneficiaryIdentity"]["legalEntityIdentity"]["legalEntityRegistration"]["legalEntityRegistrationNumber"] = response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryLegalEntityIdentity.legalEntityRegistration.legalEntityRegistrationNumber;
   if ("legalEntityRegistrationProvince" in response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryLegalEntityIdentity.legalEntityRegistration)
       newresponse["beneficiaryIdentity"]["legalEntityIdentity"]["legalEntityRegistration"]["legalEntityRegistrationProvince"] = response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryLegalEntityIdentity.legalEntityRegistration.legalEntityRegistrationProvince;
  }
  if ("address" in response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryLegalEntityIdentity){
   newresponse["beneficiaryIdentity"]["legalEntityIdentity"]["address"] = {};
   if ("addressLine1" in response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryLegalEntityIdentity.address)
       newresponse["beneficiaryIdentity"]["legalEntityIdentity"]["address"]["addressLine1"] = response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryLegalEntityIdentity.address.addressLine1;
   if ("addressLine2" in response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryLegalEntityIdentity.address)
       newresponse["beneficiaryIdentity"]["legalEntityIdentity"]["address"]["addressLine2"] = response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryLegalEntityIdentity.address.addressLine2;
   if ("addressLine3" in response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryLegalEntityIdentity.address)
       newresponse["beneficiaryIdentity"]["legalEntityIdentity"]["address"]["addressLine3"] = response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryLegalEntityIdentity.address.addressLine3;
   if ("city" in response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryLegalEntityIdentity.address)
       newresponse["beneficiaryIdentity"]["legalEntityIdentity"]["address"]["city"] = response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryLegalEntityIdentity.address.city;
   if ("country" in response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryLegalEntityIdentity.address)
       newresponse["beneficiaryIdentity"]["legalEntityIdentity"]["address"]["country"] = response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryLegalEntityIdentity.address.country;
   if ("postcode" in response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryLegalEntityIdentity.address)
       newresponse["beneficiaryIdentity"]["legalEntityIdentity"]["address"]["postcode"] = response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryLegalEntityIdentity.address.postcode;
   if ("province" in response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryLegalEntityIdentity.address)
       newresponse["beneficiaryIdentity"]["legalEntityIdentity"]["address"]["province"] = response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryLegalEntityIdentity.address.province;
   }
 }



   
   if(response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryUnstructuredIdentity){
   if (Array.isArray(response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryUnstructuredIdentity.unstructuredIdentityData)) {
       newresponse["beneficiaryIdentity"]["unstructuredIdentity"] = [];
       var total = response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryUnstructuredIdentity.unstructuredIdentityData.length;
       if (total > 0)
           for (var i = 0; i < total; i++) {
               var t = {
                   "key": response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryUnstructuredIdentity.unstructuredIdentityData[i].unstructuredIdentityDataKey,
                   "value": response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryUnstructuredIdentity.unstructuredIdentityData[i].unstructuredIdentityDataValue
               };
               newresponse["beneficiaryIdentity"]["unstructuredIdentity"][i] = t;
           }
   } else if ("unstructuredIdentityData" in response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryUnstructuredIdentity) {
       newresponse["beneficiaryIdentity"]["unstructuredIdentity"] = [];
       var t = {
           "key": response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryUnstructuredIdentity.unstructuredIdentityData.unstructuredIdentityDataKey,
           "value": response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.beneficiaryUnstructuredIdentity.unstructuredIdentityData.unstructuredIdentityDataValue
       };
       newresponse["beneficiaryIdentity"]["unstructuredIdentity"][0] = t;
   }
   }
   if(response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.additionalDataList){
   if (Array.isArray(response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.additionalDataList.additionalData)) {
       newresponse["beneficiaryIdentity"]["additionalData"] = [];
       var total = response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.additionalDataList.additionalData.length;
       if (total > 0)
           for (var i = 0; i < total; i++) {
               var t = {
                   "key": response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.additionalDataList.additionalData[i].additionalDataKey,
                   "value": response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.additionalDataList.additionalData[i].additionalDataValue
               };
               newresponse["beneficiaryIdentity"]["additionalData"][i] = t;
           }
   } else if ("additionalData" in response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.additionalDataList) {
       newresponse["beneficiaryIdentity"]["additionalData"] = [];
       var t = {
           "key": response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.additionalDataList.additionalData.additionalDataKey,
           "value": response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryIdentity.additionalDataList.additionalData.additionalDataValue
       };
       newresponse["beneficiaryIdentity"]["additionalData"][0] = t;
   }
   }
 
 
   }
   
if(response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.description){
   newresponse["description"] = response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.description;
}
if(response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.countryCode){
   newresponse["countryCode"] = response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.countryCode;
}
if(response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.currencyCode){
   newresponse["currencyCode"] = response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.currencyCode;
}
if(response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.isActive!==null){
   newresponse["isActive"] = response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.isActive;
}
 
 
 


if (response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryBankAccountFieldGroupsList) {
 newresponse["bankAccountDetails"] = [];

 if (Array.isArray(response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryBankAccountFieldGroupsList.beneficiaryBankAccountFieldGroup)) {
   var total = response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryBankAccountFieldGroupsList.beneficiaryBankAccountFieldGroup.length;
   if (total > 0) {
     for (var i = 0; i < total; i++) {

       if (Array.isArray(response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryBankAccountFieldGroupsList.beneficiaryBankAccountFieldGroup[i].beneficiaryBankAccountFieldsList.beneficiaryBankAccountField)) {
         var total1 = response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryBankAccountFieldGroupsList.beneficiaryBankAccountFieldGroup[i].beneficiaryBankAccountFieldsList.beneficiaryBankAccountField.length;
         if (total1 > 0) {
           for (var j = 0; j < total1; j++) {

             var t = {
               "key": response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryBankAccountFieldGroupsList.beneficiaryBankAccountFieldGroup[i].beneficiaryBankAccountFieldsList.beneficiaryBankAccountField[j].parameterName,
               "value": response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryBankAccountFieldGroupsList.beneficiaryBankAccountFieldGroup[i].beneficiaryBankAccountFieldsList.beneficiaryBankAccountField[j].value
             };
             newresponse.bankAccountDetails.push(t);

           }
         }
       } else if (response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryBankAccountFieldGroupsList.beneficiaryBankAccountFieldGroup[i].beneficiaryBankAccountFieldsList.beneficiaryBankAccountField) {

         var t = {
           "key": response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryBankAccountFieldGroupsList.beneficiaryBankAccountFieldGroup[i].beneficiaryBankAccountFieldsList.beneficiaryBankAccountField.parameterName,
           "value": response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryBankAccountFieldGroupsList.beneficiaryBankAccountFieldGroup[i].beneficiaryBankAccountFieldsList.beneficiaryBankAccountField.value
         };
         newresponse.bankAccountDetails.push(t);
       }

     }
   }
 } else if (response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryBankAccountFieldGroupsList.beneficiaryBankAccountFieldGroup) {

   if (Array.isArray(response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryBankAccountFieldGroupsList.beneficiaryBankAccountFieldGroup.beneficiaryBankAccountFieldsList.beneficiaryBankAccountField)) {
     var total1 = response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryBankAccountFieldGroupsList.beneficiaryBankAccountFieldGroup.beneficiaryBankAccountFieldsList.beneficiaryBankAccountField.length;
     if (total1 > 0) {
       for (var j = 0; j < total1; j++) {

         var t = {
           "key": response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryBankAccountFieldGroupsList.beneficiaryBankAccountFieldGroup.beneficiaryBankAccountFieldsList.beneficiaryBankAccountField[j].parameterName,
           "value": response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryBankAccountFieldGroupsList.beneficiaryBankAccountFieldGroup.beneficiaryBankAccountFieldsList.beneficiaryBankAccountField[j].value
         };
         newresponse.bankAccountDetails.push(t);

       }
     }
   } else if (response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryBankAccountFieldGroupsList.beneficiaryBankAccountFieldGroup.beneficiaryBankAccountFieldsList.beneficiaryBankAccountField) {

     var t = {
       "key": response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryBankAccountFieldGroupsList.beneficiaryBankAccountFieldGroup.beneficiaryBankAccountFieldsList.beneficiaryBankAccountField.parameterName,
       "value": response.submitDocumentResponse.submitDocumentReturn.getBeneficiaryBankAccountResponse.beneficiaryBankAccountFieldGroupsList.beneficiaryBankAccountFieldGroup.beneficiaryBankAccountFieldsList.beneficiaryBankAccountField.value
     };
     newresponse.bankAccountDetails.push(t);
   }

 }
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