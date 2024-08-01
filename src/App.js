import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Banner from "./Components/Banner";
import Container from "./Components/Container";


function App() {
  return (
    <>
    <Header />
    <Banner image = "home" />
    <Container>
   <h1>Hello World!</h1>
    </Container>
   <Footer />

  </>
  );
}

export default App;
