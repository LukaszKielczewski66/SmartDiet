<template>
  <div>
    <h1>USER PANEL COMPONENT</h1>
    <v-alert v-if="!$store.state.user.token.length > 0" type="error">{{
      errorMsg
    }}</v-alert>
    <v-card v-else>
      <v-text-field v-model="user.firstname" label="Imię"></v-text-field>
      <v-text-field v-model="user.lastname" label="Nazwisko"></v-text-field>
      <v-text-field v-model="user.email" label="Email"></v-text-field>
      <v-text-field v-model="user.height" label="Wzrost"></v-text-field>
      <v-text-field v-model="user.weight" label="waga"></v-text-field>
      <v-text-field v-model="user.age" label="Wiek"></v-text-field>
      <v-select
        v-model="goal"
        :items="goals"
        item-text="name"
        item-value="value"
        label="Cel"
        return-object
        single-line
      ></v-select>
      <v-select
        v-model="activity"
        :items="activities"
        item-text="name"
        item-value="value"
        label="Aktywność"
        return-object
        single-line
      ></v-select>
    </v-card>
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
      errorMsg: 'User not logged in',
      goal: {},
      activity: {},
      activities: [
        // docelowo pobierać słowniki
        { name: 'Mała', value: 0 },
        { name: 'Średnia', value: 1 },
        { name: 'Duża', value: 2 },
      ],
      goals: [
        { name: 'Chcę schudnąć', value: 0 },
        { name: 'Chcę utrzymać wagę', value: 1 },
        { name: 'Chcę przytyć', value: 2 },
      ],
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
          // map słowników, docelowo jakoś inaczej
          this.goal = { name: res.goal_name, value: res.goal_id }
          this.activity = { name: res.activity_name, value: res.activity_id }
        } else {
          // this.errorMsg = 'User not logged in'
        }
      } catch (error) {
        this.errorMsg = 'User not logged in'
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
