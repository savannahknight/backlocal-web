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
      text-7xl
      lg:text-7xl
      md:text-7xl
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
      md:w-6/12
      items-center
      transition-colors
      hover:text-secondary
      m-3
    `};
  `;
  
  const Description = styled.h3`
    ${tw`
      w-full
      text-xl
      md:text-2xl
      text-center
      text-black
      pb-8
    `};
  `;



export function TopSection() {

    return <TopSectionContainer>
        <Title>Our Story</Title>
        <StepsContainer>
          <StepContainer>
          <Description>
                We are a group of friends who came together through our passion for supporting local businesses. 
                We were given resources to get our startup off the ground and we want to give back and support 
                other entreprenurs in their endeavors. 
            </Description>
          </StepContainer>
        </StepsContainer>
    </TopSectionContainer>
}