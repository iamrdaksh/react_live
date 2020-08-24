import React from 'react';
import ContactList from './todolist';
import '../App.css';
import data from './data';
import Contact from './contact';

export default class Test extends React.Component {
    render() {
        const contactComponenet = data.map(item => {
            return <ContactList
                key={item.id} 
                Name={item.Name}
                imageURL={item.imageURL} 
                Phone={item.Phone}
                email={item.email} 
                checked={item.completed}
                text={item.text}
                value={item.gender}
                loginStatus={item.login}
                altText={item.altText}
            />
        }   


        );
        return (
            <div>
                {contactComponenet}
            </div>
        )

        // return (
        //     <div>
        //         <Contact/>
        //     </div>
        // )
    }

}