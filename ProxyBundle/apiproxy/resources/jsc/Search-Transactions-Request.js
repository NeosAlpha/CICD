  var currency = context.getVariable('urirequest.currency');
  var startDateTime = context.getVariable('urirequest.startDateTime');
  var endDateTime = context.getVariable('urirequest.endDateTime');
  var amountFrom = context.getVariable('urirequest.amountFrom');
  var amountTo = context.getVariable('urirequest.amountTo');
  var sortOrder = context.getVariable('urirequest.sortOrder');
  var sortFields = context.getVariable('urirequest.sortFields');
  var merchantTransactionID = context.getVariable('urirequest.merchantTransactionID');
  var transactionType = context.getVariable('urirequest.transactionType');
  var transactionStatusCode = context.getVariable('urirequest.transactionStatusCode');
  var offset = context.getVariable('urirequest.offset');
  var pageSize = context.getVariable('urirequest.pageSize');
  var managedMerchantName = context.getVariable('urirequest.managedMerchantName');

  
  var sortField;
  
  if(sortFields!==null && sortFields!==''){
      sortField=sortFields.split(',');
  }
  
  var latestrequest ={
	"parameters": {
		"@xmlns": {
			"ns18": "http://customer.endpoint.earthport.com/api/merchant/v4/services/searchTransactions",
			"ns1": "http://customer.endpoint.earthport.com/api/merchant/v2/components/core",
			"xsins": "http://www.w3.org/2001/XMLSchema-instance"
			
		},
		"ns18:searchTransactions": {

    }
    
	}
};

var b = {
    "version": "4.4"
};

var type = {
    "xsins:type": "ns18:SearchSortFieldsType"
};


latestrequest.parameters["ns18:searchTransactions"]["#attrs"] = b;

if(managedMerchantName!==null && managedMerchantName!==''){
latestrequest.parameters["ns18:searchTransactions"]["ns18:managedMerchantIdentity"]=managedMerchantName;
}

latestrequest.parameters["ns18:searchTransactions"]["ns18:searchTransactionsCriteria"]={};
latestrequest.parameters["ns18:searchTransactions"]["ns18:searchTransactionsCriteria"]["ns1:sortCriteria"]={};
latestrequest.parameters["ns18:searchTransactions"]["ns18:pagination"]={};

if(startDateTime!==null && startDateTime!==''){
latestrequest.parameters["ns18:searchTransactions"]["ns18:searchTransactionsCriteria"]["ns18:periodStartDateTime"]=startDateTime;    
}
if(endDateTime!==null && endDateTime!==''){
latestrequest.parameters["ns18:searchTransactions"]["ns18:searchTransactionsCriteria"]["ns18:periodEndDateTime"]=endDateTime;    
}
if(currency!==null && currency!==''){
latestrequest.parameters["ns18:searchTransactions"]["ns18:searchTransactionsCriteria"]["ns18:currency"]=currency;    
}
if(amountFrom!==null && amountFrom!==''){
latestrequest.parameters["ns18:searchTransactions"]["ns18:searchTransactionsCriteria"]["ns18:amountFrom"]=amountFrom;    
}
if(amountTo!==null && amountTo!==''){
latestrequest.parameters["ns18:searchTransactions"]["ns18:searchTransactionsCriteria"]["ns18:amountTo"]=amountTo;    
}
if(merchantTransactionID!==null && merchantTransactionID!==''){
latestrequest.parameters["ns18:searchTransactions"]["ns18:searchTransactionsCriteria"]["ns18:merchantTransactionID"]=merchantTransactionID;    
}
if(transactionType!==null && transactionType!==''){
latestrequest.parameters["ns18:searchTransactions"]["ns18:searchTransactionsCriteria"]["ns18:transactionType"]=transactionType;    
}
if(transactionStatusCode!==null && transactionStatusCode!==''){
latestrequest.parameters["ns18:searchTransactions"]["ns18:searchTransactionsCriteria"]["ns18:transactionStatusCode"]=transactionStatusCode;    
}

if(sortOrder===null && sortOrder===''){
latestrequest.parameters["ns18:searchTransactions"]["ns18:searchTransactionsCriteria"]["ns1:sortCriteria"]["ns1:sortOrder"]="DESC";
}
else{
    latestrequest.parameters["ns18:searchTransactions"]["ns18:searchTransactionsCriteria"]["ns1:sortCriteria"]["ns1:sortOrder"]=sortOrder;
}



if(sortField!==null){
    latestrequest.parameters["ns18:searchTransactions"]["ns18:searchTransactionsCriteria"]["ns1:sortCriteria"]["ns1:sortFields"]=[];
    
    for (i = 0; i < sortField.length; i++) {
    latestrequest.parameters["ns18:searchTransactions"]["ns18:searchTransactionsCriteria"]["ns1:sortCriteria"]["ns1:sortFields"][i]={};
    latestrequest.parameters["ns18:searchTransactions"]["ns18:searchTransactionsCriteria"]["ns1:sortCriteria"]["ns1:sortFields"][i]["#attrs"]=type;
    latestrequest.parameters["ns18:searchTransactions"]["ns18:searchTransactionsCriteria"]["ns1:sortCriteria"]["ns1:sortFields"][i]["ns18:sortField"]={};
    latestrequest.parameters["ns18:searchTransactions"]["ns18:searchTransactionsCriteria"]["ns1:sortCriteria"]["ns1:sortFields"][i]["ns18:sortField"]=sortField[i];
    
} 
}


if(offset==='' || offset===null){
    latestrequest["parameters"]["ns18:searchTransactions"]["ns18:pagination"]["ns1:offset"] = "0";
}
else{
 latestrequest["parameters"]["ns18:searchTransactions"]["ns18:pagination"]["ns1:offset"] = offset;

if(pageSize!=='' && pageSize!==null){
 latestrequest["parameters"]["ns18:searchTransactions"]["ns18:pagination"]["ns1:pageSize"] = pageSize;
}
    
}




context.setVariable('request.content', JSON.stringify(latestrequest));
  
  