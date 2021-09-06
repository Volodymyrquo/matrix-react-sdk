import React from 'react';
import ContactBook from 'react-contact-book';
import { useHistory } from 'react-router-dom';

const SumraContactBook = () => {
    const history = useHistory();

    const goToPage = (page) => {
        history.push(page);
    };

    return (
        <ContactBook goToPage={goToPage} />

    );
};

export default SumraContactBook;

