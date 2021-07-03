import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IAppState, IBook } from "src/app/core/interfaces";

const bookState = createFeatureSelector<IAppState, IBook>('book');

export const getName = createSelector(
    bookState,
    state => state.title
);