import ConfIntl from '@blued-core/conf-intl'
import { Qconf } from '@blued-core/qconf'

export type RedisConfItem = {
  qconf: string
} | string

export class RedisConf implements ConfIntl {
  private qconf: Qconf

  constructor(public configs: Record<string, RedisConfItem>) {
    this.qconf = new Qconf(configs)
  }

  get(key: string) {
    return this.qconf.getRedisConf(key)
  }
}