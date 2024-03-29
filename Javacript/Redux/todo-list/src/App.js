import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

function App() {
  return (
    <>
      <section className="todoapp">
        <Header />
        <Content />
        <Footer />
      </section>
    </>
  );
}

export default App;
