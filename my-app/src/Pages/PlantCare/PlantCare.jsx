import "./plant_care.css";
import two from "./../../img_home/01 3.png";
import { useNavigate } from "react-router-dom";
import { useGetBlogsQuery } from "../../redux/slice/apiSlice";

export default function PlantCare() {
  const { data: careArticles, error, isLoading } = useGetBlogsQuery();
  const navigate = useNavigate();
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  const handleClickPost = (id) => {
    navigate(`/blog/${id}`);
  };
  return (
    <div className="plant-care-wrapper">
      {careArticles?.map((article, id) => (
        <div className="care-card" key={id}>
          <div className="care-image">
            <img src={article.img} alt={two} />
          </div>
          <div className="care-text">
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <button
              className="read-more"
              onClick={() => handleClickPost(id + 1)}
            >
              Read More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
