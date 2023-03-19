<template>
  <div>
    <Dialog
      :visible="visible"
      :header="header"
      :modal="true"
      :closable="false"
      :dismissable-mask="false"
      :breakpoints="breakpoints"
      @show="onShow"
      @hide="onHide"
    >
      <div>{{ message }}</div>
      <div class="p-dialog-footer">
        <Button label="No" @click="hideDialog" />
        <Button label="Yes" class="p-button-danger" @click="onConfirm" />
      </div>
    </Dialog>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Dialog,
    Button,
  },
  props: {
    visible: Boolean,
    header: String,
    message: String,
  },
  data() {
    return {
      breakpoints: {
        "960px": "80vw",
        "640px": "90vw",
        "360px": "100vw",
      },
    };
  },
  methods: {
    onShow() {
      console.log("Opened");
    },
    onHide() {
      console.log("Closed");
    },
    hideDialog() {
      this.$emit("update:visible", false);
    },
    onConfirm() {
      console.log("Confirm button clicked.");
      this.hideDialog();
    },
  },
});
</script>
