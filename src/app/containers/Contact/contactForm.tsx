import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "../../components/button";
import axios from "axios";
import ReCAPTCHA from 'react-google-recaptcha';


const TopSectionContainer = styled.div`
    ${tw`
      h-full
      flex
      justify-center
      flex-col
    `};
  `;
  const InnerContainer = styled.div`
    ${tw`
      w-2/3
      m-auto
      p-8
      shadow-lg
    `};
  `;
  const Title = styled.h1`
    ${tw`
      text-4xl
      font-bold
      flex
      items-center
    `};
  `;
  const ButtonsContainer = styled.div`
    ${tw`
        flex
        mt-6
        flex-wrap
    `};
  `;

  const Label = styled.div`
    ${tw`
        my-2
        flex
        flex-col
    `}
  `;
  
  const Success = styled.div`
    ${tw`
      my-4
      text-white
      w-full
      p-4
    `}
  `;
  type FormState = {
      firstName: string;
      lastName: string;
      email: string;
      message: string;
  };

  type ServiceMessage = {
      class: string;
      text: string;
  };

  export function ContactForm() {
    const formId = 'yc4uAkD9';
    const formSparkUrl = `https://submit-form.com/${formId}`;
    const recaptchaKey = '6Lcu-4UdAAAAAB0IbUKrbXPbwOV24AqUzs1ZOLTL';
    const recaptchaRef = useRef<any>();

    const initialFormState = {
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    };

    const [formState, setFormState] = useState<FormState>(initialFormState);
    const [submitting, setSubmitting] = useState<boolean>(false);
    const [message, setMessage] = useState<ServiceMessage>();
    const [recaptchaToken, setRecaptchaToken] = useState<string>();
    
    const submitForm = async(event: FormEvent) => {
        event.preventDefault();
        setSubmitting(true);
        await postSubmission();
        setSubmitting(false);
    };
    const postSubmission = async () => {
        const payload = {
            ...formState,
            "g-recaptcha-response": recaptchaToken
        };
        try {
            const result = await axios.post(formSparkUrl, payload);
            console.log(result);
            setMessage({
                class: 'bg-green-500',
                text: 'Thanks, someone will be in touch shortly.',
            });
            setFormState(initialFormState);
            recaptchaRef.current.reset();
        } catch(error) {
          console.log(error);
          setMessage({
            class: 'bg-red-500',
            text: 'Sorry, there was a problem. Please try again.',
        });
        }
    };

    const updateFormControl = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = event.target;
        const formKey = id as keyof FormState;
        const updatedFormState = { ...formState };
        updatedFormState[formKey] = value;
        setFormState(updatedFormState);
    };

    const updateRecaptchaToken = (token: string | null) => {
        setRecaptchaToken(token as string);
    };
    return (
        <div className="h-full w-6/12 sm:w-full flex justify-center flex-col">
          <div className=" w-2/3 m-auto p-8 shadow-lg">
            <h1 className="text-4xl font-bold flex items-center">
              <span>Contact us</span>
            </h1>
            {message && (
              <div className={`my-4 text-white w-full p-4 ${message.class}`}>
                {message.text}
              </div>
            )}
            <form onSubmit={submitForm} className="flex flex-col">
              <div className="my-2 flex flex-col">
                <label htmlFor="firstName">First Name</label>
                <input
                  onChange={updateFormControl}
                  className="border-2 p-2"
                  type="text"
                  id="firstName"
                  value={formState?.firstName}
                />
              </div>
              <div className="my-2 flex flex-col">
                <label htmlFor="lastName">Last Name</label>
                <input
                  onChange={updateFormControl}
                  className="border-2 p-2"
                  type="text"
                  id="lastName"
                  value={formState?.lastName}
                />
              </div>
              <div className="my-2 flex flex-col">
                <label htmlFor="email">Email</label>
                <input
                  onChange={updateFormControl}
                  className="border-2 p-2"
                  type="email"
                  id="email"
                  value={formState?.email}
                />
              </div>
              <div className="my-2 flex flex-col">
                <label htmlFor="message">Message</label>
                <textarea
                  onChange={updateFormControl}
                  className="border-2 p-2"
                  id="message"
                  value={formState?.message}
                ></textarea>
              </div>
    
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={recaptchaKey}
                onChange={updateRecaptchaToken}
              />
    
              <button
                disabled={submitting}
                className="mt-4 my-2 bg-blue-700 text-white w-full p-2 hover:bg-blue-900 transition-colors duration-200"
              >
                {submitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      );
    // return <TopSectionContainer>
    //         <InnerContainer>
    //             <Title>Contact Us</Title>
    //             {message && <Success>{message.class}{message.text}</Success>}
    //             <form className="flex flex-col" onSubmit={submitForm}>
    //                 <Label>
    //                     <label htmlFor="firstName">First Name</label>
    //                     <input
    //                       onChange={updateFormControl}
    //                       type="text" 
    //                       className="border-2 p-2"
    //                       id="firstName"
    //                       value={formState.firstName}
    //                     />
    //                 </Label>
    //                 <Label>
    //                     <label htmlFor="lastName">Last Name</label>
    //                     <input
    //                       onChange={updateFormControl}
    //                       type="text" 
    //                       className="border-2 p-2"
    //                       id="lastName"
    //                       value={formState.lastName}
    //                     />
    //                 </Label>
    //                 <Label>
    //                     <label htmlFor="email">Email</label>
    //                     <input
    //                       onChange={updateFormControl}
    //                       type="text" 
    //                       className="border-2 p-2"
    //                       id="email"
    //                       value={formState.email}
    //                     />
    //                 </Label>
    //                 <Label>
    //                     <label htmlFor="message">Message</label>
    //                     <textarea 
    //                         id="message" 
    //                         className="border-2 p-2" 
    //                         onChange={updateFormControl} 
    //                         value={formState.message}
    //                     ></textarea>
    //                 </Label>

    //                 <ReCAPTCHA
    //                     ref={recaptchaRef}
    //                     sitekey={recaptchaKey}
    //                     onChange={updateRecaptchaToken}
    //                 />

    //                 <ButtonsContainer>
    //                     <Button  text='SUBMIT'/>
    //                 </ButtonsContainer>
    //             </form>
    //         </InnerContainer>
    // </TopSectionContainer>
}
