var latestrequest ={
	"parameters": {
		"@xmlns": {
		    "ns1": "http://customer.endpoint.earthport.com/api/merchant/v2/components/core",
			"ns11": "http://customer.endpoint.earthport.com/api/merchant/v4/services/getStatement"
		},
		"ns11:getStatement": {

		}
	}
};

var b = {
    "version": "4.4"
};

latestrequest.parameters["ns11:getStatement"]["#attrs"] = b;


var managedMerchantName = context.getVariable('urirequest.managedMerchantName');
var currency = context.getVariable('urirequest.currency');
var startDateTime = context.getVariable('urirequest.startDateTime');
var endDateTime = context.getVariable('urirequest.endDateTime');
var sortOrder = context.getVariable('urirequest.sortOrder');
var offset = context.getVariable('urirequest.offset');
var pageSize = context.getVariable('urirequest.pageSize');







if(managedMerchantName!==null && managedMerchantName!==''){
 latestrequest.parameters["ns11:getStatement"]["ns11:managedMerchantIdentity"]= managedMerchantName; 
}

if(startDateTime!==null && startDateTime!==''){
 latestrequest.parameters["ns11:getStatement"]["ns11:startDateTime"]= startDateTime; 
}
 
if(endDateTime!==null && endDateTime!==''){
 latestrequest.parameters["ns11:getStatement"]["ns11:endDateTime"]= endDateTime; 
}    


if(currency!==null && currency!==''){
 latestrequest.parameters["ns11:getStatement"]["ns11:currency"]= currency; 
}

if(sortOrder!==null && sortOrder!==''){
 latestrequest.parameters["ns11:getStatement"]["ns11:sortOrder"]= sortOrder; 
}


if(offset!==null && offset!==''){

 latestrequest.parameters["ns11:getStatement"]["ns11:pagination"]={};
 latestrequest.parameters["ns11:getStatement"]["ns11:pagination"]["ns1:offset"]= offset; 
 
 if(pageSize!==null && pageSize!==''){
 latestrequest.parameters["ns11:getStatement"]["ns11:pagination"]["ns1:pageSize"]= pageSize; 
}
 
}







context.setVariable('request.content', JSON.stringify(latestrequest));