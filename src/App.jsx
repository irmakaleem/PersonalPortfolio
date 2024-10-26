import Header from "./Layout/Header";
import PreloaderArea from "./Animations/PreloaderArea";
import Footer from "./Layout/Footer";
import MainHome from "./Pages/HomePage/MainHome";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <PreloaderArea />
      <Header />
      <Routes>
        <Route path="/" element={<MainHome />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
