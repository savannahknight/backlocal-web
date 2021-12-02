import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Marginer } from "../../components/marginer";
import { Navbar } from "../../components/navbar";
import { TopSection } from "./topSection";
import { Team } from "./team";

import Blob2 from "../../../assets/images/blob-2.png";
import { SCREENS } from "../../components/responsive";

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
const StandaloneImg = styled.div`
    img {
        width: 100em;
        height: 100em;
        max-width: fit-content;
    }

    // @media (min-width: ${SCREENS.sm}) {
    //     height: 16em;
    // }
    // @media (min-width: ${SCREENS.lg}) {
    //     height: 21em;
    // }
    // @media (min-width: ${SCREENS.xl}) {
    //     height: 30em;
    // }
`;

export function AboutUs() {
    return <PageContainer>
        <Navbar />
        <TopSection />
        <Team />
        <StandaloneImg>
            <img src={Blob2} />
        </StandaloneImg>
    </PageContainer>
}