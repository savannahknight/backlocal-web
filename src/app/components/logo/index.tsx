import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import LogoImg from "../../../assets/images/logo.png";

const LogoContainer = styled.div`
    ${tw`
        flex
        items-center
    `};

`;

const LogoText = styled.div`
    font-size: 36px;
    ${tw`
        text-secondary
        m-1
    `};
`;

const Image = styled.div`
   width: auto;
   ${tw`
    h-6
    md:h-9
   `};

    img {
        width: auto;
        height: 100%;
   }
`;

export function Logo() {
    return <LogoContainer>
        <Image>
            <img src={LogoImg} />
        </Image>
        <LogoText>BackLocal</LogoText>
    </LogoContainer>
}