import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

class ReactKeep extends Component{
    render(){
        return(
            <div className="main_note">
                <form>
                    <input type="text" placeholder="Title" />
                    <textarea row="" column="" placeholder="Write a note..."></textarea>
                    <Button>
                        <AddIcon className="plus_sign" />
                    </Button>
                </form>
            </div>
        )
    }
}

export default ReactKeep;