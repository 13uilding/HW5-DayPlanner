var now = moment();
var displayDateTime = now.format("LLLL");

// Targets
var pageTitle = $("#pageTitle");
var pageMonth = $("#pageMonth");
var pageNow = $("#pageNow");

// Changing values
pageMonth.text(now.format("ddd, Do MMMM, YYYY"));
pageNow.text(`Current Time--${now.format("kk:mm")}`) 
// Create a toggle between military time and regular
// I want to create a button to refresh the time displayed



console.log(now.format("LLLL"));
// Parsing Strings should use the String + Format because other browsers
console.log(now.format("LLLL")); // Saturday, December 21, 2019 12:10 pm



// 