import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-option',
  templateUrl: './sidebar-option.component.html',
  styleUrls: ['./sidebar-option.component.scss']
})
export class SidebarOptionComponent implements OnInit {

  @Input() name: string;
  @Input() link: string;
  @Input() lastOne?: boolean;
  @Input() logOut?: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  
  public LogOut(): void
	{
		this.authService.LogoutEmail();
		this.router.navigate(['/app/login']);
	}

}
