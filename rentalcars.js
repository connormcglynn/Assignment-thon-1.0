var sedan = {
    name: "sedan",
    price: 39.99,
    numAvail: 12
    };
var suv = {
    name: "SUV",
    price: 69.99,
    numAvail: 0
    };
var sportscar = {
    name: "sportscar",
    price: 99.99,
    numAvail: 2
    };

var request = prompt("Which model would you like to rent: sedan, suv or sportscar?");
	
	if (request.toLowerCase() == "sedan") {
	    if (sedan.numAvail < 1) {
            prompt("Sorry, we have " + sedan.numAvail + " sedans available. Please choose a different model.");
	    } else if (sedan.numAvail >= 1) {
    	    var numAvailResponse = prompt('There are ' + sedan.numAvail + ' sedans available. Would you like to reserve one for ' + sedan.price + '? Please respond yes or no.');
        	    if (numAvailResponse.toLowerCase() == "yes") {
        	        alert("Thank you, your " + sedan.name + " has been reserved.");
        	        console.log("Thank you, your " + sedan.name + " has been reserved.");
        	    } else {
                    alert("Sorry we couldn't be of more assistance.");
                    console.log("Sorry we couldn't be of more assistance.");
        	    }
	    }
    	    
	} else if (request.toLowerCase() == "suv") {
        if (suv.numAvail < 1) {
            prompt("Sorry, we have " + suv.numAvail + " SUVs available.");
	    } else if (suv.numAvail >= 1) { 
            numAvailResponse = prompt('There are ' + suv.numAvail + ' SUVs available. Would you like to reserve one for ' + suv.price + '? Please respond yes or no.');
                if (numAvailResponse.toLowerCase() == "yes") {
    	            alert("Thank you, your " + suv.name + " has been reserved.");
    	            console.log("Thank you, your " + suv.name + " has been reserved.");
    	        } else {
    	            alert("Sorry we couldn't be of more assistance.");
    	            console.log("Sorry we couldn't be of more assistance.");
    	        }
	    }
	
	} else if (request.toLowerCase() == "sportscar" || "sport") {
	    if (sportscar.numAvail < 1) {
            prompt("Sorry, we have " + sportscar.numAvail + " sportscars available. Please choose a different model.");
	    } else if (sportscar.numAvail >= 1) {
    	    numAvailResponse = prompt('There are ' + sportscar.numAvail + ' sportscars available. Would you like to reserve one for ' + sportscar.price + '? Please respond yes or no.');
                if (numAvailResponse.toLowerCase() == "yes") {
        	        alert("Thank you, your " + sportscar.name + " has been reserved.");
        	        console.log("Thank you, your " + sportscar.name + " has been reserved.");
        	    } else {
        	        alert("Sorry we couldn't be of more assistance.");
        	        console.log("Sorry we couldn't be of more assistance.");
        	    }
	    }
	}
