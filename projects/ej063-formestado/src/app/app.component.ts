import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = '063 formEstado';
  @ViewChild('miForm') miForm!: NgForm;

  constructor(private ref: ChangeDetectorRef) {}

  ngAfterViewInit () {
    this.miForm.valueChanges?.subscribe(()  => {
        setTimeout (() => { this.ref.markForCheck(); }, 100)
    });
  }
}
