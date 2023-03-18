<template>
  <v-row class="d-flex justify-center align-center">
    <v-card class="register-card mx-8 mt-10">
      <v-card-title v-if="errorMsg === ''">{{ currentTitle }}</v-card-title>
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
            <v-checkbox
              v-model="terms"
              label="Akceptuje warunki korzystania"
            ></v-checkbox>
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
                  item-text="name"
                  item-value="value"
                  label="Aktywność fizyczna"
                  return-object
                  single-line
                ></v-select>
              </v-col>
              <v-col cols="12">
                <v-select
                  v-model="goal"
                  :items="goals"
                  item-text="name"
                  item-value="value"
                  label="Twój cel"
                  return-object
                  single-line
                ></v-select>
              </v-col>
            </v-row>
          </v-card-text>
        </v-window-item>
        <v-window-item :value="3"> </v-window-item>
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
        <v-btn
          v-if="step === 3 && errorMsg === ''"
          to="/login"
          color="primary"
          tile
        >
          Zaloguj się
        </v-btn>
        <v-btn
          v-if="step === 3 && errorMsg.length > 0"
          color="primary"
          tile
          @click="step = 1"
        >
          Powrót do Rejestracji
        </v-btn>
        <v-spacer v-if="step === 3"></v-spacer>
      </v-card-actions>
      <v-alert v-if="step === 3 && errorMsg.length > 0" type="error">{{
        errorMsg
      }}</v-alert>
    </v-card>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  data: () => ({
    step: 1,
    firstname: 'as',
    lastname: 'as',
    email: 'as',
    password: 'as',
    terms: false,
    height: 20.0,
    weight: 20.0,
    age: 20,
    gender: 'as',
    genders: ['Mężczyzna', 'Kobieta', 'Helikopter Bojowy'],
    activity: {},
    activities: [
      { name: 'Mała', value: 0 },
      { name: 'Średnia', value: 1 },
      { name: 'Duża', value: 2 },
    ],
    goal: {},
    goals: [
      { name: 'Chcę schudnąć', value: 0 },
      { name: 'Chcę utrzymać wagę', value: 1 },
      { name: 'Chcę przytyć', value: 2 },
    ],
    errorMsg: '',
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
    async createAccount() {
      this.errorMsg = ''
      // walidacja
      this.step++
      const user = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password,
        height: this.height,
        weight: this.weight,
        age: this.age,
        gender: this.gender,
        activity: this.activity.value,
        goal: this.goal.value,
      }
      try {
        const response = await this.$axios.post('api/register', user)
        // eslint-disable-next-line no-console
        console.log('res: ', response)
        if (response.data.name === 'error') {
          this.errorMsg = response.data.detail
        }
      } catch (err) {
        this.errorMsg = err
        // eslint-disable-next-line no-console
        console.log(err)
      }
    },
  },
}
</script>

<style>
.register-card {
  max-width: 500px;
}
</style>
