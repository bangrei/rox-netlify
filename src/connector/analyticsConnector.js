import apiEndpoint from "./apiConfig"
import { apiConnector } from "./apiConnector"

const path = "/analytics"

export default {
	eventReport: async() => {
		const { get } = apiConnector()
		const subpath = "/eventReport"

		return await get(`${apiEndpoint}${path}${subpath}`)
	},
	trafficSourceReport: async() => {
		const { get } = apiConnector()
		const subpath = "/trafficSourceReport"

		return await get(`${apiEndpoint}${path}${subpath}`)
	},
	purchaseReport: async() => {
		const { get } = apiConnector()
		const subpath = "/purchaseReport"

		return await get(`${apiEndpoint}${path}${subpath}`)
	},
	cityReport: async() => {
		const { get } = apiConnector()
		const subpath = "/cityReport"

		return await get(`${apiEndpoint}${path}${subpath}`)
	},
	countryReport: async() => {
		const { get } = apiConnector()
		const subpath = "/countryReport"

		return await get(`${apiEndpoint}${path}${subpath}`)
	},
	deviceReport: async() => {
		const { get } = apiConnector()
		const subpath = "/deviceReport"

		return await get(`${apiEndpoint}${path}${subpath}`)
	},

	// saladRecommendations: async (params = {}) => {
	// 	const { get } = apiConnector()

	// 	return await get(`${apiEndpoint}${path}`, { params: {
	// 		message: params,
	// 	} })
	// },
}