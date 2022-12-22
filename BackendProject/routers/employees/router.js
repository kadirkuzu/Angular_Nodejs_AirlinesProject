import {Router} from "express"
import * as controller from "./controller.js"

const router = Router()

router.get('/pilots',controller.getPilots)

router.post('/pilots',controller.addPilot)

router.get('/ground-service-chiefs',controller.getGroundServiceChiefs)

router.post('/ground-service-chiefs',controller.addGroundServiceChief)

router.get('/ground-service-personels',controller.getGroundServicePersonels)

router.post('/ground-service-personels',controller.addGroundServicePersonel)

router.get('/cabin-personels',controller.getCabinPersonels)

router.post('/cabin-personels',controller.addCabinPersonel)

router.get('/:id',controller.getById)

router.put('/:id',controller.update)

router.delete('/:id',controller.deleteOne)



export default router