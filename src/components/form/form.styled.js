import styled from '@emotion/styled';
import { Field } from 'formik';
import BgImg from '../../images/Contact.png'

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-image: url(${BgImg});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 85vh;
`;

export const FormContainer = styled.div`
  width: 563px;
  min-height: 460px;
  margin-left: 147px;
  margin-top: auto;
  margin-bottom: auto;
 
  @media screen and (max-width: 768px) {
    max-width: 80vw;
    margin: 48px auto;
  
  }
`;

export const FormName = styled.div`
  display: flex;
  margin-bottom: 30px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 130%;
  color: #3E3E3E;
`;

export const FormField = styled(Field)`
  position: relative; 
  outline: none;

  width: 100%;
  display: flex;
  margin-bottom: 8px;
  max-height: 93px;
  padding-bottom: 30px;
  padding-top: 30px;
  padding-left: 46px;
  border: solid 1px #DCDCDC;
  border-radius: 10px;
 
  ::placeholder {
    color: #2D2D2D;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
  }
`;

export const Icon = styled.svg`
  fill: #e0e0e0;
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    color: #24cca7;
  }
`;

export const SubmitBtn = styled.button`
    padding: 27px 52px;
    margin-top: 15px;
    font-family: 'Open Sans';
    font-size: 18px;
    background-color: #FAD34F;
    color: #ffffff;
    border-radius: 500px;
    border: transparent;
    cursor: pointer;
  

  :disabled,
  button[disabled]{
    color: #ffffff;
    cursor: not-allowed;
    &:hover {
    transform: scale(1.0);
  }
}

&:hover {
    transform: scale(1.1);
  }
`;

export const ErrorText = styled.p`
  display: flex;
  font-size: 12px;
  color: red;
`;
