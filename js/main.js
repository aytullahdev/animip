const products = [
    {
        id:1,
        price:300
    },
    {
        id:2,
        price:200
    },
    {
        id:3,
        price:240
    },
    {
        id:4,
        price:500
    },
    {
        id:5,
        price:100
    },
    {
        id:6,
        price:50
    },
    {
        id:7,
        price:30,
    }
]
// Product Calculation
let productPrice=0;
let totalItems =0;
let TotalTax = 0;
let TotalSippingcost = 0;
let TotalDilevarycost = 0;
let TotalPrice = 0;
let TotalPriceWithTax =0;

const resetValues = ()=>{
         productPrice=0;
     totalItems =0;
     TotalTax = 0;
     TotalSippingcost = 0;
     TotalDilevarycost = 0;
     TotalPrice = 0;
     TotalPriceWithTax =0;

}
let getDelevary=(price)=>{
    if(price<500) return 0;
    if(price>=500 && price<800) return 100;
    if(price>=800 && price<1000) return 150;
    else return 200;
}
const showChartData = ()=>{
    document.getElementById('totalItems').innerHTML = totalItems;
    document.getElementById('productPrice').innerHTML=productPrice.toFixed(0);
    document.getElementById('shipingcost').innerHTML=TotalSippingcost.toFixed(0);
    document.getElementById('deliverycost').innerHTML=TotalDilevarycost.toFixed(0);
    document.getElementById('totalPrice').innerHTML = TotalPrice.toFixed(2);
    document.getElementById('tax').innerHTML = TotalTax.toFixed(0);
    document.getElementById('totalPriceWithtax').innerHTML =  TotalPriceWithTax.toFixed(0);
    document.getElementById('chartIndicate').innerHTML = totalItems;
   
}
let addTochart = (id)=>{
    products.map((e)=>{
        if(e.id===id){
            productPrice+=parseFloat(e.price);
            totalItems++;
           
           
            TotalSippingcost = getDelevary(productPrice);
          
            TotalDilevarycost = getDelevary(productPrice);
            
            TotalPrice = productPrice+TotalDilevarycost+TotalSippingcost;
            
            TotalTax = TotalPrice*0.15;
           
            TotalPriceWithTax = TotalTax + TotalPrice;
            showChartData();
            return;
        }
    })
   
   
}


//ORder btn
document.getElementById('orderbtn').addEventListener('click',()=>{
    if(totalItems===0){
        alert('Please select Some items');
        return;
    }
    alert(`Total Price is ${TotalPriceWithTax}`);
    resetValues();
    showChartData();
})
document.getElementById('cart').addEventListener("click",()=>{
    document.getElementById('chart').classList.toggle('slideRight')
})