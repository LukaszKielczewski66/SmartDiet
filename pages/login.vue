<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <v-form @submit.prevent>
          <h1>Login</h1>
          <v-text-field
            v-model="firstName"
            :rules="rules"
            label="First name"
          ></v-text-field>
          <v-btn type="submit" block class="mt-2">Submit</v-btn>
          <br />
          <v-btn color="primary" to="/register">I don't have an account</v-btn>
          <v-btn type="submit" block class="mt-2" @click="login">1. test login</v-btn>
          <v-btn type="submit" block class="mt-2" @click="getRecipes">2. test get recipes</v-btn>
        </v-form>
      </v-card>
      <v-card>
        <v-card-title>TEST DATA</v-card-title>
        {{ recipes }}
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
    token:'',
    recipes:[],
  }),
  head() {
    // SEO
    return {
      title: 'login',
    }
  },
  methods: {
    async login () {
      const userData = {
        email: "john.doe@example.com",
        password: "password"
      };
      try {
        const response = await this.$axios.post('/api/login', userData);
        this.token = response.data.token;
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err)
      }
    },
    async getRecipes () {
      try {
        const response = await this.$axios.get('/api/recipes',{
          // body
        // }, {
          headers: {
            authorization: 'Bearer ' + this.token
          }
        });
        this.recipes = response.data;
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(this.token)
        // eslint-disable-next-line no-console
        console.log(err)
      }
    }
  }
}
</script>
<style></style>
