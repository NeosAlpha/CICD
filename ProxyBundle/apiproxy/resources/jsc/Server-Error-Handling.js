var errorResponse = JSON.parse(context.getVariable('error.content'));
var statusCode=400;
if("shortMsg" in errorResponse){
   errorResponse.shortMsg=errorResponse.shortMsg.replace("JAXB","").replace("SOAP","");
}
if("longMsg" in errorResponse){
   errorResponse.longMsg=errorResponse.longMsg.replace("JAXB","").replace("SOAP","");
}
if("failures" in errorResponse){
 var failures=[];
 if(Array.isArray(errorResponse.failures.failure)){
for(var i=0;i<errorResponse.failures.failure.length;i++) {
    failures[i]=errorResponse.failures.failure[i];
}
}

else if("failure" in errorResponse.failures){
    failures[0]=errorResponse.failures.failure;
}

for(i=0;i<failures.length;i++) {
    if('value' in failures[i]){
        failures[i].value=failures[i].value.replace("JAXB","").replace("SOAP","");
    }
}
errorResponse.failures=failures;

}

// For Authentication 
var response = JSON.parse(context.getVariable('response.content'));
if('Fault' in response) {
if(response.Fault.faultcode == "p55:FailedAuthentication"){

var timestamp = context.getVariable("system.timestamp");
var currDate = new Date(timestamp);
var dateTimeIsoString = currDate.toISOString();
// split by dot
var currDateTime = dateTimeIsoString.replace(/Z+$/, '');
var timeZoneOffset = currDate.getTimezoneOffset();
var positiveOffset = Math.abs(timeZoneOffset)
var timeOffsetInHours = -(timeZoneOffset/60)
var minZone = (positiveOffset - Math.floor(timeOffsetInHours) * 60)
var symbolOffset = timeZoneOffset > 0 ? '-' : '+' ;
var hourOffset = Math.floor(timeOffsetInHours) < 10 ? 0 : '';
var minOffset = minZone < 10 ? 0 : '';
var tzd = symbolOffset + hourOffset + Math.floor(timeOffsetInHours) + ":" + minOffset + minZone
var dateTZDformat = currDateTime + tzd;
    errorResponse={};
    errorResponse["timeOfFailure"]= dateTZDformat;
    errorResponse["failureType"]="Invalid Credentials";
    errorResponse["shortMsg"]="Client Credentials wrong";  
    errorResponse["longMsg"]="ClientID and Client secret passed is not allowed from backend";  
    statusCode=500;
}
}
context.setVariable("error.status.code", statusCode);

context.setVariable('error.content', JSON.stringify(errorResponse));