const Router = require('express')
const router = new Router()
const typeController = require('../controllers/brandController')
const checkRole =require('../middleware/checkRoleMiddleware')

router.post('/',checkRole('ADMIN'),typeController.create)
router.get('/', typeController.getAll)

module.exports = router