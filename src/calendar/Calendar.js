import calendar from "../assets/images/calendar/calendar.png";
import "./Calendar.css";

export function Calendar() {
    return (
        <div className="Calendar" id="Calendar">
            <h1>
                2022년 3월 13일<br />
                일요일 오후 2시
            </h1>
            <img className="Calendar-image" src={calendar} />
            <button className='Calendar-save-button'>캘린더 저장하기</button>
        </div>
    );
}

