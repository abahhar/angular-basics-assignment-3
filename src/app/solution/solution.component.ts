import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent implements OnInit {

  displayDetails = false;
  logArray: Array<any> = [];
  lastLogId = 1;

  constructor() { }

  ngOnInit() {
  }

  onToggleDetailsDisplay() {
    this.displayDetails = !this.displayDetails;

    this.logArray.push({
      id: this.lastLogId++,
      logText: '"Display Details" button clicked!'
    });
  }

  getLogBackgroundColor(log) {
    return (log.id >= 5) ? 'blue' : 'inherit';
  }

}
