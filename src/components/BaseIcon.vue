<template>
    <div class="icon-wrapper">
        <div class="icon"></div>
    </div>
</template>

<script>
    export default {
        name: 'NoteIcon',
    }
</script>

<style scoped>
.icon-wrapper {
  display: inline-flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.4);
  font-size: 1rem;
  font-weight: 600;
  margin-right: 6px;
  height: 25px;
  width: 25px;
  background: url("../assets/svg/musicnote.svg") no-repeat;
  opacity: 60%;
}
.icon {
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;

}

</style>