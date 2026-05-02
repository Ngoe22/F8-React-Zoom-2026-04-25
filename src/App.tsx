import ExamContent  from "./components/ExamContent";
import ExamHeader  from "./components/ExamHeader";
import ExamSide  from "./components/ExamSide";
import Grid from '@mui/material/Grid';
import {useState} from "react";
import './App.css'
import type {dataTypes} from "./utils/Types"
import { DialogTitle ,Dialog ,Button } from "@mui/material";

const data :dataTypes[] = [
    {
        "id": "GPLX_001",
        "question": "Người lái xe phải làm gì khi điều khiển xe ra khỏi đường cao tốc?",
        "answers": [
            "Lập tức chuyển sang làn đường sát mép đường bên phải để ra khỏi đường cao tốc.",
            "Quan sát phía trước để tìm biển báo chỉ dẫn lối ra, kiểm tra tình trạng giao thông phía sau và bên phải, nếu đảm bảo an toàn thì phát tín hiệu và điều khiển xe chuyển dần sang làn đường giảm tốc.",
            "Phát tín hiệu và chuyển ngay sang làn đường giảm tốc bất kể có xe phía sau hay không.",
            "Tăng tốc độ để nhanh chóng thoát khỏi đường cao tốc."
        ],
        "correct_index": 1
    },
    {
        "id": "GPLX_002",
        "question": "Khái niệm 'Đường ưu tiên' được hiểu như thế nào là đúng?",
        "answers": [
            "Là đường mà trên đó phương tiện giao thông được các phương tiện đến từ hướng khác nhường đường khi qua nơi đường giao nhau, được cắm biển báo hiệu đường ưu tiên.",
            "Là đường rộng hơn đường giao cắt.",
            "Là đường có nhiều phương tiện lưu thông hơn.",
            "Là đường chỉ dành cho xe ô tô."
        ],
        "correct_index": 0
    },
    {
        "id": "GPLX_003",
        "question": "Người lái xe không được quay đầu xe ở những khu vực nào dưới đây?",
        "answers": [
            "Ở nơi có đường giao nhau.",
            "Trên cầu, đầu cầu, gầm cầu vượt, trong hầm đường bộ, đường cao tốc.",
            "Ở nơi có biển báo cho phép quay đầu xe.",
            "Trên các đoạn đường quốc lộ rộng."
        ],
        "correct_index": 1
    },
    {
        "id": "GPLX_004",
        "question": "Tại nơi đường giao nhau, khi đèn điều khiển giao thông có tín hiệu vàng, người lái xe phải thực hiện như thế nào?",
        "answers": [
            "Tăng tốc độ để nhanh chóng đi qua nút giao thông.",
            "Tiếp tục đi nhưng phải bấm còi liên tục.",
            "Phải dừng lại trước vạch dừng; trường hợp đã đi quá vạch dừng thì được đi tiếp.",
            "Chú ý quan sát và đi tiếp nếu thấy không có xe nào khác."
        ],
        "correct_index": 2
    },
    {
        "id": "GPLX_005",
        "question": "Biển báo hình tròn, nền xanh, có hình vẽ màu trắng là loại biển gì?",
        "answers": [
            "Biển báo cấm.",
            "Biển báo hiệu lệnh phải thi hành.",
            "Biển báo nguy hiểm.",
            "Biển chỉ dẫn."
        ],
        "correct_index": 1
    },
    {
        "id": "GPLX_006",
        "question": "Người điều khiển xe mô tô hai bánh, xe gắn máy không được thực hiện các hành vi nào dưới đây?",
        "answers": [
            "Chở người bệnh đi cấp cứu; trẻ em dưới 14 tuổi.",
            "Đội mũ bảo hiểm và cài quai đúng quy cách.",
            "Buông cả hai tay; sử dụng xe để kéo, đẩy xe khác, vật khác; sử dụng chân chống của xe quệt xuống đường khi xe đang chạy.",
            "Chở một người ngồi sau."
        ],
        "correct_index": 2
    },
    {
        "id": "GPLX_007",
        "question": "Khi muốn vượt xe phía trước, người lái xe phải có tín hiệu như thế nào?",
        "answers": [
            "Phải báo hiệu bằng đèn hoặc còi; trong đô thị và khu đông dân cư từ 22 giờ đến 5 giờ sáng chỉ được báo hiệu bằng đèn.",
            "Chỉ được báo hiệu bằng còi.",
            "Chỉ được báo hiệu bằng đèn.",
            "Báo hiệu bằng miệng."
        ],
        "correct_index": 0
    },
    {
        "id": "GPLX_008",
        "question": "Tác dụng của mũ bảo hiểm đối với người đi xe mô tô hai bánh khi xảy ra tai nạn giao thông là gì?",
        "answers": [
            "Để làm đẹp.",
            "Để tránh mưa nắng.",
            "Để các loại xe khác dễ quan sát.",
            "Để giảm thiểu chấn thương vùng đầu."
        ],
        "correct_index": 3
    },
    {
        "id": "GPLX_009",
        "question": "Khi gặp biển báo 'Cấm đi ngược chiều', người lái xe phải xử lý như thế nào?",
        "answers": [
            "Được phép đi vào nếu xe đang đi làm nhiệm vụ khẩn cấp.",
            "Không được đi vào đoạn đường đó theo chiều đặt biển, trừ các xe ưu tiên đang đi làm nhiệm vụ theo quy định.",
            "Được phép đi vào nếu là xe mô tô hai bánh.",
            "Chỉ cấm ô tô, xe máy được phép đi vào."
        ],
        "correct_index": 1
    },
    {
        "id": "GPLX_010",
        "question": "Tại nơi đường bộ giao nhau cùng mức với đường sắt, quyền ưu tiên thuộc về phương tiện nào?",
        "answers": [
            "Xe cứu hỏa.",
            "Xe cứu thương.",
            "Phương tiện giao thông đường sắt.",
            "Ô tô con."
        ],
        "correct_index": 2
    }
]

function App() {

    const [currentSelectedIndex , setCurrentSelectedIndex] = useState<number>(0);
    const [currentAnswered, setCurrentAnswered] = useState<{ [key: string]: number }>({});
    const [coolDown, setCoolDown] = useState<number>(30); // -1 === close dialog

    const currentId = data[currentSelectedIndex].id
    const examCheck = coolDown === 0 ? (() => {
        let o :number = 0 ;
        let d: number = 0 ;
        data.forEach( (item)=> {
            if ( currentAnswered[item.id] != null ) {
                d = d+1 ;
                if (  currentAnswered[item.id] ===  item.correct_index ) o = o+1 ;
            }
        } )
        return (
            <div>
                <p>Tổng câu hỏi : {data.length}</p>
                <p>Đã làm : {d}</p>
                <p>Chính xác : {o}</p>
            </div>
        )

    })() :null

    return (
    <>
        <Grid container spacing={0}>
            <Grid size={12}>
                <ExamHeader
                    seconds = {coolDown}
                    callback = {()=>{setCoolDown(0)}}
                />
            </Grid>
            <Grid size={8}>
                <ExamContent
                    answerList = { data[currentSelectedIndex].answers }
                    selectedIndex = { currentAnswered[currentId] }
                    question = { data[currentSelectedIndex].question }
                    onCheck = { (e:number)=> { setCurrentAnswered( {...currentAnswered , [currentId] : e}  ) } }
                    disable={ coolDown <= 0 }
                />
            </Grid>
            <Grid size={4}>
                <ExamSide
                    data = {data}
                    currentAnswered = {currentAnswered}
                    currentSelectedIndex = {currentSelectedIndex}
                    updateIndex =  { (step :number) => { setCurrentSelectedIndex( currentSelectedIndex + step )  } }
                />
            </Grid>
        </Grid>
        <Dialog
            open={coolDown === 0}
            disableRestoreFocus
        >
            <DialogTitle
                style={ { display:"flex" ,flexDirection:"column" , gap : "20px" } }
            >
                {examCheck}
                <Button
                    onClick={()=> setCoolDown(-1)}
                    style={ {marginLeft: "auto" ,backgroundColor: "tomato" ,color:"white" } }
                >
                    Đóng
                </Button>
            </DialogTitle>
        </Dialog>
    </>
    )
}

export default App
