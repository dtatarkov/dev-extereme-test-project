import { Disposable } from "./disposable";

/**
 * Side effects container for easy clean up
 * */
export class EffectsContainer {
  private disposables = new Array<Disposable>();
  private isDisposed = false;

  register(disposable: Disposable): void {
    if (this.isDisposed)
      disposable.dispose();
    else
      this.disposables.push(disposable);
  }

  registerFactory(factory: () => Disposable): void {
    this.register(factory());
  }

  dispose() {
    if (!this.isDisposed) {
      this.disposables.forEach(disposable => disposable.dispose());
      this.disposables = [];
      this.isDisposed = true;
    }
  }
}
