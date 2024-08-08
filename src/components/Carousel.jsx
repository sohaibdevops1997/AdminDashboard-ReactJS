import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import ValidationForm from '../components/ValidationForm';
import logo from '../assets/sysadmin_03.jpg';
import logo1 from '../assets/3054596.jpg';
import logo2 from '../assets/3714960.jpg';
function CarouselControl() {
  return (
    <Carousel>
      <Carousel.Item>
      <img
        alt=""
        src={logo}
        width="900"
        height="500"
        className="d-inline-block align-top"
      />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
            <img
        alt=""
        src={logo1}
        width="900"
        height="500"
        className="d-inline-block align-top"
      />
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        alt=""
        src={logo2}
        width="900"
        height="500"
        className="d-inline-block align-top"
      />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselControl;