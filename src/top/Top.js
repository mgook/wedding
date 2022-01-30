import './Top.css';


function Top() {
    return (
        <div className="Top">
            <div className='Top-invitation-box'>
                <div className='Top-invitation'>WEDDING INVITATION</div>
            </div>

            <div className='Top-text-box'>
                <div className="Top-title">22. 03. 13.</div>
                <div className="Top-sub-title">김민국 - 이현주</div>
                <div className="Top-desc">
                    2020월 03월 13일 (일) <b>오후 2시</b><br />
                    노블발렌티 대치
                </div>
                <button className='Top-save-button'>캘린더 저장하기</button>
            </div>
            <div className="Top-image"></div>
        </div>
    );
}


export default Top;