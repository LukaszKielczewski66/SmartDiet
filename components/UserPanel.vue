<template>
  <div>
    <h1>USER PANEL COMPONENT</h1>
    <v-alert v-if="errorMsg.length > 0" type="error">{{ errorMsg }}</v-alert>
    <v-text-field v-model="user.firstname" label="Imię"></v-text-field>
    <v-text-field v-model="user.lastname" label="Nazwisko"></v-text-field>
    <v-text-field v-model="user.email" label="Email"></v-text-field>
    <v-text-field v-model="user.height" label="Wzrost"></v-text-field>
    <v-text-field v-model="user.weight" label="waga"></v-text-field>
    <v-text-field v-model="user.age" label="Wiek"></v-text-field>
    <v-text-field v-model="user.activity_id" label="Aktywność"></v-text-field>
    <v-text-field v-model="user.goal_id" label="Cel"></v-text-field>
  </div>
</template>

<script>
export default {
  name: 'SmartDietUserPanel',

  data() {
    return {
      user: {
        firstname: '',
        lastname: '',
        email: '',
        height: 0,
        weight: 0,
        age: 0,
        activity_id: 0,
        goal_id: 0,
      },
      errorMsg: '',
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    async getData() {
      try {
        const res = await this.$store.state.user.user
        if (res.firstname) {
          this.user = res
        } else {
          this.errorMsg = 'User not logged in'
        }
      } catch (error) {
        this.errorMsg = error // na razie bez funkcji
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
