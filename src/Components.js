/**
 * Created by jpinlac on 1/18/17.
 */
import React, { PropTypes } from 'react';

const ToDo = ({ onClick, completed, text }) => (
    <li onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}>
        {text}
    </li>
)

ToDo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}
const ToDoList = ({ toDos, onTodoClick }) => (
    <ul>
        { toDos.map(toDo =>
            <ToDo key={toDo.id}
                  {...toDo}
                  onClick={ () => onTodoClick(toDo.id) }
            />
        )}
    </ul>
);

ToDoList.propTypes = {
    toDos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onTodoClick: PropTypes.func.isRequired
};

// const ToDoForm = () => (
//     <form onSubmit={this.props.onSubmit}>
//         <input type='text' value={this.state.value} onChange={this.handleChange} />
//         <input type='submit' value='submit' />
//     </form>
// )

export { ToDoList };