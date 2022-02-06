import img_intro from "../assets/images/intro/intro.png";
import baeminAvatar from "../assets/images/intro/baemin-avatar.png";
import "./Intro.css"

export default function Intro() {
    return (
        <div className="Intro App-section" id="Intro">
            <div className="Intro-photo-container">
                <img className="Intro-photo" src={img_intro}></img>
            </div>
            <div className="Intro-desc">
                <h1>동료에서 동반자로</h1>
                <div className="Intro-desc-content App-text">
                    기획자와 개발자로 만난 동료가<br />
                    이제 인생의 동반자로<br />
                    새로운 시작을 하고자 합니다.<br />
                    <br />
                    저희가 잘 성장하고 새 출발 할 수 있도록 도와주신<br />
                    모든 분께 감사드리며<br />
                    저희의 결혼 소식 전해드립니다.<br />
                    <br />
                    행복하게 잘 살겠습니다.
                </div>
                <div className="Intro-desc-content App-text">
                    김동언, 김미정의 장남 <b>민국</b><br />
                    이종섭, 박경옥의 차녀 <b>현주</b>
                </div>
            </div>
            <img className="Intro-baemin-avatar" src={baeminAvatar} />
        </div>
    );
}