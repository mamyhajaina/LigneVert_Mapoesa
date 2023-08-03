import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-statistiqueManager',
  templateUrl: './statistiqueManager.component.html',
  styleUrls: ['./statistiqueManager.component.css']
})
export class StatistiqueManagerComponent implements OnInit {


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
        type: 'pie',
        data: {
          labels: [
            'Non Repondu',
            'Repondu',
          ],
          datasets: [{
            label: 'My First Dataset',
            data: [2, 5],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
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
