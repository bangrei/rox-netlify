import{_ as K}from"./AppCardCode-514fb21c.js";import{_ as B}from"./AppStepper-f708818b.js";import{c as I,V as W}from"./VCard-db64c41e.js";import{V as E}from"./VDivider-0d474c05.js";import{V as T}from"./VForm-5a29b781.js";import{V as R,a as S}from"./VWindowItem-25e445b0.js";import{V as v,a as r}from"./VRow-b0db7b1d.js";import{V as m}from"./VTextField-1e90003c.js";import{V as _}from"./VSelect-8600eec3.js";import{k as p,o as k,b as y,n as o,C as e,m as l,$ as A,p as c,a2 as w,Y as h,t as C,a1 as U,x as z}from"./index-30b66760.js";import{r as b,l as M,e as Y,p as H,c as J,u as L}from"./validators-d1aa93b7.js";import"./vue.runtime.esm-bundler-eb84b330.js";import"./VSlideGroup-caf298cf.js";import"./VAvatar-2c83efa5.js";import"./VImg-c7c2167a.js";import"./transition-0c6e30e4.js";import"./VInput-cd4c7816.js";import"./forwardRefs-a29b5f65.js";import"./lazy-fe618c41.js";import"./ssrBoot-050ef406.js";/* empty css                   */import"./VField-027419e4.js";import"./easing-9f15041e.js";import"./VCounter-e2a77d8b.js";import"./VList-d87f0460.js";import"./dialog-transition-9418ede6.js";import"./VMenu-55b2ccf7.js";import"./VOverlay-17b4c386.js";import"./VCheckboxBtn-a5502da0.js";import"./VSelectionControl-a507e867.js";import"./VChip-ca3f8676.js";import"./index-61e4df1a.js";const O={ts:`<script setup lang="ts">
const numberedSteps = [
  {
    title: 'Account Details',
    subtitle: 'Setup Account Details',
  },
  {
    title: 'Personal Info',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
    subtitle: 'Add social links',
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)

const formData = ref({
  username: '',
  email: '',
  password: '',
  c_password: '',
  firstName: '',
  lastName: '',
  country: undefined,
  language: undefined,
  twitter: '',
  facebook: '',
  googlePlus: '',
  linkedIn: '',

})

const onSubmit = () => {
  console.log(formData.value)
}
<\/script>

<template>
  <VCard>
    <VCardText>
      <!-- 👉 Stepper -->
      <AppStepper
        v-model:current-step="currentStep"
        align="start"
        :items="numberedSteps"
      />
    </VCardText>

    <VDivider />

    <VCardText>
      <!-- 👉 stepper content -->
      <VForm>
        <VWindow
          v-model="currentStep"
          class="disable-tab-transition"
        >
          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-sm font-weight-medium">
                  Account Details
                </h6>
                <p class="text-xs mb-0">
                  Enter your Account Details
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.username"
                  placeholder="CarterLeonardo"
                  label="Username"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.email"
                  placeholder="carterleonardo@gmail.com"
                  label="Email"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.password"
                  label="Password"
                  placeholder="Enter Password"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.c_password"
                  label="Confirm Password"
                  placeholder="Enter Confirm Password"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCPasswordVisible ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>
            </VRow>
          </VWindowItem>

          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-sm font-weight-medium">
                  Personal Info
                </h6>
                <p class="text-xs mb-0">
                  Setup Information
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.firstName"
                  label="First Name"
                  placeholder="Leonard"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.lastName"
                  label="Last Name"
                  placeholder="Carter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VSelect
                  v-model="formData.country"
                  label="Country"
                  placeholder="Country"
                  :items="['UK', 'USA', 'Canada', 'Australia', 'Germany']"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VSelect
                  v-model="formData.language"
                  label="Language"
                  placeholder="Language"
                  :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                />
              </VCol>
            </VRow>
          </VWindowItem>

          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-sm font-weight-medium">
                  Social Links
                </h6>
                <p class="text-xs mb-0">
                  Add Social Links
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.twitter"
                  placeholder="https://twitter.com/abc"
                  label="Twitter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.facebook"
                  placeholder="https://facebook.com/abc"
                  label="Facebook"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.googlePlus"
                  placeholder="https://plus.google.com/abc"
                  label="Google+"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.linkedIn"
                  placeholder="https://linkedin.com/abc"
                  label="LinkedIn"
                />
              </VCol>
            </VRow>
          </VWindowItem>
        </VWindow>

        <div class="d-flex justify-sm-space-between justify-center flex-wrap gap-4 mt-8">
          <VBtn
            :color="currentStep === 0 ? 'secondary' : 'default'"
            variant="outlined"
            :disabled="currentStep === 0"
            @click="currentStep--"
          >
            <VIcon
              icon="mdi-arrow-left"
              start
              class="flip-in-rtl"
            />
            Previous
          </VBtn>

          <VBtn
            v-if="numberedSteps.length - 1 === currentStep"
            color="success"
            append-icon="mdi-check"
            @click="onSubmit"
          >
            submit
          </VBtn>

          <VBtn
            v-else
            @click="currentStep++"
          >
            Next

            <VIcon
              icon="mdi-arrow-right"
              end
              class="flip-in-rtl"
            />
          </VBtn>
        </div>
      </VForm>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const numberedSteps = [
  {
    title: 'Account Details',
    subtitle: 'Setup Account Details',
  },
  {
    title: 'Personal Info',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
    subtitle: 'Add social links',
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)

const formData = ref({
  username: '',
  email: '',
  password: '',
  c_password: '',
  firstName: '',
  lastName: '',
  country: undefined,
  language: undefined,
  twitter: '',
  facebook: '',
  googlePlus: '',
  linkedIn: '',
})

const onSubmit = () => {
  console.log(formData.value)
}
<\/script>

<template>
  <VCard>
    <VCardText>
      <!-- 👉 Stepper -->
      <AppStepper
        v-model:current-step="currentStep"
        align="start"
        :items="numberedSteps"
      />
    </VCardText>

    <VDivider />

    <VCardText>
      <!-- 👉 stepper content -->
      <VForm>
        <VWindow
          v-model="currentStep"
          class="disable-tab-transition"
        >
          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-sm font-weight-medium">
                  Account Details
                </h6>
                <p class="text-xs mb-0">
                  Enter your Account Details
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.username"
                  placeholder="CarterLeonardo"
                  label="Username"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.email"
                  placeholder="carterleonardo@gmail.com"
                  label="Email"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.password"
                  label="Password"
                  placeholder="Enter Password"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.c_password"
                  label="Confirm Password"
                  placeholder="Enter Confirm Password"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCPasswordVisible ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>
            </VRow>
          </VWindowItem>

          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-sm font-weight-medium">
                  Personal Info
                </h6>
                <p class="text-xs mb-0">
                  Setup Information
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.firstName"
                  label="First Name"
                  placeholder="Leonard"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.lastName"
                  label="Last Name"
                  placeholder="Carter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VSelect
                  v-model="formData.country"
                  label="Country"
                  placeholder="Country"
                  :items="['UK', 'USA', 'Canada', 'Australia', 'Germany']"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VSelect
                  v-model="formData.language"
                  label="Language"
                  placeholder="Language"
                  :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                />
              </VCol>
            </VRow>
          </VWindowItem>

          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-sm font-weight-medium">
                  Social Links
                </h6>
                <p class="text-xs mb-0">
                  Add Social Links
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.twitter"
                  placeholder="https://twitter.com/abc"
                  label="Twitter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.facebook"
                  placeholder="https://facebook.com/abc"
                  label="Facebook"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.googlePlus"
                  placeholder="https://plus.google.com/abc"
                  label="Google+"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.linkedIn"
                  placeholder="https://linkedin.com/abc"
                  label="LinkedIn"
                />
              </VCol>
            </VRow>
          </VWindowItem>
        </VWindow>

        <div class="d-flex justify-sm-space-between justify-center flex-wrap gap-4 mt-8">
          <VBtn
            :color="currentStep === 0 ? 'secondary' : 'default'"
            variant="outlined"
            :disabled="currentStep === 0"
            @click="currentStep--"
          >
            <VIcon
              icon="mdi-arrow-left"
              start
              class="flip-in-rtl"
            />
            Previous
          </VBtn>

          <VBtn
            v-if="numberedSteps.length - 1 === currentStep"
            color="success"
            append-icon="mdi-check"
            @click="onSubmit"
          >
            submit
          </VBtn>

          <VBtn
            v-else
            @click="currentStep++"
          >
            Next

            <VIcon
              icon="mdi-arrow-right"
              end
              class="flip-in-rtl"
            />
          </VBtn>
        </div>
      </VForm>
    </VCardText>
  </VCard>
</template>
`},Q={ts:`<script setup lang="ts">
import { VForm } from 'vuetify/components/VForm'
import { confirmedValidator, emailValidator, lengthValidator, passwordValidator, requiredValidator, urlValidator } from '@core/utils/validators'

const numberedSteps = [
  {
    title: 'Account Details',
    subtitle: 'Setup Account Details',
  },
  {
    title: 'Personal Info',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
    subtitle: 'Add social links',
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)
const isCurrentStepValid = ref(true)
const refAccountForm = ref<VForm>()
const refPersonalForm = ref<VForm>()
const refSocialLinkForm = ref<VForm>()

const accountForm = ref({
  username: '',
  email: '',
  password: '',
  c_password: '',
})

const personalForm = ref({
  firstName: '',
  lastName: '',
  country: undefined,
  language: undefined,
})

const socialForm = ref({
  twitter: '',
  facebook: '',
  googlePlus: '',
  linkedIn: '',

})

const validateAccountForm = () => {
  refAccountForm.value?.validate().then(valid => {
    if (valid.valid) {
      currentStep.value++
      isCurrentStepValid.value = true
    }
    else { isCurrentStepValid.value = false }
  })
}

const validatePersonalForm = () => {
  refPersonalForm.value?.validate().then(valid => {
    if (valid.valid) {
      currentStep.value++
      isCurrentStepValid.value = true
    }
    else { isCurrentStepValid.value = false }
  })
}

const validateSocialLinkForm = () => {
  refSocialLinkForm.value?.validate().then(valid => {
    if (valid.valid) {
      isCurrentStepValid.value = true

      console.log({
        ...accountForm.value,
        ...personalForm.value,
        ...socialForm.value,
      })
    }
    else { isCurrentStepValid.value = false }
  })
}
<\/script>

<template>
  <VCard>
    <VCardText>
      <!-- 👉 Stepper -->
      <AppStepper
        v-model:current-step="currentStep"
        :items="numberedSteps"
        align="start"
        :is-active-step-valid="isCurrentStepValid"
      />
    </VCardText>

    <VDivider />

    <VCardText>
      <!-- 👉 stepper content -->

      <VWindow
        v-model="currentStep"
        class="disable-tab-transition"
      >
        <VWindowItem>
          <VForm
            ref="refAccountForm"
            @submit.prevent="validateAccountForm"
          >
            <VRow>
              <VCol cols="12">
                <h6 class="text-sm font-weight-medium">
                  Account Details
                </h6>
                <p class="text-xs mb-0">
                  Enter your Account Details
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="accountForm.username"
                  placeholder="CarterLeonardo"
                  :rules="[requiredValidator, lengthValidator(accountForm.username, 6)]"
                  label="Username"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="accountForm.email"
                  placeholder="carterleonardo@gmail.com"
                  :rules="[requiredValidator, emailValidator]"
                  label="Email"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="accountForm.password"
                  label="Password"
                  placeholder="Enter Password"
                  :rules="[requiredValidator, passwordValidator]"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="accountForm.c_password"
                  label="Confirm Password"
                  placeholder="Confirm Password"
                  :rules="[requiredValidator, confirmedValidator(accountForm.c_password, accountForm.password)]"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCPasswordVisible ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>

              <VCol cols="12">
                <div class="d-flex justify-sm-space-between justify-center flex-wrap gap-4">
                  <VBtn
                    :color="currentStep === 0 ? 'secondary' : 'default'"
                    variant="outlined"
                    disabled
                  >
                    <VIcon
                      icon="mdi-arrow-left"
                      start
                      class="flip-in-rtl"
                    />
                    Previous
                  </VBtn>

                  <VBtn type="submit">
                    Next
                    <VIcon
                      icon="mdi-arrow-right"
                      end
                      class="flip-in-rtl"
                    />
                  </VBtn>
                </div>
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem>
          <VForm
            ref="refPersonalForm"
            @submit.prevent="validatePersonalForm"
          >
            <VRow>
              <VCol cols="12">
                <h6 class="text-sm font-weight-medium">
                  Personal Info
                </h6>
                <p class="text-xs mb-0">
                  Setup Information
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="personalForm.firstName"
                  label="First Name"
                  :rules="[requiredValidator]"
                  placeholder="Leonard"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="personalForm.lastName"
                  label="Last Name"
                  :rules="[requiredValidator]"
                  placeholder="Carter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VSelect
                  v-model="personalForm.country"
                  label="Country"
                  :rules="[requiredValidator]"
                  placeholder="Country"
                  :items="['UK', 'USA', 'Canada', 'Australia', 'Germany']"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VSelect
                  v-model="personalForm.language"
                  label="Language"
                  :rules="[requiredValidator]"
                  placeholder="Language"
                  :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                />
              </VCol>

              <VCol cols="12">
                <div class="d-flex justify-space-between">
                  <VBtn
                    color="secondary"
                    variant="tonal"
                    @click="currentStep--"
                  >
                    <VIcon
                      icon="mdi-chevron-left"
                      start
                      class="flip-in-rtl"
                    />
                    Previous
                  </VBtn>

                  <VBtn type="submit">
                    Next
                    <VIcon
                      icon="mdi-chevron-right"
                      end
                      class="flip-in-rtl"
                    />
                  </VBtn>
                </div>
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem>
          <VForm
            ref="refSocialLinkForm"
            @submit.prevent="validateSocialLinkForm"
          >
            <VRow>
              <VCol cols="12">
                <h6 class="text-sm font-weight-medium">
                  Social Links
                </h6>
                <p class="text-xs mb-0">
                  Add Social Links
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="socialForm.twitter"
                  placeholder="https://twitter.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="Twitter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="socialForm.facebook"
                  placeholder="https://facebook.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="Facebook"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="socialForm.googlePlus"
                  placeholder="https://plus.google.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="Google+"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="socialForm.linkedIn"
                  placeholder="https://likedin.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="LinkedIn"
                />
              </VCol>

              <VCol cols="12">
                <div class="d-flex justify-space-between">
                  <VBtn
                    color="secondary"
                    variant="tonal"
                    @click="currentStep--"
                  >
                    <VIcon
                      icon="mdi-chevron-left"
                      start
                      class="flip-in-rtl"
                    />
                    Previous
                  </VBtn>

                  <VBtn
                    color="success"
                    type="submit"
                  >
                    submit
                  </VBtn>
                </div>
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
import { VForm } from 'vuetify/components/VForm'
import {
  confirmedValidator,
  emailValidator,
  lengthValidator,
  passwordValidator,
  requiredValidator,
  urlValidator,
} from '@core/utils/validators'

const numberedSteps = [
  {
    title: 'Account Details',
    subtitle: 'Setup Account Details',
  },
  {
    title: 'Personal Info',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
    subtitle: 'Add social links',
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)
const isCurrentStepValid = ref(true)
const refAccountForm = ref()
const refPersonalForm = ref()
const refSocialLinkForm = ref()

const accountForm = ref({
  username: '',
  email: '',
  password: '',
  c_password: '',
})

const personalForm = ref({
  firstName: '',
  lastName: '',
  country: undefined,
  language: undefined,
})

const socialForm = ref({
  twitter: '',
  facebook: '',
  googlePlus: '',
  linkedIn: '',
})

const validateAccountForm = () => {
  refAccountForm.value?.validate().then(valid => {
    if (valid.valid) {
      currentStep.value++
      isCurrentStepValid.value = true
    } else {
      isCurrentStepValid.value = false
    }
  })
}

const validatePersonalForm = () => {
  refPersonalForm.value?.validate().then(valid => {
    if (valid.valid) {
      currentStep.value++
      isCurrentStepValid.value = true
    } else {
      isCurrentStepValid.value = false
    }
  })
}

const validateSocialLinkForm = () => {
  refSocialLinkForm.value?.validate().then(valid => {
    if (valid.valid) {
      isCurrentStepValid.value = true
      console.log({
        ...accountForm.value,
        ...personalForm.value,
        ...socialForm.value,
      })
    } else {
      isCurrentStepValid.value = false
    }
  })
}
<\/script>

<template>
  <VCard>
    <VCardText>
      <!-- 👉 Stepper -->
      <AppStepper
        v-model:current-step="currentStep"
        :items="numberedSteps"
        align="start"
        :is-active-step-valid="isCurrentStepValid"
      />
    </VCardText>

    <VDivider />

    <VCardText>
      <!-- 👉 stepper content -->

      <VWindow
        v-model="currentStep"
        class="disable-tab-transition"
      >
        <VWindowItem>
          <VForm
            ref="refAccountForm"
            @submit.prevent="validateAccountForm"
          >
            <VRow>
              <VCol cols="12">
                <h6 class="text-sm font-weight-medium">
                  Account Details
                </h6>
                <p class="text-xs mb-0">
                  Enter your Account Details
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="accountForm.username"
                  placeholder="CarterLeonardo"
                  :rules="[requiredValidator, lengthValidator(accountForm.username, 6)]"
                  label="Username"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="accountForm.email"
                  placeholder="carterleonardo@gmail.com"
                  :rules="[requiredValidator, emailValidator]"
                  label="Email"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="accountForm.password"
                  label="Password"
                  placeholder="Enter Password"
                  :rules="[requiredValidator, passwordValidator]"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="accountForm.c_password"
                  label="Confirm Password"
                  placeholder="Confirm Password"
                  :rules="[requiredValidator, confirmedValidator(accountForm.c_password, accountForm.password)]"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCPasswordVisible ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>

              <VCol cols="12">
                <div class="d-flex justify-sm-space-between justify-center flex-wrap gap-4">
                  <VBtn
                    :color="currentStep === 0 ? 'secondary' : 'default'"
                    variant="outlined"
                    disabled
                  >
                    <VIcon
                      icon="mdi-arrow-left"
                      start
                      class="flip-in-rtl"
                    />
                    Previous
                  </VBtn>

                  <VBtn type="submit">
                    Next
                    <VIcon
                      icon="mdi-arrow-right"
                      end
                      class="flip-in-rtl"
                    />
                  </VBtn>
                </div>
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem>
          <VForm
            ref="refPersonalForm"
            @submit.prevent="validatePersonalForm"
          >
            <VRow>
              <VCol cols="12">
                <h6 class="text-sm font-weight-medium">
                  Personal Info
                </h6>
                <p class="text-xs mb-0">
                  Setup Information
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="personalForm.firstName"
                  label="First Name"
                  :rules="[requiredValidator]"
                  placeholder="Leonard"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="personalForm.lastName"
                  label="Last Name"
                  :rules="[requiredValidator]"
                  placeholder="Carter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VSelect
                  v-model="personalForm.country"
                  label="Country"
                  :rules="[requiredValidator]"
                  placeholder="Country"
                  :items="['UK', 'USA', 'Canada', 'Australia', 'Germany']"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VSelect
                  v-model="personalForm.language"
                  label="Language"
                  :rules="[requiredValidator]"
                  placeholder="Language"
                  :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                />
              </VCol>

              <VCol cols="12">
                <div class="d-flex justify-space-between">
                  <VBtn
                    color="secondary"
                    variant="tonal"
                    @click="currentStep--"
                  >
                    <VIcon
                      icon="mdi-chevron-left"
                      start
                      class="flip-in-rtl"
                    />
                    Previous
                  </VBtn>

                  <VBtn type="submit">
                    Next
                    <VIcon
                      icon="mdi-chevron-right"
                      end
                      class="flip-in-rtl"
                    />
                  </VBtn>
                </div>
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem>
          <VForm
            ref="refSocialLinkForm"
            @submit.prevent="validateSocialLinkForm"
          >
            <VRow>
              <VCol cols="12">
                <h6 class="text-sm font-weight-medium">
                  Social Links
                </h6>
                <p class="text-xs mb-0">
                  Add Social Links
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="socialForm.twitter"
                  placeholder="https://twitter.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="Twitter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="socialForm.facebook"
                  placeholder="https://facebook.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="Facebook"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="socialForm.googlePlus"
                  placeholder="https://plus.google.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="Google+"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="socialForm.linkedIn"
                  placeholder="https://likedin.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="LinkedIn"
                />
              </VCol>

              <VCol cols="12">
                <div class="d-flex justify-space-between">
                  <VBtn
                    color="secondary"
                    variant="tonal"
                    @click="currentStep--"
                  >
                    <VIcon
                      icon="mdi-chevron-left"
                      start
                      class="flip-in-rtl"
                    />
                    Previous
                  </VBtn>

                  <VBtn
                    color="success"
                    type="submit"
                  >
                    submit
                  </VBtn>
                </div>
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`},X={ts:`<script setup lang="ts">
const numberedSteps = [
  {
    title: 'Account Details',
    subtitle: 'Setup Account Details',
  },
  {
    title: 'Personal Info',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
    subtitle: 'Add social links',
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)

const formData = ref({
  username: '',
  email: '',
  password: '',
  c_password: '',
  firstName: '',
  lastName: '',
  country: undefined,
  language: undefined,
  twitter: '',
  facebook: '',
  googlePlus: '',
  linkedIn: '',

})

const onSubmit = () => {
  console.log(formData.value)
}
<\/script>

<template>
  <VCard>
    <VRow>
      <VCol
        cols="12"
        md="4"
        :class="$vuetify.display.smAndDown ? 'border-b' : 'border-e'"
      >
        <VCardText>
          <!-- 👉 Stepper -->
          <AppStepper
            v-model:current-step="currentStep"
            direction="vertical"
            :items="numberedSteps"
          />
        </VCardText>
      </VCol>
      <!-- 👉 stepper content -->
      <VCol
        cols="12"
        md="8"
      >
        <VCardText>
          <VForm>
            <VWindow
              v-model="currentStep"
              class="disable-tab-transition"
            >
              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-sm font-weight-medium">
                      Account Details
                    </h6>
                    <p class="text-xs mb-0">
                      Enter your Account Details
                    </p>
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="formData.username"
                      placeholder="CarterLeonardo"
                      label="Username"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="formData.email"
                      placeholder="carterleonardo@gmail.com"
                      label="Email"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="formData.password"
                      placeholder="Enter Password"
                      label="Password"
                      :type="isPasswordVisible ? 'text' : 'password'"
                      :append-inner-icon="isPasswordVisible ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                      @click:append-inner="isPasswordVisible = !isPasswordVisible"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="formData.c_password"
                      placeholder="Confirm Password"
                      label="Confirm Password"
                      :type="isCPasswordVisible ? 'text' : 'password'"
                      :append-inner-icon="isCPasswordVisible ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                      @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>

              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-sm font-weight-medium">
                      Personal Info
                    </h6>
                    <p class="text-xs mb-0">
                      Setup Information
                    </p>
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="formData.firstName"
                      label="First Name"
                      placeholder="Leonard"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="formData.lastName"
                      label="Last Name"
                      placeholder="Carter"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VSelect
                      v-model="formData.country"
                      label="Country"
                      placeholder="Country"
                      :items="['UK', 'USA', 'Canada', 'Australia', 'Germany']"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VSelect
                      v-model="formData.language"
                      label="Language"
                      placeholder="Language"
                      :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>

              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-sm font-weight-medium">
                      Social Links
                    </h6>
                    <p class="text-xs mb-0">
                      Add Social Links
                    </p>
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="formData.twitter"
                      placeholder="https://twitter.com/abc"
                      label="Twitter"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="formData.facebook"
                      placeholder="https://facebook.com/abc"
                      label="Facebook"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="formData.googlePlus"
                      placeholder="https://plus.google.com/abc"
                      label="Google+"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="formData.linkedIn"
                      placeholder="https://linkedin.com/abc"
                      label="LinkedIn"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>
            </VWindow>

            <div class="d-flex justify-sm-space-between justify-center flex-wrap gap-4 mt-8">
              <VBtn
                :color="currentStep === 0 ? 'secondary' : 'default'"
                variant="outlined"
                :disabled="currentStep === 0"
                @click="currentStep--"
              >
                <VIcon
                  icon="mdi-arrow-left"
                  start
                  class="flip-in-rtl"
                />
                Previous
              </VBtn>

              <VBtn
                v-if="numberedSteps.length - 1 === currentStep"
                color="success"
                append-icon="mdi-check"
                @click="onSubmit"
              >
                submit
              </VBtn>

              <VBtn
                v-else
                @click="currentStep++"
              >
                Next

                <VIcon
                  icon="mdi-arrow-right"
                  end
                  class="flip-in-rtl"
                />
              </VBtn>
            </div>
          </VForm>
        </VCardText>
      </VCol>
    </VRow>
  </VCard>
</template>
`,js:`<script setup>
const numberedSteps = [
  {
    title: 'Account Details',
    subtitle: 'Setup Account Details',
  },
  {
    title: 'Personal Info',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
    subtitle: 'Add social links',
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)

const formData = ref({
  username: '',
  email: '',
  password: '',
  c_password: '',
  firstName: '',
  lastName: '',
  country: undefined,
  language: undefined,
  twitter: '',
  facebook: '',
  googlePlus: '',
  linkedIn: '',
})

const onSubmit = () => {
  console.log(formData.value)
}
<\/script>

<template>
  <VCard>
    <VRow>
      <VCol
        cols="12"
        md="4"
        :class="$vuetify.display.smAndDown ? 'border-b' : 'border-e'"
      >
        <VCardText>
          <!-- 👉 Stepper -->
          <AppStepper
            v-model:current-step="currentStep"
            direction="vertical"
            :items="numberedSteps"
          />
        </VCardText>
      </VCol>
      <!-- 👉 stepper content -->
      <VCol
        cols="12"
        md="8"
      >
        <VCardText>
          <VForm>
            <VWindow
              v-model="currentStep"
              class="disable-tab-transition"
            >
              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-sm font-weight-medium">
                      Account Details
                    </h6>
                    <p class="text-xs mb-0">
                      Enter your Account Details
                    </p>
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="formData.username"
                      placeholder="CarterLeonardo"
                      label="Username"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="formData.email"
                      placeholder="carterleonardo@gmail.com"
                      label="Email"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="formData.password"
                      placeholder="Enter Password"
                      label="Password"
                      :type="isPasswordVisible ? 'text' : 'password'"
                      :append-inner-icon="isPasswordVisible ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                      @click:append-inner="isPasswordVisible = !isPasswordVisible"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="formData.c_password"
                      placeholder="Confirm Password"
                      label="Confirm Password"
                      :type="isCPasswordVisible ? 'text' : 'password'"
                      :append-inner-icon="isCPasswordVisible ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                      @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>

              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-sm font-weight-medium">
                      Personal Info
                    </h6>
                    <p class="text-xs mb-0">
                      Setup Information
                    </p>
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="formData.firstName"
                      label="First Name"
                      placeholder="Leonard"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="formData.lastName"
                      label="Last Name"
                      placeholder="Carter"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VSelect
                      v-model="formData.country"
                      label="Country"
                      placeholder="Country"
                      :items="['UK', 'USA', 'Canada', 'Australia', 'Germany']"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VSelect
                      v-model="formData.language"
                      label="Language"
                      placeholder="Language"
                      :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>

              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-sm font-weight-medium">
                      Social Links
                    </h6>
                    <p class="text-xs mb-0">
                      Add Social Links
                    </p>
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="formData.twitter"
                      placeholder="https://twitter.com/abc"
                      label="Twitter"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="formData.facebook"
                      placeholder="https://facebook.com/abc"
                      label="Facebook"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="formData.googlePlus"
                      placeholder="https://plus.google.com/abc"
                      label="Google+"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="formData.linkedIn"
                      placeholder="https://linkedin.com/abc"
                      label="LinkedIn"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>
            </VWindow>

            <div class="d-flex justify-sm-space-between justify-center flex-wrap gap-4 mt-8">
              <VBtn
                :color="currentStep === 0 ? 'secondary' : 'default'"
                variant="outlined"
                :disabled="currentStep === 0"
                @click="currentStep--"
              >
                <VIcon
                  icon="mdi-arrow-left"
                  start
                  class="flip-in-rtl"
                />
                Previous
              </VBtn>

              <VBtn
                v-if="numberedSteps.length - 1 === currentStep"
                color="success"
                append-icon="mdi-check"
                @click="onSubmit"
              >
                submit
              </VBtn>

              <VBtn
                v-else
                @click="currentStep++"
              >
                Next

                <VIcon
                  icon="mdi-arrow-right"
                  end
                  class="flip-in-rtl"
                />
              </VBtn>
            </div>
          </VForm>
        </VCardText>
      </VCol>
    </VRow>
  </VCard>
</template>
`},Z=c("h6",{class:"text-sm font-weight-medium"}," Account Details ",-1),ee=c("p",{class:"text-xs mb-0"}," Enter your Account Details ",-1),le=c("h6",{class:"text-sm font-weight-medium"}," Personal Info ",-1),oe=c("p",{class:"text-xs mb-0"}," Setup Information ",-1),te=c("h6",{class:"text-sm font-weight-medium"}," Social Links ",-1),ae=c("p",{class:"text-xs mb-0"}," Add Social Links ",-1),se={class:"d-flex justify-sm-space-between justify-center flex-wrap gap-4 mt-8"},re={__name:"DemoFormWizardNumberedBasic",setup(N){const F=[{title:"Account Details",subtitle:"Setup Account Details"},{title:"Personal Info",subtitle:"Add personal info"},{title:"Social Links",subtitle:"Add social links"}],d=p(0),u=p(!1),f=p(!1),s=p({username:"",email:"",password:"",c_password:"",firstName:"",lastName:"",country:void 0,language:void 0,twitter:"",facebook:"",googlePlus:"",linkedIn:""}),P=()=>{console.log(s.value)};return(D,t)=>{const V=B;return k(),y(W,null,{default:o(()=>[e(I,null,{default:o(()=>[e(V,{"current-step":l(d),"onUpdate:currentStep":t[0]||(t[0]=a=>A(d)?d.value=a:null),align:"start",items:F},null,8,["current-step"])]),_:1}),e(E),e(I,null,{default:o(()=>[e(T,null,{default:o(()=>[e(R,{modelValue:l(d),"onUpdate:modelValue":t[15]||(t[15]=a=>A(d)?d.value=a:null),class:"disable-tab-transition"},{default:o(()=>[e(S,null,{default:o(()=>[e(v,null,{default:o(()=>[e(r,{cols:"12"},{default:o(()=>[Z,ee]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(m,{modelValue:l(s).username,"onUpdate:modelValue":t[1]||(t[1]=a=>l(s).username=a),placeholder:"CarterLeonardo",label:"Username"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(m,{modelValue:l(s).email,"onUpdate:modelValue":t[2]||(t[2]=a=>l(s).email=a),placeholder:"carterleonardo@gmail.com",label:"Email"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(m,{modelValue:l(s).password,"onUpdate:modelValue":t[3]||(t[3]=a=>l(s).password=a),label:"Password",placeholder:"Enter Password",type:l(u)?"text":"password","append-inner-icon":l(u)?"mdi-eye-outline":"mdi-eye-off-outline","onClick:appendInner":t[4]||(t[4]=a=>u.value=!l(u))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(m,{modelValue:l(s).c_password,"onUpdate:modelValue":t[5]||(t[5]=a=>l(s).c_password=a),label:"Confirm Password",placeholder:"Enter Confirm Password",type:l(f)?"text":"password","append-inner-icon":l(f)?"mdi-eye-outline":"mdi-eye-off-outline","onClick:appendInner":t[6]||(t[6]=a=>f.value=!l(f))},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1})]),_:1}),e(S,null,{default:o(()=>[e(v,null,{default:o(()=>[e(r,{cols:"12"},{default:o(()=>[le,oe]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(m,{modelValue:l(s).firstName,"onUpdate:modelValue":t[7]||(t[7]=a=>l(s).firstName=a),label:"First Name",placeholder:"Leonard"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(m,{modelValue:l(s).lastName,"onUpdate:modelValue":t[8]||(t[8]=a=>l(s).lastName=a),label:"Last Name",placeholder:"Carter"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(_,{modelValue:l(s).country,"onUpdate:modelValue":t[9]||(t[9]=a=>l(s).country=a),label:"Country",placeholder:"Country",items:["UK","USA","Canada","Australia","Germany"]},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(_,{modelValue:l(s).language,"onUpdate:modelValue":t[10]||(t[10]=a=>l(s).language=a),label:"Language",placeholder:"Language",items:["English","Spanish","French","Russian","German"]},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(S,null,{default:o(()=>[e(v,null,{default:o(()=>[e(r,{cols:"12"},{default:o(()=>[te,ae]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(m,{modelValue:l(s).twitter,"onUpdate:modelValue":t[11]||(t[11]=a=>l(s).twitter=a),placeholder:"https://twitter.com/abc",label:"Twitter"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(m,{modelValue:l(s).facebook,"onUpdate:modelValue":t[12]||(t[12]=a=>l(s).facebook=a),placeholder:"https://facebook.com/abc",label:"Facebook"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(m,{modelValue:l(s).googlePlus,"onUpdate:modelValue":t[13]||(t[13]=a=>l(s).googlePlus=a),placeholder:"https://plus.google.com/abc",label:"Google+"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(m,{modelValue:l(s).linkedIn,"onUpdate:modelValue":t[14]||(t[14]=a=>l(s).linkedIn=a),placeholder:"https://linkedin.com/abc",label:"LinkedIn"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),c("div",se,[e(w,{color:l(d)===0?"secondary":"default",variant:"outlined",disabled:l(d)===0,onClick:t[16]||(t[16]=a=>d.value--)},{default:o(()=>[e(h,{icon:"mdi-arrow-left",start:"",class:"flip-in-rtl"}),C(" Previous ")]),_:1},8,["color","disabled"]),F.length-1===l(d)?(k(),y(w,{key:0,color:"success","append-icon":"mdi-check",onClick:P},{default:o(()=>[C(" submit ")]),_:1})):(k(),y(w,{key:1,onClick:t[17]||(t[17]=a=>d.value++)},{default:o(()=>[C(" Next "),e(h,{icon:"mdi-arrow-right",end:"",class:"flip-in-rtl"})]),_:1}))])]),_:1})]),_:1})]),_:1})}}},ie=c("h6",{class:"text-sm font-weight-medium"}," Account Details ",-1),de=c("p",{class:"text-xs mb-0"}," Enter your Account Details ",-1),ne={class:"d-flex justify-sm-space-between justify-center flex-wrap gap-4"},me=c("h6",{class:"text-sm font-weight-medium"}," Personal Info ",-1),ce=c("p",{class:"text-xs mb-0"}," Setup Information ",-1),ue={class:"d-flex justify-space-between"},pe=c("h6",{class:"text-sm font-weight-medium"}," Social Links ",-1),Ve=c("p",{class:"text-xs mb-0"}," Add Social Links ",-1),fe={class:"d-flex justify-space-between"},be={__name:"DemoFormWizardNumberedValidation",setup(N){const F=[{title:"Account Details",subtitle:"Setup Account Details"},{title:"Personal Info",subtitle:"Add personal info"},{title:"Social Links",subtitle:"Add social links"}],d=p(0),u=p(!1),f=p(!1),s=p(!0),P=p(),D=p(),t=p(),V=p({username:"",email:"",password:"",c_password:""}),a=p({firstName:"",lastName:"",country:void 0,language:void 0}),g=p({twitter:"",facebook:"",googlePlus:"",linkedIn:""}),$=()=>{var x;(x=P.value)==null||x.validate().then(i=>{i.valid?(d.value++,s.value=!0):s.value=!1})},j=()=>{var x;(x=D.value)==null||x.validate().then(i=>{i.valid?(d.value++,s.value=!0):s.value=!1})},q=()=>{var x;(x=t.value)==null||x.validate().then(i=>{i.valid?(s.value=!0,console.log({...V.value,...a.value,...g.value})):s.value=!1})};return(x,i)=>{const G=B;return k(),y(W,null,{default:o(()=>[e(I,null,{default:o(()=>[e(G,{"current-step":l(d),"onUpdate:currentStep":i[0]||(i[0]=n=>A(d)?d.value=n:null),items:F,align:"start","is-active-step-valid":l(s)},null,8,["current-step","is-active-step-valid"])]),_:1}),e(E),e(I,null,{default:o(()=>[e(R,{modelValue:l(d),"onUpdate:modelValue":i[17]||(i[17]=n=>A(d)?d.value=n:null),class:"disable-tab-transition"},{default:o(()=>[e(S,null,{default:o(()=>[e(l(T),{ref_key:"refAccountForm",ref:P,onSubmit:U($,["prevent"])},{default:o(()=>[e(v,null,{default:o(()=>[e(r,{cols:"12"},{default:o(()=>[ie,de]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(m,{modelValue:l(V).username,"onUpdate:modelValue":i[1]||(i[1]=n=>l(V).username=n),placeholder:"CarterLeonardo",rules:[l(b),l(M)(l(V).username,6)],label:"Username"},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(m,{modelValue:l(V).email,"onUpdate:modelValue":i[2]||(i[2]=n=>l(V).email=n),placeholder:"carterleonardo@gmail.com",rules:[l(b),l(Y)],label:"Email"},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(m,{modelValue:l(V).password,"onUpdate:modelValue":i[3]||(i[3]=n=>l(V).password=n),label:"Password",placeholder:"Enter Password",rules:[l(b),l(H)],type:l(u)?"text":"password","append-inner-icon":l(u)?"mdi-eye-outline":"mdi-eye-off-outline","onClick:appendInner":i[4]||(i[4]=n=>u.value=!l(u))},null,8,["modelValue","rules","type","append-inner-icon"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(m,{modelValue:l(V).c_password,"onUpdate:modelValue":i[5]||(i[5]=n=>l(V).c_password=n),label:"Confirm Password",placeholder:"Confirm Password",rules:[l(b),l(J)(l(V).c_password,l(V).password)],type:l(f)?"text":"password","append-inner-icon":l(f)?"mdi-eye-outline":"mdi-eye-off-outline","onClick:appendInner":i[6]||(i[6]=n=>f.value=!l(f))},null,8,["modelValue","rules","type","append-inner-icon"])]),_:1}),e(r,{cols:"12"},{default:o(()=>[c("div",ne,[e(w,{color:l(d)===0?"secondary":"default",variant:"outlined",disabled:""},{default:o(()=>[e(h,{icon:"mdi-arrow-left",start:"",class:"flip-in-rtl"}),C(" Previous ")]),_:1},8,["color"]),e(w,{type:"submit"},{default:o(()=>[C(" Next "),e(h,{icon:"mdi-arrow-right",end:"",class:"flip-in-rtl"})]),_:1})])]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1}),e(S,null,{default:o(()=>[e(l(T),{ref_key:"refPersonalForm",ref:D,onSubmit:U(j,["prevent"])},{default:o(()=>[e(v,null,{default:o(()=>[e(r,{cols:"12"},{default:o(()=>[me,ce]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(m,{modelValue:l(a).firstName,"onUpdate:modelValue":i[7]||(i[7]=n=>l(a).firstName=n),label:"First Name",rules:[l(b)],placeholder:"Leonard"},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(m,{modelValue:l(a).lastName,"onUpdate:modelValue":i[8]||(i[8]=n=>l(a).lastName=n),label:"Last Name",rules:[l(b)],placeholder:"Carter"},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(_,{modelValue:l(a).country,"onUpdate:modelValue":i[9]||(i[9]=n=>l(a).country=n),label:"Country",rules:[l(b)],placeholder:"Country",items:["UK","USA","Canada","Australia","Germany"]},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(_,{modelValue:l(a).language,"onUpdate:modelValue":i[10]||(i[10]=n=>l(a).language=n),label:"Language",rules:[l(b)],placeholder:"Language",items:["English","Spanish","French","Russian","German"]},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12"},{default:o(()=>[c("div",ue,[e(w,{color:"secondary",variant:"tonal",onClick:i[11]||(i[11]=n=>d.value--)},{default:o(()=>[e(h,{icon:"mdi-chevron-left",start:"",class:"flip-in-rtl"}),C(" Previous ")]),_:1}),e(w,{type:"submit"},{default:o(()=>[C(" Next "),e(h,{icon:"mdi-chevron-right",end:"",class:"flip-in-rtl"})]),_:1})])]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1}),e(S,null,{default:o(()=>[e(l(T),{ref_key:"refSocialLinkForm",ref:t,onSubmit:U(q,["prevent"])},{default:o(()=>[e(v,null,{default:o(()=>[e(r,{cols:"12"},{default:o(()=>[pe,Ve]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(m,{modelValue:l(g).twitter,"onUpdate:modelValue":i[12]||(i[12]=n=>l(g).twitter=n),placeholder:"https://twitter.com/abc",rules:[l(b),l(L)],label:"Twitter"},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(m,{modelValue:l(g).facebook,"onUpdate:modelValue":i[13]||(i[13]=n=>l(g).facebook=n),placeholder:"https://facebook.com/abc",rules:[l(b),l(L)],label:"Facebook"},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(m,{modelValue:l(g).googlePlus,"onUpdate:modelValue":i[14]||(i[14]=n=>l(g).googlePlus=n),placeholder:"https://plus.google.com/abc",rules:[l(b),l(L)],label:"Google+"},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(m,{modelValue:l(g).linkedIn,"onUpdate:modelValue":i[15]||(i[15]=n=>l(g).linkedIn=n),placeholder:"https://likedin.com/abc",rules:[l(b),l(L)],label:"LinkedIn"},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12"},{default:o(()=>[c("div",fe,[e(w,{color:"secondary",variant:"tonal",onClick:i[16]||(i[16]=n=>d.value--)},{default:o(()=>[e(h,{icon:"mdi-chevron-left",start:"",class:"flip-in-rtl"}),C(" Previous ")]),_:1}),e(w,{color:"success",type:"submit"},{default:o(()=>[C(" submit ")]),_:1})])]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})}}},we=c("h6",{class:"text-sm font-weight-medium"}," Account Details ",-1),Ce=c("p",{class:"text-xs mb-0"}," Enter your Account Details ",-1),ve=c("h6",{class:"text-sm font-weight-medium"}," Personal Info ",-1),ge=c("p",{class:"text-xs mb-0"}," Setup Information ",-1),xe=c("h6",{class:"text-sm font-weight-medium"}," Social Links ",-1),he=c("p",{class:"text-xs mb-0"}," Add Social Links ",-1),Se={class:"d-flex justify-sm-space-between justify-center flex-wrap gap-4 mt-8"},Fe={__name:"DemoFormWizardNumberedVertical",setup(N){const F=[{title:"Account Details",subtitle:"Setup Account Details"},{title:"Personal Info",subtitle:"Add personal info"},{title:"Social Links",subtitle:"Add social links"}],d=p(0),u=p(!1),f=p(!1),s=p({username:"",email:"",password:"",c_password:"",firstName:"",lastName:"",country:void 0,language:void 0,twitter:"",facebook:"",googlePlus:"",linkedIn:""}),P=()=>{console.log(s.value)};return(D,t)=>{const V=B;return k(),y(W,null,{default:o(()=>[e(v,null,{default:o(()=>[e(r,{cols:"12",md:"4",class:z(D.$vuetify.display.smAndDown?"border-b":"border-e")},{default:o(()=>[e(I,null,{default:o(()=>[e(V,{"current-step":l(d),"onUpdate:currentStep":t[0]||(t[0]=a=>A(d)?d.value=a:null),direction:"vertical",items:F},null,8,["current-step"])]),_:1})]),_:1},8,["class"]),e(r,{cols:"12",md:"8"},{default:o(()=>[e(I,null,{default:o(()=>[e(T,null,{default:o(()=>[e(R,{modelValue:l(d),"onUpdate:modelValue":t[15]||(t[15]=a=>A(d)?d.value=a:null),class:"disable-tab-transition"},{default:o(()=>[e(S,null,{default:o(()=>[e(v,null,{default:o(()=>[e(r,{cols:"12"},{default:o(()=>[we,Ce]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(m,{modelValue:l(s).username,"onUpdate:modelValue":t[1]||(t[1]=a=>l(s).username=a),placeholder:"CarterLeonardo",label:"Username"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(m,{modelValue:l(s).email,"onUpdate:modelValue":t[2]||(t[2]=a=>l(s).email=a),placeholder:"carterleonardo@gmail.com",label:"Email"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(m,{modelValue:l(s).password,"onUpdate:modelValue":t[3]||(t[3]=a=>l(s).password=a),placeholder:"Enter Password",label:"Password",type:l(u)?"text":"password","append-inner-icon":l(u)?"mdi-eye-outline":"mdi-eye-off-outline","onClick:appendInner":t[4]||(t[4]=a=>u.value=!l(u))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(m,{modelValue:l(s).c_password,"onUpdate:modelValue":t[5]||(t[5]=a=>l(s).c_password=a),placeholder:"Confirm Password",label:"Confirm Password",type:l(f)?"text":"password","append-inner-icon":l(f)?"mdi-eye-outline":"mdi-eye-off-outline","onClick:appendInner":t[6]||(t[6]=a=>f.value=!l(f))},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1})]),_:1}),e(S,null,{default:o(()=>[e(v,null,{default:o(()=>[e(r,{cols:"12"},{default:o(()=>[ve,ge]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(m,{modelValue:l(s).firstName,"onUpdate:modelValue":t[7]||(t[7]=a=>l(s).firstName=a),label:"First Name",placeholder:"Leonard"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(m,{modelValue:l(s).lastName,"onUpdate:modelValue":t[8]||(t[8]=a=>l(s).lastName=a),label:"Last Name",placeholder:"Carter"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(_,{modelValue:l(s).country,"onUpdate:modelValue":t[9]||(t[9]=a=>l(s).country=a),label:"Country",placeholder:"Country",items:["UK","USA","Canada","Australia","Germany"]},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(_,{modelValue:l(s).language,"onUpdate:modelValue":t[10]||(t[10]=a=>l(s).language=a),label:"Language",placeholder:"Language",items:["English","Spanish","French","Russian","German"]},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(S,null,{default:o(()=>[e(v,null,{default:o(()=>[e(r,{cols:"12"},{default:o(()=>[xe,he]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(m,{modelValue:l(s).twitter,"onUpdate:modelValue":t[11]||(t[11]=a=>l(s).twitter=a),placeholder:"https://twitter.com/abc",label:"Twitter"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(m,{modelValue:l(s).facebook,"onUpdate:modelValue":t[12]||(t[12]=a=>l(s).facebook=a),placeholder:"https://facebook.com/abc",label:"Facebook"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(m,{modelValue:l(s).googlePlus,"onUpdate:modelValue":t[13]||(t[13]=a=>l(s).googlePlus=a),placeholder:"https://plus.google.com/abc",label:"Google+"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:o(()=>[e(m,{modelValue:l(s).linkedIn,"onUpdate:modelValue":t[14]||(t[14]=a=>l(s).linkedIn=a),placeholder:"https://linkedin.com/abc",label:"LinkedIn"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),c("div",Se,[e(w,{color:l(d)===0?"secondary":"default",variant:"outlined",disabled:l(d)===0,onClick:t[16]||(t[16]=a=>d.value--)},{default:o(()=>[e(h,{icon:"mdi-arrow-left",start:"",class:"flip-in-rtl"}),C(" Previous ")]),_:1},8,["color","disabled"]),F.length-1===l(d)?(k(),y(w,{key:0,color:"success","append-icon":"mdi-check",onClick:P},{default:o(()=>[C(" submit ")]),_:1})):(k(),y(w,{key:1,onClick:t[17]||(t[17]=a=>d.value++)},{default:o(()=>[C(" Next "),e(h,{icon:"mdi-arrow-right",end:"",class:"flip-in-rtl"})]),_:1}))])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}},tl={__name:"form-wizard-numbered",setup(N){return(F,d)=>{const u=K;return k(),y(v,null,{default:o(()=>[e(r,{cols:"12"},{default:o(()=>[e(u,{variant:"outlined",title:"Basic",code:O},{default:o(()=>[e(re)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12"},{default:o(()=>[e(u,{variant:"outlined",title:"Validation",code:Q},{default:o(()=>[e(be)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12"},{default:o(()=>[e(u,{variant:"outlined",title:"Vertical",code:X},{default:o(()=>[e(Fe)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{tl as default};
