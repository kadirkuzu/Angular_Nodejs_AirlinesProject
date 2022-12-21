import {Router} from "express"
import * as controller from "./controller.js"

const router = Router()

router.get('/pilots',controller.getPilots)

router.post('/pilots',controller.addPilot)

router.get('/',controller.getAll)

router.get('/:id',controller.getById)

router.put('/:id',controller.update)

router.delete('/:id',controller.deleteOne)



export default router