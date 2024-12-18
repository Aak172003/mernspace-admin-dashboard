// sum.test.js
import { expect, it } from 'vitest'
import { sum } from './app'

it('adds 1 + 2 to equal 3 ', () => {
    expect(sum(1, 2)).toBe(3)
})