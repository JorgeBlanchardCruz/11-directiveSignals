import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {

  private fb = inject( FormBuilder );

  public color: string = 'green';

  public form: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(6), Validators.email] ],
  });


}
