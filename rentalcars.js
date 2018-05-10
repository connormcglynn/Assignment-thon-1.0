var Sedan = {
    price: 39.99,
    numAvail: 12
    };
var SUV = {
    price: 69.99,
    numAvail: 0
    };
var Sport = {
    price: 99.99,
    numAvail: 2
    };

function Submission (modelRequest) {
    this.modelRequest = modelRequest;
}

var request = new Submission( 
	prompt("What model would you like to rent: Sedan, SUV or Sport?"), 
	);
	
	if (request === "Sedan") {
	    var numAvailResponse = prompt('There are ' + Sedan.numAvail + " available");
	    console.log(numAvailResponse);
	} 
	
//console.log(request);