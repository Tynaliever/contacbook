import React, {useState} from 'react';

const AddContact = ({addContact}) => {

    const [newContact, setNewContact] = useState({
        name: "",
        phone: "",
        image: ""
    })
    function handleValues (e){

        let contact = {
            ...newContact,
            [e.target.name]: e.target.value
        }

        setNewContact(contact)
    }

    function checkValues(){
        if(!newContact.name || !newContact.phone || !newContact.image){
          alert('Заполните поля')
          return
        }
        setNewContact({name:'', phone:'', image:''})
        // добовляем уникальную айдишку
        addContact({...newContact, id: Date.now()})
      }

    return (
        <div className="d-flex flex-column align-items-center mt-3 mb-3">
           
           <input
        value={newContact.name}
        onChange={handleValues}
        type="text"
        placeholder="Enter name"
        name="name"
        className="col-3 mb-1"
      />
      <input
        value={newContact.phone}
        onChange={handleValues}
        type="number"
        placeholder="Create number"
        name="phone"
        className="col-3 mb-1"
      />
      <input
        value={newContact.image}
        onChange={handleValues}
        type="text"
        placeholder="Image URL"
        name="image"
        className="col-3 mb-1"
      />

        <button onClick={() => checkValues()} className="btn btn-info col-3">
        Add contact
        </button>

        </div>
    );
};

export default AddContact;