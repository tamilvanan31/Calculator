import { Component } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { CalculatorComponent } from './calculator/calculator.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(public dialog: MatDialog) {}

  openDialog(start: string, end: string): void {
    this.dialog.open(CalculatorComponent, {width: '25%'})
  }

}
