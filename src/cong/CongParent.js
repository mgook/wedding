import "./CongParent.css"
import img_phone from "../assets/images/cong/phone_b.png";
import img_kakao from "../assets/images/cong/sms_b.png";

export default function CongParent({ params }) {
    return (
        <div className="CongParent">
            <header>{params.type} <b>{params.name}</b></header>
            <main>
                <a href={`tel:${params.phone}`}><div className="CongParent-img-wrap"><img src={img_phone} /></div></a>
                <a href={`sms:${params.phone}`}><div className="CongParent-img-wrap"><img src={img_kakao} /></div></a>
            </main>
        </div>
    );
}