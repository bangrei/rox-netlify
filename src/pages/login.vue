<script setup>
import { loginAI } from '@/bloc/services/authService'
import { useGenerateImageVariant } from '@core/composable/useGenerateImageVariant'

import aeroworxBackground from '@images/aero-banner.webp'

import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'
import {
requiredValidator,
} from '@validators'
import { VForm } from 'vuetify/components/VForm'

const isPasswordVisible = ref(false)
const isLoading = ref(false)
const isActiveDialog = ref(false);
const displayMessage = ref("");
const authThemeImg = useGenerateImageVariant(aeroworxBackground, aeroworxBackground, aeroworxBackground, aeroworxBackground, true)
const route = useRoute()
const router = useRouter()

const errors = ref({
	email: undefined,
	password: undefined,
})

const refVForm = ref()
const username = ref('sd_admin@savantdegrees.com')
const password = ref('')


const login = async () => {
	try {
		isLoading.value = true

		const response = await loginAI({
			username: username.value,
			password: password.value,
		})

		// save into session storage
		const { accessToken, refreshToken } = response

		const userData = {
			fullName: "Admin SD",
			userName: "sd_admin",
			email: "sd_admin@savantdegrees.com",
			abilities: [
				{
					action: 'manage',
					subject: 'all',
				},
			],
		}

		localStorage.setItem('userAbilities', JSON.stringify(userData.abilities))
		localStorage.setItem("userData", JSON.stringify(userData))
		sessionStorage.setItem('accessToken', accessToken)
    sessionStorage.setItem('refreshToken', refreshToken)
    console.log(route);
		router.replace(route.query.to ? String(route.query.to) : '/')

	} catch (error) {
    console.log(error);
    isActiveDialog.value = true;
    errors.value = error;
    displayMessage.value = error?.result?.message;
	} finally {
		isLoading.value = false
	}

}

const onSubmit = () => {
	refVForm.value?.validate().then(({ valid: isValid }) => {
		if (isValid)
			login()
	})
}
</script>

<template>
  <div>
    <!-- Title and Logo -->
    <div class="auth-logo d-flex align-start gap-x-3">
      <VNodeRenderer :nodes="themeConfig.app.logo" />

      <h1 class="font-weight-medium leading-normal text-2xl text-uppercase">
        {{ themeConfig.app.title }}
      </h1>
    </div>

    <VRow
      no-gutters
      class="auth-wrapper"
    >
      <VCol
        lg="8"
        class="d-none d-lg-flex align-center justify-center position-relative"
      >
        <VImg
          max-width="768px"
          :src="authThemeImg"
          class="auth-illustration"
        />
      </VCol>

      <VCol
        cols="12"
        lg="4"
        class="auth-card-v2 d-flex align-center justify-center"
      >
        <VCard
          flat
          :max-width="500"
          class="mt-12 mt-sm-0 pa-4"
        >
          <VCardText>
            <h5 class="text-h5 mb-1">
              Welcome to ROX Dashboard
            </h5>
          </VCardText>
          <VCardText>
            <VForm
              ref="refVForm"
              @submit.prevent="onSubmit"
            >
              <VRow>
                <!-- email -->
                <!--
                  <VCol cols="12">
                  <VTextField
                  v-model="email"
                  label="Email"
                  type="email"
                  :rules="[requiredValidator, emailValidator]"
                  :error-messages="errors.email"
                  />
                  </VCol>
                -->

                <!-- password -->
                <!--
                  <VCol cols="12">
                  <VTextField
                  v-model="password"
                  label="Password"
                  :rules="[requiredValidator]"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :error-messages="errors.password"
                  :append-inner-icon="isPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                  />

                  <div class="d-flex align-center flex-wrap justify-space-between mt-1 mb-4">
                  <VCheckbox
                  v-model="rememberMe"
                  label="Remember me"
                  />
                  <RouterLink
                  class="text-primary ms-2 mb-1"
                  :to="{ name: 'forgot-password' }"
                  >
                  Forgot Password?
                  </RouterLink>
                  </div>

                  <VBtn
                  block
                  type="submit"
                  >
                  Login
                  </VBtn>
                  </VCol>
                -->

                <!-- User Name -->
                <VCol cols="12">
                  <VTextField
                    v-model="username"
                    label="Username"
                    :rules="[requiredValidator]"
                  />
                </VCol>

                <!-- password -->
                <VCol cols="12">
                  <VTextField
                    v-model="password"
                    class="mb-4"
                    label="Password"
                    :rules="[requiredValidator]"
                    :type="isPasswordVisible ? 'text' : 'password'"
                    :error-messages="errors.password"
                    :append-inner-icon="isPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                    @click:append-inner="isPasswordVisible = !isPasswordVisible"
                  />
                  <VBtn
                    block
                    type="submit"
                    :loading="isLoading"
                  >
                    Login
                  </VBtn>
                </VCol>
              </VRow>
            </VForm>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>

    <v-dialog
      v-model="isLoading"
      :scrim="true"
      persistent
      width="auto"
    >
      <v-card color="primary">
        <v-card-text>
          Please wait...
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
    
    <v-dialog
      v-model="isActiveDialog"
      width="auto"
    >
      <v-card>
        <v-card-text>
          {{ displayMessage }}
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="isActiveDialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </div>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";
</style>

<route lang="yaml">
meta:
  layout: blank
  action: read
  subject: Auth
  redirectIfLoggedIn: true
</route>
