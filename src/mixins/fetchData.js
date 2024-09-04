//公共的远程获取数据代码
//具体的组件中，需要提供一个远程获取数据的方法      fetchData

//混入的方式降低重复代码
export default function (defaultDataValue = null) {
  return {
    data() {
      return {
        isLoading: true,
        data: defaultDataValue,
      };
    },
    async created() {
      this.data = await this.fetchData();
      this.isLoading = false;
    },
  };
}
