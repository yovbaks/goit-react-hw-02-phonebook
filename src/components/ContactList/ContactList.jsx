import { Item,Contact,Button } from "./ContactList.styled";
const ContactList = ({ contacts,onDeleteContact }) => (
   
    <ul >
        {contacts.map(({ id, name, number }) => {
            return(<Item key={id}>
                <Contact>{name} : {number}</Contact>
                <Button onClick={() => onDeleteContact(id)}>X</Button>
            </Item>)
        })}
            
        </ul>
    
)
    
    


export default ContactList;
