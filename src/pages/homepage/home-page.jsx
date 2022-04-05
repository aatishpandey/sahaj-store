import { Banner } from "../../components/Banner/Banner"
import { BannerCard } from "../../components/BannerCard/BannerCard"
import "./homepage.css"
import { useCart } from "../../contexts/cartContext"
import { Loader } from "../../components/Loader/Loader"

const HomePage = () => {
    const { productList, loading } = useCart();
    return (
        <div className="home-container">
            <Banner />
            <div className="product-list">
                {loading && <Loader />}
                {productList.map((product) => (
                    product.featured ?
                        <BannerCard
                            product={product}
                            buttons={false} />
                        : null
                ))}
            </div>

        </div>
    )
}

export { HomePage }