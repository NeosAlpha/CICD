var response="";
var x=context.getVariable('requestTriggerError');
if(x!="true"){
response = context.getVariable('errorMessage').replace(/"/g, '\'');
}
var responseStatusCode;
var newresponse={};

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


 if(response.includes("SyntaxError:")){
newresponse["timeOfFailure"]= dateTZDformat;
newresponse["failureType"]="validation";
newresponse["shortMsg"]="Generic validation failure";  
newresponse["longMsg"]="Invalid json format: "+response.substring(response.indexOf("SyntaxError: ")+13, response.lastIndexOf(" ("));  
responseStatusCode=400;
}else if(response.includes("Access Token expired")){
    newresponse["timeOfFailure"]= dateTZDformat;
newresponse["failureType"]="Token Expired";
newresponse["shortMsg"]="Access token expired";  
newresponse["longMsg"]="Access token used to access a resource is expired.";  
responseStatusCode=401;
}else if(response.includes("Invalid Access Token")){
newresponse["timeOfFailure"]= dateTZDformat;
newresponse["failureType"]="Invalid Token";
newresponse["shortMsg"]="Invalid access token";  
newresponse["longMsg"]="Access token used to access a resource is invalid.";  
responseStatusCode=401;
}else if(response.includes("Invalid access token")){
newresponse["timeOfFailure"]= dateTZDformat;
newresponse["failureType"]="Missing Token";
newresponse["shortMsg"]="Access token Missing";  
newresponse["longMsg"]="Access token is not available in headers";  
responseStatusCode=401;
}else if(context.getVariable('requestTriggerError')=="true"){
if(context.getVariable('request.header.Content-Length')>102400){
newresponse["timeOfFailure"]= dateTZDformat;
newresponse["failureType"]="Request entity too large";
newresponse["shortMsg"]="Large payload size";  
newresponse["longMsg"]="Size of payload is bigger than 100kb";  
responseStatusCode=413;
    
}else{newresponse["timeOfFailure"]= dateTZDformat;
newresponse["failureType"]="Unsupported media type";
newresponse["shortMsg"]="Missing or wrong Content-Type";  
newresponse["longMsg"]="Content-Type header is missing or invalid";  
responseStatusCode=415;
}
    
}else if(response.includes("Spike arrest violation")){
newresponse["timeOfFailure"]= dateTZDformat;
newresponse["failureType"]="Too Many Request";
newresponse["shortMsg"]="Exceeding Rate Limits";  
newresponse["longMsg"]="Your api calls rate limit exceeds please try again after sometime";  
responseStatusCode=429;
}else if(response.includes("Illegal IP")){
newresponse["timeOfFailure"]= dateTZDformat;
newresponse["failureType"]="Access Denied";
newresponse["shortMsg"]="IP Access Denied";  
newresponse["longMsg"]="IP used to call api resource is not allowed or unauthorized";  
responseStatusCode=403;
}

context.setVariable("error.status.code", responseStatusCode);
context.setVariable('error.content', JSON.stringify(newresponse));