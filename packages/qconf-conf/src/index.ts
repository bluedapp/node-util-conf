import ConfIntl from '@blued-core/conf-intl'
import { Qconf } from '@blued-core/qconf'

export type QconfConfItem = {
  qconf: string
} | string

export class QconfConf implements ConfIntl {
  private qconf: Qconf

  constructor(public configs: Record<string, QconfConfItem>) {
    this.qconf = new Qconf(configs)
  }

  get(key: string) {
    return this.qconf.getConf(key)
  }
}

export class QconfHost implements ConfIntl {
  private qconf: Qconf

  constructor(public configs: Record<string, QconfConfItem>) {
    this.qconf = new Qconf(configs)
  }

  get(key: string) {
    return this.qconf.getHost(key)
  }
}