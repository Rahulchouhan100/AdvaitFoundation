import "./App.css";
import VideoSeries from "./component/VideoSeries";
import Accordions from "./component/reusable/Accordions";
import Footer from "./component/reusable/Footer";
import Navbar from "./component/reusable/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <VideoSeries />
      <Accordions />
      <Footer />
    </div>
  );
}

export default App;
