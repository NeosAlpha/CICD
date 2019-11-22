var fs = require('fs');
var _ = require('lodash');


var contents = fs.readFileSync('./output.json', 'utf8');
contents = JSON.parse(contents);

if(_.has(contents, 'code')){
    process.exit(1);}
else{
	var value=contents.revision[0].name +","+contents.name
	fs.writeFileSync('./output.json', value);
}
