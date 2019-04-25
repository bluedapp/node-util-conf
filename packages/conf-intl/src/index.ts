export default interface ConfIntl<T extends any = any, ConfigItem extends any = any> {
  configs: Record<string, ConfigItem>

  get(key: string): T
}

export type NormalConfInstance = string | null

export interface HostPortConfInstance {
  host: string
  port: string
}

export interface MysqlConfInstance {
  masterHost: string
  slaveHost: string[]
  username: string
  password: string
  database: any
  modelPath: any
}
