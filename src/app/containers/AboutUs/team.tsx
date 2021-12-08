import React from "react";
  import styled from "styled-components";
  import tw from "twin.macro";
  import BrantImg from "../../../assets/images/brant.png";
  import SavannahImg from "../../../assets/images/savannah.png";
  import ChloeImg from "../../../assets/images/chloe.png";
  import BradenImg from "../../../assets/images/braden.png";
  import HyrumImg from "../../../assets/images/hyrum.png";
  import Blob2 from "../../../assets/images/blob-2.svg";

  const Container = styled.div`
    
    ${tw`
      w-full
      flex
      flex-col
      items-center
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
    `};
  `;
  
  const Step = styled.div`
    ${tw`
      flex
    `};
  `;
  
  const StepTitle = styled.h4`
    ${tw`
      text-secondary
      text-xl
      font-semibold
      pt-5
    `};
  `;
  
  const StepDescription = styled.p`
    ${tw`
      w-10/12
      text-xs
      md:text-sm
      text-center
      text-black
      pt-2
      pb-12
    `};
  `;
  
  const StepIcon = styled.span`
    img {
        width: 10em;
        height: 100%;
        max-width: fit-content;
    }
  `;
  const StandaloneImg = styled.div`
    ${tw`
        w-full
    `};
    img {
        width: 100%;
        height: 100%;
        
    }
    `;
  
  export function Team() {
    return (
      <Container>
        <StepsContainer>
          <StepContainer>
            <Step>
              <StepIcon>
                <img src={BrantImg} />
              </StepIcon>
            </Step>
            <StepTitle>Brant Johnson</StepTitle>
            <StepDescription>
                Project Manager
            </StepDescription>
          </StepContainer>
          <StepContainer>
            <Step>
              <StepIcon>
                <img src={SavannahImg} />
              </StepIcon>
            </Step>
            <StepTitle>Savannah Knight</StepTitle>
            <StepDescription>
                Developer            
            </StepDescription>
          </StepContainer>
          <StepContainer>
            <Step>
              <StepIcon>
                <img src={ChloeImg} />
              </StepIcon>
            </Step>
            <StepTitle>Chloe Petersen</StepTitle>
            <StepDescription>
                UI/UX Designer 
            </StepDescription>
          </StepContainer>
          <StepContainer>
            <Step>
              <StepIcon>
                <img src={BradenImg} />
              </StepIcon>
            </Step>
            <StepTitle>Braden Dredge</StepTitle>
            <StepDescription>
                UI/UX Designer 
            </StepDescription>
          </StepContainer>
          <StepContainer>
            <Step>
              <StepIcon>
                <img src={HyrumImg} />
              </StepIcon>
            </Step>
            <StepTitle>Hyrum Thompson</StepTitle>
            <StepDescription>
                Visual Designer
            </StepDescription>
          </StepContainer>
        </StepsContainer>
        <StandaloneImg>
        <img src={Blob2} />
        </StandaloneImg>
      </Container>
      
    );
  }