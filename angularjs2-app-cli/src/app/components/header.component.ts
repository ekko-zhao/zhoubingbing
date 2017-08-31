import { Component, OnInit, OnDestroy} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	//selector: 'header',
	template: `<h3 id='HeaderComponent'>header</h3>
                <div class="btn-group" dropdown>
                <button dropdownToggle type="button" class="btn btn-primary dropdown-toggle">
                Button dropdown <span class="caret"></span>
                </button>
                <ul *dropdownMenu class="dropdown-menu" role="menu">
                <li role="menuitem"><a class="dropdown-item" href="#">Action</a></li>
                <li role="menuitem"><a class="dropdown-item" href="#">Another action</a></li>
                <li role="menuitem"><a class="dropdown-item" href="#">Something else here</a></li>
                <li class="divider dropdown-divider"></li>
                <li role="menuitem"><a class="dropdown-item" href="#">Separated link</a>
                </li>
                </ul>
            </div>
`,
	styles: [
		`h3{border-bottom:1px #333 solid; color:red;}`,
		`h3{ text-align:center}`
	]
})
export class HeaderComponent {

}
