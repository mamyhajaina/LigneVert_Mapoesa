import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {

  constructor() {

  }
  ngOnInit() {
    this.statistqueProjet();
    this.statistqueAppel();
  }
  statistqueProjet() {
    const ctx = document.getElementById('appels');
    if (ctx instanceof HTMLCanvasElement) {
      const myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
            label: 'Line Chart',
            data: [0, 0, 0, 0, 3, 2, 4],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
        }
      });
    } else {
      console.error('Erreur: L\'élément canvas est introuvable.');
    }
  }

  statistqueAppel() {
    const ctx = document.getElementById('projet');
    if (ctx instanceof HTMLCanvasElement) {
      const data = {
        labels: ['RIMA', 'Test', 'Test 2'],
        datasets: [{
          label: 'Courbe horizontale',
          data: [7, 0, 1], // Valeurs pour l'axe des ordonnées (y)
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 1
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
