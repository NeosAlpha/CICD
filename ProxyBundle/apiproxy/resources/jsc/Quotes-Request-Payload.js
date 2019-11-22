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

if ("usersBankID" in request) {
	latestrequest["parameters"]["ns12:getFXQuote"]["ns12:usersBankID"] = {};

	// User ID Block

	if ("userID" in request.usersBankID) {
		latestrequest["parameters"]["ns12:getFXQuote"]["ns12:usersBankID"]["ns4:userID"] = {};
		if ("epUserID" in request.usersBankID.userID)
			latestrequest["parameters"]["ns12:getFXQuote"]["ns12:usersBankID"]["ns4:userID"]["ns1:epUserID"] = request.usersBankID.userID.epUserID;
		if ("merchantUserID" in request.usersBankID.userID)
			latestrequest["parameters"]["ns12:getFXQuote"]["ns12:usersBankID"]["ns4:userID"]["ns1:merchantUserID"] = request.usersBankID.userID.merchantUserID;
	}

	// BenBank ID Block

	if ("benBankID" in request.usersBankID) {
		latestrequest["parameters"]["ns12:getFXQuote"]["ns12:usersBankID"]["ns4:benBankID"] = {};
		if ("epBankID" in request.usersBankID.benBankID)
			latestrequest["parameters"]["ns12:getFXQuote"]["ns12:usersBankID"]["ns4:benBankID"]["ns4:epBankID"] = request.usersBankID.benBankID.epBankID;
		if ("merchantBankID" in request.usersBankID.benBankID)
			latestrequest["parameters"]["ns12:getFXQuote"]["ns12:usersBankID"]["ns4:benBankID"]["ns4:merchantBankID"] = request.usersBankID.benBankID.merchantBankID;
	}
}


context.setVariable('request.content', JSON.stringify(latestrequest));