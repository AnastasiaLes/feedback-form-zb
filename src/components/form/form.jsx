// import React from 'react';
import {
    Formik,
    Form,
    // ErrorMessage,
    // useFormikContext
} from 'formik';
import * as yup from 'yup';

import { FormName, FormContainer, FormField, SubmitBtn } from './form.styled';

const FeedbackForm = () => {

    const initialValues = {
        name: '',
        email: '',
        message: '',
    };
    
    const RegEx  = /^((([0-9A-Za-z]{1}[-0-9A-z.]{1,}[0-9A-Za-z]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/;

    const schema = yup.object().shape({
        name: yup.string().min(1).max(12).required(),
        email: yup.string().email().matches(RegEx, 'Email is not  valid').required(),
        message: yup.string().required(),
    });
    
    const handleSubmit = () => {
        console.log("Submit!");
    }

    return (
        <FormContainer>
            <FormName>Reach out to us!</FormName>
            <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={handleSubmit}
            validateOnChange>
                <Form>
                    <label htmlFor="name"></label>
                    <FormField id="name" name="name" placeholder="Your Name*" />

                    <label htmlFor="email"></label>
                    <FormField id="email" name="email" placeholder="Your E-mail*" />

                    <label htmlFor="message"></label>
                    <FormField
                    // id="message"
                    name="message"
                    placeholder="Your Message*"
                    />
                    <SubmitBtn type="submit">Send message</SubmitBtn>
                </Form>
            </Formik>
            
        </FormContainer>
    )
}

export default FeedbackForm;