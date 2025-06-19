import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-input',
  imports: [ReactiveFormsModule],
  templateUrl: './create-input.component.html',
  styleUrl: './create-input.component.css'
})
export class CreateInputComponent {
  @Output() requisicao = new EventEmitter();

  inputUserForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.inputUserForm = this.fb.group({
      ajuda: ['', [Validators.required]]
    });
  }

  EnviarInput() {
      // alert(`Enviada uma requisição de: ${this.inputUserForm.get("ajuda")?.value}`);
      this.requisicao.emit(this.inputUserForm.get("ajuda")?.value);
  }

}
