import styled from '@emotion/styled';
import { Field } from 'formik';


export const FormContainer = styled.div`
 /* display: flex; */
 max-width: 563px;
   margin-left: 147px;
  margin-top: 179px;
  /* padding: 32px 20px 36px 20px;
  margin-right: auto;
  margin-left: auto;
  background-color: #fff;
  @media screen and (min-width: 768px) {
    max-width: 533px;
    height: 616;
    margin: 48px auto;
    padding: 40px 60px 46px 65px;
    border-radius: 20px;
  }
  @media screen and (min-width: 1280px) {
    margin: 52px 99px;
  } */
`;

export const FormName = styled.div`
  display: flex;
margin-bottom: 30px;
  /* justify-content: center; */
font-family: 'Apercu Arabic Pro';
font-style: normal;
font-weight: 400;
font-size: 40px;
line-height: 130%;
color: #3E3E3E;
`;

export const FormField = styled(Field)`
  /* position: relative; */
  width: 100%;
  display: flex;
  margin-bottom: 8px;
  padding-bottom: 30px;
  padding-top: 30px;
  padding-left: 46px;
  border: solid 1px #DCDCDC;
  border-radius: 10px;
  /* border: transparent; */
  ::placeholder {
    color: #2D2D2D;
    font-family: 'Apercu Arabic Pro';
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
background-color: #FAD34F;
color: #ffffff;
border-radius: 500px;
border: transparent;
`;