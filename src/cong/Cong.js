import img_hyunjoo from "../assets/images/cong/hj.png";
import img_mingook from "../assets/images/cong/mg.png";
import "./Cong.css";
import CongCard from "./CongCard";
import CongParent from "./CongParent";

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

    const mingookFather = {
        type: "아버지",
        name: "김동언",
        phone: "010-2502-5397"
    }

    const mingookMother = {
        type: "어머니",
        name: "김미정",
        phone: "010-9902-5397"
    }

    const hyunjooFather = {
        type: "아버지",
        name: "이종섭",
        phone: "010-"
    }

    const hyunjooMother = {
        type: "어머니",
        name: "박경옥",
        phone: "010-"
    }

    return (
        <div className="Cong Cong-flex-column" id="Cong">
            <h1>축하인사 하기</h1>
            <CongCard params={mingook} />
            <CongCard params={hyunjoo} />
            <section className='CongParent-grid'>
                <h1>신랑 혼주</h1>
                <h1>신부 혼주</h1>
                <CongParent params={mingookFather} />
                <CongParent params={mingookMother} />
                <CongParent params={hyunjooFather} />
                <CongParent params={hyunjooMother} />
            </section>
        </div>
    );
}