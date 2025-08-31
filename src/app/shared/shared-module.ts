import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InputComponent } from '../shared/components/input/input.component';
import { SelectComponent } from '../shared/components/select/select.component';
import { ButtonComponent } from '../shared/components/button/button.component';
import { LinkComponent } from '../shared/components/link/link.component';
import { CardComponent } from '../shared/components/card/card.component';
import { PrincipalNewsComponent } from '../shared/components/principal-news/principal-news.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
import { ListComponent } from '../shared/components/list/list.component';
import { ModalComponent } from '../shared/components/modal/modal.component';
import { UserFormComponent } from '../shared/components/user-form/user-form.component';

@NgModule({
  declarations: [
    InputComponent,
    SelectComponent,
    ButtonComponent,
    LinkComponent,
    CardComponent,
    PrincipalNewsComponent,
    HeaderComponent,
    SidebarComponent,
    ListComponent,
    ModalComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    InputComponent,
    SelectComponent,
    ButtonComponent,
    LinkComponent,
    CardComponent,
    PrincipalNewsComponent,
    HeaderComponent,
    SidebarComponent,
    ListComponent,
    ModalComponent,
    UserFormComponent
  ]
})
export class SharedModule {}
