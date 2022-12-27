import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container } from './Container/Container';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

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
  // Добавляем новый контакт в список контактов
  addContact = obj => {
    const newUser = {
      id: nanoid(),
      ...obj,
    };
    this.setState(prevSate => ({
      contacts: [...prevSate.contacts, newUser],
    }));
  };

  // Удаляет контакт из списка
  handleDeleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };
  // Controlled Input Filter
  handleInputValue = e => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  // Функция поиска контакта (не работает)

  handleFindeContact = e => {
    this.setState(prevSate => {
      return {
        contacts: prevSate.contacts.filter(contact =>
          contact.name.toLowerCase().includes(e.target.value.toLowerCase())
        ),
      };
    });
  };

  // Рендер всех элементов

  render() {
    const { filter, contacts } = this.state;
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm addUser={this.addContact} />
        <Filter handleInputValue={this.handleInputValue} filterValue={filter} />
        <h2>Contacts</h2>
        <ContactList
          contacts={contacts}
          deleteContact={this.handleDeleteContact}
        />
      </Container>
    );
  }
}
