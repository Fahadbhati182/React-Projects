import React from "react";
import { MdDelete } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";
import { HiOutlineUserCircle } from "react-icons/hi";
import { collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import useDisclose from "../hooks/useDisclose";
import AddUpdateContact from "./AddUpdateContact";
import { toast } from "react-toastify";

const ContactCard = ({ contacts }) => {
  const { isOpen, handleClose } = useDisclose();

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.success("Contact Deleted Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {contacts.map((contact) => (
        <div
          key={contact.id}
          className="bg-yellow my-5 rounded-lg flex justify-between items-center  "
        >
          <div className="flex justify-evenly gap-5 items-center">
            <HiOutlineUserCircle className="text-6xl text-orange m-2" />
            <div>
              <h1 className="font-bold">{contact.name}</h1>
              <p>{contact.email}</p>
            </div>
          </div>

          <MdDelete
            onClick={() => deleteContact(contact.id)}
            className="text-orange mr-4 text-5xl cursor-pointer"
          />
        </div>
      ))}
      <AddUpdateContact
        contacts={contacts}
        isUpdate
        isOpen={isOpen}
        isClose={handleClose}
      />
    </>
  );
};

export default ContactCard;
