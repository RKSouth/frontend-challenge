$(document).ready(function () {
    function updateBirthday() {
        $("#birthdayOutput").append(month +'/' + day  +'/' + year );
        $("#birthdaForm").hide();
    }
    
    $("#birthdayButtonSubmit").on("click", function (event) {
        event.preventDefault();
        console.log("go!");
     
        let year = $('#yearInput');
        let month =$('#monthInput');
        let day = $('#dayInput');
        if (year.isNumeric() && month.isNumeric() && day.isNumeric()) {
            console.log("all numbers")
            if(year.length === 4 && month.length === 2 && day.length){
                console.log("the right length")
                updateBirthday()
            } else {
                alert('please use 4 digits for years and 2 for months and days ex: February would be 02')
            }   
        } else {
            alert('please use only numbers for dates')
        }
    })




    })