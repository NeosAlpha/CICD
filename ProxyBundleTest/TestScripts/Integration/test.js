const supertest = require('supertest');
var expect = require("chai").expect;
var _ = require('lodash');
var response;
var output;
var milliseconds = new Date().getTime();
var input = {
 "userID": {"merchantUserID": 'userid_'+milliseconds},
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

describe('Test Suite', function() {
   it('Get access token', function(done) {

       supertest.agent("https://earthport-test-ci.apigee.net/oauth/")
       .post('/token?grant_type=client_credentials')
       .set('Accept', 'application/json')
      // .set('grant_type', 'client_credentials')
       .set('Authorization', 'Basic dTB5cFNialFlaTNEM1BDcFU3WGd1VzlDd3c2a3lsbXk6U1I3NDAzZG9YMW1TcUpSRg==')
       .end(function(err,res){
           if (err) return done(err);
           
           else{
               expect(res.statusCode).to.equal(200);
               token = res.text.access_token;
               data = JSON.parse(res.text);
               access_token = data['access_token'];
               console.log(access_token);
           }
           done();
       });
 }).timeout(18000);

 it('Get User Details ', (done)=> {
           supertest.agent("https://earthport-test-dev.apigee.net/v1/cicd/users/")
          .set('Accept', 'application/json')
          .get('/3409890155463')
          .set('Authorization', 'Bearer ' + access_token)
          .end((err, res) => {
           expect(true).to.be.true;
           expect(res.statusCode).to.equal(200);
           //console.log(res.text);
		   response=res.text;
           done();
        });
}).timeout(18000);



 it('checking userID', (done)=> {
    var json=JSON.parse(response);
    expect((_.has(json, 'userID'))).to.equal(true);
    done();
    });
it('checking epUserID', (done)=> {
    var json=JSON.parse(response);
    expect((_.has(json, 'userID.epUserID'))).to.equal(true);
    done();
    });

it('checking merchantUserID', (done)=> {
    var json=JSON.parse(response);
    expect((_.has(json, 'userID.merchantUserID'))).to.equal(true);
    done();
    });
it('checking payerIdentity', (done)=> {
    var json=JSON.parse(response);
    expect((_.has(json, 'payerIdentity'))).to.equal(true);
    done();
    });	
it('checking individualIdentity', (done)=> {
    var json=JSON.parse(response);
    expect((_.has(json, 'payerIdentity.individualIdentity'))).to.equal(true);
    done();
    });	
it('checking name', (done)=> {
    var json=JSON.parse(response);
    expect((_.has(json, 'payerIdentity.individualIdentity.name'))).to.equal(true);
    done();
    });	
it('checking familyName', (done)=> {
    var json=JSON.parse(response);
    expect((_.has(json, 'payerIdentity.individualIdentity.name.familyName'))).to.equal(true);
    done();
    });	
it('checking givenNames', (done)=> {
    var json=JSON.parse(response);
    expect((_.has(json, 'payerIdentity.individualIdentity.name.givenNames'))).to.equal(true);
    done();
    });
it('checking address', (done)=> {
    var json=JSON.parse(response);
    expect((_.has(json, 'payerIdentity.individualIdentity.address'))).to.equal(true);
    done();
    });	
it('checking addressLine1', (done)=> {
    var json=JSON.parse(response);
    expect((_.has(json, 'payerIdentity.individualIdentity.address.addressLine1'))).to.equal(true);
    done();
    });	
it('checking city', (done)=> {
    var json=JSON.parse(response);
    expect((_.has(json, 'payerIdentity.individualIdentity.address.city'))).to.equal(true);
    done();
    });	
it('checking country', (done)=> {
    var json=JSON.parse(response);
    expect((_.has(json, 'payerIdentity.individualIdentity.address.country'))).to.equal(true);
    done();
    });	
it('checking postcode', (done)=> {
    var json=JSON.parse(response);
    expect((_.has(json, 'payerIdentity.individualIdentity.address.postcode'))).to.equal(true);
    done();
    });	
it('checking province', (done)=> {
    var json=JSON.parse(response);
    expect((_.has(json, 'payerIdentity.individualIdentity.address.province'))).to.equal(true);
    done();
    });		
it('checking birthInformation', (done)=> {
    var json=JSON.parse(response);
    expect((_.has(json, 'payerIdentity.individualIdentity.birthInformation'))).to.equal(true);
    done();
    });	
it('checking cityOfBirth', (done)=> {
    var json=JSON.parse(response);
    expect((_.has(json, 'payerIdentity.individualIdentity.birthInformation.cityOfBirth'))).to.equal(true);
    done();
    });
it('checking countryOfBirth', (done)=> {
    var json=JSON.parse(response);
    expect((_.has(json, 'payerIdentity.individualIdentity.birthInformation.countryOfBirth'))).to.equal(true);
    done();
    });
it('checking dateOfBirth', (done)=> {
    var json=JSON.parse(response);
    expect((_.has(json, 'payerIdentity.individualIdentity.birthInformation.dateOfBirth'))).to.equal(true);
    done();
    });	
it('checking createdDate', (done)=> {
    var json=JSON.parse(response);
    expect((_.has(json, 'createdDate'))).to.equal(true);
    done();
    });	


it('Get User Details ', (done)=> {
           supertest.agent("https://earthport-test-dev.apigee.net/v1/cicd/")
          .set('Content-Type', 'application/json')
          .post("/users")
          .set('Authorization', 'Bearer ' + access_token)
		  		  .send(input)

          .end((err, res) => {
           expect(true).to.be.true;
           expect(res.statusCode).to.equal(200);
           console.log(res.text);
		   output=res.text;
           done();
        });
}).timeout(18000);
 
 it('checking epUserID', (done)=> {
    var payload=JSON.parse(output);
    expect((_.has(payload, 'epUserID'))).to.equal(true);
    done();
    });
 it('checking merchantUserID', (done)=> {
    var payload=JSON.parse(output);
    expect((_.has(payload, 'merchantUserID'))).to.equal(true);
    done();
    });

});
