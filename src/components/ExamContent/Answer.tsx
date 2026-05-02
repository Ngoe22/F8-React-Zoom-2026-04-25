import styles from "./styles.module.scss";
import {FormControlLabel, Radio} from "@mui/material";
import {memo } from "react";

interface AnswerProps {
    index: number;
    text: string;
    isSelected: boolean;
}
function Answer( { index ,text , isSelected} : AnswerProps )  {
    console.log("each answer render")

    return (
        <FormControlLabel
            control={<Radio />}
            key={index}
            value={index}
            label={text}
            className=
                {`${styles.answer} ${ isSelected ? styles.selected : ""}`}
        />
    )
}

export default memo(Answer);