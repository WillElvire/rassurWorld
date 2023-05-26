export interface IBuilder<T>{
  setPlacement?(placement : any) : T;
  setMessage(message: string): T;
  setDuration(duration: number): T;
  build?<E>(element: E): E;
  buildError(): void;
  buildSuccess(): void;
  buildDanger(): void;
  getOptions(): any;
  setTitle?(title : string) : T;
}
