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
    
    display();
function add(){
    product={};

    product.name=document.getElementById("name").value;
    product.price=document.getElementById("price").value;
    product.quantity=document.getElementById("quantity").value;
    if(product.name!="" && product.price!=null && product.quantity!=null)
    {
    products.push(product);
    display();
    document.getElementById("name").value="";
    document.getElementById("price").value="";
    document.getElementById("quantity").value="";
   }
}
function display(){
    productString=`
    <tr>
    <th>#</th>
    <th>Product Name</th>
    <th>Price</th>
    <th>Quantity</th>
    <th>Operations</th>
</tr>`;
    for(let i=0;i<products.length;i++){
        productString+=`
        <tr>
        <td>${i+1}</td>
        <td>${products[i].name}</td>
         <td>${products[i].price}</td>
        <td>${products[i].quantity}</td>
        <td>
            <button class="btn" onclick="updateProduct(${i})">Update</button>
            <button class="btn" onclick="deleteProduct(${i})">Delete</button>
        </td>
    </tr>
        `
    }
    document.getElementById("table").innerHTML=productString;
}
deleteProduct=(index)=>{
    console.log("in func delete");
products.splice(index,1);
display();
}
updateIndex=null;
updateProduct=(index)=>{
    console.log("in update function")
    document.getElementById("updateform").style.display="flex";
    let product={};
    product=products[index];
    updateIndex=index;
    document.getElementById("upd-name").value=product.name;
    document.getElementById("upd-price").value=product.price;
    document.getElementById("upd-quantity").value=product.quantity;
    
}
updateInfo=()=>{
    let product={};
    product.name=document.getElementById("upd-name").value;;
    product.price=document.getElementById("upd-price").value;
    product.quantity=document.getElementById("upd-quantity").value;
    products[updateIndex]=product;
    display();
    document.getElementById("updateform").style.display="none";
}