import "./post.css";
import five_post from "./../../../../img_home/Arrow - Right.png";
import { useNavigate } from "react-router-dom";
import { useGetBlogsQuery } from "../../../../redux/slice/apiSlice";

export default function Post() {
  const { data: post, error, isLoading } = useGetBlogsQuery();
  const navigate = useNavigate();
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const handleClickPost = (id) => {
    navigate(`blog/${id}`);
  };
  return (
    <section className="home_posts_section">
      <div className="home_posts_container">
        <div className="h3_subtitle_post">
          <h3 className="h3_post">Our Blog Posts</h3>
          <p className="subtitle_post">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.{" "}
          </p>
        </div>
        <div className="post">
          {post.map((obj, id) => (
            <div className="posts" key={id} onClick={() => handleClickPost(id + 1)}>
              <div className="img_post">
                <img src={obj.img} alt="" />
              </div>
              <div className="text_post">
                <p className="data_post">{obj.inform}</p>
                <p className="title_post">{obj.title}</p>
                <p className="desc_post">{obj.subtitle}</p>
                <div className="button_icon">
                  <div className="button_one">
                    <button
                      className="post_button"
                    >
                      <span>Read More</span>
                    </button>
                  </div>
                  <div className="icon_one">
                    <img className="icon_post" src={five_post} alt="" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
