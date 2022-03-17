import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Marginer } from "../../components/marginer";
import { Navbar } from "../../components/navbar";
import { ChooseUs } from "./chooseUs";
import { OurPricing } from "./ourPricing";
import { TopSection } from "./topSection";

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

export function HomePage() {
    return <PageContainer>
        <Navbar />
        <TopSection />
        <Marginer direction="vertical" margin="20em" />
        <ChooseUs />
        <Marginer direction="vertical" margin="10em" />
        <OurPricing />
    </PageContainer>
}