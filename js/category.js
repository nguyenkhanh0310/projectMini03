import { API_CATEGORY } from "./constants.js";
import { drawProduct } from "./drawProduct.js";
import { fetchApi } from "./fetchApi.js";
import { category, params } from "./variables.js";

fetchApi(API_CATEGORY)
    .then(data => {
        let htmls = data.map(item => {
            return `
                <div class="category__item" data-category="${item.slug}">
                    ${item.name}
                </div>
            `;
            });
        category.innerHTML = htmls.join("");

        const listCategory = document.querySelectorAll("#category .category__item");
        listCategory.forEach(item => {
            item.addEventListener("click", function() {
                params.category = item.getAttribute("data-category");
                // params.category = item.dataset.category;
                drawProduct();
            });
        })
    })