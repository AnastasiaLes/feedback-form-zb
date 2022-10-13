import { useState, useEffect } from 'react';
import {
    Formik,
    Form,
    ErrorMessage,
    useFormikContext
} from 'formik';
import * as yup from 'yup';
import swal from 'sweetalert';

import { useGetFeedbacksQuery, useAddFeedbackMutation } from 'redux/feedbackSlice';

import { FormName, FormContainer, FormField, SubmitBtn, Container, ErrorText } from './form.styled';


const initialValues = {
        name: '',
        email: '',
        message: '',
};
  
const RegEx  = /^((([0-9A-Za-z]{1}[-0-9A-z.]{1,}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/;

const schema = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email().matches(RegEx, 'Email is not  valid').required(),
        message: yup.string().required(),
});
    
const FeedbackForm = () => {
    
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message,setMessage] = useState('');

    const { data } = useGetFeedbacksQuery();

    const [addContact] = useAddFeedbackMutation();
    
    const FormObserver = () => {
    const { values } = useFormikContext();
    useEffect(() => {
      setName(values.name);
      setEmail(values.email);
      setMessage(values.message);
    }, [values]);
    return null;
    };

    const handleSubmit = (values, { resetForm }) => {
        const { name, email, message } = values;
        const newFeedback = {
            name,
            email,
            message
        }
        addContact(newFeedback);
        console.log(data);
        resetForm();
        swal({
      title: "Thank you!",
      icon: "success",
      button: false,
});
    }

    const FormError = ({ name }) => {
    return (
      <ErrorMessage
        name={name}
        render={message => <ErrorText>{message}</ErrorText>}
      />
    );
  };

    return (
        <Container>
            <FormContainer>
            <FormName>Reach out to us!</FormName>
            <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={handleSubmit}
            validateOnChange>
            
                <Form>
                    <FormObserver />
                        <label htmlFor="name">
                            <FormField
                            id="name" 
                            name="name" 
                            placeholder="Your Name*" />  
                            <FormError name="name" />
                        </label>
                    

                        <label htmlFor="email">
                            <FormField id="email" name="email" placeholder="Your E-mail*" />
                            <FormError name="email" />    
                        </label>
                    

                        <label htmlFor="message">
                            <FormField
                                // id="message"
                                name="message"
                                placeholder="Your Message*"
                            />
                         </label>
                    
                        <SubmitBtn
                            type="submit"
                            disabled={!name || !String(email).match(RegEx) || !message}
                        >Send message</SubmitBtn>
                </Form>
            </Formik>
            
        </FormContainer>
        </Container>
        
    )
}

export default FeedbackForm;