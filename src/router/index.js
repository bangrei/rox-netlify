import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'
import { isUserLoggedIn } from './utils'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		// ℹ️ We are redirecting to different pages based on role.
		// NOTE: Role is just for UI purposes. ACL is based on abilities.
		// {
		// 	path: '/',
		// 	redirect: to => {
		// 		const userData = JSON.parse(localStorage.getItem('userData') || '{}')
		// 		const userRole = (userData && userData.role) ? userData.role : null
		// 		if (userRole === 'admin')
		// 			return { name: 'aeroworx-dashboard' }
		// 		if (userRole === 'client')
		// 			return { name: 'aeroworx-dashboard' }

		// 		return { name: 'login', query: to.query }
		// 	},
		// },
		{
			path: '/',
			redirect: () => ({ name: 'user-engagement' }),
		},
		...setupLayouts(routes),
	],
})


// Docs: https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards
router.beforeEach(to => {
	const isLoggedIn = isUserLoggedIn()

	if (isLoggedIn && to.name == "login")
		return { name: 'user-engagement' }

	if (
		// make sure the user is authenticated
		!isLoggedIn &&

		// ❗️ Avoid an infinite redirect
		to.name !== 'login'
	) {
		// redirect the user to the login page
		return { name: 'login' }
	}
})
export default router
