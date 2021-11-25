import React, {useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import AddContact from './components/AddContact/AddContact';
import ContactList from './components/ContactList/ContactList';
import EditModal from './components/EditModal/EditModal';

const App = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [contacts, setContacts] = useState([])
  const [contactToEdit, setContactToEdit] = useState(null)

  function getContactToEdit(item){
    setContactToEdit(item)
    handleShow()
  }

  function updateContact(){
    let arr = contacts.map((item) => {
      if(item.id !== contactToEdit.id){
        return item
      }else{
        return contactToEdit
      }
    })
    setContacts(arr)
    handleClose()
    // console.log(arr);
  }

  function addContact (contact){
    setContacts([...contacts, contact])
  }

  function deleteContact (id){
    let filteredContacts = contacts.filter((item) => item.id !== id)
    setContacts(filteredContacts)
  }

  return (
    <div className="text-center">
      <h1>ContactBook</h1>
      <AddContact addContact={addContact} />
      <ContactList contacts={contacts} deleteContact={deleteContact} getContactToEdit={getContactToEdit}/>
      {contactToEdit ? <EditModal updateContact={updateContact} contactToEdit={contactToEdit} show={show} handleClose={handleClose} setContactToEdit={setContactToEdit}/> : null}
    </div>
  );
};

export default App;