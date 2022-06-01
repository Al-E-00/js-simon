
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
            generatedNumbers.push(newNumberGenerator);
            showNumbers.append(` ${generatedNumbers[i]}` + (i < 4 ? ' -' : ''));
            
        }   
        
    }

    // function -> after 30 sec hide the numbers
    setTimeout (hideNumbers, 30000);

        function hideNumbers () {
            showNumbers.remove(` ${generatedNumbers} -`);

                //function -> afret ask to the user to enter the numbers
            setTimeout(userNumbers, 0);

                //function -> compare the two values and push only the correct ones
                // add queue this function that starts when the previous ones have finished

            setTimeout(checkAnswer, 0);
        }
    
    



    function userNumbers () {
        
        // let enter the prompt 5 times
        for (let i = 0; i < 5; i++) {
            let userNumbersPrompt = parseInt(prompt("Enter the numbers, one by one,  you have seen previously"));
            
            userNumbersEntered.push(userNumbersPrompt);
        }
    }


    function checkAnswer() {

        for (let i = 0; i < generatedNumbers.length; i++) {
            // first loop to check the numbers
            if (generatedNumbers.includes(userNumbersEntered[i])) {
            //if the number already exist, do not push anything
        if(correctNumbers.includes(userNumbersEntered[i])) {
            i++
        }  
        // if it doesn't exist into the array, push it
        else {
            correctNumbers.push(userNumbersEntered[i]);       
        }
    } 
}
    }

    // Bring up an alert with the right number of answers and numbers
    
    
    setTimeout (alertCorrectAnswer, 33000);

    
    function alertCorrectAnswer () {
        let numberRightAnswer = correctNumbers.length;
        if (numberRightAnswer <= 1) {
            alert(`You guessed  ${numberRightAnswer} number. It's: ${correctNumbers}`);

        } else {
            alert(`You guessed  ${numberRightAnswer} numbers. They are: ${correctNumbers}`);

        }
    }


    console.log(generatedNumbers);
    console.log(userNumbersEntered);
    console.log(correctNumbers);
