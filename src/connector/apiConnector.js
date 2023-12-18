// https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/documentation/guide/plugins/axios.html
import axios from "@axios"

export const apiConnector = (options = {}) => {
	const api = axios.create({
	})

	 // Request interceptor to attach JWT token to Authorization header
	 api.interceptors.request.use(config => {
		const accessToken = sessionStorage.getItem('accessToken')
		if (accessToken) {
        	config.headers.Authorization = `Bearer ${accessToken}`
		}

		return config
	}, error => {
		return Promise.reject(error)
	})

	// Response interceptor to handle token expiration and refresh
	api.interceptors.response.use(response => {
		return response
	}, async error => {
		const originalRequest = error.config

		// If the response status is 401 and the request was not a token refresh request
		if (error.response.status === 403 && !originalRequest._retry) {
			originalRequest._retry = true

			const currentRefreshToken = sessionStorage.getItem('refreshToken')

			if (currentRefreshToken) {
				try {
					// Call your API endpoint to refresh the token using the refresh token
					const responseAxios = await axios.post('https://open-ai-poc.savantdegrees.com/api/v1/auth/refreshToken', {
						token: currentRefreshToken,
					})

					const response = responseAxios.data
					const { accessToken, refreshToken } = response.result

					// Update the new access token in sessionStorage
					sessionStorage.setItem('accessToken', accessToken)
					sessionStorage.setItem('refreshToken', refreshToken)

					// Retry the original request with the new token
					originalRequest.headers.Authorization = `Bearer ${accessToken}`

					return axios(originalRequest)
				} catch (refreshError) {
					// Handle refresh error (e.g., redirect to login page)
					console.error('Failed to refresh token:', refreshError)

					// Perform logout or redirect to login page
					localStorage.removeItem('userData')
					sessionStorage.removeItem("accessToken")
					sessionStorage.removeItem("refreshToken")
					window.location.href = '/login'
				}
			}
		}

		// Handle other error cases
		return Promise.reject(error)
	})

	const post = (endpoint, data = undefined, config = undefined) => {
		return new Promise((resolve, reject) => {
			api.post(endpoint, data, config)
				.then(resp => {
					resolve(resp.data)
				})
				.catch(err => reject(err))
		})
	}

	const patch = (endpoint, data = undefined, config = undefined) => {
		return new Promise((resolve, reject) => {
			api.patch(endpoint, data, config)
				.then(resp => {
					resolve(resp.data)
				})
				.catch(err => reject(err))
		})
	}

	const get = (endpoint, config = undefined) => {
		return new Promise((resolve, reject) => {
			api.get(endpoint, config)
				.then(resp => {
					resolve(resp.data)
				})
				.catch(err => reject(err))
		})
	}

	const remove = async (endpoint, config = undefined) => {
		return new Promise((resolve, reject) => {
			api.delete(endpoint, config)
				.then(resp => {
					resolve(resp.data)
				})
				.catch(err => reject(err))
		})
	}


	return {
		get,
		post,
		remove,
		patch,
	}
}
