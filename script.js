function init() {
  renderMenu();
  renderShoppingCartContent();
}

loadLocalStorage();

function renderMenu() {
  let pizzaMenu = document.getElementById('pizza_menu');
  pizzaMenu.innerHTML = '';
  for (let i = 0; i < dishes.length; i++) {
    const dish = dishes[i];
    pizzaMenu.innerHTML += generatePizzaMenuHTML(i, dish);
  }
}

function addToShoppingCart(i) {
  let selectedDish = {
    dish: dishes[i].pizza_name,
    price: dishes[i].price,
    amount: 1,
  };

  let j = shoppingCart.findIndex(function (item) {
    return item.dish === selectedDish.dish;
  });

  if (j === -1) {
    //Wenn j -1 ist, dann bedeuted es, dass das gericht nicht im Warenkorb ist.
    shoppingCart.push(selectedDish); //Dann muss es hinzugefügt werden.
  } else {
    shoppingCart[j].amount++; //Und wenn es vorhanden ist, dann muss der Amount um 1 erhöht werden
    shoppingCart[j].price = dishes[i].price * shoppingCart[j].amount;
  }
  renderShoppingCartContent();
}

function renderShoppingCartContent() {
  const emptyShoppingCart = document.getElementById('empty_shopping_cart_content');
  const shoppingCartContent = document.getElementById('shopping_cart_content');
  emptyShoppingCart.innerHTML = '';
  shoppingCartContent.innerHTML = '';
  if (shoppingCart.length < 1) {
    // wenn shoppingCart kleiner als 1 ist. 
    emptyShoppingCart.innerHTML = generateEmptyShoppingCartContentHTML(); //Wenn der ShoppingCart leer ist, dann wird dieses Template ausgeführt, was dem Einkaufswagen mit text entspricht
  } else {
    for (let i = 0; i < shoppingCart.length; i++) {
      const cart = shoppingCart[i];
      shoppingCartContent.innerHTML += generateFullShoppingCartContentHTML(i, cart);
    }
    shoppingCartContent.innerHTML += generateInvoiceHTML();
    calculatePrices();
    generatePayButton();
  }
  saveLocalStorage();
}


function increaseDishAmount(i) {
  let dishAmount = shoppingCart[i].amount;
  let dishIndex = dishes.findIndex(function (item) {
    return item.dish === shoppingCart[i].dishes;
  });
  dishAmount++;
  shoppingCart[i].amount = dishAmount;
  shoppingCart[i].price = dishes[dishIndex].price * dishAmount;

  renderShoppingCartContent();
  saveLocalStorage();
}

function reduceDishAmount(i) {
  let dishAmount = shoppingCart[i].amount;

  let dishIndex = dishes.findIndex(function (item) {
    return item.dish === shoppingCart[i].dishes;
  });

  if (dishAmount > 1) {
    dishAmount--;
    shoppingCart[i].amount = dishAmount;
    shoppingCart[i].price = dishes[dishIndex].price * dishAmount;
  } else if (dishAmount <= 1) {
    shoppingCart.splice(i, 1);
  }
  renderShoppingCartContent();
  saveLocalStorage();
}

function removeFromCart(i) {
  shoppingCart.splice(i, 1);
  renderShoppingCartContent();
  saveLocalStorage();
}

//*Calculate_Subtotal&DeliveryCosts_Total____________________________________________________________________________

function calculateSubTotal() {
  let subTotal = 0;
  for (let i = 0; i < shoppingCart.length; i++) {
    subTotal += shoppingCart[i].price;
  }
  return subTotal;
  
}

function updateUserInterface(deliveryCosts, subTotal, sum) {
  let deliveryContainer = document.getElementById('delivery_costs');
  let subTotalContainer = document.getElementById('subtotal');
  let totalContainer = document.getElementById('total_price');
  let payButtonContainer = document.getElementById('shopping_cart_button_wrapper');

  

  deliveryContainer.innerHTML = deliveryCosts.toFixed(2).replace('.', ',') + " €";
  subTotalContainer.innerHTML = subTotal.toFixed(2).replace('.', ',') + " €";
  totalContainer.innerHTML = sum.toFixed(2).replace('.', ',') + " €";
  payButtonContainer.innerHTML = generatePayButton(sum.toFixed(2).replace('.', ','));
  saveLocalStorage();
}

function calculatePrices() {
  let subTotal = calculateSubTotal();
  let deliveryCosts = DELIVERY_COSTS;
  let sum = subTotal + deliveryCosts;

  updateUserInterface(deliveryCosts, subTotal, sum);
  saveLocalStorage();
}

function emptyTheOrder() {
  localStorage.removeItem('ShoppingContent');
  alert('"Danke, dass Sie bei TastyWave Delivery bestellt haben."');
  location.reload();
}



//*Localstorage______________________________________________*//

function saveLocalStorage() {
  let ShoppingCartContentAsText = JSON.stringify(shoppingCart);

  localStorage.setItem('ShoppingContent', ShoppingCartContentAsText);
}

function loadLocalStorage() {
  let ShoppingCartContentAsText = localStorage.getItem('ShoppingContent');

  if (ShoppingCartContentAsText) {
    shoppingCart = JSON.parse(ShoppingCartContentAsText);
  } else{
    shoppingCart = [];
  }
}