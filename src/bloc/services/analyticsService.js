import analyticsConnector from "@/connector/analyticsConnector"

export const eventReport = async () => {
	try {
		const response = await analyticsConnector.eventReport()

		return Promise.resolve(response.result)
	} catch (error) {
		return Promise.reject(error.response?.data)
	}
}

export const trafficSourceReport = async () => {
	try {
		const response = await analyticsConnector.trafficSourceReport()

		return Promise.resolve(response.result)
	} catch (error) {
		return Promise.reject(error.response?.data)
	}
}

export const purchaseReport = async () => {
	try {
		const response = await analyticsConnector.purchaseReport()

		return Promise.resolve(response.result)
	} catch (error) {
		return Promise.reject(error.response?.data)
	}
}

export const cityReport = async () => {
	try {
		const response = await analyticsConnector.cityReport()

		return Promise.resolve(response.result)
	} catch (error) {
		return Promise.reject(error.response?.data)
	}
}

export const countryReport = async () => {
	try {
		const response = await analyticsConnector.countryReport()

		return Promise.resolve(response.result)
	} catch (error) {
		return Promise.reject(error.response?.data)
	}
}

export const deviceReport = async () => {
	try {
		const response = await analyticsConnector.deviceReport()

		return Promise.resolve(response.result)
	} catch (error) {
		return Promise.reject(error.response?.data)
	}
}