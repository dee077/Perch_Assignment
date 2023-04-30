const priceList=document.querySelectorAll(".price");
priceList.forEach((item, i) => {
    let price=item.textContent;
    // console.log(i,price);
    if(price>=20 && price<100){
        price-=price*20/100;
        item.textContent=price;
    }
    else if(price>=100 && price<=499.99){
        price-=price*30/100;
        item.textContent=price;
    }
    else if(price>=500){
        price-=price*40/100;
        item.textContent=price;
    }
    // console.log(i,price);
});