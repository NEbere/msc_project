// Third party imports
const router = require('express').Router()

/**
 * Health check endpoint: Used to run a health check on ther server endpoints
 */
router.get('/_health', (req, res) => {
  res.status(200).send({ message: 'ok' })
})

module.exports = router
