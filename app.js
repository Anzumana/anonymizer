const csvFilePath='./efaqerylogs-beispiel.csv'
const csv=require('csvtojson')
const json2csv= require('json2csv');
const fs = require('fs');
csv({
	noheader:true,
	delimiter:';'
})
.fromFile(csvFilePath)
.on('json',(jsonObj)=>{
    // combine csv header row and csv line to a json object
	jsonObj.field1 = "sdfßösdfsdfsdf";
	line = '';
	for( var b in jsonObj){
		line = line + ";" + jsonObj[b];
	}
	console.log(line);
	fs.appendFileSync('result.csv', line);
    // jsonObj.a ==> 1 or 4
	 //console.log(jsonObj);
})
.on('done',(error)=>{
    //console.log('end')
})
