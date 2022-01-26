import { createApp } from "vue";
import App from "./App.vue";
import Comment from "./components/Comment.vue";
import CommentSelf from "./components/CommentSelf.vue";
import AddComment from "./components/AddComment.vue";
import EditComment from "./components/EditComment.vue";
// import DeleteModal from "./components/DeleteModal.vue";
import Reply from "./components/Reply.vue";

const app = createApp(App);
app.component("comment", Comment);
app.component("comment-self", CommentSelf);
app.component("add-comment", AddComment);
app.component("edit-comment", EditComment);
// app.component("delete-modal", DeleteModal);
app.component("reply", Reply);
app.mount("#app");
