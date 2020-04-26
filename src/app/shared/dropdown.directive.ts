import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
  exportAs: 'refDropdownDirective'
})
//exportAs: Defines the name that can be used in the template to assign this directive to a variable.

//we need to use the directive reference to use the show property

export class DropdownDirective {
  @HostBinding('class.show') show: boolean = false;

  @HostListener('document:click',  ['$event']) onToggle(event: Event){
    this.show = !this.show;
  }
}
