import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import CustomNavbar from "./components/Navbar";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* Pattern Images */}
      <div className="pattern-container">
        <img src="/images/pattern1.png" alt="" className="pattern pattern1" />
        <img src="/images/pattern2.png" alt="" className="pattern pattern2" />
        <img src="/images/pattern3.png" alt="" className="pattern pattern3" />
        <img src="/images/pattern2.png" alt="" className="pattern pattern4" />
        <img src="/images/pattern1.png" alt="" className="pattern pattern5" />
      </div>

      {/* Main Content */}
      <CustomNavbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Footer />
    </>
  );
}

export default App;
