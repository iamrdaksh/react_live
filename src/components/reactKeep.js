import React, { Component } from 'react';
import styles from '../Mysass.module.scss';

class ReactKeep extends Component {

    constructor() {
        super();
        this.state = {
            titleNoteBox: '',
            mainNoteBox: ''
        }
    }

    addKeep = () => {
        let titleValue = document.getElementById('titleID');
        let noteValue = document.getElementById('noteID');
        this.setState({
            titleNoteBox: titleValue.textContent,
            mainNoteBox: noteValue.textContent
        })
        titleValue.textContent = '';
        noteValue.textContent = ''
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
                        id="titleID" />

                    <div className={styles.main_note} contentEditable="true"
                        data-placeholder="Take a note..."
                        id="noteID" />

                    <input className={styles.addKeep} type="button" value="+" onClick={this.addKeep} />

                </div>
                <div className={styles.contentBox}>
                    <div className={styles.noteTitle} id="title-val">{this.state.titleNoteBox}</div>
                    <div className={styles.mainNote} id="main-note">{this.state.mainNoteBox}</div>
                    <input className={styles.removeKeep} type="button" value="-" />
                </div>
            </React.Fragment>
        )
    }
}

export default ReactKeep;