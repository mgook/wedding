import React, { useEffect } from 'react';
import "./Location.css";

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
        <div className="Location" id="Location">
            <h1 className='Location-title'>노블발렌티 대치</h1>
            <div className='Location-map-container'>
                <div className='Location-map' id="map"></div>
            </div>
            <div className='Location-address-container'>
                <div className='Location-address'>서울 강남구 영동대로 325</div>
                <div className='Location-address-button'>길찾기</div>
                <div className='Location-address-button'>지도보기</div>
            </div>
            <div className='Location-info-container'>
                <div className='Location-info-title'>전화</div>
                <div className='Location-info-content'>02-539-0400</div>
                <div className='Location-info-title'>주차</div>
                <div className='Location-info-content'>
                    삼성역 3번출구 539m 직전<br />
                    -혜암빌딩 지하 주차장(150대)<br />
                    -폭스바겐 건물 주차(150대)
                </div>
                <div className='Location-info-title'>지하철</div>
                <div className='Location-info-content'>2호선 삼성역 (10분 간격 셔틀 버스 운행)</div>
                <div className='Location-info-title'>버스</div>
                <div className='Location-info-content'>
                    정류장 : 휘문고, 대치2동주문센터 하차<br />
                    -일반 : 11-3, 917<br />
                    -지선 : 4318, 4319, 4419<br />
                    -간선 : 401<br />
                    -직행 : 500-2, 9407, 9507, 9607
                </div>
            </div>
        </div>
    );
}