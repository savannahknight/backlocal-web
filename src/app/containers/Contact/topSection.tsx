import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const TopSectionContainer = styled.div`
    ${tw`
      w-full
      flex
      flex-col
      items-center
      pt-3
      pb-3
      lg:pt-6
      lg:pb-6
    `};
  `;
  
  const Title = styled.h1`
    ${tw`
      text-3xl
      lg:text-5xl
      text-primary
      font-extrabold
    `};
  `;
  
  const StepsContainer = styled.div`
    ${tw`
      flex
      justify-evenly
      flex-wrap
      mt-7
      lg:mt-16
    `};
  `;
  
  const StepContainer = styled.div`
    ${tw`
      flex
      flex-col
      md:w-96
      items-center
      transition-colors
      hover:text-secondary
      m-3
    `};
  `;
  
  const Step = styled.div`
    ${tw`
      flex
      rounded-lg
      items-center
      justify-center
      p-6
    `};
  `;
  
  const Description = styled.p`
    ${tw`
      w-10/12
      text-xs
      md:text-sm
      text-center
      text-black
    `};
  `;
  
// const TopSectionContainer = styled.div`
//   min-height: 400px;
//   margin-top: 6em;
//   ${tw`
//         w-full
//         max-w-screen-2xl
//         flex
//         justify-between
//         pl-3
//         pr-3
//         lg:pl-12
//         lg:pr-12
//     `};
// `;

// const Title = styled.h1`
//     ${tw`
//         font-bold
//         text-2xl
//         xl:text-6xl
//         sm:text-3xl
//         md:text-5xl
//         lg:font-black
//         md:font-extrabold
//         text-primary
//         mb-4
//         sm:leading-snug
//         lg:leading-normal
//         xl:leading-relaxed
//     `};
// `;

export function TopSection() {

    return <TopSectionContainer>
            <Title>Contact Us</Title>
            <Description>
                Send us a message here or email us directly at gobacklocal@gmail.com with any questions,
                inquiries, or feedback. You can also find us on LinkedIn or Instagram.
            </Description>
    </TopSectionContainer>
}