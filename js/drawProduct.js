import { fetchApi } from "./fetchApi.js";
import { API_PRODUCT } from "./constants.js";
import { params, product } from "./variables.js";

export const drawProduct = () => {

    // Có lỗi nhưng mà chạy được là may rồi huhu
    let api = "";
    if (params.category != "") {
        api = `${API_PRODUCT}/category/${params.category}?sortBy=${params.sortBy}&order=${params.order}&limit=${params.limit}&skip=${params.page}`;
        if (params.q != "") {
            api = `${API_PRODUCT}/search?q=${params.q}&?sortBy=${params.sortBy}&order=${params.order}&limit=${params.limit}&skip=${params.page}`;
        }
    }

    else {
        api = `${API_PRODUCT}/search?q=${params.q}&sortBy=${params.sortBy}&order=${params.order}&limit=${params.limit}&skip=${params.page}`;
    }

    fetchApi(api)
        .then(data => {
            let htmls = data.products.map(item => {
                return `
            <div class="product__item">
                <div class="product__image">
                    <img src="${item.thumbnail}" alt="${item.title}">
                    <div class="product__percent">${item.discountPercentage} %</div>
                </div>

                <div class="product__content">
                    <h3 class="product__title">${item.title}</h3>
                    <div class="product__meta">
                        <div class="product__price">${item.price} $</div>
                        <div class="product__stock">Còn lại: ${item.stock} sản phẩm</div>
                    </div>
                </div>
            </div>
        `;
            });
            product.innerHTML = htmls.join("");
        });
}