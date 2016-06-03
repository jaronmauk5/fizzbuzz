	var limit = askforinput();

fizzbuzz(limit);

function fizzbuzz(limit){
	//loop through 1 - 15
	for (var i = 1; i <= limit; i++) {
	   
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
}


function askforinput(){
	var limit=prompt("Pick a starting number between 1 & 100!");

		limit = parseInt(limit, 10);

		if(Number.isNaN(limit)){
			alert("You did not enter a valid number");
			return askforinput();
		}
		else if (limit<1 && limit>100){
			alert("Your number is outside of 1 and 100!")
			return askforinput();
		}

		else{
			return limit;
		}


}


