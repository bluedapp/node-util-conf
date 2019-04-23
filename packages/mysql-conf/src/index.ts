import ConfIntl from '@blued-core/conf-intl'
import { Qconf } from '@blued-core/qconf'

export interface MysqlConfInstance {
  masterHost: string
  slaveHost: string[]
  username: string
  password: string
  database: any
  modelPath: any
}

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