/// ------------------ Khai báo LIB Thêm Vào để sử dụng
var express = require('express');
var path = require('path');
var app = express();

/// Engine EJS
app.set('views', path.join( __dirname, 'views'));
app.set('view engine', 'ejs');

/// Tham số
const PORT = 8080;

/////-----------------------------------
app.get( '/', homePage );
function homePage(req, res) {
	res.render("home");
}

/////-----------------------------------
app.get( '/login', loginPage );
function loginPage(req, res) {	
	console.log("\n ...", req.query.username, req.query.password);
	res.render("login");
}

/*
	
	accsubmit = {
		username : req.query.username,
		password : req.query.password
	}; 
	//console.log(accsubmit);
	*/

/////-----------------------------------
app.get( '/product', productPage );
function productPage(req, res) {
	res.render("product");
}


/////-----------------------------------
app.get( '/order', orderPage );
function orderPage(req, res) {
	res.render("order");
}

/////-----------------------------------
app.get( '/report', reportPage );
function reportPage(req, res) {
	res.render("report");
}


/////-----------------------------------
app.get( '/admin', adminPage );
function adminPage(req, res) {
	res.render("admin");
}

/////-----------------------------------
app.get( '/manage', managePage );
function managePage(req, res) {
	res.render("manage");
}

/////-----------------------------------
app.get( '/payment', paymentPage );
function paymentPage(req, res) {
	res.render("payment");
}


/////-----------------------------------
var server = app.listen( PORT , function () {
	var host = server.address().address
	var port = server.address().port
	
	console.log("SERVER http://%s:%s", host, port)
 });

///
// 3: Ecosystem Diagram
// 4: giải thích các bước hoạt động ...
// 5: Network Diagram
// 6: Deployment Diagram + Service Diagram 