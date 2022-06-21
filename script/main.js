

const shoppingCart = [
    "bread",
    "milk",
    "pasta",
    "biscuits",
    "fruits",
    "cornflakes"
];


let list = document.getElementById("shopping-list");

// for ( let i = 0; i < shoppingCart.length; i++) {
    
//     let item = shoppingCart[i];

//     let itemList = document.createElement("li");

//     itemList.innerHTML = item;

//     list.append(itemList);
// }

let index = 0;

while (index < shoppingCart.length) {

    let item = shoppingCart[index];
    let itemList = document.createElement("li");
    itemList.innerHTML = item;
    list.append(itemList);

    index++;
}
