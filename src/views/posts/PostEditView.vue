<template>
  <div>
    <h2>게시글 수정</h2>
    <hr class="my-4" />
    <form @submit.prevent>
      <div class="mb-3">
        <label for="tile" class="form-label">제목</label>
        <input type="text" class="form-control" id="tile" />
      </div>
      <div class="mb-3">
        <label for="content" class="form-label">내용</label>
        <textarea class="form-control" id="content" rows="3"></textarea>
      </div>
      <div class="pt-4">
        <button type="button" class="btn btn-outline-danger me-2" @click="goDetailPage">취소</button>
        <button class="btn btn-primary">저장</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";

const route = useRoute()
const router = useRouter()
const id = route.params.id

const goDetailPage = () => {
  router.push({
    name: 'PostDetail',
    params: {
      id: route.params.id
    }
  })
}


</script>

<style lang="scss" scoped></style>
