import React from 'react';
import axios from 'axios';

class GetList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            errMessage: ''
        }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response);
                this.setState({ posts: response.data })
            })
            .catch(error => {
                console.log(error);
                this.setState({errMessage: 'Error in retrieving the data'})
            })
    }
    render() {
        const { posts, errMessage } = this.state;
        return (
            <div style={{ textAlign: 'center' }}>
                List of Posts
                {
                    posts.length ?
                    posts.map(post => <div key={post.id}>{post.title}</div>) : null
                }
                {
                    errMessage ? <div>{errMessage}</div> : null
                }
            </div>
        ) 
    }
}

export default GetList;