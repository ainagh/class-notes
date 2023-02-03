<template>
  <div class="tweet">
    <img
      src="https://i.imgur.com/9yw1Fyw.jpg"
      class="profile"
      alt="profile"
    />

    <div class="body">
      <div class="top">
        <span class="user">
          <span class="name">Ironhack</span>
          <span class="handle">@ironhack</span>
        </span>

        <span class="timestamp">Nov 30, 2020</span>
      </div>

      <p class="message">
        On December 7th, we will be hosting a #webinar that will introduce you
        to #SQL! Are you ready? 🚀
      </p>

      <div class="actions">
        <!-- Font Awesome icons -->
        <i class="far fa-comment"></i>
        <i class="fas fa-retweet"></i>
        <i class="far fa-heart"></i>
        <i class="fas fa-share"></i>
      </div>
    </div>

    <i class="fas fa-ellipsis-h"></i>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import ProfileImage from "./ProfileImage.vue";
import User from "./User.vue";
import Timestamp from "./Timestamp.vue";
import Message from "./Message.vue";
import Actions from "./Actions.vue";

const props = defineProps({
  tweet: Object,
});

const props = defineProps(["tweet"]);
defineProps({
  tweet: {
    type: String,
    required: false,
    default: {
      user: {
        name: "Aleix",
      
      }
    }
  }
})

</script>

<style scoped>
a {
  color: #42b983;
}
</style>