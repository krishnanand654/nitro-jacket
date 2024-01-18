
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { UserOutlined, ShoppingCartOutlined, SearchOutlined } from '@ant-design/icons'
export const Navbarx = () => {
    return (
        <div style={{ position: "fixed", width: "100%", top: '0px' }}>
            <Navbar expand="lg" className="sticky nav"
            >
                <Container >
                    <Navbar.Brand href="#" className='font-bold text-[#5D5249;]' >NITRO.</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 text-sm text-[#7D4C00] font-medium"
                            style={{ maxHeight: '100px', fontSize: '12px' }}
                            navbarScroll

                        >
                            <Nav.Link href="#action2" >PRODUCTS</Nav.Link>
                            <Nav.Link href="#action2">CATEGORY</Nav.Link>
                            <Nav.Link href="#action1">MORE</Nav.Link>


                        </Nav>
                        <div className="d-flex ">
                            <SearchOutlined className='mr-5' />
                            <ShoppingCartOutlined className='mr-5' />
                            <UserOutlined className='mr-5' />
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div >
    )
}
