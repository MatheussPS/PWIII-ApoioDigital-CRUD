import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { historico } from './historico-data';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnChanges, OnInit {
  @Input() novaMensagem = '';

  todayH: { mensagem: string; timeStamp: string }[] = [];
  lastDaysH: { mensagem: string; timeStamp: string }[] = [];
  lastH: { mensagem: string; timeStamp: string }[] = [];

  mesAtual = new Date().getMonth() + 1;
  hoje = new Date().toISOString().split('T')[0];

  historico = historico;

  Adicionar() {
    if (!this.historico.some(item => item.mensagem.trim().toLowerCase() === `quero ajuda com ${this.novaMensagem.trim().toLowerCase()}`)
    ) {
      this.historico.unshift({
        mensagem: `Quero ajuda com ${this.novaMensagem.trim().toLowerCase()}`,
        timeStamp: this.hoje
      });
      this.Categorizar();
    }
  }

  Deletar(item: { mensagem: string, timeStamp: string }) {
    const index = this.historico.indexOf(item);
    if (index > -1) {
      this.historico.splice(index, 1);
      this.Categorizar();
    }
  }

  Categorizar() {
    const diaHoje = new Date();
    const seteDiasAtras = new Date();
    seteDiasAtras.setDate(diaHoje.getDate() - 7);

    this.todayH = [];
    this.lastDaysH = [];
    this.lastH = [];

    for (const item of this.historico) {
      const dataItem = new Date(item.timeStamp);

      const isHoje = dataItem.toISOString().split('T')[0] === this.hoje;
      const isUltimos7Dias = dataItem > seteDiasAtras && dataItem < diaHoje;

      if (isHoje) {
        this.todayH.push(item);
      } else if (isUltimos7Dias) {
        this.lastDaysH.push(item);
      } else {
        this.lastH.push(item);
      }
    }
  }

  ngOnInit(): void {
    this.Categorizar();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['novaMensagem'] && this.novaMensagem.trim() !== '') {
      this.Adicionar();
    }
  }
}
