let todos = ['Laundry', 'Dishes', 'Clean Desk', 'Sweep Floor'];

function markAsDone(todos) {
    let i = 0;
    while (i < todos.length){
    todos[i] = "done - " + todos[i];
    i++;
    }
    return todos;
}

document.getElementById('result').innerHTML = markAsDone(todos).join('<br>');
