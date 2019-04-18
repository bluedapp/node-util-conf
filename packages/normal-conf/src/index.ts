import ConfIntl from '@blued-core/conf-intl'

export class NormalConf implements ConfIntl {
  constructor(public configs: Record<string, any>) { }

  get(key: string) {
    return this.configs[key]
  }
}