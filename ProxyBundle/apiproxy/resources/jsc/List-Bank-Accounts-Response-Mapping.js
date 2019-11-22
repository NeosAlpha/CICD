  var response = JSON.parse(context.getVariable('response.content'));

if(response.submitDocumentResponse.submitDocumentReturn.listBeneficiaryBankAccountsResponse){
var newresponse = {};

   

if (Array.isArray(response.submitDocumentResponse.submitDocumentReturn.listBeneficiaryBankAccountsResponse.beneficiaryBankAccountSummary)) {
    var totalId = response.submitDocumentResponse.submitDocumentReturn.listBeneficiaryBankAccountsResponse.beneficiaryBankAccountSummary.length;
    if (totalId > 0) {

        for (var i = 0; i < totalId; i++) {
            newresponse["beneficiaryBankAccountSummary"]=response.submitDocumentResponse.submitDocumentReturn.listBeneficiaryBankAccountsResponse.beneficiaryBankAccountSummary;
            }
    }

} 
else if ('beneficiaryBankAccountSummary' in response.submitDocumentResponse.submitDocumentReturn.listBeneficiaryBankAccountsResponse) {
    
            newresponse["beneficiaryBankAccountSummary"]=[];
            newresponse["beneficiaryBankAccountSummary"][0]=response.submitDocumentResponse.submitDocumentReturn.listBeneficiaryBankAccountsResponse.beneficiaryBankAccountSummary;
} 


if(response.submitDocumentResponse.submitDocumentReturn.listBeneficiaryBankAccountsResponse.userID){
		newresponse["userID"] = response.submitDocumentResponse.submitDocumentReturn.listBeneficiaryBankAccountsResponse.userID;
}
if(response.submitDocumentResponse.submitDocumentReturn.listBeneficiaryBankAccountsResponse.paginationResult){
		newresponse["paginationResult"] = response.submitDocumentResponse.submitDocumentReturn.listBeneficiaryBankAccountsResponse.paginationResult;
}


responseStatusCode=200;
}


else if(response.submitDocumentResponse.submitDocumentReturn.errors){
newresponse=response.submitDocumentResponse.submitDocumentReturn.errors;
responseStatusCode=400;
context.setVariable("triggerError", "true");
}
context.setVariable('response.content', JSON.stringify(newresponse));
context.setVariable("response.status.code", responseStatusCode)

