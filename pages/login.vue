<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <v-form @submit.prevent>
          <h1>Login</h1>
          <v-text-field
            v-model="email"
            :rules="rules"
            label="Email"
          ></v-text-field>
          <v-text-field
            v-model="password"
            :rules="rules"
            label="Password"
          ></v-text-field>
          <v-btn type="submit" block class="mt-2">Submit</v-btn>
          <br />
          <v-btn color="primary" to="/register">I don't have an account</v-btn>
          <v-alert v-if="successMsg" type="success">{{ successMsg }}</v-alert>
          <v-btn type="submit" block class="mt-2" @click="login">1. test login</v-btn>
          <v-btn type="submit" block class="mt-2" @click="getRecipes">2. test get recipes</v-btn>
          <v-btn type="submit" block class="mt-2" @click="logout">2. test logout</v-btn>
          <v-alert v-if="errorMsg" type="error">{{ errorMsg }}</v-alert>
        </v-form>
      </v-card>
      <v-card>
        <v-card-title>TEST DATA</v-card-title>
        <v-item-group selected-class="bg-primary">
          <v-container>
            <v-row>
              <v-col
                v-for="recipe in recipes"
                :key="recipe.recipe_id"
                cols="12"
                md="4"
              >
                <v-item v-slot="{ isSelected, selectedClass, toggle }">
                  <v-card
                    :class="['d-flex align-center', selectedClass]"
                    dark
                    height="200"
                    @click="toggle"
                  >
                    <div
                      class="text-h5 flex-grow-1 text-center"
                    >
                    {{ recipe.recipe_name }}
                    {{ isSelected }}
                    <v-dialog>{{ recipe.recipe_name }}</v-dialog>
                  </div>
                </v-card>
              </v-item>
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>
      {{ recipes }}
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  data: () => ({
    email: 'john.doe@example.com', // test
    password: 'password', // test
    rules: [
      (value) => {
        if (value) return true

        return 'Required'
      },
    ],
    token:'',
    recipes:[],
    errorMsg:'',
    successMsg: '',
  }),
  head() {
    // SEO
    return {
      title: 'login',
    }
  },
  methods: {
    async login () { // przenie???? do store
      this.errorMsg = ''
      const userData = {
        email: this.email,
        password: this.password
      };
      try {
        const response = await this.$axios.post('/api/login', userData);
        this.token = response.data.token;
        response.status ? this.successMsg = 'Logged in' : this.errorMsg = response.statusTex;
      } catch (err) {
        this.errorMsg = err
        // eslint-disable-next-line no-console
        console.log(err)
      }
    },
    async getRecipes () {
      this.errorMsg = ''
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
        this.errorMsg = err
        // eslint-disable-next-line no-console
        console.log(err)
      }
    },
    logout() { // przenie???? do store
      this.token = ''
      this.successMsg = ''
    }
  }
}
</script>
<style></style>
