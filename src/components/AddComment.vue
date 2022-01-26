<template>
  <div>
    <div class="comment-card">
      <div class="add-comment">
        <div class="desktop">
          <div class="comment-add-avi"></div>
        </div>
        <form action="" class="comment-form">
          <textarea name="" id="" cols="30" rows="3"></textarea>
          <div class="desktop">
            <button class="button">{{ type }}</button>
          </div>
        </form>
        <div class="mobile">
          <div class="flex-between">
            <div class="avi"></div>
            <div>
              <button class="button">{{ type }}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: String,
  },
  data() {
    return {};
  },
};
</script>