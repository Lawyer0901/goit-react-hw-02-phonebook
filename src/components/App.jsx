import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Button } from './Button/Button';
import { Container } from './Container/Container';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };
  // Добавляем новый контакт в список контактов (нет ресета формы!!)
  addContact = e => {
    console.log(e.target.value);
    e.preventDefault();

    const newUser = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
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

  // Добавляет данные в список контактов имя и телефон
  handleChangeName = e => {
    const { name, value } = e.target;
    console.log(value);
    if (value === null) {
      return;
    } else {
      this.setState({ [name]: value });
    }
  };

  // Функция поиска контакта (не работает)

  handleFindeContact = e => {
    const { value } = e.target;
    this.setState({ filter: value });
  };
  // Рендер всех элементов

  render() {
    const { name, number, filter } = this.state;
    return (
      <Container>
        <div>
          <h1>Phonebook</h1>
          <form action="" onSubmit={this.addContact}>
            <label htmlFor="">
              Name
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={this.handleChangeName}
                value={name}
              />
            </label>
            <label htmlFor="">
              Number
              <input
                type="tel"
                name="number"
                value={number}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={this.handleChangeName}
              />
            </label>

            <button>Add Contact</button>
            <label htmlFor="">
              Finde Contact by Name
              <input
                type="text"
                name="filter"
                onChange={this.handleFindeContact}
                value={filter}
              />
            </label>
          </form>
          <h2>Contacts</h2>
          <ul>
            {this.state.contacts.map(contact => (
              <li key={contact.id}>
                <p>
                  {contact.name}
                  <span>{contact.number}</span>
                </p>
                <Button
                  id={contact.id}
                  text="Delete Contact"
                  deleteContact={this.handleDeleteContact}
                />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    );
  }
}
