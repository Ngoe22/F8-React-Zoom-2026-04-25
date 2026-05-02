import styles from "./styles.module.scss"
import {RadioGroup} from "@mui/material";
import Answer from "./Answer";


interface ExamContentProps {
    question: string;
    answerList :string[] ,
    selectedIndex :number | undefined
    onCheck : (e:number) => void
    disable ?: boolean
}

function ExamContent( { answerList ,selectedIndex , question ,onCheck ,disable}:ExamContentProps )  {


    return (
        <div className={styles.examContent}>
            <div className={`${styles.card} ${ disable ? styles.disable : null}  `} >
                <p className={styles.question} >
                    {question}
                </p>
                <RadioGroup
                    value={selectedIndex ?? ""}
                    onChange={(e) => {
                        onCheck(Number(e.target.value)) ;
                    }}
                    className={styles.answers}
                >
                    {answerList.map ( (ans , index)=>
                        <Answer
                            key = {index}
                            index={index}
                            text={ans}
                            isSelected = {selectedIndex ===  index}
                        />)
                    }
                </RadioGroup>
            </div>
        </div>
    )
}

export default ExamContent;