import apiEndpoint from "./apiConfig"
import { apiConnector } from "./apiConnector"

const path = "/auth"

export default {
	login: async data => {
		const { post } = apiConnector()

		return await post(`${apiEndpoint}${path}/login`, data)
	},
}
