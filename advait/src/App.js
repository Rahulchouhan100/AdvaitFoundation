import "./App.css";
import VideoSeries from "./component/VideoSeries";
import Accordions from "./component/reusable/Accordions";
import Footer from "./component/reusable/Footer";

function App() {
  return (
    <div className="App">
      <VideoSeries />
      <Accordions />
      <Footer />
    </div>
  );
}

export default App;
