
/* 
    1.  Visualize on the page(html) 5 random numbers.
    2.  Start 30 sec timer
    3.  After 30 sec, hide the numbers
    4.  The user must enter, once a time, the numbers that previously have seen, with a prompt().
    5.  After the 5 numbers have been entered, the software tells how many and witch of the numbers have been identified
*/

//DOM 
// push the numbers inside the html document
const showNumbers = document.querySelector('.show-numbers')


const generatedNumbers = [];
const userNumbersEntered = [];
const correctNumbers = [];

    for (let i = 0; i < 5; i++ ) {
        let newNumberGenerator = Math.floor(Math.random() * 10);

        // with this loop the numbers are all differents
        if(generatedNumbers.includes(newNumberGenerator)) {
            i--;
        } else {
            generatedNumbers.push(newNumberGenerator)
            showNumbers.append(` ${generatedNumbers[i]} -`);
        }   
        
    }

    // funciton -> after 30 sec hide the numbers
    setTimeout (hideNumbers, 1000);

        function hideNumbers () {
            showNumbers.remove(` ${generatedNumbers} -`);
        }
    
    
    //function -> afret 32 sec ask to the user to enter the numbers
    setTimeout (userNumbers, 2000);

    function userNumbers () {
        
        // let enter the prompt 5 times
        for (let i = 0; i < 5; i++) {
            let userNumbersPrompt = parseInt(prompt("Enter the numbers, one at time,  you have seen previously"));
            
            userNumbersEntered.push(userNumbersPrompt);
        }
    }

    //function -> compare the two values and push only the correct ones
    // set timeout for this function that starts when the previous ones have finished

    setTimeout (checkAnswer, 3000);

    function checkAnswer () {
        for (let i = 0; i < userNumbersEntered.length; i++) {
            let correctNumber = 0;
            if (generatedNumbers.includes(userNumbersEntered[i])) {
                correctNumber = userNumbersEntered[i];
            } else {
                i++
            }
            console.log(correctNumber);
        }



    }


    console.log(generatedNumbers);
    console.log(userNumbersEntered);
    console.log(correctNumbers);
