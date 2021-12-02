import React from "react";
  import styled from "styled-components";
  import tw from "twin.macro";
  import ConnectionImg from "../../../assets/images/personal-connection.png";
  import CommunityImg from "../../../assets/images/community.png";
  import AffordabilityImg from "../../../assets/images/affordability.png";
  import GrowthImg from "../../../assets/images/growth.png";

  const Container = styled.div`
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
  
  const Title = styled.h2`
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
  
  const StepTitle = styled.h4`
    ${tw`
      text-primary
      text-lg
      font-semibold
      mt-4
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
  
  const StepIcon = styled.span`
    img {
        width: 7em;
        height: 100%;
        max-width: fit-content;
    }
  `;
  
  export function OurPricing() {
    return (
      <Container>
        <Title>Our Pricing</Title>
        <StepsContainer>
          <StepContainer>
            <Description>
                Our monthly pricing options are based on the number of 
                stock-keeping units your company would like to promote on 
                Google Merchant Store. For more information on your specific needs, 
                contact us at gobacklocal@gmail.com. 
            </Description>
          </StepContainer>
        </StepsContainer>
      </Container>
    );
  }