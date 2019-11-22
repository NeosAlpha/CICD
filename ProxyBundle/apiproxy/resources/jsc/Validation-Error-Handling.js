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

var error = JSON.parse(context.getVariable('error.content'));
var errorResponse={};


if("errorMessage" in error)
{
  errorResponse["timeOfFailure"]= dateTZDformat;
  errorResponse["failureType"]="data validation error";
  errorResponse["shortMsg"]="wrong data type";  
  errorResponse["longMsg"]=error.errorMessage;  
  statusCode=400;
}
context.setVariable("error.header.Content-Type", "application/json");
context.setVariable("error.content", JSON.stringify(errorResponse));
context.setVariable("error.status.code", statusCode);
