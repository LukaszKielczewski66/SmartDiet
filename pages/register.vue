<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="6" md="4">
      <v-card class="logo py-4 d-flex justify-center">
        <v-form @submit.prevent>
          <h1>Register</h1>
          <v-text-field
            v-model="firstName"
            :rules="rules"
            label="First name"
          ></v-text-field>
          <v-btn type="submit" block class="mt-2">Submit</v-btn>
          <br />
          <v-btn color="primary" to="/login">I have account</v-btn>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  data: () => ({
    firstName: '',
    rules: [
      (value) => {
        if (value) return true

        return 'You must enter a first name.'
      },
    ],
  }),
  head() {
    // SEO
    return {
      title: 'register',
    }
  },
}
</script>
<style></style>
