import { useState, useEffect, useRef } from "react";
import "./BlogSection.css";
import { useNavigate } from "react-router-dom";
import { reactPosts } from "../Json/React";
import { javaScriptPosts } from "../Json/javascriptBlogData";
import { cssPosts } from "../Json/CSS";
import { apiFunctions } from "../Json/Api";
import arrow from "../../../Images/arrow.png";

const blogPosts = [
  ...reactPosts,
  ...javaScriptPosts,
  ...cssPosts,
  ...apiFunctions,
];

const BlogSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Api");
  const [selectedPost, setSelectedPost] = useState(null);
  const filterRef = useRef(null);
  const postRefs = useRef([]);
  const navigate = useNavigate();

  const backtohome = () => {
    navigate("/");
  };
  const categories = ["Api"];

  //   const categories = ["All", "React", "JavaScript", "CSS", "Api"];

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("pi-filter-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (filterRef.current) {
      observer.observe(filterRef.current);
    }

    return () => {
      if (filterRef.current) {
        observer.unobserve(filterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("pi-blog-post-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    postRefs.current.forEach((post) => {
      if (post) observer.observe(post);
    });

    return () => {
      postRefs.current.forEach((post) => {
        if (post) observer.unobserve(post);
      });
    };
  }, [filteredPosts]);

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const closePopup = () => {
    setSelectedPost(null);
  };

  return (
    <section className="pi-blog-section">
      <div
        className="pi-logo"
        onClick={backtohome}
        style={{ cursor: "pointer" }}
      >
        0.07 <span>Code & Craft</span>

      
      </div>
        <h2 className="pi-project-title">
        Code <span className="pi-outline">Snippets </span>
      </h2>
      <div className="pi-filter-container" ref={filterRef}>
        <div className="pi-filter-line"></div>
        {categories.map((category, index) => (
          <button
            key={index}
            className={`pi-filter-button ${
              selectedCategory === category ? "pi-filter-active" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="pi-blog-posts-container">
        {filteredPosts.map((post, index) => (
          <div
            key={index}
            className="pi-blog-post"
            ref={(el) => (postRefs.current[index] = el)}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <h3 className="pi-blog-post-title">{post.title}</h3>
            <span className="pi-blog-post-date">{post.date}</span>
            <p className="pi-blog-post-excerpt">{post.excerpt}</p>
            <span className="pi-blog-post-category">{post.category}</span>
            <div className="pi-blog-post-link-container">
              <img src={arrow} alt="" />

              <button
                className="pi-blog-post-link"
                onClick={() => handlePostClick(post)}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedPost && (
        <div className="pi-popup">
          <div className="pi-popup-content">
            <button className="pi-popup-close" onClick={closePopup}>
              ×
            </button>
            <h3>{selectedPost.title}</h3>
            <p>{selectedPost.excerpt}</p>
            <pre className="pi-code-snippet">
              <code>{selectedPost.codeSnippet}</code>
            </pre>
          </div>
        </div>
      )}
    </section>
  );
};

export default BlogSection;
