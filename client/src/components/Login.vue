<template>
  <div>
    <h4>Login Form</h4>
    <form>
      <div class="mb-3">
        <label for="txtuserName" class="form-label">User Name</label>
        <input
          type="text"
          class="form-control"
          id="txtuserName"
          aria-describedby="emailHelp"
          v-model="username"/>
      </div>
      <div class="mb-3">
        <label for="txtPassword" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="txtPassword"
          v-model="password"
        />
      </div>
      <button type="button" class="btn btn-primary" @click="login()">Submit</button>
    </form>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
export default {
    data(){
        return{
            username:'',
            password:''
        }
    },
    computed:{
      ...mapGetters('auth',{
        getterLoginStatus:'getLoginStatus'
      })
    },
    methods:{
        ...mapActions('auth',{
          actionLogin:'login'
        }),
       async login({ commit }, payload) {
            const response = await axios
            .post("http://localhost:3000/auth/login", payload)
            .catch((err) => {
                console.log(err);
            });
            if (response && response.data) {
            commit("saveTokenData", response.data);
            commit("setLoginStatu", "success");
            } else {
            commit("setLoginStatu", "failed");
            }
        }
    }
};
</script>