import React, { Component } from 'react';
import '../mysass.scss';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DeleteIcon from '@material-ui/icons/Delete';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: '',
            newList: []

        }
    }

    changeHandler = (event) => {
        this.setState({
            item: event.target.value
        })
    }
    clickHandler = () => {
        if (this.state.item) {
            this.setState(prevState => ({
                newList: [...prevState.newList, this.state.item]
            }))
        }
        this.setState({
            item: ''
        })
    }

    deleteHandler = (index) => {
        this.setState({
            newList: this.state.newList.filter((arrElem,i) => {
                return i !== index
            })
        })
    }

    render() {
        return (
            <div className="todoContainer">
                <h1>ToDo List</h1>
                <div className="inputElement">
                    <div>
                        <input type="text" placeholder="Add a Items" onChange={this.changeHandler} value={this.state.item} />
                    </div>
                    <div className="plusIcon" onClick={this.clickHandler}>
                        <AddCircleOutlineIcon style={{ fontSize: 40 }} />
                    </div>
                </div>
                <ol>
                    {
                        this.state.newList.map((itemValue, index) => {
                            return (
                                <li key={index} className="alignment">{itemValue}
                                    <div style={{ display: 'inline-block', marginLeft: '20px' }}>
                                        <DeleteIcon onClick={() => { this.deleteHandler(index) }} />
                                    </div>
                                </li>
                            )
                        })
                    }
                </ol>
            </div>
        )
    }
}
export default TodoList;