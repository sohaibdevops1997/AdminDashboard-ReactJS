import React from 'react';
import { generatePDF } from '../lib/pdfGenerator'; // Import your PDF function

const GeneratePDF = () => {
  return (
    <div>
      <h1>PDF Report Generator</h1>
      <button onClick={generatePDF}>Generate PDF</button>
    </div>
  );
};

export default GeneratePDF;
