import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppComponent} from './app.component';
import {DocumentsComponentComponent} from './components/documents-component/documents-component.component';
import {WikiPageComponent} from './components/wiki-page/wiki-page.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {ChatComponent} from './components/chat/chat.component';
import {SingleDocumentComponent} from './components/single-document/single-document.component';
import {FroalaEditorModule, FroalaViewModule} from 'angular-froala-wysiwyg';
import {EditorComponent} from './components/editor/editor.component';
import {CommonService} from './common.service';
import { DisqusComponent } from './components/disqus/disqus.component';
import {DisqusModule} from 'angular2-disqus';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NewDocModalComponent } from './components/new-doc-modal/new-doc-modal.component';
import {FormsModule} from '@angular/forms';
import { IdeaPlaceholderComponent } from './components/idea-placeholder/idea-placeholder.component';
import { PlanPlaceholderComponent } from './components/plan-placeholder/plan-placeholder.component';


@NgModule({
    declarations: [
        AppComponent,
        DocumentsComponentComponent,
        WikiPageComponent,
        ChatComponent,
        SingleDocumentComponent,
        EditorComponent,
        DisqusComponent,
        NewDocModalComponent,
        IdeaPlaceholderComponent,
        PlanPlaceholderComponent
    ],
    imports: [
        BrowserModule,
        NgbModule.forRoot(),
        FroalaEditorModule.forRoot(),
        DisqusModule,
        FroalaViewModule.forRoot(),
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule

    ],
    entryComponents: [ChatComponent],
    providers: [CommonService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
