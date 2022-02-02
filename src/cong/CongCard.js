import img_instagram from "../assets/images/cong/instagram.png";
import img_phone from "../assets/images/cong/phone.png";
import img_kakao from "../assets/images/cong/kakao.png";
import "./CongCard.css";

export default function CongCard({ params }) {
    return (
        <div className="CongCard">
            {params.imagePosition == "LEFT" ? <img className="CongCard-photo" src={params.photo} /> : null}
            <main>
                <div className="CongCard-title">{params.type} <b>{params.name}</b></div>
                <div className="CongCard-content">{params.content}</div>
                <div className="CongCard-messenger">
                    <a href={`tel:${params.phone}`}><img className="CongCard-icon-pink" src={img_phone} /></a>
                    <a href={`sms:${params.phone}`}><img className="CongCard-icon-pink" src={img_kakao} /></a>
                    <a href={params.instagram}><img className="CongCard-icon-pink" src={img_instagram} /></a>
                </div>
            </main>
            {params.imagePosition == "RIGHT" ? <img className="CongCard-photo" src={params.photo} /> : null}
        </div>
    );
}