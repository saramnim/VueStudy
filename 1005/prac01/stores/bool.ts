export const useBooleanStore = defineStore('boolean',{
  state: () => ({
    isType: true
  }),
  actions: {
    setType(){
      this.isType = !(this.isType)
    },
  },
});