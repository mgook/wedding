import img_instagram from "../assets/images/cong/instagram.png";
import img_phone from "../assets/images/cong/phone.png";
import img_kakao from "../assets/images/cong/sms.png";
import "./CongCard.css";

export default function CongCard({ params }) {
    return (
        <div className="CongCard">
            {params.imagePosition == "LEFT" ? <img className="CongCard-photo" src={params.photo} /> : null}
            <main>
                <div className="CongCard-title">{params.type} <b>{params.name}</b></div>
                <div className="CongCard-content-wrap">
                    <div className="CongCard-content">{params.content}</div>
                </div>
                <div className="CongCard-messenger">
                    <a href={`tel:${params.phone}`}>
                        <div className="CongCard-icon-wrap">
                            <img className="CongCard-icon" src={img_phone} />
                        </div>
                    </a>
                    <a href={`sms:${params.phone}`}>
                        <div className="CongCard-icon-wrap">
                            <img className="CongCard-icon" src={img_kakao} />
                        </div>
                    </a>
                    <a href={params.instagram}>
                        <div className="CongCard-icon-wrap">
                            <img className="CongCard-icon" src={img_instagram} />
                        </div>
                    </a>
                </div>
            </main>
            {params.imagePosition == "RIGHT" ? <img className="CongCard-photo" src={params.photo} /> : null}
        </div>
    );
}