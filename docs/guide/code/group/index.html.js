import comp from "D:/workspace/my-blog/docs/.vuepress/.temp/pages/guide/code/group/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/code/group/\",\"title\":\"代码组\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"代码组\",\"author\":\"pengzhanbo\",\"icon\":\"fluent:group-list-20-filled\",\"createTime\":\"2024/04/04 10:36:59\",\"permalink\":\"/guide/code/group/\",\"gitInclude\":[],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[{\"level\":2,\"title\":\"语法\",\"slug\":\"语法\",\"link\":\"#语法\",\"children\":[]}],\"readingTime\":{\"minutes\":0.45,\"words\":136},\"filePathRelative\":\"notes/theme/guide/代码/代码组.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
