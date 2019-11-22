var action = context.getVariable('urirequest.action');

if(action!==null && action!==''){
new_action=action.toLowerCase();
context.setVariable('urirequest.action', new_action);

}