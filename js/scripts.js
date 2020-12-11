    let list = $('#list');

    function newItem() {
        let input = $('#input');
        let value = input.val();
        let li = $('<li></li>');

        li.append(value);
        list.append(li);

        //want to clear #input after adding the li-item to List

    }
