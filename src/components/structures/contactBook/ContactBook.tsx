import React, { FC, useContext } from "react";

import "./ContactBook.css";
import SidebarContactBook from "./SidebarContactBook";
import { Context } from "../../../contexts/Routes/context";
import { ContactBookProvider } from "../../../contexts/ContactBook/contextContactBook";

const ContactBook: FC = (props) => {
    const { page } = useContext(Context);

    return (

        <div className="sumra-contact-book-main ">
            <ContactBookProvider>
                <SidebarContactBook />

                {page}
            </ContactBookProvider>

        </div>

    );
};

export default ContactBook;

