function getFormattedTimestamp(timestamp){

	let toReturn = null;
	let date = null;
	if(!timestamp){
		date = new Date();
	}else if(!isNaN(timestamp)){
		date = new Date(parseInt(timestamp))
	}else{
		date = new Date(timestamp);
	}
	if(date.toString() != "Invalid Date"){
		toReturn = {
			unix: date.getTime(), 
			utc: date.toUTCString(),
			junk: "blah blah"
		}
	}else{
		toReturn = {
			unix: null, 
			utc: "Invalid Date"
		}
	}
	return toReturn;
}

exports.getFormattedTimestamp = getFormattedTimestamp;