const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
  console.log('Phase', phase)
  return {
    env: {
      myName: phase === PHASE_DEVELOPMENT_SERVER ? 'Ali' : 'Qoli'
    }
  }
}
