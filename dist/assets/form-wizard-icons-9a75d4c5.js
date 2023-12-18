import{_ as M}from"./AppCardCode-514fb21c.js";import{_ as E}from"./AppStepper-f708818b.js";import{c as L,V as j}from"./VCard-db64c41e.js";import{V as _}from"./VDivider-0d474c05.js";import{V as T}from"./VForm-5a29b781.js";import{V as z,a as h}from"./VWindowItem-25e445b0.js";import{V as v,a as i}from"./VRow-b0db7b1d.js";import{V as c}from"./VTextField-1e90003c.js";import{V as N}from"./VSelect-8600eec3.js";import{k as p,o as P,b as I,n as o,C as e,m as l,$ as B,p as r,v as u,a2 as w,Y as k,t as C,a1 as R,x as H}from"./index-30b66760.js";import{r as f,l as O,e as Q,p as X,c as Z,u as W}from"./validators-d1aa93b7.js";import"./vue.runtime.esm-bundler-eb84b330.js";import"./VSlideGroup-caf298cf.js";import"./VAvatar-2c83efa5.js";import"./VImg-c7c2167a.js";import"./transition-0c6e30e4.js";import"./VInput-cd4c7816.js";import"./forwardRefs-a29b5f65.js";import"./lazy-fe618c41.js";import"./ssrBoot-050ef406.js";/* empty css                   */import"./VField-027419e4.js";import"./easing-9f15041e.js";import"./VCounter-e2a77d8b.js";import"./VList-d87f0460.js";import"./dialog-transition-9418ede6.js";import"./VMenu-55b2ccf7.js";import"./VOverlay-17b4c386.js";import"./VCheckboxBtn-a5502da0.js";import"./VSelectionControl-a507e867.js";import"./VChip-ca3f8676.js";import"./index-61e4df1a.js";const ee={ts:`<script setup lang="ts">
const iconsSteps = [
  {
    title: 'Account Details',
    icon: 'custom-wizard-account',
  },
  {
    title: 'Personal Info',
    icon: 'custom-wizard-personal',
  },
  {
    title: 'Address',
    icon: 'custom-wizard-address',
  },
  {
    title: 'Social Links',
    icon: 'custom-wizard-social-link',
  },
  {
    title: 'Review & Submit',
    icon: 'custom-wizard-submit',
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)

const formData = ref({
  username: 'johndoe',
  email: 'john.doe@email.com',
  password: 'johndoe@J2',
  c_password: 'johndoe@J2',
  firstName: 'John',
  lastName: 'Doe',
  country: 'UK',
  language: 'English',
  address: '98 Borough bridge Road, Birmingham',
  landmark: 'Borough bridge',
  pincode: '658921',
  city: 'Birmingham',
  twitter: 'https://twitter.com/abc',
  facebook: 'https://facebook.com/abc',
  googlePlus: 'https://plus.google.com/abc',
  linkedIn: 'https://linkedin.com/abc',
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
        :items="iconsSteps"
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
                  Address
                </h6>
                <p class="text-xs mb-0">
                  Enter Your Address.
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.address"
                  placeholder="98 Borough bridge Road, Birmingham"
                  label="Address"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.landmark"
                  placeholder="Borough bridge"
                  label="Landmark"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.pincode"
                  placeholder="658921"
                  label="Pincode"
                  type="number"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.city"
                  placeholder="City"
                  label="City"
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

          <VWindowItem>
            <div class="text-base">
              <h6 class="text-base font-weight-medium mb-2">
                Account
              </h6>

              <p class="mb-1">
                {{ formData.username }}
              </p>
              <p class="mb-1">
                {{ formData.email }}
              </p>

              <VDivider class="my-4" />

              <h6 class="text-base font-weight-medium mb-2">
                Personal Info
              </h6>

              <p class="mb-1">
                {{ formData.firstName }}
              </p>
              <p class="mb-1">
                {{ formData.lastName }}
              </p>
              <p class="mb-1">
                {{ formData.country }}
              </p>
              <p class="mb-1">
                {{ formData.language }}
              </p>

              <VDivider class="my-4" />

              <h6 class="text-base font-weight-medium mb-2">
                Address
              </h6>

              <p class="mb-1">
                {{ formData.address }}
              </p>
              <p class="mb-1">
                {{ formData.landmark }}
              </p>
              <p class="mb-1">
                {{ formData.pincode }}
              </p>
              <p class="mb-1">
                {{ formData.city }}
              </p>

              <VDivider class="my-4" />

              <h6 class="text-base font-weight-medium mb-2">
                Social Links
              </h6>

              <p class="mb-1">
                {{ formData.twitter }}
              </p>
              <p class="mb-1">
                {{ formData.facebook }}
              </p>
              <p class="mb-1">
                {{ formData.googlePlus }}
              </p>
              <p class="mb-1">
                {{ formData.linkedIn }}
              </p>
            </div>
          </VWindowItem>
        </VWindow>

        <div class="d-flex justify-sm-space-between gap-4 flex-wrap justify-center mt-8">
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
            v-if="iconsSteps.length - 1 === currentStep"
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
const iconsSteps = [
  {
    title: 'Account Details',
    icon: 'custom-wizard-account',
  },
  {
    title: 'Personal Info',
    icon: 'custom-wizard-personal',
  },
  {
    title: 'Address',
    icon: 'custom-wizard-address',
  },
  {
    title: 'Social Links',
    icon: 'custom-wizard-social-link',
  },
  {
    title: 'Review & Submit',
    icon: 'custom-wizard-submit',
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)

const formData = ref({
  username: 'johndoe',
  email: 'john.doe@email.com',
  password: 'johndoe@J2',
  c_password: 'johndoe@J2',
  firstName: 'John',
  lastName: 'Doe',
  country: 'UK',
  language: 'English',
  address: '98 Borough bridge Road, Birmingham',
  landmark: 'Borough bridge',
  pincode: '658921',
  city: 'Birmingham',
  twitter: 'https://twitter.com/abc',
  facebook: 'https://facebook.com/abc',
  googlePlus: 'https://plus.google.com/abc',
  linkedIn: 'https://linkedin.com/abc',
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
        :items="iconsSteps"
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
                  Address
                </h6>
                <p class="text-xs mb-0">
                  Enter Your Address.
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.address"
                  placeholder="98 Borough bridge Road, Birmingham"
                  label="Address"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.landmark"
                  placeholder="Borough bridge"
                  label="Landmark"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.pincode"
                  placeholder="658921"
                  label="Pincode"
                  type="number"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.city"
                  placeholder="City"
                  label="City"
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

          <VWindowItem>
            <div class="text-base">
              <h6 class="text-base font-weight-medium mb-2">
                Account
              </h6>

              <p class="mb-1">
                {{ formData.username }}
              </p>
              <p class="mb-1">
                {{ formData.email }}
              </p>

              <VDivider class="my-4" />

              <h6 class="text-base font-weight-medium mb-2">
                Personal Info
              </h6>

              <p class="mb-1">
                {{ formData.firstName }}
              </p>
              <p class="mb-1">
                {{ formData.lastName }}
              </p>
              <p class="mb-1">
                {{ formData.country }}
              </p>
              <p class="mb-1">
                {{ formData.language }}
              </p>

              <VDivider class="my-4" />

              <h6 class="text-base font-weight-medium mb-2">
                Address
              </h6>

              <p class="mb-1">
                {{ formData.address }}
              </p>
              <p class="mb-1">
                {{ formData.landmark }}
              </p>
              <p class="mb-1">
                {{ formData.pincode }}
              </p>
              <p class="mb-1">
                {{ formData.city }}
              </p>

              <VDivider class="my-4" />

              <h6 class="text-base font-weight-medium mb-2">
                Social Links
              </h6>

              <p class="mb-1">
                {{ formData.twitter }}
              </p>
              <p class="mb-1">
                {{ formData.facebook }}
              </p>
              <p class="mb-1">
                {{ formData.googlePlus }}
              </p>
              <p class="mb-1">
                {{ formData.linkedIn }}
              </p>
            </div>
          </VWindowItem>
        </VWindow>

        <div class="d-flex justify-sm-space-between gap-4 flex-wrap justify-center mt-8">
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
            v-if="iconsSteps.length - 1 === currentStep"
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
`},le={ts:`<script setup lang="ts">
import { VForm } from 'vuetify/components/VForm'
import { confirmedValidator, emailValidator, lengthValidator, passwordValidator, requiredValidator, urlValidator } from '@core/utils/validators'

const iconsSteps = [
  {
    title: 'Account Details',
    icon: 'custom-wizard-account',
  },
  {
    title: 'Personal Info',
    icon: 'custom-wizard-personal',
  },
  {
    title: 'Address',
    icon: 'custom-wizard-address',
  },
  {
    title: 'Social Links',
    icon: 'custom-wizard-social-link',
  },
  {
    title: 'Review & Submit',
    icon: 'custom-wizard-submit',
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)
const isCurrentStepValid = ref(true)
const refAccountForm = ref<VForm>()
const refPersonalForm = ref<VForm>()
const refSocialLinkForm = ref<VForm>()
const refAddressForm = ref<VForm>()

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

const addressForm = ref({
  address: '',
  landmark: '',
  city: '',
  pincode: '',
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

const validateAddressForm = () => {
  refAddressForm.value?.validate().then(valid => {
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
      currentStep.value++
      isCurrentStepValid.value = true
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
        :items="iconsSteps"
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
                  placeholder="Enter Password"
                  label="Password"
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
                  placeholder="Enter Confirm Password"
                  label="Confirm Password"
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
                <div class="d-flex justify-sm-space-between justify-center flex-wrap gap-4">
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
            ref="refAddressForm"
            @submit.prevent="validateAddressForm"
          >
            <VRow>
              <VCol cols="12">
                <h6 class="text-sm font-weight-medium">
                  Address
                </h6>
                <p class="text-xs mb-0">
                  Enter Your Address.
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="addressForm.address"
                  :rules="[requiredValidator]"
                  placeholder="98 Borough bridge Road, Birmingham"
                  label="Address"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="addressForm.landmark"
                  :rules="[requiredValidator]"
                  placeholder="Borough bridge"
                  label="Landmark"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="addressForm.pincode"
                  :rules="[requiredValidator]"
                  placeholder="658921"
                  label="Pincode"
                  type="number"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="addressForm.city"
                  :rules="[requiredValidator]"
                  placeholder="City"
                  label="City"
                />
              </VCol>

              <VCol cols="12">
                <div class="d-flex justify-sm-space-between justify-center flex-wrap gap-4">
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
                  placeholder="https://linkedin.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="LinkedIn"
                />
              </VCol>

              <VCol cols="12">
                <div class="d-flex justify-sm-space-between justify-center flex-wrap">
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
          <div class="text-base">
            <h6 class="text-base font-weight-medium mb-2">
              Account
            </h6>

            <p class="mb-1">
              {{ accountForm.username }}
            </p>
            <p class="mb-1">
              {{ accountForm.email }}
            </p>

            <VDivider class="my-4" />

            <h6 class="text-base font-weight-medium mb-2">
              Personal Info
            </h6>

            <p class="mb-1">
              {{ personalForm.firstName }}
            </p>
            <p class="mb-1">
              {{ personalForm.lastName }}
            </p>
            <p class="mb-1">
              {{ personalForm.country }}
            </p>
            <p class="mb-1">
              {{ personalForm.language }}
            </p>

            <VDivider class="my-4" />

            <h6 class="text-base font-weight-medium mb-2">
              Address
            </h6>

            <p class="mb-1">
              {{ addressForm.address }}
            </p>
            <p class="mb-1">
              {{ addressForm.landmark }}
            </p>
            <p class="mb-1">
              {{ addressForm.pincode }}
            </p>
            <p class="mb-1">
              {{ addressForm.city }}
            </p>

            <VDivider class="my-4" />

            <h6 class="text-base font-weight-medium mb-2">
              Social Links
            </h6>

            <p class="mb-1">
              {{ socialForm.twitter }}
            </p>
            <p class="mb-1">
              {{ socialForm.facebook }}
            </p>
            <p class="mb-1">
              {{ socialForm.googlePlus }}
            </p>
            <p class="mb-1">
              {{ socialForm.linkedIn }}
            </p>
          </div>
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

const iconsSteps = [
  {
    title: 'Account Details',
    icon: 'custom-wizard-account',
  },
  {
    title: 'Personal Info',
    icon: 'custom-wizard-personal',
  },
  {
    title: 'Address',
    icon: 'custom-wizard-address',
  },
  {
    title: 'Social Links',
    icon: 'custom-wizard-social-link',
  },
  {
    title: 'Review & Submit',
    icon: 'custom-wizard-submit',
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)
const isCurrentStepValid = ref(true)
const refAccountForm = ref()
const refPersonalForm = ref()
const refSocialLinkForm = ref()
const refAddressForm = ref()

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

const addressForm = ref({
  address: '',
  landmark: '',
  city: '',
  pincode: '',
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

const validateAddressForm = () => {
  refAddressForm.value?.validate().then(valid => {
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
      currentStep.value++
      isCurrentStepValid.value = true
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
        :items="iconsSteps"
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
                  placeholder="Enter Password"
                  label="Password"
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
                  placeholder="Enter Confirm Password"
                  label="Confirm Password"
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
                <div class="d-flex justify-sm-space-between justify-center flex-wrap gap-4">
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
            ref="refAddressForm"
            @submit.prevent="validateAddressForm"
          >
            <VRow>
              <VCol cols="12">
                <h6 class="text-sm font-weight-medium">
                  Address
                </h6>
                <p class="text-xs mb-0">
                  Enter Your Address.
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="addressForm.address"
                  :rules="[requiredValidator]"
                  placeholder="98 Borough bridge Road, Birmingham"
                  label="Address"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="addressForm.landmark"
                  :rules="[requiredValidator]"
                  placeholder="Borough bridge"
                  label="Landmark"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="addressForm.pincode"
                  :rules="[requiredValidator]"
                  placeholder="658921"
                  label="Pincode"
                  type="number"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="addressForm.city"
                  :rules="[requiredValidator]"
                  placeholder="City"
                  label="City"
                />
              </VCol>

              <VCol cols="12">
                <div class="d-flex justify-sm-space-between justify-center flex-wrap gap-4">
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
                  placeholder="https://linkedin.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="LinkedIn"
                />
              </VCol>

              <VCol cols="12">
                <div class="d-flex justify-sm-space-between justify-center flex-wrap">
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
          <div class="text-base">
            <h6 class="text-base font-weight-medium mb-2">
              Account
            </h6>

            <p class="mb-1">
              {{ accountForm.username }}
            </p>
            <p class="mb-1">
              {{ accountForm.email }}
            </p>

            <VDivider class="my-4" />

            <h6 class="text-base font-weight-medium mb-2">
              Personal Info
            </h6>

            <p class="mb-1">
              {{ personalForm.firstName }}
            </p>
            <p class="mb-1">
              {{ personalForm.lastName }}
            </p>
            <p class="mb-1">
              {{ personalForm.country }}
            </p>
            <p class="mb-1">
              {{ personalForm.language }}
            </p>

            <VDivider class="my-4" />

            <h6 class="text-base font-weight-medium mb-2">
              Address
            </h6>

            <p class="mb-1">
              {{ addressForm.address }}
            </p>
            <p class="mb-1">
              {{ addressForm.landmark }}
            </p>
            <p class="mb-1">
              {{ addressForm.pincode }}
            </p>
            <p class="mb-1">
              {{ addressForm.city }}
            </p>

            <VDivider class="my-4" />

            <h6 class="text-base font-weight-medium mb-2">
              Social Links
            </h6>

            <p class="mb-1">
              {{ socialForm.twitter }}
            </p>
            <p class="mb-1">
              {{ socialForm.facebook }}
            </p>
            <p class="mb-1">
              {{ socialForm.googlePlus }}
            </p>
            <p class="mb-1">
              {{ socialForm.linkedIn }}
            </p>
          </div>
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`},oe={ts:`<script setup lang="ts">
const numberedSteps = [
  {
    title: 'Account Details',
    icon: 'mdi-file-document-outline',
  },
  {
    title: 'Personal Info',
    icon: 'mdi-account-outline',
  },
  {
    title: 'Social Links',
    icon: 'mdi-link',
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
            icon-size="24"
            class="stepper-icon-step-bg"
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
      </VCol>
    </VRow>
  </VCard>
</template>
`,js:`<script setup>
const numberedSteps = [
  {
    title: 'Account Details',
    icon: 'mdi-file-document-outline',
  },
  {
    title: 'Personal Info',
    icon: 'mdi-account-outline',
  },
  {
    title: 'Social Links',
    icon: 'mdi-link',
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
            icon-size="24"
            class="stepper-icon-step-bg"
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
      </VCol>
    </VRow>
  </VCard>
</template>
`},te=r("h6",{class:"text-sm font-weight-medium"}," Account Details ",-1),ae=r("p",{class:"text-xs mb-0"}," Enter your Account Details ",-1),se=r("h6",{class:"text-sm font-weight-medium"}," Personal Info ",-1),re=r("p",{class:"text-xs mb-0"}," Setup Information ",-1),ie=r("h6",{class:"text-sm font-weight-medium"}," Address ",-1),de=r("p",{class:"text-xs mb-0"}," Enter Your Address. ",-1),ne=r("h6",{class:"text-sm font-weight-medium"}," Social Links ",-1),me=r("p",{class:"text-xs mb-0"}," Add Social Links ",-1),ce={class:"text-base"},ue=r("h6",{class:"text-base font-weight-medium mb-2"}," Account ",-1),pe={class:"mb-1"},Ve={class:"mb-1"},fe=r("h6",{class:"text-base font-weight-medium mb-2"}," Personal Info ",-1),be={class:"mb-1"},we={class:"mb-1"},Ce={class:"mb-1"},he={class:"mb-1"},ve=r("h6",{class:"text-base font-weight-medium mb-2"}," Address ",-1),ge={class:"mb-1"},xe={class:"mb-1"},Fe={class:"mb-1"},ye={class:"mb-1"},ke=r("h6",{class:"text-base font-weight-medium mb-2"}," Social Links ",-1),Se={class:"mb-1"},_e={class:"mb-1"},Pe={class:"mb-1"},Ie={class:"mb-1"},De={class:"d-flex justify-sm-space-between gap-4 flex-wrap justify-center mt-8"},Ae={__name:"DemoFormWizardIconsBasic",setup($){const S=[{title:"Account Details",icon:"custom-wizard-account"},{title:"Personal Info",icon:"custom-wizard-personal"},{title:"Address",icon:"custom-wizard-address"},{title:"Social Links",icon:"custom-wizard-social-link"},{title:"Review & Submit",icon:"custom-wizard-submit"}],m=p(0),V=p(!1),b=p(!1),s=p({username:"johndoe",email:"john.doe@email.com",password:"johndoe@J2",c_password:"johndoe@J2",firstName:"John",lastName:"Doe",country:"UK",language:"English",address:"98 Borough bridge Road, Birmingham",landmark:"Borough bridge",pincode:"658921",city:"Birmingham",twitter:"https://twitter.com/abc",facebook:"https://facebook.com/abc",googlePlus:"https://plus.google.com/abc",linkedIn:"https://linkedin.com/abc"}),D=()=>{console.log(s.value)};return(U,a)=>{const A=E;return P(),I(j,null,{default:o(()=>[e(L,null,{default:o(()=>[e(A,{"current-step":l(m),"onUpdate:currentStep":a[0]||(a[0]=t=>B(m)?m.value=t:null),items:S},null,8,["current-step"])]),_:1}),e(_),e(L,null,{default:o(()=>[e(T,null,{default:o(()=>[e(z,{modelValue:l(m),"onUpdate:modelValue":a[19]||(a[19]=t=>B(m)?m.value=t:null),class:"disable-tab-transition"},{default:o(()=>[e(h,null,{default:o(()=>[e(v,null,{default:o(()=>[e(i,{cols:"12"},{default:o(()=>[te,ae]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(c,{modelValue:l(s).username,"onUpdate:modelValue":a[1]||(a[1]=t=>l(s).username=t),placeholder:"CarterLeonardo",label:"Username"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(c,{modelValue:l(s).email,"onUpdate:modelValue":a[2]||(a[2]=t=>l(s).email=t),placeholder:"carterleonardo@gmail.com",label:"Email"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(c,{modelValue:l(s).password,"onUpdate:modelValue":a[3]||(a[3]=t=>l(s).password=t),label:"Password",placeholder:"Enter Password",type:l(V)?"text":"password","append-inner-icon":l(V)?"mdi-eye-outline":"mdi-eye-off-outline","onClick:appendInner":a[4]||(a[4]=t=>V.value=!l(V))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(c,{modelValue:l(s).c_password,"onUpdate:modelValue":a[5]||(a[5]=t=>l(s).c_password=t),label:"Confirm Password",placeholder:"Enter Confirm Password",type:l(b)?"text":"password","append-inner-icon":l(b)?"mdi-eye-outline":"mdi-eye-off-outline","onClick:appendInner":a[6]||(a[6]=t=>b.value=!l(b))},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1})]),_:1}),e(h,null,{default:o(()=>[e(v,null,{default:o(()=>[e(i,{cols:"12"},{default:o(()=>[se,re]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(c,{modelValue:l(s).firstName,"onUpdate:modelValue":a[7]||(a[7]=t=>l(s).firstName=t),label:"First Name",placeholder:"Leonard"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(c,{modelValue:l(s).lastName,"onUpdate:modelValue":a[8]||(a[8]=t=>l(s).lastName=t),label:"Last Name",placeholder:"Carter"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(N,{modelValue:l(s).country,"onUpdate:modelValue":a[9]||(a[9]=t=>l(s).country=t),label:"Country",placeholder:"Country",items:["UK","USA","Canada","Australia","Germany"]},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(N,{modelValue:l(s).language,"onUpdate:modelValue":a[10]||(a[10]=t=>l(s).language=t),label:"Language",placeholder:"Language",items:["English","Spanish","French","Russian","German"]},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(h,null,{default:o(()=>[e(v,null,{default:o(()=>[e(i,{cols:"12"},{default:o(()=>[ie,de]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(c,{modelValue:l(s).address,"onUpdate:modelValue":a[11]||(a[11]=t=>l(s).address=t),placeholder:"98 Borough bridge Road, Birmingham",label:"Address"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(c,{modelValue:l(s).landmark,"onUpdate:modelValue":a[12]||(a[12]=t=>l(s).landmark=t),placeholder:"Borough bridge",label:"Landmark"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(c,{modelValue:l(s).pincode,"onUpdate:modelValue":a[13]||(a[13]=t=>l(s).pincode=t),placeholder:"658921",label:"Pincode",type:"number"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(c,{modelValue:l(s).city,"onUpdate:modelValue":a[14]||(a[14]=t=>l(s).city=t),placeholder:"City",label:"City"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(h,null,{default:o(()=>[e(v,null,{default:o(()=>[e(i,{cols:"12"},{default:o(()=>[ne,me]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(c,{modelValue:l(s).twitter,"onUpdate:modelValue":a[15]||(a[15]=t=>l(s).twitter=t),placeholder:"https://twitter.com/abc",label:"Twitter"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(c,{modelValue:l(s).facebook,"onUpdate:modelValue":a[16]||(a[16]=t=>l(s).facebook=t),placeholder:"https://facebook.com/abc",label:"Facebook"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(c,{modelValue:l(s).googlePlus,"onUpdate:modelValue":a[17]||(a[17]=t=>l(s).googlePlus=t),placeholder:"https://plus.google.com/abc",label:"Google+"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(c,{modelValue:l(s).linkedIn,"onUpdate:modelValue":a[18]||(a[18]=t=>l(s).linkedIn=t),placeholder:"https://linkedin.com/abc",label:"LinkedIn"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(h,null,{default:o(()=>[r("div",ce,[ue,r("p",pe,u(l(s).username),1),r("p",Ve,u(l(s).email),1),e(_,{class:"my-4"}),fe,r("p",be,u(l(s).firstName),1),r("p",we,u(l(s).lastName),1),r("p",Ce,u(l(s).country),1),r("p",he,u(l(s).language),1),e(_,{class:"my-4"}),ve,r("p",ge,u(l(s).address),1),r("p",xe,u(l(s).landmark),1),r("p",Fe,u(l(s).pincode),1),r("p",ye,u(l(s).city),1),e(_,{class:"my-4"}),ke,r("p",Se,u(l(s).twitter),1),r("p",_e,u(l(s).facebook),1),r("p",Pe,u(l(s).googlePlus),1),r("p",Ie,u(l(s).linkedIn),1)])]),_:1})]),_:1},8,["modelValue"]),r("div",De,[e(w,{color:l(m)===0?"secondary":"default",variant:"outlined",disabled:l(m)===0,onClick:a[20]||(a[20]=t=>m.value--)},{default:o(()=>[e(k,{icon:"mdi-arrow-left",start:"",class:"flip-in-rtl"}),C(" Previous ")]),_:1},8,["color","disabled"]),S.length-1===l(m)?(P(),I(w,{key:0,color:"success","append-icon":"mdi-check",onClick:D},{default:o(()=>[C(" submit ")]),_:1})):(P(),I(w,{key:1,onClick:a[21]||(a[21]=t=>m.value++)},{default:o(()=>[C(" Next "),e(k,{icon:"mdi-arrow-right",end:"",class:"flip-in-rtl"})]),_:1}))])]),_:1})]),_:1})]),_:1})}}},Te=r("h6",{class:"text-sm font-weight-medium"}," Account Details ",-1),Le=r("p",{class:"text-xs mb-0"}," Enter your Account Details ",-1),Ne={class:"d-flex justify-sm-space-between justify-center flex-wrap gap-4"},Be=r("h6",{class:"text-sm font-weight-medium"}," Personal Info ",-1),Ue=r("p",{class:"text-xs mb-0"}," Setup Information ",-1),Re={class:"d-flex justify-sm-space-between justify-center flex-wrap gap-4"},We=r("h6",{class:"text-sm font-weight-medium"}," Address ",-1),$e=r("p",{class:"text-xs mb-0"}," Enter Your Address. ",-1),Ee={class:"d-flex justify-sm-space-between justify-center flex-wrap gap-4"},je=r("h6",{class:"text-sm font-weight-medium"}," Social Links ",-1),ze=r("p",{class:"text-xs mb-0"}," Add Social Links ",-1),qe={class:"d-flex justify-sm-space-between justify-center flex-wrap"},Ge={class:"text-base"},Ke=r("h6",{class:"text-base font-weight-medium mb-2"}," Account ",-1),Je={class:"mb-1"},Ye={class:"mb-1"},Me=r("h6",{class:"text-base font-weight-medium mb-2"}," Personal Info ",-1),He={class:"mb-1"},Oe={class:"mb-1"},Qe={class:"mb-1"},Xe={class:"mb-1"},Ze=r("h6",{class:"text-base font-weight-medium mb-2"}," Address ",-1),el={class:"mb-1"},ll={class:"mb-1"},ol={class:"mb-1"},tl={class:"mb-1"},al=r("h6",{class:"text-base font-weight-medium mb-2"}," Social Links ",-1),sl={class:"mb-1"},rl={class:"mb-1"},il={class:"mb-1"},dl={class:"mb-1"},nl={__name:"DemoFormWizardIconsValidation",setup($){const S=[{title:"Account Details",icon:"custom-wizard-account"},{title:"Personal Info",icon:"custom-wizard-personal"},{title:"Address",icon:"custom-wizard-address"},{title:"Social Links",icon:"custom-wizard-social-link"},{title:"Review & Submit",icon:"custom-wizard-submit"}],m=p(0),V=p(!1),b=p(!1),s=p(!0),D=p(),U=p(),a=p(),A=p(),t=p({username:"",email:"",password:"",c_password:""}),g=p({firstName:"",lastName:"",country:void 0,language:void 0}),x=p({twitter:"",facebook:"",googlePlus:"",linkedIn:""}),F=p({address:"",landmark:"",city:"",pincode:""}),q=()=>{var y;(y=D.value)==null||y.validate().then(d=>{d.valid?(m.value++,s.value=!0):s.value=!1})},G=()=>{var y;(y=U.value)==null||y.validate().then(d=>{d.valid?(m.value++,s.value=!0):s.value=!1})},K=()=>{var y;(y=A.value)==null||y.validate().then(d=>{d.valid?(m.value++,s.value=!0):s.value=!1})},J=()=>{var y;(y=a.value)==null||y.validate().then(d=>{d.valid?(m.value++,s.value=!0):s.value=!1})};return(y,d)=>{const Y=E;return P(),I(j,null,{default:o(()=>[e(L,null,{default:o(()=>[e(Y,{"current-step":l(m),"onUpdate:currentStep":d[0]||(d[0]=n=>B(m)?m.value=n:null),items:S,"is-active-step-valid":l(s)},null,8,["current-step","is-active-step-valid"])]),_:1}),e(_),e(L,null,{default:o(()=>[e(z,{modelValue:l(m),"onUpdate:modelValue":d[22]||(d[22]=n=>B(m)?m.value=n:null),class:"disable-tab-transition"},{default:o(()=>[e(h,null,{default:o(()=>[e(l(T),{ref_key:"refAccountForm",ref:D,onSubmit:R(q,["prevent"])},{default:o(()=>[e(v,null,{default:o(()=>[e(i,{cols:"12"},{default:o(()=>[Te,Le]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(c,{modelValue:l(t).username,"onUpdate:modelValue":d[1]||(d[1]=n=>l(t).username=n),placeholder:"CarterLeonardo",rules:[l(f),l(O)(l(t).username,6)],label:"Username"},null,8,["modelValue","rules"])]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(c,{modelValue:l(t).email,"onUpdate:modelValue":d[2]||(d[2]=n=>l(t).email=n),placeholder:"carterleonardo@gmail.com",rules:[l(f),l(Q)],label:"Email"},null,8,["modelValue","rules"])]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(c,{modelValue:l(t).password,"onUpdate:modelValue":d[3]||(d[3]=n=>l(t).password=n),placeholder:"Enter Password",label:"Password",rules:[l(f),l(X)],type:l(V)?"text":"password","append-inner-icon":l(V)?"mdi-eye-outline":"mdi-eye-off-outline","onClick:appendInner":d[4]||(d[4]=n=>V.value=!l(V))},null,8,["modelValue","rules","type","append-inner-icon"])]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(c,{modelValue:l(t).c_password,"onUpdate:modelValue":d[5]||(d[5]=n=>l(t).c_password=n),placeholder:"Enter Confirm Password",label:"Confirm Password",rules:[l(f),l(Z)(l(t).c_password,l(t).password)],type:l(b)?"text":"password","append-inner-icon":l(b)?"mdi-eye-outline":"mdi-eye-off-outline","onClick:appendInner":d[6]||(d[6]=n=>b.value=!l(b))},null,8,["modelValue","rules","type","append-inner-icon"])]),_:1}),e(i,{cols:"12"},{default:o(()=>[r("div",Ne,[e(w,{color:l(m)===0?"secondary":"default",variant:"outlined",disabled:""},{default:o(()=>[e(k,{icon:"mdi-arrow-left",start:"",class:"flip-in-rtl"}),C(" Previous ")]),_:1},8,["color"]),e(w,{type:"submit"},{default:o(()=>[C(" Next "),e(k,{icon:"mdi-arrow-right",end:"",class:"flip-in-rtl"})]),_:1})])]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1}),e(h,null,{default:o(()=>[e(l(T),{ref_key:"refPersonalForm",ref:U,onSubmit:R(G,["prevent"])},{default:o(()=>[e(v,null,{default:o(()=>[e(i,{cols:"12"},{default:o(()=>[Be,Ue]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(c,{modelValue:l(g).firstName,"onUpdate:modelValue":d[7]||(d[7]=n=>l(g).firstName=n),label:"First Name",rules:[l(f)],placeholder:"Leonard"},null,8,["modelValue","rules"])]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(c,{modelValue:l(g).lastName,"onUpdate:modelValue":d[8]||(d[8]=n=>l(g).lastName=n),label:"Last Name",rules:[l(f)],placeholder:"Carter"},null,8,["modelValue","rules"])]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(N,{modelValue:l(g).country,"onUpdate:modelValue":d[9]||(d[9]=n=>l(g).country=n),label:"Country",rules:[l(f)],placeholder:"Country",items:["UK","USA","Canada","Australia","Germany"]},null,8,["modelValue","rules"])]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(N,{modelValue:l(g).language,"onUpdate:modelValue":d[10]||(d[10]=n=>l(g).language=n),label:"Language",rules:[l(f)],placeholder:"Language",items:["English","Spanish","French","Russian","German"]},null,8,["modelValue","rules"])]),_:1}),e(i,{cols:"12"},{default:o(()=>[r("div",Re,[e(w,{color:"secondary",variant:"tonal",onClick:d[11]||(d[11]=n=>m.value--)},{default:o(()=>[e(k,{icon:"mdi-chevron-left",start:"",class:"flip-in-rtl"}),C(" Previous ")]),_:1}),e(w,{type:"submit"},{default:o(()=>[C(" Next "),e(k,{icon:"mdi-chevron-right",end:"",class:"flip-in-rtl"})]),_:1})])]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1}),e(h,null,{default:o(()=>[e(l(T),{ref_key:"refAddressForm",ref:A,onSubmit:R(K,["prevent"])},{default:o(()=>[e(v,null,{default:o(()=>[e(i,{cols:"12"},{default:o(()=>[We,$e]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(c,{modelValue:l(F).address,"onUpdate:modelValue":d[12]||(d[12]=n=>l(F).address=n),rules:[l(f)],placeholder:"98 Borough bridge Road, Birmingham",label:"Address"},null,8,["modelValue","rules"])]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(c,{modelValue:l(F).landmark,"onUpdate:modelValue":d[13]||(d[13]=n=>l(F).landmark=n),rules:[l(f)],placeholder:"Borough bridge",label:"Landmark"},null,8,["modelValue","rules"])]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(c,{modelValue:l(F).pincode,"onUpdate:modelValue":d[14]||(d[14]=n=>l(F).pincode=n),rules:[l(f)],placeholder:"658921",label:"Pincode",type:"number"},null,8,["modelValue","rules"])]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(c,{modelValue:l(F).city,"onUpdate:modelValue":d[15]||(d[15]=n=>l(F).city=n),rules:[l(f)],placeholder:"City",label:"City"},null,8,["modelValue","rules"])]),_:1}),e(i,{cols:"12"},{default:o(()=>[r("div",Ee,[e(w,{color:"secondary",variant:"tonal",onClick:d[16]||(d[16]=n=>m.value--)},{default:o(()=>[e(k,{icon:"mdi-chevron-left",start:"",class:"flip-in-rtl"}),C(" Previous ")]),_:1}),e(w,{type:"submit"},{default:o(()=>[C(" Next "),e(k,{icon:"mdi-chevron-right",end:"",class:"flip-in-rtl"})]),_:1})])]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1}),e(h,null,{default:o(()=>[e(l(T),{ref_key:"refSocialLinkForm",ref:a,onSubmit:R(J,["prevent"])},{default:o(()=>[e(v,null,{default:o(()=>[e(i,{cols:"12"},{default:o(()=>[je,ze]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(c,{modelValue:l(x).twitter,"onUpdate:modelValue":d[17]||(d[17]=n=>l(x).twitter=n),placeholder:"https://twitter.com/abc",rules:[l(f),l(W)],label:"Twitter"},null,8,["modelValue","rules"])]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(c,{modelValue:l(x).facebook,"onUpdate:modelValue":d[18]||(d[18]=n=>l(x).facebook=n),placeholder:"https://facebook.com/abc",rules:[l(f),l(W)],label:"Facebook"},null,8,["modelValue","rules"])]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(c,{modelValue:l(x).googlePlus,"onUpdate:modelValue":d[19]||(d[19]=n=>l(x).googlePlus=n),placeholder:"https://plus.google.com/abc",rules:[l(f),l(W)],label:"Google+"},null,8,["modelValue","rules"])]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(c,{modelValue:l(x).linkedIn,"onUpdate:modelValue":d[20]||(d[20]=n=>l(x).linkedIn=n),placeholder:"https://linkedin.com/abc",rules:[l(f),l(W)],label:"LinkedIn"},null,8,["modelValue","rules"])]),_:1}),e(i,{cols:"12"},{default:o(()=>[r("div",qe,[e(w,{color:"secondary",variant:"tonal",onClick:d[21]||(d[21]=n=>m.value--)},{default:o(()=>[e(k,{icon:"mdi-chevron-left",start:"",class:"flip-in-rtl"}),C(" Previous ")]),_:1}),e(w,{type:"submit"},{default:o(()=>[C(" Next "),e(k,{icon:"mdi-chevron-right",end:"",class:"flip-in-rtl"})]),_:1})])]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1}),e(h,null,{default:o(()=>[r("div",Ge,[Ke,r("p",Je,u(l(t).username),1),r("p",Ye,u(l(t).email),1),e(_,{class:"my-4"}),Me,r("p",He,u(l(g).firstName),1),r("p",Oe,u(l(g).lastName),1),r("p",Qe,u(l(g).country),1),r("p",Xe,u(l(g).language),1),e(_,{class:"my-4"}),Ze,r("p",el,u(l(F).address),1),r("p",ll,u(l(F).landmark),1),r("p",ol,u(l(F).pincode),1),r("p",tl,u(l(F).city),1),e(_,{class:"my-4"}),al,r("p",sl,u(l(x).twitter),1),r("p",rl,u(l(x).facebook),1),r("p",il,u(l(x).googlePlus),1),r("p",dl,u(l(x).linkedIn),1)])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})}}},ml=r("h6",{class:"text-sm font-weight-medium"}," Account Details ",-1),cl=r("p",{class:"text-xs mb-0"}," Enter your Account Details ",-1),ul=r("h6",{class:"text-sm font-weight-medium"}," Personal Info ",-1),pl=r("p",{class:"text-xs mb-0"}," Setup Information ",-1),Vl=r("h6",{class:"text-sm font-weight-medium"}," Social Links ",-1),fl=r("p",{class:"text-xs mb-0"}," Add Social Links ",-1),bl={class:"d-flex justify-sm-space-between justify-center flex-wrap gap-4 mt-8"},wl={__name:"DemoFormWizardIconsVertical",setup($){const S=[{title:"Account Details",icon:"mdi-file-document-outline"},{title:"Personal Info",icon:"mdi-account-outline"},{title:"Social Links",icon:"mdi-link"}],m=p(0),V=p(!1),b=p(!1),s=p({username:"",email:"",password:"",c_password:"",firstName:"",lastName:"",country:void 0,language:void 0,twitter:"",facebook:"",googlePlus:"",linkedIn:""}),D=()=>{console.log(s.value)};return(U,a)=>{const A=E;return P(),I(j,null,{default:o(()=>[e(v,null,{default:o(()=>[e(i,{cols:"12",md:"4",class:H(U.$vuetify.display.smAndDown?"border-b":"border-e")},{default:o(()=>[e(L,null,{default:o(()=>[e(A,{"current-step":l(m),"onUpdate:currentStep":a[0]||(a[0]=t=>B(m)?m.value=t:null),direction:"vertical",items:S,"icon-size":"24",class:"stepper-icon-step-bg"},null,8,["current-step"])]),_:1})]),_:1},8,["class"]),e(i,{cols:"12",md:"8"},{default:o(()=>[e(L,null,{default:o(()=>[e(T,null,{default:o(()=>[e(z,{modelValue:l(m),"onUpdate:modelValue":a[15]||(a[15]=t=>B(m)?m.value=t:null),class:"disable-tab-transition"},{default:o(()=>[e(h,null,{default:o(()=>[e(v,null,{default:o(()=>[e(i,{cols:"12"},{default:o(()=>[ml,cl]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(c,{modelValue:l(s).username,"onUpdate:modelValue":a[1]||(a[1]=t=>l(s).username=t),placeholder:"CarterLeonardo",label:"Username"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(c,{modelValue:l(s).email,"onUpdate:modelValue":a[2]||(a[2]=t=>l(s).email=t),placeholder:"carterleonardo@gmail.com",label:"Email"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(c,{modelValue:l(s).password,"onUpdate:modelValue":a[3]||(a[3]=t=>l(s).password=t),label:"Password",placeholder:"Enter Password",type:l(V)?"text":"password","append-inner-icon":l(V)?"mdi-eye-outline":"mdi-eye-off-outline","onClick:appendInner":a[4]||(a[4]=t=>V.value=!l(V))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(c,{modelValue:l(s).c_password,"onUpdate:modelValue":a[5]||(a[5]=t=>l(s).c_password=t),label:"Confirm Password",placeholder:"Enter Confirm Password",type:l(b)?"text":"password","append-inner-icon":l(b)?"mdi-eye-outline":"mdi-eye-off-outline","onClick:appendInner":a[6]||(a[6]=t=>b.value=!l(b))},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1})]),_:1}),e(h,null,{default:o(()=>[e(v,null,{default:o(()=>[e(i,{cols:"12"},{default:o(()=>[ul,pl]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(c,{modelValue:l(s).firstName,"onUpdate:modelValue":a[7]||(a[7]=t=>l(s).firstName=t),label:"First Name",placeholder:"Leonard"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(c,{modelValue:l(s).lastName,"onUpdate:modelValue":a[8]||(a[8]=t=>l(s).lastName=t),label:"Last Name",placeholder:"Carter"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(N,{modelValue:l(s).country,"onUpdate:modelValue":a[9]||(a[9]=t=>l(s).country=t),label:"Country",placeholder:"Country",items:["UK","USA","Canada","Australia","Germany"]},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(N,{modelValue:l(s).language,"onUpdate:modelValue":a[10]||(a[10]=t=>l(s).language=t),label:"Language",placeholder:"Language",items:["English","Spanish","French","Russian","German"]},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(h,null,{default:o(()=>[e(v,null,{default:o(()=>[e(i,{cols:"12"},{default:o(()=>[Vl,fl]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(c,{modelValue:l(s).twitter,"onUpdate:modelValue":a[11]||(a[11]=t=>l(s).twitter=t),placeholder:"https://twitter.com/abc",label:"Twitter"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(c,{modelValue:l(s).facebook,"onUpdate:modelValue":a[12]||(a[12]=t=>l(s).facebook=t),placeholder:"https://facebook.com/abc",label:"Facebook"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(c,{modelValue:l(s).googlePlus,"onUpdate:modelValue":a[13]||(a[13]=t=>l(s).googlePlus=t),placeholder:"https://plus.google.com/abc",label:"Google+"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(c,{modelValue:l(s).linkedIn,"onUpdate:modelValue":a[14]||(a[14]=t=>l(s).linkedIn=t),placeholder:"https://linkedin.com/abc",label:"LinkedIn"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),r("div",bl,[e(w,{color:l(m)===0?"secondary":"default",variant:"outlined",disabled:l(m)===0,onClick:a[16]||(a[16]=t=>m.value--)},{default:o(()=>[e(k,{icon:"mdi-arrow-left",start:"",class:"flip-in-rtl"}),C(" Previous ")]),_:1},8,["color","disabled"]),S.length-1===l(m)?(P(),I(w,{key:0,color:"success","append-icon":"mdi-check",onClick:D},{default:o(()=>[C(" submit ")]),_:1})):(P(),I(w,{key:1,onClick:a[17]||(a[17]=t=>m.value++)},{default:o(()=>[C(" Next "),e(k,{icon:"mdi-arrow-right",end:"",class:"flip-in-rtl"})]),_:1}))])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}},Ol={__name:"form-wizard-icons",setup($){return(S,m)=>{const V=M;return P(),I(v,null,{default:o(()=>[e(i,{cols:"12"},{default:o(()=>[e(V,{variant:"outlined",title:"Basic",code:ee},{default:o(()=>[e(Ae)]),_:1},8,["code"])]),_:1}),e(i,{cols:"12"},{default:o(()=>[e(V,{variant:"outlined",title:"Validation",code:le},{default:o(()=>[e(nl)]),_:1},8,["code"])]),_:1}),e(i,{cols:"12"},{default:o(()=>[e(V,{variant:"outlined",title:"Vertical",code:oe},{default:o(()=>[e(wl)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Ol as default};
