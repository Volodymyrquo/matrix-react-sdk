import React, { FC, useContext } from "react";

import "./ContactBook.css";
import SidebarContactBook from "./SidebarContactBook";
import { Context } from "../../../contexts/Routes/context";
import { ContactBookProvider } from "../../../contexts/ContactBook/contextContactBook";
import ContactBookPage from "react-contact-book";
import { OwnProfileStore } from "../../../stores/OwnProfileStore";

const ContactBook: FC = (props) => {
    const { page } = useContext(Context);
    const personName = localStorage.getItem("mx_profile_displayname");
    const avatarSize = 32;
    const avatarUrl = OwnProfileStore.instance.getHttpAvatarUrl(avatarSize);

    return (

        <div className="sumra-contact-book-main" >
            {/* <ContactBookProvider>
                <SidebarContactBook />
                <div className="contact-book__main-block" >
                    {page}
                </div>

            </ContactBookProvider> */}
            <ContactBookPage personName={personName} avatarUrl={avatarUrl} />
        </div>

    );
};

export default ContactBook;

