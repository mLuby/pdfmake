// Roboto font is included as Base64 Strings. See github wiki to use custom fonts.
const RobotoBase64 = require('../build/vfs_fonts.js').pdfMake.vfs;

var fonts = {
	Roboto: {
		normal: new Buffer(RobotoBase64['Roboto-Regular.ttf'], 'base64'),
		bold: new Buffer(RobotoBase64['Roboto-Medium.ttf'], 'base64'),
		italics: new Buffer(RobotoBase64['Roboto-Italic.ttf'], 'base64'),
		bolditalics: new Buffer(RobotoBase64['Roboto-MediumItalic.ttf'], 'base64')
	}
};

var PdfPrinter = require('../src/printer');
var printer = new PdfPrinter(fonts);
var fs = require('fs');

var docDefinition = {
	content: [
		'First paragraph',
		'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines'
	]
};

var pdfDoc = printer.createPdfKitDocument(docDefinition);
pdfDoc.pipe(fs.createWriteStream('pdfs/basics.pdf'));
pdfDoc.end();
