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

var request = prompt("Would you like to rent a sedan, suv or sportscar?");
	
	request.toLowerCase() == "sedan"
	    ? (sedan.numAvail < 1 ? prompt("Sorry, we have " + sedan.numAvail + " sedans available. Please choose a different model."))
	    : (sedan.numAvail >= 1
    	? var numAvailResponse = prompt('There are ' + sedan.numAvail + ' available. Would you like to reserve one for ' + sedan.price + '? Please respond yes or no.'))
        	    ? (numAvailResponse.toLowerCase() == "yes")
        	        : alert("Thank you, your " + sedan.name + " has been reserved." );
        	        : alert("Sorry we couldn't be of more assistance." );
        	    }
    	    
	} else if (request.toLowerCase() == "suv") {
        if (suv.numAvail < 1) {
            prompt("Sorry, we have " + suv.numAvail + " SUVs available. Please choose a different model.");
	    } else if (suv.numAvail >= 1) { 
            numAvailResponse = prompt('There are ' + suv.numAvail + ' available. Would you like to reserve one for ' + suv.price + '? Please respond yes or no.');
                if (numAvailResponse.toLowerCase() == "yes") {
    	        alert("Thank you, your " + suv.name + " has been reserved." );
    	    } else {
    	        alert("Sorry we couldn't be of more assistance." );
    	    }
	    }
	
	} else if (request.toLowerCase() == "sportscar" || "sport") {
	    if (sportscar.numAvail < 1) {
            prompt("Sorry, we have " + sportscar.numAvail + " sportscars available. Please choose a different model.");
	    } else if (suv.numAvail >= 1) {
    	    numAvailResponse = prompt('There are ' + sportscar.numAvail + ' available. Would you like to reserve one for ' + sportscar.price + '? Please respond yes or no.');
                if (numAvailResponse.toLowerCase() == "yes") {
        	        alert("Thank you, your " + sportscar.name + " has been reserved." );
        	    } else {
        	        alert("Sorry we couldn't be of more assistance." );
        	    }
	    }
	}
}