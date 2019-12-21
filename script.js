var now = moment();
var displayDateTime = now.format("LLLL");

// Targets
var pageTitle = $("#pageTitle");
var pageMonth = $("#pageMonth");
var pageNow = $("#pageNow");
var pageNowState = "12h"
pageNow.text(`Current Time--${now.format("LT")}`);

// Changing values
pageMonth.text(now.format("ddd, Do MMMM, YYYY"));

pageNow.on("click", function(event){
    console.log("heyo")
    console.log(pageNow);
    if ( pageNow.attr("data-state") === "12h" ){
        pageNow.text(`Current Time--${now.format("kk:mm")}`);
        pageNow.attr("data-state", "24h");
    } else {
        pageNow.text(`Current Time--${now.format("LT")}`);
        pageNow.attr("data-state", "12h");
    }

})
// Create a toggle between military time and regular
// I want to create a button to refresh the time displayed



console.log(now.format("LLLL"));
// Parsing Strings should use the String + Format because other browsers
console.log(now.format("LLLL")); // Saturday, December 21, 2019 12:10 pm



// 