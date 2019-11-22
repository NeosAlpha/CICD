var request=JSON.parse(context.getVariable('request.content'));
 var latestrequest={
	"parameters": {
			"@xmlns": {"ns1": "http://customer.endpoint.earthport.com/api/merchant/v2/components/core",
			"ns3": "http://customer.endpoint.earthport.com/api/merchant/v2/components/identityBase",
			"ns4": "http://customer.endpoint.earthport.com/api/merchant/v3/components/bankBase",
			"ns6": "http://customer.endpoint.earthport.com/api/merchant/v5/services/payoutRequest",
			"ns7": "http://customer.endpoint.earthport.com/api/merchant/v3/components/bankBase",
            "ns8": "http://customer.endpoint.earthport.com/api/merchant/v1/components/payoutBase"
        },
			"ns6:payoutRequest": {

			}
	}
};



var idType = context.getVariable('urirequest.idType');
if (idType===null || idType==='')
{
idType= 'earthport';
}
else{
  idType=idType.toLowerCase();
}
var userID = context.getVariable('urirequest.userID');

var bankID = context.getVariable('urirequest.bankID');

var b={ "version" : "5.2"};

latestrequest.parameters["ns6:payoutRequest"]["#attrs"]=b;

latestrequest.parameters["ns6:payoutRequest"]["ns6:usersBankID"]={};
latestrequest.parameters["ns6:payoutRequest"]["ns6:usersBankID"]["ns7:userID"]={};
if(idType=='earthport')
latestrequest.parameters["ns6:payoutRequest"]["ns6:usersBankID"]["ns7:userID"]["ns1:epUserID"]=userID;
else if(idType=='merchant')
latestrequest.parameters["ns6:payoutRequest"]["ns6:usersBankID"]["ns7:userID"]["ns1:merchantUserID"]=userID;

latestrequest.parameters["ns6:payoutRequest"]["ns6:usersBankID"]["ns7:benBankID"]={};

if(idType=='earthport')
latestrequest.parameters["ns6:payoutRequest"]["ns6:usersBankID"]["ns7:benBankID"]["ns7:epBankID"]=bankID; 
else if(idType=='merchant')
latestrequest.parameters["ns6:payoutRequest"]["ns6:usersBankID"]["ns7:benBankID"]["ns7:merchantBankID"]=bankID; 

if('transactionID' in request){
if('merchantTransactionID' in request.transactionID)
latestrequest.parameters["ns6:payoutRequest"]["ns6:merchantTransactionReference"]=request.transactionID.merchantTransactionID;
}
if('payoutRequestAmount' in request){
latestrequest.parameters["ns6:payoutRequest"]["ns6:payoutRequestAmount"]={};
if('currency' in request.payoutRequestAmount)
latestrequest.parameters["ns6:payoutRequest"]["ns6:payoutRequestAmount"]["ns1:currency"]=request.payoutRequestAmount.currency;
if('amount' in request.payoutRequestAmount)
latestrequest.parameters["ns6:payoutRequest"]["ns6:payoutRequestAmount"]["ns1:amount"]=request.payoutRequestAmount.amount;
}

if('beneficiaryAmountInformation' in request){
latestrequest.parameters["ns6:payoutRequest"]["ns6:beneficiaryAmountInformation"]={};
if('beneficiaryAmount' in request.beneficiaryAmountInformation)
latestrequest.parameters["ns6:payoutRequest"]["ns6:beneficiaryAmountInformation"]["ns6:beneficiaryAmount"]={};
if('currency' in request.beneficiaryAmountInformation.beneficiaryAmount)
latestrequest.parameters["ns6:payoutRequest"]["ns6:beneficiaryAmountInformation"]["ns6:beneficiaryAmount"]["ns1:currency"]=request.beneficiaryAmountInformation.beneficiaryAmount.currency;
if('amount' in request.beneficiaryAmountInformation.beneficiaryAmount)
latestrequest.parameters["ns6:payoutRequest"]["ns6:beneficiaryAmountInformation"]["ns6:beneficiaryAmount"]["ns1:amount"]=request.beneficiaryAmountInformation.beneficiaryAmount.amount;


if('payoutCurrency' in request.beneficiaryAmountInformation)
latestrequest.parameters["ns6:payoutRequest"]["ns6:beneficiaryAmountInformation"]["ns6:payoutCurrency"]=request.beneficiaryAmountInformation.payoutCurrency;
}

if('serviceLevel' in request)
latestrequest.parameters["ns6:payoutRequest"]["ns6:serviceLevel"]=request.serviceLevel;
if('beneficiaryStatementNarrative' in request)
latestrequest.parameters["ns6:payoutRequest"]["ns6:beneficiaryStatementNarrative"]=request.beneficiaryStatementNarrative;
if('fxTicketID' in request)
latestrequest.parameters["ns6:payoutRequest"]["ns6:fxTicketID"]=request.fxTicketID;
if('requestedFX' in request)
latestrequest.parameters["ns6:payoutRequest"]["ns6:requestedFXType"]=request.requestedFX;
if('payerType' in request)
latestrequest.parameters["ns6:payoutRequest"]["ns6:payerType"]=request.payerType;

if('payoutType' in request)
latestrequest.parameters["ns6:payoutRequest"]["ns6:payoutType"]=request.payoutType;

if(Array.isArray(request.payoutDetails)) {
    var totalId = request.payoutDetails.length;
    if(totalId>0){
     latestrequest.parameters["ns6:payoutRequest"]["ns6:payoutDetails"]=[];
   
    for ( var i = 0; i < totalId; i++)
   
        {
         
      var  id={ "ns8:key": request.payoutDetails[i].key ,
            "ns8:value" : request.payoutDetails[i].value
          };
           
            latestrequest.parameters["ns6:payoutRequest"]["ns6:payoutDetails"][i]=id;
   
        }
       
   }
   }


   if('transactionHold' in request){
   latestrequest.parameters["ns6:payoutRequest"]["ns6:transactionHold"]={};
   if('offsetMinutes' in request.transactionHold)
   latestrequest.parameters["ns6:payoutRequest"]["ns6:transactionHold"]["ns8:offsetMinutes"]=request.transactionHold.offsetMinutes;
    if('releaseDateTime' in request.transactionHold)
   latestrequest.parameters["ns6:payoutRequest"]["ns6:transactionHold"]["ns8:releaseDateTime"]=request.transactionHold.releaseDateTime;
}

   context.setVariable('request.content', JSON.stringify(latestrequest));
