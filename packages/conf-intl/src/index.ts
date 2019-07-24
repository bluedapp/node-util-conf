export default interface ConfIntl<T extends any = any> {
  configs: Record<string | symbol, any>

  get(key: string): T
}
