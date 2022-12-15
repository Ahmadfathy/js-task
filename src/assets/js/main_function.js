
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
                <div class="img">
                    <img src="${item.mainImage}" alt="${item.title}">
                </div>
                <div class="title">
                    <h3><a href="${item.absoluteUrl}">${item.title}</a></h3>
                </div>
                <p>${item.sellPrice}</p>
                <p>(${item.priceSaved})</p>
                <p style="color: aqua">
                    <span>${item.rate}</span>
                    <span>(${item.rateCount})</span>
                </p>

                <p>${item.isHasStock === true ? '<span style="color: green">In Stock</span>' : '<span style="color: red">Out Stock</span>'}</p>
                <p>${item.isFavorite === true ? '<span style="color: green">Favorite</span>' : '<span style="color: red">not isFavorite</span>'}</p>
                
                <p>
                    <span style=" color: white; background-color:
                        ${item.promotionPercentageColor === 'silver' ? 
                            'grey':
                            ''
                        }
                        ${item.promotionPercentageColor === 'gold' ? 
                            'blue' :
                            ''
                        }
                        ${item.promotionPercentageColor === 'bronze' ? 
                            'brown' :
                            ''
                        }
                    ">
                        ${item.promotionPercentage}

                    </span>
                </p>

                <p>
                    ${item.enableAddToCart === true ? 
                        '<a href="javascript:void(0)">Add To Cart</a>' :
                        '<a href="javascript:void(0)" disabled>Not Available</a>'
                    }
                </p>
                
            </div>
            
            `
        }

        document.querySelector('.products').innerHTML = output;

    }
}


