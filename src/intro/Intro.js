import gook from "../assets/images/intro/gook.jpg";
import joo from "../assets/images/intro/joo.jpg";
import "./Intro.css"

export default function Intro() {
    return (
        <div className="Intro">
            <div className="Intro-title">
                MINGOOK<br />
                & HYUNJOO
            </div>
            <div className="Intro-sub-title">
                WEDDING INVITATION
            </div>
            <div className="Intro-photo-conatiner">
                <img className="Intro-photo" src={gook} />
                <img className="Intro-photo" src={joo} />
            </div>
            <div className="Intro-desc">
                캄캄한 밤 길을 잃고 헤매도<br />
                서로의 등불이 되어주고자<br />
                서로의 쉴 곳이 되어주고자<br />
                두 사람 함계 하고자 합니다.<br /><br />

                저희 두 사람의 앞날을<br />
                축복해 주시고 격려해 주시면<br />
                감사한 마음 간직하고<br />
                행복하게 잘 살겠습니다.<br />
            </div>
        </div>
    );
}