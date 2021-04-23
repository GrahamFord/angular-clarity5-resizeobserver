import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import '@cds/core/button/register.js';
import '@cds/core/checkbox/register.js';
import '@cds/core/forms/register.js';
import '@cds/core/input/register.js';
import { ReplaySubject } from 'rxjs';
import { delay, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myForm!: FormGroup;
  colourOptions = [
    'Red',
    'Blue',
    'Green',
    'Orange',
    'Yellow',
  ];
  options$: ReplaySubject<string[]> = new ReplaySubject();
  myOptions: string[] = ['Loading...'];

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      dropdown: ['']
    })
  }

  ngOnInit() {
    this.options$
      .pipe(
        take(1),
        delay(2000),
        tap((options: string[]) => {
          this.myOptions = options;
        })
      )
      .subscribe();

    this.options$.next(this.colourOptions);
  }

  saveForm() {
    console.log('form value', this.myForm.value);
  }
}
