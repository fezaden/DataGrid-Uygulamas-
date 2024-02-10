import { BsModalRef, BsModalService, ModalDirective, ModalModule } from 'ngx-bootstrap/modal';
import { Component, Injectable, ViewChild, ViewEncapsulation,VERSION, TemplateRef } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NavbarComponent } from '../navbar/navbar.component';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { SocialModel } from '../../models/social.model';
import { SocialLocalRepository } from '../../repository/social.local';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormGroupDirective, FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-data-content',
  standalone: true,
  imports: [NgxDatatableModule,
    NavbarComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
  
  ],
  providers: [BsModalService,BsModalRef,FormGroup,FormBuilder],
  templateUrl: './data-content.component.html',
  styleUrl: './data-content.component.css',
  encapsulation: ViewEncapsulation.None,

})
export class DataContentComponent {
  name = 'Angular ' + VERSION.major;
  @ViewChild(DatatableComponent) table: DatatableComponent|any;

  dataList: SocialModel[] = [];
  submit: boolean = false;
  socialForm: FormGroup<any> | undefined;
  modalRef?: BsModalRef;
  @ViewChild('showModal', { static: false }) showModal?: ModalDirective;
  constructor(private service: SocialLocalRepository,private modalService: BsModalService,  private formBuilder: FormBuilder){

  }
  ngOnInit(){
    this.fetchList();

  }

  createSocialForm() {
    this.socialForm = this.formBuilder.group({
      name:  ['', Validators.required],
      link:  ['', Validators.required],
      content:  ['', Validators.required],
      
    })
  }
 
  openModal(template: TemplateRef<any>) {
    this.createSocialForm();
    this.modalRef = this.modalService.show(template);
  }
  
  ColumnMode = ColumnMode;

  fetchList() {
    this.service.getList().subscribe(data =>{
      this.dataList = data
    });
  }

  addModel(model: SocialModel) {
    this.service.addSocial(model);
    this.fetchList();
  }

  updateFilter(event:any) {
    /*const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;*/
  }
}
