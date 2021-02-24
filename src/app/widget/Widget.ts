import { InjectionToken } from "@angular/core";

export interface IWidget {
    refresh: () => void;
    load: () => void;
}

export const WIDGET: InjectionToken<IWidget> = new InjectionToken<IWidget>("widget token")
