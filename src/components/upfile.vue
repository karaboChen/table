<script setup>
import { ref } from "vue";
import { Get_file } from "@/backend/file";
const fileList = ref([]);
const uploadMethod = async ({ file, updateProgress }) => {
  const formData = new FormData();
  formData.append("file", file);
  try {
    await Get_file(formData, {
      onUploadProgress(progressEvent) {
        const percentCompleted = Math.round(
          (progressEvent.loaded * 100) / (progressEvent.total || 0)
        );
        // 更新進度
        updateProgress(percentCompleted);
      },
    });
  } catch (error) {
    // 處理錯誤
    console.error("Upload failed:", error);
    throw error;
  }
};
</script>

<template>
  <div>
    <vxe-upload
      v-model="fileList"
      show-progress
      :upload-method="uploadMethod"
    ></vxe-upload>
  </div>
</template>
