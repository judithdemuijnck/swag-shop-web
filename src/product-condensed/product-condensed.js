import React from "react";
import "./product-condensed.css";
import DataService from "../services/data-service";

const ds = new DataService();

function ProductCondensed(props) {

    const onButtonClicked = () => {
        ds.removeFromWishlist(props.product);
    }

    return (
        <li className="list-group-item product-condensed d-flex justify-content-start align-items-center">
            <a
                className="btn btn-outline-danger btn-sm me-3"
                href="#"
                onClick={(evt) => {
                    evt.preventDefault();
                    onButtonClicked();
                }}
            >X</a>
            <p>{props.product.title} | <b>${props.product.price}</b></p>
        </li>
    )
}

export default ProductCondensed;