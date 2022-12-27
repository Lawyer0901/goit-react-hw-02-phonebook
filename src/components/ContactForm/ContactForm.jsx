import { Component } from 'react';
// import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChangeName = e => {
    const { name, value } = e.target;
    if (value === null) {
      return;
    } else {
      this.setState({ [name]: value });
    }
  };

  hendleSubmit = e => {
    // console.log(e.target.value);
    e.preventDefault();
    const { addUser } = this.props;
    addUser({ ...this.state });
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form action="" onSubmit={this.hendleSubmit}>
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
      </form>
    );
  }
}
