var request=JSON.parse(context.getVariable('request.content'));

var latestrequest = {
    "parameters": {
        "@xmlns": {
            "ns27": "http://customer.endpoint.earthport.com/api/merchant/v1/services/validateBeneficiaryBankWithExpectedSettlement",
            "ns3": "http://customer.endpoint.earthport.com/api/merchant/v2/components/identityBase",
            "ns4": "http://customer.endpoint.earthport.com/api/merchant/v3/components/bankBase",
            "ns8": "http://customer.endpoint.earthport.com/api/merchant/v1/components/payoutBase"
        },
        "ns27:validateBeneficiaryBankWithExpectedSettlement": {}
    }
};
var ver = {
    "version": "1.3"
};
latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["#attrs"] = ver;

if ("beneficiaryIdentity" in request) {

    latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:beneficiaryBankAccount"] = {};
    latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"] = {};
	
	if ("individualIdentity" in request.beneficiaryIdentity) {
    latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryIndividualIdentity"] = {};
    if ("name" in request.beneficiaryIdentity.individualIdentity) {
        latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryIndividualIdentity"]["ns3:name"] = {};
        latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryIndividualIdentity"]["ns3:name"]["ns3:givenNames"] = request.beneficiaryIdentity.individualIdentity.name.givenNames;
        latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryIndividualIdentity"]["ns3:name"]["ns3:familyName"] = request.beneficiaryIdentity.individualIdentity.name.familyName;
    }
    if ("address" in request.beneficiaryIdentity.individualIdentity) {
        latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryIndividualIdentity"]["ns3:address"] = {};
        latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryIndividualIdentity"]["ns3:address"]["ns3:addressLine1"] = request.beneficiaryIdentity.individualIdentity.address.addressLine1;
        latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryIndividualIdentity"]["ns3:address"]["ns3:addressLine2"] = request.beneficiaryIdentity.individualIdentity.address.addressLine2;
        latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryIndividualIdentity"]["ns3:address"]["ns3:addressLine3"] = request.beneficiaryIdentity.individualIdentity.address.addressLine3;
        latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryIndividualIdentity"]["ns3:address"]["ns3:city"] = request.beneficiaryIdentity.individualIdentity.address.city;
        latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryIndividualIdentity"]["ns3:address"]["ns3:province"] = request.beneficiaryIdentity.individualIdentity.address.province;
        latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryIndividualIdentity"]["ns3:address"]["ns3:postcode"] = request.beneficiaryIdentity.individualIdentity.address.postcode;
        latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryIndividualIdentity"]["ns3:address"]["ns3:country"] = request.beneficiaryIdentity.individualIdentity.address.country;
    }
    if ("identification" in request.beneficiaryIdentity.individualIdentity) {
        latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryIndividualIdentity"]["ns3:identificationList"] = {};
        if (Array.isArray(request.beneficiaryIdentity.individualIdentity.identification)) {
            latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryIndividualIdentity"]["ns3:identificationList"]["ns3:identification"] = [];
            var total = request.beneficiaryIdentity.individualIdentity.identification.length;
            if (total > 0)
                for (var i = 0; i < total; i++) {
                    var t = {
                        "ns3:idType": request.beneficiaryIdentity.individualIdentity.identification[i].idType,
                        "ns3:identificationNumber": request.beneficiaryIdentity.individualIdentity.identification[i].identificationNumber,
                        "ns3:identificationCountry": request.beneficiaryIdentity.individualIdentity.identification[i].identificationCountry,
                        "ns3:validFromDate": request.beneficiaryIdentity.individualIdentity.identification[i].validFromDate,
                        "ns3:validToDate": request.beneficiaryIdentity.individualIdentity.identification[i].validToDate
                    };
                    latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryIndividualIdentity"]["ns3:identificationList"]["ns3:identification"][i] = t;
                }
        } else if ("identification" in request.beneficiaryIdentity.individualIdentity) {
            latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryIndividualIdentity"]["ns3:identificationList"]["ns3:identification"] = {};
            var t = {
                "ns3:idType": request.beneficiaryIdentity.individualIdentity.identification.idType,
                "ns3:identificationNumber": request.beneficiaryIdentity.individualIdentity.identification.identificationNumber,
                "ns3:identificationCountry": request.beneficiaryIdentity.individualIdentity.identification.identificationCountry,
                "ns3:validFromDate": request.beneficiaryIdentity.individualIdentity.identification.validFromDate,
                "ns3:validToDate": request.beneficiaryIdentity.individualIdentity.identification.validToDate
            };
            latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryIndividualIdentity"]["ns3:identificationList"]["ns3:identification"] = t;
        }
    }
    if ("birthInformation" in request.beneficiaryIdentity.individualIdentity) {
        latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryIndividualIdentity"]["ns3:birthInformation"] = {};
        latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryIndividualIdentity"]["ns3:birthInformation"]["ns3:cityOfBirth"] = request.beneficiaryIdentity.individualIdentity.birthInformation.cityOfBirth;
        latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryIndividualIdentity"]["ns3:birthInformation"]["ns3:countryOfBirth"] = request.beneficiaryIdentity.individualIdentity.birthInformation.countryOfBirth;
        latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryIndividualIdentity"]["ns3:birthInformation"]["ns3:dateOfBirth"] = request.beneficiaryIdentity.individualIdentity.birthInformation.dateOfBirth;
    }
	}
    if ("legalEntityIdentity" in request.beneficiaryIdentity) {
        latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryLegalEntityIdentity"] = {};
        latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryLegalEntityIdentity"]["ns3:legalEntityName"] = request.beneficiaryIdentity.legalEntityIdentity.legalEntityName;

        if ("legalEntityRegistration" in request.beneficiaryIdentity.legalEntityIdentity) {
        latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryLegalEntityIdentity"]["ns3:legalEntityRegistration"] = {};
        latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryLegalEntityIdentity"]["ns3:legalEntityRegistration"]["ns3:legalEntityRegistrationNumber"] = request.beneficiaryIdentity.legalEntityIdentity.legalEntityRegistration.legalEntityRegistrationNumber;
        latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryLegalEntityIdentity"]["ns3:legalEntityRegistration"]["ns3:legalEntityRegistrationCountry"] = request.beneficiaryIdentity.legalEntityIdentity.legalEntityRegistration.legalEntityRegistrationCountry;
        latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryLegalEntityIdentity"]["ns3:legalEntityRegistration"]["ns3:legalEntityRegistrationProvince"] = request.beneficiaryIdentity.legalEntityIdentity.legalEntityRegistration.legalEntityRegistrationProvince;
        }
        if ("address" in request.beneficiaryIdentity.legalEntityIdentity) {
        latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryLegalEntityIdentity"]["ns3:address"] = {};
        latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryLegalEntityIdentity"]["ns3:address"]["ns3:addressLine1"] = request.beneficiaryIdentity.legalEntityIdentity.address.addressLine1;
        latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryLegalEntityIdentity"]["ns3:address"]["ns3:addressLine2"] = request.beneficiaryIdentity.legalEntityIdentity.address.addressLine2;
        latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryLegalEntityIdentity"]["ns3:address"]["ns3:addressLine3"] = request.beneficiaryIdentity.legalEntityIdentity.address.addressLine3;
        latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryLegalEntityIdentity"]["ns3:address"]["ns3:city"] = request.beneficiaryIdentity.legalEntityIdentity.address.city;
        latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryLegalEntityIdentity"]["ns3:address"]["ns3:province"] = request.beneficiaryIdentity.legalEntityIdentity.address.province;
        latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryLegalEntityIdentity"]["ns3:address"]["ns3:postcode"] = request.beneficiaryIdentity.legalEntityIdentity.address.postcode;
        latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryLegalEntityIdentity"]["ns3:address"]["ns3:country"] = request.beneficiaryIdentity.legalEntityIdentity.address.country;
        }
    }
    if ("unstructuredIdentity" in request.beneficiaryIdentity) {
        latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryUnstructuredIdentity"] = {};
        if (Array.isArray(request.beneficiaryIdentity.unstructuredIdentity)) {
            latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryUnstructuredIdentity"]["ns3:unstructuredIdentityData"] = [];
            var total = request.beneficiaryIdentity.unstructuredIdentity.length;
            if (total > 0)
                for (var i = 0; i < total; i++) {
                    var t = {
                        "ns3:unstructuredIdentityDataKey": request.beneficiaryIdentity.unstructuredIdentity[i].key,
                        "ns3:unstructuredIdentityDataValue": request.beneficiaryIdentity.unstructuredIdentity[i].value
                    };
                    latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryUnstructuredIdentity"]["ns3:unstructuredIdentityData"][i] = t;
                }
        } else if ("unstructuredIdentity" in request.beneficiaryIdentity) {
            latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryUnstructuredIdentity"]["ns3:unstructuredIdentityData"] = {};
            var t = {
                "ns3:unstructuredIdentityDataKey": request.beneficiaryIdentity.unstructuredIdentity.key,
                "ns3:unstructuredIdentityDataValue": request.beneficiaryIdentity.unstructuredIdentity.value
            };
            latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:beneficiaryUnstructuredIdentity"]["ns3:unstructuredIdentityData"] = t;
        }
    }
    if ("additionalData" in request.beneficiaryIdentity) {
        latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:additionalDataList"] = {};
        if (Array.isArray(request.beneficiaryIdentity.additionalData)) {
            latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:additionalDataList"]["ns3:additionalData"] = [];
            var total = request.beneficiaryIdentity.additionalData.length;
            if (total > 0)
                for (var i = 0; i < total; i++) {
                    var t = {
                        "ns3:additionalDataKey": request.beneficiaryIdentity.additionalData[i].key,
                        "ns3:additionalDataValue": request.beneficiaryIdentity.additionalData[i].value
                    };
                    latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:additionalDataList"]["ns3:additionalData"][i] = t;
                }
        } else if ("additionalData" in request.beneficiaryIdentity) {
            latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:additionalDataList"]["ns3:additionalData"] = {};
            var t = {
                "ns3:additionalDataKey": request.beneficiaryIdentity.additionalData.key,
                "ns3:additionalDataValue": request.beneficiaryIdentity.additionalData.value
            };
            latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:beneficiaryBankAccount"]["ns4:beneficiaryIdentity"]["ns3:additionalDataList"]["ns3:additionalData"] = t;
        }
    }
    if ("description" in request) {
        latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:beneficiaryBankAccount"]["ns4:description"] = {};
        latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:beneficiaryBankAccount"]["ns4:description"] = request.description;
        latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:beneficiaryBankAccount"]["ns4:countryCode"] = request.countryCode;
        latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:beneficiaryBankAccount"]["ns4:currencyCode"] = request.currencyCode;

        if (Array.isArray(request.bankAccountDetails)) {
            latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:beneficiaryBankAccount"]["ns4:bankAccountDetails"] = [];
            var total = request.bankAccountDetails.length;
            if (total > 0)
                for (var i = 0; i < total; i++) {
                    var t = {
                        "ns4:key": request.bankAccountDetails[i].key,
                        "ns4:value": request.bankAccountDetails[i].value
                    };
                    latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:beneficiaryBankAccount"]["ns4:bankAccountDetails"][i] = t;
                }
        } else if ("bankAccountDetails" in request) {
            latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:beneficiaryBankAccount"]["ns4:bankAccountDetails"] = {};
            var t = {
                "ns4:key": request.bankAccountDetails.key,
                "ns4:value": request.bankAccountDetails.value
            };
            latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:beneficiaryBankAccount"]["ns4:bankAccountDetails"] = t;
        }
    }
	}
    if ("anticipatedPayoutRequestTime" in request) {
        latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:anticipatedPayoutRequestTime"] = request.anticipatedPayoutRequestTime;
    }
    if ("payoutRequestCurrency" in request) {
        latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:payoutRequestCurrency"] = request.payoutRequestCurrency;
    }
    if ("serviceLevel" in request) {
        latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:serviceLevel"] = request.serviceLevel;
    }
    if ("payerType" in request) {
        latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:payerType"] = request.payerType;
    }
    if ("payerIdentity" in request) {
		
		
        latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:payerIdentity"] = {};
		if ("individualIdentity" in request.payerIdentity){
        latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:payerIdentity"]["ns3:payerIndividualIdentity"] = {};
        latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:name"] = {};
        latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:name"]["ns3:givenNames"] = request.payerIdentity.individualIdentity.name.givenNames;
        latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:name"]["ns3:familyName"] = request.payerIdentity.individualIdentity.name.familyName;

        latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:address"] = {};
        latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:address"]["ns3:addressLine1"] = request.payerIdentity.individualIdentity.address.addressLine1;
        latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:address"]["ns3:addressLine2"] = request.payerIdentity.individualIdentity.address.addressLine2;
        latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:address"]["ns3:addressLine3"] = request.payerIdentity.individualIdentity.address.addressLine3;
        latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:address"]["ns3:city"] = request.payerIdentity.individualIdentity.address.city;
        latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:address"]["ns3:province"] = request.payerIdentity.individualIdentity.address.province;
        latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:address"]["ns3:postcode"] = request.payerIdentity.individualIdentity.address.postcode;
        latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:address"]["ns3:country"] = request.payerIdentity.individualIdentity.address.country;

        if ("identification" in request.payerIdentity.individualIdentity) {
            latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:identificationList"] = {};
            if (Array.isArray(request.payerIdentity.individualIdentity.identification)) {
                latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:identificationList"]["ns3:identification"] = [];
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
                        latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:identificationList"]["ns3:identification"][i] = t;
                    }
            } else if ("identification" in request.payerIdentity.individualIdentity) {
                latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:identificationList"]["ns3:identification"] = {};
                var t = {
                    "ns3:idType": request.payerIdentity.individualIdentity.identification.idType,
                    "ns3:identificationNumber": request.payerIdentity.individualIdentity.identification.identificationNumber,
                    "ns3:identificationCountry": request.payerIdentity.individualIdentity.identification.identificationCountry,
                    "ns3:validFromDate": request.payerIdentity.individualIdentity.identification.validFromDate,
                    "ns3:validToDate": request.payerIdentity.individualIdentity.identification.validToDate
                };
                latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:identificationList"]["ns3:identification"] = t;
            }
        }
        if ("birthInformation" in request.payerIdentity.individualIdentity) {
            latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:birthInformation"] = {};
            latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:birthInformation"]["ns3:cityOfBirth"] = request.payerIdentity.individualIdentity.birthInformation.cityOfBirth;
            latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:birthInformation"]["ns3:countryOfBirth"] = request.payerIdentity.individualIdentity.birthInformation.countryOfBirth;
            latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:birthInformation"]["ns3:dateOfBirth"] = request.payerIdentity.individualIdentity.birthInformation.dateOfBirth;
        }
		}
        if ("legalEntityIdentity" in request.payerIdentity) {
            latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:payerIdentity"]["ns3:payerLegalEntityIdentity"] = {};
            latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:payerIdentity"]["ns3:payerLegalEntityIdentity"]["ns3:legalEntityName"] = request.payerIdentity.legalEntityIdentity.legalEntityName;

            if ("legalEntityRegistration" in request.payerIdentity.legalEntityIdentity) {
            latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:payerIdentity"]["ns3:payerLegalEntityIdentity"]["ns3:legalEntityRegistration"] = {};
            latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:payerIdentity"]["ns3:payerLegalEntityIdentity"]["ns3:legalEntityRegistration"]["ns3:legalEntityRegistrationNumber"] = request.payerIdentity.legalEntityIdentity.legalEntityRegistration.legalEntityRegistrationNumber;
            latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:payerIdentity"]["ns3:payerLegalEntityIdentity"]["ns3:legalEntityRegistration"]["ns3:legalEntityRegistrationCountry"] = request.payerIdentity.legalEntityIdentity.legalEntityRegistration.legalEntityRegistrationCountry;
            latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:payerIdentity"]["ns3:payerLegalEntityIdentity"]["ns3:legalEntityRegistration"]["ns3:legalEntityRegistrationProvince"] = request.payerIdentity.legalEntityIdentity.legalEntityRegistration.legalEntityRegistrationProvince;
            }
            if ("address" in request.payerIdentity.legalEntityIdentity) {
            latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:payerIdentity"]["ns3:payerLegalEntityIdentity"]["ns3:address"] = {};
            latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:payerIdentity"]["ns3:payerLegalEntityIdentity"]["ns3:address"]["ns3:addressLine1"] = request.payerIdentity.legalEntityIdentity.address.addressLine1;
            latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:payerIdentity"]["ns3:payerLegalEntityIdentity"]["ns3:address"]["ns3:addressLine2"] = request.payerIdentity.legalEntityIdentity.address.addressLine2;
            latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:payerIdentity"]["ns3:payerLegalEntityIdentity"]["ns3:address"]["ns3:addressLine3"] = request.payerIdentity.legalEntityIdentity.address.addressLine3;
            latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:payerIdentity"]["ns3:payerLegalEntityIdentity"]["ns3:address"]["ns3:city"] = request.payerIdentity.legalEntityIdentity.address.city;
            latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:payerIdentity"]["ns3:payerLegalEntityIdentity"]["ns3:address"]["ns3:province"] = request.payerIdentity.legalEntityIdentity.address.province;
            latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:payerIdentity"]["ns3:payerLegalEntityIdentity"]["ns3:address"]["ns3:postcode"] = request.payerIdentity.legalEntityIdentity.address.postcode;
            latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:payerIdentity"]["ns3:payerLegalEntityIdentity"]["ns3:address"]["ns3:country"] = request.payerIdentity.legalEntityIdentity.address.country;
            }
        }
        if ("unstructuredIdentity" in request.payerIdentity) {
            latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:payerIdentity"]["ns3:payerUnstructuredIdentity"] = {};
            if (Array.isArray(request.payerIdentity.unstructuredIdentity)) {
                latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:payerIdentity"]["ns3:payerUnstructuredIdentity"]["ns3:unstructuredIdentityData"] = [];
                var total = request.payerIdentity.unstructuredIdentity.length;
                if (total > 0)
                    for (var i = 0; i < total; i++) {
                        var t = {
                            "ns3:unstructuredIdentityDataKey": request.payerIdentity.unstructuredIdentity[i].key,
                            "ns3:unstructuredIdentityDataValue": request.payerIdentity.unstructuredIdentity[i].value
                        };
                        latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:payerIdentity"]["ns3:payerUnstructuredIdentity"]["ns3:unstructuredIdentityData"][i] = t;
                    }
            } else if ("unstructuredIdentity" in request.payerIdentity) {
                latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:payerIdentity"]["ns3:payerUnstructuredIdentity"]["ns3:unstructuredIdentityData"] = {};
                var t = {
                    "ns3:unstructuredIdentityDataKey": request.payerIdentity.unstructuredIdentity.key,
                    "ns3:unstructuredIdentityDataValue": request.payerIdentity.unstructuredIdentity.value
                };
                latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:payerIdentity"]["ns3:payerUnstructuredIdentity"]["ns3:unstructuredIdentityData"] = t;
            }
        }
   
        if ("additionalData" in request.payerIdentity) {
            latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:payerIdentity"]["ns3:additionalDataList"] = {};
            if (Array.isArray(request.payerIdentity.additionalData)) {
                latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:payerIdentity"]["ns3:additionalDataList"]["ns3:additionalData"] = [];
                var total = request.payerIdentity.additionalData.length;
                if (total > 0)
                    for (var i = 0; i < total; i++) {
                        var t = {
                            "ns3:additionalDataKey": request.payerIdentity.additionalData[i].key,
                            "ns3:additionalDataValue": request.payerIdentity.additionalData[i].value
                        };
                        latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:payerIdentity"]["ns3:additionalDataList"]["ns3:additionalData"][i] = t;
                    }
            } else if ("additionalData" in request.payerIdentity) {
                latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:payerIdentity"]["ns3:additionalDataList"]["ns3:additionalData"] = {};
                var t = {
                    "ns3:additionalDataKey": request.payerIdentity.additionalData.key,
                    "ns3:additionalDataValue": request.payerIdentity.additionalData.value
                };
                latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:payerIdentity"]["ns3:additionalDataList"]["ns3:additionalData"] = t;
            }
        }

    }
    if ("payoutDetails" in request) {

        //latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:payerIdentity"]={};
        if (Array.isArray(request.payoutDetails)) {
            latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:payoutDetails"] = [];
            var total = request.payoutDetails.length;
            if (total > 0)
                for (var i = 0; i < total; i++) {
                    var t = {
                        "ns8:key": request.payoutDetails[i].key,
                        "ns8:value": request.payoutDetails[i].value
                    };
                    latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:payoutDetails"][i] = t;
                }
        } else if ("payoutDetails" in request) {
            latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:payoutDetails"] = {};
            var t = {
                "ns8:key": request.payoutDetails.key,
                "ns8:value": request.payoutDetails.value
            };
            latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:payoutDetails"] = t;
        }
    }
    if ("transactionHold" in request) {
        latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:transactionHold"] = {};
        latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:transactionHold"]["ns8:offsetMinutes"] = request.transactionHold.offsetMinutes;
        latestrequest["parameters"]["ns27:validateBeneficiaryBankWithExpectedSettlement"]["ns27:transactionHold"]["ns8:releaseDateTime"] = request.transactionHold.releaseDateTime;
    }

 
 
 
 context.setVariable('request.content', JSON.stringify(latestrequest));
  