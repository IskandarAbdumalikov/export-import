let products = [
  {
    id: 1,
    name: "MacBook",
    img: "https://acom.pk/cdn/shop/articles/laptop_or_macbook.jpg?v=1670917158",
    cost: "1 200 $",
    count: 1,
    category: "laptop",
    color: "blue",
    info: [
      { key: "SSD", value: "512GB" },
      { key: "RAM", value: "8GB" },
    ],
  },
  {
    id: 2,
    name: "HP",
    img: "https://i5.walmartimages.com/seo/HP-Stream-14-Laptop-Intel-Celeron-N4000-4GB-SDRAM-32GB-eMMC-Office-365-1-yr-Royal-Blue_4f941fe6-0cf3-42af-a06c-7532138492fc_2.cb8e85270e731cb1ef85d431e49f0bf2.jpeg",
    cost: "6 200 000 so'm",
    count: 3,
    category: "laptop",
    color: "black",
    info: [
      { key: "Processor", value: "Ryzen 5500" },
      { key: "SSD", value: "256GB" },
      { key: "RAM", value: "16GB" },
    ],
  },
  {
    id: 3,
    name: "Samsung",
    img: "https://img.global.news.samsung.com/global/wp-content/uploads/2022/03/Galaxy-A-Unpacked_press-release_main4.jpg",
    cost: "3 200 000 so'm",
    count: 3,
    color: "white",
    category: "phone",
    info: [
      { key: "Processor", value: "Nomalum" },
      { key: "SSD", value: "256GB" },
      { key: "Android", value: "11" },
    ],
  },
  {
    id: 4,
    name: "TV 23",
    img: "https://thumbs.dreamstime.com/b/vintage-television-13933447.jpg",
    cost: "2 200 000 so'm",
    count: 4,
    color: "white",
    category: "tv"
  },
  {
    id: 5,
    name: "TV 32",
    img: "https://images.samsung.com/is/image/samsung/p6pim/in/ua32t4380akxxl/gallery/in-hd-t4310-428849-ua32t4380akxxl-537157418?$650_519_PNG$",
    cost: "5 200 000 so'm",
    count: 8,
    color: "black",
    category: "tv"
  },
];

let productCards = document.querySelector(".products__cards");
let categorySelect = document.querySelector("#products__category-select");
import { CATEGORY } from "./methods.js";

function mapCards(productsArr) {
  let productsTag = "";
  productsArr.map((el) => {
    productsTag += `
            <div class="products__card">
            <div class="products__card__img">
              <img src="${el.img}" alt="${el.name}" />
            </div>
            <div class="products__card__info">
              <h3 class="products__card__title">${el.name}</h3>
              <h2>${el.cost}</h2>
              <h3>Color : ${el.color}</h3>
              <h3>Count : ${el.count}</h3>
              <p class="products__card__desc">
                Lorem ipsum dolor sit amet consectetur adipisicing.Lorem ipsum dolor sit amet consectetur adipisicing.Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
              <button class="products__card__btn">Add to basket</button>
            </div>
          </div>
        `;
  });
 productCards.innerHTML = productsTag

}

categorySelect.addEventListener("change", (e) => {
  let changeCategory = e.target.value;
  filterCategory(changeCategory);
});

function filterCategory(changeCategory) {
  if (changeCategory === "all") {
    mapCards(products);
  } else {
    let resProducts = products.filter(
      (el) => el.category.toLowerCase() === changeCategory.toLowerCase()
    );

    mapCards(resProducts);
    console.log(resProducts);
  }
  localStorage.setItem(CATEGORY, changeCategory);
}



let changeCategory = localStorage.getItem(CATEGORY) || "all";
categorySelect.value = changeCategory;
filterCategory(changeCategory);
