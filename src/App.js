import PhotoGallery from './gallery/PhotoGallery';
import Top from './top/Top';
import LivereComment from './comment/LivereComment'

import './App.css';
import Intro from './intro/Intro';

function App() {
  return (
    <div className="App">
      <Top />
      <Intro />
      <PhotoGallery />
      <LivereComment />
    </div>
  );
}

export default App;
