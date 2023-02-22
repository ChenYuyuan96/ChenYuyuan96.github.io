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
    "revision": "b055fa9331e7612d27a0d90496592f0e"
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
    "url": "assets/js/14.e045644f.js",
    "revision": "960ab8745b60c9eee2f3b9b4b7271e83"
  },
  {
    "url": "assets/js/15.62cd6b00.js",
    "revision": "fa25c40cda304e2bc0441071cdba79af"
  },
  {
    "url": "assets/js/16.affccac5.js",
    "revision": "f1a5ceffe3cb9147f59f01c5658b2d5e"
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
    "url": "assets/js/app.3ced908c.js",
    "revision": "8e725a515ae77b8d601df1583158979c"
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
    "revision": "96dcbcfc5585c94e5b733a24837ca746"
  },
  {
    "url": "categories/java/index.html",
    "revision": "7d3f21ea34f093280dbf26af63ab3fd2"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "abb87267c414c8f6297a02b46b93d7ea"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "6e12225e0b4a382ee200032e5628d0ed"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "48ad4a5f23702d141eddc2c1c8dbf03b"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "a392c50d2f33f58da1658283154d8bce"
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
    "revision": "4c47aac6a62d42395fcdfda06a2ce41d"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "782067af3e719cb8d053b4a0b6bc36ba"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "79801e7e449909a88c8042be167502eb"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "1608075ebf1f063150ebf985fc41df56"
  },
  {
    "url": "tags/js/index.html",
    "revision": "ce1cf925a542fe97f47b683b0044afec"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "18e9c907004568706e893919d157f35a"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "67f7121c72842a26ed0503b9292bf1ae"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "b32c5eda9e491ac978c9734991c897ed"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "a1b28bdc75e04eaedf801014552b618b"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "ce2aa2d0bc9a527884634646f6df253d"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "76a0cc01f77dd405e66f73735ba0012b"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "da8e10ad496472af13d78a3e804f1ef5"
  },
  {
    "url": "timeline/index.html",
    "revision": "ee8a89d4a5d20998501021b496566db6"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "b9a15272b982d293b40c49455a7dbb7f"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "0d73ac37f113704b12f4551f8785d6a4"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "3dfb04052c6809ddda598df959f362b7"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "e399f4ba3204231b5dd8b203a9b2588b"
  },
  {
    "url": "生活分享/life.html",
    "revision": "c2419f6c95691de21a4db5951c0c276a"
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
