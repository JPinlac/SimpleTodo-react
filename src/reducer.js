/**
 * Created by jpinlac on 1/17/17.
 */
import { combineReducers } from 'redux';

const todo = (state = [], action) => {

    switch (action.type) {
        case "ADD_TODO":
            return  [...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];

        // case "REMOVE_TODO":
        //     return [..

        case "TOGGLE_TODO":
            return Object.assign( {}, state, {
                todos: state.todos.map((todo, index) => {
                    if (index === action.index) {
                        return Object.assign( {}, todo, {
                            completed: !todo.completed
                        });
                    }
                    return todo;
                })
            });
        default:
            return state;
    }
}

let reducer = combineReducers({ todo });

export default reducer;