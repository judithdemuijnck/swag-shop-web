import "./wishlist.css";
import ProductCondensed from "../product-condensed/product-condensed";

function Wishlist(props) {

    const createWishlist = () => {
        const list = props.wishlist.map(
            (product) =>
                <ProductCondensed
                    product={product}
                    key={product._id}
                    handleClick={props.handleClick} />
        )
        return (list)
    }

    return (
        <div className="card">
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