import React, { useState, useRef, useEffect } from 'react';
import { links } from '../utils/constants';
import { Link } from 'react-router-dom';
import { ArrowDown, HeaderDesktop, HeaderMobile, Logo } from '../assets';
import styled from 'styled-components';
import { Divide as Hamburger } from 'hamburger-react';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const linksContainterRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainterRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainterRef.current.style.height = '0px';
    }
  }, [showLinks]);

  const closeMenu = () => {
    setOpen(false);
    setShowLinks(false);
  };

  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={Logo} alt="Sunnyside" className="logo" />
          </Link>
          <Hamburger
            className="nav-toggle"
            size={24}
            toggled={isOpen}
            toggle={setOpen}
            color="#FFF"
            label="Show menu"
            distance="sm"
            onToggle={(toggled) => {
              if (toggled) {
                setShowLinks(true);
              } else {
                setShowLinks(false);
              }
            }}
          ></Hamburger>
        </div>
        <div className="links-container" ref={linksContainterRef}>
          <div className="arrow-up"></div>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, text } = link;
              return (
                <li
                  onClick={() => {
                    closeMenu();
                  }}
                  key={id}
                >
                  <Link to="/">{text}</Link>
                </li>
              );
            })}
            <button
              onClick={() => {
                closeMenu();
              }}
              className="contact"
            >
              Contact
            </button>
          </ul>
        </div>
      </div>
      <h1>We are creatives</h1>
      <div className="header-arrow">
        <img src={ArrowDown} alt="arrow pointing down" />
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  background: url(${HeaderMobile});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: calc(50% - 0px / 2) calc(50% + 0px / 2);
  height: 512px;
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 4.888rem;
    width: 87.733vw;
    margin: 0 auto;
    position: relative;
    z-index: 100;
    .logo {
      height: 27px;
    }
    .hamburger-react {
      margin-bottom: 0.5rem;
      margin-right: -0.5rem;
    }
  }

  .links-container {
    height: 0;
    overflow: hidden;
    transition: var(--transition);
    z-index: 90;
    position: absolute;
    margin: 0rem auto;
    left: 0;
    right: 0;
    width: 87.733vw;
    .links {
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-color: var(--white);
      padding-top: 1.5rem;
      a {
        font-family: 'Barlow';
        font-weight: 600;
        text-align: center;
        color: var(--dark-grayish-blue);
        font-size: 1.111rem;
        letter-spacing: var(--spacing);
        display: block;
        padding: 1rem;
        transition: var(--transition);
      }
    }
    button {
      font-family: 'Fraunces';
      font-weight: bold;
      font-size: 0.889rem;
      text-align: center;
      text-transform: uppercase;
      background-color: var(--yellow);
      color: var(--very-dark-desaturated-blue);
      border: none;
      width: 140px;
      margin: 1.5rem auto 3.722rem;
      padding: 1.5rem;
      border-radius: 45px;
      cursor: pointer;
    }
    .arrow-up {
      margin-left: auto;
      margin-right: 0;
      width: 0;
      height: 0;
      right: 0;
      top: -24px;
      border-bottom: 24px solid #fff;
      border-left: 24px solid transparent;
    }
  }

  h1 {
    color: var(--white);
    text-align: center;
    padding-top: 3.75rem;
  }

  .header-arrow {
    text-align: center;
    padding-top: 3.75rem;
  }

  @media screen and (min-width: 875px) {
    background: url(${HeaderDesktop});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: calc(50% - 0px / 2) calc(50% + 0px / 2);
    height: 800px;
    .nav-header {
      .logo {
        height: 33px;
      }
    }
    .arrow-up {
      display: none;
    }
    .nav-center {
      width: 93.889vw;
      max-width: var(--max-width);
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 6.889rem;
    }

    .hamburger-react {
      display: none;
    }
    .links-container {
      position: relative;
      height: auto !important;
      background-color: transparent;
      position: relative;
      .links {
        flex-direction: row;
        justify-content: flex-end;
        background-color: transparent;
        align-items: center;
        padding: 0;

        a {
          position: relative;
          color: var(--white);
          padding: 0;
          font-size: 1rem;
          margin-left: 2.667rem;
          transition: var(--transition);
          :hover {
            transform: scale(1.1);
          }
        }
        button {
          margin: 0;
          padding: 1rem;
          border-radius: 45px;
          background-color: var(--white);
          margin-left: 2.667rem;
          transition: var(--transition);
          :hover {
            color: var(--white);
            background-color: rgba(255, 255, 255, 0.2);
          }
        }
      }
    }
    h1 {
      padding-top: 5.333rem;
    }

    .header-arrow {
      padding-top: 5.333rem;
    }
  }
`;

export default Navbar;
