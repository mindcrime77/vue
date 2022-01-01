<template>
  <h1>{{ test }}</h1>
  <form @submit.prevent="submitForm(user)">
    <div class="row">
      <label>User:</label>
      <input type="text" v-model="user.username" />
    </div>
    <div class="row">
      <label>Email:</label>
      <input type="text" v-model="user.email" />
    </div>
    <div class="row">
      <label>Password:</label>
      <input type="password" v-model="user.password" />
    </div>
    <p v-if="msg.fail" class="error">
      {{ msg.fail }}
    </p>
    <p v-else class="sent">
      {{ msg.success }}
    </p>
    <button type="submit">OK</button>
    <div class="test">
      <h1>Test</h1>
    </div>
  </form>
</template>

<script>
import { reactive, computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const test = computed(() => store.state.test);
    let msg = reactive({
      success: null,
      fail: null,
    });
    const submitForm = (user) => {
      if (!user.username || !user.email || !user.password) {
        msg.fail = "A field is missing!";
        reset();
        return;
      } else {
        msg.success = "Sent to backend...";
        reset();
        console.log(user);
      }
    };
    const store = useStore();
    let user = reactive({
      username: "",
      email: "",
      password: "",
    });
    const reset = () => {
      setTimeout(() => {
        user.username = "";
        user.email = "";
        user.password = "";
        msg.success = "";
        msg.fail = "";
      }, 1000);
    };
    return {
      store,
      user,
      submitForm,
      test,
      msg,
    };
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  width: 33%;
  border: 1px solid lightgray;
  padding: 1em;
  border-radius: 0.5em;
  background: rgb(163, 132, 138);
  position: relative;
}
input,
button {
  padding: 0.5em;
  margin: 0.5em 0;
}
.row {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.row label {
  width: 30%;
}
.row input {
  width: 70%;
}
.test {
  border: 1px solid;
  max-width: 100px;
  text-align: center;
  border-radius: 50%;
  background: cornflowerblue;
  position: absolute;
  padding: 1em;
  top: 100px;
  transition: 0.3s;
  opacity: 0;
}
form:hover > .test {
  transform: translateY(115px);
  color: aliceblue;
  opacity: 1;
}
.error {
  background: red;
}
.sent {
  background: green;
}
</style>
