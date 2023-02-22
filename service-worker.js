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
    "revision": "d0820e73848500c8c712f4535c95880a"
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
    "url": "assets/js/12.a307acb3.js",
    "revision": "1523ab2e9237d015413223374b0b45be"
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
    "url": "assets/js/15.a03caf7f.js",
    "revision": "9b90ef0f71190ca8f76b01c7fe6d870f"
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
    "url": "assets/js/app.a7dff37d.js",
    "revision": "1ca9ef38c7c5eb0e75a04d66fdcc4541"
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
    "revision": "0159a370cb92f5322522ab776d345a31"
  },
  {
    "url": "categories/java/index.html",
    "revision": "7958c9841c2ea343a0a9ef2a28da57aa"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "503f8bb6a86914c8fc317c716e48e4d6"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "95b43317716e34cb24434a4369b7d930"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "974be0f23fd428ea1cc702fbe30bd229"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "11fdaa68b48e711d5893515d3b222a52"
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
    "revision": "a0f852ac0cb00581c9c7aba2ebae8e6a"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "c60841adfbb9b8cdbc9189507e648ed8"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "2f74f1767d28a0f2c4b9f2ac207d7a72"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "0980008a2876ab8e0d18c3aca009496d"
  },
  {
    "url": "tags/js/index.html",
    "revision": "c3b24ef54d918d42d20facd4c218044c"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "60ea7cd7dc445095bc43b15c0a5900fe"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "8132ae005c9d9f96e7a7c5d104261e09"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "d489f752ec977da4ceb243e4a71414ee"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "d549c47cbe80628befc3eb7bd5d70179"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "e3f8f75956ae78284bcbcc4d269581cf"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "a6d6bc8563489c1fc44fce015c6a22ac"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "e080a7b28209efd0fe0cf8908467b268"
  },
  {
    "url": "timeline/index.html",
    "revision": "612a1a63cd5bba867d6a4ca95c16a1c2"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "72686d58c04a4dd84099d674de2c6906"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "a97625a221fb5716b8ccec2134062a24"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "7f4c5aa76fb2c9014d0413952ac59a71"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "a7690a153baf2f85a73ff9deee0f45b8"
  },
  {
    "url": "生活分享/life.html",
    "revision": "6f2bed006f4cafa8ef7093c63732dc15"
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
