import "./CongParent.css"
import img_phone from "../assets/images/cong/phone_b.png";
import img_kakao from "../assets/images/cong/kakao_b.png";

export default function CongParent({ params }) {
    return (
        <div className="CongParent">
            <header>{params.type} <b>{params.name}</b></header>
            <main>
                <a href={`tel:${params.phone}`}><img src={img_phone} /></a>
                <a href={`sms:${params.phone}`}><img src={img_kakao} /></a>
            </main>
        </div>
    );
}