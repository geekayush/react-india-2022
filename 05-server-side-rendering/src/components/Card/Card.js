// import React from "react";
// import { Link } from "react-router-dom";
// import css from "./Card.module.css";

// const Card = ({ url, image, header, description, imgHeight }) => (
//     <article className={css.card}>
//         <Link to={url}>
//             {image && (
//                 <figure className={css.thumbnail}>
//                     <img src={`${image}`} alt="meow"  style={
//                         {
//                             height: imgHeight + 'px' || "auto"
//                         }
//                     }/>
//                 </figure>
//             )}
//             {(header || description) && (
//                 <div className={css['card-content']}>
//                     {header && <h2>{header}</h2>}
//                     {description && <p className="marginTop-8 bodyRegular">{description}</p>}
//                 </div>
//             )}
//         </Link>
//     </article>
// );

// export default Card;

import { Link } from "react-router-dom";
import React from "react";
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
