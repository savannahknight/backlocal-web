import React from "react";
  import styled from "styled-components";
  import tw from "twin.macro";
  import LineImg from "../../../assets/images/line-dot.svg";

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
    font-size: 72px;
    ${tw`
      text-primary
      font-extrabold
    `};
  `;
  const TitleDescription = styled.h3`
    font-size: 18px;
    ${tw`
      mt-6
      w-1/3
      text-center
      text-black
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
      m-5
    `};
  `;
  
  const Step = styled.div`
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
    ${tw`
      bg-white
      flex
      flex-wrap
      rounded-2xl
      items-center
      justify-center
      pt-14
      pb-16
    `};
  `;
  
  const StepTitle = styled.h4`
    font-size: 48px;
    ${tw`
      text-secondary
      font-semibold
      mt-8
      mb-4
    `};
  `;
  
  const Description = styled.p`
    font-size: 18px;
    ${tw`
      w-8/12
      text-center
      text-black
      mt-4
      mb-8
    `};
  `;
  const DescriptionTwo = styled.p`
    font-size: 18px;
    ${tw`
      w-10/12
      text-center
      text-danger
    `};
  `;
  const PopularTag = styled.div`
    border-radius: 36px;
    ${tw`
      bg-danger
      text-white
      items-center
      justify-center
      pr-4
      pl-4
      pt-1
      pb-1
    `};
  `;
  const Line = styled.span`
    ${tw`
      p-3
    `};
    img {
        width: 100%;
        height: 100%;
        max-width: fit-content;
    }
  `;

  export function OurPricing() {
    return (
      <Container>
        <Title>Our Pricing</Title>
        <Line><img src={LineImg} /></Line>
        <TitleDescription>Our monthly pricing options are based on the number of 
          stock-keeping units your company would like to promote on Google Merchant Store. 
          For more information on your specific needs, contact us at gobacklocal@gmail.com. </TitleDescription>
        <StepsContainer>
          <StepContainer>
            <Step>
              <StepTitle>$30/mo</StepTitle>
              <DescriptionTwo>1-50 SKUs</DescriptionTwo>
              <Description>A beginner option for companies with limited online inventory </Description>
            </Step>
          </StepContainer>
          <StepContainer>
            <Step>
              <StepTitle>$50/mo</StepTitle>
              <DescriptionTwo>51-125 SKUs</DescriptionTwo>
              <Description>A great choice for businesses who are transitioning to web</Description>
            </Step>
          </StepContainer>
          <StepContainer>
            <Step>
              
              <StepTitle>$75/mo</StepTitle>
              <DescriptionTwo>126-250 SKUs</DescriptionTwo>
              <Description>The best option for companies with a fast growing online presence</Description>
              {/* <PopularTag> Popular </PopularTag> */}
            </Step>
          </StepContainer>
          <StepContainer>
            <Step>
              <StepTitle>$115/mo</StepTitle>
              <DescriptionTwo>251-unlimited SKUs</DescriptionTwo>
              <Description>This plan allows businesses to list an unlimited amount of products online</Description>
            </Step>
          </StepContainer>
        </StepsContainer>
      </Container>
    );
  }