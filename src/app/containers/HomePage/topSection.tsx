import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import BuildingsImg from "../../../assets/images/buildings.png";
import BlobImg from "../../../assets/images/blob-1.svg";
import { SCREENS } from "../../components/responsive";
import { Button } from "../../components/button";

const TopSectionContainer = styled.div`
  min-height: 400px;
  margin-top: 6em;
  ${tw`
        w-full
        max-w-screen-2xl
        flex
        justify-between
        pl-3
        pr-3
        lg:pl-12
        lg:pr-12
    `};
`;

const LeftContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
  `};
`;

const RightContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
    relative
    mt-20
  `};
`;

const Slogan = styled.h1`
    font-size: 96px;
    ${tw`
        font-bold
        text-primary
        mb-4
        sm:leading-snug
        lg:leading-normal
        xl:leading-relaxed
    `};
`;

const Description = styled.p`
    font-size: 18px;
    ${tw`
        sm:max-h-full
        overflow-hidden
        max-h-12
        text-black
    `};
`;

const BlobContainer = styled.div`
    width: 20em;
    height: 10em;
    position: absolute;
    right: -5em;
    top: -9em;
    z-index: -1;
    transform: rotate(-30deg);

    img {
        width: 100%;
        height: auto;
        max-height: max-content;
    }
    @media (min-width: ${SCREENS.sm}) {
        width: 40em;
        max-height: 10em;
        right: -9em;
        top: -16em;
        transform: rotate(-30deg);
    }
    @media (min-width: ${SCREENS.lg}) {
        width: 50em;
        max-height: 30em;
        right: -7em;
        top: -15em;
        transform: rotate(-25deg);
    }
    @media (min-width: ${SCREENS.xl}) {
        width: 70em;
        max-height: 30em;
        right: -15em;
        top: -20em;
        transform: rotate(-20deg);
    }
`;

const StandaloneImg = styled.div`
    width: auto;
    height: 10em;
    right: -6em;
    top: -5em;
    positiona; absolute;

    img {
        width: auto;
        height: 100%;
        max-width: fit-content;
    }

    @media (min-width: ${SCREENS.sm}) {
        height: 16em;
        right: -6em;
        top: -6em;
    }
    @media (min-width: ${SCREENS.lg}) {
        height: 21em;
        right: -8em;
        top: -5em;
    }
    @media (min-width: ${SCREENS.xl}) {
        height: 30em;
        right: -13em;
        top: -9em;
    }
`;

const ButtonsContainer = styled.div`
    ${tw`
        flex
        mt-6
        flex-wrap
    `};
`;


export function TopSection() {

    return <TopSectionContainer>
        <LeftContainer>
            <Slogan>BackLocal</Slogan>
            <Description>
            A Saas Company designed to help small businesses compete with larger 
            chain stores by integrating local store’s inventory with Google Merchant Store. 
            </Description>
            <ButtonsContainer>
                <Button text= "REQUEST A DEMO" />
                {/* <Button theme="filled" text="Log In" /> */}
            </ButtonsContainer>
        </LeftContainer>
        <RightContainer>
            <BlobContainer>
                <img src={BlobImg} />
            </BlobContainer>
            <StandaloneImg>
                <img src={BuildingsImg} />
            </StandaloneImg>
        </RightContainer>
    </TopSectionContainer>
}
