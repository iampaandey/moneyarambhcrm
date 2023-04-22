import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse
} from 'mdb-react-ui-kit';
  import logo from '../images/logo.png'

  import "./navbar.css"
import { Link } from 'react-router-dom';
 const Navbar = () => {
	const handleAc=(idx)=>{
		const opt = document.getElementsByClassName("op")
		Array.from(opt).map((e)=>{
			e.classList.remove("acc")
		})
		console.log(opt[idx])
		opt[idx].classList.add("acc")
		console.log(opt[idx])

	}
	const [showNavColor, setShowNavColor] = useState(false);
	return (
		<>
		<MDBNavbar expand='lg' light className='nav-main' >
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
			
			<img className='logo' src={logo} alt="" />
		  </MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavColor(!showNavColor)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColor} navbar>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0 nvv' >
              <MDBNavbarItem  onClick={()=>handleAc(0)}>
              <Link to="/" className='acc op'>Dashboard</Link>
              </MDBNavbarItem>
              <MDBNavbarItem  onClick={()=>handleAc(1)}>
              <Link to="/leads" className='op'>Leads</Link>
              </MDBNavbarItem >
              <MDBNavbarItem  onClick={()=>handleAc(2)}>
              <Link to="/about" className='op'>About</Link>
              </MDBNavbarItem>
              <MDBNavbarItem  onClick={()=>handleAc(3)}>
              <Link to="/admin" className='op'>Admin</Link>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
	  </>
	)}
  export default Navbar