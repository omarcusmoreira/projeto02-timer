import { NavLink } from 'react-router-dom'
import {Scroll, Timer} from 'phosphor-react'
import { HeaderContainer, NavButton } from './styles'
import logoImage from '../../assets/logo.svg'

export function Header(){
    return (
        <HeaderContainer>
            <img src={logoImage} alt="" />
            <nav>
                <NavLink to="/" end><Timer size={24}/></NavLink>       
                <NavLink to="/history"><Scroll size={24}/></NavLink>       
            </nav>
        </HeaderContainer>
    )
}