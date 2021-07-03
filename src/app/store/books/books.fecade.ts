import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { updateBook } from "./books.actions";
import { getName } from "./books.selectors";

export class bookFecade {
    public readonly name$ = this._store.select(getName);

    constructor(private readonly _store:Store){}

    public setName(name:string){
        this._store.dispatch(updateBook({ name }));
    }
}