import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const svgData = encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="M7.996 0A8 8 0 0 0 0 8a8 8 0 0 0 6.93 7.93v-1.613a1.06 1.06 0 0 0-.717-1.008A5.6 5.6 0 0 1 2.4 7.865 5.58 5.58 0 0 1 8.054 2.4a5.6 5.6 0 0 1 5.535 5.81l-.002.046-.012.192-.005.061a5 5 0 0 1-.033.284l-.01.068c-.685 4.516-6.564 7.054-6.596 7.068A7.998 7.998 0 0 0 15.992 8 8 8 0 0 0 7.996.001Z"/>
    </svg>`);
    
const dataUri = `data:image/svg+xml;charset=UTF-8,${svgData}`;

function Header() {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={dataUri}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React Bootstrap
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;