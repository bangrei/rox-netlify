<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar5 from '@images/avatars/avatar-5.png'
import avatar8 from '@images/avatars/avatar-8.png'

const teamMembers = [
	{
		profilePic: avatar1,
		name: 'Dean Hogan',
		designation: 'IOS developer',
		project: 'Zipper',
		projectIndication: 'primary',
		task: '87/135',
		progress: 65,
	},
	{
		profilePic: avatar8,
		name: 'Hilda Rice',
		designation: 'Laravel developer',
		project: 'Brandi',
		projectIndication: 'success',
		task: '340/420',
		progress: 75,
	},
	{
		profilePic: avatar5,
		name: 'Andrew O\'Brien',
		designation: 'React developer',
		project: 'Payers',
		projectIndication: 'warning',
		task: '50/82',
		progress: 55,
	},
	{
		profilePic: avatar2,
		name: 'Eleanor Price',
		designation: 'Angular developer',
		project: 'Citibank',
		projectIndication: 'error',
		task: '98/260',
		progress: 60,
	},
	{
		profilePic: avatar3,
		name: 'Carl Oliver',
		designation: 'VueJs developer',
		project: 'Aviator',
		projectIndication: 'secondary',
		task: '12/25',
		progress: 60,
	},
]
</script>

<template>
  <VCard>
    <!-- SECTION Card Header and Menu -->
    <VCardItem>
      <!-- 👉 Title -->
      <VCardTitle>Team Members</VCardTitle>

      <!-- 👉 menu -->
      <template #append>
        <div class="me-n3">
          <MoreBtn />
        </div>
      </template>
    </VCardItem>
    <!-- !SECTION -->

    <!-- TODO try to remove table border -->
    <VTable class="text-no-wrap">
      <thead>
        <tr>
          <th
            scope="col"
            class="text-uppercase"
          >
            Name
          </th>
          <th
            scope="col"
            class="text-uppercase"
          >
            Project
          </th>
          <th
            scope="col"
            class="text-uppercase"
          >
            Tasks
          </th>
          <th
            scope="col"
            class="text-uppercase text-center"
          >
            Progress
          </th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="member in teamMembers"
          :key="member.name"
        >
          <td class="table-spacing border-0">
            <div class="d-flex">
              <div class="me-3">
                <VAvatar
                  size="38"
                  :image="member.profilePic"
                />
              </div>
              <div>
                <p class="text-sm font-weight-medium mb-0 text-high-emphasis">
                  {{ member.name }}
                </p>
                <span class="text-xs text-medium-emphasis">{{ member.designation }}</span>
              </div>
            </div>
          </td>

          <td class="table-spacing border-0">
            <VChip
              :color="member.projectIndication"
              density="compact"
            >
              <span class="text-xs">
                {{ member.project }}
              </span>
            </VChip>
          </td>

          <td class="table-spacing border-0 font-weight-medium">
            <span class="text-primary">{{ member.task.split('/')[0] }}</span>
            <span>/</span>
            <span>{{ member.task.split('/')[1] }}</span>
          </td>

          <td class="table-spacing text-center border-0">
            <VProgressCircular
              :color="member.projectIndication"
              :model-value="member.progress"
            />
          </td>
        </tr>
      </tbody>
    </VTable>
  </VCard>
</template>

<style lang="scss">
.table-spacing {
  padding-block-end: 0.65rem !important;
  padding-block-start: 0.65rem !important;
}
</style>
