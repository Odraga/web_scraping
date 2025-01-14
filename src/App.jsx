import Footer from "./components/common/Footer";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <div className="text-bg-light flex-grow-1 ">
          <Home />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
