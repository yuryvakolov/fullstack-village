import {AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {PositionsService} from "../../../shared/services/positions.service";
import {MaterialInstance, MaterialService} from "../../../shared/services/material.service";
import {Position} from "../../../shared/interfaces";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {findIndex} from "rxjs/operators";

@Component({
  selector: 'app-positions-form',
  templateUrl: './positions-form.component.html',
  styleUrls: ['./positions-form.component.scss']
})
export class PositionsFormComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input('categoryId') categoryId: string
  @ViewChild('modal') modalRef: ElementRef
  positions: Position[] = []
  loading = false;
  positionId = null
  modal: MaterialInstance
  form: FormGroup

  constructor(
    private positionsService: PositionsService
  ) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      cost: new FormControl(null, [Validators.required, Validators.min(1)])
    })
    this.loading = true
    this.positionsService.loadAllPositionsByCategoryId(this.categoryId)
      .subscribe(
        positions => {
          this.positions = positions
          this.loading = false
        },
        error => MaterialService.toast(error.error.message)
      )
  }

  ngAfterViewInit() {
    this.modal = MaterialService.initModal(this.modalRef)
  }

  ngOnDestroy() {
    this.modal.destroy()
  }

  onSelectPosition(position: Position) {
    this.positionId = position._id
    this.form.patchValue({
      name: position.name,
      cost: position.cost
    })
    this.modal.open()
    MaterialService.updateTextInputs()
  }

  onAddPosition() {
    this.positionId = null
    this.form.reset()
    this.modal.open()
    MaterialService.updateTextInputs()
  }

  onCancel() {
    this.modal.close()
  }

  onSubmit() {
    this.form.disable()

    const newPosition: Position = {
      name: this.form.value.name,
      cost: this.form.value.cost,
      category: this.categoryId
    }

    const completed = () => {
      this.modal.close()
      this.form.reset()
      this.form.enable()
    }

    if (this.positionId) {
      newPosition._id = this.positionId
      this.positionsService.updatePosition(newPosition)
        .subscribe(
          position => {
            const index = this.positions.findIndex(position => position._id === this.positionId)
            this.positions[index] = position
            MaterialService.toast('Изменения сохранены.')
          },
          error => MaterialService.toast(error.error.message),
          completed
        )
    } else {
      this.positionsService.createNewPosition(newPosition)
        .subscribe(
          position => {
            MaterialService.toast('Позиция создана.')
            this.positions.push(position)
          },
          error => {
            this.form.enable()
            MaterialService.toast(error.error.message)
          },
          completed
        )
    }

  }

  onDeletePosition(event: Event, position: Position) {
    event.stopPropagation()
    const decision = window.confirm(`Удалить позицию "${position.name}"?`)
    if (decision) {
      this.positionsService.deletePosition(position)
        .subscribe(
          response => {
            const index = this.positions.findIndex(position => position._id === this.positionId)
            this.positions.splice(index, 1)

            MaterialService.toast(response.message)
          },
          error => {
            MaterialService.toast(error.error.message)
          }
        )
    }
  }
}
