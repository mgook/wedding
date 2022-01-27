import PhotoGallery from './gallery/PhotoGallery';
import Top from './top/Top';
import LivereComment from './comment/LivereComment'

import './App.css';
import Intro from './intro/Intro';
import Navbar from './navbar/Navbar';
import Location from './location/Location';

function App() {
  return (
    <div className="App">
      <Top />
      <Navbar />
      <Intro />
      <PhotoGallery />
      <Location />
      <LivereComment />
    </div>
  );
}

export default App;
