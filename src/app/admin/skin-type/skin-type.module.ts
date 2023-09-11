import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkinTypeComponent } from './skin-type.component';
import { CreateSkinTypeDialogComponent } from './create-skinType/create-skin-type-dialog.component';
import { SharedModule } from 'src/shared/shared.module';
import { LayoutModule } from "../containers/layout/layout.module";



@NgModule({
    declarations: [
        SkinTypeComponent,
        CreateSkinTypeDialogComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        LayoutModule,
        
    ]
})
export class SkinTypeModule { }
