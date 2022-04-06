import "./Filters.css"
import { useProduct } from "../../contexts/productContext";


const Filters = ({ monitorDisabled = false, keyboardDisabled = false, headphoneDisabled = false }) => {
    const { state, dispatch, } = useProduct();
    const { sortBy, rating, sliderVal, category } = state;
    const { one, two, three, four } = rating;
    const { monitor, headphone, keyboard } = category;

    return (
        //  sidebar
        <div className="product-sidebar">
            <div className="p-sidebar-head">
                <div>Filters</div>
                <div style={{ cursor: "pointer" }}
                    onClick={() => dispatch({ type: "CLEAR" })}>Clear</div>
            </div>
            <div className="p-sidebar-head">
                <label for="price-max">Price:</label>
                <input className="price-slider"
                    type="range"
                    id="price-max"
                    value={sliderVal}
                    min="0"
                    max="1000"
                    step="50"
                    onChange={(e) => {
                        dispatch(
                            {
                                type: "SLIDER",
                                payload: e.target.value
                            }
                        )
                    }}
                />
                <div className="sidebar-text">
                    {sliderVal}
                </div>
            </div>

            <div className="p-sidebar-elements">
                <div className="sidebar-head">Category</div>
                <label for="monitor" className="sidebar-text">
                    <input
                        id="monitor"
                        type="checkbox"
                        checked={monitor}
                        onChange={() => dispatch({ type: "MONITOR" })}
                        disabled={monitorDisabled}
                    />
                    Monitors
                </label>
                <label for="keyboard" className="sidebar-text">
                    <input
                        id="keyboard"
                        type="checkbox"
                        checked={keyboard}
                        onChange={() => dispatch({ type: "KEYBOARD" })}
                        disabled={keyboardDisabled}
                    />
                    Keyboards
                </label>
                <label for="headphone" className="sidebar-text">
                    <input
                        id="headphone"
                        type="checkbox"
                        checked={headphone}
                        onChange={() => dispatch({ type: "HEADPHONE" })}
                        disabled={headphoneDisabled}
                    />
                    Headphones
                </label>
            </div>

            <div className="p-sidebar-elements">
                <div className="sidebar-head">Rating</div>
                <label for="4star" className="sidebar-text">
                    <input
                        id="4star"
                        type="checkbox"
                        checked={four}
                        onChange={() => dispatch({ type: "FOUR_STAR" })}
                    />
                    4 stars & above9
                </label>
                <label for="3star" className="sidebar-text">
                    <input
                        id="3star"
                        type="checkbox"
                        checked={three}
                        onChange={() => dispatch({ type: "THREE_STAR" })}
                    />
                    3 stars & above
                </label>
                <label for="2star" className="sidebar-text">
                    <input
                        id="2star"
                        type="checkbox"
                        checked={two}
                        onChange={() => dispatch({ type: "TWO_STAR" })}
                    />
                    2 stars & above
                </label>
                <label for="1star" className="sidebar-text">
                    <input
                        id="1star"
                        type="checkbox"
                        checked={one}
                        onChange={() => dispatch({ type: "ONE_STAR" })} />
                    1 stars & above
                </label>
            </div>

            <div className="p-sidebar-elements">
                <div className="sidebar-head">Sort By</div>
                <label for="lowtohigh" className="sidebar-text">
                    <input
                        id="lowtohigh"
                        type="radio"
                        checked={sortBy === "LOW_TO_HIGH"}
                        onChange={() => dispatch({ type: "LOW_TO_HIGH" })}
                    />
                    Price Low to high
                </label>
                <label for="hightolow" className="sidebar-text">
                    <input
                        id="hightolow"
                        type="radio"
                        checked={sortBy === "HIGH_TO_LOW"}
                        onChange={() => dispatch({ type: "HIGH_TO_LOW" })}
                    />
                    Price high to Low
                </label>
            </div>

        </div>
    );
}

export { Filters }