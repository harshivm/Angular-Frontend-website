import { Component } from '@angular/core';
import { UserRoleService } from '../user-role.service';
@Component({
  selector: 'app-sidebar',
  // standalone: true,
  // imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
public isSidebarVisible: boolean = true;

  constructor(private userRoleService: UserRoleService) { }

  ngOnInit(): void {
    this.updateSidebarVisibility();
  }

  updateSidebarVisibility() {
    this.userRoleService.getUserRole().subscribe(role => {
      // Update the sidebar visibility based on the user's role
      this.isSidebarVisible = role === 'customer' || role === 'partner';
    });
  }
}
