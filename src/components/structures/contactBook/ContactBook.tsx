import React, { FC, useContext } from "react";

import "./ContactBook.css";
import SidebarContactBook from "./SidebarContactBook";
import { Context } from "../../../contexts/Routes/context";
import { ContactBookProvider } from "../../../contexts/ContactBook/contextContactBook";
import ContactBookPage from "react-contact-book";

const ContactBook: FC = (props) => {
    const { page } = useContext(Context);
    return (

        <div className="sumra-contact-book-main" >
            {/* <ContactBookProvider>
                <SidebarContactBook />
                <div className="contact-book__main-block" >
                    {page}
                </div>

            </ContactBookProvider> */}
<ContactBookPage />
        </div>

    );
};

export default ContactBook;

