import { AfterViewInit, Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  chart!: Chart<'line'>;

  money = 20;
  pointX = 0;
  pointY = 0;
  startGame = false;
  iteration = 0;
  percent = 50;
  activateXMovement = false;

  ngAfterViewInit(): void {
    this.chart = new Chart(document.getElementById('myChart')! as any, {
      type: 'line',
      data: {
        datasets: [],
      },
      options: {
        scales: {
          x: {
            type: 'linear',
            position: 'bottom',
          },
        },
      },
    });
  }

  initGame() {
    this.iteration = 0;
    this.startGame = true;
    this.money = 20;
    this.pointX = 0;
    this.pointY = 0;
    this.chart.data.datasets = [];
    this.chart.update();
    this.runGame();
  }

  async runGame() {
    const data: { x: number; y: number }[] = [];
    while (this.money > 0 && this.money < 30) {
      data.push({ x: this.pointX, y: this.pointY });
      if (Math.random() >= (Number(this.percent) / 100)) {
        this.pointY++;
        this.money++;
      } else {
        this.pointY--;
        this.money--;
      }

      if (this.activateXMovement) {
        if (Math.random() >= (Number(this.percent) / 100)) {
          this.pointX++;
        } else {
          this.pointX--;
        }
      } else {
        this.pointX++;
      }
      

      await this.waitTime(10);
    }
    this.startGame = false;
    this.loadGraphic(data);
    if (this.money === 0) {
      this.startGame = true;
      this.money = 20;
      this.pointX = 0;
      this.pointY = 0;
      this.runGame();
    }
  }

  loadGraphic(data: { x: number; y: number }[]) {
    this.iteration++;
    this.chart.data.datasets.push({
      label: 'iteration ' + this.iteration,
      data,
    });
    this.chart.update();
    this.chart.draw();
  }

  private waitTime(time: number = 500): Promise<void> {
    return new Promise((complete) => {
      setTimeout(() => {
        complete();
      }, time);
    });
  }
}
