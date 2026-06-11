import React from 'react';
import './Blog.css';
import image from './assets/kalam.jpg';

function Blog() {
  var title = "Dr. A.P.J. Abdul Kalam - Missile Man of India";

  var author = "R.K. Narayan";

  var description =
    "Dr. A.P.J. Abdul Kalam was an Indian aerospace scientist and the 11th President of India. He played a major role in India's missile and space programs and is popularly known as the Missile Man of India.";

  return (
    <div className="container">
      <h1 style={{ color: "white" }}>{title}</h1>
      <h3>Author: {author}</h3>

      <img src={image} alt="APJ Abdul Kalam" className="image" />

      <p>{description}</p>
    </div>
  );
}

export default Blog;