function generateDefaultProductHTML() {
    // const discount = product.discount ? Math.floor(product.discount * 100) + '%' : '10%';
    // const discountedPrice = product.discount ? product.price * (1 - product.discount) : product.price;
    // const imageSrc = product.image ? `data:image/${product.image.type};base64,${product.image.data}`: 'sofa.png';
    // const imageSrc = product.image ? `${product.image.src}`: 'sofa.png';
  
    return `
        <div class="row">
            <div class="column" id="column-1">
                <div class="card-1">
                    <div class="product-container" id="sylthe">
                        <img class="product-image" src="syltherine.png" alt="Sylthe">
                        <span class="sale">
                            <p>-30%</p>
                        </span>
                        <h3 class="product-name">Syltherine</h3>
                        <p class="product-description">Stylish cafe chair</p>
                        <h4 class="product-price">Rp 2.500.000</h4>
                        <p class="product-old-price"><del>Rp 3.000.000</del></p>
                        <div class="add-to-cart">
                            <button>Add to cart</button>
                            <br>
                            <ul>
                                <li><i class='bx bx-share-alt' ></i></i>Share</li>
                                <li><i class='bx bx-git-compare'></i>Compare</li>
                                <li><i class='bx bx-heart'></i>Like</li>
                            </ul>
                            <br>
                        </div>
                    </div>
                </div>
                <div class="card-2">
                    <div class="product-container" id="leviosa">
                        <img class="product-image" src="leviosa.png" alt="Leviosa">
                        <span class="sale">
                            <p>-0%</p>
                        </span> 
                        <h3 class="product-name">Leviosa</h3>
                        <p class="product-description">Stylish cafe chair</p>
                        <h4 class="product-price">Rp 2.500.000</h4>
                        <p class="product-old-price"><del></del></p>
                        <div class="add-to-cart">
                            <button>Add to cart</button>
                            <br>
                            <ul>
                                <li><i class='bx bx-share-alt' ></i></i>Share</li>
                                <li><i class='bx bx-git-compare'></i>Compare</li>
                                <li><i class='bx bx-heart'></i>Like</li>
                            </ul>
                            <br>
                        </div>
                    </div>
                </div>
                <div class="card-3">
                    <div class="product-container" id="lolito">
                        <img class="product-image" src="sofa.png" alt="Lolito">
                        <span class="sale">
                            <p>-50%</p>
                        </span>
                        <h3 class="product-name">Lolito</h3>
                        <p class="product-description">Luxury big sofa</p>
                        <h4 class="product-price">Rp 7.000.000</h4>
                        <p class="product-old-price"><del>Rp 14.000.000</del></p>
                        <div class="add-to-cart">
                            <button>Add to cart</button>
                            <br>
                            <ul>
                                <li><i class='bx bx-share-alt' ></i></i>Share</li>
                                <li><i class='bx bx-git-compare'></i>Compare</li>
                                <li><i class='bx bx-heart'></i>Like</li>
                            </ul>
                            <br>
                        </div>
                    </div>
                </div> 
                <div class="card-4">         
                    <div class="product-container" id="zephyr">
                        <img class="product-image" src="zephyr.png" alt="Zephyr">
                        <span class="sale">
                            <p>New</p>
                        </span> 
                        <h3 class="product-name">Respira</h3>
                        <p class="product-description">Outdoor bar table and stool</p>
                        <h4 class="product-price">Rp 500.000</h4>
                        <p class="product-old-price"><del></del></p>
                        <div class="add-to-cart">
                            <button>Add to cart</button>
                            <br>
                            <ul>
                                <li><i class='bx bx-share-alt' ></i></i>Share</li>
                                <li><i class='bx bx-git-compare'></i>Compare</li>
                                <li><i class='bx bx-heart'></i>Like</li>
                            </ul>
                            <br>
                        </div>
                    </div>
                </div>
                <div class="card-5">         
                    <div class="product-container" id="grifo">
                        <img class="product-image" src="grifo.png" alt="Grifo">
                        <span class="sale">
                            <p>-0%</p>
                        </span> 
                        <h3 class="product-name">Grifo</h3>
                        <p class="product-description">Night lamp</p>
                        <h4 class="product-price">Rp 1.500.000</h4>
                        <p class="product-old-price"><del></del></p>
                        <div class="add-to-cart">
                            <button>Add to cart</button>
                            <br>
                            <ul>
                                <li><i class='bx bx-share-alt' ></i></i>Share</li>
                                <li><i class='bx bx-git-compare'></i>Compare</li>
                                <li><i class='bx bx-heart'></i>Like</li>
                            </ul>
                            <br>
                        </div>
                    </div>
                </div>
                <br>
                <div class="card-6">         
                    <div class="product-container" id="muggo">
                        <img class="product-image" src="muggo.png" alt="Muggo">
                        <span class="sale">
                            <p>-0%</p>
                        </span> 
                        <h3 class="product-name">Muggo</h3>
                        <p class="product-description">Small mug</p>
                        <h4 class="product-price">Rp 150.000</h4>
                        <p class="product-old-price"><del></del></p>
                        <div class="add-to-cart">
                            <button>Add to cart</button>
                            <br>
                            <ul>
                                <li><i class='bx bx-share-alt' ></i></i>Share</li>
                                <li><i class='bx bx-git-compare'></i>Compare</li>
                                <li><i class='bx bx-heart'></i>Like</li>
                            </ul>
                            <br>
                        </div>
                    </div>
                </div>
                <br>
                <div class="card-7">         
                    <div class="product-container" id="pingky">
                        <img class="product-image" src="pingky.png" alt="Pingky">
                        <span class="sale">
                            <p>-50%</p>
                        </span> 
                        <h3 class="product-name">Pingky</h3>
                        <p class="product-description">Cute bed set</p>
                        <h4 class="product-price">Rp 7.000.000</h4>
                        <p class="product-old-price"><del>Rp 14.000.000</del></p>
                        <div class="add-to-cart">
                            <button>Add to cart</button>
                            <br>
                            <ul>
                                <li><i class='bx bx-share-alt' ></i></i>Share</li>
                                <li><i class='bx bx-git-compare'></i>Compare</li>
                                <li><i class='bx bx-heart'></i>Like</li>
                            </ul>
                            <br>
                        </div>
                    </div>
                </div>
                <div class="card-8">         
                    <div class="product-container" id="potty">
                        <img class="product-image" src="potty.png" alt="Potty">
                        <span class="sale">
                            <p>-0%</p>
                        </span> 
                        <h3 class="product-name">Potty</h3>
                        <p class="product-description">Minimalist flower pot</p>
                        <h4 class="product-price">Rp 500.000</h4>
                        <p class="product-old-price"><del></del></p>
                        <div class="add-to-cart">
                            <button>Add to cart</button>
                            <br>
                            <ul>
                                <li><i class='bx bx-share-alt' ></i></i>Share</li>
                                <li><i class='bx bx-git-compare'></i>Compare</li>
                                <li><i class='bx bx-heart'></i>Like</li>
                            </ul>
                            <br>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function generateProductHTML(product) {
    // const discount = product.discount ? Math.floor(product.discount * 100) + '%' : '10%';
    // const discountedPrice = product.discount ? product.price * (1 - product.discount) : product.price;
    // const imageSrc = product.image ? `data:image/${product.image.type};base64,${product.image.data}`: 'sofa.png';
    // const imageSrc = product.image ? `${product.image.src}`: 'sofa.png';

    return `
        <div class="card-${product.id}">
             <div class="product-container" id="sylthe">
                 <img class="product-image" src="${product.image_src}" alt="Sylthe">
                 <span class="sale">
                     <p>-30%</p>
                 </span>
                 <h3 class="product-name">${product.name}</h3>
                 <p class="product-description">${product.desc} cafe chair</p>
                 <h4 class="product-price">Rp ${product.price}</h4>
                 <p class="product-old-price"><del>Rp ${product.old_price}</del></p>
                 <div class="add-to-cart">
                     <button>Add to cart</button>
                     <br>
                     <ul>
                         <li><i class='bx bx-share-alt' ></i></i>Share</li>
                         <li><i class='bx bx-git-compare'></i>Compare</li>
                         <li><i class='bx bx-heart'></i>Like</li>
                     </ul>
                     <br>
                 </div>
             </div>
         </div>
    `
    ;
}

function onProductsPerPage(val) {
    console.log('M> onProductsPerPage> ', val);
    let productList = [
        {
            id: 1,
            name: 'Syltherine',
            desc: 'Stylish cafe chair',
            unit_price: 'Rp',
            //discount: '',
            price: '2.500.000',
            old_price: '3.000.000',
            image_src: 'syltherine.png'
        },
        {
            id: 2,
            name: 'Leviosa',
            desc: 'Stylish cafe chair',
            unit_price: 'Rp',
            discount: '',
            price: 'Rp 2.500.000',
            old_price: '',
            image_src: 'leviosa.png'
        },
        {
            id: 3,
            name: 'Lolito',
            desc: 'Luxury big sofa',
            unit_price: 'Rp',
            discount: '',
            price: '7.000.000',
            old_price: '14.000.000',
            image_src: 'sofa.png'
        },
        {
            id: 4,
            name: 'Respira',
            desc: 'Outdoor bar table and stool',
            unit_price: 'Rp',
            discount: '',
            price: '500.000',
            old_price: "",
            image_src: 'zephyr.png'
        },
        {
            id: 5,
            name: 'Grifo',
            desc: 'Night lamp',
            unit_price: 'Rp',
            discount: '',
            price: '1.500.000',
            old_price: '',
            image_src: 'grifo.png'
        },
        {
            id: 6,
            name: 'Muggo',
            desc: 'Small mug',
            unit_price: 'Rp',
            discount: '',
            price: '150.000',
            old_price: "",
            image_src: 'muggo.png'
        },
        {
            id: 7,
            name: 'Pingky',
            desc: 'Cute bed set',
            unit_price: 'Rp',
            discount: '',
            price: '7.000.000',
            old_price: '14.000.000',
            image_src: 'pingky.png'
        },
        {
            id: 8,
            name: 'Potty',
            desc: 'Minimalist flower pot',
            unit_price: 'Rp',
            discount: '',
            price: '500.000',
            old_price: '',
            image_src: 'potty.png'
        }
    ];
    let productTotalShown = val > 16? 16 : val;
    let rewise = productTotalShown - productList.length;

    let productListHtml = '';
    if (rewise < 0) {
        for (let i = 0; i < productTotalShown; i++ ) {
            productListHtml += generateProductHTML(productList[i]);
        }
    } else {
        for (let i = 0; i < productList.length; i++ ) {
            productListHtml += generateProductHTML(productList[i]);
        }
        for (let i = 0; i < rewise; i++ ) {
            productListHtml += generateProductHTML(productList[i]);
        }
    }
    

    let htmlCode = ` 
        <div class="row">
            <div class="column" id="column-1">
                ${productListHtml}
            </div>
        </div>
    `;

    // let id = 'productList';
    //$(`{id}`)
    $('#productList').html(htmlCode);
}