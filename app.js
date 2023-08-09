var add = document.getElementById('addToDo');
var input = document.getElementById('inputField');
var toDoContainer = document.getElementById('toDoContainer');

add.addEventListener('click',addItem);
input.addEventListener('keypress',function(e){
    if(e.key=="Enter"){
        addItem();
    }
});
function addItem(e){
  
  const item_value  = input.value;
  const item = document.createElement('div');
		item.classList.add('item');

		const item_content = document.createElement('div');
		item_content.classList.add('content');

		item.appendChild(item_content);

		const input_item = document.createElement('input');
		input_item.classList.add('text');
		input_item.type = 'text';
		input_item.style.color='white'
		input_item.style.height = '50px'
		input_item.style.borderRadius='20px'
		input_item.style.textAlign='center'
		input_item.style.backgroundColor = 'red'
		input_item.value = item_value;
		input_item.setAttribute('readonly', 'readonly');
        input_item.addEventListener('dblclick', function(){
            input_item.style.textDecoration = "line-through";
        })
		item_content.appendChild(input_item);

		const item_action = document.createElement('div');
		item_action.classList.add('actions');
		
		const todo_item = document.createElement('button');
		todo_item.classList.add('ToDo','btn','btn-danger');
		todo_item.type="button";
		todo_item.innerText = 'ToDo';

		const doing_item = document.createElement('button');
		doing_item.classList.add('Doing','btn','btn-warning');
		doing_item.type="button";
		doing_item.innerText = 'Doing';

		const done_item = document.createElement('button');
		done_item.classList.add('done','btn','btn-success');
		done_item.type="button";
		done_item.innerText = 'Done';


		item_action.appendChild(todo_item);
		item_action.appendChild(doing_item);
		item_action.appendChild(done_item);

		item.appendChild(item_action);

		toDoContainer.appendChild(item);

		input.value = '';

		todo_item.addEventListener('click', (e) => {
			if (todo_item.innerText.toLowerCase() == "todo") {
				input_item.style.backgroundColor = 'red'
			}
		});

    	doing_item.addEventListener('click', (e) => {
			if (doing_item.innerText.toLowerCase() == "doing") {
				input_item.style.backgroundColor = 'orange'
			}
		});

		done_item.addEventListener('click', (e) => {
			if (done_item.innerText.toLowerCase() == "done") {
				input_item.style.backgroundColor = 'green'
			}
		});
}
