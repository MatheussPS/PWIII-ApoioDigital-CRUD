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

  frasesInterativas: string[] = [
    'Quero ajuda com',
    'Preciso de ajuda com',
    'Gostaria de ajuda com',
    'Me ajuda com',
    'Tenho dúvida sobre'
  ];

  EnviarInput() {
      // alert(`Enviada uma requisição de: ${this.inputUserForm.get("ajuda")?.value}`);
      this.requisicao.emit(`${this.EscolherFrase()} ${this.inputUserForm.get("ajuda")?.value}`);
  }

  EscolherFrase(){
    const fraseAleatoria = this.frasesInterativas[
        Math.floor(Math.random() * this.frasesInterativas.length)
      ];
    return fraseAleatoria.toLocaleUpperCase()
  }

}
