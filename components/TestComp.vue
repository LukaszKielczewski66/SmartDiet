<template>
  <v-container fluid>
    <v-row align="center">
      <v-col cols="6">
        <v-subheader> Custom items </v-subheader>
      </v-col>

      <v-col cols="6">
        <v-select
          v-model="activity"
          :hint="`${activity.name}, ${activity.value}`"
          :items="activities"
          item-text="name"
          item-value="value"
          label="Select"
          persistent-hint
          return-object
          single-line
        ></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'SmartDietTestComp',

  data: () => ({
    activity: { name: 'Średnia', value: 1 },
    activities: [
      { name: 'Mała', value: 0 },
      { name: 'Średnia', value: 1 },
      { name: 'Duża', value: 2 },
    ],
  }),

  mounted() {},

  methods: {},
}
</script>

<style lang="scss" scoped></style>
