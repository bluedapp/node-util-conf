import ConfIntl from '@blued-core/conf-intl'
import { Qconf } from '@blued-core/qconf'

export interface RedisConfInstance {
  host: string
  port: string
}

export type RedisConfItem = {
  qconf: string
} | string

export class RedisConf implements ConfIntl<RedisConfInstance, RedisConfItem> {
  private qconf: Qconf

  constructor(public configs: Record<string, RedisConfItem>) {
    this.qconf = new Qconf(configs)
  }

  get(key: string) {
    return this.qconf.getRedisConf(key)
  }
}