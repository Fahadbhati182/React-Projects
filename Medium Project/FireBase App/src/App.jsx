import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import InputFeilds from "./components/InputFeilds";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";
import AddUpdateContact from "./components/AddUpdateContact";
import useDisclose from "./hooks/useDisclose";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import NoContacts from "./components/NoContacts";

function App() {
  const [contacts, setContacts] = useState([]);

  const { isOpen, handleClose, handleOpen } = useDisclose();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");

        onSnapshot(contactsRef, (snapshots) => {
          const contactList = snapshots.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactList);
          return contactList;
        });
      } catch (error) {}
    };

    getContacts();
  }, []);

  const filteredData = (e) => {
    const value = e.target.value;

    const contactsRef = collection(db, "contacts");

    onSnapshot(contactsRef, (snapshots) => {
      const contactList = snapshots.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filterData = contactList.filter((conts) =>
        conts.name.toLowerCase().includes(value.toLowerCase())
      );

      setContacts(filterData);
      return filterData;
    });
  };

  return (
    <>
      <div className="max-w-[380px] mx-auto">
        <Navbar />
        <InputFeilds filteredData={filteredData} handleOpen={handleOpen} />
        {contacts.length == 0 && <NoContacts />}
        <ContactCard contacts={contacts} />
        <AddUpdateContact
          isOpen={isOpen}
          isClose={handleClose}
        ></AddUpdateContact>
        <ToastContainer position="bottom-center" />
      </div>
    </>
  );
}

export default App;
