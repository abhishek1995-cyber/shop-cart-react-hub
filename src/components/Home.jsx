import NavScroll from "./NavScroll";
import Hero from "./Hero";
import Filter from "./Filter";
import Product from "./Product";
import Header from "./Header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="home app">
        <NavScroll />
        <Hero />
        <Filter />
        <Product />
      </div>
    </div>
  );
}
