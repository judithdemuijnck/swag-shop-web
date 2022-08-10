import "./product-condensed.css";

function ProductCondensed(props) {

    return (
        <li className="list-group-item product-condensed d-flex justify-content-start align-items-center">
            <a
                className="btn btn-outline-danger btn-sm me-3"
                href="#"
                onClick={e => props.handleClick(e, props.product)}
            >X</a>
            <p>{props.product.title} | <b>${props.product.price}</b></p>
        </li>
    )
}

export default ProductCondensed;