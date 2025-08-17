import React, { useEffect, useState } from "react";
import "./blog.css";
import one_post from "./../../img_home/01.png";
import { useParams } from "react-router-dom";

export default function Blog() {
  const { id } = useParams();
  const [dataPost, setDataPost] = useState(null);

  useEffect(() => {
    const fetchPost = async() => {
      const response = await fetch(`https://6853fbc9a2a37a1d6f4ab196.mockapi.io/blogs/?id=${id}`);
      const result = await response.json();
      setDataPost(result);
    };
    fetchPost();
  }, [id]);

  if (!dataPost || dataPost.length === 0) return <p>Loading...</p>;

  const post = dataPost[0]

  return (
    <div className="blog-container">
      <h1 className="blog-title">{post.title}</h1>
      <img src={post.img} alt="Cactus" className="blog-image" />
      <p className="blog-text">
        {post.text}
      </p>
    </div>
  );
}
