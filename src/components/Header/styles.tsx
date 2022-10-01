import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    
    nav{
        display: flex;
        gap: .5rem;

        a{
            height: 3rem;
            width: 3rem;
            display: flex;
            justify-content: center;
            align-items: center;    
            border-top: 3px solid transparent;  
            border-bottom  : 3px solid transparent;
            color: ${props => props.theme.gray100};
            
            &:hover{
                border-bottom  : 3px solid ${props => props.theme.green500};
            }
            &.active{
                color: ${props => props.theme.green500};
            }
                    
        }
    };
`

export const NavButton = styled.div`


`