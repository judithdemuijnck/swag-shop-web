import "./product.css";

function Product(props) {

    let btnClass;
    if (props.isOnWishlist) {
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
                    onClick={e => props.handleClick(e, props.product)}
                    className={btnClass}
                >{props.isOnWishlist ? "Remove from Wishlist" : "Add to Wishlist"}</a>
            </div>
        </div >
    )
}

export default Product;