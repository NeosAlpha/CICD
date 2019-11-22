var request = JSON.parse(context.getVariable('request.content'));

var latestrequest = {
 "parameters": {
   "@xmlns": {
     "ns31": "http://customer.endpoint.earthport.com/api/merchant/v1/services/validatePayerIdentity",
     "ns3": "http://customer.endpoint.earthport.com/api/merchant/v2/components/identityBase"
   },
   "ns31:validatePayerIdentity": {}
 }
};
var ver = {
 "version": "1.1"
};

var beneficiaryCountryCode = context.getVariable('urirequest.beneficiaryCountryCode');


latestrequest["parameters"]["ns31:validatePayerIdentity"]["#attrs"] = ver;
if("payerIdentity" in request){
 latestrequest["parameters"]["ns31:validatePayerIdentity"]["ns31:payerIdentity"]={};
 
 
 if("individualIdentity" in request.payerIdentity){
 latestrequest["parameters"]["ns31:validatePayerIdentity"]["ns31:payerIdentity"]["ns3:payerIndividualIdentity"]={};
   latestrequest["parameters"]["ns31:validatePayerIdentity"]["ns31:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:name"]={};
   latestrequest["parameters"]["ns31:validatePayerIdentity"]["ns31:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:name"]["ns3:givenNames"]=request.payerIdentity.individualIdentity.name.givenNames;
   latestrequest["parameters"]["ns31:validatePayerIdentity"]["ns31:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:name"]["ns3:familyName"]=request.payerIdentity.individualIdentity.name.familyName;
 
   latestrequest["parameters"]["ns31:validatePayerIdentity"]["ns31:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:address"]={};
   latestrequest["parameters"]["ns31:validatePayerIdentity"]["ns31:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:address"]["ns3:addressLine1"]=request.payerIdentity.individualIdentity.address.addressLine1;
   latestrequest["parameters"]["ns31:validatePayerIdentity"]["ns31:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:address"]["ns3:addressLine2"]=request.payerIdentity.individualIdentity.address.addressLine2;
   latestrequest["parameters"]["ns31:validatePayerIdentity"]["ns31:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:address"]["ns3:addressLine3"]=request.payerIdentity.individualIdentity.address.addressLine3;
   latestrequest["parameters"]["ns31:validatePayerIdentity"]["ns31:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:address"]["ns3:city"]=request.payerIdentity.individualIdentity.address.city;
   latestrequest["parameters"]["ns31:validatePayerIdentity"]["ns31:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:address"]["ns3:province"]=request.payerIdentity.individualIdentity.address.province;
   latestrequest["parameters"]["ns31:validatePayerIdentity"]["ns31:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:address"]["ns3:postcode"]=request.payerIdentity.individualIdentity.address.postcode;
   latestrequest["parameters"]["ns31:validatePayerIdentity"]["ns31:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:address"]["ns3:country"]=request.payerIdentity.individualIdentity.address.country;
   //latestrequest["parameters"]["ns31:validatePayerIdentity"]["ns31:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:identificationList"]={};
   if("identification" in request.payerIdentity.individualIdentity){
       latestrequest["parameters"]["ns31:validatePayerIdentity"]["ns31:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:identificationList"] ={};
       if (Array.isArray(request.payerIdentity.individualIdentity.identification)) {
           latestrequest["parameters"]["ns31:validatePayerIdentity"]["ns31:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:identificationList"]["ns3:identification"] = [];
           var total = request.payerIdentity.individualIdentity.identification.length;
           if (total > 0)
               for (var i = 0; i < total; i++) {
                   var t = {
                       "ns3:idType": request.payerIdentity.individualIdentity.identification[i].idType,
                       "ns3:identificationNumber": request.payerIdentity.individualIdentity.identification[i].identificationNumber,
                       "ns3:identificationCountry": request.payerIdentity.individualIdentity.identification[i].identificationCountry,
                       "ns3:validFromDate": request.payerIdentity.individualIdentity.identification[i].validFromDate,
                       "ns3:validToDate": request.payerIdentity.individualIdentity.identification[i].validToDate
                   };
                   latestrequest["parameters"]["ns31:validatePayerIdentity"]["ns31:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:identificationList"]["ns3:identification"][i] = t;
               }
       }
       else if ("identification" in request.payerIdentity.individualIdentity) {
           latestrequest["parameters"]["ns31:validatePayerIdentity"]["ns31:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:identificationList"]["ns3:identification"]  = {};
           var t = {
               "ns3:idType": request.payerIdentity.individualIdentity.identification.idType,
               "ns3:identificationNumber": request.payerIdentity.individualIdentity.identification.identificationNumber,
               "ns3:identificationCountry": request.payerIdentity.individualIdentity.identification.identificationCountry,
               "ns3:validFromDate": request.payerIdentity.individualIdentity.identification.validFromDate,
               "ns3:validToDate": request.payerIdentity.individualIdentity.identification.validToDate
           };
           latestrequest["parameters"]["ns31:validatePayerIdentity"]["ns31:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:identificationList"]["ns3:identification"] = t;
       }
   }
  if("birthInformation" in request.payerIdentity.individualIdentity){
       latestrequest["parameters"]["ns31:validatePayerIdentity"]["ns31:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:birthInformation"]={};
       latestrequest["parameters"]["ns31:validatePayerIdentity"]["ns31:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:birthInformation"]["ns3:cityOfBirth"]=request.payerIdentity.individualIdentity.birthInformation.cityOfBirth;
       latestrequest["parameters"]["ns31:validatePayerIdentity"]["ns31:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:birthInformation"]["ns3:countryOfBirth"]=request.payerIdentity.individualIdentity.birthInformation.countryOfBirth;
       latestrequest["parameters"]["ns31:validatePayerIdentity"]["ns31:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:birthInformation"]["ns3:dateOfBirth"]=request.payerIdentity.individualIdentity.birthInformation.dateOfBirth;
   }   
   
}
   if("legalEntityIdentity" in request.payerIdentity){
       latestrequest["parameters"]["ns31:validatePayerIdentity"]["ns31:payerIdentity"]["ns3:payerLegalEntityIdentity"]={};
       latestrequest["parameters"]["ns31:validatePayerIdentity"]["ns31:payerIdentity"]["ns3:payerLegalEntityIdentity"]["ns3:legalEntityName"]=request.payerIdentity.legalEntityIdentity.legalEntityName;
       latestrequest["parameters"]["ns31:validatePayerIdentity"]["ns31:payerIdentity"]["ns3:payerLegalEntityIdentity"]["ns3:legalEntityRegistration"]={};
       latestrequest["parameters"]["ns31:validatePayerIdentity"]["ns31:payerIdentity"]["ns3:payerLegalEntityIdentity"]["ns3:legalEntityRegistration"]["ns3:legalEntityRegistrationNumber"]=request.payerIdentity.legalEntityIdentity.legalEntityRegistration.legalEntityRegistrationNumber;
       latestrequest["parameters"]["ns31:validatePayerIdentity"]["ns31:payerIdentity"]["ns3:payerLegalEntityIdentity"]["ns3:legalEntityRegistration"]["ns3:legalEntityRegistrationCountry"]=request.payerIdentity.legalEntityIdentity.legalEntityRegistration.legalEntityRegistrationCountry;
       latestrequest["parameters"]["ns31:validatePayerIdentity"]["ns31:payerIdentity"]["ns3:payerLegalEntityIdentity"]["ns3:legalEntityRegistration"]["ns3:legalEntityRegistrationProvince"]=request.payerIdentity.legalEntityIdentity.legalEntityRegistration.legalEntityRegistrationProvince;

       latestrequest["parameters"]["ns31:validatePayerIdentity"]["ns31:payerIdentity"]["ns3:payerLegalEntityIdentity"]["ns3:address"]={};
       latestrequest["parameters"]["ns31:validatePayerIdentity"]["ns31:payerIdentity"]["ns3:payerLegalEntityIdentity"]["ns3:address"]["ns3:addressLine1"]=request.payerIdentity.legalEntityIdentity.address.addressLine1;
       latestrequest["parameters"]["ns31:validatePayerIdentity"]["ns31:payerIdentity"]["ns3:payerLegalEntityIdentity"]["ns3:address"]["ns3:addressLine2"]=request.payerIdentity.legalEntityIdentity.address.addressLine2;
       latestrequest["parameters"]["ns31:validatePayerIdentity"]["ns31:payerIdentity"]["ns3:payerLegalEntityIdentity"]["ns3:address"]["ns3:addressLine3"]=request.payerIdentity.legalEntityIdentity.address.addressLine3;
       latestrequest["parameters"]["ns31:validatePayerIdentity"]["ns31:payerIdentity"]["ns3:payerLegalEntityIdentity"]["ns3:address"]["ns3:city"]=request.payerIdentity.legalEntityIdentity.address.city;
       latestrequest["parameters"]["ns31:validatePayerIdentity"]["ns31:payerIdentity"]["ns3:payerLegalEntityIdentity"]["ns3:address"]["ns3:province"]=request.payerIdentity.legalEntityIdentity.address.province;
       latestrequest["parameters"]["ns31:validatePayerIdentity"]["ns31:payerIdentity"]["ns3:payerLegalEntityIdentity"]["ns3:address"]["ns3:postcode"]=request.payerIdentity.legalEntityIdentity.address.postcode;
       latestrequest["parameters"]["ns31:validatePayerIdentity"]["ns31:payerIdentity"]["ns3:payerLegalEntityIdentity"]["ns3:address"]["ns3:country"]=request.payerIdentity.legalEntityIdentity.address.country;
     }   
     if("unstructuredIdentity" in request.payerIdentity){
       latestrequest["parameters"]["ns31:validatePayerIdentity"]["ns31:payerIdentity"]["ns3:payerUnstructuredIdentity"]={};
       if (Array.isArray(request.payerIdentity.unstructuredIdentity)) {
           latestrequest["parameters"]["ns31:validatePayerIdentity"]["ns31:payerIdentity"]["ns3:payerUnstructuredIdentity"]["ns3:unstructuredIdentityData"] = [];
           var total = request.payerIdentity.unstructuredIdentity.length;
           if (total > 0)
               for (var i = 0; i < total; i++) {
                   var t = {
                       "ns3:unstructuredIdentityDataKey": request.payerIdentity.unstructuredIdentity[i].key,
                       "ns3:unstructuredIdentityDataValue": request.payerIdentity.unstructuredIdentity[i].value
                       };
                   latestrequest["parameters"]["ns31:validatePayerIdentity"]["ns31:payerIdentity"]["ns3:payerUnstructuredIdentity"]["ns3:unstructuredIdentityData"][i] = t;
               }
       }
       else if ("unstructuredIdentity" in request.payerIdentity) {
           latestrequest["parameters"]["ns31:validatePayerIdentity"]["ns31:payerIdentity"]["ns3:payerUnstructuredIdentity"]["ns3:unstructuredIdentityData"]  = {};
           var t = {
               "ns3:unstructuredIdentityDataKey": request.payerIdentity.unstructuredIdentity.key,
               "ns3:unstructuredIdentityDataValue": request.payerIdentity.unstructuredIdentity.value
                 };
           latestrequest["parameters"]["ns31:validatePayerIdentity"]["ns31:payerIdentity"]["ns3:payerUnstructuredIdentity"]["ns3:unstructuredIdentityData"] = t;
       }
   }
   if("additionalData" in request.payerIdentity){
       latestrequest["parameters"]["ns31:validatePayerIdentity"]["ns31:payerIdentity"]["ns3:additionalDataList"]={};
       if (Array.isArray(request.payerIdentity.additionalData)) {
           latestrequest["parameters"]["ns31:validatePayerIdentity"]["ns31:payerIdentity"]["ns3:additionalDataList"]["ns3:additionalData"] = [];
           var total = request.payerIdentity.additionalData.length;
           if (total > 0)
               for (var i = 0; i < total; i++) {
                   var t = {
                       "ns3:additionalDataKey": request.payerIdentity.additionalData[i].key,
                       "ns3:additionalDataValue": request.payerIdentity.additionalData[i].value
                       };
                   latestrequest["parameters"]["ns31:validatePayerIdentity"]["ns31:payerIdentity"]["ns3:additionalDataList"]["ns3:additionalData"][i] = t;
               }
       }
       else if ("additionalData" in request.payerIdentity) {
           latestrequest["parameters"]["ns31:validatePayerIdentity"]["ns31:payerIdentity"]["ns3:additionalDataList"]["ns3:additionalData"]  = {};
           var t = {
               "ns3:additionalDataKey": request.payerIdentity.additionalData.key,
               "ns3:additionalDataValue": request.payerIdentity.additionalData.value
                 };
           latestrequest["parameters"]["ns31:validatePayerIdentity"]["ns31:payerIdentity"]["ns3:additionalDataList"]["ns3:additionalData"] = t;
       }
   }

 
 

}
  if(beneficiaryCountryCode!==null && beneficiaryCountryCode!==''){
   latestrequest["parameters"]["ns31:validatePayerIdentity"]["ns31:beneficiaryCountryCode"]=beneficiaryCountryCode;
  }




context.setVariable('request.content', JSON.stringify(latestrequest));



