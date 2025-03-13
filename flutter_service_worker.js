'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "ea75b39ed1c3f54eb8b61e86e8fef38a",
"version.json": "602c13e449a359e3b1df568fa708a424",
"index.html": "8c13cd7be17be2b5dc955e749c04c6f7",
"/": "8c13cd7be17be2b5dc955e749c04c6f7",
"main.dart.js": "6088d8a12e828c0961f57cba13194536",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1bd6f784b94b4c4a7b5906203fbfda3f",
"assets/images/badge_background_star.svg": "cd851a409eebda6b78ef1ede7d0c9ee1",
"assets/images/badge_background_rocket.svg": "ca6adb3f29e33a65f0a32779f2e4e37f",
"assets/images/man_6.svg": "3a5e790b2f0cfd63baf5d8573d356e0a",
"assets/images/girl_8.svg": "5ed89f11e5abaca8186e987884693790",
"assets/images/man_4.svg": "d188eaeadd50503e76a7829c027d8964",
"assets/images/shield-warning.svg": "f6b48a3d0a560651d7a9475367bbb76f",
"assets/images/Blue_Mark.png": "cd17bf438d69adafdccfba6036317b95",
"assets/images/test_badge.svg": "45d9f0208bfdde8aae45a170dd685e39",
"assets/images/man_5.svg": "4d9acf138a62cafa5f0a97b6a32a023c",
"assets/images/girl_9.svg": "7b47a5c8998cf9e8ecf50e2d151bf9e8",
"assets/images/frame_splash.png": "d3301a90220fcc79fd89711887582dd1",
"assets/images/man_1.svg": "d1484502620c2d18c687b5dea601b032",
"assets/images/khaber_launch_and.png": "3f8ff3d0a1b0f6917d2d88d260b64824",
"assets/images/aa.png": "3942e9e885d836014e62cee9929501be",
"assets/images/girl_10.svg": "86cfeefa8cf8526e60bcfdcdf6f5589f",
"assets/images/man_2.svg": "d6adcf7c607887f9b53c1c7a19709503",
"assets/images/welcoming.svg": "57e4ec2a1f7c1d006618e041af99e4b2",
"assets/images/man_3.svg": "50c2032c6711acde0a6cf91385bf713d",
"assets/images/vector.png": "c4a39cd0c6e85bd38f136119854491ee",
"assets/images/badge_rocket.svg": "9a657034fa3528e85ef076a7749af61b",
"assets/images/mail.svg": "32487b305088144499f6094885fac913",
"assets/images/splash%2520screen.png": "fbbda6834318984338afc59b3eefd740",
"assets/images/onboarding2.svg": "e4706eeb603e0fc102224c9fb0fbb686",
"assets/images/badge_star.svg": "1807f3ed979c417ad065bbac9104dea6",
"assets/images/onboarding3.svg": "7702c62caddb7359da0e941136e44873",
"assets/images/check.svg": "c529cfb04103203e3df8649dec0cc217",
"assets/images/Star%25201.svg": "97023343bad0f5cc569c40cd6ed06847",
"assets/images/update_app.svg": "a00f9d52e598d1bf284fe81fad2d89a7",
"assets/images/phone-screen.svg": "9628c882e7f9729672f38ea5a029abcd",
"assets/images/bookmark_empty.svg": "bd5e1c03c15b71efad28761725e6d054",
"assets/images/No%2520notification.svg": "d639569d214a0cac0a7ecb213a583357",
"assets/images/no_internet.svg": "5d21b80a4cba2b2d8b9defbde6c759f4",
"assets/images/onbording1.svg": "458900a596ca21e8a92ed15d071b9d80",
"assets/images/badge_new.svg": "37caba74fb8e7a8e861003cc93478a2a",
"assets/images/allow_location_access.png": "cda305145ed6f69f25d3387bc5c23199",
"assets/images/add_picture.svg": "4f4ccff43e1d50e595f8ac9a522a4ef0",
"assets/images/phone.png": "b4246cab984b80cf90bea5b5f2a43d25",
"assets/images/girl_2.svg": "cf516e35446ea6143bff4dcab7585348",
"assets/images/search-not-found.svg": "ac0e7091dbbff384a208721d7bd50f5e",
"assets/images/girl_3.svg": "14d8564d340e9ddb471ff6ea3645429e",
"assets/images/girl_1.svg": "91a48a548fe6ceb30a193deba78c35c1",
"assets/images/location_frame.svg": "51305c6dad221c069cf3e3cd67fd3be5",
"assets/images/allow_location_access.svg": "c4abee76d3e68f3e421c51410aa09804",
"assets/images/rocket_1.svg": "bc64fb3651b7a430f10df9951e4bc6ac",
"assets/images/location_not_found.svg": "00b948cbead1033f3ea12617b86e4b0e",
"assets/images/girl_4.svg": "51ac784ec102884db52e90b7290d1939",
"assets/images/girl_5.svg": "0fdf6b30ea2894e694446ba18d123953",
"assets/images/girl_7.svg": "83636f4788ad76901ae06fc7fbd56f97",
"assets/images/girl_6.svg": "cc723f0cb4b2d6bc0176e896237e334f",
"assets/AssetManifest.json": "f1b3ee4c2ce460d781b2d05cabeb9538",
"assets/NOTICES": "4d444705b809a5bfaa95b39d3be1b016",
"assets/FontManifest.json": "bec765010068c6cf065caeda76da1239",
"assets/AssetManifest.bin.json": "c1df672f1c63a1f978fddcef5f92bb3f",
"assets/icons/profile-delete.svg": "51c5d34987bc9bf5f129f7ab0530c55a",
"assets/icons/search.svg": "51f931ed906207bdd6c6673472c0cdc4",
"assets/icons/arrow-down.svg": "c4c7badd875ee4735c94194d6510cf1c",
"assets/icons/down_vote_outlined.svg": "b9239046fabed4e89c2edbf12682c016",
"assets/icons/edit_profile.svg": "974163fbde189ab190123d539d9605a1",
"assets/icons/telegramApp.svg": "967c722ce888fc394e00a71c7fe60810",
"assets/icons/delete_post.svg": "615a94b769bdc6ef02ea2a388384e2fb",
"assets/icons/reply.svg": "be48d5b5c6b17ed4bf832a1507fd58e1",
"assets/icons/home.svg": "d8120243214364481e014b3365329a3c",
"assets/icons/logout.svg": "4e119f03f27a0338db6b5570962fa371",
"assets/icons/cancel.svg": "b0749375c16d6c21333a12a9981964bb",
"assets/icons/bookmark_bold.svg": "619fbfb51c87b2a2b129874074f1ac78",
"assets/icons/linked-in.svg": "d5f7c7d17e2f81fe2beb9257f47008c9",
"assets/icons/up_vote_filled.svg": "34e97e0ec673976b0d493712ad656563",
"assets/icons/magic-star.svg": "c09b89241c029a11c3bb823aeb29155a",
"assets/icons/shield-tick.svg": "ba0f1d8c808768d85242047270b6549d",
"assets/icons/send_arrow_disabled.svg": "57ff82ca0a1932a2d383058ae61e724c",
"assets/icons/x.svg": "e7d64527eb4e8dfa9208a041c70fae79",
"assets/icons/send_arrow_filled.svg": "31bf958dba89698978c7c3c004f69162",
"assets/icons/arrow_left.svg": "96eba97de15a86cf745b5940c06de596",
"assets/icons/instagram.svg": "c46a5262aa6b1c8f0d29aba9fe22d1f1",
"assets/icons/down_vote_filled.svg": "3828ba37297e02fe7dc502129ab49373",
"assets/icons/gift_filled.svg": "7a20bd959378556613649ffa763f4678",
"assets/icons/flat-color-icons_google.svg": "59e23af47a6fecc7590ce5d8d8567844",
"assets/icons/gallery.svg": "fa8c2c6955c0e4ac1bc90d2ed1f273c3",
"assets/icons/pin_bold.svg": "849fbfd7ae273f5737734480b1e5d130",
"assets/icons/gps.svg": "01b409d6097cd205ce228bb06775671a",
"assets/icons/search-normal.svg": "34e119c026a5a6a187b53a4ae0df6b8f",
"assets/icons/reaction.svg": "1a21c3e6128e782de1a35e78d4254d27",
"assets/icons/message-tick.svg": "4eeb7f6a5db194813c0029dd2e1feca7",
"assets/icons/plus.svg": "d5eb5a7d14511df3a4fa3a292575afee",
"assets/icons/up_vote_outlined.svg": "988c7db475b052f5ad96a7e08ab3ca4a",
"assets/icons/close.svg": "4f3be9d2ee6c3e0d8afe9254a20d107b",
"assets/icons/people.svg": "66b5ff2b0b06c3ecca27482d508f19f9",
"assets/icons/no_result.svg": "c09e1c01207bf8521ae2b27cbb57b361",
"assets/icons/mage_email.svg": "7575a25b9db07f420a91039c097697d5",
"assets/icons/red_heart.svg": "889f396945fca993fe0d6a1e8f6d03f9",
"assets/icons/setting.svg": "c6b059c86c38945f18a884b65b178bac",
"assets/icons/play.svg": "3c016d61b2717daad60c51312a96cb30",
"assets/icons/notification.svg": "064d297ed9c56176a7a1a94508072ffd",
"assets/icons/ic_baseline-apple.svg": "44a31902f07532df1e6b089310a1d947",
"assets/icons/send.svg": "50bab9afae4bfe40e072996fdd5a954d",
"assets/icons/document-text.svg": "d57e61b6c5e1cb2f40ca7dbdfb0948d7",
"assets/icons/camera.svg": "a59b5232931718176563327c7a1f648f",
"assets/icons/whatsapp.svg": "e9c321892850956c334ffc2322d97a9e",
"assets/icons/repost.svg": "73e54066b7cb45d618e56d53bd09d370",
"assets/icons/down_vote.svg": "8ee096abe3acd8e21b079b9769626b43",
"assets/icons/personMan.svg": "613d6c349d06341153a20364d70dc9fa",
"assets/icons/eye_slash.svg": "414cb2d9da3aa76680ab495b8d25ad82",
"assets/icons/message_filled.svg": "4eeb7f6a5db194813c0029dd2e1feca7",
"assets/icons/message_with_badge.svg": "fc3b5f942c2ee5bcd613e199f00ece43",
"assets/icons/notification_filled.svg": "dd922b75f51f64f0f4a1414e96691858",
"assets/icons/add_reaction.svg": "c89a46ca7987f6b29bbcaeb2ae8b4130",
"assets/icons/eye.svg": "777bd69ad90b12f1349af63d2e5bf6de",
"assets/icons/location.svg": "186636f63f553475b70dee63e21bb1d3",
"assets/icons/gift.svg": "7a20bd959378556613649ffa763f4678",
"assets/icons/profile.svg": "7ed2c7681c1369125c926d5f860588d7",
"assets/icons/share.svg": "acd7b411ae1284f71a8c1d13eb46b882",
"assets/icons/arrow-up.svg": "7b1f4b1f3abafb3ffbde63563c8212b2",
"assets/icons/green_check.svg": "2f533415f7c22c4425276ecd455eed97",
"assets/icons/solar_check-circle-linear.svg": "01da8470ca5c7ab30a09af1d0e75bc77",
"assets/icons/menu_three_dots.svg": "4f5c33cc45df581efe5f219e54852660",
"assets/icons/profile-circle.svg": "0cf20f1d548214c8e00c2ed4fb142313",
"assets/icons/lovely.svg": "acd769abae148c4dd14b6de93fd17e40",
"assets/icons/bookmark.svg": "133125d33ccfd6aa429eea275b052b9d",
"assets/icons/happyemoji.svg": "d20132cee92c0169a04845fd73a379b0",
"assets/icons/report_post.svg": "2853ea543d46ad9d3ad4a99da4c93bd2",
"assets/icons/bookmark_filled.svg": "387448e349d147e878f67b09b10bba3b",
"assets/icons/tiktok.svg": "28a303d720f0aceb961a21c138e5fbac",
"assets/icons/message_tick.svg": "4eeb7f6a5db194813c0029dd2e1feca7",
"assets/icons/notification_outlined.svg": "cf6f6cd58b43873253c553757a26f086",
"assets/icons/up_vote.svg": "e490b1e0ba128a14a2c6fc51a39ad431",
"assets/packages/photo_gallery/images/grey.bmp": "3c1df92d469b25a207c3d1af665aafd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "6b16a7599498f5cabcfe77ed03fe6be5",
"assets/fonts/BalooBhaijaan2-Bold.ttf": "1ae77d2b8fb1307d213babf9d06ce2a7",
"assets/fonts/BalooBhaijaan2-ExtraBold.ttf": "07814e2525694e8b77e6aae7ad8886b0",
"assets/fonts/BalooBhaijaan2-SemiBold.ttf": "db6b9b77c144af0f7a22cb0be58133c9",
"assets/fonts/BalooBhaijaan2-Medium.ttf": "eb70eb48d568ed7e0d82b981798a66bd",
"assets/fonts/BalooBhaijaan2-Regular.ttf": "74bc067fc22ced25987e2794ef5c3b71",
"assets/fonts/MaterialIcons-Regular.otf": "6a869a7461ed6f7d45669eb758c05cfe",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
