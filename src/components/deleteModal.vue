<template>
  <div>
    <transition name="modal-fade">
      <div class="modal-backdrop">
        <div class="modal">
          <div class="modal-header"><p>Delete Comment</p></div>
          <div class="modal-body">
            <p>
              Are you sure you want to delete this comment? This will remove the
              comment and can't be undone.
            </p>
          </div>
          <div class="modal-buttons">
            <button class="button cancel" @click="close">NO, CANCEL</button>
            <button class="button delete" @click="close">YES, DELETE</button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    show: Boolean,
    id: String,
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },

  computed: {},
};
</script>

<style>
</style>