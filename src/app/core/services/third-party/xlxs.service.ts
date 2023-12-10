import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
@Injectable({
  providedIn: 'root',
})
export class XLXSProvider {

  now          : any    = new Date();
  constructor() {}

  generateExport(json : any,header : any) {
    const file = `report-rassur-${this.now.getDate()}/${this.now.getMonth() + 1}/${this.now.getFullYear()}-${this.now.getMilliseconds()}.xlsx`;
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet([]);
    /* generate workbook and add the worksheet */
    XLSX.utils.sheet_add_aoa(ws, header);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.sheet_add_json(ws, json, { origin: 'A2', skipHeader: true });
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    /* save to file */
    XLSX.writeFile(wb, file);

  }


}
