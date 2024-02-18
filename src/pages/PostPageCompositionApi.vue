<template>
  <div>
    <h1>Страница с постами</h1>
    <my-input
        v-model="searchQuery"
        placeholder="Поиск..."
        v-focus
    />
    <div class="app__btns">
      <my-button @click="showDialog">Создать пост</my-button>
      <my-select
          v-model="selectedSort"
          :options="sortOptions"
      />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>
    <post-list
        :posts="sortedAndSearchedPosts"
        @remove="removePost"
        v-if="!isPostsLoading"
    />
    <div v-else>Идет загрузка...</div>
    <div v-intersection="loadMorePosts" class="observer"></div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import MyDialog from "@/components/UI/MyDialog";
import PostPagination from "@/components/PostPagination";
import useSortedAndSearchedPosts from "@/hooks/useSortedAndSearchedPosts";
import useSortedPosts from "@/hooks/useSortedPosts";
import usePosts from "@/hooks/usePosts";

export default {
  components: {
    PostPagination,
    MyDialog,
    PostForm,
    PostList
  },
  data() {
    return {
      dialogVisible: false,
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По содержимому'},
      ],
    }
  },
  setup(props) {
    const {posts, totalPages, isPostsLoading} = usePosts(10);
    const {selectedSort, sortedPosts} = useSortedPosts(posts);
    const {sortedAndSearchedPosts, searchQuery} = useSortedAndSearchedPosts(sortedPosts);

    return {
      posts, totalPages, isPostsLoading,
      selectedSort, sortedPosts,
      sortedAndSearchedPosts, searchQuery
    }
  }
}
</script>

<style scoped>
.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}
.observer {
  height: 30px;
  background: green;
}
</style>
