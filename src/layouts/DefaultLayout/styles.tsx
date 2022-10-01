import styled from "styled-components";

export const LayoutContainer = styled.div`
    max-width: 74rem;
    min-height: calc(100vh - 10rem);
    padding: 2.5rem;
    margin: 5rem auto;

    background-color: ${ props => props.theme.gray800};
    border-radius: 8px;

    display: flex;
    flex-direction: column;
`
const BaseInput = styled.input`
    background: transparent;
    border: 0;
    height: 2.5rem;
    border-bottom: 2px solid ${props => props.theme.gray500};
    font-weight: bold;
    font-size: 1.125rem;
    padding: 0 0.5rem;
    color: ${props => props.theme.gray100};

    &:focus{
        box-shadow: none;
        border-color: ${props => props.theme.green500};
    }
    &::placeholder{
        color: ${props => props.theme.gray500};    }
`

export const TaskInput = styled(BaseInput)`
    flex: 1;
`
export const MinutesInput = styled(BaseInput)`
    width: 4rem;
`