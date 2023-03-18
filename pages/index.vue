<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center"> Recipe </v-card>
      <v-card> </v-card>
      <UserPanelVue/>
    </v-col>
  </v-row>
</template>

<script>
import UserPanelVue from '~/components/UserPanel.vue';
export default {
  name: 'IndexPage',
  components: { UserPanelVue },
  head() {
    // SEO
    return {
      title: 'recipes',
      meta: [
        {
          hid: 'smartDiet',
          name: 'smartDiet',
          content: 'Where You can find balanced meals',
        },
      ],
    }
  },
}
</script>
<style></style>
