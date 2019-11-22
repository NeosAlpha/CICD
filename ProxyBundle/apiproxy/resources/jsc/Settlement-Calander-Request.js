  var serviceLevel = context.getVariable('urirequest.serviceLevel');
  var beneficiaryCountry = context.getVariable('urirequest.beneficiaryCountry');
  var beneficiaryCurrency = context.getVariable('urirequest.beneficiaryCurrency');
  var payoutRequestCurrency = context.getVariable('urirequest.payoutRequestCurrency');
  var numberOfCalendarDays = context.getVariable('urirequest.numberOfCalendarDays');

  var latestrequest ={
	"parameters": {
		"@xmlns": {
			"ns26": "http://customer.endpoint.earthport.com/api/merchant/v1/services/getSettlementCalendar"

		},
		"ns26:getSettlementCalendar": {

    }
    
	}
};

var b = {
    "version": "1.1"
};

latestrequest.parameters["ns26:getSettlementCalendar"]["#attrs"] = b;


latestrequest.parameters["ns26:getSettlementCalendar"]["ns26:payoutDetail"]={};

if(serviceLevel!==null && serviceLevel!==''){
latestrequest.parameters["ns26:getSettlementCalendar"]["ns26:payoutDetail"]["ns26:serviceLevel"]=serviceLevel;    
}
if(beneficiaryCountry!==null && beneficiaryCountry!==''){
latestrequest.parameters["ns26:getSettlementCalendar"]["ns26:payoutDetail"]["ns26:beneficiaryCountry"]=beneficiaryCountry;    
}
if(beneficiaryCurrency!==null && beneficiaryCurrency!==''){
latestrequest.parameters["ns26:getSettlementCalendar"]["ns26:payoutDetail"]["ns26:beneficiaryCurrency"]=beneficiaryCurrency;    
}
if(payoutRequestCurrency!==null && payoutRequestCurrency!==''){
latestrequest.parameters["ns26:getSettlementCalendar"]["ns26:payoutDetail"]["ns26:payoutRequestCurrency"]=payoutRequestCurrency;    
}

if(numberOfCalendarDays!==null && numberOfCalendarDays!==''){
latestrequest.parameters["ns26:getSettlementCalendar"]["ns26:numberOfCalendarDays"]=numberOfCalendarDays;    
}



context.setVariable('request.content', JSON.stringify(latestrequest));
  
