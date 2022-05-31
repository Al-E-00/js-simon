
/* 
    1.  Visualize on the page(html) 5 random numbers.
    2.  Start 30 sec timer
    3.  After 30 sec, hide the numbers
    4.  The user must enter, once a time, the numbers that previously have seen, with a prompt().
    5.  After the 5 numbers have been entered, the software tells how many and with of the numbers have been identified
*/

//DOM 
// push the numbers inside the html document
const showNumbers = document.querySelector('.show-numbers')


const generatedNumbers = [];


    for (let i = 0; i < 5; i++ ) {
        let newNumberGenerator = Math.floor(Math.random() * 10) + 1;

        // with this loop the numbers are all differents
        if(generatedNumbers.includes(newNumberGenerator)) {
            i--;
        } else {
            generatedNumbers.push(newNumberGenerator)
        }    
    }

document.showNumbers.innerHTML = '<span> ${generatedNumbers} </span>'

