<template>
  <div class="upload-pu8ta" @click="handleUpload">
    <span v-if="!base64URL" class="upload-add">+</span>
    <div v-if="base64URL" class="upload-show">
      <img :src="base64URL" style="width:100%;height:100%;">
    </div>
    <input type="file"  @change="fileChanged" style="display: none;">
  </div>
</template>
<script>  
  export default {
    name:'c-uploadImg-file',
    props: {
    },
    data() {
      return {
        base64URL: '',
        imageFile:''
      }
    },
    methods: {
      fileChanged(files) {
        let file = files[0];
        const isJPGPNG = /image\/jpeg|image\/png/.test(file.type);
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isJPGPNG) {
          this.$message.error('上传图片只能是 JPG或PNG 格式!');
        }
        if (!isLt2M) {         
          this.$message.error('上传图片大小不能超过 2MB!');
        }
        if (!(isJPGPNG && isLt2M)) {
          return false;
        }
        var reader = new FileReader();
        reader.readAsDataURL(file);
        let vm = this;
        reader.onload = function(e) {
          vm.base64URL = this.result;
        }
        this.imageFile = file;
      },
      handleUpload(){
        
      }
    }
  }
</script>
<style lang="less">
  .upload-pu8ta {
    float: left;
    width: 120px;
    height: 120px;
    border: #ccc solid 1px;
    border-radius: 5px;
    text-align: center;
    .upload-add {
      display: inline-block;
      width: 118px;
      height: 118px;
      font-size: 50px;
      line-height: 118px;
      cursor: pointer;
    }
    .upload-show {
      width: 118px;
      height: 118px;
      border-radius: 5px;
      cursor: pointer;
      overflow: hidden;
    }
  }
</style>