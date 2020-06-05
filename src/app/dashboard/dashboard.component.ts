import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';

import {DadosService} from './dados.service';

declare var google: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private dados: any;

  constructor(private dadosService: DadosService) { }

  ngOnInit(): void {
    this.dadosService.obterDados().subscribe(
      dados => {
        this.dados = dados;
        this.init();
      }
    );
  }

  init(): void {
    if (typeof(google) !== 'undefined' ) {
      google.charts.load('current', {packages: ['corechart']});
      setTimeout(() => {
        google.charts.setOnLoadCallback(this.exibirGraficos());
      }, 1000);
    }
  }

  exibirGraficos() {
    this.exibirPieChart();
    this.exibir3dPieChart();
    this.exibirDonutChart();
    this.exibirBarChart();
    this.exibirLineChart();
    this.exibirColumnChart();
  }

  exibirPieChart() {
    const elementoHtml = document.getElementById('pie_chart');
    const pieChart = new google.visualization.PieChart(elementoHtml);

    pieChart.draw(this.obterDataTable(), this.obterOpcoes());
  }

  exibir3dPieChart() {
    const elementoHtml = document.getElementById('3d_pie_chart');
    const pie3dChart = new google.visualization.PieChart(elementoHtml);
    const opcoes = this.obterOpcoes();

    opcoes['is3D'] = true;
    pie3dChart.draw(this.obterDataTable(), opcoes);
  }

  exibirDonutChart() {
    const elementoHtml = document.getElementById('donut_chart');
    const donutChart = new google.visualization.PieChart(elementoHtml);
    const opcoes = this.obterOpcoes();

    opcoes['pieHole'] = 0.3;
    donutChart.draw(this.obterDataTable(), opcoes);
  }

  exibirBarChart() {
    const elementoHtml = document.getElementById('bar_chart');
    const barChart = new google.visualization.BarChart(elementoHtml);

    barChart.draw(this.obterDataTable(), this.obterOpcoes());
  }

  exibirLineChart() {
    const elementoHtml = document.getElementById('line_chart');
    const lineChart = new google.visualization.LineChart(elementoHtml);

    lineChart.draw(this.obterDataTable(), this.obterOpcoes());
  }

  exibirColumnChart() {
    const elementoHtml = document.getElementById('column_chart');
    const columnChart = new google.visualization.ColumnChart(elementoHtml);

    columnChart.draw(this.obterDataTable(), this.obterOpcoes());
  }

  obterDataTable(): any {
    const data = new google.visualization.DataTable();

    data.addColumn('string', 'Mês');
    data.addColumn('number', 'Quantidade');
    data.addRows(this.dados);

    return data;
  }

  obterOpcoes() {
    return {
      title: 'Quatidade de cadastros primeiro semestre',
      width: 400,
      height: 300
    };
  }
}
