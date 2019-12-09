<template>
  <div>
    <img
      v-show="previewImage && !disablePreview"
      :src="previewImage"
      :class="imageClass + ' image-selector'"
    />
    <div :style="wrapperStyles" class="vue-base64-file-upload-wrapper">
      <input
        @change="onChange"
        :style="fileInputStyles"
        :accept="accept"
        type="file"
      />
      <input
        :class="inputClass"
        :style="textInputStyles"
        :value="fileName || (file && file.name)"
        :placeholder="placeholder"
        type="text"
        disabled
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageClass: {
      type: String,
      default: ''
    },
    inputClass: {
      type: String,
      default: ''
    },
    accept: {
      type: String,
      default: 'image/png,image/gif,image/jpeg'
    },
    maxSize: {
      type: Number,
      default: 10 // megabytes
    },
    disablePreview: {
      type: Boolean,
      default: false
    },
    fileName: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: 'Click here to upload image'
    },
    defaultPreview: {
      type: String,
      default: ''
    }
  },

  data: function data() {
    return {
      file: null,
      preview: null,
      visiblePreview: false
    }
  },

  computed: {
    wrapperStyles: function wrapperStyles() {
      return {
        position: 'relative',
        width: '100%'
      }
    },
    fileInputStyles: function fileInputStyles() {
      return {
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0,
        overflow: 'hidden',
        outline: 'none',
        cursor: 'pointer'
      }
    },
    textInputStyles: function textInputStyles() {
      return {
        width: '100%',
        cursor: 'pointer'
      }
    },
    previewImage: function previewImage() {
      return this.preview || this.defaultPreview
    }
  },

  methods: {
    onChange: function onChange(e) {
      const _this = this

      const files = e.target.files || e.dataTransfer.files

      if (!files.length) {
        return
      }

      const file = files[0]
      const size = file.size && file.size / 1000 ** 2

      // check file max size
      if (size > this.maxSize) {
        this.$emit('size-exceeded', size)
        return
      }

      // update file
      this.file = file
      this.$emit('file', file)

      const reader = new FileReader()

      reader.onload = function(e) {
        const dataURI = e.target.result

        if (dataURI) {
          _this.$emit(
            'load',
            dataURI.toString().replace('data:image/jpeg;base64,', '')
          )

          _this.preview = dataURI
        }
      }

      // read blob url from file data
      reader.readAsDataURL(file)
    }
  }
}
</script>
<style>
.image-selector {
  max-height: 150px;
  overflow: auto;
}
</style>
