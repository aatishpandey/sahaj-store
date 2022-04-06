import "./product-page.css"
import { BannerCard, Filters, useProduct, sortList, filterRating, filterSlider, Loader, filterCategory, useCart } from "./productUtil";

const KeyboardsPage = () => {
    const { productList, loading } = useCart();
    const { state } = useProduct();
    const { rating, sortBy, gender, sliderVal, category } = state;
    const sliderFilteredList = filterSlider(productList, sliderVal)
    const priceSortedList = sortList(sliderFilteredList, sortBy);
    const ratingFilteredList = filterRating(priceSortedList, rating);
    const categoryFilteredList = filterCategory(ratingFilteredList, category);

    const renderList = categoryFilteredList.filter(item => item.category === "keyboard")
    return (
        <div class="main-product">
            <Filters
                monitorDisabled={true}
                headphoneDisabled={true}
            />
            <div class="product-container">
                <div className="sidebar-head">Showing All Products <i className="sidebar-text">(Showing {renderList.length} products)</i>
                </div>
                <div className="product-list">
                    {loading && <Loader />}
                    {renderList.map((product) => (
                        <BannerCard
                            key={product.id}
                            product={product} />
                    ))}
                </div>
            </div>
        </div>

    )
}

export { KeyboardsPage }