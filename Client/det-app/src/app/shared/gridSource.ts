export class GridSource<T> {
  private _items = new Array<T>();

  get items() {
    return this._items;
  }

  constructor() { }

  add(item: T) {
    this._items = [...this._items, item];
  }

  remove(item: T) {
    this._items = this._items.filter(currentItem => currentItem != item);
  }

  load(items: T[]) {
    this._items = items;
  }
}
