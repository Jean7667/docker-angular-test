import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-nav-bar',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatToolbarModule,
        MatButtonModule
    ],
    templateUrl: './nav-bar.component.html',
    styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit {
    isExpanded = false;
    isMobile = false;

    ngOnInit() {
        this.checkScreenSize();
    }

    @HostListener('window:resize', ['$event'])
    onResize() {
        this.checkScreenSize();
    }

    checkScreenSize() {
        this.isMobile = window.innerWidth <= 768;
        if (this.isMobile) {
            this.isExpanded = false; // ensure closed by default on resize to mobile
        }
    }

    toggleSidebar() {
        this.isExpanded = !this.isExpanded;
    }

    closeSidebarOnMobile() {
        if (this.isMobile) {
            this.isExpanded = false;
        }
    }
}
