<template>
  <other-links></other-links>
  <div class="scroll scroll--active">
    <navbar-info></navbar-info>
    <navbar-products></navbar-products>
  </div>
</template>

<script>
import OtherLinks from '@/components/navbar/OtherLinks'
import NavbarInfo from '@/components/navbar/NavbarInfo'
import NavbarProducts from '@/components/navbar/MenuNav'

export default {
  components: { NavbarProducts, NavbarInfo, OtherLinks }
}
</script>

<style scoped>

</style>
