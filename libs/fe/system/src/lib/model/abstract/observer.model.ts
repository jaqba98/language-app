export interface ObserverModel<TData> {
  update(data: TData): void;
}
