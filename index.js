const questions = [
    {
        question: "What is the name of the tallest mountain in the world?",
        optionA: "Mount Everest",
        optionB: "Mount Kangchenjunga",
        optionC: "Mount Annapurna",
        optionD: "Mount Lhotse",
        correctOption: "optionA"
    },

    {
        question: "What is the name of the largest country in the world?",
        optionA: "USA",
        optionB: "China",
        optionC: "India",
        optionD: "Russia",
        correctOption: "optionD"
    },

    {
        question: "What U.S. State is home to no documented poisonous snakes?",
        optionA: "Minnesota",
        optionB: "Arizona",
        optionC: "Alaska",
        optionD: "Texas",
        correctOption: "optionC"
    },

    {
        question: "What country has the most natural lakes?",
        optionA: "India",
        optionB: "Italy",
        optionC: "Canada",
        optionD: "USA",
        correctOption: "optionC"
    },

    {
        question: "What film won the Academic award for best picture in 1998?",
        optionA: "Titanic",
        optionB: "Armageddon",
        optionC: "Patch Adams",
        optionD: "Rush Hour",
        correctOption: "optionA"
    },

    {
        question: "What famous actor become Governor of California in 2003?",
        optionA: "Arnold Schwarzenegger",
        optionB: "Tyler Maine",
        optionC: "Sylvestor Stallone",
        optionD: "Renes Rivera",
        correctOption: "optionA"
    },

    {
        question: "Kanneganti Brahmanandam holds the record for the most screen credits for a living actor, but how many films has he been in?",
        optionA: "Over 500",
        optionB: "Over 1,000",
        optionC: "Over 1,500",
        optionD: "Over 2,000",
        correctOption: "optionB"
    },

    {
        question: "I am known as the king of Romance...Who am I?",
        optionA: "Dharmendra",
        optionB: "Aamir Khan",
        optionC: "Akshay Kumar",
        optionD: "Shah Rukh Khan",
        correctOption: "optionD"
    },

    {
        question: "What is the first silent Hindi Film?",
        optionA: "Sholay",
        optionB: "Raja Harishchandra",
        optionC: "Black",
        optionD: "Andaa Kanoon",
        correctOption: "optionB"
    },

    {
        question: "Who is known as Thalapathy in South India?",
        optionA: "Ajith Kumar",
        optionB: "Vijay",
        optionC: "Rajnikanth",
        optionD: "Kamal Hassan",
        correctOption: "optionB"
    },

    {
        question: "Two fathers and two sons are in a car, yet there are only three people in the car. How?",
        optionA: " GrandFather, Father, and Son ",
        optionB: " Uncle, Father, GrandFather ",
        optionC: " Son-in-law, Father-in-law, Sister ",
        optionD: " GreatGrand Father, Father, Mother ",
        correctOption: "optionA"
    },

    {
        question: "What is red and smells like blue paint?",
        optionA: "Blue Paint",
        optionB: "Red Paint",
        optionC: "Red-Blue Paint",
        optionD: "Teal Paint",
        correctOption: "optionB"
    },


    {
        question: "What has one head, one foot, and four legs?",
        optionA: "Table Fan",
        optionB: "Chair",
        optionC: "Bed",
        optionD: "Drawing Room",
        correctOption: "optionC"
    },

    {
        question: "Abraham Lincoln, Theodore Roosevelt and Herbert Hoover all belonged to which political party?",
        optionA: "Democrat",
        optionB: "Others",
        optionC: "Republican",
        optionD: "Democrat & Republican",
        correctOption: "optionC"
    },

    {
        question: "What animal is the symbol of the United States democratic Party?",
        optionA: "Lion",
        optionB: "Elephant",
        optionC: "Leopard",
        optionD: "Donkey",
        correctOption: "optionD"
    },

    {
        question: "How many states are needed to ratify an amendment for it to become part of the constitution?",
        optionA: "38 of 50",
        optionB: "30 of 50",
        optionC: "28 of 50",
        optionD: "45 of 50",
        correctOption: "optionA"
    },

    {
        question: "Which US president was known as The Great Communicator?",
        optionA: "Abraham Lincoln",
        optionB: "Ronald Regan",
        optionC: "George Washington",
        optionD: "Thomas Jefferson",
        correctOption: "optionB"
    },

    {
        question: "Bandar Seri Begawan, recently in the news due to Prime Minister of India Narendra Modi's visit, is the capital of which country?",
        optionA: "Thailand",
        optionB: "Indonesia",
        optionC: "Brunei",
        optionD: "Malaysia",
        correctOption: "optionC"
    },

    {
        question: "Recently, PM Narendra Modi inaugurated the 'NACIN', a national-level institute, in which state?",
        optionA: "Uttar Pradesh",
        optionB: "Andra Pradesh",
        optionC: "Kerala",
        optionD: "Karnataka",
        correctOption: "optionB"
    },

    {
        question: "Which infrastructure project, also known as Atal Setu, was inaugurated by Prime Minister Narendra Modi in Mumbai?",
        optionA: " Mumbai Metro Line 3 ",
        optionB: " Bandra-Worli Sea Link ",
        optionC: " Mumbai Coastal Road Project ",
        optionD: " Mumbai Trans Harbour Link (MTHL) ",
        correctOption: "optionD"
    },

    {
        question: "Lord Krishna is a God of compassion, tenderness and?",
        optionA: "Harmony",
        optionB: "Love",
        optionC: "Peace",
        optionD: "War",
        correctOption: "optionB"
    },

    {
        question: "According to the Bhagavad Gita, what is the primary message conveyed by Lord Krishna to Arjuna during the Kurukshetra War?",
        optionA: " The importance of renouncing all worldly possessions ",
        optionB: " The significance of adhering to one's caste duties ",
        optionC: " The path to spiritual enlightenment through selfless action and devotion ",
        optionD: " The necessity of winning the war at all costs ",
        correctOption: "optionC"
    },

    {
        question: "What does the word Krishna in Sanskrit primarily mean?",
        optionA: "Black",
        optionB: "Dark Blue",
        optionC: "All-attractive",
        optionD: "All of the above",
        correctOption: "optionD"
    },

    {
        question: "Who is the goddess of creative energy and power in Hinduism?",
        optionA: "Yogiji",
        optionB: "Yoganada",
        optionC: "Shakti",
        optionD: "Yoga",
        correctOption: "optionC"
    },

    {
        question: "According to the Shaivism sect, the higher form of Shiva is known as?",
        optionA: "Formless and Limitless",
        optionB: "Imagery",
        optionC: "Transcendent",
        optionD: "None of the above",
        correctOption: "optionD"
    }

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 9) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}
