import main from '../assets/images/main.jpg';
import './Top.css';


function Top() {
    return (
        <div className="Top">
            <div className='Top-text'>
                <div className="Top-title">03. 13.</div>
                <div className="Top-sub-title">김민국 - 이현주</div>
                <div className="Top-desc">
                    2020월 03월 13일 (일) 오후 2시<br />
                    노블발렌티 대치
                </div>
            </div>
            <img className="Top-image" src={main} />
        </div>
    );
}


export default Top;