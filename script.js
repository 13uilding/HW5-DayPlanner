// Variables======================================
var timeBlockForms = {};

// Targets========================================
// Time Elements
var now; var displayDateTime; var currentHour;
// Banner Elements
var pageTitle = $("#pageTitle");
var pageMonth = $("#pageMonth");
var pageNow = $("#pageNow");
var pageNowState = "12h"
var pageNowBtn = $("#pageNowBtn");
// Time Slot Elements
var saveBtn = $(".fa-save");
var clearBtn = $(".fa-window-close");
var timeTxt = $(".timeText"); //Add this functionality if have time
var timeBoxForm = $(".form-control"); //I want enter to work like the click

// Events=========================================
// Banner Elements
// pageNow.on("mouseover", function(){
//     $('selector').css("cursor", "pointer");
// })
pageNow.on("click", function(event){
    // Turn this part into a function if I set up all the other time
    // Takes in the t# part and applies one of these two states
    if ( pageNow.attr("data-state") === "12h" ){
        pageNow.text(`Current Time--${now.format("kk:mm")}`);
        pageNow.attr("data-state", "24h");
        // for ( var hour = 6; hour < 22; hour++ ){
        //     assignBackgroundColor(currentHour, hour);  
        // };
        // var hourBlock = $(`.t${hour}`);
        // if ( currentHour > hour ){
        //     hourBlock.attr("style", "background-color: lightslategray");
        // } else if ( parseInt(currentHour) === parseInt(hour) ){
        //     console.log("equal to current");
        //     hourBlock.attr("style", "background-color: rosybrown");
        // } else {
        //     console.log("greater than current");
        //     hourBlock.attr("style", "background-color: cornflowerblue");
        // }
    } else {
        pageNow.text(`Current Time--${now.format("LT")}`);
        pageNow.attr("data-state", "12h");
        // for ( var hour = 6; hour < 22; hour++ ){
        //     assignBackgroundColor(currentHour, hour);  
        // };
    }
    // Add this functionality to all the current times
})
pageNowBtn.on("click", function(event){
    event.preventDefault();
    initializeTime();
})

// Time Slot Elements
// saveBtn.on("mouseover", function(){
//     $('selector').css('cursor', 'pointer');
// })
saveBtn.on("click", function(){
    var parentCol = $(this).parent().parent()
    var currentTimeBlock = parentCol.attr("class").split(" ")[1];
    var currentInput = parentCol.prev().children().val(); // Fix this when I come back
    console.log(currentInput);
    timeBlockForms[currentTimeBlock] = currentInput;
    console.log(timeBlockForms);
    localStorage.setItem("savedTimeBlockForms", JSON.stringify(timeBlockForms));
});
//Maybe I should try a event delegation
clearBtn.on("click", function(){
    console.log("hi");
})



// Functions=======================================
function init() {
    // Get stored todos from localStorage
    // Parsing the JSON string to an object
    var storedTimeSlots = JSON.parse(localStorage.getItem("savedTimeBlockForms"));
  
    // If todos were retrieved from localStorage, update the todos array to it
    if (storedTimeSlots !== null) {
        timeBlockForms = storedTimeSlots;
        console.log(timeBlockForms);
        for ( var hour = 6; hour < 22; hour++ ){
            renderTimeBoxFormsInput(hour);
        };
    };
};

function initializeTime(){
    now = moment();
    displayDateTime = now.format("LLLL");
    currentHour = now.format("kk")
    pageMonth.text(now.format("ddd, Do MMMM, YYYY"));
    pageNow.text(`Current Time--${now.format("LT")}`);
    // Change the start and end for time blocks displayed
    for ( var hour = 6; hour < 22; hour++ ){
        assignBackgroundColor(currentHour, hour);
    };
}

// Do I want a storeTodos function?
// RenderTodos seems uneccessary
function renderTimeBoxFormsInput(hour){
    var hourBlock = `t${hour}`;
    console.log("made it in the function" + hourBlock);
    if (timeBlockForms[hourBlock] !== undefined){
        console.log("made it in the in")
        $(`.${hourBlock} .form-control`).val(timeBlockForms[hourBlock])
    };
}
// // function clearTodo
// var index = element.parentElement.getAttribute("data-index");
// todos.splice(index, 1);

// // Store updated todos in localStorage, re-render the list
// storeTodos();
// renderTodos();


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


init();
initializeTime();