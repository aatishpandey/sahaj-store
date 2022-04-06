const filterSlider = (productList, sliderVal) => {
    return productList.filter(item => Number(item.price) <= Number(sliderVal))
}

export { filterSlider };