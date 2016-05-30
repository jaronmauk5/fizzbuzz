//loop through 1 - 15
for (var i = 1; i <= 15; i++) {
   
//if number is divisable by both 3 & 5 output = "fizzbuzz"
	if (i%3 == 0 && i%5 == 0) {
		console.log("fizzbuzz")
	}
//if number is divisable by 3 output = "fizz"
	
	else if(i%3 == 0) {
		console.log("fizz");
	}


//if number is divisable by 5 output = "buzz"
	else if(i%5 == 0) {
		console.log("buzz");
	}

	else{
		console.log(i);
	}


//else output = "number"

}
