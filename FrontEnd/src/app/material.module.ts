import { NgModule } from '@angular/core';
import { MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule } from '@angular/material';
import { MatMenuModule, MatNativeDateModule, MatIconModule, MatCheckboxModule} from '@angular/material';
import { MatCardModule, MatRadioModule, MatListModule, MatToolbarModule, MatDatepickerModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule, MatSidenavModule } from '@angular/material';
import { MatDividerModule, MatChipsModule } from '@angular/material';
import { MatStepperModule, MatSnackBarModule, MatSelectModule } from '@angular/material';

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
    MatDatepickerModule,
    MatTableModule,
    MatExpansionModule,
    MatDividerModule,
    MatStepperModule,
    MatSnackBarModule,
    MatChipsModule,
    MatSelectModule,
    MatSidenavModule
  ]
})
export class MaterialModule {}
