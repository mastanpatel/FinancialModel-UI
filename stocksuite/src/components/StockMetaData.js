import { useEffect, useState, useRef } from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import './StockMetaData.css';

const StockMetaData = () => {

    const [MetarowData, setMetaRowData] = useState([]);
    const gridRef = useRef(null);


useEffect(() => {
    fetch('https://localhost:44307/StockAPItest/GetStockInfo')
        .then(result => result.json())
        .then(MetarowData => setMetaRowData(MetarowData))
}, []);


 const onButtonClick = e => {
       const selectedNodes = gridRef.current.api.getSelectedNodes()
        const selectedData = selectedNodes.map( node => node.data )
        const selectedDataStringPresentation = selectedData.map( node => `${node.make} ${node.model}`).join(', ')
        alert(`Selected nodes: ${selectedDataStringPresentation}`)
      }
    

   return (
       <div className="ag-theme-alpine" style={{ width: "100%", height: 150 }}>
           <button onClick={onButtonClick}>Get selected rows</button>
           <AgGridReact
               ref={gridRef}
               rowData={MetarowData}
               rowSelection="multiple">
               <AgGridColumn field="Information" width={350}></AgGridColumn>
               <AgGridColumn field="Symbol"></AgGridColumn>
               <AgGridColumn field="LastRefreshed"></AgGridColumn>
               <AgGridColumn field="OutputSize"></AgGridColumn>
               <AgGridColumn field="TimeZone"></AgGridColumn>
           </AgGridReact>
           
       </div>
   );
};

export default StockMetaData;