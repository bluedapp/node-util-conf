export default interface ConfIntl<T extends any = any> {
  configs: Record<string, any>

  get(key: string): T
}
