import React, { useEffect } from 'react';
import "../Theme.css";
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
            <div className='Location-title Theme-title'>노블발렌티 대치</div>
            <div className='Location-map-container'>
                <div className='Location-map' id="map"></div>
            </div>
            <div className='Location-address-container'>
                <div className='Location-address'>서울 강남구 영동대로 325</div>
                <div className='Location-address-button'>길찾기</div>
                <div className='Location-address-button'>지도보기</div>
            </div>
        </div>
    );
}