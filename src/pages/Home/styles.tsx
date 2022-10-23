import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
        color: ${props => props.theme.gray100};
    flex: 1;

    form{
        gap: 3.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
export const FormContainer = styled.div`
    display: flex;
    width: 100%;
    gap: .5rem;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

export const CountDownContainer = styled.div`
    font-family: 'Roboto mono', monospace;
    font-size: 10rem;
    line-height: 8rem;
    display: flex;
    gap: 1rem;
    
    span{
        background-color: ${props => props.theme.gray700};
        border-radius: 8px;
        padding: 2rem 1rem;
    }
    
`
export const Separator = styled.div`
    padding: 2rem 0;
    color: ${props => props.theme.green500};
    width: 4rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
`
export const StartButton = styled.button`
    width: 100%;
    padding: 1rem;
    font-weight: bold;
    border-radius: 8px;
    background-color: ${props => props.theme.green500};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    color: ${props => props.theme.gray100};
    border: 0;


    &:disabled{
        opacity: .3;
    }
    &:not(:disabled):hover{
        background-color: ${props => props.theme.green700};
    }
`