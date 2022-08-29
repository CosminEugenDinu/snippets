export class Queue {
  private _pushQueue: any[] = [];
  private _popQueue: any[] = [];

  public enqueue(elem: any) {
    this._pushQueue.push(elem);
  }
  public dequeue(): any | undefined {
    if (!this._popQueue.length) {
      while (this._pushQueue.length) {
        this._popQueue.push(this._pushQueue.pop());
      }
    }
    return this._popQueue.pop();
  }
  public size(): number {
    return this._pushQueue.length + this._popQueue.length;
  }
}