import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit {

  //buscar ejemplos en la documentación de Angular

  private htmlElement?: ElementRef<HTMLElement>;

  private _color: string = 'black';
  private _errors?: ValidationErrors | null;

  @Input() set color ( value: string) {
    this._color = value;
    this.setStyle();
  }

  @Input() set errors ( value: ValidationErrors | null | undefined) {
    this._errors = value;
    this.setErrorMessages();
  }

  private set text( value: string) {
    if (!this.htmlElement)
      return;

    this.htmlElement.nativeElement.innerText = value;
  }

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  ngOnInit(): void {
    this.setStyle();
  }

  private setStyle(): void {
    if (!this.htmlElement)
      return;

    this.htmlElement.nativeElement.style.color = this._color;
  }

  private setErrorMessages(): void {
    if (!this.htmlElement)
      return;

    if (!this._errors){
      this.text = 'No hay errores';
      return;
    }

    const errors = Object.keys(this._errors);

    if ( errors.includes('required') ) {
      this.text = 'Campo requerido';
      return;
    }

    if ( errors.includes('minlength') ) {
      const min = this._errors!['minlength']['requiredLength'];
      const current = this._errors!['minlength']['actualLength'];
      this.text = `Mínimo ${min} caracteres, actual ${current}`;
      return;
    }

    if ( errors.includes('email') ) {
      this.text = 'Email inválido';
      return;
    }

  }

}
