import {Router} from "express"
import * as controller from "./controller.js"

const router = Router()

router.get('/pilots',controller.getPilots)

router.get('/ground-service-chiefs',controller.getGroundServiceChiefs)

router.get('/ground-service-personels',controller.getGroundServicePersonels)

router.get('/ground-service-personels/:id',controller.getGroundServicePersonelsWithCrewId)

router.get('/cabin-personels',controller.getCabinPersonels)

router.get('/cabin-personels/:id',controller.getCabinPersonelsWithCrewId)

router.get('/cabin-crews',controller.getCabinCrews)

router.get('/ground-service-crews',controller.getGroundServiceCrews)

router.post('/pilots',controller.addPilot)

router.post('/ground-service-chiefs',controller.addGroundServiceChief)

router.post('/ground-service-personels',controller.addGroundServicePersonel)

router.post('/cabin-personels',controller.addCabinPersonel)

router.post('/cabin-crews',controller.addCabinCrew)

router.post('/ground-service-crews',controller.addGroundServiceCrew)

router.put('/:id',controller.update)

router.delete('/:id',controller.deleteOne)



export default router