var request=JSON.parse(context.getVariable('request.content'));

var latestrequest = {
   "parameters": {
       "@xmlns": {
           "ns17": "http://customer.endpoint.earthport.com/api/merchant/v3/services/validateBeneficiaryBankAccount",
           "ns3": "http://customer.endpoint.earthport.com/api/merchant/v2/components/identityBase",
           "ns4": "http://customer.endpoint.earthport.com/api/merchant/v3/components/bankBase"
       },
       "ns17:validateBeneficiaryBankAccount": {

       }
   }
};
var b = {
   "version": "3.1"
};

latestrequest.parameters["ns17:validateBeneficiaryBankAccount"]["#attrs"] = b;

latestrequest.parameters["ns17:validateBeneficiaryBankAccount"]["ns17:beneficiaryBankAccount"] = {};
latestrequest.parameters["ns17:validateBeneficiaryBankAccount"]["ns17:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"] = {};

// Individual Identity
if('beneficiaryIdentity' in request){
if ('individualIdentity' in request.beneficiaryIdentity) {
   latestrequest.parameters["ns17:validateBeneficiaryBankAccount"]["ns17:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryIndividualIdentity"] = {};
   if ('name' in request.beneficiaryIdentity.individualIdentity) {
       latestrequest.parameters["ns17:validateBeneficiaryBankAccount"]["ns17:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryIndividualIdentity"]["ns3:name"] = {};
       if ('givenNames' in request.beneficiaryIdentity.individualIdentity.name)
           latestrequest.parameters["ns17:validateBeneficiaryBankAccount"]["ns17:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryIndividualIdentity"]["ns3:name"]["ns3:givenNames"] = request.beneficiaryIdentity.individualIdentity.name.givenNames;
       if ('familyName' in request.beneficiaryIdentity.individualIdentity.name)
           latestrequest.parameters["ns17:validateBeneficiaryBankAccount"]["ns17:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryIndividualIdentity"]["ns3:name"]["ns3:familyName"] = request.beneficiaryIdentity.individualIdentity.name.familyName;
   }
   if ('address' in request.beneficiaryIdentity.individualIdentity) {
       latestrequest.parameters["ns17:validateBeneficiaryBankAccount"]["ns17:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryIndividualIdentity"]["ns3:address"] = {};
       if ('addressLine1' in request.beneficiaryIdentity.individualIdentity.address)
           latestrequest.parameters["ns17:validateBeneficiaryBankAccount"]["ns17:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryIndividualIdentity"]["ns3:address"]["ns3:addressLine1"] = request.beneficiaryIdentity.individualIdentity.address.addressLine1;
       if ('addressLine2' in request.beneficiaryIdentity.individualIdentity.address)
           latestrequest.parameters["ns17:validateBeneficiaryBankAccount"]["ns17:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryIndividualIdentity"]["ns3:address"]["ns3:addressLine2"] = request.beneficiaryIdentity.individualIdentity.address.addressLine2;
       if ('addressLine3' in request.beneficiaryIdentity.individualIdentity.address)
           latestrequest.parameters["ns17:validateBeneficiaryBankAccount"]["ns17:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryIndividualIdentity"]["ns3:address"]["ns3:addressLine3"] = request.beneficiaryIdentity.individualIdentity.address.addressLine3;
       if ('city' in request.beneficiaryIdentity.individualIdentity.address)
           latestrequest.parameters["ns17:validateBeneficiaryBankAccount"]["ns17:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryIndividualIdentity"]["ns3:address"]["ns3:city"] = request.beneficiaryIdentity.individualIdentity.address.city;
       if ('province' in request.beneficiaryIdentity.individualIdentity.address)
           latestrequest.parameters["ns17:validateBeneficiaryBankAccount"]["ns17:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryIndividualIdentity"]["ns3:address"]["ns3:province"] = request.beneficiaryIdentity.individualIdentity.address.province;
       if ('postcode' in request.beneficiaryIdentity.individualIdentity.address)
           latestrequest.parameters["ns17:validateBeneficiaryBankAccount"]["ns17:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryIndividualIdentity"]["ns3:address"]["ns3:postcode"] = request.beneficiaryIdentity.individualIdentity.address.postcode;
       if ('country' in request.beneficiaryIdentity.individualIdentity.address)
           latestrequest.parameters["ns17:validateBeneficiaryBankAccount"]["ns17:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryIndividualIdentity"]["ns3:address"]["ns3:country"] = request.beneficiaryIdentity.individualIdentity.address.country;
   }
   if (Array.isArray(request.beneficiaryIdentity.individualIdentity.identification)) {
       var totalId = request.beneficiaryIdentity.individualIdentity.identification.length;
       if (totalId > 0) {
           latestrequest.parameters["ns17:validateBeneficiaryBankAccount"]["ns17:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryIndividualIdentity"]["ns3:identificationList"] = {};
           latestrequest.parameters["ns17:validateBeneficiaryBankAccount"]["ns17:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryIndividualIdentity"]["ns3:identificationList"]["ns3:identification"] = []
           for (var i = 0; i < totalId; i++) {
               var id = {
                   "ns3:idType": request.beneficiaryIdentity.individualIdentity.identification[i].idType,
                   "ns3:identificationNumber": request.beneficiaryIdentity.individualIdentity.identification[i].identificationNumber,
                   "ns3:identificationCountry": request.beneficiaryIdentity.individualIdentity.identification[i].identificationCountry,
                   "ns3:validFromDate": request.beneficiaryIdentity.individualIdentity.identification[i].validFromDate,
                   "ns3:validToDate": request.beneficiaryIdentity.individualIdentity.identification[i].validToDate
               };
               latestrequest.parameters["ns17:validateBeneficiaryBankAccount"]["ns17:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryIndividualIdentity"]["ns3:identificationList"]["ns3:identification"][i] = id;
           }
       }
   }

   if ('birthInformation' in request.beneficiaryIdentity.individualIdentity) {
       latestrequest.parameters["ns17:validateBeneficiaryBankAccount"]["ns17:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryIndividualIdentity"]["ns3:birthInformation"] = {};
       if ('cityOfBirth' in request.beneficiaryIdentity.individualIdentity.birthInformation)
           latestrequest.parameters["ns17:validateBeneficiaryBankAccount"]["ns17:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryIndividualIdentity"]["ns3:birthInformation"]["ns3:cityOfBirth"] = request.beneficiaryIdentity.individualIdentity.birthInformation.cityOfBirth;
       if ('countryOfBirth' in request.beneficiaryIdentity.individualIdentity.birthInformation)
           latestrequest.parameters["ns17:validateBeneficiaryBankAccount"]["ns17:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryIndividualIdentity"]["ns3:birthInformation"]["ns3:countryOfBirth"] = request.beneficiaryIdentity.individualIdentity.birthInformation.countryOfBirth;
       if ('dateOfBirth' in request.beneficiaryIdentity.individualIdentity.birthInformation)
           latestrequest.parameters["ns17:validateBeneficiaryBankAccount"]["ns17:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryIndividualIdentity"]["ns3:birthInformation"]["ns3:dateOfBirth"] = request.beneficiaryIdentity.individualIdentity.birthInformation.dateOfBirth;

   }
}


// Legal Entity Identity

if ('legalEntityIdentity' in request.beneficiaryIdentity) {

   latestrequest.parameters["ns17:validateBeneficiaryBankAccount"]["ns17:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryLegalEntityIdentity"] = {};
   if ('legalEntityName' in request.beneficiaryIdentity.legalEntityIdentity)
       latestrequest.parameters["ns17:validateBeneficiaryBankAccount"]["ns17:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryLegalEntityIdentity"]["ns3:legalEntityName"] = request.beneficiaryIdentity.legalEntityIdentity.legalEntityName;
   if ('legalEntityRegistration' in request.beneficiaryIdentity.legalEntityIdentity) {
       latestrequest.parameters["ns17:validateBeneficiaryBankAccount"]["ns17:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryLegalEntityIdentity"]["ns3:legalEntityRegistration"] = {};
       if ('legalEntityRegistrationNumber' in request.beneficiaryIdentity.legalEntityIdentity.legalEntityRegistration)
           latestrequest.parameters["ns17:validateBeneficiaryBankAccount"]["ns17:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryLegalEntityIdentity"]["ns3:legalEntityRegistration"]["ns3:legalEntityRegistrationNumber"] = request.beneficiaryIdentity.legalEntityIdentity.legalEntityRegistration.legalEntityRegistrationNumber;
       if ('legalEntityRegistrationCountry' in request.beneficiaryIdentity.legalEntityIdentity.legalEntityRegistration)
           latestrequest.parameters["ns17:validateBeneficiaryBankAccount"]["ns17:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryLegalEntityIdentity"]["ns3:legalEntityRegistration"]["ns3:legalEntityRegistrationCountry"] = request.beneficiaryIdentity.legalEntityIdentity.legalEntityRegistration.legalEntityRegistrationCountry;
       if ('legalEntityRegistrationProvince' in request.beneficiaryIdentity.legalEntityIdentity.legalEntityRegistration)
           latestrequest.parameters["ns17:validateBeneficiaryBankAccount"]["ns17:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryLegalEntityIdentity"]["ns3:legalEntityRegistration"]["ns3:legalEntityRegistrationProvince"] = request.beneficiaryIdentity.legalEntityIdentity.legalEntityRegistration.legalEntityRegistrationProvince;

   }
   if (request.beneficiaryIdentity.legalEntityIdentity.address) {
       latestrequest.parameters["ns17:validateBeneficiaryBankAccount"]["ns17:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryLegalEntityIdentity"]["ns3:address"] = {};
       if ('addressLine1' in request.beneficiaryIdentity.legalEntityIdentity.address)
           latestrequest.parameters["ns17:validateBeneficiaryBankAccount"]["ns17:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryLegalEntityIdentity"]["ns3:address"]["ns3:addressLine1"] = request.beneficiaryIdentity.legalEntityIdentity.address.addressLine1;
       if ('addressLine2' in request.beneficiaryIdentity.legalEntityIdentity.address)
           latestrequest.parameters["ns17:validateBeneficiaryBankAccount"]["ns17:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryLegalEntityIdentity"]["ns3:address"]["ns3:addressLine2"] = request.beneficiaryIdentity.legalEntityIdentity.address.addressLine2;
       if ('addressLine3' in request.beneficiaryIdentity.legalEntityIdentity.address)
           latestrequest.parameters["ns17:validateBeneficiaryBankAccount"]["ns17:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryLegalEntityIdentity"]["ns3:address"]["ns3:addressLine3"] = request.beneficiaryIdentity.legalEntityIdentity.address.addressLine3;
       if ('city' in request.beneficiaryIdentity.legalEntityIdentity.address)
           latestrequest.parameters["ns17:validateBeneficiaryBankAccount"]["ns17:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryLegalEntityIdentity"]["ns3:address"]["ns3:city"] = request.beneficiaryIdentity.legalEntityIdentity.address.city;
       if ('province' in request.beneficiaryIdentity.legalEntityIdentity.address)
           latestrequest.parameters["ns17:validateBeneficiaryBankAccount"]["ns17:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryLegalEntityIdentity"]["ns3:address"]["ns3:province"] = request.beneficiaryIdentity.legalEntityIdentity.address.province;
       if ('postcode' in request.beneficiaryIdentity.legalEntityIdentity.address)
           latestrequest.parameters["ns17:validateBeneficiaryBankAccount"]["ns17:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryLegalEntityIdentity"]["ns3:address"]["ns3:postcode"] = request.beneficiaryIdentity.legalEntityIdentity.address.postcode;
       if ('country' in request.beneficiaryIdentity.legalEntityIdentity.address)
           latestrequest.parameters["ns17:validateBeneficiaryBankAccount"]["ns17:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryLegalEntityIdentity"]["ns3:address"]["ns3:country"] = request.beneficiaryIdentity.legalEntityIdentity.address.country;
   }
}

//Unstructured Identity

if (Array.isArray(request.beneficiaryIdentity.unstructuredIdentity)) {
   var totalId = request.beneficiaryIdentity.unstructuredIdentity.length;
   if (totalId > 0) {
       var id;
       latestrequest.parameters["ns17:validateBeneficiaryBankAccount"]["ns17:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryUnstructuredIdentity"] = {};
       latestrequest.parameters["ns17:validateBeneficiaryBankAccount"]["ns17:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryUnstructuredIdentity"]["ns3:unstructuredIdentityData"] = [];
       for (var i = 0; i < totalId; i++) {
           id = {
               "ns3:unstructuredIdentityDataKey": request.beneficiaryIdentity.unstructuredIdentity[i].key,
               "ns3:unstructuredIdentityDataValue": request.beneficiaryIdentity.unstructuredIdentity[i].value
           };
           latestrequest.parameters["ns17:validateBeneficiaryBankAccount"]["ns17:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryUnstructuredIdentity"]["ns3:unstructuredIdentityData"][i] = id;
       }
   }
}


//Additional Data

if (Array.isArray(request.beneficiaryIdentity.additionalData)) {
   var totalId = request.beneficiaryIdentity.additionalData.length;
   if (totalId > 0) {
       latestrequest.parameters["ns17:validateBeneficiaryBankAccount"]["ns17:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:additionalDataList"] = {};
       latestrequest.parameters["ns17:validateBeneficiaryBankAccount"]["ns17:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:additionalDataList"]["ns3:additionalData"] = [];
       for (var i = 0; i < totalId; i++)

       {

           var id = {
               "ns3:additionalDataKey": request.beneficiaryIdentity.additionalData[i].key,
               "ns3:additionalDataValue": request.beneficiaryIdentity.additionalData[i].value
           };

           latestrequest.parameters["ns17:validateBeneficiaryBankAccount"]["ns17:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:additionalDataList"]["ns3:additionalData"][i] = id;

       }

   }
}
}

if ('description' in request)
   latestrequest.parameters["ns17:validateBeneficiaryBankAccount"]["ns17:beneficiaryBankAccount"]["ns4:description"] = request.description;
if ('countryCode' in request)
   latestrequest.parameters["ns17:validateBeneficiaryBankAccount"]["ns17:beneficiaryBankAccount"]["ns4:countryCode"] = request.countryCode;
if ('currencyCode' in request)
   latestrequest.parameters["ns17:validateBeneficiaryBankAccount"]["ns17:beneficiaryBankAccount"]["ns4:currencyCode"] = request.currencyCode;

//bank account

if (Array.isArray(request.bankAccountDetails)) {
   var totalId = request.bankAccountDetails.length;
   if (totalId > 0) {
       var id;
       latestrequest.parameters["ns17:validateBeneficiaryBankAccount"]["ns17:beneficiaryBankAccount"]["ns4:bankAccountDetails"] = [];
       for (var i = 0; i < totalId; i++) {
           id = {
               "ns4:key": request.bankAccountDetails[i].key,
               "ns4:value": request.bankAccountDetails[i].value
           };
           latestrequest.parameters["ns17:validateBeneficiaryBankAccount"]["ns17:beneficiaryBankAccount"]["ns4:bankAccountDetails"][i] = id;
       }
   }
}




context.setVariable('request.content', JSON.stringify(latestrequest));