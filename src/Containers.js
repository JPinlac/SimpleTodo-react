/**
 * Created by jpinlac on 1/18/17.
 */
import React from 'react';
import store from './index';
import { addToDo } from './actions';

class AddToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    handleSubmit(event) {
        this.setState({ value: '' });
        store.dispatch(addToDo(this.state.value));
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' value={this.state.value} onChange={this.handleChange} />
                <input type='submit' value='submit' />
            </form>
        );
    }
}

export { AddToDo };
