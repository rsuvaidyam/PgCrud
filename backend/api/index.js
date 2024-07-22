const express = require('express');
router = express.Router();

const JWT = require('jsonwebtoken');
const JWT_SECRET = 'shlrgrgrhgrhOIWUEIWUEKSLCM';


const user = require('./Auth/user')
router.get('/user', user.getUser)
router.post('/user', user.postUser)
router.post('/register', user.postUser)
router.put('/user/:id', user.putUser)
router.delete('/user/:id', user.deleteUser)

const role = require('./CRUD/role')
router.get('/role', role.getRole)
router.post('/role', role.postRole)
router.put('/role/:id', role.putRole)
router.delete('/role/:id', role.deleteRole)

const login = require('./Auth/login');
router.post('/login', login.login);
const verifyToken = require('./Auth/verifyToken');
router.use(verifyToken);

const state = require('./CRUD/state')
router.get('/state', state.getState)
router.post('/state', state.postState)
router.put('/state/:id', state.putState)
router.delete('/state/:id', state.deleteState)

const dist = require('./CRUD/district')
router.get('/dist', dist.getDist)
router.post('/dist', dist.postDist)
router.put('/dist/:id', dist.putDist)
router.delete('/dist/:id', dist.deleteDist)

const block = require('./CRUD/blocks')
router.get('/block', block.getBlock)
router.post('/block', block.postBlock)
router.put('/block/:id', block.putBlock)
router.delete('/block/:id', block.deleteBlock)

const vill = require('./CRUD/village')
router.get('/vill', vill.getVill)
router.post('/vill', vill.postVill)
router.put('/vill/:id', vill.putVill)
router.delete('/vill/:id', vill.deleteVill)

const benif = require('./CRUD/beneficiary')
router.get('/beneficiary', benif.getBeneficiary)
router.post('/beneficiary', benif.postBeneficiary)
router.put('/beneficiary/:id', benif.putBeneficiary)
router.delete('/beneficiary/:id', benif.deleteBeneficiary)



module.exports = router;