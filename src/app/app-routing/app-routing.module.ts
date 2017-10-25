import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChatComponent} from '../components/chat/chat.component';
import {WikiPageComponent} from '../components/wiki-page/wiki-page.component';

const routes: Routes = [
    {
        path: '',
        component: WikiPageComponent
    },
    {
        path: 'project/:id',
        component: WikiPageComponent
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
