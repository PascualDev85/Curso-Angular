import { Component, OnInit } from '@angular/core';
import { ITask, Levels } from 'src/app/models/interfaces/Task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  // TODO: Reforumular como una lista de tareas

  task1: ITask = {
    title: "Task 1",
    description: "Description task 1",
    completed: false,
    level: Levels.Info
  }

  task2: ITask = {
    title: "Task 2",
    description: "Description task 2",
    completed: true,
    level: Levels.Urgent
  }

  constructor() { }

  ngOnInit(): void {
  }

  deleteTask(task: ITask) {
    // TODO: Sustuir por un splice para elimnar de la lista de tareas
    alert(`Se va a eliminar la tarea ${task.title}`);
  }
}
