import { Component } from 'react';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { AppContainer } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (name, number, id) => {
    console.log(name, number, id);
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const findContact = this.state.contacts.find(contact =>
      contact.name.toLowerCase().includes(name.toLowerCase())
    );

    findContact
      ? alert(`${name} is already in contact`)
      : this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }));
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;

    const normalizeFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );

    return (
      <>
        <AppContainer>
          <h2>Phonebook</h2>

          <ContactForm onSubmit={this.addContact} />

          <h2>Contacts</h2>

          <Filter value={filter} onChange={this.changeFilter} />
          <ContactList
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          />
        </AppContainer>
      </>
    );
  }
}
