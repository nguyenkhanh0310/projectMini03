import { drawProduct } from "./drawProduct.js";
import { buttonSearch, filter, inputSearch, paginNext, paginNumber, paginPrev, params } from "./variables.js";

// Search
drawProduct();

const search = () => {
    params.q = inputSearch.value;
    drawProduct();
}

buttonSearch.addEventListener("click", function () {
    search();
});

inputSearch.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        search();
    }
});

// End Search

// Filter

filter.addEventListener("change", function (e) {
    switch (e.target.value) {
        case "default":
            params.sortBy = "";
            params.order = "";
            break;

        case "lowToHigh":
            params.sortBy = "price";
            params.order = "asc";
            break;

        case "highToLow":
            params.sortBy = "price";
            params.order = "desc";
            break;

        case "bigDiscount":
            params.sortBy = "discountPercentage";
            params.order = "desc";
            break;

        default:
            break;
    }
    drawProduct();
});

// End Filter

// Pagination

paginNext.addEventListener("click", function () {
    params.page += 1;
    paginNumber.innerHTML = params.page;
    drawProduct();
});

paginPrev.addEventListener("click", function () {
    if (params.page > 1) {
        params.page -= 1;
        paginNumber.innerHTML = params.page;
        drawProduct();
    }
});

// End Pagination