import ConfIntl from '@blued-core/conf-intl'
import { Qconf } from '@blued-core/qconf'

export class NormalConf implements ConfIntl {
  private qconf: Qconf

  constructor(public configs: Record<string, any>) {
    this.qconf = new Qconf(configs)
  }

  get(key: string) {
    return this.qconf.getConf(key)
  }
}

export class NormalHost implements ConfIntl {
  private qconf: Qconf

  constructor(public configs: Record<string, any>) {
    this.qconf = new Qconf(configs)
  }

  get(key: string) {
    return this.qconf.getHost(key)
  }
}