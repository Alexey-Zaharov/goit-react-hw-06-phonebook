import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

const App = () => {
  return (
    <>
      <h1>PhoneBook</h1>
      <ContactForm />
      <h1>Contacts</h1>
      <Filter />
      <ContactList />
    </>
  );
};

export default App;
