var response = JSON.parse(context.getVariable('response.content'));
var newresponse = {};


if(response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse){
   
   if(response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.userID){
   newresponse["userID"] = {};
   if ("epUserID" in response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.userID)
       newresponse["userID"]["epUserID"] = response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.userID.epUserID;
   if ("merchantUserID" in response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.userID)
       newresponse["userID"]["merchantUserID"] = response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.userID.merchantUserID;
   }

   
   if(response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity){
   newresponse["payerIdentity"] = {};
   
   if(response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerIndividualIdentity){
   newresponse["payerIdentity"]["individualIdentity"] = {};
   newresponse["payerIdentity"]["individualIdentity"]["name"] = {};
   if ("familyName" in response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerIndividualIdentity.name)
       newresponse["payerIdentity"]["individualIdentity"]["name"]["familyName"] = response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerIndividualIdentity.name.familyName;
   if ("givenNames" in response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerIndividualIdentity.name)
       newresponse["payerIdentity"]["individualIdentity"]["name"]["givenNames"] = response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerIndividualIdentity.name.givenNames;
   
   if ("address" in response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerIndividualIdentity){
   newresponse["payerIdentity"]["individualIdentity"]["address"] = {};
   if ("addressLine1" in response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerIndividualIdentity.address)
       newresponse["payerIdentity"]["individualIdentity"]["address"]["addressLine1"] = response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerIndividualIdentity.address.addressLine1;
   if ("addressLine2" in response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerIndividualIdentity.address)
       newresponse["payerIdentity"]["individualIdentity"]["address"]["addressLine2"] = response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerIndividualIdentity.address.addressLine2;
   if ("addressLine3" in response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerIndividualIdentity.address)
       newresponse["payerIdentity"]["individualIdentity"]["address"]["addressLine3"] = response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerIndividualIdentity.address.addressLine3;
   if ("city" in response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerIndividualIdentity.address)
       newresponse["payerIdentity"]["individualIdentity"]["address"]["city"] = response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerIndividualIdentity.address.city;
   if ("country" in response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerIndividualIdentity.address)
       newresponse["payerIdentity"]["individualIdentity"]["address"]["country"] = response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerIndividualIdentity.address.country;
   if ("postcode" in response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerIndividualIdentity.address)
       newresponse["payerIdentity"]["individualIdentity"]["address"]["postcode"] = response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerIndividualIdentity.address.postcode;
   if ("province" in response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerIndividualIdentity.address)
       newresponse["payerIdentity"]["individualIdentity"]["address"]["province"] = response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerIndividualIdentity.address.province;
   }
   
   if(response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerIndividualIdentity.birthInformation){
   newresponse["payerIdentity"]["individualIdentity"]["birthInformation"] = {};
   if ("cityOfBirth" in response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerIndividualIdentity.birthInformation)
       newresponse["payerIdentity"]["individualIdentity"]["birthInformation"]["cityOfBirth"] = response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerIndividualIdentity.birthInformation.cityOfBirth;
   if ("countryOfBirth" in response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerIndividualIdentity.birthInformation)
       newresponse["payerIdentity"]["individualIdentity"]["birthInformation"]["countryOfBirth"] = response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerIndividualIdentity.birthInformation.countryOfBirth;
   if ("dateOfBirth" in response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerIndividualIdentity.birthInformation)
       newresponse["payerIdentity"]["individualIdentity"]["birthInformation"]["dateOfBirth"] = response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerIndividualIdentity.birthInformation.dateOfBirth;
   }
   
   
   if(response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerIndividualIdentity.identificationList!="NULL"){
   if (Array.isArray(response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerIndividualIdentity.identificationList.identification)) {
       newresponse["payerIdentity"]["individualIdentity"]["identification"] = [];
       var total = response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerIndividualIdentity.identificationList.identification.length;
       if (total > 0)
           for (var i = 0; i < total; i++) {
               var t = {
                   "idType": response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerIndividualIdentity.identificationList.identification[i].idType,
                   "identificationCountry": response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerIndividualIdentity.identificationList.identification[i].identificationCountry,
                   "identificationNumber": response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerIndividualIdentity.identificationList.identification[i].identificationNumber,
                   "validFromDate": response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerIndividualIdentity.identificationList.identification[i].validFromDate,
                   "validToDate": response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerIndividualIdentity.identificationList.identification[i].validToDate
               };
               newresponse["payerIdentity"]["individualIdentity"]["identification"][i] = t;
           }
   } else if ("identification" in response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerIndividualIdentity.identificationList) {
       newresponse["payerIdentity"]["individualIdentity"]["identification"] = [];
           var t = {
           "idType": response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerIndividualIdentity.identificationList.identification.idType,
           "identificationCountry": response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerIndividualIdentity.identificationList.identification.identificationCountry,
           "identificationNumber": response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerIndividualIdentity.identificationList.identification.identificationNumber,
           "validFromDate": response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerIndividualIdentity.identificationList.identification.validFromDate,
           "validToDate": response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerIndividualIdentity.identificationList.identification.validToDate
       };
       newresponse["payerIdentity"]["individualIdentity"]["identification"][0] = t;
   }
   }
   }

   
   if(response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerLegalEntityIdentity){
   newresponse["payerIdentity"]["legalEntityIdentity"] = {};
   if ("legalEntityName" in response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerLegalEntityIdentity)
       newresponse["payerIdentity"]["legalEntityIdentity"]["legalEntityName"] = response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerLegalEntityIdentity.legalEntityName;

  if ("legalEntityRegistration" in response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerLegalEntityIdentity){
   newresponse["payerIdentity"]["legalEntityIdentity"]["legalEntityRegistration"] = {};
   if ("legalEntityRegistrationCountry" in response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerLegalEntityIdentity.legalEntityRegistration)
       newresponse["payerIdentity"]["legalEntityIdentity"]["legalEntityRegistration"]["legalEntityRegistrationCountry"] = response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerLegalEntityIdentity.legalEntityRegistration.legalEntityRegistrationCountry;
   if ("legalEntityRegistrationNumber" in response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerLegalEntityIdentity.legalEntityRegistration)
       newresponse["payerIdentity"]["legalEntityIdentity"]["legalEntityRegistration"]["legalEntityRegistrationNumber"] = response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerLegalEntityIdentity.legalEntityRegistration.legalEntityRegistrationNumber;
   if ("legalEntityRegistrationProvince" in response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerLegalEntityIdentity.legalEntityRegistration)
       newresponse["payerIdentity"]["legalEntityIdentity"]["legalEntityRegistration"]["legalEntityRegistrationProvince"] = response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerLegalEntityIdentity.legalEntityRegistration.legalEntityRegistrationProvince;
     }

  if ("address" in response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerLegalEntityIdentity){
   newresponse["payerIdentity"]["legalEntityIdentity"]["address"] = {};
   if ("addressLine1" in response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerLegalEntityIdentity.address)
       newresponse["payerIdentity"]["legalEntityIdentity"]["address"]["addressLine1"] = response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerLegalEntityIdentity.address.addressLine1;
   if ("addressLine2" in response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerLegalEntityIdentity.address)
       newresponse["payerIdentity"]["legalEntityIdentity"]["address"]["addressLine2"] = response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerLegalEntityIdentity.address.addressLine2;
   if ("addressLine3" in response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerLegalEntityIdentity.address)
       newresponse["payerIdentity"]["legalEntityIdentity"]["address"]["addressLine3"] = response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerLegalEntityIdentity.address.addressLine3;
   if ("city" in response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerLegalEntityIdentity.address)
       newresponse["payerIdentity"]["legalEntityIdentity"]["address"]["city"] = response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerLegalEntityIdentity.address.city;
   if ("country" in response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerLegalEntityIdentity.address)
       newresponse["payerIdentity"]["legalEntityIdentity"]["address"]["country"] = response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerLegalEntityIdentity.address.country;
   if ("postcode" in response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerLegalEntityIdentity.address)
       newresponse["payerIdentity"]["legalEntityIdentity"]["address"]["postcode"] = response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerLegalEntityIdentity.address.postcode;
   if ("province" in response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerLegalEntityIdentity.address)
       newresponse["payerIdentity"]["legalEntityIdentity"]["address"]["province"] = response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerLegalEntityIdentity.address.province;
  }

   }


   
   if(response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerUnstructuredIdentity){
   if (Array.isArray(response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerUnstructuredIdentity.unstructuredIdentityData)) {
       newresponse["payerIdentity"]["unstructuredIdentity"] = [];
       var total = response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerUnstructuredIdentity.unstructuredIdentityData.length;
       if (total > 0)
           for (var i = 0; i < total; i++) {
               var t = {
                   "key": response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerUnstructuredIdentity.unstructuredIdentityData[i].unstructuredIdentityDataKey,
                   "value": response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerUnstructuredIdentity.unstructuredIdentityData[i].unstructuredIdentityDataValue
               };
               newresponse["payerIdentity"]["unstructuredIdentity"][i] = t;
           }
   } else if ("unstructuredIdentityData" in response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerUnstructuredIdentity) {
       newresponse["payerIdentity"]["unstructuredIdentity"] = [];
       var t = {
           "key": response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerUnstructuredIdentity.unstructuredIdentityData.unstructuredIdentityDataKey,
           "value": response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.payerUnstructuredIdentity.unstructuredIdentityData.unstructuredIdentityDataValue
       };
       newresponse["payerIdentity"]["unstructuredIdentity"][0] = t;
   }
   }
   if(response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.additionalDataList){
   if (Array.isArray(response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.additionalDataList.additionalData)) {
       newresponse["payerIdentity"]["additionalData"] = [];
       var total = response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.additionalDataList.additionalData.length;
       if (total > 0)
           for (var i = 0; i < total; i++) {
               var t = {
                   "key": response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.additionalDataList.additionalData[i].additionalDataKey,
                   "value": response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.additionalDataList.additionalData[i].additionalDataValue
               };
               newresponse["payerIdentity"]["additionalData"][i] = t;
           }
   } else if ("additionalData" in response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.additionalDataList) {
       newresponse["payerIdentity"]["additionalData"] = [];
       var t = {
           "key": response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.additionalDataList.additionalData.additionalDataKey,
           "value": response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.additionalDataList.additionalData.additionalDataValue
       };
       newresponse["payerIdentity"]["additionalData"][0] = t;
   }
   }
 
 if(response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.createdDate){
   newresponse["createdDate"] = response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.createdDate;
 }
 if(response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.expiredDate){
   newresponse["expiredDate"] = response.submitDocumentResponse.submitDocumentReturn.getPayerIdentityResponse.payerIdentity.expiredDate;
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