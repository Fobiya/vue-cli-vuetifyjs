export default{
  state: {
    processing: false,
    error: null
  },
  mutations: {
    SET_PROCESSING(store, payload){
      state.processing = payload
    },
    SET_ERROR(store, payload){
      state.error = payload
    },
    CLEAN_ERROR(store){
      state.error = null
    }
  },
  getters:{
    getProcessing: (state) => state.processing,
    getError: (state) => state.error
  }
}
