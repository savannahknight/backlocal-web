import {
    faCalendarAlt,
    faCarSide,
    faMapMarkedAlt,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      text-black
      text-lg
      font-semibold
      mt-4
    `};
  `;
  
  const StepDescription = styled.p`
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
  
  export function ChooseUs() {
    return (
      <Container>
        <Title>Why Choose Us</Title>
        <StepsContainer>
          <StepContainer>
            <Step>
              <StepIcon>
                <img src={ConnectionImg} />
              </StepIcon>
            </Step>
            <StepTitle>Personal Connection</StepTitle>
            <StepDescription>
                One of our core values is great customer service. 
                We want to build up lives, not just businesses. 
            </StepDescription>
          </StepContainer>
          <StepContainer>
            <Step>
              <StepIcon>
                <img src={CommunityImg} />
              </StepIcon>
            </Step>
            <StepTitle>Community</StepTitle>
            <StepDescription>
                Real change happens from the ground up. 
                We hope to grow the local community by creating connections.             
            </StepDescription>
          </StepContainer>
          <StepContainer>
            <Step>
              <StepIcon>
                <img src={AffordabilityImg} />
              </StepIcon>
            </Step>
            <StepTitle>Affordability</StepTitle>
            <StepDescription>
                We offer low-cost prices that allow your comany to grow. 
                BackLocal wants to help, not hurt. 
            </StepDescription>
          </StepContainer>
          <StepContainer>
            <Step>
              <StepIcon>
                <img src={GrowthImg} />
              </StepIcon>
            </Step>
            <StepTitle>Growth</StepTitle>
            <StepDescription>
                We help you reach larger online audiences and stay up to date 
                with customer behavior trends. 
            </StepDescription>
          </StepContainer>
        </StepsContainer>
      </Container>
    );
  }