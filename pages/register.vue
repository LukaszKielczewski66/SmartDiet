<template>
  <!-- <v-row justify="center" align="center">
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
  </v-row> -->
  <v-row class="d-flex justify-center align-center">
    <v-card class="register-card mx-8 mt-10">
      <v-card-title>{{ currentTitle }}</v-card-title>
      <v-window v-model="step">
        <v-window-item :value="1">
          <v-card-text>
            <v-row>
              <v-col cols="6">
                <v-text-field v-model="firstname" label="Imię"></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="lastname"
                  label="Nazwisko"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-text-field v-model="email" label="E-mail"></v-text-field>
            <v-text-field v-model="password" label="Hasło"></v-text-field>
            <v-checkbox v-model="terms" label="Akceptuje warunki korzystania"></v-checkbox>
          </v-card-text>
        </v-window-item>
        <v-window-item :value="2">
          <v-card-text>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="height"
                  label="Wzrost"
                  type="number"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="weight"
                  label="Waga"
                  type="number"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="age"
                  label="Wiek"
                  type="number"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-select
                  v-model="gender"
                  :items="genders"
                  label="Płeć"
                  clearable
                ></v-select>
              </v-col>
              <v-col cols="12">
              <v-select
                  v-model="activity"
                  :items="activities"
                  label="Aktywność fizyczna"
                  clearable
                ></v-select>
              </v-col>
              <v-col cols="12">
                <v-select
                  v-model="goal"
                  :items="goals"
                  label="Twój cel"
                  clearable
                ></v-select>
              </v-col>
            </v-row>
          </v-card-text>
        </v-window-item>
        <v-window-item :value="3">
        </v-window-item>
      </v-window>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn v-if="step === 1" color="primary" tile @click="step++">
          Przejdź dalej
        </v-btn>
        <v-btn v-if="step === 2" color="primary" tile @click="step--">
          Powrót
        </v-btn>
        <v-btn v-if="step === 2" color="primary" tile @click="createAccount()">
          Utwórz konto!
        </v-btn>
        <v-btn v-if="step === 3" color="primary" tile>
         Zaloguj się
        </v-btn>
        <v-spacer v-if="step === 3"></v-spacer>
      </v-card-actions>
    </v-card>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  data: () => ({
    step: 1,
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    terms: false,
    height: '',
    weight: '',
    age: '',
    gender: '',
    genders: ['Mężczyzna', 'Kobieta', 'Helikopter Bojowy'],
    activity: '',
    activities: ['Mała', 'Średnia', 'Duża'],
    goal: '',
    goals: ['Chcę schudnąć', 'Chcę utrzymać wagę', 'Chcę przytyć'],
    // rules: [
    //   (value) => {
    //     if (value) return true
    //     return 'You must enter a first name.'
    //   },
    // ],
  }),
  head() {
    // SEO
    return {
      title: 'register',
    }
  },
  computed: {
    currentTitle() {
      switch (this.step) {
        case 1:
          return 'Zarejestruj się'
        case 2:
          return 'Podaj swoje dane'
        default:
          return 'Konto zostało stworzone!'
      }
    },
  },
  methods: {
    createAccount () {
      // walidacja
      this.step++;
      this.$axios
      .post()
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
    }
  }
}
</script>

<style>
.register-card {
  max-width: 500px;
}
</style>
