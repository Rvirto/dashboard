export class BarDataset {
  public label: string;
  public backgroundColor: string;
  public borderColor: string;
  public data = new Array<number>();

  constructor(
    label: string,
    backgroundColor: string,
    borderColor: string,
    data: Array<number>
  ) {
    this.label = label;
    this.backgroundColor = backgroundColor;
    this.borderColor = borderColor;
    this.data = data;
  }
}
