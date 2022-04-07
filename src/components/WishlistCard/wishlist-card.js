import "./wishlist-card.css"
import { useCart } from "../../contexts/cartContext";
import { Link } from "react-router-dom"

const WishlistCard = ({ product }) => {
    const { cartDispatch, cartState } = useCart();
    const { myCart } = cartState;
    const flag = myCart.find(item => item.id === product.id);
    const gotoCardText = "Go to Cart"
    const addToCartText = "Add to Cart"
    return (
        <div className="card card-horizontal" key={product.id}>
            <div className="card-hr-details">
                <img src={product.src} alt="product-image" />
                {product.newBadge && <div className="card-badge">New</div>}

                <div className="card-info">
                    <p className="card-header">
                        {product.name}
                    </p>
                    <p className="card-author">
                        {product.brand}({product.gender})
                    </p>
                    <p className="card-about">
                        Rs.{product.price}
                        <s>Rs.{product.price}</s>
                        <span style={{}}>
                            ({product.discount}%OFF)
                        </span>
                    </p>
                </div>
            </div>

            <div className="buttons card-info-margin hr-buttons">
                <Link to="/cart">
                    <button className="card-btn"
                        onClick={() => {
                            cartDispatch(
                                {
                                    type: "ADD_TO_CART",
                                    payload: product
                                }
                            )
                        }}
                    >
                        <i className="fas fa-shopping-cart"></i>
                        {flag ? gotoCardText : addToCartText}
                    </button>
                </Link>
                <button className="card-btn card-btn-icon fas fa-trash"
                    onClick={() => {
                        cartDispatch(
                            {
                                type: "REMOVE_FROM_WISHLIST",
                                payload: product
                            }
                        )
                    }}
                ></button>
                <button className="card-btn card-btn-icon fas fa-share-alt"></button>
            </div>

        </div >
    );
}

export { WishlistCard }