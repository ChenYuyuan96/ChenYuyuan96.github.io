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
    "revision": "5b5e54a0f4ab7787537f96523a3c6f23"
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
    "url": "assets/js/12.d753817c.js",
    "revision": "c40b5a1ae79ce713d091b83b378d4fdf"
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
    "url": "assets/js/15.19059cf6.js",
    "revision": "556a08b194bac7e4590106cf77c70c50"
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
    "url": "assets/js/app.d4ba860a.js",
    "revision": "66c6e4dcd65ade25fd3065b2bcf97a47"
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
    "revision": "3600495e8a95a5f3bc84cdb6843c7d16"
  },
  {
    "url": "categories/java/index.html",
    "revision": "73e251c93a460b499d86b9ed88c6000b"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "bfa23d8203d290819d714f655edc4bb5"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "3252f30adb392f72d53b76ac12f1dc17"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "0811e4112bc8865d11c60061b2439ec5"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "73ef0973fddd11db67d3e1982e862d77"
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
    "revision": "01d894e7317e692a14964378685cae8a"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "1ebf842e61858722de194a15f3b66050"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "fcdd73c265221ce2aee78e2ab97d588e"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "9671e39c7241c32bbf72240588458025"
  },
  {
    "url": "tags/js/index.html",
    "revision": "e27d39fd6114a0abcc7b8fa79b38a894"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "0237f22bb44e5c3a4e9d09ee794e15b0"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "95dbb6646d3b31d7c32d3698e14dd893"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "83651757d04b8433cc11f039f4a6fd10"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "fcc57f1c4238c3443b8ef97087c88305"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "744bc80c148edd5e657ca88064431cda"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "177edf2b3884e5e66469382894ca2713"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "b597a60ff7a87dc5fe753690a2ade860"
  },
  {
    "url": "timeline/index.html",
    "revision": "9758968830a8f6bc311783eacb812e80"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "1f79e2cf03883e84fa3f9e6bc7b93bc8"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "1ffbeb92cd65b846571478cfb35b702a"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "8eb3748ac5e3d2f99344fbb97e0da65f"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "36b6589427a953aa44a6dbb2a3ddcb0e"
  },
  {
    "url": "生活分享/life.html",
    "revision": "9d6b783623e3d96b9d98b145cea9382f"
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
