/* eslint-disable import/no-extraneous-dependencies */
import { expect } from 'chai'
import { RedisConf } from '../src/index'

describe('normal', () => {
  it(`function return string`, done => {
    const redisConf = new RedisConf({
      live: '/blued/backend/umem/live',
    })
    expect(redisConf.get('live')).to.has.keys(['host', 'port'])
    done()
  })
})
