<template>
  <div class="login-form">
    <div class="btn-row">
      <button class="signin" @click="toggleSign(0)">Sign In</button>
      <button class="signup" @click="toggleSign(1)">Sign Up</button>
    </div>

    <p class="horizontalLine"></p>
    {{ message }}

    <div v-show="isSignIn">
      <form>
        <h3 class="signin">Sign In</h3>
        <div class="login-form">
          <div class="form-header">Email</div>
          <div>
            <input type="email" class="form-control" v-model="email" required />
          </div>
          <div class="form-header">Password</div>
          <div>
            <input
              type="password"
              class="form-control"
              v-model="password"
              required
            />
          </div>

          <div class="btn-row">
            <button class="btn" @click="login">Sign In</button>
          </div>
        </div>
      </form>
    </div>

    <div v-show="isSignUp">
      <form>
        <h3 class="signup">Sign Up</h3>
        <div class="login-form">
          <div class="form-header">First Name</div>
          <div>
            <input
              type="text"
              class="form-control"
              v-model="firstname"
              required
            />
          </div>
          <div class="form-header">Last Name</div>
          <div>
            <input type="text" class="form-control" v-model="lastname" />
          </div>
          <div class="form-header">Email</div>
          <div>
            <input type="email" class="form-control" v-model="email" required />
          </div>

          <div class="btn-row">
            <button class="btn" @click="register">Register</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  beforeMount() {
    console.log('beforeMount >>>>');
  },
  mounted() {
    console.log('mounted >>>>');
  },
  data() {
    return {
      isSignIn: true,
      isSignUp: false,
      password: "",
      firstname: "",
      lastname: "",
      email: "",
      message: ">_",
    };
  },

  methods: {
    toggleSign(key) {
      if (key === 0) {
        this.isSignIn = true;
        this.isSignUp = false;
      }
      if (key === 1) {
        this.isSignIn = false;
        this.isSignUp = true;
      }
    },

    login() {
      console.log("On Login ...");
    },

    register() {
      console.log("On Register ...");
    },
  },
};
</script>

<style lang="stylus">
.login-form {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  .btn-row {
    margin-top: 1rem;
  }

  .btn {
    padding: 0.6rem 2rem;
    outline: none;
    background-color: #60C084;
    color: white;
    border: 0;
  }

  .signin {
    padding: 0.6rem 2rem;
    outline: none;
    background-color: orange;
    color: white;
    border: 0;
    font-weight: bold;
  }

  .signup {
    padding: 0.6rem 2rem;
    outline: none;
    background-color: purple;
    color: white;
    border: 0;
    font-weight: bold;
  }

  .form-header {
    color: #666;
    margin-bottom: 0.5rem;
  }

  .form-control {
    padding: 0.6rem;
    border: 2px solid #ddd;
    width: 100%;
    margin-bottom: 0.5rem;
    box-sizing: border-box;
    outline: none;
    transition: border 0.2s ease;

    &:focus {
      border: 2px solid #aaa;
    }
  }

  .horizontalLine {
    border: none;
    border-bottom: 1px solid gainsboro;
  }
}
</style>