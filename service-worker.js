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
    "revision": "7ba717c6106624bed2c6d62c93778d0f"
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
    "url": "assets/js/15.6b2d2ce6.js",
    "revision": "7b8054856375ad20b24dac641d4f4749"
  },
  {
    "url": "assets/js/16.ada8f22d.js",
    "revision": "77d86646973db802dec199f749183516"
  },
  {
    "url": "assets/js/17.2a8347cc.js",
    "revision": "9e03087b3f532f65b42b9202be0e7af8"
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
    "url": "assets/js/app.4ba05319.js",
    "revision": "65aa12c3c584deee711825584113a65d"
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
    "revision": "73b7c79a34416631ae6b2ee167a247ed"
  },
  {
    "url": "categories/java/index.html",
    "revision": "16785514336c12eeb76879ffd0200b5a"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "c7b6da6dfe4e6affdefcb14992e1f932"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "3df6e02d2dc7b1f4ac00f1c47d642482"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "decd105d1f4d9740012c32c86fb6eff1"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "86f3ec84c8b48e52d275bfc871fc39d5"
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
    "revision": "9db1ec061503b4a588db3bc217b5cf8c"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "9d9160cfdd818e7f23bc61eeb2a2fb49"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "54e5be57e89e519d4ced873ed860dd34"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "8ef1a917a25335ef55bdb11b5584cd15"
  },
  {
    "url": "tags/js/index.html",
    "revision": "67c39faa08f406008414691b660fde1b"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "a52bb4e062223bfcfb4f996fefb4a652"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "7c8c10e78a74cd8ca0f9d172b69c99bf"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "5c470cdbca2facf69cd1672cd73cb79c"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "baa7c8db27842cda57b3c26b26cc1a37"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "edc7c098636721a6cf222854d6fb5b4a"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "d6acacd357d5086efd040010d9c6ea00"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "c4271cfbf4f129b7cad663b63879d9a4"
  },
  {
    "url": "timeline/index.html",
    "revision": "b460233ffedea5a5cebf5e228840b161"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "1bf136af732ca5fbf33c3ab7384bb5f4"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "6a2d98656ea254aef9a956cd9d8cc33b"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "4239ce93a9b3a0f665476a5d316071a5"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "ba20be3a08281e16bbda670110d2026b"
  },
  {
    "url": "生活分享/life.html",
    "revision": "e1cf2402da4aded2fd1b77671535262f"
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
