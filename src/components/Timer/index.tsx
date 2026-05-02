import {useState ,useEffect} from 'react';

// =========================================

interface TimerProps {
    className?: string;
    seconds: number;
    callback : ()=>void
}
function Timer( { className , seconds ,callback  } :TimerProps ) {


    const [ second , setSecond ] = useState(seconds * 1000);

    useEffect(() => {
        if ( seconds > 0) {
            const timer = setTimeout(() => {
                setSecond(prev => prev - 1000);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [second, seconds]);

    useEffect(() => {
        if (second === 0 && seconds > 0) callback();
    }, [second, callback, seconds]);


    if (seconds <= 0|| !second) return <p className={className} >Kết thúc</p>

    return <span className={className} >{secondFormat(second)}</span>
}

export default Timer;

// ========================================= Functions =========================================

const timeBoard = {
    // week : 31536000000 ,
    // day : 86400000 ,
    hour : 3600000 ,
    minute : 60000 ,
    second : 1000 ,
}
function secondFormat( second : number ) {
    const timeArray = []
    for ( const [, value  ] of Object.entries( timeBoard )  ) {
        const t =  Math.floor(second / value)  ;
        timeArray.push( String( t < 10 ? '0' + t : t )  ) ;
        second = second % value
    }
    return timeArray.join(":")
}