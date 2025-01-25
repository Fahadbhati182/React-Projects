import React from "react";
import Modal from "./Modal";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { addDoc, collection} from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-toastify";

import * as Yup from "yup";

const contactSchemeValidation = Yup.object().shape({
  name: Yup.string().required("Name is Required"),
  email: Yup.string().email("Invalid email").required("Email is Required"),
});

const AddUpdateContact = ({ isOpen, isClose, contacts }) => {
  const addContact = async (contact) => {
    try {
      const contactsRef = collection(db, "contacts");
      await addDoc(contactsRef, contact);
      toast.success("Contact added Successfully");

      onclose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal isOpen={isOpen} isClose={isClose}>
      <Formik
        validationSchema={contactSchemeValidation}
        initialValues={{ name: "", email: "" }}
        onSubmit={(values) => {
          addContact(values);
        }}
      >
        <Form className="flex flex-col">
          <div className="flex mb-4 flex-col g-1">
            <label htmlFor="name">Name</label>
            <Field name="name" className="border h-10" />
            <div className="text-red-600">
              <ErrorMessage name="name" />
            </div>
          </div>
          <div className="flex flex-col g-1">
            <label htmlFor="email">Email</label>
            <Field name="email" className="border h-10" />
            <div className="text-red-600">
              <ErrorMessage name="email" />
            </div>
          </div>
          <button
            type="submit"
            className="bg-orange mt-4 self-end p-3 font-semibold "
          >
            Add Contact
          </button>
        </Form>
      </Formik>
    </Modal>
  );
};

export default AddUpdateContact;
