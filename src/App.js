import { MetaTags } from 'react-meta-tags';
import './App.css';
import { Calendar } from './calendar/Calendar';
import LivereComment from './comment/LivereComment';
import Account from './cong/Account';
import Cong from './cong/Cong';
import PhotoGallery from './gallery/PhotoGallery';
import Intro from './intro/Intro';
import Location from './location/Location';
import Navbar from './navbar/Navbar';
import Top from './top/Top';

function App() {
  return (
    <div className="App">
      <MetaTags>
        <title>민국 ♡ 현주</title>
        <meta property="og:title" content="민국♡현주, 결혼합니다" />
        <meta name="og:description" content="일시: 2022.03. 13 (일) 오후 2시\n장소: 노블발렌티 대치" />
        <meta property="og:image" content="https://github.com/mgook/wedding/blob/master/src/assets/images/og_image.jpg" />
      </MetaTags>
      <Top />
      <Navbar />
      <Intro />
      <PhotoGallery />
      <Calendar />
      <Location />
      <div className='Together-image'></div>
      <Cong />
      <Account />
      <LivereComment />
    </div>
  );
}

export default App;
