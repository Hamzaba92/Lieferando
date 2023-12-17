function generatePizzaMenuHTML(i, dish) {
  return /*html*/ `
      <div id="pizza_in_menu${i}" class="selected-pizza">
          <div>${dish.pizza_name}</div>
          <p>${dish.description}</p>
          <div class="space">
          <span>${dish.price.toString().replace('.', ',')} €</span>
          <img onclick="addToShoppingCart(${i})" src="./imgs/plusformenucard.png">
          </div>
      </div>
      `;
}

function generateFullShoppingCartContentHTML(i, cart) {
  // Da der vorhandene Container keine Höhe hat, wird er auch nicht angzeigt wenn der Volle Warenkorb angezeigt wird.
  // So kann man das mit dem Vollen und leeren Warenkorb lösen.
  return /*html*/ `
<div class="Shopping-Cart-Card">
<span>${cart.dish}</span>
<p>${cart.price.toFixed(2).replace('.', ',')} €</p>
<p>${cart.amount}<p> 
<div class="shopping-Cart-Card-row-plus-minus">
    <img onclick="increaseDishAmount(${i})" src="./imgs/plusforsidebar.png">
    <img onclick="reduceDishAmount(${i})" src="./imgs/minusforsidebar.png">
    <img onclick="removeFromCart(${i})" src="./imgs/trash.png">
</div>
</div>
`;
}


function generateInvoiceHTML() {
  return /*html*/ `
    <div id="order_section" class="order-section-style">
        <div class="subtotalstyle">
            <span>Zwischensumme:</span>
            <span id="subtotal"></span>
        </div>
        <div class="deliverstyle">
            <span>Lieferkosten:</span>
            <span id="delivery_costs"> €</span> 
        </div>
        <div class="totalstyle">
            <p>Total</p>
            <p id="total_price"></p>
        </div>
    </div>

    `;
}

function generatePayButton(sum){
  return /*html*/ `
      <div id="shopping_cart_button_wrapper" class="shopping-cart-button-wrapper">
        <div class="center-the-button">
          <button onclick="emptyTheOrder()" id="clickButton"><b>Bestellen<br></b> (${sum} €)</button>
        </div>
      </div>
  `;
}


function generateEmptyShoppingCartContentHTML() {
  return /* html */ `
      <div class="warenkorb">
        <img src="./imgs/shoppingcart.png"/>
      </div>
      <div class="warenkorb-text">
        <span>Shopping Cart</span>
        <p>Fülle deinen Warenkorb mit leckeren<br> Gerichten!</p>
      </div>
    `;
}



