import {Router} from "express"
import * as controller from "./controller.js"

const router = Router()

router.get('/',controller.getAll)

router.get('/:id',controller.getById)

router.post('/',controller.add)

router.post('/login',controller.login)

router.put('/:id',controller.update)

router.delete('/:id',controller.deleteOne)



export default router