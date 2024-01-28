class Product{ constructor(product, price, year){
    this.product=product,
    this.price=price,
    this.year=year
  }

}

class UI{

  addProduct(product){
    const productList = document.getElementById('product-list');
    const element = document.createElement('div');
    element.innerHTML=`
    <div class="card text-center mb-4">
      <div class="car-body">
        <strong>Product Name: ${product.product}</strong>
        <strong>Product Price: ${product.price}</strong>
        <strong>Product year: ${product.year}</strong>
        <a href="#" class="btn btn-danger" name="delete">Delete</a>
      </div>
    </div>
    `
    productList.appendChild(element)
  }

  resetForm(){
    document.getElementById('product-form').reset();
  }

  deleteProduct(element){
    if(element.name === 'delete'){
     element.parentElement.parentElement.parentElement.remove()
      this.showMessage('Product deleted succesfully', 'info')
    }
  }

  showMessage(message, cssClass){
    const div =document.createElement('div');
    div.className = `alert alert-${cssClass} mt-2`
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container')
    const app = document.querySelector('#App')
    container.insertBefore(div,app);
    setTimeout(function(){
      document.querySelector('.alert').remove();
    },2000)
  }
}

//DOM events

document.getElementById('product-form').addEventListener('submit',function(e){
   const name= document.getElementById('name').value
   const price = document.getElementById('price').value
   const year = document.getElementById('year').value

   const products = new Product(name,price,year);
   const ui = new UI();

   if(name === '' || price ==='' || year ==='') return ui.showMessage('Complete fields please','danger')

   ui.addProduct(products);
   ui.resetForm();
   ui.showMessage('Product added succesfully', 'success')

    e.preventDefault()
})

document.getElementById('product-list').addEventListener('click',function(e){
  const ui = new UI();
  ui.deleteProduct(e.target)
  console.log(e.target)
  
})