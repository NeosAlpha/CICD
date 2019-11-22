const fs = require('fs');
var expect = require('chai').expect;
var input = {
  "userID": {
    "merchantUserID": "userID_110054884555"
  },
  "managedMerchantIdentity": "ABCCORP",
  "accountCurrency": "GBP",
  "payerIdentity": {
    "individualIdentity": {
      "name": {
        "familyName": "Smith",
        "givenNames": "John"
      },
      "address": {
        "addressLine1": "ABC",
        "city": "ABC",
        "country": "GB",
        "postcode": "EC1A 4HY",
        "province": "ABC"
      },
      "birthInformation": {
        "cityOfBirth": "ABC",
        "countryOfBirth": "GB",
        "dateOfBirth": "2001-01-01"
      }
    }
  }
};
var output = {
  "parameters": {
    "@xmlns": {
      "ns2": "http://customer.endpoint.earthport.com/api/merchant/v3/services/createUser",
      "ns3": "http://customer.endpoint.earthport.com/api/merchant/v2/components/identityBase"
    },
    "ns2:createUser": {
      "#attrs": {
        "version": "3.1"
      },
      "ns2:merchantUserIdentity": "userID_110054884555",
      "ns2:accountCurrency": "GBP",
      "ns2:payerIdentity": {
        "ns3:payerIndividualIdentity": {
          "ns3:name": {
            "ns3:givenNames": "John",
            "ns3:familyName": "Smith"
          },
          "ns3:address": {
            "ns3:addressLine1": "ABC",
            "ns3:city": "ABC",
            "ns3:province": "ABC",
            "ns3:postcode": "EC1A 4HY",
            "ns3:country": "GB"
          },
          "ns3:birthInformation": {
            "ns3:cityOfBirth": "ABC",
            "ns3:countryOfBirth": "GB",
            "ns3:dateOfBirth": "2001-01-01"
          }
        }
      }
    }
  }
};
output = JSON.stringify(output);
a = JSON.parse(output);

describe("Mapping Test", () => {
  it('Checking userID.merchantUserID', (done) => {
    expect(input.userID.merchantUserID).to.equal(a["parameters"]["ns2:createUser"]["ns2:merchantUserIdentity"]);
    done();
  }).timeout(5000);

  it('Checking accountCurrency', (done) => {
    expect(input.accountCurrency).to.equal(a["parameters"]["ns2:createUser"]["ns2:accountCurrency"]);
    done();
  }).timeout(5000);
  
  it('Checking payerIdentity.individualIdentity.name.familyName', (done) => {
    expect(input.payerIdentity.individualIdentity.name.familyName).to.equal(a["parameters"]["ns2:createUser"]["ns2:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:name"]["ns3:familyName"]);
    done();
  }).timeout(5000);

  it('Checking payerIdentity.individualIdentity.name.givenNames', (done) => {
    expect(input.payerIdentity.individualIdentity.name.givenNames).to.equal(a["parameters"]["ns2:createUser"]["ns2:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:name"]["ns3:givenNames"]);
    done();
  }).timeout(5000);

  it('Checking payerIdentity.individualIdentity.address.addressLine1', (done) => {
    expect(input.payerIdentity.individualIdentity.address.addressLine1).to.equal(a["parameters"]["ns2:createUser"]["ns2:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:address"]["ns3:addressLine1"]);
    done();
  }).timeout(5000);

  it('Checking payerIdentity.individualIdentity.address.city', (done) => {
    expect(input.payerIdentity.individualIdentity.address.city).to.equal(a["parameters"]["ns2:createUser"]["ns2:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:address"]["ns3:city"]);
    done();
  }).timeout(5000);

  it('Checking payerIdentity.individualIdentity.address.country', (done) => {
    expect(input.payerIdentity.individualIdentity.address.country).to.equal(a["parameters"]["ns2:createUser"]["ns2:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:address"]["ns3:country"]);
    done();
  }).timeout(5000);

  it('Checking payerIdentity.individualIdentity.address.postcode', (done) => {
    expect(input.payerIdentity.individualIdentity.address.postcode).to.equal(a["parameters"]["ns2:createUser"]["ns2:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:address"]["ns3:postcode"]);
    done();
  }).timeout(5000);

  it('Checking payerIdentity.individualIdentity.address.province', (done) => {
    expect(input.payerIdentity.individualIdentity.address.province).to.equal(a["parameters"]["ns2:createUser"]["ns2:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:address"]["ns3:province"]);
    done();
  }).timeout(5000);

  it('Checking payerIdentity.individualIdentity.birthInformation.cityOfBirth', (done) => {
    expect(input.payerIdentity.individualIdentity.birthInformation.cityOfBirth).to.equal(a["parameters"]["ns2:createUser"]["ns2:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:birthInformation"]["ns3:cityOfBirth"]);
    done();
  }).timeout(5000);

  it('Checking payerIdentity.individualIdentity.birthInformation.countryOfBirth', (done) => {
    expect(input.payerIdentity.individualIdentity.birthInformation.countryOfBirth).to.equal(a["parameters"]["ns2:createUser"]["ns2:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:birthInformation"]["ns3:countryOfBirth"]);
    done();
  }).timeout(5000);

  it('Checking payerIdentity.individualIdentity.birthInformation.dateOfBirth', (done) => {
    expect(input.payerIdentity.individualIdentity.birthInformation.dateOfBirth).to.equal(a["parameters"]["ns2:createUser"]["ns2:payerIdentity"]["ns3:payerIndividualIdentity"]["ns3:birthInformation"]["ns3:dateOfBirth"]);
    done();
  }).timeout(5000);
});