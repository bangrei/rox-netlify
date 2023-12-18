<script setup>
import { avatarText } from '@/@core/utils/formatters'
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'

const router = useRouter()
const userData = JSON.parse(localStorage.getItem('userData') || 'null')

const logout = () => {
	// Remove "userData" from localStorage
	localStorage.removeItem('userData')
	localStorage.removeItem('userAbilities')
	sessionStorage.removeItem("accessToken")
	sessionStorage.removeItem("refreshToken")
	router.push('/login').then(() => {
	})
}

const userProfileList = [
	{
		type: 'navItem',
		icon: 'mdi-logout',
		title: 'Logout',
		onClick: logout,
	},
]
</script>

<template>
  <VAvatar
    class="cursor-pointer"
    :color="!(userData && userData.avatar) ? 'primary' : undefined"
    :variant="!(userData && userData.avatar) ? 'tonal' : undefined"
  >
    <VImg
      v-if="userData && userData.avatar"
      :src="userData.avatar"
    />
    <span v-else>{{ avatarText(userData.fullName) }}</span>

    <!-- SECTION Menu -->
    <VMenu
      activator="parent"
      width="230"
      location="bottom end"
      offset="14px"
    >
      <VList density="comfortable">
        <!-- 👉 User Avatar & Name -->
        <VListItem height="60px">
          <template #prepend>
            <VListItemAction start>
              <VAvatar
                :color="!(userData && userData.avatar) ? 'primary' : undefined"
                :variant="!(userData && userData.avatar) ? 'tonal' : undefined"
              >
                <VImg
                  v-if="userData && userData.avatar"
                  :src="userData.avatar"
                />
                <span v-else>{{ avatarText(userData.fullName) }}</span>
              </VAvatar>
            </VListItemAction>
          </template>

          <VListItemTitle class="font-weight-medium">
            {{ userData.username }}
          </VListItemTitle>
          <VListItemSubtitle class="text-caption">
            {{ userData.fullName }}
          </VListItemSubtitle>
          <VListItemSubtitle class="text-caption">
            {{ userData.email }}
          </VListItemSubtitle>
        </VListItem>

        <VDivider />
        <PerfectScrollbar :options="{ wheelPropagation: false }">
          <template
            v-for="item in userProfileList"
            :key="item.title"
          >
            <VListItem
              v-if="item.type === 'navItem'"
              :to="item.to"
              @click="item.onClick && item.onClick()"
            >
              <template #prepend>
                <VIcon
                  class="me-2"
                  :icon="item.icon"
                  size="22"
                />
              </template>

              <VListItemTitle>{{ item.title }}</VListItemTitle>

              <template
                v-if="item.badgeProps"
                #append
              >
                <VBadge
                  v-bind="item.badgeProps"
                  class="me-3"
                />
              </template>
            </VListItem>

            <VDivider v-else />
          </template>
        </PerfectScrollbar>
      </VList>
    </VMenu>
    <!-- !SECTION -->
  </VAvatar>
</template>
