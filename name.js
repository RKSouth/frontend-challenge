$(document).ready(function () {


    $("#nameGreeting").hide()

 $("#nameButtonSubmit").on("click", function (event) {
     event.preventDefault();
    console.log (event)
    console.log("hi")

    changeFirstStep()
});

})


function changeFirstStep() {
    $("#nameForm").hide();
    $("#nameGreeting").show();
    
    let name = $('#nameInput').val();
    $("#nameOutput").append(name)
    $("#nameOutput2").append(name)
  
    console.log(name)
}