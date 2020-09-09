import { playMode } from '@/config/config'
import * as types from './singerModuleType'

export default {
  namespaced: true,
  state: () => ({
    singer: {},
    playing: false,
    fullScreen: false,
    playList: [],
    sequenceList: [],
    playMode: playMode.sequence,
    currentIndex: -1
  }),
  mutations: {
    [types.SET_SINGER](state, singer) {
      state.singer = singer
    },
    [types.SET_PLAYING](state, flag) {
      state.playing = flag
    },
    [types.SET_FULL_SCREEN](state, flag) {
      state.fullScreen = flag
    },
    [types.SET_PLAY_LIST](state, list) {
      state.playList = list
    },
    [types.SET_SEQUENCE_LIST](state, list) {
      state.sequenceList = list
    },
    [types.SET_PLAY_MODE](state, mode) {
      state.playMode = mode
    },
    [types.SET_CURRENT_INDEX](state, index) {
      state.currentIndex = index
    }
  },
  actions: {
    selectPlay({ commit, state }, { list, index }) {
      commit(types.SET_SEQUENCE_LIST, list)
      commit(types.SET_PLAY_LIST, list)
      commit(types.SET_CURRENT_INDEX, index)
      commit(types.SET_FULL_SCREEN, true)
      commit(types.SET_PLAYING, true)
    }
  },
  getters: {
    currentSong(state) {
      return state.playList[state.currentIndex] || {}
    },
    playing(state) {
      return state.playing
    },
    playMode(state) {
      return state.playMode
    }
  }
}
