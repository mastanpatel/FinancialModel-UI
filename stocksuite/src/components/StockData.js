import { useEffect, useState, useRef } from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const StockData = () => {

    const [rowData, setRowData] = useState([]);
    const gridRef = useRef(null);


useEffect(() => {
    fetch('https://localhost:44307/StockAPItest/GetStockValues')
        .then(result => result.json())
        .then(rowData => setRowData(rowData))
}, []);



   return (
       <div className="ag-theme-alpine" style={{ width: "100%", height: 780 }}>
           <AgGridReact 
               ref={gridRef}
               rowData={rowData}
               paginationAutoPageSize={true}
               pagination={true}
               rowSelection="multiple">
               <AgGridColumn field="TradeDate" filter={ true } sortable={true} ></AgGridColumn>
               <AgGridColumn field="open" filter={ true } sortable={true} ></AgGridColumn>
               <AgGridColumn field="high" filter={ true } sortable={true} ></AgGridColumn>
               <AgGridColumn field="low" filter={ true } sortable={true} ></AgGridColumn>
               <AgGridColumn field="close" filter={ true } sortable={true} ></AgGridColumn>
               <AgGridColumn field="adjusted_close" filter={ true } sortable={true} ></AgGridColumn>
               <AgGridColumn field="volume" filter={ true } sortable={true} ></AgGridColumn>
               <AgGridColumn field="dividend_amount" filter={ true } sortable={true} ></AgGridColumn>
               <AgGridColumn field="split_coefficient" filter={ true } sortable={true} ></AgGridColumn>
           </AgGridReact>
       </div>
   );
};

export default StockData;