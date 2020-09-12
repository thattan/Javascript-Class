//There are 3 steps marked as ###STEP X in the comments
// complete them as ordered.

var temperatures = [];
var days = ["Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

var $ = function (id) {
	return document.getElementById(id);
}

var takeTemps = function () {
	//###STEP 2
	//Get the user inputted temp and validate it making sure it's a number
	//if it's valid add it to the temperatures array at the index that
	// corresponds with the day of week, e.g. 0 for Monday, 2 for Wednesday

	var index = $("daySelect").value;
	var temp = $("tempIn").value;
	if (temp != "") {
		temp = parseInt(temp);
		if (temp > 0 && temp < 150) {
			temperatures[index] = temp;

			if (index != (index.length - 1)) {
				$("daySelect").value = index;
			} else {
				$("daySelect").value = 0;
			}	
			displayTemps();
		}
	}	

	//EXTRA work / not credit
	// have it auto advance the selected day in the menu
	// by assigning into $("daySelect").value 
	// If it was on Sunday change it to Monday and only on valid input


}

var displayTemps = function () {
	//###STEP 3
	//loop through the non-undefined indexes in the temperatures array
	//appended them to tempString adding the day .e.g 
	//Tuesday: 89
	//Friday: 98
	//
	//when done, display the string to the page by setting the value of the textarea
	//
	//In the same loop sum the temperatures and count 
	// how many there are so you can calculate the average
	// and output the average temp on the page.
	tempString = "";
	tempTemp = 0;
	tempTotal = 0;
	tempDay = "";
	tempAverage = 0;
	dayCount = 0;

	for(var i in temperatures) {
		tempDay = days[i];
		tempTemp = temperatures[i];
		if (tempTemp > 0) {
			tempTotal += tempTemp;
			tempString += "" + tempDay + ": " + tempTemp + "\n";
			dayCount++;
		}
	}
	tempAverage = (tempTotal / dayCount);
	$("avgOut").value = tempAverage;
	$("tempList").value = tempString;
}

window.onload = function () {
	$("addTemp").onclick = takeTemps;

	//###STEP 1
	//Use a for loop here to write options to the select for each day of the week
	// <option value="0">Monday</option>
	// using += here with innerHTML property takes the existing values and concats this on the end

	for (i = 0; i < days.length; i++)
	{
		$("daySelect").innerHTML +=  "<option value=\"" + i + "\">" + days[i] + "</option>\n";
		$("daySelect").value = ""; 
	}
}