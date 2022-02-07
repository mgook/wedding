import React, { useEffect } from 'react';
import "./Location.css";
import img_kakao from "../assets/images/location/kakao.png";
import img_google from "../assets/images/location/google.png";
import img_naver from "../assets/images/location/naver.png";

const { kakao } = window;

export default function Location() {

    useEffect(() => {
        var container = document.getElementById("map");
        var options = {
            center: new kakao.maps.LatLng(37.50530127599599, 127.06552155359647),
            level: 5
        }
        var map = new kakao.maps.Map(container, options);
        var marker = new kakao.maps.Marker({ position: new kakao.maps.LatLng(37.50353067932214, 127.06552155359647) });
        marker.setMap(map);
    }, []);

    return (
        <div className="Location App-section" id="Location">
            <h1>노블발렌티 대치</h1>
            <div className='Location-map-container'>
                <div className='Location-map' id="map"></div>
            </div>
            <div className='Location-address-container'>
                <p className='App-text'>서울 강남구 영동대로 325</p>
                <a href="http://naver.me/5PQ7J4Cy"><img src={img_naver} /></a>
                <a href="http://kko.to/HpUm3L5f0"><img src={img_kakao} /></a>
                <a href="https://goo.gl/maps/6qGeGfxwQpW2TWMbA"><img src={img_google} /></a>
            </div>
            <div className='Location-info-container'>
                <div className='App-text'>전화</div>
                <div className='App-sub-text'>02-539-0400</div>
                <div className='App-text'>주차</div>
                <div className='App-sub-text'>
                    삼성역 3번출구 539m 직전<br />
                    - 노블발렌티 대치 S타워 (300대)<br />
                    - 동원빌딩 (150대)
                </div>
                <div className='App-text'>지하철</div>
                <div className='App-sub-text'>
                    2호선 삼성역 3번출구<br />
                    - 셔틀버스 운행 (5분 간격)
                </div>
                <div className='App-text'>버스</div>
                <div className='App-sub-text'>
                    정류장 : 휘문고, 대치2동주민센터 하차<br />
                    - 일반 : 11-3, 917<br />
                    - 지선 : 4318, 4319, 4419<br />
                    - 간선 : 401<br />
                    - 직행 : 500-2, 9407, 9507, 9607
                </div>
            </div>
        </div>
    );
}