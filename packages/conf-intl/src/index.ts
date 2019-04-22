export default interface ConfIntl<T extends any = any, ConfigItem extends any = any> {
  configs: Record<string, ConfigItem>

  get(key: string): T
}