import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/MainBody.css';
import CardComponent from '../components/CardComponent';
import ValidationForm from '../components/ValidationForm';
import CarouselControl from '../components/Carousel';
import AccordionBasic from '../components/Accordion'
import BarChartComponent from '../components/BarChart'
import PieChartComponent from '../components/PieChart'
import LineChartComponent from '../components/LineChart'
import GaugeChartComponent from '../components/GaugeChart'
const cardData = [
    {
      title: "Card Title 1",
      text: "Some quick example text to content.",
      svgPath: "M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0 M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z"
    },
    {
      title: "Card Title 2",
      text: "Some quick example text content.",
      svgPath: "M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0 M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z"
    },
    {
        title: "Card Title 3",
        text: "Some quick example text  content.",
        svgPath: "M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0 M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z"
      },
      {
        title: "Card Title 4",
        text: "Some quick example text content.",
        svgPath: "M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0 M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z"
      }
  ];

  const tableColumns = ['Header 1', 'Header 2', 'Header 3'];
  const tableData = [
    ['Row 1 Col 1', 'Row 1 Col 2', 'Row 1 Col 3'],
    ['Row 2 Col 1', 'Row 2 Col 2', 'Row 2 Col 3'],
    ['Row 2 Col 1', 'Row 2 Col 2', 'Row 2 Col 3'],
    ['Row 2 Col 1', 'Row 2 Col 2', 'Row 2 Col 3'],
    ['Row 2 Col 1', 'Row 2 Col 2', 'Row 2 Col 3'],
  ];

  const Feature = () => {
  return (
    <main className="main-body">

        <Container>
        <CarouselControl />
        </ Container>

      <Container className="card-grid">
        <div className="card-row">
          {cardData.slice(0, 4).map((card, index) => (
            <CardComponent
              key={index}
              title={card.title}
              text={card.text}
              svgPath={card.svgPath}
            />
          ))}
        </div>
      </Container>

      <Container >
        <ValidationForm />
      </Container>

      <Container className="gap">
          <AccordionBasic />
      </Container>

      <Container className="gap">
      <Card>
          <Card.Body>
            <Card.Title>Pie Chart</Card.Title>
            <Card.Text>
            <BarChartComponent />
            </Card.Text>
          </Card.Body>
        </Card>
        
      </Container>

      <Container className="gap">
    <Row className="justify-content-md-center">
      <Col xs={12} md={6} lg={4} className="mb-4">
        <Card>
          <Card.Body>
            <Card.Title>Pie Chart</Card.Title>
            <Card.Text>
             <PieChartComponent />
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      
      <Col xs={12} md={6} lg={4} className="mb-4">
        <Card>
          <Card.Body>
            <Card.Title>Guage Chart</Card.Title>
            <Card.Text>
              <GaugeChartComponent />
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      
      <Col xs={12} md={6} lg={4} className="mb-4">
        <Card>
          <Card.Body>
            <Card.Title>Line Chart</Card.Title>
            <Card.Text>
              <LineChartComponent />
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>

  <Container>
  <div class="custom-card card"><div class="card-body"><h6 class="card-title fw-semibold mb-2">Card title</h6><p class="card-subtitle mb-3 text-muted">Card subtitle</p><p class="card-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration many variations of passages of Lorem Ipsum available there are so many ways to solve but the majority have suffered.</p></div></div>
    </Container>
    </main>
  );
};

export default Feature;