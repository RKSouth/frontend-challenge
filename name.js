$(document).ready(function () {


    $("#nameGreeting").hide()
    $("#birthdaySection").hide()

    $("#nameButtonSubmit").on("click", function (event) {
        event.preventDefault();
        let name = $('#nameInput').val();
        console.log(name)
        if (name === null || name === '' || name.length === 0) {
            alert("Please tell me your name");

        } else {
            finishedName(name)
        }
    });




function finishedName(name) {
    $("#nameForm").hide();
    $("#nameGreeting").show();


    $("#nameOutput").append(name)
    $("#nameOutput2").append(name)
    startBirthday();
    console.log("finished name")
}

function startBirthday() {
    let currentTime = moment().format('MMMM Do YYYY')
    $("#myBDay").append(currentTime);
    
    $("#birthdaySection").show()
    console.log("party has started");


}




})
