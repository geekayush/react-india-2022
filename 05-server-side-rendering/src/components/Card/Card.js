import React from "react";
import { Link } from "react-router-dom";

const Card = ({ url, image, header, description }) => (
  <article className="card">
    <Link to={url}>
      {image && (
        <figure className="thumbnail">
          <img src={`${image}`} alt="meow" />
        </figure>
      )}
      {(header || description) && (
        <div className="card-content">
          {header && <h2>{header}</h2>}
          {description && <p>{description}</p>}
        </div>
      )}
    </Link>
  </article>
);

export default Card;
