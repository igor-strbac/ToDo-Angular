import {Component, Input, OnInit} from '@angular/core';
import ToDoItem from '../model/ToDoItem';
import {ItemsService} from '../services/items.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: ToDoItem;

  // ovi servisi sluze za pokretanje operacija kreiranja i brisanja stavki
  constructor(public itemsService: ItemsService) {
  }

  ngOnInit(): void {
  }

}
