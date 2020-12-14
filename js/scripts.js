let list = $('#list');
//adding an EventListener for hitting Enter key to add new Items to the list
$('document').keydown(function(e) {
    if(e.which == 13) {
        e.preventDefault();
        newItem();
    }
});

function newItem() {
    //adding a new item to the list of items
    let input = $('#input');
    let value = input.val(); //assigns user input to the variable value
    let li = $('<li></li>'); //create new li-item
    //if the user input is not empty, adds li-item to the end of the list of items
    if (value == '') {
        alert('Empty tasks are prohibited');
    } else {
        li.append(value); //assign user input to the li-item
        list.append(li);
        input.val(''); //clears the input after adding an item
    }
    li.on('dblclick', function() {
        li.toggleClass('strike'); //toggles class .strike on clicked li-element
    });
    let delButton = $('<deleteButton></deleteButton>'); //create delete Button-Element
    delButton.append(document.createTextNode('X')); //append Text
    li.append(delButton);
    delButton.on('click', function() {
        li.addClass('delete');
    });
    list.sortable();
}
