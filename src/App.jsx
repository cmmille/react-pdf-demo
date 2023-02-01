import "./App.css";

import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import MyDocument from "./components/MyDocument";

function App() {
  return (
    <div className="App container">
      <h1>@react-18-pdf/renderer demo</h1>
      <div className="container card">
        <h2>PDFDownloadLink</h2>
        <PDFDownloadLink fileName="demo.pdf" document={<MyDocument />}>
          Download
        </PDFDownloadLink>
      </div>

      <div className="container card full">
        <h2>PDFViewer</h2>
      <PDFViewer height={'100%'}>
        <MyDocument />
      </PDFViewer>
      </div>
    </div>
  );
}

export default App;
