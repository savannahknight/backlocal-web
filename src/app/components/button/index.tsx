import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

interface IButtonProps {
    theme?: "filled" | "outlined";
    text: string;

}

const BaseButton = styled.button`
    border-radius: 36px;
    font-size: 18px;
    ${tw`
        pl-8
        pr-8
        pt-3
        pb-3
        outline-none
        text-white
        font-semibold
        border-transparent
        border-2
        border-solid
        focus:outline-none
        transition-all
        duration-200
        ease-in-out
        m-1
    `};
`;

const OutlinedButton = styled(BaseButton)`
    ${tw`
        bg-secondary
        hover:bg-transparent
        hover:text-secondary
        hover:border-secondary
    `};
`;

const FilledButton = styled(BaseButton)`
    ${tw`
        border-secondary
        text-secondary
        bg-transparent
        hover:bg-secondary
        hover:text-white
        hover:border-transparent
    `};
`;

export function Button(props: IButtonProps) {

    const { theme, text } = props;

    if(theme === "filled")
        return <FilledButton>{ text }</FilledButton>
    else
        return <OutlinedButton>{ text }</OutlinedButton>

}