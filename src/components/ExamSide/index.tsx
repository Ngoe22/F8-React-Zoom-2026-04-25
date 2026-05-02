import styles from "./styles.module.scss"
import QuestionBtn from "./QuestionBtn.tsx";
import QuestionList from "./QuestionList.tsx";
import type  { dataTypes}  from "../../utils/Types";



interface ExamSideProps{
    data : dataTypes[] ,
    currentAnswered: { [key: string]: number } ,
    currentSelectedIndex :number
    updateIndex : (e:number) => void;
}

function ExamSide( {data , currentAnswered,currentSelectedIndex,updateIndex} :ExamSideProps  ) {


    return (
        <div className={styles.examSide}>
            <div className={styles.examSideContent} >
                <QuestionBtn
                    currentSelectedIndex={ currentSelectedIndex}
                    min={0}
                    max={data.length -1}
                    step = {1}
                    updateIndex = {updateIndex}
                />
                <hr/>
                <QuestionList
                    data = {data}
                    currentAnswered = {currentAnswered}
                    currentSelectedIndex = {currentSelectedIndex}
                />
            </div>
        </div>
    )
}

export default ExamSide;