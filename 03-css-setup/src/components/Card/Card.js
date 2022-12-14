import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ url, image, header, description, imgHeight }) => (
    <article className="card">
        <Link to={url}>
            {image && (
                <figure className="thumbnail">
                    <img src={`${image}`} alt="meow"  style={
                        {
                            height: imgHeight + 'px' || "auto"
                        }
                    }/>
                </figure>
            )}
            {(header || description) && (
                <div className="card-content">
                    {header && <h2>{header}</h2>}
                    {description && <p className="marginTop-8 bodyRegular">{description}</p>}
                </div>
            )}
        </Link>
    </article>
);

export default Card;
