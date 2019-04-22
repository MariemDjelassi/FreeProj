import { NgModule } from '@angular/core';
import { MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule } from '@angular/material';
import { MatMenuModule, MatNativeDateModule, MatIconModule, MatCheckboxModule} from '@angular/material';
import { MatCardModule, MatRadioModule, MatListModule, MatToolbarModule, MatDatepickerModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  exports:
  [
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatNativeDateModule,
    MatIconModule,
    MatCheckboxModule,
    MatCardModule,
    MatRadioModule,
    MatListModule,
    MatToolbarModule,
    MatDatepickerModule
    ]
})
export class MaterialModule {}
