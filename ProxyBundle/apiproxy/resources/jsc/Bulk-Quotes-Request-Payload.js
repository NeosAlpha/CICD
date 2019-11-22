var request=JSON.parse(context.getVariable('request.content'));

var request=JSON.parse(context.getVariable('request.content'));

var latestrequest = {
    "parameters": {
        "@xmlns": {
            "ns22": "http://customer.endpoint.earthport.com/api/merchant/v1/services/getBulkFXQuote"
        },

        "ns22:getBulkFXQuote": {

        }
    }
};

var ver = {
    "version": "1.1"
};

latestrequest.parameters["ns22:getBulkFXQuote"]["#attrs"] = ver;
latestrequest.parameters["ns22:getBulkFXQuote"]["ns22:bulkQuote"] = [];


for (i = 0; i < request.length; i++) {
    var temp = {};
    if ("sellCurrency" in request[i])
        temp["ns22:sellCurrency"] = request[i].sellCurrency;
    if ("buyCountry" in request[i])
        temp["ns22:buyCountry"] = request[i].buyCountry;
    if ("buyCurrency" in request[i])
        temp["ns22:buyCurrency"] = request[i].buyCurrency;
    if ("serviceLevel" in request[i])
        temp["ns22:serviceLevel"] = request[i].serviceLevel;
    latestrequest.parameters["ns22:getBulkFXQuote"]["ns22:bulkQuote"][i] = temp;

}


context.setVariable('request.content', JSON.stringify(latestrequest));


context.setVariable('request.content', JSON.stringify(latestrequest));