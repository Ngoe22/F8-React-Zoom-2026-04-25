import styles from "./styles.module.scss";
import {Button } from "@mui/material";


interface QuestionBtnProps {
    currentSelectedIndex :number
    min: number;
    max: number;
    step: number;
    updateIndex : (e:number) => void;
}
function QuestionBtn( { currentSelectedIndex ,min , max , step  , updateIndex } :QuestionBtnProps ) {

    const onNext = () => {
        if (currentSelectedIndex + step  <= max) updateIndex(step)
    }

    const onPrev = () => {
        if (currentSelectedIndex - step  >= min) updateIndex(step*-1)
    }

    return (
        <div className={styles.questionBtn} >
            <Button
                onClick={onPrev}
                disabled={currentSelectedIndex === min }
                >
                Câu trước
            </Button>
            <Button
                onClick={onNext}
                disabled={currentSelectedIndex === max }
                >
                Câu tiếp
            </Button>
        </div>
    )
}

export default QuestionBtn;