import React, {Component} from 'react';

class Images extends Component{
    render(){
        return(
            <img src={this.props.imageURL} alt={this.props.altText} />
        )
    }
}

export default Images;