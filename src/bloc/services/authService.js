import authConnector from "@/connector/authConnector"

export const loginAI = async data => {
	try {
		const response = await authConnector.login(data)

		return Promise.resolve(response.result)
	} catch (error) {
		return Promise.reject(error.response?.data)
	}
}