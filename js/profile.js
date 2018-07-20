const display = ()=>{
   var displayStyle = document.getElementById("displayitem")
   if (displayStyle.style.display == 'none'){
    displayStyle.style.display = 'block'
    addBook.style.display = 'none'
   }
   else{
    displayStyle.style.display = 'none'
   }
   
}

const displayAdd = ()=>{
    var addBook = document.getElementById("addBook")
    if (addBook.style.display == 'none'){
        addBook.style.display = 'block'
        displayStyle.style.display = 'none'
    }
    else{
        addBook.style.display = 'none'
    }
    
 }


