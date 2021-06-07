import React,{useState, useEffect} from 'react'
import GameComponent from '../GameComponent';
import Response from '../Response'
import styles from './Instructions.module.css'
import data from "../../mock/condition1.json";

export default function Instructions() {
    const [instruction, setInstruction] = useState(false)
    const [currentQuestion, setCurrentQuestion] =useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [score, setScore] = useState(0)
    const [gameEnded, setGameEnded] = useState(false)
    const [response, setResponse] = useState(false)
    const { results=[] } = data;
    useEffect(() => {
        setCurrentQuestion(results)

    },[])

       const handleAnswer = (answer) => {
           const newIndex = currentIndex + 1
           console.log(currentQuestion[currentIndex].correct_answer[0], "anw");
           console.log(answer, "answer");
           setCurrentIndex(newIndex);
           if(answer === currentQuestion[currentIndex].correct_answer[0]){
            setScore(score + 1);
            setResponse(true)
           }
           if(newIndex >= currentQuestion.length){
               setGameEnded(true)
           }
       };
      const onClick = () => {
          setInstruction(true);
      };
      console.log(
          currentQuestion[currentIndex],
          "currentQuestion[currentIndex]",
      );
      
    return (
        <>
            {instruction ? (
                    <GameComponent
                        data={currentQuestion[currentIndex]}
                        handleAnswer={handleAnswer}
                        response={response}
                    />
            ) : (
                <div className={styles._content}>
                    <div className={styles._text}>
                        <h1 className="text-purple-800 p-10">
                            Ejemplo de instrucción
                        </h1>
                        <p>{results[0].instructions}</p>
                    </div>
                    <div>
                        <button onClick={onClick}>Siguiente</button>
                    </div>
                </div>
            )}
        </>
    );
}
