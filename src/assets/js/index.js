import './../scss/app.scss';

let http = new XMLHttpRequest();

http.open('get', './assets/product-list.json', true);

http.send();

http.onload = function () {
    if (this.readyState == 4 && this.status == 200) {

        let products = JSON.parse(this.responseText);

        let output = '';

        for (let item of products) {
            output += `

            <div class="product" data-filter="${item.isFulfilled === true ? 'Fulfilled' : 'onSale'} ${item.promotionPercentageColor}">
                <div class="top_part">
                    <div class="img_box">
                        <a href="${item.absoluteUrl}">
                            <img src="${item.mainImage}" alt="${item.title}">
                        </a>
                    </div>
                    <span class="promotion_percentage
                        ${item.promotionPercentageColor === 'silver' ?
                    'silver' :
                    ''
                }
                        ${item.promotionPercentageColor === 'gold' ?
                    'gold' :
                    ''
                }
                        ${item.promotionPercentageColor === 'bronze' ?
                    'bronze' :
                    ''
                }
                    ">
                        ${item.promotionPercentage} %
                    </span>

                    <ul class="icons">
                        <li>
                            <a href="javascript:void(0)">
                                ${item.isFavorite === true ?
                    '<img src="./assets/images/icon-fav-2.png" alt=""/>' :
                    '<img src="./assets/images/icon-fav-1.png" alt=""/>'
                }
                                
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)">
                                <img src="./assets/images/icon-share.png" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)">
                                <img src="./assets/images/jp-icon.png" alt="">
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="middle_part">
                    <h5 class="product_title">
                        <a href="${item.absoluteUrl}" title="${item.title}" alt="${item.title}" class="product_title_link">${item.title}</a>
                    </h5>
                    <div class="price_rate">
                        <div class="price">
                            <h5 class="main_price">${item.sellPrice}</h5>
                            <span class="save_price">(Save ${item.priceSaved})</span>
                        </div>
                        <div class="rate">
                            <span class="rate_score">
                                <img src="./assets/images/icon-rate-star.png" alt="">
                                <span class="rate_score_num">${item.rate}</span>
                            </span>
                            <span class="rate_total">(${item.rateCount})</span>
                        </div>
                    </div>
                </div>
                ${item.enableAddToCart === true ?
                    '<a class="add_to_cart" href="javascript:void(0)">Add To Cart</a>' :
                    '<a class="add_to_cart" href="javascript:void(0)" disabled>Not Available</a>'
                }
            </div>
            
            `
        }

        document.getElementById('products').innerHTML = output;

    }
}

const btn_selected_sort = document.getElementById('btn_selected_sort');
const sort_by_dropdown = document.getElementById('sort_by_dropdown');

btn_selected_sort.addEventListener("click", function (event) {
    sort_by_dropdown.classList.toggle('clicked');
});

const filter = document.getElementById('filter');
const btn_aside_trigger = document.getElementById('btn_aside_trigger');

btn_aside_trigger.addEventListener("click", function (event) {
    filter.classList.toggle('is_visible');
});


/*------------------------------------
    Start Filter By Fulfilled
------------------------------------*/
const global_filter = document.querySelectorAll('.global_filter');
global_filter.forEach(filter => {

    filter.addEventListener('change', function () {

        let selectedFilter = filter.getAttribute('id');
        let itemsToHide = document.querySelectorAll(`.products .product.show:not([data-filter*='${selectedFilter}'])`);
        let itemsToShow = document.querySelectorAll(`.products [data-filter*='${selectedFilter}']`);

        if (selectedFilter == 'all') {
            itemsToHide = [];
            itemsToShow = document.querySelectorAll(`.products .product.show:not([data-filter*='!${selectedFilter}'])`);
        }

        itemsToHide.forEach(el => {
            el.classList.add('hide');
            el.classList.remove('show');
        });

        itemsToShow.forEach(el => {
            el.classList.remove('hide');
            el.classList.add('show');
        });

    });
});
/*------------------------------------
    //End Filter By Fulfilled
------------------------------------*/


/*------------------------------------
    Start Search
------------------------------------*/
function Search() {
    let product = document.querySelectorAll('.product')
    let search_query = document.getElementById("search").value;
    for (var i = 0; i < product.length; i++) {
        if (product[i].innerText.toLowerCase()
            .includes(search_query.toLowerCase())) {
            product[i].classList.remove("hide");
        } else {
            product[i].classList.add("hide");
        }
    }
}

let Timer;
let Interval = 50; // Half a second
let searchInput = document.getElementById('search');
searchInput.addEventListener('keyup', () => {
    clearTimeout(Timer);
    Timer = setTimeout(Search, Interval);
});
/*------------------------------------
    //End Search
------------------------------------*/