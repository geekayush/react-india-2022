import React from "react"
import { Link } from "react-router-dom"
import "./ContentPageTitle.css"

/**
 * Content Page Title Widget is used to display the Title of the Page
 * along with some information about the page
 */
const ContentPageTitle = React.memo(function ContentPageTitle({
    dog = {}
}) {

    return (
        <div class="container-fluid widget-container">
            <div class="col-6 marginTop-8">
                <div class="flex alignCenter justifyBetween">
                    <h1 class="l1SemiBold">{dog.name}</h1>
                </div>
                <div class="marginTop-16 flex alignCenter">
                    <img
                        className="avatar imageBoxMedium"
                        src="images/dog_icon.jpg"
                        alt={dog.name || "Avatar"}
                    />
                    <div class="flexColumn" className="marginLeft8">
                        <span className="smallRegular textSecondary">
                            It is of {" "}
                            <Link
                                to={`/dogs/${dog.breed}`}
                                class="smallMedium noAnchorColor"
                                className="anchor"
                            >
                                {dog.breed} breed
                            </Link>
                        </span>
                    </div>
                </div>
                <div className="marginTop-8 smallRegular textSecondary">
                    Located at {dog.city}, {dog.state}
                </div>
                <div className="marginTop-4 smallRegular textSecondary">
                    Last Updated on {new Date().toDateString()}
                </div>
                <div class="button marginTop-8">Adopt {dog.name}</div>
            </div>
        </div>
    )
})

export default ContentPageTitle



