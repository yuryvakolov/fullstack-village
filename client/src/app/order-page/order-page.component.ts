import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {MaterialInstance, MaterialService} from "../shared/services/material.service";
import {OrderService} from "../shared/services/order.service";
import {Order, OrderPosition} from "../shared/interfaces";
import {OrdersService} from "../shared/services/orders.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss'],
  providers: [OrderService]
})
export class OrderPageComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('modal') modalRef: ElementRef
  oSub: Subscription
  isRoot: boolean
  modal: MaterialInstance
  pending = false


  constructor(
    private router: Router,
    public orderService: OrderService,
    private ordersService: OrdersService
  ) {
  }

  ngOnInit(): void {
    this.isRoot = this.router.url === '/order'
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isRoot = this.router.url === '/order'
      }
    })
  }

  ngOnDestroy() {
    this.modal.destroy()
    if (this.oSub) {
      this.oSub.unsubscribe()
    }
  }

  ngAfterViewInit() {
    this.modal = MaterialService.initModal(this.modalRef)
  }

  openModal() {
    this.modal.open()
  }

  onCancel() {
    this.modal.close()
  }

  submit() {
    this.pending = true
    const order: Order = {
        list: this.orderService.list.map(item => {
          delete item._id
          return item
        })
      }
    this.oSub = this.ordersService.createOrder(order)
      .subscribe(
        newOrder => {
          MaterialService.toast(`Заказ №${newOrder.order} был добавлен.`)
          this.orderService.clear()
        },
        error => MaterialService.toast(error.error.message),
        () => {
          this.modal.close()
          this.pending = false
        }
      )
  }

  removePosition(orderPosition: OrderPosition) {
    this.orderService.remove(orderPosition)
  }
}
