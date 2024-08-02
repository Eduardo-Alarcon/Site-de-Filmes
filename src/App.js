import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Banner from "./Components/Banner";
import Container from "./Components/Container";
import Cards from "./Components/Cards";
import Category, {categories, filterCategory} from "./Components/Category";

function App() {
  return (
    <>
      <Header />
      <Banner image="home" />
      <Container> 

      {
        categories.map((category, index) => 
          <Category category={category}>
     { filterCategory(index).map((video) => <Cards id={video.id} key={video.id} /> )}
      </Category>
        )
      }


      </Container>
      <Footer />

    </>
  );
}

export default App;
