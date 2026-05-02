import Timer from "../Timer"
import {Button} from '@mui/material';
import styles from "./styles.module.scss"

interface ExamHeaderProps{
    seconds : number ,
    callback : () => void ,
}

function ExamHeader( {seconds , callback} :ExamHeaderProps ) {

    return (
        <div className={styles.header} >
            <div className={styles.left}>
                <p className={styles.title} >Ôn thi GPLX</p>
                <p className={styles.desc} > Đề thi ngẫu nhiên số 1</p>
            </div>
            <div className={styles.right}>
                <Timer
                    className = {styles.timer}
                    seconds={seconds}
                    callback = {callback}
                />
                <Button
                    className={styles.submit}
                    disabled={seconds <= 0}
                    onClick = { callback }
                >
                    Nộp bài
                </Button>
            </div>
        </div>
    )
}

export default ExamHeader;