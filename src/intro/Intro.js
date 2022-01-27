import gook from "../assets/images/intro/gook.png";
import joo from "../assets/images/intro/joo.png";
import baeminAvatar from "../assets/images/intro/baemin-avatar.png";
import "./Intro.css"
import IntroPhoto from "./IntroPhoto";

export default function Intro() {
    return (
        <div className="Intro" id="Intro">
            <div className="Intro-photo-container">
                <img className="Intro-photo" src={gook}></img>
                <img className="Intro-photo" src={joo}></img>
                {/* <IntroPhoto type="groom" name="MINGOOK" photo={gook} /> */}
                {/* <IntroPhoto type="bride" name="HYUNJOO" photo={joo} /> */}
            </div>
            <div className="Intro-desc">
                <div className="Intro-desc-title">동료에서 동반자로</div>
                <div className="Intro-desc-content">
                    기획자와 개발자로 만난 동료가<br />
                    이제는 인생의 동반자로<br />
                    새로운 시작을 하고자 합니다.<br />
                    <br />
                    저희 두 사람의 앞날을 축복해 주시면<br />
                    감사한 마음 간직하고<br />
                    행복하게 잘 살겠습니다.<br />
                </div>
                <div className="Intro-desc-family">
                    김동언, 김미정의 장남 <b>민국</b><br />
                    이종섭, 박경옥의 차녀 <b>현주</b>
                </div>
            </div>
            <img className="Intro-baemin-avatar" src={baeminAvatar}/>
        </div>
    );
}