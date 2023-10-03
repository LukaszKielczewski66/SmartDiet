<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center"> Recipe </v-card>
      <v-card> 
        <v-btn @click="addCollection">ADD DOC</v-btn>
        <v-btn @click="getCollection">GET DOC</v-btn>
        <v-btn @click="listenCollection">LISTEN DOC</v-btn>
        <v-btn @click="stopListenCollection">STOP LISTEN DOC</v-btn>
      </v-card>
      {{ documents }}
    </v-col>
  </v-row>
</template>

<script>
//  readASingleDocument, listenToADocument, cancelListener
import db from "../firebase-conf"

export default {
  name: 'IndexPage',
  data: () => ({
    documents: null
  }),
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
  methods: {
    async addCollection() {
      await db.writeDailySpecial()
    },
    async getCollection() {
      const data = await db.readASingleDocument()
      this.documents = data
    },
    async listenCollection() {
      await db.listenToADocument()
    },
    async stopListenCollection() {
      await db.cancelListener()
    }
  }
}
</script>
<style></style>
