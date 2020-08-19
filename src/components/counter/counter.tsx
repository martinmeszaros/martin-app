import React from "react";

interface ICounterState {
    timeLeft: string;
}

export class Counter extends React.Component<{}, ICounterState>{

    private yearOld: number=0;

    constructor(props:any){
        super(props);
        this.state={
            timeLeft:"",
        }
    }

    CalculateTime(){
    const nowDate= new Date();
    const currentYear = nowDate.getFullYear();
    const birthDay = new Date();
    const birthYear = 1998;
    let actualBirthDay;
    const dayInMillis = 1000*60*60*24;
    const hourInMillis = dayInMillis/24;
    const minuteInMillis = hourInMillis/60;
    const secondInMillis = minuteInMillis/60;
    
    let timeRemained;
    let timeDifference;
    
    birthDay.setMonth(7);
    birthDay.setDate(20);
    birthDay.setHours(0);
    birthDay.setMinutes(0);
    birthDay.setSeconds(0);
    birthDay.setMilliseconds(0);
    actualBirthDay  = new Date(birthDay.getTime());
    actualBirthDay.setFullYear(birthYear);
    
    if(nowDate>birthDay){
        birthDay.setFullYear(birthDay.getFullYear()+1);
    }
    
    this.yearOld=(birthDay.getTime()-actualBirthDay.getTime())/(1000*60*60*24*365)-(birthDay.getTime()-actualBirthDay.getTime())/(1000*60*60*24*365)%1;
    
    timeDifference = birthDay.getTime()-nowDate.getTime();
    timeRemained=timeDifference%dayInMillis;
    const days = (timeDifference-timeRemained)/dayInMillis;
    
    timeDifference = timeRemained;
    timeRemained = timeRemained%hourInMillis;
    const hours = (timeDifference-timeRemained)/hourInMillis;
    
    timeDifference = timeRemained;
    timeRemained = timeRemained%minuteInMillis;
    const minutes = (timeDifference-timeRemained)/minuteInMillis;
    
    timeDifference = timeRemained;
    timeRemained = timeRemained%secondInMillis;
    const seconds = (timeDifference-timeRemained)/secondInMillis;
    
    this.setState({timeLeft:days.toString() + " nap " + hours.toString()+" óra " + minutes.toString() + " perc " + seconds.toString() + " másodperc"});
}

    render(){
        setInterval(()=>{
            this.CalculateTime();
        },1000)
        return(
            <div>
                <div>
                    A  + {this.yearOld.toString()} + . szülinapig hátralevő idő:  + 
                </div>
                <div>
                {this.state.timeLeft}
                </div>
            </div>
            
        )
    }
}