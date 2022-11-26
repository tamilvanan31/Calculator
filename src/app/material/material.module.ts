import { NgModule } from '@angular/core'
import {MatButtonModule} from '@angular/material/button'
import {MatDialogModule} from '@angular/material/dialog'
import {MatCardModule} from '@angular/material/card'
import {MatIconModule} from '@angular/material/icon'
import {MatFormFieldModule} from '@angular/material/form-field'


const materials = [
  MatButtonModule,
  MatDialogModule,
  MatCardModule,
  MatIconModule,
  MatFormFieldModule
]

@NgModule({
  imports: [materials],
  exports: [materials]
})
export class MaterialModule { }
