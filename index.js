const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit',addItem);
// Delete event
itemList.addEventListener('click',removeItem);
//Filter event
filter.addEventListener('keyup',filterItems);

//Add Item function
function addItem(e){
    e.preventDefault();
    //console.log(1);

    //Get Input value
    let newItem = document.getElementById('item').value;
    //Create new li item 
    let li = document.createElement('li');
    //Add Class to list 
    li.className = 'list-group-item';
    //console.log(li);

    //Add textNode with input value
    li.appendChild(document.createTextNode(newItem));

    //Create delete button
    let deleteBtn = document.createElement('button');
    //Add class to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-end delete';
    //Append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    
    //Append delete button to li
    li.appendChild(deleteBtn);

    //Append li to list
    itemList.appendChild(li);
}

// Delete Item function
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure')){
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }

}

// Filter items
function filterItems(e){
    //convert to lowertext
    let text = e.target.value.toLowerCase();
    //console.log(text);

    let items = itemList.getElementsByTagName('li');
    //console.log(items);

    //convert items to array
    Array.from(items).forEach((item) => {
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else {
            item.style.display = 'none';
        }
    });
}