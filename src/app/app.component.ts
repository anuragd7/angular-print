import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'print';

  print(): void {
    let printContents, popupWin;
    printContents = document.getElementById('print-section').innerHTML;
    // const sib1 = document.getElementById('print-section').previousSibling;
    // const sib1 = document.getElementById('print-section').previousSibling;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Print tab</title>
          <style>
          @page {
            size: auto;
            margin:45;
          }
          .header, .hide { visibility: hidden }
          </style>
        </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
}
}
