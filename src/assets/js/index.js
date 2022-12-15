import './../scss/app.scss';

let http = new XMLHttpRequest();

http.open('get', './assets/product-list.json', true);

http.send();

http.onload = function() {
    if(this.readyState == 4 && this.status == 200){

        let products = JSON.parse(this.responseText);

        let output = '';

        for(let item of products){
            output += `

            <div class="product">
                <div class="top_part">
                    <div class="img_box">
                        <a href="${item.absoluteUrl}">
                            <img src="${item.mainImage}" alt="${item.title}">
                        </a>
                    </div>
                    <span class="promotion_percentage
                        ${item.promotionPercentageColor === 'silver' ? 
                            'silver':
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
                        ${item.promotionPercentage}
                    </span>

                    <ul class="icons">
                        <li>
                            <a href="javascript:void(0)">
                                ${item.isFavorite === true ? 
                                    '<img src="./assets/images/icon_fav_2.png" alt=""/>' :
                                    '<img src="./assets/images/icon_fav_1.png" alt=""/>'
                                }
                                
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)">
                                <img src="./assets/images/icon_share.png" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)">
                                <img src="./assets/images/jp_icon.png" alt="">
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="middle_part">
                    <h5 class="product_title">
                        <a href="${item.absoluteUrl}" title="${item.title}" alt="${item.title}">${item.title}</a>
                    </h5>
                    <div class="price_rate">
                        <div class="price">
                            <h5 class="main_price">${item.sellPrice}</h5>
                            <span class="save_price">(Save ${item.priceSaved} EGP)</span>
                        </div>
                        <div class="rate">
                            <span class="rate_score">
                                <img src="./assets/images/icon_rate_star.png" alt="">
                                <span class="rate_score_num">${item.rate}</span>
                            </span>
                            <span class="rate_total">(${item.rateCount})</span>
                        </div>
                    </div>
                </div>
                ${item.enableAddToCart === true ? 
                    '<a href="javascript:void(0)">Add To Cart</a>' :
                    '<a class="add_to_cart" href="javascript:void(0)" disabled>Not Available</a>'
                }
            </div>
            
            `
        }

        document.getElementById('products').innerHTML = output;

    }
}