import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard/lib/Component";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Account.css";

export default class Account extends React.Component {
    showCopySuccess = () => {
        toast.success('계좌번호가 복사되었습니다.', {
            position: "bottom-center",
            autoClose: 2500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    render() {
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
                    <CopyToClipboard text="58881017677907">
                        <div style={{ "grid-area": "copy-a" }} className="Account-copy" onClick={this.showCopySuccess}>복사하기</div>
                    </CopyToClipboard>
                    <div style={{ "grid-area": "account-b" }} className="Account-info">
                        신랑 김민국<br />
                        토스뱅크 1000-0018-2401
                    </div>
                    <CopyToClipboard text="100000182401">
                        <div style={{ "grid-area": "copy-b" }} className="Account-copy" onClick={this.showCopySuccess}>복사하기</div>
                    </CopyToClipboard>
                    {/* 신부 */}
                    <div style={{ "grid-area": "title-b" }} className="Account-title">신부</div>
                    <div style={{ "grid-area": "account-c" }} className="Account-info">
                        혼주 이종섭<br />
                        우리은행 153-07-007287
                    </div>
                    <CopyToClipboard text="15307007287">
                        <div style={{ "grid-area": "copy-c" }} className="Account-copy" onClick={this.showCopySuccess}>복사하기</div>
                    </CopyToClipboard>
                    <div style={{ "grid-area": "account-d" }} className="Account-info">
                        신부 이현주<br />
                        토스뱅크 1000-0273-7760
                    </div>
                    <CopyToClipboard text="100002737760">
                        <div style={{ "grid-area": "copy-d" }} className="Account-copy" onClick={this.showCopySuccess}>복사하기</div>
                    </CopyToClipboard>
                </main>
                <ToastContainer theme="dark" toastStyle={{fontSize: "16px"}}/>
            </div>
        );
    }
}