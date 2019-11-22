var request = JSON.parse(context.getVariable('request.content'));
var latestrequest = {
   "parameters": {
       "@xmlns": {
           "ns13": "http://customer.endpoint.earthport.com/api/merchant/v1/createOrUpdateUserAddBeneficiaryBankAccountAndPayout",
     "ns1": "http://customer.endpoint.earthport.com/api/merchant/v2/components/core",
     "ns4": "http://customer.endpoint.earthport.com/api/merchant/v3/components/bankBase",
     "ns3": "http://customer.endpoint.earthport.com/api/merchant/v2/components/identityBase",
     "ns8": "http://customer.endpoint.earthport.com/api/merchant/v1/components/payoutBase"
       },
       "ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout": {

       }
   }
};

var b = {
   "version": "1.2"
};



latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["#attrs"] = b;
if('user' in request){
if('userID' in request.user){
if('merchantUserID' in request.user.userID)
latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:merchantUserIdentity"] = request.user.userID.merchantUserID;
}
if('accountCurrency' in request.user)
latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:accountCurrency"] = request.user.accountCurrency;

if('managedMerchantName' in request.user)
latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:managedMerchantIdentity"] = request.user.managedMerchantName;


latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:payerIdentity"] = {};

// Individual Identity
if ('individualIdentity' in request.user.payerIdentity) {
   latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:payerIdentity"]["ns3:payerIndividualIdentity"] = {};
   if('name' in request.user.payerIdentity.individualIdentity){
   latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:name"] = {};
   if('givenNames' in request.user.payerIdentity.individualIdentity.name)
   latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:name"]["ns3:givenNames"] = request.user.payerIdentity.individualIdentity.name.givenNames;
   if('familyName' in request.user.payerIdentity.individualIdentity.name)
   latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:name"]["ns3:familyName"] = request.user.payerIdentity.individualIdentity.name.familyName;
}   
if('address' in request.user.payerIdentity.individualIdentity){
   latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:address"] = {};
   if('addressLine1' in request.user.payerIdentity.individualIdentity.address)
   latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:address"]["ns3:addressLine1"] = request.user.payerIdentity.individualIdentity.address.addressLine1;
   if ('addressLine2' in request.user.payerIdentity.individualIdentity.address)
       latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:address"]["ns3:addressLine2"] = request.user.payerIdentity.individualIdentity.address.addressLine2;
   if ('addressLine3' in request.user.payerIdentity.individualIdentity.address)
       latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:address"]["ns3:addressLine3"] = request.user.payerIdentity.individualIdentity.address.addressLine3;
   if('city' in request.user.payerIdentity.individualIdentity.address)
       latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:address"]["ns3:city"] = request.user.payerIdentity.individualIdentity.address.city;
   if ('province' in request.user.payerIdentity.individualIdentity.address)
       latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:address"]["ns3:province"] = request.user.payerIdentity.individualIdentity.address.province;
   if ('postcode' in request.user.payerIdentity.individualIdentity.address)
       latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:address"]["ns3:postcode"] = request.user.payerIdentity.individualIdentity.address.postcode;
   if('country' in request.user.payerIdentity.individualIdentity.address)
       latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:address"]["ns3:country"] = request.user.payerIdentity.individualIdentity.address.country;
}

   if (Array.isArray(request.user.payerIdentity.individualIdentity.identification)) {
       var totalId = request.user.payerIdentity.individualIdentity.identification.length;
       if (totalId > 0) {
           latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:identificationList"] = {};
           latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:identificationList"]["ns3:identification"] = []
           for (var i = 0; i < totalId; i++) {
               var id = {
                   "ns3:idType": request.user.payerIdentity.individualIdentity.identification[i].idType,
                   "ns3:identificationNumber": request.user.payerIdentity.individualIdentity.identification[i].identificationNumber,
                   "ns3:identificationCountry": request.user.payerIdentity.individualIdentity.identification[i].identificationCountry,
                   "ns3:validFromDate": request.user.payerIdentity.individualIdentity.identification[i].validFromDate,
                   "ns3:validToDate": request.user.payerIdentity.individualIdentity.identification[i].validToDate
               };
               latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:identificationList"]["ns3:identification"][i] = id;
           }
       }
   }

   if ('birthInformation' in request.user.payerIdentity.individualIdentity) {
       latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:birthInformation"] = {};
       if('cityOfBirth' in request.user.payerIdentity.individualIdentity.birthInformation)
       latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:birthInformation"]["ns3:cityOfBirth"] = request.user.payerIdentity.individualIdentity.birthInformation.cityOfBirth;
       if('countryOfBirth' in request.user.payerIdentity.individualIdentity.birthInformation)
       latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:birthInformation"]["ns3:countryOfBirth"] = request.user.payerIdentity.individualIdentity.birthInformation.countryOfBirth;
       if('dateOfBirth' in request.user.payerIdentity.individualIdentity.birthInformation)
       latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:birthInformation"]["ns3:dateOfBirth"] = request.user.payerIdentity.individualIdentity.birthInformation.dateOfBirth;

   }
}

// Legal Entity Identity

if ('legalEntityIdentity' in request.user.payerIdentity) {
   latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:payerIdentity"]["ns3:payerLegalEntityIdentity"] = {};
   if('legalEntityName' in request.user.payerIdentity.legalEntityIdentity)
   latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:payerIdentity"]["ns3:payerLegalEntityIdentity"]["ns3:legalEntityName"] = request.user.payerIdentity.legalEntityIdentity.legalEntityName;
   if('legalEntityRegistration' in request.user.payerIdentity.legalEntityIdentity) {
   latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:payerIdentity"]["ns3:payerLegalEntityIdentity"]["ns3:legalEntityRegistration"] = {};
   if('legalEntityRegistrationNumber' in request.user.payerIdentity.legalEntityIdentity.legalEntityRegistration)
   latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:payerIdentity"]["ns3:payerLegalEntityIdentity"]["ns3:legalEntityRegistration"]["ns3:legalEntityRegistrationNumber"] = request.user.payerIdentity.legalEntityIdentity.legalEntityRegistration.legalEntityRegistrationNumber;
   if('legalEntityRegistrationCountry' in request.user.payerIdentity.legalEntityIdentity.legalEntityRegistration)
   latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:payerIdentity"]["ns3:payerLegalEntityIdentity"]["ns3:legalEntityRegistration"]["ns3:legalEntityRegistrationCountry"] = request.user.payerIdentity.legalEntityIdentity.legalEntityRegistration.legalEntityRegistrationCountry;
   if('legalEntityRegistrationProvince' in request.user.payerIdentity.legalEntityIdentity.legalEntityRegistration)
   latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:payerIdentity"]["ns3:payerLegalEntityIdentity"]["ns3:legalEntityRegistration"]["ns3:legalEntityRegistrationProvince"] = request.user.payerIdentity.legalEntityIdentity.legalEntityRegistration.legalEntityRegistrationProvince;
}

   if ('address' in request.user.payerIdentity.legalEntityIdentity) {
       latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:payerIdentity"]["ns3:payerLegalEntityIdentity"]["ns3:address"] = {};
       if('addressLine1' in request.user.payerIdentity.legalEntityIdentity.address)
       latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:payerIdentity"]["ns3:payerLegalEntityIdentity"]["ns3:address"]["ns3:addressLine1"] = request.user.payerIdentity.legalEntityIdentity.address.addressLine1;
       if ('addressLine2' in request.user.payerIdentity.legalEntityIdentity.address)
           latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:payerIdentity"]["ns3:payerLegalEntityIdentity"]["ns3:address"]["ns3:addressLine2"] = request.user.payerIdentity.legalEntityIdentity.address.addressLine2;
       if ('addressLine3' in request.user.payerIdentity.legalEntityIdentity.address)
           latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:payerIdentity"]["ns3:payerLegalEntityIdentity"]["ns3:address"]["ns3:addressLine3"] = request.user.payerIdentity.legalEntityIdentity.address.addressLine3;
       if('city' in request.user.payerIdentity.legalEntityIdentity.address)
           latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:payerIdentity"]["ns3:payerLegalEntityIdentity"]["ns3:address"]["ns3:city"] = request.user.payerIdentity.legalEntityIdentity.address.city;
       if ('province' in request.user.payerIdentity.legalEntityIdentity.address)
           latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:payerIdentity"]["ns3:payerLegalEntityIdentity"]["ns3:address"]["ns3:province"] = request.user.payerIdentity.legalEntityIdentity.address.province;
       if ('postcode' in request.user.payerIdentity.legalEntityIdentity.address)
           latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:payerIdentity"]["ns3:payerLegalEntityIdentity"]["ns3:address"]["ns3:postcode"] = request.user.payerIdentity.legalEntityIdentity.address.postcode;
       if('country' in request.user.payerIdentity.legalEntityIdentity.address)
           latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:payerIdentity"]["ns3:payerLegalEntityIdentity"]["ns3:address"]["ns3:country"] = request.user.payerIdentity.legalEntityIdentity.address.country;
   }
}

//Unstructured Identity

if (Array.isArray(request.user.payerIdentity.unstructuredIdentity)) {
   var totalId = request.user.payerIdentity.unstructuredIdentity.length;
   if (totalId > 0) {
       var id;
       latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:payerIdentity"]["ns3:payerUnstructuredIdentity"] = {};
       latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:payerIdentity"]["ns3:payerUnstructuredIdentity"]["ns3:unstructuredIdentityData"] = [];
       for (var i = 0; i < totalId; i++) {
           id = {
               "ns3:unstructuredIdentityDataKey": request.user.payerIdentity.unstructuredIdentity[i].key,
               "ns3:unstructuredIdentityDataValue": request.user.payerIdentity.unstructuredIdentity[i].value
           };
           latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:payerIdentity"]["ns3:payerUnstructuredIdentity"]["ns3:unstructuredIdentityData"][i] = id;
       }
   }
}


//Additional Data

if (Array.isArray(request.user.payerIdentity.additionalData)) {
   var totalId = request.user.payerIdentity.additionalData.length;
   if (totalId > 0) {
       latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:payerIdentity"]["ns3:additionalDataList"] = {};
       latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:payerIdentity"]["ns3:additionalDataList"]["ns3:additionalData"] = [];
       for (var i = 0; i < totalId; i++)
       {

           var id = {
               "ns3:additionalDataKey": request.user.payerIdentity.additionalData[i].key,
               "ns3:additionalDataValue": request.user.payerIdentity.additionalData[i].value
           };

           latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:payerIdentity"]["ns3:additionalDataList"]["ns3:additionalData"][i] = id;
       }

   }
}


}



if('bankAccount' in request){
if('benBankID' in request.bankAccount){
if('merchantBankID' in request.bankAccount.benBankID)
{
latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:merchantBankID"] = request.bankAccount.benBankID.merchantBankID;
}


latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:beneficiaryBankAccount"] = {};
latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"] = {};

// Individual Identity

if ('individualIdentity' in request.bankAccount.beneficiaryIdentity) {
   latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryIndividualIdentity"] = {};
   if ('name' in request.bankAccount.beneficiaryIdentity.individualIdentity) {
       latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryIndividualIdentity"]["ns3:name"] = {};
       if ('givenNames' in request.bankAccount.beneficiaryIdentity.individualIdentity.name)
           latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryIndividualIdentity"]["ns3:name"]["ns3:givenNames"] = request.bankAccount.beneficiaryIdentity.individualIdentity.name.givenNames;
       if ('familyName' in request.bankAccount.beneficiaryIdentity.individualIdentity.name)
           latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryIndividualIdentity"]["ns3:name"]["ns3:familyName"] = request.bankAccount.beneficiaryIdentity.individualIdentity.name.familyName;
   }
   if ('address' in request.bankAccount.beneficiaryIdentity.individualIdentity) {
       latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryIndividualIdentity"]["ns3:address"] = {};
       if ('addressLine1' in request.bankAccount.beneficiaryIdentity.individualIdentity.address)
           latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryIndividualIdentity"]["ns3:address"]["ns3:addressLine1"] = request.bankAccount.beneficiaryIdentity.individualIdentity.address.addressLine1;
       if ('addressLine2' in request.bankAccount.beneficiaryIdentity.individualIdentity.address)
           latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryIndividualIdentity"]["ns3:address"]["ns3:addressLine2"] = request.bankAccount.beneficiaryIdentity.individualIdentity.address.addressLine2;
       if ('addressLine3' in request.bankAccount.beneficiaryIdentity.individualIdentity.address)
           latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryIndividualIdentity"]["ns3:address"]["ns3:addressLine3"] = request.bankAccount.beneficiaryIdentity.individualIdentity.address.addressLine3;
       if ('city' in request.bankAccount.beneficiaryIdentity.individualIdentity.address)
           latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryIndividualIdentity"]["ns3:address"]["ns3:city"] = request.bankAccount.beneficiaryIdentity.individualIdentity.address.city;
       if ('province' in request.bankAccount.beneficiaryIdentity.individualIdentity.address)
           latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryIndividualIdentity"]["ns3:address"]["ns3:province"] = request.bankAccount.beneficiaryIdentity.individualIdentity.address.province;
       if ('postcode' in request.bankAccount.beneficiaryIdentity.individualIdentity.address)
           latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryIndividualIdentity"]["ns3:address"]["ns3:postcode"] = request.bankAccount.beneficiaryIdentity.individualIdentity.address.postcode;
       if ('country' in request.bankAccount.beneficiaryIdentity.individualIdentity.address)
           latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryIndividualIdentity"]["ns3:address"]["ns3:country"] = request.bankAccount.beneficiaryIdentity.individualIdentity.address.country;
   }
   if (Array.isArray(request.bankAccount.beneficiaryIdentity.individualIdentity.identification)) {
       var totalId = request.bankAccount.beneficiaryIdentity.individualIdentity.identification.length;
       if (totalId > 0) {
           latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryIndividualIdentity"]["ns3:identificationList"] = {};
           latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryIndividualIdentity"]["ns3:identificationList"]["ns3:identification"] = []
           for (var i = 0; i < totalId; i++) {
               var id = {
                   "ns3:idType": request.bankAccount.beneficiaryIdentity.individualIdentity.identification[i].idType,
                   "ns3:identificationNumber": request.bankAccount.beneficiaryIdentity.individualIdentity.identification[i].identificationNumber,
                   "ns3:identificationCountry": request.bankAccount.beneficiaryIdentity.individualIdentity.identification[i].identificationCountry,
                   "ns3:validFromDate": request.bankAccount.beneficiaryIdentity.individualIdentity.identification[i].validFromDate,
                   "ns3:validToDate": request.bankAccount.beneficiaryIdentity.individualIdentity.identification[i].validToDate
               };
               latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryIndividualIdentity"]["ns3:identificationList"]["ns3:identification"][i] = id;
           }
       }
   }

   if ('birthInformation' in request.bankAccount.beneficiaryIdentity.individualIdentity) {
       latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryIndividualIdentity"]["ns3:birthInformation"] = {};
       if ('cityOfBirth' in request.bankAccount.beneficiaryIdentity.individualIdentity.birthInformation)
           latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryIndividualIdentity"]["ns3:birthInformation"]["ns3:cityOfBirth"] = request.bankAccount.beneficiaryIdentity.individualIdentity.birthInformation.cityOfBirth;
       if ('countryOfBirth' in request.bankAccount.beneficiaryIdentity.individualIdentity.birthInformation)
           latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryIndividualIdentity"]["ns3:birthInformation"]["ns3:countryOfBirth"] = request.bankAccount.beneficiaryIdentity.individualIdentity.birthInformation.countryOfBirth;
       if ('dateOfBirth' in request.bankAccount.beneficiaryIdentity.individualIdentity.birthInformation)
           latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryIndividualIdentity"]["ns3:birthInformation"]["ns3:dateOfBirth"] = request.bankAccount.beneficiaryIdentity.individualIdentity.birthInformation.dateOfBirth;

   }
}

// Legal Entity Identity

if ('legalEntityIdentity' in request.bankAccount.beneficiaryIdentity) {

   latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryLegalEntityIdentity"] = {};
   if ('legalEntityName' in request.bankAccount.beneficiaryIdentity.legalEntityIdentity)
       latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryLegalEntityIdentity"]["ns3:legalEntityName"] = request.bankAccount.beneficiaryIdentity.legalEntityIdentity.legalEntityName;
   if ('legalEntityRegistration' in request.bankAccount.beneficiaryIdentity.legalEntityIdentity) {
       latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryLegalEntityIdentity"]["ns3:legalEntityRegistration"] = {};
       if ('legalEntityRegistrationNumber' in request.bankAccount.beneficiaryIdentity.legalEntityIdentity.legalEntityRegistration)
           latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryLegalEntityIdentity"]["ns3:legalEntityRegistration"]["ns3:legalEntityRegistrationNumber"] = request.bankAccount.beneficiaryIdentity.legalEntityIdentity.legalEntityRegistration.legalEntityRegistrationNumber;
       if ('legalEntityRegistrationCountry' in request.bankAccount.beneficiaryIdentity.legalEntityIdentity.legalEntityRegistration)
           latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryLegalEntityIdentity"]["ns3:legalEntityRegistration"]["ns3:legalEntityRegistrationCountry"] = request.bankAccount.beneficiaryIdentity.legalEntityIdentity.legalEntityRegistration.legalEntityRegistrationCountry;
       if ('legalEntityRegistrationProvince' in request.bankAccount.beneficiaryIdentity.legalEntityIdentity.legalEntityRegistration)
           latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryLegalEntityIdentity"]["ns3:legalEntityRegistration"]["ns3:legalEntityRegistrationProvince"] = request.bankAccount.beneficiaryIdentity.legalEntityIdentity.legalEntityRegistration.legalEntityRegistrationProvince;

   }
   if (request.bankAccount.beneficiaryIdentity.legalEntityIdentity.address) {
       latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryLegalEntityIdentity"]["ns3:address"] = {};
       if ('addressLine1' in request.bankAccount.beneficiaryIdentity.legalEntityIdentity.address)
           latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryLegalEntityIdentity"]["ns3:address"]["ns3:addressLine1"] = request.bankAccount.beneficiaryIdentity.legalEntityIdentity.address.addressLine1;
       if ('addressLine2' in request.bankAccount.beneficiaryIdentity.legalEntityIdentity.address)
           latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryLegalEntityIdentity"]["ns3:address"]["ns3:addressLine2"] = request.bankAccount.beneficiaryIdentity.legalEntityIdentity.address.addressLine2;
       if ('addressLine3' in request.bankAccount.beneficiaryIdentity.legalEntityIdentity.address)
           latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryLegalEntityIdentity"]["ns3:address"]["ns3:addressLine3"] = request.bankAccount.beneficiaryIdentity.legalEntityIdentity.address.addressLine3;
       if ('city' in request.bankAccount.beneficiaryIdentity.legalEntityIdentity.address)
           latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryLegalEntityIdentity"]["ns3:address"]["ns3:city"] = request.bankAccount.beneficiaryIdentity.legalEntityIdentity.address.city;
       if ('province' in request.bankAccount.beneficiaryIdentity.legalEntityIdentity.address)
           latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryLegalEntityIdentity"]["ns3:address"]["ns3:province"] = request.bankAccount.beneficiaryIdentity.legalEntityIdentity.address.province;
       if ('postcode' in request.bankAccount.beneficiaryIdentity.legalEntityIdentity.address)
           latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryLegalEntityIdentity"]["ns3:address"]["ns3:postcode"] = request.bankAccount.beneficiaryIdentity.legalEntityIdentity.address.postcode;
       if ('country' in request.bankAccount.beneficiaryIdentity.legalEntityIdentity.address)
           latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryLegalEntityIdentity"]["ns3:address"]["ns3:country"] = request.bankAccount.beneficiaryIdentity.legalEntityIdentity.address.country;
   }
}

//Unstructured Identity

if (Array.isArray(request.bankAccount.beneficiaryIdentity.unstructuredIdentity)) {
   var totalId = request.bankAccount.beneficiaryIdentity.unstructuredIdentity.length;
   if (totalId > 0) {
       var id;
       latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryUnstructuredIdentity"] = {};
       latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryUnstructuredIdentity"]["ns3:unstructuredIdentityData"] = [];
       for (var i = 0; i < totalId; i++) {
           id = {
               "ns3:unstructuredIdentityDataKey": request.bankAccount.beneficiaryIdentity.unstructuredIdentity[i].key,
               "ns3:unstructuredIdentityDataValue": request.bankAccount.beneficiaryIdentity.unstructuredIdentity[i].value
           };
           latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryUnstructuredIdentity"]["ns3:unstructuredIdentityData"][i] = id;
       }
   }
}


//Additional Data

if (Array.isArray(request.bankAccount.beneficiaryIdentity.additionalData)) {
   var totalId = request.bankAccount.beneficiaryIdentity.additionalData.length;
   if (totalId > 0) {
       latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:additionalDataList"] = {};
       latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:additionalDataList"]["ns3:additionalData"] = [];
       for (var i = 0; i < totalId; i++)

       {

           var id = {
               "ns3:additionalDataKey": request.bankAccount.beneficiaryIdentity.additionalData[i].key,
               "ns3:additionalDataValue": request.bankAccount.beneficiaryIdentity.additionalData[i].value
           };

           latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:additionalDataList"]["ns3:additionalData"][i] = id;

       }

   }
}


if ('description' in request.bankAccount)
   latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:beneficiaryBankAccount"]["ns4:description"] = request.bankAccount.description;
if ('countryCode' in request.bankAccount)
   latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:beneficiaryBankAccount"]["ns4:countryCode"] = request.bankAccount.countryCode;
if ('currencyCode' in request.bankAccount)
   latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:beneficiaryBankAccount"]["ns4:currencyCode"] = request.bankAccount.currencyCode;

//bank account

if (Array.isArray(request.bankAccount.bankAccountDetails)) {
   var totalId = request.bankAccount.bankAccountDetails.length;
   if (totalId > 0) {
       var id;
       latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:beneficiaryBankAccount"]["ns4:bankAccountDetails"] = [];
       for (var i = 0; i < totalId; i++) {
           id = {
               "ns4:key": request.bankAccount.bankAccountDetails[i].key,
               "ns4:value": request.bankAccount.bankAccountDetails[i].value
           };
           latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:beneficiaryBankAccount"]["ns4:bankAccountDetails"][i] = id;
       }
   }
}

}
}





if('payment' in request){
if('transactionID' in request.payment){

if('merchantTransactionID' in request.payment.transactionID)
latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:merchantTransactionReference"]=request.payment.transactionID.merchantTransactionID;
}
if('payoutRequestAmount' in request.payment){
latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:payoutRequestAmount"]={};
if('currency' in request.payment.payoutRequestAmount)
latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:payoutRequestAmount"]["ns1:currency"]=request.payment.payoutRequestAmount.currency;
if('amount' in request.payment.payoutRequestAmount)
latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:payoutRequestAmount"]["ns1:amount"]=request.payment.payoutRequestAmount.amount;
}

if('beneficiaryAmountInformation' in request.payment){
latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:beneficiaryAmountInformation"]={};
if('beneficiaryAmount' in request.payment.beneficiaryAmountInformation)
latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:beneficiaryAmountInformation"]["ns13:beneficiaryAmount"]={};
if('currency' in request.payment.beneficiaryAmountInformation.beneficiaryAmount)
latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:beneficiaryAmountInformation"]["ns13:beneficiaryAmount"]["ns1:currency"]=request.payment.beneficiaryAmountInformation.beneficiaryAmount.currency;
if('amount' in request.payment.beneficiaryAmountInformation.beneficiaryAmount)
latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:beneficiaryAmountInformation"]["ns13:beneficiaryAmount"]["ns1:amount"]=request.payment.beneficiaryAmountInformation.beneficiaryAmount.amount;


if('payoutCurrency' in request.payment.beneficiaryAmountInformation)
latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:beneficiaryAmountInformation"]["ns13:payoutCurrency"]=request.payment.beneficiaryAmountInformation.payoutCurrency;
}

if('serviceLevel' in request.payment)
latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:serviceLevel"]=request.payment.serviceLevel;
if('beneficiaryStatementNarrative' in request.payment)
latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:beneficiaryStatementNarrative"]=request.payment.beneficiaryStatementNarrative;
if('fxTicketID' in request.payment)
latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:fxTicketID"]=request.payment.fxTicketID;
if('requestedFX' in request.payment)
latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:requestedFXType"]=request.payment.requestedFX;
if('payerType' in request.payment)
latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:payerType"]=request.payment.payerType;
if('payoutType' in request.payment)
latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:payoutType"]=request.payment.payoutType;

if(Array.isArray(request.payment.payoutDetails)) {
   var totalId = request.payment.payoutDetails.length;
   if(totalId>0){
    latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:payoutDetails"]=[];
  
   for ( var i = 0; i < totalId; i++)
  
       {
        
     var  id={ "ns8:key": request.payment.payoutDetails[i].key ,
           "ns8:value" : request.payment.payoutDetails[i].value
         };
          
           latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:payoutDetails"][i]=id;
  
       }
      
  }
  }


  if('transactionHold' in request.payment){
  latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:transactionHold"]={};
  if('offsetMinutes' in request.payment.transactionHold)
  latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:transactionHold"]["ns8:offsetMinutes"]=request.payment.transactionHold.offsetMinutes;
   if('releaseDateTime' in request.payment.transactionHold)
  latestrequest.parameters["ns13:createOrUpdateUserAddBeneficiaryBankAccountAndPayout"]["ns13:transactionHold"]["ns8:releaseDateTime"]=request.payment.transactionHold.releaseDateTime;
}

}




context.setVariable('request.content', JSON.stringify(latestrequest));