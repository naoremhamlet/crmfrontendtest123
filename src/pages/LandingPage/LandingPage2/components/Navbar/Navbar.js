import React, {useState, useEffect} from 'react'
import { Nav, 
    NavbarContainer, 
    NavLogo, 
    NavIcon, 
    HamburgerIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn,
    NavBtnLink
 } from './Navbar.elements'
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib'
import GlobalStyles, { Button } from '../../globalStyles';


function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const[nav,setnav]=useState(false);

    const [homeClick, setHomeClick] = useState(false);
    const [servicesClick, setServicesClick] = useState(false);
    const [productsClick, setProductsClick] = useState(false);

    const handleHomeClick = () => {
        setHomeClick(true);
        setProductsClick(false);
        setServicesClick(false);
    }
    const handleServicesClick = () => {
        setHomeClick(false);
        setProductsClick(false);
        setServicesClick(true);
    }
    const handleProductsClick = () => {
        setHomeClick(false);
        setProductsClick(true);
        setServicesClick(false);
    }

    const handleClick = () =>  setClick(!click);
    
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        // so if the screensize is <= 960px then set button state to false
        if(window.innerwidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton);
    const changeBackground=()=>{
        if(window.scrollY>=50){
          setnav(true);
        }
        else{
          setnav(false);
        }
    
      }
    window.addEventListener('scroll',changeBackground);

    return (
        <>
        <GlobalStyles />
        <IconContext.Provider value={{ color: '#fff' }}>
            <Nav active={nav}>
                <NavbarContainer >
                    <NavLogo to='/' active={nav} > 
                        <NavIcon active={nav}/>
                            DATA-ALLEY
                    </NavLogo>
                    <HamburgerIcon onClick={handleClick} active={nav}>
                        {click ? <FaTimes /> : <FaBars />}
                    </HamburgerIcon>
                    <NavMenu onClick={handleClick} click={click} >
                        <NavItem onClick={handleHomeClick} homeClick={homeClick} active={nav}>
                            <NavLinks to='/' onClick={closeMobileMenu} active={nav} >
                                Home
                            </NavLinks>
                        </NavItem>
                    
                    
                        <NavItem onClick={handleServicesClick} servicesClick={servicesClick} active={nav}>
                            <NavLinks to='/subscribe' onClick={closeMobileMenu} active={nav}>
                                Services
                            </NavLinks>
                        </NavItem>
                    
                    
                        <NavItem onClick={handleProductsClick} productsClick={productsClick} active={nav}>
                            <NavLinks to='/faq' onClick={closeMobileMenu} active={nav}>
                                About Us
                            </NavLinks>
                        </NavItem>

                        <NavItemBtn >
                            {button ? (
                                <NavBtnLink to='/signup'>
                                    <Button primary>SIGN UP</Button>
                                </NavBtnLink>
                            ) : (
                                <NavBtnLink to='/signup'>
                                    <Button onClick={closeMobileMenu} fontBig primary>SIGN UP</Button>
                                </NavBtnLink>
                            )}
                            
                        </NavItemBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>    
        </>
    )
}

export default Navbar
