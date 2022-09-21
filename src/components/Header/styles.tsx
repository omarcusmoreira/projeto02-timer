import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 3.25rem;
    
    nav{
        display: flex;
        gap: .5rem;
    };
`

export const NavButton = styled.div`
    box-sizing: border-box;
    height: 3rem;
    width: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;      
    border-bottom  : 3px solid transparent;
    svg{
        color: ${props => props.theme.gray100};
    }
    &:hover{
        border-bottom  : 3px solid ${props => props.theme.green500};
    }
    &:active{
        border-bottom  : 3px solid ${props => props.theme.yellow500};

        svg{
        color: ${props => props.theme.yellow500};
    }
    }

`