import { useEffect, useState, useRef } from "react"
import gsap from 'gsap';


export const NewQuizPage = () => {

  const ref = useRef();
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const data = [
          {
            "que": "ReactJS is developed by _____?",
            "answer": ["Google Engineers", "Facebook Engineers"],
            "correctAnswer": "Facebook Engineers"
          },
          {
            "que": "ReactJS is an MVC based framework?",
            "answer": ["True", "False"],
            "correctAnswer": "False"
          },
          {
            "que": "Which of the following are the advantages of React.js?",
            "answer": [
              "React.js can increase the application's performance with Virtual DOM.",
              "React.js is easy to integrate with other frameworks such as Angular, BackboneJS since it is only a view library.",
              "React.js can render both on client and server side.",
              "All of the above"
            ],
            "correctAnswer": "All of the above"
          },
          {
            "que": "What of the following is used in React.js to increase performance?",
            "answer": [
              "Original DOM",
              "Virtual DOM",
              " Both A and B",
              "None of the above."
            ],
            "correctAnswer": "Virtual DOM"
          },
          {
            "que": "Which of the following acts as the input of a class-based component?",
            "answer": ["Class", "Factory", "Render", "Props"],
            "correctAnswer": "Props"
          },
          {
            "que": "What is the default port where webpack-server runs?",
            "answer": ["3000", "8080", "3030", "6060"],
            "correctAnswer": "8080"
          },
          {
            "que": "How many numbers of elements a valid react component can return?",
            "answer": ["1", "2", "4", "5"],
            "correctAnswer": "1"
          },
          {
            "que": "What is the declarative way to render a dynamic list of components based on values in an array?",
            "answer": [
              "Using the reduce array method",
              "Using the <Each /> component",
              "Using the Array.map() method",
              "With a for/while loop"
            ],
            "correctAnswer": "Using the Array.map() method"
          },
          {
            "que": " What is a state in React?",
            "answer": [
              "A permanent storage.",
              "Internal storage of the component.",
              "External storage of the component.",
              "None of the above."
            ],
            "correctAnswer": "Internal storage of the component."
          },
          {
            "que": "What are the two ways to handle data in React?",
            "answer": [
              "State & Props",
              "Services & Components",
              "State & Services",
              "State & Component"
            ],
            "correctAnswer": "State & Props"
          },
          {
            "que": "Which of the following option is correct in the case of the Babel?",
            "answer": [
              "Babel is a Compiler.",
              "Babel is a Transpilar.",
              "None of the above.",
              "Both A and B are correct."
            ],
            "correctAnswer": "Both A and B are correct."
          },
          {
            "que": "What will happen if you render an input element with disabled = {false}?",
            "answer": [
              "It will be rendered as disabled",
              "It will not be rendered at all",
              "It will be rendered as enabled",
              "You cannot set it false."
            ],
            "correctAnswer": "It will be rendered as enabled"
          },
          {
            "que": " React.js is a free and open-source front-end....?",
            "answer": [
              "JavaScript library",
              "Bootstrap library",
              "CSS library",
              "None of the Above"
            ],
            "correctAnswer": "JavaScript library"
          },
          {
            "que": "Which of the following acts as the input of a class-based component?",
            "answer": ["Class", "Factory", "Render", "Props"],
            "correctAnswer": "Props"
          },
          {
            "que": "Which of the following is the correct data flow sequence of flux concept?",
            "answer": [
              "Dispatcher->Action->Store->View",
              "Action->Dispatcher->View->Store",
              "Action->Dispatcher->Store->View",
              "Action->Store->Dispatcher->View"
            ],
            "correctAnswer": "Action->Dispatcher->Store->View"
          },
          {
            "que": " React was originally created by...?",
            "answer": [
              "Jordan Walke",
              "Rasmus Lerdorf",
              "Miško Hevery",
              "None of the above"
            ],
            "correctAnswer": "Jordan Walke"
          },
          {
            "que": "What is the smallest building block of ReactJS?",
            "answer": ["props", "elements", "components", "None of the Above"],
            "correctAnswer": "components"
          }
        ]
    setQuestions(data)
  }, []);

  useEffect(() => {
    // const el = ref.current;
    gsap.fromTo(".score", { scale: 0 }, {
        scale: 1.4, duration: 1,
    })

    gsap.fromTo(".quiz",{opacity: 0, scale: 0}, {
      opacity: 1,
      scale: 1,
      transform: "translate(0%, 0%)",
      duration: 1,
    })
    
}, [])

  const handleAnswer = (index, answer, question) => {
    // Check if the selected answer is correct:
    const isCorrect = answer === question.correctAnswer;
    
    // Update state or perform other actions based on the result:
    // - You might want to track scores, display feedback, or navigate to the next question
  
    // Example implementation for demonstration:
    setScore((prevScore) => prevScore + (isCorrect ? 1 : 0)); // Update score (assuming you have a score state)
    console.log(isCorrect ? 'Correct!' : 'Incorrect.'); // Display feedback
  
    // Show other questions from db:
    const newQuestions = [...questions]; // Create a copy of the questions array
    newQuestions.splice(index, 1); // Remove the answered question
    setQuestions(newQuestions); // Update the questions state
    setCount(count+1)
    gsap.fromTo(".quiz",{opacity: 0, scale: 0.5}, {
      opacity: 1,
      scale: 1,
      transform: "translate(0%, 0%)",
      duration: 0.7,
    })
  };
  
  return (
    <div className="container mx-auto px-4 overflow-hidden pb-32">
      
    <div ref={ref} className="score text-2xl font-bold mb-4 text-center mt-4">Score: {score}</div>

      <div className="quiz mt-20 flex flex-wrap items-center justify-center">
        {count < questions.length ? (
          <div className="p-5 md:p-10 border border-black w-full md:w-1/2 ">
            <p className=" mb-4 text-center text-xl">
              Question {count + 1}: {questions[count].que}
            </p>

            <div className="flex flex-wrap items-center justify-center mx-4">
              {questions[count].answer.map((answer, answerIndex) => (
                <button
                  key={answerIndex}
                  type="button"
                  className={`w-96 px-4 mt-2 py-2 text-left bg-gray-200 hover:bg-gray-300 rounded-md mr-4 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  onClick={() => handleAnswer(count, answer, questions[count])}
                >
                  {answer}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="result p-5 md:p-10 border border-black w-full md:w-1/2">
            <p className="text-3xl text-center font-bold leading-none mb-8">You scored <br/>{score}/{questions.length}!</p>
            
          </div>
        )
      }
      </div>
    </div>
  );

}