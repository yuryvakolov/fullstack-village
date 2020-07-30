import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {PositionsService} from "../../shared/services/positions.service";
import {Observable} from "rxjs";
import {map, switchMap} from "rxjs/operators";
import {Position} from "../../shared/interfaces";
import {OrderService} from "../../shared/services/order.service";
import {MaterialService} from "../../shared/services/material.service";

@Component({
  selector: 'app-order-positions',
  templateUrl: './order-positions.component.html',
  styleUrls: ['./order-positions.component.scss']
})
export class OrderPositionsComponent implements OnInit {

  positions$: Observable<Position[]>

  constructor(
    private route: ActivatedRoute,
    private positionsService: PositionsService,
    private orderService: OrderService
    ) { }

  ngOnInit(): void {
this.positions$ = this.route.params
  .pipe(
    switchMap(
      (params: Params) => {
        return this.positionsService.loadAllPositionsByCategoryId(params['id'])
      }
    ),
    map(
      (positions:Position[]) => {
         return positions.map(position => {
           position.quantity = 1
           return position
         })
      }
    )
  )
  }

  addToOrder(position: Position) {
    MaterialService.toast(`Добавлено: ${position.name} х${position.quantity}`)
    this.orderService.add(position)
  }
}
