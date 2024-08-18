export let params = {
    q: "",
    sortBy: "",
    order: "",
    page: 1,
    limit: 8,
    category: ""
}

export const inputSearch = document.querySelector("#search input");
export const buttonSearch = document.querySelector("#search button");

export const filter = document.querySelector("#filter");

export const paginPrev = document.querySelector("#paginationPrev");
export const paginNext = document.querySelector("#paginationNext");
export const paginNumber = document.querySelector("#paginationNumber");

export const category = document.querySelector("#category");
export const product = document.querySelector("#products");

