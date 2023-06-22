import { NgZoroModule } from 'src/app/modules/ngzoro.module';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/modules/components.module';
import { ServiceModule } from 'src/app/modules/service.module';

export const apiModule = [ HttpClientModule ]

export const defaultModule = [
  CommonModule,
  RouterModule,
  ComponentsModule,
  HttpClientModule,
  FormsModule,
  ServiceModule,
  ReactiveFormsModule,
  NgZoroModule
]
