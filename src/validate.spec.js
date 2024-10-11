import { describe, it, expect } from 'vitest'
import validate from './validate.js'

describe('validate', () => {
  it('returns an error on the array if length is less than 8 characters', () => {
    const result = validate('short')

    expect(result).toContain('Length is less than 8 characters')
  })

  it('returns an error on the array if missing lowercase character', () => {
    const result = validate('ALLUPPERCASE1!')

    expect(result).toContain('Needs at least one lower case character')
  })

  it('returns an error on the array if missing uppercase character', () => {
    const result = validate('alllowercase1!')

    expect(result).toContain('Needs at least one upper case character')
  })

  it('returns an error on the array if missing a digit', () => {
    const result = validate('NoDigitsHere!')

    expect(result).toContain('Needs at least one digit')
  })

  it('returns an error on the array if missing a non-letter character', () => {
    const result = validate('NoSpecialChar1')

    expect(result).toContain('Needs at least one non-letter character')
  })

  it('returns nothing for a valid passphrase', () => {
    const result = validate('Valid1Pass!')

    expect(result).toEqual([])
  })
});