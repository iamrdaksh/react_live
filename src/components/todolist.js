import React, { Component } from 'react';
import styles from '../Mysass.module.scss';
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
    searchHandler = (event) => {

        let value = event.target.value.toLowerCase();
        let li = document.querySelectorAll('.searchList li');
        for(let i = 0; i < li.length; i++){
            let itemValue = li[i].innerText
            if(itemValue.toLowerCase().indexOf(value) !== -1){
                li[i].style.display = 'list-item';
                
            } else {
                li[i].style.display = 'none';
            }
        }
    }
    render() {
        return (
            <div className={styles.todoContainer}>
                <h1>ToDo List</h1>
                <div className={styles.inputElement}>
                    <div>
                        <input type="text" placeholder="Add a Items" onChange={this.changeHandler} value={this.state.item} />
                    </div>
                    <div className={styles.plusIcon} onClick={this.clickHandler}>
                        <AddCircleOutlineIcon style={{ fontSize: 40 }} />
                    </div>
                </div>
                <ol className="searchList">
                    {
                        this.state.newList.map((itemValue, index) => {
                            return (
                                <li key={index} className={styles.alignment}>{itemValue}
                                    <div style={{ display: 'inline-block', marginLeft: '20px' }}>
                                        <DeleteIcon onClick={() => { this.deleteHandler(index) }} />
                                    </div>
                                </li>
                            )
                        })
                    }
                </ol>
                <div className={styles.search}>
                        <input type="text" placeholder="Search" onKeyUp={this.searchHandler}/>
                </div>
            </div>
        )
    }
}
export default TodoList;