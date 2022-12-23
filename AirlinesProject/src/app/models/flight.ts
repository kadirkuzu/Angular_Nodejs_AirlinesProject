export interface Flight{
    id: number
    CCrewId: number
    GSCrewId: number
    aircraftId: number
    departureAirportId: number
    arrivalAirportId: number
    departureAirportCode: string
    arrivalAirportCode: string
    departureAirportName: string
    arrivalAirportName: string
    routeId: number
    aircraftName: string
    cabinCrewName: string
    flightDate: string
    groundServiceCrewName: string
}