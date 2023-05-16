import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const settingsRoutes: Routes = []

@NgModule({
    imports:[
        RouterModule.forChild(settingsRoutes)
    ],
    exports:[
        RouterModule
    ]
})

export class DummyRoutingModule{}
