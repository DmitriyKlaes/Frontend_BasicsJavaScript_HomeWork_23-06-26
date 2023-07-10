const productData =
    `[
        {
            "id": "cardId1",
            "productURL": "product.html",
            "hoverUrl": "img/hover_product.svg",
            "imgUrl": "img/product_1.svg",
            "heading": "ELLERY X M'O CAPSULE",
            "text": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            "price": "52.00",
            "color": "Red",
            "size": "XL",
            "quantity": 1
        },
        {
            "id": "cardId2",
            "productURL": "product.html",
            "hoverUrl": "img/hover_product.svg",
            "imgUrl": "img/product_2.svg",
            "heading": "ELLERY X M'O CAPSULE",
            "text": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            "price": "52.00",
            "color": "Red",
            "size": "XL",
            "quantity": 1
        },
        {
            "id": "cardId3",
            "productURL": "product.html",
            "hoverUrl": "img/hover_product.svg",
            "imgUrl": "img/product_3.svg",
            "heading": "ELLERY X M'O CAPSULE",
            "text": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            "price": "52.00",
            "color": "Red",
            "size": "XL",
            "quantity": 1
        },
        {
            "id": "cardId4",
            "productURL": "product.html",
            "hoverUrl": "img/hover_product.svg",
            "imgUrl": "img/product_4.svg",
            "heading": "ELLERY X M'O CAPSULE",
            "text": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            "price": "52.00",
            "color": "Red",
            "size": "XL",
            "quantity": 1
        },
        {
            "id": "cardId5",
            "productURL": "product.html",
            "hoverUrl": "img/hover_product.svg",
            "imgUrl": "img/product_5.svg",
            "heading": "ELLERY X M'O CAPSULE",
            "text": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            "price": "52.00",
            "color": "Red",
            "size": "XL",
            "quantity": 1
        },
        {
            "id": "cardId6",
            "productURL": "product.html",
            "hoverUrl": "img/hover_product.svg",
            "imgUrl": "img/product_6.svg",
            "heading": "ELLERY X M'O CAPSULE",
            "text": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            "price": "52.00",
            "color": "Red",
            "size": "XL",
            "quantity": 1
        }
    ]`;

const productBoxContent = document.querySelector('.product-box_content')
const parsedProducts = JSON.parse(productData);

parsedProducts.forEach(e => {

    const item = document.createElement('a');
    item.href = e.productURL;
    item.classList.add('product_item');

    const itemHover = document.createElement('img');
    itemHover.src = e.hoverUrl;
    itemHover.alt = 'hover';
    itemHover.setAttribute("data-id", e.id);
    itemHover.classList.add('product_item_hover_img');

    const itemImg = document.createElement('img');
    itemImg.src = e.imgUrl;
    itemImg.alt = 'product';
    itemImg.classList.add('product_item_img_main');

    const itemContent = document.createElement('div');
    itemContent.classList.add('product_item_content');

    const itemHeading = document.createElement('h3');
    itemHeading.textContent = e.heading;
    itemHeading.classList.add('product_item_heading');

    const itemText = document.createElement('p');
    itemText.textContent = e.text;
    itemText.classList.add('product_item_text');

    const itemPrice = document.createElement('p');
    itemPrice.textContent = `$${e.price}`;
    itemPrice.classList.add('product_item_price');

    itemContent.appendChild(itemHeading);
    itemContent.appendChild(itemText);
    itemContent.appendChild(itemPrice);
    item.appendChild(itemHover);
    item.appendChild(itemImg);
    item.appendChild(itemContent);
    productBoxContent.appendChild(item);
});

const cartItemsSection = document.createElement('section');
cartItemsSection.classList.add('cart-box_items', 'cart-box_main', 'cart-hide');
const sectionFeatures = document.querySelector('.feature');
sectionFeatures.insertAdjacentElement('afterend', cartItemsSection);

const cartItemsTitle = document.createElement('h3');
cartItemsTitle.classList.add('cart-box_head');
cartItemsTitle.textContent = 'Cart Items';
cartItemsSection.append(cartItemsTitle);

const cartItemsProduct = document.createElement('div')
cartItemsProduct.classList.add('.cart-box_item')
cartItemsSection.append(cartItemsProduct);


const cardLinkEl = document.querySelectorAll('.product_item_hover_img');
let cartItemsArray = [];

cardLinkEl.forEach(item => item.addEventListener('click', function (e) {
    e.preventDefault();
    parsedProducts.forEach(product => {
        if (product.id === e.target.dataset.id) {
            if (cartItemsArray.length === 0) {
                cartItemsSection.classList.remove('cart-hide');
                cartItemsArray.push(product);
                newMainCartElement(product, e.target.dataset.id);
            } else {
                cartItemsSection.classList.remove('cart-hide');
                let productInputChange = document.querySelector(`#${e.target.dataset.id}`);
                if (productInputChange) {
                    productInputChange.value = Number(productInputChange.value) + 1;
                } else {
                    newMainCartElement(product, e.target.dataset.id);
                    cartItemsArray.push(product);
                }
            }
        }
    });
    const exitCrosses = document.querySelectorAll('.cart-box_remove');
    exitCrosses.forEach(item => item.addEventListener('click', function (e) {
        e.target.closest('.cart-box_item').remove();
        for (let i = 0; i < cartItemsArray.length; i++) {
            if (e.target.id === cartItemsArray[i].id) {
                cartItemsArray.splice(i, 1);
                break;
            }
        }
        if (document.querySelector('.cart-box_items').childNodes.length === 2) {
            cartItemsSection.classList.add('cart-hide');
        };
    }));
}));


function newMainCartElement(product, id) {

    const item = document.createElement('section');
    item.classList.add('cart-box_item', 'main-size_cart-el');

    const itemLink = document.createElement('a');
    itemLink.href = '#';
    itemLink.classList.add('cart-box_link');

    const itemImg = document.createElement('img');
    itemImg.src = product.imgUrl;
    itemImg.alt = 'product';
    itemImg.classList.add('cart-box_image', 'main-size_img');
    itemLink.appendChild(itemImg);

    const itemData = document.createElement('section');
    itemData.classList.add('cart-box_data');

    const itemDesc = document.createElement('article');
    itemDesc.classList.add('cart-box_description');

    const itemDescH2 = document.createElement('h2');
    itemDescH2.textContent = product.heading;
    itemDescH2.classList.add('cart-box_title');
    itemDesc.appendChild(itemDescH2);

    const itemInfoPrice = document.createElement('article');
    itemInfoPrice.classList.add('cart-box_info');
    const itemInfoPriceText = document.createElement('p');
    itemInfoPriceText.textContent = 'Price:';
    itemInfoPriceText.classList.add('cart-box_info_text');
    const itemInfoPriceValue = document.createElement('p');
    itemInfoPriceValue.textContent = '$' + product.price;
    itemInfoPriceValue.classList.add('cart-box_info_text');
    itemInfoPrice.appendChild(itemInfoPriceText);
    itemInfoPrice.appendChild(itemInfoPriceValue);


    const itemInfoColor = document.createElement('article');
    itemInfoColor.classList.add('cart-box_info');
    const itemInfoColorText = document.createElement('p');
    itemInfoColorText.textContent = 'Color:';
    itemInfoColorText.classList.add('cart-box_info_text');
    const itemInfoColorValue = document.createElement('p');
    itemInfoColorValue.textContent = product.color;
    itemInfoColorValue.classList.add('cart-box_info_text');
    itemInfoColor.appendChild(itemInfoColorText);
    itemInfoColor.appendChild(itemInfoColorValue);

    const itemInfoSize = document.createElement('article');
    itemInfoSize.classList.add('cart-box_info');
    const itemInfoSizeText = document.createElement('p');
    itemInfoSizeText.textContent = 'Size:';
    itemInfoSizeText.classList.add('cart-box_info_text');
    const itemInfoSizeValue = document.createElement('p');
    itemInfoSizeValue.textContent = product.size;
    itemInfoSizeValue.classList.add('cart-box_info_text');
    itemInfoSize.appendChild(itemInfoSizeText);
    itemInfoSize.appendChild(itemInfoSizeValue);

    const itemInfoQuan = document.createElement('article');
    itemInfoQuan.classList.add('cart-box_info');
    const itemInfoQuanText = document.createElement('p');
    itemInfoQuanText.textContent = ' Quantity:';
    itemInfoQuanText.classList.add('cart-box_info_text');
    const itemInfoQuanValue = document.createElement('input');
    itemInfoQuanValue.value = product.quantity;
    itemInfoQuanValue.type = 'number';
    itemInfoQuanValue.setAttribute("id", id);
    itemInfoQuanValue.classList.add('cart-box_info_quantity');
    itemInfoQuan.appendChild(itemInfoQuanText);
    itemInfoQuan.appendChild(itemInfoQuanValue);

    const removeCross = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    removeCross.classList.add('cart-box_remove');
    removeCross.setAttribute("viewBox", "0 0 18 18");
    removeCross.setAttribute("width", "18");
    removeCross.setAttribute("height", "18");
    removeCross.setAttribute("fill", "none");
    removeCross.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    removeCross.setAttribute("id", id);

    const removeCrossPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    removeCrossPath.setAttribute("d", "M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z");
    removeCrossPath.setAttribute("fill", "#575757");

    itemDesc.appendChild(itemInfoPrice);
    itemDesc.appendChild(itemInfoColor);
    itemDesc.appendChild(itemInfoSize);
    itemDesc.appendChild(itemInfoQuan);

    itemData.appendChild(itemDesc);
    itemData.appendChild(removeCross);
    removeCross.appendChild(removeCrossPath);

    item.appendChild(itemLink);
    item.appendChild(itemData);

    cartItemsSection.appendChild(item);
};