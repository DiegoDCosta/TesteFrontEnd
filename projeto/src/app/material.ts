import { MatButtonModule, MatCheckboxModule } from "@angular/material";
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule
  ],

  exports:[
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule
  ]
})

export class MaterialModule{

}
