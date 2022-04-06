const productReducerFn = (state, action) => {
    switch (action.type) {

        case "LOW_TO_HIGH": return { ...state, sortBy: action.type };

        case "HIGH_TO_LOW": return { ...state, sortBy: action.type };

        case "FOUR_STAR": return {
            ...state,
            rating: {
                ...state.rating,
                four: !state.rating.four
            }
        }
        case "THREE_STAR": return {
            ...state,
            rating: {
                ...state.rating,
                three: !state.rating.three
            }
        }
        case "TWO_STAR": return {
            ...state,
            rating: {
                ...state.rating,
                two: !state.rating.two
            }
        }
        case "ONE_STAR": return {
            ...state,
            rating: {
                ...state.rating,
                one: !state.rating.one
            }
        }

        case "MONITOR": return {
            ...state,
            category: { ...state.category, monitor: !state.category.monitor }
        }

        case "KEYBOARD": return {
            ...state,
            category: { ...state.category, keyboard: !state.category.keyboard }
        }

        case "HEADPHONE": return {
            ...state,
            category: { ...state.category, headphone: !state.category.headphone }
        }

        case "SLIDER": return {
            ...state, sliderVal: action.payload
        }

        case "CLEAR": return {
            ...state,
            sortBy: "",
            rating: {
                four: false,
                three: false,
                two: false,
                one: false
            },
            category: {
                monitor: false,
                keyboard: false,
                headphone: false,
            },
            gender: {
                men: false,
                women: false
            },
            sliderVal: 1000
        }
        default: return state;
    }
}

export { productReducerFn }