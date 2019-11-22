var latestrequest ={
	"parameters": {
		"@xmlns": {
			"ns1": "http://customer.endpoint.earthport.com/api/merchant/v2/components/core",
			"ns9": "http://customer.endpoint.earthport.com/api/merchant/v2/services/getBalance"},
		"ns9:getBalance": {
		    
		}
	}
};

var b = {
    "version": "2.0"
};

latestrequest.parameters["ns9:getBalance"]["#attrs"] = b;

// var managedMerchantIdentity,currency;

var managedMerchantName = context.getVariable('urirequest.managedMerchantName');
var currency = context.getVariable('urirequest.currency');

if(managedMerchantName!==null && managedMerchantName!==''){
 latestrequest.parameters["ns9:getBalance"]["ns9:managedMerchantIdentity"]= managedMerchantName; 
}

if(currency!==null && currency!==''){
  latestrequest.parameters["ns9:getBalance"]["ns9:currency"] = currency;
 }
    



context.setVariable('request.content', JSON.stringify(latestrequest));