import "./Account.css";

export default function Account() {
    return (
        <div className="Account">
            <h1>마음을 전하는 곳</h1>
            <main>
                {/* 신랑 */}
                <div style={{ "grid-area": "title-a" }} className="Account-title">신랑</div>
                <div style={{ "grid-area": "account-a" }} className="Account-info">
                    혼주 김동언<br />
                    하나은행 588-810176-77907
                </div>
                <div style={{ "grid-area": "copy-a" }} className="Account-copy">복사하기</div>
                <div style={{ "grid-area": "account-b" }} className="Account-info">
                    신랑 김민국<br />
                    토스뱅크 1000-0018-2401
                </div>
                <div style={{ "grid-area": "copy-b" }} className="Account-copy">복사하기</div>
                {/* 신부 */}
                <div style={{ "grid-area": "title-b" }} className="Account-title">신부</div>
                <div style={{ "grid-area": "account-c" }} className="Account-info">
                    혼주 이종섭<br />
                    우리은행 153-07-007287
                </div>
                <div style={{ "grid-area": "copy-c" }} className="Account-copy">복사하기</div>
                <div style={{ "grid-area": "account-d" }} className="Account-info">
                    신부 이현주<br />
                    토스뱅크 1000-0273-7760
                </div>
                <div style={{ "grid-area": "copy-d" }} className="Account-copy">복사하기</div>
            </main>
        </div>
    );
}