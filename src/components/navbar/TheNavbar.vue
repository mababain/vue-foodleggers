<template>
  <navbar-links></navbar-links>
  <div class="scroll" :class="{ 'scroll--inactive': !showNavbar, 'scroll--active' : showNavbar }">
    <navbar-info></navbar-info>
    <navbar-categories></navbar-categories>
  </div>
</template>

<script>
import NavbarLinks from '@/components/navbar/NavbarLinks'
import NavbarInfo from '@/components/navbar/NavbarInfo'
import NavbarCategories from '@/components/navbar/NavbarCategories'
import { onMounted, ref } from 'vue'

export default {
  setup() {
    const showNavbar = ref(true)
    let prevPos = 0

    const hide = () => {
      const navbarHeight = 203
      const curPos = window.pageYOffset

      if (curPos > navbarHeight && curPos < prevPos) {
        showNavbar.value = true
      } else if (curPos > navbarHeight && curPos > prevPos) {
        showNavbar.value = false
      }

      prevPos = curPos
    }

    onMounted(() => {
      window.addEventListener('scroll', hide)
    })

    return {
      showNavbar
    }
  },
  components: { NavbarCategories, NavbarInfo, NavbarLinks }
}
</script>

<style scoped>

</style>
