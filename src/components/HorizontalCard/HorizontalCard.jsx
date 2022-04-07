import { useCart } from "../../contexts/cartContext";
import "./HorizontalCard.css"

const HorizontalCard = ({ product }) => {
    const { cartDispatch, cartState } = useCart();
    const { myWishlist } = cartState;
    const flagWishlist = myWishlist.find(item => item.id === product.id);
    return (
        <div className="card card-horizontal" key={product.id}>
            <div className="card-hr-details">
                <img src={product.src} alt="product" />
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
                        <p className="card-about">
                            Quantity
                            <i className="fas fa-plus-circle cursor-pointer"
                                onClick={() => {
                                    cartDispatch(
                                        {
                                            type: "INCREMENT",
                                            payload: product
                                        }

                                    )
                                }}
                            ></i>
                            {product.quantity}
                            <i className="fas fa-minus-circle cursor-pointer"
                                onClick={() => {
                                    cartDispatch(
                                        {
                                            type: "DECREMENT",
                                            payload: product
                                        }

                                    )
                                }}
                            ></i>
                        </p>
                    </p>
                </div>
            </div>

            <div className="buttons card-info-margin hr-buttons">
                <button className="card-btn"
                    onClick={() => {
                        cartDispatch(
                            {
                                type: "REMOVE_FROM_CART",
                                payload: product
                            }

                        )
                    }}
                >
                    <i className="fas fa-shopping-cart"></i>
                    Remove this item</button>

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
            </div>

        </div >
    );
}

export { HorizontalCard }