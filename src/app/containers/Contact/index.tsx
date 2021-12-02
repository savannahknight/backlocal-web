import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Marginer } from "../../components/marginer";
import { Navbar } from "../../components/navbar";

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
    </PageContainer>
}