import styled from 'styled-components';
import { Container } from '../../globalStyles'
import { FaMagento } from 'react-icons/fa'
import {ReactComponent as Icon} from '../../images/icon.svg';
import { Link } from 'react-router-dom'

export const Nav = styled.nav`
    ${'' /* background: #151738; */}
    background-color: ${props => props.active ? "#151738":"transparent"};
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: fixed;
    top: 0;

    z-index: 999;
`

export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 80px;

    ${Container}
`

export const NavLogo = styled(Link)`
    color: ${props=>props.active? "white":"black"};
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
`

export const NavIcon = styled(Icon)`
    transform: scale(0.6);
    width: 80px;
    color: white;
    ${'' /* margin-right: 0.5rem; */}

    >g {
        color: ${props=>props.active? "white" : "black"}; 
    }

    > g > path{
        fill: ${props=>props.active? "white" : "black"};
    }
    @media screen and (max-width:960px){
        transform: scale(0.8);
        width: 50px;
    }

`

export const HamburgerIcon = styled.div`
    display: none;


    @media screen and (max-width: 960px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;   
    }

    > svg{
        color: ${props=>props.active? "white":"black"} !important;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    
  
    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 80px;
        opacity: 1;
        transition: all 0.5s ease;
        background-color: #101522;
        left: ${({ click }) => (click ? 0 : '-100%')};
    }
`
export const NavItem = styled.li`
    background-color: ${props=>props.active? "#151738" : "white"} !important;
    border-radius: 10px;
    margin: 20px;
    border-bottom: 2px solid transparent;
    border-radius: 2px;

    &:hover {
        border-bottom: 4px solid #fff;
    }

    @media screen and (max-width: 960px) {
        width: 100%;

        &:hover {
            border-bottom: none;
        }
    }

`

export const NavLinks = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1.2rem;
    margin: 0 !important;
    height: 100%;
    color: ${props=>props.active? "white":"black"};
    

    @media screen and (max-width: 960px) {
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;

        &:hover {
            color: #4b59f7;
            transition: all 0.3s ease;
        }
    }
`

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;