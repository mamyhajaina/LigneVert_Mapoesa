import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent {

  constructor(){

  }
  ngOnInit(){
    this.statistqueProjet();
    this.statistqueAppel();
  }
  statistqueProjet(){
    const ctx = document.getElementById('appels');
    if (ctx instanceof HTMLCanvasElement) {
      const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['AMPANIHY', 'BELOHA', 'TSIHOMBE'],
          datasets: [{
            label: 'Data',
            data: [10, 20, 30]
          }]
        }
      });
    } else {
      console.error('Erreur: L\'élément canvas est introuvable.');
    }
  }

  statistqueAppel(){
    const ctx = document.getElementById('projet');
    if (ctx instanceof HTMLCanvasElement) {
      const data = {
        labels: ['Label 1', 'Label 2', 'Label 3'],
        datasets: [{
          label: 'Courbe horizontale',
          data: [10, 20, 30], // Valeurs pour l'axe des ordonnées (y)
          backgroundColor: 'blue'
        }]
      };
      const options = {
        indexAxis: 'y', // Échange des axes des abscisses et des ordonnées
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: 'Axe des abscisses'
            }
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Axe des ordonnées'
            }
          }
        }
      };
      const myChart = new Chart(ctx, {
        type: "bar", // Utilisation de la chaîne de caractères "bar"
        data: data
      });
    } else {
      console.error('Erreur: L\'élément canvas est introuvable.');
    }
  }

}
