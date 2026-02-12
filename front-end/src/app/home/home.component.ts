import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-home',
  standalone: true,                 // ✅ required for standalone routing
  imports: [MatButtonModule, MatIconModule, MatDividerModule], // ✅ added imports for Material modules
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent { }
