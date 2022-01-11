import PhotoGallery from './gallery/PhotoGallery';
import Top from './top/Top';
import LivereComment from './comment/LivereComment'

import './App.css';

function App() {
  return (
    <div className="App">
      <Top />
      <PhotoGallery />
      <LivereComment />
    </div>
  );
}

export default App;
