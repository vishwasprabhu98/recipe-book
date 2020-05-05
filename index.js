

//importing the packages
let express = require('express');
let path = require('path');
let bodyparser = require('body-parser');


//using express object
let app = express();
app.use(bodyparser.urlencoded({
	extended: true
}));
app.use(bodyparser.json());
app.use(express.static(__dirname+'/public/'));


app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/index.html', (req, res) => {
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/recipes.html', (req, res) => {
	res.sendFile(path.join(__dirname + '/recipes.html'));
});

//starting the port
let port = process.env.PORT || 3006;
app.listen(port, () => {
	console.log("server started at port:3006");
});