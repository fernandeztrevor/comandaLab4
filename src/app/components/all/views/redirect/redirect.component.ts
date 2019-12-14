import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { Router } from '@angular/router';
import { Role } from 'src/app/models/user';

@Component({
	selector: 'app-redirect',
	templateUrl: './redirect.component.html',
	styleUrls: ['./redirect.component.scss']
})
export class RedirectComponent implements OnInit {

	constructor(private authService: AuthService, private router: Router) { }

	ngOnInit() {
		this.authService.GetCurrentUser().then(user => {
			switch(user.role)
			{
				case Role.cliente:
					this.router.navigate(['/cliente']);
					break;
				case Role.bartender:
					this.router.navigate(['/bartender']);
					break;
				case Role.cocinero:
					this.router.navigate(['/cocinero']);
					break;
				case Role.cervecero:
					this.router.navigate(['/cervecero']);
					break;
				case Role.mozo:
					this.router.navigate(['/mozo']);
					break;
				case Role.socio:
					this.router.navigate(['/socio']);
					break;
			}
		})
		.catch(() => {
			this.router.navigate(['/app/login']);
		});
	}

}
