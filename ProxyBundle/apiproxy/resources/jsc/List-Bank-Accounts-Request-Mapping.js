
var latestrequest ={
	"parameters": {
		"@xmlns": {
			"ns19": "http://customer.endpoint.earthport.com/api/merchant/v4/services/listBeneficiaryBankAccounts",
			"ns1": "http://customer.endpoint.earthport.com/api/merchant/v2/components/core"
		},
		"ns19:listBeneficiaryBankAccounts": {

    }
	}
};

var b = {
    "version": "4.1"
};

latestrequest.parameters["ns19:listBeneficiaryBankAccounts"]["#attrs"] = b;

var userID = context.getVariable('urirequest.userID');
var offset = context.getVariable('urirequest.offset');
var pageSize = context.getVariable('urirequest.pageSize');
var includeDeleted = context.getVariable('urirequest.includeDeleted');
var idType = context.getVariable('urirequest.idType');
if (idType===null || idType==='')
{
idType= 'earthport';
}
else{
  idType=idType.toLowerCase();
}

latestrequest.parameters["ns19:listBeneficiaryBankAccounts"]["ns19:userID"]={};
if(idType=='earthport')
latestrequest.parameters["ns19:listBeneficiaryBankAccounts"]["ns19:userID"]["ns1:epUserID"]= userID; 
else if(idType=='merchant')
latestrequest.parameters["ns19:listBeneficiaryBankAccounts"]["ns19:userID"]["ns1:merchantUserID"]= userID; 


latestrequest["parameters"]["ns19:listBeneficiaryBankAccounts"]["ns19:pagination"]={};


if(offset==='' || offset===null){
    latestrequest["parameters"]["ns19:listBeneficiaryBankAccounts"]["ns19:pagination"]["ns1:offset"] = "0";
}
else{
 latestrequest["parameters"]["ns19:listBeneficiaryBankAccounts"]["ns19:pagination"]["ns1:offset"] = offset;

if(pageSize!=='' && pageSize!==null){
 latestrequest["parameters"]["ns19:listBeneficiaryBankAccounts"]["ns19:pagination"]["ns1:pageSize"] = pageSize;
}
    
}




if(includeDeleted==='' || includeDeleted===null){
    latestrequest["parameters"]["ns19:listBeneficiaryBankAccounts"]["ns19:includeDeleted"] = false;
 
}
else
{
 latestrequest["parameters"]["ns19:listBeneficiaryBankAccounts"]["ns19:includeDeleted"] = includeDeleted;   
}

context.setVariable('request.content', JSON.stringify(latestrequest));