import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tic-tac-toe';
  winnerMessage: string = "";
  isCross: boolean = false;
  itemArr = new Array(9).fill('empty');
  gameOverFlag: boolean = false;

  constructor(private toastr: ToastrService){}

  resetGame = () => {
    this.winnerMessage = "";
    this.isCross = false;
    this.itemArr = new Array(9).fill('empty');
  }

  handleClick = (num: number) => {
    if(!this.winnerMessage && this.itemArr[num] != 'empty') {
      this.toastr.error("Nobody won!");
      this.gameOverFlag = true;
    }
    else if(this.winnerMessage) {
      this.toastr.success(this.winnerMessage);
    }
    else if(this.itemArr[num] != 'empty') {
      this.toastr.info("Already filled!");
    }
    else {
      this.itemArr[num] = this.isCross ? 'cross' : 'circle';
      this.isCross = !this.isCross;
    }
    this.isWinner();
  }

  isWinner = () => {
    if(this.itemArr[0] != 'empty' && this.itemArr[0] == this.itemArr[1] && this.itemArr[1] == this.itemArr[2]) {
      this.winnerMessage = `${this.itemArr[0]} won`;
    }
    else if (
      this.itemArr[3] !== 'empty' &&
      this.itemArr[3] === this.itemArr[4] &&
      this.itemArr[4] === this.itemArr[5]
    ) {
      this.winnerMessage = `${this.itemArr[3]} won`;
    } else if (
      this.itemArr[6] !== 'empty' &&
      this.itemArr[6] === this.itemArr[7] &&
      this.itemArr[7] === this.itemArr[8]
    ) {
      this.winnerMessage = `${this.itemArr[6]} won`;
    } else if (
      this.itemArr[0] !== 'empty' &&
      this.itemArr[0] === this.itemArr[3] &&
      this.itemArr[3] === this.itemArr[6]
    ) {
      this.winnerMessage = `${this.itemArr[0]} won`;
    } else if (
      this.itemArr[1] !== 'empty' &&
      this.itemArr[1] === this.itemArr[4] &&
      this.itemArr[4] === this.itemArr[7]
    ) {
      this.winnerMessage = `${this.itemArr[1]} won`;
    } else if (
      this.itemArr[2] !== 'empty' &&
      this.itemArr[2] === this.itemArr[5] &&
      this.itemArr[5] === this.itemArr[8]
    ) {
      this.winnerMessage = `${this.itemArr[2]} won`;
    } else if (
      this.itemArr[0] !== 'empty' &&
      this.itemArr[0] === this.itemArr[4] &&
      this.itemArr[4] === this.itemArr[8]
    ) {
      this.winnerMessage = `${this.itemArr[0]} won`;
    } else if (
      this.itemArr[2] !== 'empty' &&
      this.itemArr[2] === this.itemArr[4] &&
      this.itemArr[4] === this.itemArr[6]
    ) {
      this.winnerMessage = `${this.itemArr[2]} won`;
    }
  }
}
