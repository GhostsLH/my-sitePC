<template>
  <RightList @select="handleSelect" :list="list" />
</template>

<script>
import RightList from "./RightList";
export default {
  components: {
    RightList,
  },
  data() {
    return {
      list: [
        { name: "a", isSelect: false },
        {
          name: "b",
          isSelect: false,
          children: [
            { name: "b-1", isSelect: false },
            { name: "b-2", isSelect: true },
            { name: "b-3", isSelect: false },
            { name: "b-4", isSelect: false },
            { name: "b-6", isSelect: true },
          ],
        },
        {
          name: "c",
          isSelect: false,
          children: [
            { name: "c-1", isSelect: true },
            { name: "c-2", isSelect: false },
            { name: "c-3", isSelect: false },
            { name: "c-4", isSelect: true },
            { name: "c-6", isSelect: false },
          ],
        },
        { name: "d", isSelect: false },
        { name: "e", isSelect: false },
      ],
    };
  },
  methods: {
    handleSelect(e) {
      console.log(e);
    },
  },
};
</script>

<style>
</style> 