import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {
  todo = [
    'todo1',
    'todo2',
    'todo3',
    'todo4',
    'todo5'
  ];
  inprogress = [
    'progress1',
    'progress2',
    'progress3'
  ];
  done = [
    'done1',
    'done2',
    'done3'
  ];
  constructor() { }

  ngOnInit(): void {
  }
   
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
    else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
  
}
