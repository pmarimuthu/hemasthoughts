<template>
  <div class="login-form">
    <div class="btn-row">
      <button class="signin" @click="toggleSign(0)">Sign In</button>
      <button class="signup" @click="toggleSign(1)">Sign Up</button>
    </div>

    <p class="horizontalLine"></p>
    <p v-if="status" style="color:green;">{{ message }}
    </p>
    <p v-else style="color:red;">{{ message }}</p>

    <div v-show="isSignIn">
        <h3 class="signin">Sign In</h3>
        <div class="login-form">
          <div class="form-header">ID</div>
          <div>
            <input type="binid" class="form-control" v-model="binid" required />
          </div>

          <div class="btn-row">
            <button class="btn-signin" @click="login">Sign In</button>
          </div>
        </div>
    </div>

    <div v-show="isSignUp">
      <div>
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
            <button class="btn-signup" @click="register">Register</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NavLinks from '@theme/components/NavLinks.vue';

export default {
  beforeMount() {
  },
  mounted() {
  },
  data() {
    return {
      isSignIn: true,
      isSignUp: false,
      password: "",
      firstname: "",
      lastname: "",
      email: "",
      binid: "",
      message: ">_",
      status: false,
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
      const options = {
        method: 'GET',
        headers: { 'secret-key': '$2b$10$RD3Jt3tVN.uBGS2W9ohrtu/3I76qvsekmMJFK/rCq2KG7pTr1ynt6' },
        url: ( 'https://api.jsonbin.io/b' + '/' + this.binid )
      };
      axios(options)
      .then( (response) => { 
        this.message = 'Logged In Successfully.'; 
        this.status = true;        
        //this.$router.push('/stories/');
        })
      .catch( (error) => { 
        this.message = 'Unable to Login. Please retry with your ID. \r\n' + JSON.stringify(error.message); 
        this.status = false;
        })
      .then( () => {} );
    },

    register() {
      const options = {
        method: 'POST',
        headers: { 'secret-key': '$2b$10$RD3Jt3tVN.uBGS2W9ohrtu/3I76qvsekmMJFK/rCq2KG7pTr1ynt6' },
        data: { firstname: this.firstname, lastname: this.lastname, email: this.email },
        url: 'https://api.jsonbin.io/b'
      };
      axios(options)
      .then( (response) => {
        this.binid = response.data.id;
        this.message = 'Registered Successfully. Your ID: ' + this.binid; 
        this.status = true;        
        //this.$router.push('/stories/');
        console.log(response);
        })
      .catch( (error) => { 
        this.message = 'Unable to Registered. Please retry after sometime. \r\n' + JSON.stringify(error.message); 
        this.status = false;
        })
      .then( () => {} );
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

  .btn-signin {
    padding: 0.6rem 2rem;
    outline: none;
    background-color: #63cde5;
    color: #0e323b;
    border: 0;
  }
  .signin {
    padding: 0.6rem 2rem;
    outline: none;
    background-color: #63cde5;
    color: #0e323b;
    border: 0;
    font-weight: bold;
  }

  .btn-signup {
    padding: 0.6rem 2rem;
    outline: none;
    background-color: #0e323b;
    color: #63cde5;
    border: 0;
    font-weight: bold;
  }
  
  .signup {
    padding: 0.6rem 2rem;
    outline: none;
    background-color: #0e323b;
    color: #63cde5;
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