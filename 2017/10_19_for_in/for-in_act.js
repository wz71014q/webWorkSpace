// JavaScript Document
function showProps(obj, objName) {
	"use strict";
	var result = "";
	for (var i in obj) {
		if (obj.hasOwnProperty(i)) {
			result += objName + "." + i + " = " + obj[i] + "\n";
		}
	}
	return result;
}
var myCar ={};
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;
showProps(myCar,"myCar");