 var request=JSON.parse(context.getVariable('request.content'));

var latestrequest = {
	"parameters": {
		"@xmlns": {
			"ns32": "http://customer.endpoint.earthport.com/api/merchant/v2/services/getIndicativeFXQuote",
			"ns1": "http://customer.endpoint.earthport.com/api/merchant/v2/components/core",
		},
		"ns32:getIndicativeFXQuote": {}
	}
};
var ver = {
	"version": "2.0"
};
latestrequest["parameters"]["ns32:getIndicativeFXQuote"]["#attrs"] = ver;

// Sell Amount Block
//Buy Amount Block

if ("buyAmount" in request) {
	latestrequest["parameters"]["ns32:getIndicativeFXQuote"]["ns32:buyAmount"] = {};
	if ("currency" in request.buyAmount)
		latestrequest["parameters"]["ns32:getIndicativeFXQuote"]["ns32:buyAmount"]["ns1:currency"] = request.buyAmount.currency;
	if ("amount" in request.buyAmount)
		latestrequest["parameters"]["ns32:getIndicativeFXQuote"]["ns32:buyAmount"]["ns1:amount"] = request.buyAmount.amount;
}
else
if ("sellAmount" in request) {
	latestrequest["parameters"]["ns32:getIndicativeFXQuote"]["ns32:sellAmount"] = {};
	if ("currency" in request.sellAmount)
		latestrequest["parameters"]["ns32:getIndicativeFXQuote"]["ns32:sellAmount"]["ns1:currency"] = request.sellAmount.currency;
	if ("amount" in request.sellAmount)
		latestrequest["parameters"]["ns32:getIndicativeFXQuote"]["ns32:sellAmount"]["ns1:amount"] = request.sellAmount.amount;
}

if ("buyCurrency" in request)
	latestrequest["parameters"]["ns32:getIndicativeFXQuote"]["ns32:buyCurrency"] = request.buyCurrency;
else if ("sellCurrency" in request)
	latestrequest["parameters"]["ns32:getIndicativeFXQuote"]["ns32:sellCurrency"] = request.sellCurrency;


context.setVariable('request.content', JSON.stringify(latestrequest));