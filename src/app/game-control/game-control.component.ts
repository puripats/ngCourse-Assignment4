import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFire = new EventEmitter<number>();
  interval;
  lastNumber=0;


  constructor() {

   }

  ngOnInit(): void {

    }



  onStart(){
    this.interval=setInterval(() => {
      this.intervalFire.emit(this.lastNumber+1)
      this.lastNumber++
    },1000)

  }
  onStop(){
    clearInterval(this.interval)

  }


}





