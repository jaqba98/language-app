export interface ObserverModel<TContext> {
  update(ctx: TContext): void;
}
