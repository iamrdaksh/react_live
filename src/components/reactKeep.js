import React, { Component } from 'react';
import styles from '../Mysass.module.scss';

class ReactKeep extends Component {

    mainHandler = () => {
        let title = document.getElementsByClassName('title_note');
    }

    render() {

        return (
            <div>
                <div className={styles.title_note} contentEditable="true" data-placeholder="Title" />
                <div className={styles.main_note} contentEditable="true" data-placeholder="Take a note..." onClick={this.mainHandler}/>
            </div>
        )
    }
}

export default ReactKeep;