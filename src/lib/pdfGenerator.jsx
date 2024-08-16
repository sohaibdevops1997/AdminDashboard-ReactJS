import jsPDF from 'jspdf';
import 'jspdf-autotable'; // For adding tables to PDF

export const generatePDF = () => {
  const doc = new jsPDF();

  // Add a title
  doc.text('PDF Report', 10, 10);

  // Add some content
  doc.text('This is an example PDF generated with jsPDF.', 10, 20);

  // Example: Adding a table
  const tableColumn = ["Name", "Email"];
  const tableRows = [
    ["John Doe", "john@example.com"],
    ["Jane Smith", "jane@example.com"]
  ];

  doc.autoTable(tableColumn, tableRows, { startY: 30 });

  // Save the PDF
  doc.save('report.pdf');
};
