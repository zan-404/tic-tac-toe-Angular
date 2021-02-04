import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { faPen , faTimes } from "@fortawesome/free-solid-svg-icons"
import { faCircle } from "@fortawesome/free-regular-svg-icons"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tic-tac-toe';
  iconName:string;
  reload:string;

  faPen = faPen;
  faTimes = faTimes;
  faCircle = faCircle;

  constructor(private toastr:ToastrService){}


  winMessage: string = '';
  isCross  =false;
  itemArray: string[] = new Array(9).fill('empty');

  handleClick(itemNumber: number) {
    if (this.winMessage) {
      return this.toastr.success(this.winMessage);
    }

    if (this.itemArray[itemNumber] === 'empty') {
      this.itemArray[itemNumber] = this.isCross ? 'cross' : 'circle';

      this.isCross = !this.isCross;
    }
    
    else {
      this.reload="draw";

      return this.toastr.info('Already filled');
    }

    this.checkIsWinner();
  }


  reloadGame = () => {
    this.winMessage='';
    this.reload='';
    this.isCross=false;
    this.itemArray=new Array(9).fill('empty')
  };

  checkIsWinner = () => {
    //  checking  winner of the game
    if (
      this.itemArray[0] === this.itemArray[1] &&
      this.itemArray[0] === this.itemArray[2] &&
      this.itemArray[0] !== 'empty'
    ) {
      this.winMessage = `${this.itemArray[0]} won`;
    } else if (
      this.itemArray[3] !== 'empty' &&
      this.itemArray[3] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[5]
    ) {
      this.winMessage = `${this.itemArray[3]} won`;
    } else if (
      this.itemArray[6] !== 'empty' &&
      this.itemArray[6] === this.itemArray[7] &&
      this.itemArray[7] === this.itemArray[8]
    ) {
      this.winMessage = `${this.itemArray[6]} won`;
    } else if (
      this.itemArray[0] !== 'empty' &&
      this.itemArray[0] === this.itemArray[3] &&
      this.itemArray[3] === this.itemArray[6]
    ) {
      this.winMessage = `${this.itemArray[0]} won`;
    } else if (
      this.itemArray[1] !== 'empty' &&
      this.itemArray[1] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[7]
    ) {
      this.winMessage = `${this.itemArray[1]} won`;
    } else if (
      this.itemArray[2] !== 'empty' &&
      this.itemArray[2] === this.itemArray[5] &&
      this.itemArray[5] === this.itemArray[8]
    ) {
      this.winMessage = `${this.itemArray[2]} won`;
    } else if (
      this.itemArray[0] !== 'empty' &&
      this.itemArray[0] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[8]
    ) {
      this.winMessage = `${this.itemArray[0]} won`;
    } else if (
      this.itemArray[2] !== 'empty' &&
      this.itemArray[2] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[6]
    ) {
      this.winMessage = `${this.itemArray[2]} won`;
    }

    else if(
      this.itemArray[0] !== 'empty' && this.itemArray[1] !== 'empty' &&
      this.itemArray[2] !== 'empty' && this.itemArray[3] !== 'empty' &&
      this.itemArray[4] !== 'empty' && this.itemArray[5] !== 'empty' &&
      this.itemArray[6] !== 'empty' && this.itemArray[7] !== 'empty' &&
      this.itemArray[8] !== 'empty' 

    )
    {
      this.reload="draw";
    }

    
  };
}
