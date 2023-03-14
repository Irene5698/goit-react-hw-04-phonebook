import {useEffect, useState} from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import css from 'components/App.module.css';

export const App = () => {
const [contacts, setContact] = useState(() => {
  const contacts = localStorage.getItem('contacts');
  const parseContacts = JSON.parse(contacts);
  if (parseContacts) {
    return parseContacts;
  } else {
    return [];
  }
});


const [filter, setFilter] = useState('');

useEffect(() => {
  localStorage.setItem('contacts', JSON.stringify(contacts));
}, [contacts]);


  const addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    if (
     contacts.some(
        current => current.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
    } else {
      setContact((prevContacts) => [contact, ...contacts]);
    }
  };

  const deleteContact = deleteId => {
    setContact((prevContacts) => prevContacts.filter(contact => contact.id !== deleteId));
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

 const getFiltredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };


    const filtredContacts = getFiltredContacts();
    return (
      <div className={css.componentsForm}>
        <h1 className={css.titlePhonebook}>Phonebook</h1>
        <ContactForm
          onSubmitForm={addContact}
          onRecepi={addContact}
        />
        <h2 className={css.titleContact}>Contact</h2>
        <Filter value={filter} onChange={changeFilter} />

        <ContactList contacts={filtredContacts} onDelete={deleteContact} />
      </div>
    );
  }

