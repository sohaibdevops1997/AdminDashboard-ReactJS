import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardComponent from '../components/CardComponent';
import PersonalInfoForm from '../components/PersonalInfoForm';
import ValidationForm from '../components/ValidationForm';
import TableComponent from '../components/TableComponent';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';

import '../styles/MainBody.css';

const tableColumns = ['Header 1', 'Header 2', 'Header 3'];
const tableData = [
  ['Row 1 Col 1', 'Row 1 Col 2', 'Row 1 Col 3'],
  ['Row 2 Col 1', 'Row 2 Col 2', 'Row 2 Col 3'],
  ['Row 2 Col 1', 'Row 2 Col 2', 'Row 2 Col 3'],
  ['Row 2 Col 1', 'Row 2 Col 2', 'Row 2 Col 3'],
  ['Row 2 Col 1', 'Row 2 Col 2', 'Row 2 Col 3'],
];

const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const MainBody = () => {
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://localhost:7268/api/AdminPanel/GetEmplyeeForPortal/1/87')
      .then(response => {
        setCardData(response.data); // Assuming the API returns an array of card data
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []); // Empty dependency array means this effect runs once after the initial render

  if (loading) return <p><Spinner animation="border" variant="danger" /></p>;
  if (error) return <p>Error loading cards: {error.message}</p>;

  const cardRows = chunkArray(cardData, 4);

  return (
    <main className="main-body">
      <Container >
        <PersonalInfoForm />
      </Container>

      <Container className="card-grid">
        {cardRows.map((row, rowIndex) => (
          <div className="card-row" key={rowIndex}>
            {row.map((card, cardIndex) => (
              <CardComponent
                key={cardIndex}
                title={card.name}
                text={card.company}
                svgPath={card.picture}
              />
            ))}
          </div>
        ))}
      </Container>

      <Container className="validationForm-container">
        <ValidationForm />
      </Container>

      <Container className="table-container">
        <TableComponent columns={tableColumns} data={tableData} />
      </Container>
    </main>
  );
};

export default MainBody;
