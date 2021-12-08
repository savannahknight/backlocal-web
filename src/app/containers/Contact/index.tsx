import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Marginer } from "../../components/marginer";
import { Navbar } from "../../components/navbar";
import { TopSection } from "./topSection";
import { ContactForm } from "./contactForm"

const PageContainer = styled.div`
    ${tw`
        flex
        flex-col
        w-full
        h-full
        items-center
        overflow-x-hidden
    `};
`;

export function Contact() {
    return <PageContainer>
        <Navbar />
        <Marginer direction="vertical" margin="12em" />
        <TopSection />
        <ContactForm />
    </PageContainer>
}