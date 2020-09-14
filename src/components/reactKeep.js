import React, { Component } from 'react';
import styles from '../Mysass.module.scss';

class ReactKeep extends Component {

    constructor(){
        super();
        this.state = {
            titleNoteBox: '',
            mainNoteBox: ''
        }
    }

    titleHandler = (e) => {
        console.log(e);
    }

    mainHandler = () => {
        console.log('Rahul')
        // let title = document.getElementsByClassName('title_note');
    }

    render() {

        return (
            <React.Fragment>
                <div className={styles.keepBox}>
                    <div className={styles.title_note} contentEditable="true" 
                    data-placeholder="Title"
                    value={this.state.titleNoteBox}
                    onKeyUp={this.titleHandler()}/>
                    
                    <div className={styles.main_note} contentEditable="true" data-placeholder="Take a note..." onChange={this.mainHandler} />
                    <input className={styles.addKeep} type="button" value="+" onMouseEnter={this.addKeep}/>
                </div>
                <div className={styles.contentBox}>
                    <div className={styles.noteTitle} id="title-val">Title Name</div>
                    <div className={styles.mainNote} id="main-note">Title Content ......</div>
                    <input className={styles.removeKeep} type="button" value="-" />
                </div>
            </React.Fragment>
        )
    }
}

export default ReactKeep;