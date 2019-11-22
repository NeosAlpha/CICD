var verb=context.getVariable('request.verb');
if(verb=="POST" || verb=="PUT"){
    var content_type=context.getVariable('request.header.Content-Type');
    if(content_type != "application/json"){
        context.setVariable('requestTriggerError',"true");
    }
    var content_length=context.getVariable('request.header.Content-Length');
    if(content_length > 102400){
        context.setVariable('requestTriggerError',"true");
    }
}