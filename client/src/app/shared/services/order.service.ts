import {Injectable} from '@angular/core';
import {Order, OrderPosition, Position} from '../interfaces'
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class OrderService {

  constructor() {}

  public list: OrderPosition[] = []
  public price = 0

  add(position: Position) {
    const orderPosition: OrderPosition = Object.assign({}, {
      name: position.name,
      cost: position.cost,
      quantity: position.quantity,
      _id: position._id
    })

    const candidate = this.list.find(position => position._id === orderPosition._id)
    if(candidate) {
      //Изменяем количество
      candidate.quantity += orderPosition.quantity
    } else {
      //Добавляем новую позицию
      this.list.push(orderPosition) //добавление в массив новой переменной
    }
    this.computePrice()
  }

  remove(orderPosition: OrderPosition) {
    const index = this.list.findIndex(position => position._id === orderPosition._id)
    this.list.splice(index, 1)
    this.computePrice()
  }

  clear() {
    this.list = []
    this.price = 0
  }

  private computePrice() {
    this.price = this.list.reduce((total,item) => {
      return total += item.quantity * item.cost
    }, 0)
  }

}
