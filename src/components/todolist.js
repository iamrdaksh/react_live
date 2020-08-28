import React, { Component } from 'react';
import '../mysass.scss';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

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
        this.setState(prevState => ({
            newList: [...prevState.newList, this.state.item]
        }))
        this.setState({
            item: ''
        })
    }

    render() {
        return (
            <div className="todoContainer">
                <h1>ToDo List</h1>
                <div class="inputElement">
                    <div>
                        <input type="text" placeholder="Add a Items" onChange={this.changeHandler} value={this.state.item}/>
                    </div>
                    <div className="plusIcon" onClick={this.clickHandler}>
                        <AddCircleOutlineIcon style={{ fontSize: 40 }} />
                    </div>
                </div>
                <ol>
                    {
                        this.state.newList.map((itemValue,index) => {
                            return (
                                <li key={index}>{itemValue}</li>
                            )
                        })
                    }
                </ol>
            </div>
        )
    }
}
export default TodoList;