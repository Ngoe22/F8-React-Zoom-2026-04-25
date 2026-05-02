import styles from "./styles.module.scss";
import type  { dataTypes}  from "../../utils/Types";

interface QuestionListProps {
    data : dataTypes[] ,
    currentAnswered: { [key: string]: number } ,
    currentSelectedIndex : number
}

function QuestionList( { data ,  currentAnswered , currentSelectedIndex} : QuestionListProps   ) {

    return (
        <>
            <div className={styles.questionList} >
                {data.map( (item:dataTypes ,index:number)=> {
                    const classNames = [ styles.questionItem ] ;
                    if ( currentSelectedIndex === index ) classNames.push( styles.selected ) ;
                    if (  currentAnswered[item.id]  != null  )classNames.push( styles.answered ) ;
                    //
                    return <div className={classNames.join(" ")} key={ item.id }>{index+1}</div>
                } )}
            </div>
            <div className={styles.status}  >
                <p className={styles.statusItem} > <span className={styles.questionItem} /> chưa trả lời</p>
                <p className={styles.statusItem} > <span className={`${styles.questionItem} ${styles.selected}`} /> đang trả lời</p>
                <p className={styles.statusItem} > <span className={`${styles.questionItem} ${styles.answered}`} /> đã trả lời</p>
            </div>
        </>
    )
}

export default QuestionList;