/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "bb2416738d2bd5d15afc55672ac46e49"
  },
  {
    "url": "assets/css/0.styles.57064493.css",
    "revision": "bdfc107ffa09860922a6644b10cc5fcd"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.2356bf96.js",
    "revision": "30e828c146c3447f6cbf728cdd82e925"
  },
  {
    "url": "assets/js/10.c76b71d0.js",
    "revision": "2d186e0b80e993bf73e697cd6f792bb4"
  },
  {
    "url": "assets/js/11.e8633219.js",
    "revision": "c6b1a8edcabf36b3249cd03c29f993dd"
  },
  {
    "url": "assets/js/12.df0b42a0.js",
    "revision": "09f4af06baaf275b5ac2d6cae2b0c79d"
  },
  {
    "url": "assets/js/13.d3e15149.js",
    "revision": "6d01bb857e9f6f76f8ce877dcba60b5f"
  },
  {
    "url": "assets/js/14.e045644f.js",
    "revision": "960ab8745b60c9eee2f3b9b4b7271e83"
  },
  {
    "url": "assets/js/15.6b2d2ce6.js",
    "revision": "7b8054856375ad20b24dac641d4f4749"
  },
  {
    "url": "assets/js/16.8e195926.js",
    "revision": "77980ee985e85bc7ef25e57e082625c7"
  },
  {
    "url": "assets/js/17.44e8dbb2.js",
    "revision": "75746639d352033c7a1a9a7ae69b7bb7"
  },
  {
    "url": "assets/js/18.1ed22641.js",
    "revision": "0ce5adb05e88c5cc6415e2b04c81844f"
  },
  {
    "url": "assets/js/4.869f9644.js",
    "revision": "6a9061b507f12ee2770b1f19b8e3d4da"
  },
  {
    "url": "assets/js/5.90418627.js",
    "revision": "1689296e32236e06547752a56f9265f6"
  },
  {
    "url": "assets/js/6.4fbfe6b6.js",
    "revision": "4719502381b5c3d6ac6a2e6d590b4322"
  },
  {
    "url": "assets/js/7.ecce5d03.js",
    "revision": "c38484adcb3f89dd39a62f70a7b1ea62"
  },
  {
    "url": "assets/js/8.763ad6a8.js",
    "revision": "09cca6c7b2202fa0a4d063836f72e2dd"
  },
  {
    "url": "assets/js/9.2c732680.js",
    "revision": "05c8a35278c075892025e2714a299d64"
  },
  {
    "url": "assets/js/app.1afd144a.js",
    "revision": "ff6c9583082848532ecd4072e6301b19"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "d87b8800faffea165e2a687cbc58c31f"
  },
  {
    "url": "assets/js/vendors~flowchart.6ecfa24c.js",
    "revision": "0914943e5101085e2068a7393195effe"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "8ca0ee4dc1f46d96f8228ce0ec31d190"
  },
  {
    "url": "categories/java/index.html",
    "revision": "07434d36fba22b70533bfd4f3bc8ed04"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "fdc5d3b1d23e901f79962f3c4cc23475"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "16551ad80ad90057484d07790f2bb6a2"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "e86bdc46ac7cc32e3ca3c1e8852b02e7"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "94f5b71352bc050e61ad050dae682866"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "137f5c90785d94e3412afae5baec4c3a"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "2551f70a9dfb2423198198b7cb1b937d"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "09d1f90ad82d3d51bc8f52181de360b7"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "634c8f700dfa17b13e253cf6887dd90f"
  },
  {
    "url": "tags/js/index.html",
    "revision": "c7aa0c68ce01b2c2e468fd232f952592"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "65e9eff3388d212bba99f57e8d0c7900"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "9abec6275e7e742b779f62e93446ec14"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "3db91b1002190eeb0ab0978296b5418c"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "8af1dd0bac77018d4eafab2567dbf247"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "541568005c1b9ebec0feb5e61ca2ac2a"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "e5fda8ad160c64b1d004d2c665a10dff"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "8432b2641140c6d2b376eeb4a023a36a"
  },
  {
    "url": "timeline/index.html",
    "revision": "fd9ee726f594d1febeeeb0265de00205"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "aaed6e3c6ce003092b7c0e9a7abcebd5"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "f67880f03e07f283708dd9a15107532f"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "caee730f6e3cb5aa40356c48a0d908c0"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "479a43bae068e33d2bbc760adaa9d3db"
  },
  {
    "url": "生活分享/life.html",
    "revision": "fcdec686593265d8cf857ccc167f1960"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
