export default interface ConfIntl {
  configs: Record<string, any>

  get(key: string): any
}