
$(function () { 

    console.log("working!");

// listening for an on click image
    let imageChoice;
    let boxChoice;

    $(".item").on("click", function(event) {
        event.preventDefault();
        imageChoice = $(this).attr("data-pic");
        console.log(imageChoice);
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
            // $(".item3").appendTo(".box3");
            // $(".item4").appendTo(".box4");
            // $(".item5").appendTo(".box5");
            // $(".item6").appendTo(".box6");
            // $(".item7").appendTo(".box7");
            // $(".item8").appendTo(".box8");
            // $(".item9").appendTo(".box9");
        } else {
            alert("Try again!");
        }

    });



});




// create event listener for an on click on the item (images).
// save a new const that stores which item (1-9) the user has picked. imageChoice

// simultaneously, create another event listener for an on click on box (1-9)

// save users choice in a new const. boxChoice

// run an if statement saying if imageChoice === boxChoice, perform certain function.

// if they do not match, prompt "Try again!"

// create another event listener for when divs have no 

