import React, { useState } from 'react'
import styled from 'styled-components'
import BurgerButton from './BurgerButton'


function Navbar() {

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!clicked)
  }
  return (
    <>
      <NavContainer>
        <img src={require("../AasetLogo/Logo-Recovered-shadow2.png")} alt="" />
        <div className={`links ${clicked ? 'active' : ''}`}>
          <div class="navbar">
            <a href="#beranda">BERANDA</a>
            <a href="#edukasi">EDUKASI</a>
            <a href="#berita">BERITA</a>
            <div class="dropdown">
              <button class="dropbtn">DONASI
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a href="#ajukan">Ajukan Donasi</a>
                <a href="#data">Data Donasi</a>
              </div>
            </div>
            <a href="#tentangkami">TENTANG KAMI</a>
          </div>
        </div>
        <div className='burger'>
          <BurgerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </NavContainer>
    </>
  )
}

export default Navbar

const NavContainer = styled.nav`
  padding: 10px 50px;
  background-color: #219653;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img{
    height: 100px;
  }

  /* Links inside the navbar */
  .navbar a {
    float: left;
    font-size: 20px;
    font-weight: bold;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  /* The dropdown container */
  .dropdown {
    float: left;
    overflow: hidden;
  }
  
  /* Dropdown button */
  .dropdown .dropbtn {
    font-size: 20px;
    font-weight: bold;
    border: none;
    outline: none;
    color: white;
    padding: 14px 16px;
    background-color: inherit;
    font-family: inherit; /* Important for vertical align on mobile phones */
    margin: 0; /* Important for vertical align on mobile phones */
  }

  /* Dropdown content (hidden by default) */
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }

  /* Links inside the dropdown */
  .dropdown-content a {
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
  }

  /* Add a grey background color to dropdown links on hover */
  .dropdown-content a:hover {
    background-color: #ddd;
  }

  /* Show the dropdown menu on hover */
  .dropdown:hover .dropdown-content {
    display: block;
  }

  // .links{
  //   position: absolute;
  //   top: -700px;
  //   left: -2000px;
  //   right: 0;
  //   margin-left: auto;
  //   margin-right: auto;
  //   text-align: center;
  //   transition: all .5s ease;
  //   a{
  //     color: white;
  //     font-size: 2rem;
  //     display: block;
  //   }
  //   @media(min-width: 768px){
  //     position: initial;
  //     margin: 0;
  //     a{
  //       font-size: 1rem;
  //       color: white;
  //       display: inline;
  //     }
  //     display: block;
  //   }
  // }
  // .links.active{
  //   width: 100%;
  //   display: block;
  //   position: absolute;
  //   margin-left: auto;
  //   margin-right: auto;
  //   top: 30%;
  //   left: 0;
  //   right: 0;
  //   text-align: center;
  //   a{
  //     font-size: 2rem;
  //     margin-top: 1rem;
  //     color: white;
  //   }
  // }
  .burger{
    @media(min-width: 768px){
      display: none;
    }
  }
`

const BgDiv = styled.div`
  background-color: #219653;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`