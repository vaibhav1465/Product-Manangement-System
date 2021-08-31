products=[
    {
        name:"Computer",
        price:14662,
        quantity:458
    
    },
    {
        name:"Mouse",
        price:146684,
        quantity:48
    }];
function add(){
    product={};

    product.name=document.getElementById("name").value;
    product.price=document.getElementById("price").value;
    product.quantity=document.getElementById("quantity").value;
    products.push(product);
    display();
    document.getElementById("name").value="";
    document.getElementById("price").value="";
    document.getElementById("quantity").value="";
}
function display(){
    productString=`
    <tr>
    <th>#</th>
    <th>Product Name</th>
    <th>Price</th>
    <th>Quantity</th>
</tr>`;
    for(let i=0;i<products.length;i++){
        productString+=`
        <tr>
        <td>${i+1}</td>
        <td>${products[i].name}</td>
         <td>${products[i].price}</td>
        <td>${products[i].quantity}</td>
        <td>
            <button class="btn">Update</button>
            <button class="btn">Delete</button>
        </td>
    </tr>
        `
    }
    document.getElementById("table").innerHTML=productString;
}