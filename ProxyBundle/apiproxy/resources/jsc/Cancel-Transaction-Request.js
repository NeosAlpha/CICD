var latestrequest ={
	"parameters": {
		"@xmlns": {
			"ns20": "http://customer.endpoint.earthport.com/api/merchant/v2/services/cancellationRequest"
		},
		"ns20:cancellationRequest": {

    }
    
	}
};

var b = {
    "version": "2.0"
};

latestrequest.parameters["ns20:cancellationRequest"]["#attrs"] = b;

 var transactionID = context.getVariable('urirequest.transactionID');
 var merchantCancellationReqID = context.getVariable('urirequest.merchantCancellationReqID');
var idType = context.getVariable('urirequest.idType');
if (idType===null || idType==='')
{
idType= 'earthport';
}
else{
  idType=idType.toLowerCase();
}

if(idType=='earthport')
latestrequest.parameters["ns20:cancellationRequest"]["ns20:epTransactionID"]=transactionID;
else if(idType=='merchant')
latestrequest.parameters["ns20:cancellationRequest"]["ns20:merchantTransactionReference"]=transactionID;


if(merchantCancellationReqID!==null && merchantCancellationReqID!==''){
latestrequest.parameters["ns20:cancellationRequest"]["ns20:MerchantCancellationReqID"]=merchantCancellationReqID;    
}


context.setVariable('request.content', JSON.stringify(latestrequest));