let todos = ['Laundry', 'Dishes', 'Clean Desk', 'Sweep Floor'];

function markAsDone(todos) {
    while (todos < 5){
    todos ++;
    todos[i] = 'done - ' + todos[i];
 }
 return todos;
}

document.getElementById('result').innerHTML = markAsDone(todos);
