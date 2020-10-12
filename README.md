# video_player

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

[Template Explorer](https://vue-next-template-explorer.netlify.app/#%7B%22src%22%3A%22%3Cdiv%3EHello%20World!%3C%2Fdiv%3E%22%2C%22options%22%3A%7B%22mode%22%3A%22module%22%2C%22prefixIdentifiers%22%3Afalse%2C%22optimizeImports%22%3Afalse%2C%22hoistStatic%22%3Afalse%2C%22cacheHandlers%22%3Afalse%2C%22scopeId%22%3Anull%2C%22ssrCssVars%22%3A%22%7B%20color%20%7D%22%2C%22bindingMetadata%22%3A%7B%22TestComponent%22%3A%22setup%22%2C%22foo%22%3A%22setup%22%2C%22bar%22%3A%22props%22%7D%7D%7D)


### https://v3.vuejs.org/api
### https://github.com/vuejs/jsx-next#installation
### https://v3.vuejs.org/guide/render-function.html#jsx
### https://v3.vuejs.org/guide/component-dynamic-async.html#async-components
```js
import { defineAsyncComponent } from 'vue'

const AsyncComp = defineAsyncComponent({
  // The factory function
  loader: () => import('./Foo.vue')
  // A component to use while the async component is loading
  loadingComponent: LoadingComponent,
  // A component to use if the load fails
  errorComponent: ErrorComponent,
  // Delay before showing the loading component. Default: 200ms.
  delay: 200,
  // The error component will be displayed if a timeout is
  // provided and exceeded. Default: Infinity.
  timeout: 3000,
  // Defining if component is suspensible. Default: true.
  suspensible: false,
  /**
   *
   * @param {*} error Error message object
   * @param {*} retry A function that indicating whether the async component should retry when the loader promise rejects
   * @param {*} fail  End of failure
   * @param {*} attempts Maximum allowed retries number
   */
  onError(error, retry, fail, attempts) {
    if (error.message.match(/fetch/) && attempts <= 3) {
      // retry on fetch errors, 3 max attempts
      retry()
    } else {
      // Note that retry/fail are like resolve/reject of a promise:
      // one of them must be called for the error handling to continue.
      fail()
    }
  },
})
```
### https://v3.vuejs.org/api/composition-api.html
### https://v3.vuejs.org/api/special-attributes.html
#### https://v3.vuejs.org/guide/composition-api-template-refs.html#template-refs


## Teleport: https://v3.vuejs.org/guide/teleport.html#using-with-vue-components


## EmitsOptions: https://v3.vuejs.org/guide/component-custom-events.html#defining-custom-events

<span style="color: skyblue">Vue Test Utils</span>

## VueTestUtils: https://vue-test-utils.vuejs.org/api/

1.预览图： vp-preview
2.加载缓冲
3.暂停播放键
4.音量键
5.视频进度条
6.全屏
7.设置
    清晰度
    播放速度
8.截屏
