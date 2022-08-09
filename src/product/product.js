import React, { useEffect, useState } from "react";
import "./product.css";
import DataService from "../services/data-service";
import NotificationService, { NOTIFICATION_WISHLIST_CHANGED } from "../services/notification-service";

const ds = new DataService();
const ns = new NotificationService();
function Product(props) {

    const [onWishlist, setOnWishlist] = useState(ds.itemOnWishlist());

    useEffect(() => {
        function onWishlistChanged(newWishlist) {
            setOnWishlist(ds.itemOnWishlist([props.product]));
        }

        ns.addObserver(NOTIFICATION_WISHLIST_CHANGED, this, onWishlistChanged);

        return function cleanUp() {
            ns.removeObserver(this, NOTIFICATION_WISHLIST_CHANGED)
        }
    })


    const onButtonClicked = () => {
        if (onWishlist) {
            ds.removeFromWishlist(props.product);
        } else {
            ds.addToWishlist(props.product);
        }

    }

    let btnClass;
    if (onWishlist) {
        btnClass = "btn btn-danger";
    } else {
        btnClass = "btn btn-primary";
    }

    return (
        <div className="card product">
            <img className="card-img-top" alt="product" src={props.product.imgUrl}></img>
            <div className="card-body">
                <h4 className="card-title">{props.product.title}</h4>
                <p className="card-text">Price: ${props.product.price}</p>
                <a
                    href="#"
                    onClick={(evt) => {
                        evt.preventDefault();
                        onButtonClicked();
                    }}
                    className={btnClass}
                >{onWishlist ? "Remove from Wishlist" : "Add to Wishlist"}</a>
            </div>
        </div >
    )
}

export default Product;