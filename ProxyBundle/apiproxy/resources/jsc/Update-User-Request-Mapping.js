var request = JSON.parse(context.getVariable('request.content'));
var latestrequest = {
   "parameters": {
       "@xmlns": {
           "ns23": "http://customer.endpoint.earthport.com/api/merchant/v2/services/updatePayerIdentity",
           "ns3": "http://customer.endpoint.earthport.com/api/merchant/v2/components/identityBase",
           "ns1": "http://customer.endpoint.earthport.com/api/merchant/v2/components/core"
       },
       "ns23:updatePayerIdentity": {

       }
   }
};

var b = {
   "version": "2.1"
};

latestrequest.parameters["ns23:updatePayerIdentity"]["#attrs"] = b;
var userID = context.getVariable('urirequest.userID');
var idType = context.getVariable('urirequest.idType');
if (idType===null || idType==='')
{
idType= 'earthport';
}
else{
  idType=idType.toLowerCase();
}

latestrequest.parameters["ns23:updatePayerIdentity"]["ns23:userID"]={};

if(idType=='earthport')
latestrequest.parameters["ns23:updatePayerIdentity"]["ns23:userID"]["ns1:epUserID"]=userID;

else if(idType=='merchant')
latestrequest.parameters["ns23:updatePayerIdentity"]["ns23:userID"]["ns1:merchantUserID"]=userID;

latestrequest.parameters["ns23:updatePayerIdentity"]["ns23:payerIdentity"] = {};

// Individual Identity
if ('individualIdentity' in request.payerIdentity) {
   latestrequest.parameters["ns23:updatePayerIdentity"]["ns23:payerIdentity"]["ns3:payerIndividualIdentity"] = {};
   if('name' in request.payerIdentity.individualIdentity){
   latestrequest.parameters["ns23:updatePayerIdentity"]["ns23:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:name"] = {};
   if('givenNames' in request.payerIdentity.individualIdentity.name)
   latestrequest.parameters["ns23:updatePayerIdentity"]["ns23:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:name"]["ns3:givenNames"] = request.payerIdentity.individualIdentity.name.givenNames;
   if('familyName' in request.payerIdentity.individualIdentity.name)
   latestrequest.parameters["ns23:updatePayerIdentity"]["ns23:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:name"]["ns3:familyName"] = request.payerIdentity.individualIdentity.name.familyName;
}   
if('address' in request.payerIdentity.individualIdentity){
   latestrequest.parameters["ns23:updatePayerIdentity"]["ns23:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:address"] = {};
   if('addressLine1' in request.payerIdentity.individualIdentity.address)
   latestrequest.parameters["ns23:updatePayerIdentity"]["ns23:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:address"]["ns3:addressLine1"] = request.payerIdentity.individualIdentity.address.addressLine1;
   if ('addressLine2' in request.payerIdentity.individualIdentity.address)
       latestrequest.parameters["ns23:updatePayerIdentity"]["ns23:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:address"]["ns3:addressLine2"] = request.payerIdentity.individualIdentity.address.addressLine2;
   if ('addressLine3' in request.payerIdentity.individualIdentity.address)
       latestrequest.parameters["ns23:updatePayerIdentity"]["ns23:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:address"]["ns3:addressLine3"] = request.payerIdentity.individualIdentity.address.addressLine3;
   if('city' in request.payerIdentity.individualIdentity.address)
       latestrequest.parameters["ns23:updatePayerIdentity"]["ns23:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:address"]["ns3:city"] = request.payerIdentity.individualIdentity.address.city;
   if ('province' in request.payerIdentity.individualIdentity.address)
       latestrequest.parameters["ns23:updatePayerIdentity"]["ns23:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:address"]["ns3:province"] = request.payerIdentity.individualIdentity.address.province;
   if ('postcode' in request.payerIdentity.individualIdentity.address)
       latestrequest.parameters["ns23:updatePayerIdentity"]["ns23:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:address"]["ns3:postcode"] = request.payerIdentity.individualIdentity.address.postcode;
   if('country' in request.payerIdentity.individualIdentity.address)
       latestrequest.parameters["ns23:updatePayerIdentity"]["ns23:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:address"]["ns3:country"] = request.payerIdentity.individualIdentity.address.country;
}

   if (Array.isArray(request.payerIdentity.individualIdentity.identification)) {
       var totalId = request.payerIdentity.individualIdentity.identification.length;
       if (totalId > 0) {
           latestrequest.parameters["ns23:updatePayerIdentity"]["ns23:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:identificationList"] = {};
           latestrequest.parameters["ns23:updatePayerIdentity"]["ns23:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:identificationList"]["ns3:identification"] = []
           for (var i = 0; i < totalId; i++) {
               var id = {
                   "ns3:idType": request.payerIdentity.individualIdentity.identification[i].idType,
                   "ns3:identificationNumber": request.payerIdentity.individualIdentity.identification[i].identificationNumber,
                   "ns3:identificationCountry": request.payerIdentity.individualIdentity.identification[i].identificationCountry,
                   "ns3:validFromDate": request.payerIdentity.individualIdentity.identification[i].validFromDate,
                   "ns3:validToDate": request.payerIdentity.individualIdentity.identification[i].validToDate
               };
               latestrequest.parameters["ns23:updatePayerIdentity"]["ns23:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:identificationList"]["ns3:identification"][i] = id;
           }
       }
   }

   if ('birthInformation' in request.payerIdentity.individualIdentity) {
       latestrequest.parameters["ns23:updatePayerIdentity"]["ns23:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:birthInformation"] = {};
       if('cityOfBirth' in request.payerIdentity.individualIdentity.birthInformation)
       latestrequest.parameters["ns23:updatePayerIdentity"]["ns23:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:birthInformation"]["ns3:cityOfBirth"] = request.payerIdentity.individualIdentity.birthInformation.cityOfBirth;
       if('countryOfBirth' in request.payerIdentity.individualIdentity.birthInformation)
       latestrequest.parameters["ns23:updatePayerIdentity"]["ns23:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:birthInformation"]["ns3:countryOfBirth"] = request.payerIdentity.individualIdentity.birthInformation.countryOfBirth;
       if('dateOfBirth' in request.payerIdentity.individualIdentity.birthInformation)
       latestrequest.parameters["ns23:updatePayerIdentity"]["ns23:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:birthInformation"]["ns3:dateOfBirth"] = request.payerIdentity.individualIdentity.birthInformation.dateOfBirth;

   }
}

// Legal Entity Identity

if ('legalEntityIdentity' in request.payerIdentity) {
   latestrequest.parameters["ns23:updatePayerIdentity"]["ns23:payerIdentity"]["ns3:payerLegalEntityIdentity"] = {};
   if('legalEntityName' in request.payerIdentity.legalEntityIdentity)
   latestrequest.parameters["ns23:updatePayerIdentity"]["ns23:payerIdentity"]["ns3:payerLegalEntityIdentity"]["ns3:legalEntityName"] = request.payerIdentity.legalEntityIdentity.legalEntityName;
   if('legalEntityRegistration' in request.payerIdentity.legalEntityIdentity) {
   latestrequest.parameters["ns23:updatePayerIdentity"]["ns23:payerIdentity"]["ns3:payerLegalEntityIdentity"]["ns3:legalEntityRegistration"] = {};
   if('legalEntityRegistrationNumber' in request.payerIdentity.legalEntityIdentity.legalEntityRegistration)
   latestrequest.parameters["ns23:updatePayerIdentity"]["ns23:payerIdentity"]["ns3:payerLegalEntityIdentity"]["ns3:legalEntityRegistration"]["ns3:legalEntityRegistrationNumber"] = request.payerIdentity.legalEntityIdentity.legalEntityRegistration.legalEntityRegistrationNumber;
   if('legalEntityRegistrationCountry' in request.payerIdentity.legalEntityIdentity.legalEntityRegistration)
   latestrequest.parameters["ns23:updatePayerIdentity"]["ns23:payerIdentity"]["ns3:payerLegalEntityIdentity"]["ns3:legalEntityRegistration"]["ns3:legalEntityRegistrationCountry"] = request.payerIdentity.legalEntityIdentity.legalEntityRegistration.legalEntityRegistrationCountry;
   if('legalEntityRegistrationProvince' in request.payerIdentity.legalEntityIdentity.legalEntityRegistration)
   latestrequest.parameters["ns23:updatePayerIdentity"]["ns23:payerIdentity"]["ns3:payerLegalEntityIdentity"]["ns3:legalEntityRegistration"]["ns3:legalEntityRegistrationProvince"] = request.payerIdentity.legalEntityIdentity.legalEntityRegistration.legalEntityRegistrationProvince;
}

   if ('address' in request.payerIdentity.legalEntityIdentity) {
       latestrequest.parameters["ns23:updatePayerIdentity"]["ns23:payerIdentity"]["ns3:payerLegalEntityIdentity"]["ns3:address"] = {};
       if('addressLine1' in request.payerIdentity.legalEntityIdentity.address)
       latestrequest.parameters["ns23:updatePayerIdentity"]["ns23:payerIdentity"]["ns3:payerLegalEntityIdentity"]["ns3:address"]["ns3:addressLine1"] = request.payerIdentity.legalEntityIdentity.address.addressLine1;
       if ('addressLine2' in request.payerIdentity.legalEntityIdentity.address)
           latestrequest.parameters["ns23:updatePayerIdentity"]["ns23:payerIdentity"]["ns3:payerLegalEntityIdentity"]["ns3:address"]["ns3:addressLine2"] = request.payerIdentity.legalEntityIdentity.address.addressLine2;
       if ('addressLine3' in request.payerIdentity.legalEntityIdentity.address)
           latestrequest.parameters["ns23:updatePayerIdentity"]["ns23:payerIdentity"]["ns3:payerLegalEntityIdentity"]["ns3:address"]["ns3:addressLine3"] = request.payerIdentity.legalEntityIdentity.address.addressLine3;
       if('city' in request.payerIdentity.legalEntityIdentity.address)
           latestrequest.parameters["ns23:updatePayerIdentity"]["ns23:payerIdentity"]["ns3:payerLegalEntityIdentity"]["ns3:address"]["ns3:city"] = request.payerIdentity.legalEntityIdentity.address.city;
       if ('province' in request.payerIdentity.legalEntityIdentity.address)
           latestrequest.parameters["ns23:updatePayerIdentity"]["ns23:payerIdentity"]["ns3:payerLegalEntityIdentity"]["ns3:address"]["ns3:province"] = request.payerIdentity.legalEntityIdentity.address.province;
       if ('postcode' in request.payerIdentity.legalEntityIdentity.address)
           latestrequest.parameters["ns23:updatePayerIdentity"]["ns23:payerIdentity"]["ns3:payerLegalEntityIdentity"]["ns3:address"]["ns3:postcode"] = request.payerIdentity.legalEntityIdentity.address.postcode;
       if('country' in request.payerIdentity.legalEntityIdentity.address)
           latestrequest.parameters["ns23:updatePayerIdentity"]["ns23:payerIdentity"]["ns3:payerLegalEntityIdentity"]["ns3:address"]["ns3:country"] = request.payerIdentity.legalEntityIdentity.address.country;
   }
}

//Unstructured Identity

if (Array.isArray(request.payerIdentity.unstructuredIdentity)) {
   var totalId = request.payerIdentity.unstructuredIdentity.length;
   if (totalId > 0) {
       var id;
       latestrequest.parameters["ns23:updatePayerIdentity"]["ns23:payerIdentity"]["ns3:payerUnstructuredIdentity"] = {};
       latestrequest.parameters["ns23:updatePayerIdentity"]["ns23:payerIdentity"]["ns3:payerUnstructuredIdentity"]["ns3:unstructuredIdentityData"] = [];
       for (var i = 0; i < totalId; i++) {
           id = {
               "ns3:unstructuredIdentityDataKey": request.payerIdentity.unstructuredIdentity[i].key,
               "ns3:unstructuredIdentityDataValue": request.payerIdentity.unstructuredIdentity[i].value
           };
           latestrequest.parameters["ns23:updatePayerIdentity"]["ns23:payerIdentity"]["ns3:payerUnstructuredIdentity"]["ns3:unstructuredIdentityData"][i] = id;
       }
   }
}


//Additional Data

if (Array.isArray(request.payerIdentity.additionalData)) {
   var totalId = request.payerIdentity.additionalData.length;
   if (totalId > 0) {
       latestrequest.parameters["ns23:updatePayerIdentity"]["ns23:payerIdentity"]["ns3:additionalDataList"] = {};
       latestrequest.parameters["ns23:updatePayerIdentity"]["ns23:payerIdentity"]["ns3:additionalDataList"]["ns3:additionalData"] = [];
       for (var i = 0; i < totalId; i++)
       {

           var id = {
               "ns3:additionalDataKey": request.payerIdentity.additionalData[i].key,
               "ns3:additionalDataValue": request.payerIdentity.additionalData[i].value
           };

           latestrequest.parameters["ns23:updatePayerIdentity"]["ns23:payerIdentity"]["ns3:additionalDataList"]["ns3:additionalData"][i] = id;
       }

   }
}


context.setVariable('request.content', JSON.stringify(latestrequest));