
$(function () { 

    console.log("working!");

// listening for an on click image
    let imageChoice;
    let boxChoice;

    $(".item").on("click", function(event) {
        event.preventDefault();
        imageChoice = $(this).attr("data-pic");
        console.log(imageChoice);
        $(this).addClass("boxShadow");
    });
    
    
    // $(function(){
    //     $(".draggable").draggable();
    //     $(".droppable").droppable(
    //         {
    //             drop: function () {
    //                 alert("nice, keep going!");
    //             }
    //         });
    // });


// listening for an on click on box
    $(".box").on("click", function (event) {
        event.preventDefault();
        boxChoice = $(this).attr("data-box");
        console.log(boxChoice);

        if (imageChoice === boxChoice) {
            $(`.item${imageChoice}`).appendTo(`.box${boxChoice}`);
        } else {
            alert("Try again!");
        }

        if ($(".puzzle-Container").children().length == 0) {
            prompt("You win!");
        }

    });



});




// create event listener for an on click on the item (images).
// save a new const that stores which item (1-9) the user has picked. imageChoice

// simultaneously, create another event listener for an on click on box (1-9)

// save users choice in a new const. boxChoice

// run an if statement saying if imageChoice === boxChoice, perform certain function.

// if they do not match, prompt "Try again!"

// create another event listener for when divs have no childen in them. if true, prompt win

