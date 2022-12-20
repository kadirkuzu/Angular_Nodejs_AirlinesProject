export interface Aircraft{
    id : string
	ownerId : string
	ownerName : string
	modelId :string
	modelName :string
	aircraftName : string
	yearBought : number
}

export interface AircraftModel{
    id : string
	manufacturerId : string
	modelName :string
	capacity : number
}