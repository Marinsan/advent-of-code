<template>
  <div>
    <div class="days">
      <span v-for="(day, index) in 24" :key="index">
        <h6 class="day" v-on:click="showDaye(index)">Day {{ index + 1 }}</h6>
      </span>
    </div>
    <transition name="fade">
      <h4 v-if="resultOne">{{ resultOne }}</h4>
    </transition>
    <transition name="fade">
      <h4 v-if="resultTwo">{{ resultTwo }}</h4>
    </transition>
    <h6 v-if="resultOne">Calculate in {{ time }} milliseconds.</h6>
    <h1>{{ msg }}</h1>
    <h2>🎄 🎅 ⛄ {{ year }} ⛄ 🎅 🎄</h2>
    <h5>🍬🍬🍬🍬🍬🍬🍬🍬🍬🍬🍬</h5>
  </div>
</template>

<script>
import { Day1Mixins } from "./day1/Day1";
import { Day2Mixins } from "./day2/Day2";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
    year: String,
  },
  data() {
    return {
      resultOne: null,
      resultTwo: null,
      time: null,
    };
  },
  methods: {
    showDaye(index) {
      let method = "showDay" + (index + 1);
      var t0 = performance.now();
      this[`${method}`](index);
      var t1 = performance.now();
      this.time = t1 - t0;
    },
  },
  mixins: [Day1Mixins, Day2Mixins],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.days {
  display: -webkit-flex;
  justify-content: center;
  display: flex;
  flex-direction: row;
}
.day {
  margin-left: 2px;
  margin-right: 2px;
  cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
