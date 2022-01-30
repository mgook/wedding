import './App.css';
import { Calendar } from './calendar/Calendar';
import LivereComment from './comment/LivereComment';
import Cong from './cong/Cong';
import PhotoGallery from './gallery/PhotoGallery';
import Intro from './intro/Intro';
import Location from './location/Location';
import Navbar from './navbar/Navbar';
import Top from './top/Top';


function App() {
  return (
    <div className="App">
      <Top />
      <Navbar />
      <Intro />
      <PhotoGallery />
      <Calendar />
      <Location />
      <div className='Together-image'></div>
      <Cong />
      <LivereComment />
    </div>
  );
}

export default App;
