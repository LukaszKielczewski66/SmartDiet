<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center"> Recipe </v-card>
      <v-card> </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
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
