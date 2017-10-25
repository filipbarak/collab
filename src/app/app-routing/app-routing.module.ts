import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChatComponent} from '../components/chat/chat.component';
import {WikiPageComponent} from '../components/wiki-page/wiki-page.component';
import {DocumentsComponentComponent} from '../components/documents-component/documents-component.component';

const routes: Routes = [
    {
        path: '',
        component: DocumentsComponentComponent,
        children: [
            {
                path: ':id',
                component: WikiPageComponent
            }
        ]
    },
    {
        path: 'chat',
        component: ChatComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule {
}
