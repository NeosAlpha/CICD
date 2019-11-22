 var request = JSON.parse(context.getVariable('request.content'));
function format(json_string) {
   return JSON.parse(json_string, function (key, value) {
       if (value !== null) {
           return value;
       }
   });
}
formatted_request=JSON.parse(JSON.stringify(format(JSON.stringify(request))));
context.setVariable('request.content', JSON.stringify(formatted_request));