// import { useEffect, useState, useRef } from 'react';
// import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import StockData from './components/StockData';
import StockMetaData from './components/StockMetaData';


const App = () => {


   return (
       <div>
           <StockMetaData></StockMetaData>
           <StockData></StockData>
           
       </div>
   );
};

export default App;