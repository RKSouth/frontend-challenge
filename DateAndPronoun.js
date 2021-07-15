$(document).ready(function () {
$("#proSection").hide();
$("#proSubmit").hide(); 

    
    $("#birthdayButtonSubmit").on("click", function (event) {
        event.preventDefault();
        console.log("go!");
        let year = $('#yearInput').val();
        let month =$('#monthInput').val();
        let day = $('#dayInput').val();
        // these are our test cases to make sure we get the right values - not super complex but workable
        if ($.isNumeric(year) && $.isNumeric(month) && $.isNumeric(day)) {
            console.log("all numbers")
            if(year.length === 4 && month.length === 2 && day.length){
                console.log("the right length")
                updateBirthday(year,month,day)
            } else {
                alert('please use 4 digits for years and 2 for months and days ex: February would be 02')
            }   
        } else {
            alert('please use only numbers for dates')
        }
    })

    function updateBirthday(year,month, day) {
        $("#birthdayOutput").append(month +'/' + day  +'/' + year );
        $("#birthdayForm").hide();
        $("#proSection").show();
        console.log("update")
  

        $("#male").on("click", function (event) {
            event.preventDefault();
           
            $("#proSubmit").show();
            $("#proSubmit").click(function(){
                $("#pronounOutput").append("He/Him");
                $("#proSection").hide();
              });
        })
        $("#female").on("click", function (event) {
            event.preventDefault();
           
            $("#proSubmit").show();
            $("#proSubmit").click(function(){
                $("#pronounOutput").append("She/Her");
                $("#proSection").hide();
              });
        })
        $("#neut").on("click", function (event) {
            event.preventDefault();
           
            $("#proSubmit").show();
            $("#proSubmit").click(function(){
                $("#pronounOutput").append("They/Them");
                $("#proForm").hide();
                $("#proSubmit").hide();
              });
        })
    }


    })