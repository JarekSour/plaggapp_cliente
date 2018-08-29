import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact/contact.component';
import { HeaderModule } from '../header/header.module';

@NgModule({
    imports: [
        CommonModule,
        ContactRoutingModule,
        HeaderModule,
        ToastrModule.forRoot(),
        FormsModule
    ],
    declarations: [ContactComponent]
})
export class ContactModule { }
