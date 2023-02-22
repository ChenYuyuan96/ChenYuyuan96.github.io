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
    "revision": "6befe2e963296f56406d6b03a5a8f53f"
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
    "url": "assets/js/12.84b5523a.js",
    "revision": "e47a2d221ec3e6b79cd24b408109446a"
  },
  {
    "url": "assets/js/13.d3e15149.js",
    "revision": "6d01bb857e9f6f76f8ce877dcba60b5f"
  },
  {
    "url": "assets/js/14.4d9f7188.js",
    "revision": "84c18ada04d7f96157697988af640b74"
  },
  {
    "url": "assets/js/15.493e64d8.js",
    "revision": "a9267e8b45fc33171454fc7a2266bae5"
  },
  {
    "url": "assets/js/16.8e195926.js",
    "revision": "77980ee985e85bc7ef25e57e082625c7"
  },
  {
    "url": "assets/js/17.eadbafe9.js",
    "revision": "4f5927e7ad60a5ee25788ca5ed00f220"
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
    "url": "assets/js/app.abea1ece.js",
    "revision": "b3df6744ef5aab584d7ece939da535c9"
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
    "revision": "467fc642573f4629e7c5932ebc230a4d"
  },
  {
    "url": "categories/java/index.html",
    "revision": "8428ffb8a19cab72a917e516b8696830"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "eb822193ecd9bbaa60a19a3971e4c2eb"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "73d434263a885d7222caf5519af865ef"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "fae106654b817a7964a7db54f40ab81b"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "265830ff39b640c38a038f31693da23c"
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
    "revision": "db90c57785fe2b82bce0fe70fdce6878"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "b2bf344358624d698b1f155c426775e5"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "655092bc60ecd00813547238b53e6e5c"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "20f523e1bd795eb8c94f4bddcbae5af7"
  },
  {
    "url": "tags/js/index.html",
    "revision": "8696e1cb566ef66c95216ae7f27fd999"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "75a3577d481bc1399f3d026d39d4074e"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "fed610d3ab5132f7a0c4b0e59a316d23"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "53d8e3408167dd3b3b27628df56271c7"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "722986da7dddd134b9f5ac0cf95850ea"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "ffdfd36fd39d083b9cd5f6d3a1d601c1"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "09b8ee89117f0c1fc1975a28b43c8b98"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "f64b7c83e0742f42c2891a3bd2a69a12"
  },
  {
    "url": "timeline/index.html",
    "revision": "7a05fb211971fc8f77771ce355924834"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "21c66c88d9d4f44c5a3b6b07ad5a2da9"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "08806818209cde1b8903bd6879487404"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "ae8a7b8bdaf0ae7ce4789f8724ba2581"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "d4675b02acccabecdbc8bee422e802dd"
  },
  {
    "url": "生活分享/life.html",
    "revision": "a4ed18b7e0c2585959701946be477b29"
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
