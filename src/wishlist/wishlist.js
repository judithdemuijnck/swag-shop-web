import React, { useEffect, useState } from "react";
import "./wishlist.css";
import ProductCondensed from "../product-condensed/product-condensed";
import DataService from "../services/data-service";
import NotificationService, { NOTIFICATION_WISHLIST_CHANGED } from "../services/notification-service";

const ns = new NotificationService();

function Wishlist(props) {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        function onWishlistChanged(newWishlist) {
            setWishlist([...newWishlist]);
        }

        ns.addObserver(NOTIFICATION_WISHLIST_CHANGED, this, onWishlistChanged);

        return function cleanUp() {
            ns.removeObserver(this, NOTIFICATION_WISHLIST_CHANGED)
        }
    })

    const createWishlist = () => {
        const list = wishlist.map(
            (product) =>
                <ProductCondensed
                    product={product}
                    key={product._id} />
        )
        return (list)
    }

    return (
        < div className="card" >
            <div className="card-body">
                <h4 className="card-title">Wishlist</h4>
                <ul className="list-group">
                    {createWishlist()}
                </ul>

            </div>

        </div >
    )
}

export default Wishlist;