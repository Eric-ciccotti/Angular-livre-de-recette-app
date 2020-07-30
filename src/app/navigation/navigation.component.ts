import { DataStorageService } from './../shared/data-storage.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  //variables necessaires pour le menu déroulant NG-bootstrap
  collapsed: boolean = true;
  isMenuCollapsed = true;
  
  //variable necessaires pour le MODAL NG-bootstrap
  closeResult = '';
  @ViewChild('content', { static: false, }) content: ElementRef;

  //si return return FALSE = il y a 0 recette à sauvegarder ? donc on ouvre le modal
  //sinon on sauvegarde
  
  onSauvegarderRecette() {
    if (!this.dataSortageService.stockerRecette()) {
      this.open(this.content);
    } else {
      this.dataSortageService.stockerRecette()
    }
  }

  onRecupererRecette() {
    this.dataSortageService.recupererRecette().subscribe();
  }


  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  constructor(private dataSortageService: DataStorageService, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

}
