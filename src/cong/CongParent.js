import "./CongParent.css"

export default function CongParent() {
    return (
        <div className="Cong-card">
            <div className="Cong-flex-row">
                <img className="Cong-photo" src={mingookImage} />
                <div>
                    <div>신랑 김민국</div>
                    <div>
                        일할 때나 일상을<br />
                        함께 할 때나 서로에게 최고의 동료가 될께요.<br />
                    </div>
                    <div className="">
                        <div>전화</div>
                        <div>카톡</div>
                        <div>인스타</div>
                    </div>
                </div>
            </div>
        </div>
    );
}