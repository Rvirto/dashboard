import { GridsterConfig, GridsterItem } from 'angular-gridster2';

export class Dashboard {

    public codigo: number;
    public id: number;
    public idMenuItem: number;
    public propriedades: GridsterConfig;
    public widgets = new Array<GridsterItem>();

    constructor(codigo: number, widgets: Array<GridsterItem>) {
        this.codigo = codigo;
        this.widgets = widgets;
    }

}
