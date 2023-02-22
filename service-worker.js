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
    "revision": "ee45d4f7cef41ec8da680c49e9676710"
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
    "url": "assets/js/12.2547969b.js",
    "revision": "9eadd58d925ae4924dce61e1811b9ae0"
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
    "url": "assets/js/16.5187b8bd.js",
    "revision": "15ffa534f0e33db227cd4ba62fa00f4e"
  },
  {
    "url": "assets/js/17.eadbafe9.js",
    "revision": "4f5927e7ad60a5ee25788ca5ed00f220"
  },
  {
    "url": "assets/js/18.345d2cd9.js",
    "revision": "e5de0936c508067e90878438b7492fa1"
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
    "url": "assets/js/app.56945f2b.js",
    "revision": "bc5fbd7ecfaca03b161e781faef657ad"
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
    "revision": "0a75c0fe705e5c7fb91a58bbc126c550"
  },
  {
    "url": "categories/java/index.html",
    "revision": "b53661fe95deaea75c1d65b1afdae620"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "fc5746172825008ba5ca57002eb753c3"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "d509904efcc5e8542952a1857e2add74"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "5545d853bbf5299a18971fd373e06961"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "370360f58cb3620eae2c6fc74191051c"
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
    "revision": "117a10777587d5d585b2ebc1f8a43e77"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "374f317544d48b32884228dfbb685e6a"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "df8f3b43569e075a7133a3626702f37a"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "b7ef9f0667ee282546b4bb21e5d67af4"
  },
  {
    "url": "tags/js/index.html",
    "revision": "13a49ac8fecb69b8532afb57a9e3c131"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "3c321f67656e720291859f432bb1ffc3"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "845ac525f03f1804b15a6a3162325cd0"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "1116fc6cc7a4324d968a223b82e9a233"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "c8da0f409d55df5c278831dbc3de36d2"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "d8d08c0a82a0311d765ac9d316400690"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "1f43a854300e557f0692e0c7b98b5681"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "c2cfa908734904512a7e9fe4fbbf1002"
  },
  {
    "url": "timeline/index.html",
    "revision": "9de4d566f3a870a5963123396ae5a66d"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "20caa5db4b1e434b206f3326bc402109"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "ceab7a9436b837f015cffd82157d1d66"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "1bf015c51b3b4f7d33ea43eca0bd2475"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "5c32a0133d2b8e848a25789fad4a5155"
  },
  {
    "url": "生活分享/life.html",
    "revision": "71d8ad995a1b3edddacd78ca7d8a7076"
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
