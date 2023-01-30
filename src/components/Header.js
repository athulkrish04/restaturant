import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://i.postimg.cc/yYhkXzsD/kisspng-portable-network-graphics-food-fusion-cuisine-logo-restrokhana-your-online-restaurant-partne.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Tosto Cafe
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
