import cookie from 'js-cookie'
import { TOKEN_NAME } from './constants'

// camelCaseNaming
// snake_case_naming
// kebab-case-naming
// PascalCaseNaming
// UPPER_CASE_NAMING

export function setToken (value) {
  cookie.set(TOKEN_NAME, value)
}

export function getToken () {
  return cookie.get(TOKEN_NAME)
}

export function removeToken () {
  cookie.remove(TOKEN_NAME)
}
