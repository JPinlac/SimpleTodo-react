/**
 * Created by jpinlac on 1/19/17.
 */
let nextTodoId = 0;

const addToDo = (text) => ({
    type: "ADD_TODO",
    id: nextTodoId++,
    text
})

export { addToDo };
