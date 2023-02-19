import { Component } from '@angular/core';
import { SessionService } from '@private/shared/services/session.service';

@Component({
  selector: 'app-private-layout',
  templateUrl: './private-layout.component.html',
  styleUrls: ['./private-layout.component.css']
})
export class PrivateLayoutComponent {
  isCollapsed = false;

  constructor(private sessionS: SessionService){}

  exit(){
    this.sessionS.closeSession()
  }

}
