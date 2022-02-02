import { useState, useEffect } from 'react';
import './Top.css';

function Top() {
    return (
        <div className="Top">
            <div className='Top-invitation-box'>
                <div className='Top-invitation'>WEDDING INVITATION</div>
            </div>

            <div className='Top-text-box' style={{marginTop: window.innerHeight * 0.65}}>
                <div className="Top-title">22. 03. 13.</div>
                <div className="Top-sub-title">김민국 - 이현주</div>
                <div className="Top-desc">
                    2020월 03월 13일 (일) <b>오후 2시</b><br />
                    노블발렌티 대치
                </div>
            </div>
            <div className="Top-image" style={{height: window.innerHeight}}></div>
        </div>
    );
}

export default Top;