import Header from "./components/header/Header";
import CategoryHome from "./components/CategoryHome/CategoryHome";
import ProductHome from "../../Component/ProductHome/ProductHome";
import "./../Home/home.css";
import FilterBlock from "../../Component/FilterBlock/FilterBlock";
import SaleHome from "./../../img_home/Super Sale Banner.png";
import BuutonNext from "./components/BuutonNext/BuutonNext";
import { useEffect, useState } from "react";
import Post from "./components/Post/Post";
import { useGetProductQuery } from "../../redux/slice/apiSlice";
import useFilteredProducts from "../../hooks/useFilteredProducts";

export default function Home() {
  const { data, error, isLoading } = useGetProductQuery();

  const [topCategory, SetTopCategory] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState();
  const [selectedSize, setSelectedSize] = useState("");
  const [nextButton, setNextButton] = useState(0);

  const [itemOnpage, setItemOnpage] = useState(9); // по умолчанию

  const filterProduct = useFilteredProducts(
    data,
    selectedCategory,
    selectedSize,
    topCategory
  );
  
  // Меняем itemOnpage при изменении размера экрана
  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth <= 576) {
        setItemOnpage(4); // телефон
      } else if (window.innerWidth <= 768) {
        setItemOnpage(6); // планшет
      } else if (window.innerWidth <= 1200) {
        setItemOnpage(8); // ноутбук
      } else {
        setItemOnpage(9); // десктоп
      }
    };

    updateItems(); // запустить при монтировании
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const start = itemOnpage * nextButton;
  const end = start + itemOnpage;
  const pages = Math.ceil(filterProduct.length / itemOnpage);
  const AddItem = filterProduct.slice(start, end);
  const NumberNext = Array.from({ length: pages }, (_, i) => i + 1);

  return (
    <main>
      <Header />
      <section className="section_home">
        <div className="home_container">
          <div className="home_container_filter">
            <FilterBlock
              setSelectedCategory={setSelectedCategory}
              selectedCategory={selectedCategory}
              setSelectedSize={setSelectedSize}
              SetTopCategory={SetTopCategory}
              setSelectedCategoryId={setSelectedCategoryId}
              selectedCategoryId={selectedCategoryId}
              selectedSize={selectedSize}
              data={data}
            />
            <div className="sale_home">
              <img src={SaleHome} alt="" />
            </div>
          </div>
          <div className="home_container_product">
            <div className="home_category_sort">
              <CategoryHome
                value={topCategory}
                topCategory={(name) => SetTopCategory(name)}
              />
            </div>
            <div className="product_home_flex">
              {AddItem && AddItem.length > 0 ? (
                AddItem.map((record) => (
                  <ProductHome
                    key={record.id}
                    record={record}
                    name={record.title}
                    price={record.price}
                    img={record.img}
                    id={record.id}
                    data={data}
                  />
                ))
              ) : (
                <div className="no-products">
                  <h2>No products found</h2>
                  <p>Try changing the filter or category</p>
                </div>
              )}
            </div>

            <div className="buuton_next_home">
              <BuutonNext
                NumberNext={NumberNext}
                nextButton={nextButton}
                setNextButton={setNextButton}
              />
            </div>
          </div>
        </div>
        <div className="home_posts">
          <Post />
        </div>
      </section>
    </main>
  );
}
