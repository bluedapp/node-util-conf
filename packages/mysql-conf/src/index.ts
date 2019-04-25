import ConfIntl, { MysqlConfInstance } from '@blued-core/conf-intl'
import { Qconf } from '@blued-core/qconf'

export interface MysqlConfItem {
  qconf: string
  database: string
  modelPath?: string
}

export class MysqlConf implements ConfIntl<MysqlConfInstance, MysqlConfItem> {
  private qconf: Qconf

  constructor(public configs: Record<string, MysqlConfItem>) {
    this.qconf = new Qconf(configs)
  }

  get(key: string) {
    return this.qconf.getMysqlConf(key)
  }
}