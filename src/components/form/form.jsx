// import { useState, useEffect } from 'react';
import {
    Formik,
    Form,
    // ErrorMessage,
    // useFormikContext
} from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addFeedback } from 'redux/feedbackSlice';
// import Layout from 'components/layout/layout';
import { FormName, FormContainer, FormField, SubmitBtn, Container } from './form.styled';

const FeedbackForm = () => {

    // const [name, setName] = useState();
    // const [email, setEmail] = useState();
    // const [message,setMessage] = useState('');
    const dispatch = useDispatch();
   
    const initialValues = {
        name: '',
        email: '',
        message: '',
    };
    
    const RegEx  = /^((([0-9A-Za-z]{1}[-0-9A-z.]{1,}[0-9A-Za-z]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/;

    const schema = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email().matches(RegEx, 'Email is not  valid').required(),
        message: yup.string().required(),
    });
    
    // const FormObserver = () => {
    // const { values } = useFormikContext();
    // useEffect(() => {
    //   setName(values.name);
    //   setEmail(values.email);
    //   setMessage(values.message);
    // }, [values]);
    // return null;
    // };

const allFeedbacks = useSelector(state => state.feedback);

    const handleSubmit = (values, { resetForm }) => {
        const { name, email, message } = values;
        const newFeedback = {
            name,
            email,
            message
        }
         
        console.log(allFeedbacks);
        dispatch(addFeedback(newFeedback));
        resetForm();
    }

    return (
        <Container>
{/* <Layout/> */}
            <FormContainer>
            <FormName>Reach out to us!</FormName>
            <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={handleSubmit}
            validateOnChange>
            
                <Form>
                    {/* <FormObserver /> */}
                    <label htmlFor="name"></label>
                    <FormField
                        // style={{outline: name ? '1px solid red' : '1px solid green'}} 
                    id="name" 
                    name="name" 
                    placeholder="Your Name*" />

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
        </Container>
        
    )
}

export default FeedbackForm;