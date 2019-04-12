/* eslint-disable import/no-extraneous-dependencies */
import { expect } from 'chai'
import { MysqlConf } from '../src/index'

describe('normal', () => {
  it(`function return string`, done => {
    const mysqlConf = new MysqlConf({
      pay: {
        qconf: '/blued/backend/udb/pay_oversea',
      },
    })
    expect(mysqlConf.get('pay')).to.has.keys(['masterHost', 'slaveHost', 'username', 'password', 'database', 'modelPath'])
    done()
  })
})