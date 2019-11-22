 var request=JSON.parse(context.getVariable('request.content'));

var latestrequest = {
	"parameters": {
		"@xmlns": {
			"ns12": "http://customer.endpoint.earthport.com/api/merchant/v3/services/getFXQuote",
			"ns1": "http://customer.endpoint.earthport.com/api/merchant/v2/components/core",
			"ns4": "http://customer.endpoint.earthport.com/api/merchant/v3/components/bankBase"
		},
		"ns12:getFXQuote": {}
	}
};
var ver = {
	"version": "3.3"
};
latestrequest["parameters"]["ns12:getFXQuote"]["#attrs"] = ver;

// Sell Amount Block
//Buy Amount Block

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


if ("buyAmount" in request) {
	latestrequest["parameters"]["ns12:getFXQuote"]["ns12:buyAmount"] = {};
	if ("currency" in request.buyAmount)
		latestrequest["parameters"]["ns12:getFXQuote"]["ns12:buyAmount"]["ns1:currency"] = request.buyAmount.currency;
	if ("amount" in request.buyAmount)
		latestrequest["parameters"]["ns12:getFXQuote"]["ns12:buyAmount"]["ns1:amount"] = request.buyAmount.amount;
}
else
if ("sellAmount" in request) {
	latestrequest["parameters"]["ns12:getFXQuote"]["ns12:sellAmount"] = {};
	if ("currency" in request.sellAmount)
		latestrequest["parameters"]["ns12:getFXQuote"]["ns12:sellAmount"]["ns1:currency"] = request.sellAmount.currency;
	if ("amount" in request.sellAmount)
		latestrequest["parameters"]["ns12:getFXQuote"]["ns12:sellAmount"]["ns1:amount"] = request.sellAmount.amount;
}

if ("buyCurrency" in request)
	latestrequest["parameters"]["ns12:getFXQuote"]["ns12:buyCurrency"] = request.buyCurrency;
else if ("sellCurrency" in request)
	latestrequest["parameters"]["ns12:getFXQuote"]["ns12:sellCurrency"] = request.sellCurrency;



if ("serviceLevel" in request)
	latestrequest["parameters"]["ns12:getFXQuote"]["ns12:serviceLevel"] = request.serviceLevel;

//User Bank Id Block


latestrequest.parameters["ns12:getFXQuote"]["ns12:usersBankID"]={};
latestrequest.parameters["ns12:getFXQuote"]["ns12:usersBankID"]["ns4:userID"]={};
if(idType=='earthport')
latestrequest.parameters["ns12:getFXQuote"]["ns12:usersBankID"]["ns4:userID"]["ns1:epUserID"]=userID;
else if(idType=='merchant')
latestrequest.parameters["ns12:getFXQuote"]["ns12:usersBankID"]["ns4:userID"]["ns1:merchantUserID"]=userID;

latestrequest.parameters["ns12:getFXQuote"]["ns12:usersBankID"]["ns4:benBankID"]={};

if(idType=='earthport')
latestrequest.parameters["ns12:getFXQuote"]["ns12:usersBankID"]["ns4:benBankID"]["ns4:epBankID"]=bankID; 
else if(idType=='merchant')
latestrequest.parameters["ns12:getFXQuote"]["ns12:usersBankID"]["ns4:benBankID"]["ns4:merchantBankID"]=bankID; 



context.setVariable('request.content', JSON.stringify(latestrequest));