import About from "./components/About";
import Aboutvideo from "./components/Aboutvideo";
import Banner from "./components/Banner";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="h-[1000vh]">
      <Header />
      <Banner />
      <About />
      <Aboutvideo />
    </div>
  )
}