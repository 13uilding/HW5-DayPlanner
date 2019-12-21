// Targets========================================
// Time Elements
var now; var displayDateTime; var currentHour;
// Banner Elements
var pageTitle = $("#pageTitle");
var pageMonth = $("#pageMonth");
var pageNow = $("#pageNow");
var pageNowState = "12h"
var pageNowBtn = $("#pageNowBtn");


// Events=========================================
// Banner Elements
pageNow.on("click", function(event){
    if ( pageNow.attr("data-state") === "12h" ){
        pageNow.text(`Current Time--${now.format("kk:mm")}`);
        pageNow.attr("data-state", "24h");
    } else {
        pageNow.text(`Current Time--${now.format("LT")}`);
        pageNow.attr("data-state", "12h");
    }
})
pageNowBtn.on("click", function(event){
    event.preventDefault();
    initializeTime();

})



// Functions=======================================
function initializeTime(){
    now = moment();
    displayDateTime = now.format("LLLL");
    currentHour = now.format("kk")
    console.log(currentHour)
    pageMonth.text(now.format("ddd, Do MMMM, YYYY"));
    pageNow.text(`Current Time--${now.format("LT")}`);
    // Change the start and end for hours displayed
    for ( var hour = 6; hour < 22; hour++ ){
        assignBackgroundColor(currentHour, hour);
    };
}

function assignBackgroundColor(currentHour, hour){
    var hourBlock = $(`.t${hour}`);
    if ( currentHour > hour ){
        hourBlock.attr("style", "background-color: lightslategray");
    } else if ( parseInt(currentHour) === parseInt(hour) ){
        console.log("equal to current");
        hourBlock.attr("style", "background-color: rosybrown");
    } else {
        console.log("greater than current");
        hourBlock.attr("style", "background-color: cornflowerblue");
    }
}



initializeTime();