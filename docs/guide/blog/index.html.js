import comp from "D:/workspace/my-blog/docs/.vuepress/.temp/pages/guide/blog/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/blog/\",\"title\":\"博客\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"博客\",\"author\":\"pengzhanbo\",\"icon\":\"material-symbols:article-outline\",\"createTime\":\"2024/03/04 19:16:40\",\"permalink\":\"/guide/blog/\",\"gitInclude\":[],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[{\"level\":2,\"title\":\"概述\",\"slug\":\"概述\",\"link\":\"#概述\",\"children\":[]},{\"level\":2,\"title\":\"国际化支持\",\"slug\":\"国际化支持\",\"link\":\"#国际化支持\",\"children\":[]},{\"level\":2,\"title\":\"博主信息\",\"slug\":\"博主信息\",\"link\":\"#博主信息\",\"children\":[{\"level\":3,\"title\":\"配置\",\"slug\":\"配置\",\"link\":\"#配置\",\"children\":[]}]},{\"level\":2,\"title\":\"文章元数据\",\"slug\":\"文章元数据\",\"link\":\"#文章元数据\",\"children\":[]},{\"level\":2,\"title\":\"文章摘要\",\"slug\":\"文章摘要\",\"link\":\"#文章摘要\",\"children\":[]},{\"level\":2,\"title\":\"标签页和归档页\",\"slug\":\"标签页和归档页\",\"link\":\"#标签页和归档页\",\"children\":[]}],\"readingTime\":{\"minutes\":2.04,\"words\":611},\"filePathRelative\":\"notes/theme/guide/博客.md\"}")
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
