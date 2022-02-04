/* Calculate the total cost of the products in a shopping cart                                                              
 */

const shopping=[

    {
        name:"ti shirt",
        quantity:4,
        price:450
    },
    {
        name:"Panjabi ",
        quantity:2,
        price:1500
    },
    {
        name:"Topi Cap",
        quantity:4,
        price:450
    },
    {
        name:"ti shirt",
        quantity:4,
        price:450
    }
];


function totalExpenses(product){

    let totalPrice=0;
    

    for(let products of product){
       let price=products.price*products.quantity;
        totalPrice+=price;
    }
    
    return totalPrice;
}

console.log(totalExpenses(shopping));