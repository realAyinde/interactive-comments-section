<template>
  <div>
    <comment></comment>
    <div class="timeline">
      <comment></comment>
      <comment-self></comment-self>
    </div>
    <add-comment type="reply"></add-comment>
    <edit-comment></edit-comment>
    <!-- <reply></reply> -->
    <add-comment type="send"></add-comment>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Ayinde Sodiq",
    };
  },
};
</script>
