
$(document).ready(function() {
    $("#text_enter").submit(text_splitter);
});

function text_splitter(e) {
	e.preventDefault();
	
	var entered_text = document.getElementById("enter_text").value;

	var stripped_text = entered_text.replace(/[^\w\s]/gi,'').replace(/\r?\n|\r/gi,' ');
	//console.log(stripped_text);

	var split_text = stripped_text.split(" ");
	console.log(split_text);
};

/*upload file
const app = require('jwt-http');
const formidable = require('formidable');
const path = require('path');

app.setPort(9000);

app.renderHTML('/', path.join(__dirname, 'index.html'));

app.postMethod('/upload' , true, function(req, res, previous){
	var form = new formidable.IncomingForm();
	form.parse(req);
	var uploads = {};
	form.uploadDir = path.join(__dirname, '/temp');
	
	form.on("fileBegin", function(err, file){
		var fileName = path.join(__dirname, '/upload/' + file.name);
		file.path = fileName;
	})

	form.on('file', function(field, file){
		uploads[field]=file;
	});

	form.prependOnceListener('error', function(error){
		app.httpMsgs.send500(req, res, error);
	});

	form.on('end', function(){
		app.httpMsgs.sendJSON(req, res, uploads);
	});

});
*/

/* function getDef(event) {

	event.preventDefault();

} */
