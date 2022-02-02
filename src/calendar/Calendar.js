import calendar from "../assets/images/calendar/calendar.png";
import "./Calendar.css";

export function Calendar() {
    return (
        <div className="Calendar App-section" id="Calendar">
            <h1>
                2022년 3월 13일<br />
                일요일 오후 2시
            </h1>
            <img className="Calendar-image" src={calendar} />
        </div>
    );
}

