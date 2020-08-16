import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
 export class AppComponent {
  title = 'mygrid1';
  private gridApi;
  private gridColumnApi;
  //public 
  columnDefs;
  //public 
  rowData : any;
  //public 
  //sortingOrder; 
  constructor(private http: HttpClient){
    this.columnDefs = [
    { headerName: "Athlete", field: "athlete", sortingOrder:["asc"] },
    { headerName: "Age", field: "age"},
    { headerName: "Country", field: "country"},
    { headerName: "Year", field: "year"},
    { headerName: "Date", field: "date", sortable:"true"},
    { headerName: "Sport", field: "sport"},
    { headerName: "Gold", field: "gold"},
    { headerName: "Silver", field: "silver"},
    { headerName: "Bronze", field: "bronze"},
    { headerName: "Total", field: "total"}
    ];

/*     this.rowData = [
    {make:'Toyota', model: 'Santra', price: 3500},
    {make: 'Ford', model: "mondoe", price: 100},
    {make: 'Porche', model: 'Boxer', price: 200}
    ]; */
  }
  onGridReady(parmms){
    this.gridApi = parmms.api;
    this.gridColumnApi = parmms.columnApi;
    this.http
    .get("https://raw.githubusercontent.com/ag-grid/ag-grid-docs/master/src/olympicWinnersSmall.json")
    .subscribe(data=> { 
    parmms.api.setRowData(data);
     })
  }
}
