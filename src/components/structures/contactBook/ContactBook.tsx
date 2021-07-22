import React, { FC, useContext } from "react";

import "./ContactBook.css";
import SidebarContactBook from "./SidebarContactBook";
import { Context } from "../../../contexts/Routes/context";
import { ContactBookProvider } from "../../../contexts/ContactBook/contextContactBook";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const ContactBook: FC = (props) => {
    const { page } = useContext(Context);
    return (

        <div className="sumra-contact-book-main ">
            <ContactBookProvider>
                <SidebarContactBook />
                <ReactCSSTransitionGroup
                    transitionName="anim"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnter={false}
                    transitionLeave={false}
                >
                    {page}
                </ReactCSSTransitionGroup>

            </ContactBookProvider>

        </div>

    );
};

export default ContactBook;

