# Front End Challenge
![RobotTalk](/Assets/CoverPage.png)

### A simple app to help you socialize (with a robot)

## Table of Contents
* [Technologies Used](Technologies_Used)
* [Deployed Site](Deployed)
* [Features](Features)
* [Usage](Usage)
* [Author](Author)
* [Credits](Credits)
* [License](License)

## Technologies_Used
* HTML 
* CSS
* Jquery



## Deployed Site
[Robots](https://rksouth.github.io/frontend-challenge/)

## Features 
 

__1. Turning forms on and off__
 
Using the hide and show functions in different places that we want things to be hidden or seen.

__2. A Displayed Result__

Once you fill out a section of the form it disappears, but no worries you can still see what you put. I simple wrote an <output> tag for every item to be display and set it be to the side of the main discussion for UI purpose, you don't want to get too distracted but what was already said.

__3. A small amount of data validation__

It doesn't really matter if you have numbers in your name but, because I didn't take the time to write an algorithm that takes in every form of date imaginable- I did write validation for the form the dates I accept complete with very very annoying alerts to tell you that you are doing it wrong. 
This function takes in year month and day and looks at the length and whether it is, indeed a number. If you got them all right then the date gets moved into where it can be made into output

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

__4. Others__

I realize there was an option to build this project with Next.js and I react. I am familiar with react but I don't believe I could have made it work as well and easily as I wanted. If you made it this far, awesome! I look forward to speaking with you in person.

## Usage
### How do you use this project? How ever you would like.
 
## Author 
Rachael Kelm-Southworth

* [linkedin](https://www.linkedin.com/in/rachael-kelm-southworth-87a3831b3) 

* [Portfolio](https://rksouth.github.io/React-Portfolio/ )

* [github](https://github.com/RKSouth/)

 ## Credits

I want to thank whoever came up with challenge because it was super fun!

## License
[MIT](https://choosealicense.com/licenses/mit/)

