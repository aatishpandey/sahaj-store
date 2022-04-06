import "./BannerCard.css"
import { useCart } from "../../contexts/cartContext";
import { Link } from "react-router-dom"


const BannerCard = ({ product, buttons = true }) => {
    const { cartDispatch, cartState } = useCart();
    const { myCart, myWishlist } = cartState;
    const gotoCardText = "Go to Cart"
    const addToCartText = "Add to Cart"
    const flagCart = myCart.find(item => item.id === product.id);
    const flagWishlist = myWishlist.find(item => item.id === product.id);

    return (
        <>
            {<div className="card" key={product.id}>
                <img src={product.src} alt="product-image" />
                {product.newBadge && <div className="card-badge">New</div>}

                <div className="card-info">
                    <div className="main">
                        <p className="card-header">
                            {product.name}
                        </p>
                        <p className="card-author">
                            {product.brand}
                        </p>
                        <p className="card-about">
                            Rs.{product.price} <s>Rs.{product.price}</s><span style={{}}>({product.discount}%
                                OFF)</span>
                            <span class="rating">{product.rating}<i class="far fa-star"></i>
                            </span>
                        </p>
                    </div>

                    {buttons && <div className="buttons">
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
                                {flagCart ? gotoCardText : addToCartText}
                            </button>
                        </Link>

                        {<button className="card-btn card-btn-icon far fa-heart"
                            onClick={() => {
                                cartDispatch(
                                    {
                                        type: "ADD_TO_WISHLIST",
                                        payload: product
                                    }
                                )
                            }}
                            style={{ color: flagWishlist ? "red" : "black" }}
                        ></button>}
                        <button className="card-btn card-btn-icon fas fa-share-alt"></button>
                    </div>}
                </div>
            </div>}
        </>

    );
}

export { BannerCard };