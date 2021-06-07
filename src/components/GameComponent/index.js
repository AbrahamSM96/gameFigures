import React from 'react'
import styles from './Game.module.css'
import Square from '../../svg/Square'
import Circle from "../../svg/Circle";
import Response from "../Response";
import Triangle from "../../svg/Triangle";
export default function GameComponent({ data = {}, handleAnswer,response }) {
    const { correct_answer=[], incorrect_answers=[] } = data;
    console.log(data)
    function onlyCheckBox(e) {
        const myCheckbox = document.getElementsByName("figure");
        Array.prototype.forEach.call(myCheckbox, function (element) {
            element.checked = false;
        });
        e.target.checked = true;
        console.log(e.target);
        //  document.getElementById(id).checked = true;
    }

    const shuffledAnswers = [correct_answer[0], ...incorrect_answers].sort(
        () => Math.random() - 0.5,
    );
    console.log(correct_answer, "shuffledAnswers");
    return (
        <>
            {response ? (
                <Response response={response} />
            ) : (
                <Response response={response} />
            )}
            <div className={styles._content}>
                <div className={styles._question}>
                    <div>
                        <Triangle width={80} fill={"blue"} />
                    </div>
                    <div>
                        <Circle width={80} fill={"yellow"} />
                    </div>
                </div>
                <div className={styles._stimulus}>
                    <div>
                        <Square width={80} fill={"blue"} />
                    </div>
                </div>
                <div className={styles._answer}>
                    {/* <div>
                        <input
                            type="checkbox"
                            name="figure"
                            id="Check1"
                            value={1}
                            onChange={(e) => {
                                onlyCheckBox(e);
                            }}
                        />
                        <Square width={80} fill={"red"} />
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            name="figure"
                            id="Check2"
                            value={2}
                            onChange={(e) => onlyCheckBox(e)}
                        />
                        <Circle width={80} fill={"blue"} />
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            name="figure"
                            id="Check3"
                            value={3}
                            onChange={() => onlyCheckBox()}
                        />
                        <Pentagon width={80} fill={"green"} />
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            name="figure"
                            id="Check4"
                            value={4}
                            onChange={(e) => onlyCheckBox(e)}
                        />
                        <Square width={80} fill={"blue"} />
                    </div> */}
                    {shuffledAnswers.map((answer) => (
                        <div key={answer.id} className={styles._content_figure}>
                            {/* <input
                                type="checkbox"
                                name="figure"
                                id={answer.id}
                                value={answer.id}
                                onChange={(e) => onlyCheckBox(e)}
                            /> */}
                            <figure
                                className={styles._figure}
                                onClick={() => handleAnswer(answer)}
                            >
                                <img
                                    src={answer.image}
                                    alt={answer.name}
                                    style={{ width: "100%", height: "auto" }}
                                />
                            </figure>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
