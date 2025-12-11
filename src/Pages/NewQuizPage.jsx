import { useEffect, useState } from "react"
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, Clock, Trophy } from 'lucide-react';
import { Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';


export const NewQuizPage = () => {

  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [showTimeWarning, setShowTimeWarning] = useState(false);

  useEffect(() => {
    if (count >= questions.length || answered) return;
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 5) {
          setShowTimeWarning(true);
        }
        if (prev <= 1) {
          setAnswered(true);
          setTimeout(() => {
            const newQuestions = [...questions];
            newQuestions.splice(count, 1);
            setQuestions(newQuestions);
            setCount(count + 1);
          }, 1500);
          return 30;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [count, questions, answered]);

  useEffect(() => {
    // Reset timer when moving to next question
    setTimeLeft(30);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setAnswered(false);
    setShowTimeWarning(false);
  }, [count]);

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
    if (answered) return;
    
    const isCorrect = answer === question.correctAnswer;
    
    setSelectedAnswer(answer);
    setShowFeedback(true);
    setAnswered(true);
    
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    setTimeout(() => {
      const newQuestions = [...questions];
      newQuestions.splice(index, 1);
      setQuestions(newQuestions);
      setCount(count + 1);
      
      gsap.fromTo(".quiz", {
        opacity: 0,
        scale: 0.5
      }, {
        opacity: 1,
        scale: 1,
        transform: "translate(0%, 0%)",
        duration: 0.7,
      });
    }, 2500);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pb-32">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header Stats */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
        >
          <div className="bg-white rounded-lg shadow-lg p-6 flex items-center gap-4">
            <Trophy className="text-yellow-500" size={32} />
            <div>
              <p className="text-gray-600 text-sm">Score</p>
              <p className="text-3xl font-bold text-gray-900">{score}</p>
            </div>
          </div>
          
          <div className={`bg-white rounded-lg shadow-lg p-6 flex items-center gap-4 transition-all ${showTimeWarning ? 'ring-2 ring-red-500 bg-red-50' : ''}`}>
            <Clock className={showTimeWarning ? "text-red-500 animate-pulse" : "text-blue-500"} size={32} />
            <div>
              <p className="text-gray-600 text-sm">Time Left</p>
              <motion.p 
                key={timeLeft}
                animate={{ scale: [1.2, 1] }}
                className={`text-3xl font-bold ${showTimeWarning ? 'text-red-600' : 'text-gray-900'}`}
              >
                {timeLeft}s
              </motion.p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <p className="text-gray-600 text-sm mb-2">Progress</p>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <motion.div
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${((count) / questions.length) * 100 || 0}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <p className="text-sm text-gray-600 mt-2">{count}/{questions.length}</p>
          </div>
        </motion.div>

        {/* Quiz Container */}
        <motion.div className="quiz max-w-2xl mx-auto">
          {count < questions.length ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-gradient-to-r border-blue-200"
            >
              {/* Question */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white font-bold">
                    {count + 1}
                  </span>
                  <p className="text-gray-600 text-sm">Question {count + 1} of {questions.length}</p>
                </div>
                <p className="text-2xl font-bold text-gray-900 mb-8">
                  {questions[count]?.que}
                </p>
              </motion.div>

              {/* Answers */}
              <motion.div className="space-y-4">
                {questions[count]?.answer.map((answer, answerIndex) => {
                  const isCorrect = answer === questions[count].correctAnswer;
                  const isSelected = answer === selectedAnswer;
                  
                  let bgColor = 'bg-gradient-to-r from-gray-50 to-gray-100 border-2 border-gray-300 hover:from-blue-50 hover:to-blue-100 hover:border-blue-400';
                  
                  if (showFeedback && isSelected) {
                    bgColor = isCorrect ? 'bg-gradient-to-r from-green-100 to-green-200 border-2 border-green-500' : 'bg-gradient-to-r from-red-100 to-red-200 border-2 border-red-500';
                  } else if (showFeedback && isCorrect && !isSelected) {
                    bgColor = 'bg-gradient-to-r from-green-100 to-green-200 border-2 border-green-500';
                  }

                  return (
                    <motion.button
                      key={answerIndex}
                      whileHover={!answered ? { scale: 1.02, x: 8 } : {}}
                      whileTap={!answered ? { scale: 0.98 } : {}}
                      onClick={() => !answered && handleAnswer(count, answer, questions[count])}
                      disabled={answered}
                      className={`w-full px-8 py-6 text-left rounded-xl font-bold text-lg transition-all flex items-center justify-between ${bgColor} ${answered ? 'cursor-not-allowed' : 'cursor-pointer'} shadow-md hover:shadow-lg`}
                    >
                      <span className="text-gray-900 leading-relaxed">{answer}</span>
                      {showFeedback && isSelected && (
                        isCorrect ? (
                          <CheckCircle className="text-green-600" size={24} />
                        ) : (
                          <XCircle className="text-red-600" size={24} />
                        )
                      )}
                      {showFeedback && isCorrect && !isSelected && (
                        <CheckCircle className="text-green-600" size={24} />
                      )}
                    </motion.button>
                  );
                })}
              </motion.div>

              {/* Feedback Message */}
              {showFeedback && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-8 p-6 rounded-lg text-center font-bold text-lg ${
                    selectedAnswer === questions[count].correctAnswer
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {selectedAnswer === questions[count].correctAnswer
                    ? '✓ Correct Answer! Moving to next question...'
                    : `✗ Wrong! Correct answer: ${questions[count].correctAnswer}`}
                </motion.div>
              )}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl shadow-2xl p-12 text-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2 }}
                className="inline-block mb-8"
              >
                <Trophy className="text-yellow-500" size={80} />
              </motion.div>
              
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Quiz Complete!</h2>
              
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-8 p-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl"
              >
                <p className="text-6xl font-bold text-white mb-2">
                  {score}/{questions.length}
                </p>
                <p className="text-white text-xl">
                  Score: {((score / questions.length) * 100).toFixed(1)}%
                </p>
              </motion.div>

              {/* Results Chart */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-gray-50 p-4 rounded-lg"
                >
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={[
                          { name: 'Correct', value: score, fill: '#10b981' },
                          { name: 'Incorrect', value: questions.length - score, fill: '#ef4444' }
                        ]}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        <Cell fill="#10b981" />
                        <Cell fill="#ef4444" />
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-gray-50 p-4 rounded-lg flex flex-col justify-center items-center gap-4"
                >
                  <div className="text-center">
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle className="text-green-500" size={28} />
                      <p className="text-gray-600">Correct Answers</p>
                    </div>
                    <p className="text-3xl font-bold text-green-600">{score}</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center gap-3 mb-2">
                      <XCircle className="text-red-500" size={28} />
                      <p className="text-gray-600">Incorrect Answers</p>
                    </div>
                    <p className="text-3xl font-bold text-red-600">{questions.length - score}</p>
                  </div>
                </motion.div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.reload()}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-all"
              >
                Retake Quiz
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );

}