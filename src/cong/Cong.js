import img_mingook from "../assets/images/cong/mg.png";
import img_hyunjoo from "../assets/images/cong/hj.png";
import "./Cong.css";
import CongCard from "./CongCard";

export default function Cong() {
    const mingook = {
        imagePosition: "LEFT",
        type: "신랑",
        name: "김민국",
        content: "Hello World!\n두줄은 써야 할 것 같어\n세줄?",
        photo: img_mingook,
        phone: "010-6857-3563"
    }

    const hyunjoo = {
        imagePosition: "RIGHT",
        type: "신부",
        name: "이현주",
        content: "Hello World!\n두줄은 써야 할 것 같어\n세줄?",
        photo: img_hyunjoo,
        phone: "010-3746-3637"
    }

    return (
        <div className="Cong Cong-flex-column" id="Cong">
            <h1>축하인사 하기</h1>
            <CongCard params={mingook} />
            <CongCard params={hyunjoo} />
            <div className='Cong-parent'>
                <div className="Cong-parent-title">신랑 혼주</div>
                <div className="Cong-parent-title">신부 혼주</div>
                <div>
                    <div className="Cong-parent-father">아버지 김동언</div>
                    <div className="Cong-flex-row">
                        <div>전화</div>
                        <div>카톡</div>
                    </div>
                </div>
            </div>
        </div>
    );
}