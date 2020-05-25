import ConfIntl from '@blued-core/conf-intl'
import { Qconf } from '@blued-core/qconf'

export interface MysqlConfItem {
  qconf: string
  database: string
  modelPath?: string
  timezone?: string
  maxPoolCount?: number
}

// TODO 移除两个范型
export class MysqlConf implements ConfIntl {
  private qconf: Qconf

  constructor(public configs: Record<string, MysqlConfItem>) {
    this.qconf = new Qconf(configs)
  }

  get(key: string) {
    const conf: any = this.qconf.getMysqlConf(key)
    const { timezone, maxPoolCount } = this.configs[key]
    if (timezone) conf.timezone = timezone
    if (maxPoolCount) conf.maxPoolCount = maxPoolCount
    return conf
  }
}