import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public tarefa = "";
  public items = [''];

  addTarefa() {
    this.items.push(this.tarefa);
  }

  removeTarefa(item: string) {
    this.items.splice( this.items.indexOf(item),1);
  }
  title = 'ToDo_list';
}


