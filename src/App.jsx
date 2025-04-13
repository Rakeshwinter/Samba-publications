import "./App.css";
// Import all of Bootstrap's CSS
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/Navbar";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
function App() {
  return (
    <>
      <CustomNavbar />
      <Section1/>
      <Section2/>
      <Section3/>
    </>
  );
}

export default App;
