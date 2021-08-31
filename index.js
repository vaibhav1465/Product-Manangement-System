products=[];
function add(){
    product={};

    product.name=document.getElementById("name").value;
    product.price=document.getElementById("price").value;
    product.quantity=document.getElementById("quantity").value;
    products.push(product);
    console.log(products);
    document.getElementById("name").value="";
    document.getElementById("price").value="";
    document.getElementById("quantity").value="";
}