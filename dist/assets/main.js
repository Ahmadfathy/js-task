(()=>{"use strict";let a=new XMLHttpRequest;a.open("get","./assets/product-list.json",!0),a.send(),a.onload=function(){if(4==this.readyState&&200==this.status){let a=JSON.parse(this.responseText),n="";for(let s of a)n+=`\n\n            <div class="product">\n                <div class="top_part">\n                    <div class="img_box">\n                        <a href="${s.absoluteUrl}">\n                            <img src="${s.mainImage}" alt="${s.title}">\n                        </a>\n                    </div>\n                    <span class="promotion_percentage\n                        ${"silver"===s.promotionPercentageColor?"silver":""}\n                        ${"gold"===s.promotionPercentageColor?"gold":""}\n                        ${"bronze"===s.promotionPercentageColor?"bronze":""}\n                    ">\n                        ${s.promotionPercentage}\n                    </span>\n\n                    <ul class="icons">\n                        <li>\n                            <a href="javascript:void(0)">\n                                ${!0===s.isFavorite?'<img src="./assets/images/icon_fav_2.png" alt=""/>':'<img src="./assets/images/icon_fav_1.png" alt=""/>'}\n                                \n                            </a>\n                        </li>\n                        <li>\n                            <a href="javascript:void(0)">\n                                <img src="./assets/images/icon_share.png" alt="">\n                            </a>\n                        </li>\n                        <li>\n                            <a href="javascript:void(0)">\n                                <img src="./assets/images/jp_icon.png" alt="">\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n                <div class="middle_part">\n                    <h5 class="product_title">\n                        <a href="${s.absoluteUrl}" title="${s.title}" alt="${s.title}">${s.title}</a>\n                    </h5>\n                    <div class="price_rate">\n                        <div class="price">\n                            <h5 class="main_price">${s.sellPrice}</h5>\n                            <span class="save_price">(Save ${s.priceSaved} EGP)</span>\n                        </div>\n                        <div class="rate">\n                            <span class="rate_score">\n                                <img src="./assets/images/icon_rate_star.png" alt="">\n                                <span class="rate_score_num">${s.rate}</span>\n                            </span>\n                            <span class="rate_total">(${s.rateCount})</span>\n                        </div>\n                    </div>\n                </div>\n                ${!0===s.enableAddToCart?'<a href="javascript:void(0)">Add To Cart</a>':'<a class="add_to_cart" href="javascript:void(0)" disabled>Not Available</a>'}\n            </div>\n            \n            `;document.getElementById("products").innerHTML=n}}})();