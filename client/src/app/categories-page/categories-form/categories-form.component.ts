import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CategoriesService} from "../../shared/services/categories.service";
import {switchMap} from "rxjs/operators";
import {of} from "rxjs";
import {MaterialService} from "../../shared/services/material.service";
import {Category} from "../../shared/interfaces";
import {log} from "util";

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.scss']
})
export class CategoriesFormComponent implements OnInit {
  @ViewChild('input') inputRef: ElementRef
  form: FormGroup
  image: File
  imagePreview: string | ArrayBuffer
  isNew = true;
  category: Category

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoriesService: CategoriesService,
  ) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required)
    })
    this.form.disable()
    this.route.params
      .pipe(
        switchMap(
          (params: Params) => {
            if (params['id']) {
              this.isNew = false
              return this.categoriesService.loadCategoryById(params['id'])
            }

            return of(null)
          }
        )
      )
      .subscribe(
        (category: Category) => {
          if (category) {
            this.category = category
            this.form.patchValue( {
              name: category.name
            })
            this.imagePreview = category.imageSrc
            MaterialService.updateTextInputs()
          }
          this.form.enable()
        },
        error => {
          MaterialService.toast(error.error.message)
        }
      )
  }

  onSubmit() {
    let obs$
    this.form.disable()

    if (this.isNew) {
      //create new category
      obs$ = this.categoriesService.createNewCategory(this.form.value.name, this.image)
    } else {
      //update current category
      obs$ = this.categoriesService.updateCategory(this.category._id, this.form.value.name, this.image)
    }

    obs$.subscribe(
      category => {
        this.category = category
        MaterialService.toast('Данные сохранены')
        this.form.enable()
      },
      error => {
        this.form.enable()
        MaterialService.toast(error.error.message)
      },
      () => this.router.navigate(['/categories'])
    )
  }

  triggerClick() {
    this.inputRef.nativeElement.click()
  }

  onFileUpload(event: any) {
    const file = event.target.files[0]
    this.image = file

    const reader = new FileReader()

    reader.onload = () => {
      this.imagePreview = reader.result
    }

    reader.readAsDataURL(file)
  }

  deleteCategory() {
    const decision = window.confirm(`Вы уверены, что хотите удалить категорию "${this.category.name}"`)

    if (decision) {
      //delete category
      this.categoriesService.deleteCategory(this.category._id)
        .subscribe(
          response => {
            MaterialService.toast(response.message)
          },
          error => MaterialService.toast(error.error.message),
          () => this.router.navigate(['/categories'])
        )
    }
  }
}
