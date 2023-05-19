if (!self.define) {
    let e, i = {};
    const a = (a, s) => (a = new URL(a + ".js", s).href, i[a] || new Promise((i => {
        if ("document" in self) {
            const e = document.createElement("script");
            e.src = a, e.onload = i, document.head.appendChild(e)
        } else e = a, importScripts(a), i()
    })).then((() => {
        let e = i[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e
    })));
    self.define = (s, n) => {
        const c = e || ("document" in self ? document.currentScript.src : "") || location.href;
        if (i[c]) return;
        let r = {};
        const d = e => a(e, c),
            f = {
                module: {
                    uri: c
                },
                exports: r,
                require: d
            };
        i[c] = Promise.all(s.map((e => f[e] || d(e)))).then((e => (n(...e), r)))
    }
}
define(["./workbox-588899ac"], (function(e) {
    "use strict";
    importScripts(), self.skipWaiting(), e.clientsClaim(), e.precacheAndRoute([{
        url: "/_next/static/A0CLjZbWwOO4ih0Jejayn/_buildManifest.js",
        revision: "70b9b496c4c03996e2a86c9706d5beeb"
    }, {
        url: "/_next/static/A0CLjZbWwOO4ih0Jejayn/_ssgManifest.js",
        revision: "b6652df95db52feb4daf4eca35380933"
    }, {
        url: "/_next/static/chunks/29107295-0d20c582bacf9848.js",
        revision: "0d20c582bacf9848"
    }, {
        url: "/_next/static/chunks/455-5e40de1e78118752.js",
        revision: "5e40de1e78118752"
    }, {
        url: "/_next/static/chunks/9f96d65d-666205840843f777.js",
        revision: "666205840843f777"
    }, {
        url: "/_next/static/chunks/fc83e031-2153026593ea2d31.js",
        revision: "2153026593ea2d31"
    }, {
        url: "/_next/static/chunks/fec483df-163cf84198745d3d.js",
        revision: "163cf84198745d3d"
    }, {
        url: "/_next/static/chunks/framework-36098b990598bc0c.js",
        revision: "36098b990598bc0c"
    }, {
        url: "/_next/static/chunks/main-df16527850b3fd5b.js",
        revision: "df16527850b3fd5b"
    }, {
        url: "/_next/static/chunks/pages/_app-bfa39b784a1e49d6.js",
        revision: "bfa39b784a1e49d6"
    }, {
        url: "/_next/static/chunks/pages/_error-409f831d3504c8f5.js",
        revision: "409f831d3504c8f5"
    }, {
        url: "/_next/static/chunks/pages/game-9cf01f3f48b63f2c.js",
        revision: "9cf01f3f48b63f2c"
    }, {
        url: "/_next/static/chunks/pages/index-1a74fb3e514ab858.js",
        revision: "1a74fb3e514ab858"
    }, {
        url: "/_next/static/chunks/pages/outstatic/%5B%5B...ost%5D%5D-1f61717797d2a1be.js",
        revision: "1f61717797d2a1be"
    }, {
        url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
        revision: "837c0df77fd5009c9e46d446188ecfd0"
    }, {
        url: "/_next/static/chunks/webpack-36d12a75f0098f30.js",
        revision: "36d12a75f0098f30"
    }, {
        url: "/_next/static/css/d0089d7fe1348e20.css",
        revision: "d0089d7fe1348e20"
    }, {
        url: "/_next/static/css/daeadd867b6a8d7b.css",
        revision: "daeadd867b6a8d7b"
    }, {
        url: "/_next/static/css/db66312a231385d7.css",
        revision: "db66312a231385d7"
    }, {
        url: "/_next/static/css/f2e291d0280f8c5e.css",
        revision: "f2e291d0280f8c5e"
    }, {
        url: "/_next/static/media/CodecCold-Heavy.147cb82a.eot",
        revision: "147cb82a"
    }, {
        url: "/_next/static/media/CodecCold-Heavy.54763b39.svg",
        revision: "54763b39"
    }, {
        url: "/_next/static/media/CodecCold-Heavy.868c6ffc.woff",
        revision: "868c6ffc"
    }, {
        url: "/_next/static/media/CodecCold-Heavy.d3032588.ttf",
        revision: "d3032588"
    }, {
        url: "/_next/static/media/CodecCold-Heavy.d44b723c.woff2",
        revision: "d44b723c"
    }, {
        url: "/android-chrome-192x192.png",
        revision: "21c219ba2de1b462b45cb31678048b1a"
    }, {
        url: "/android-chrome-512x512.png",
        revision: "ab29a8a514093c4dcebb83491b597a3e"
    }, {
        url: "/apple-touch-icon.png",
        revision: "8ec61171d00ddbf05795b8a73abb2155"
    }, {
        url: "/browserconfig.xml",
        revision: "b0df1d8364886483f481bc261ea8db4b"
    }, {
        url: "/favicon-16x16.png",
        revision: "f19303362f9f770594fed88948fa25d3"
    }, {
        url: "/favicon-32x32.png",
        revision: "3693eb784eaef2d4b22fb863035c9a49"
    }, {
        url: "/favicon.ico",
        revision: "aee172ce9ab0566fcc7799149afcd205"
    }, {
        url: "/favicon/android-chrome-192x192.png",
        revision: "8f778d7eb185aaaf620182e7d1a13510"
    }, {
        url: "/favicon/android-chrome-512x512.png",
        revision: "34fab9783b2c7f6b4210813d6bcc8592"
    }, {
        url: "/favicon/apple-touch-icon.png",
        revision: "5cfd0ed49367f0be8e90e1c105becdcb"
    }, {
        url: "/favicon/browserconfig.xml",
        revision: "a493ba0aa0b8ec8068d786d7248bb92c"
    }, {
        url: "/favicon/favicon-16x16.png",
        revision: "78d445355f65464ca36a2a47580270d6"
    }, {
        url: "/favicon/favicon-32x32.png",
        revision: "3cd689b62409d5666510ae85123d4f2e"
    }, {
        url: "/favicon/favicon.ico",
        revision: "c1c7f5b382e5a6ef4097ad94e9f680e3"
    }, {
        url: "/favicon/mstile-150x150.png",
        revision: "d20f91eb7ec7cd4f2d993719047004f9"
    }, {
        url: "/favicon/safari-pinned-tab.svg",
        revision: "ef4b43bcf699777aadee5857ef76a5a0"
    }, {
        url: "/favicon/site.webmanifest",
        revision: "19618b2da506b5d6afda538f1d41e15c"
    }, {
        url: "/images/00-min-ExOD.png",
        revision: "0e4f89b75ded70552d72aec269bab3dd"
    }, {
        url: "/images/01-min-A2ND.png",
        revision: "6da2cd7d1f72eb6d2ec7ae18714e00fc"
    }, {
        url: "/images/01-min-MzNT.png",
        revision: "6879a5608dcb8f54cf14a86a9c9625a0"
    }, {
        url: "/images/01-min-Q0MT.png",
        revision: "c8c7141221c60b85b9b4d8328b8af51d"
    }, {
        url: "/images/01-min-Q5MD.png",
        revision: "0bd0efe209d152f5e5d30dd250bb56e8"
    }, {
        url: "/images/01-min-U3NT.png",
        revision: "0c738dde3e45acda87e2d6ada7a297f8"
    }, {
        url: "/images/01-min-UxMT.png",
        revision: "93caa136570e1746a457472b3712234a"
    }, {
        url: "/images/01-min-YxOD.png",
        revision: "48085635af9e1750981a6c1be9908353"
    }, {
        url: "/images/01-min-YzNj.png",
        revision: "c683714adb68fed46dfb6011b2ac20ed"
    }, {
        url: "/images/02-min-AyND.png",
        revision: "5b52f8544f53af8fb6f89956c3d09ec8"
    }, {
        url: "/images/02-min-IyMj.png",
        revision: "122e971420632a483dca6731b9ae17cc"
    }, {
        url: "/images/02-min-MzMj.png",
        revision: "9f9f047bcc732e10567ae561e4c6e124"
    }, {
        url: "/images/02-min-QwNT.png",
        revision: "c5648c25000b2358e4a1947c953dd86d"
    }, {
        url: "/images/02-min-cyNj.png",
        revision: "97cc3a97687e30f5ce8af70421653807"
    }, {
        url: "/images/02-min-g1Mz.png",
        revision: "87d99557eb30580aca2e296f40555281"
    }, {
        url: "/images/02-min-g5MT.png",
        revision: "77fc01606fdc1bd9aa1f855c8f9b63ed"
    }, {
        url: "/images/02-min-kyMj.png",
        revision: "18da03852dc0bf311ca2ba4d08900803"
    }, {
        url: "/images/03-min-M0Mj.png",
        revision: "64bf3d597e6a20353b715e6dcc211abe"
    }, {
        url: "/images/03-min-U5ND.png",
        revision: "7b4a0f1d1b900f9da69e9163fc6b0e78"
    }, {
        url: "/images/03-min-UyNT.png",
        revision: "67ebbc50adeb6b19adf73c417a85fd97"
    }, {
        url: "/images/03-min-YzND.png",
        revision: "a70124149829a89ef8904badea75636a"
    }, {
        url: "/images/03-min-cxMj.png",
        revision: "00f8770b1cf4a0cacc24b447e32c39f8"
    }, {
        url: "/images/03-min-g3OT.png",
        revision: "5f39a8006c65f1f00cece44fab18855d"
    }, {
        url: "/images/04-min-A2MD.png",
        revision: "f6d4a32c072807d80fe9e6117bd6223a"
    }, {
        url: "/images/04-min-M0MT.png",
        revision: "6cf333eac808cba673a5a40c4b7462f3"
    }, {
        url: "/images/04-min-M4Nz.png",
        revision: "d192a9bf1f0426d0f05588de6c3cc71f"
    }, {
        url: "/images/04-min-M5ND.png",
        revision: "51ba9debc6f2620404af35e8e896d414"
    }, {
        url: "/images/04-min-Q4OD.png",
        revision: "4f15a613822a2ebf24bf778170d7da79"
    }, {
        url: "/images/04-min-U2ND.png",
        revision: "cfc9b000d93df020a41e1cc99c7990fb"
    }, {
        url: "/images/05-min-I5Mj.png",
        revision: "ce5c809be763612c1985419a7ba79c4d"
    }, {
        url: "/images/05-min-Y5Mj.png",
        revision: "8e2502293cb42f1f09cd51512fd8ff18"
    }, {
        url: "/images/05-min-c0Nj.png",
        revision: "fe567f6d3bf11d6ad436ab531bc40466"
    }, {
        url: "/images/05-min-c2OD.png",
        revision: "e1f19bacc20787b233009b8bb1880805"
    }, {
        url: "/images/06-min-Q5NT.png",
        revision: "a07662ea2df5a22f72dd5e3566fb364a"
    }, {
        url: "/images/aleixo-min.jpg",
        revision: "8608a31baf2a3bc5d1d77523adc8491b"
    }, {
        url: "/images/arrow-right-thick.svg",
        revision: "1da6c165ac3c6c6d747d5f4c4812bc9a"
    }, {
        url: "/images/bearbnb.png",
        revision: "09a6ca4bb733aa82ae7ac9b8930f4f34"
    }, {
        url: "/images/codewords-min-A1OD.png",
        revision: "8a4317494819b2d5061aaf5b1271048f"
    }, {
        url: "/images/codewords-min-M0Mz.png",
        revision: "8a4317494819b2d5061aaf5b1271048f"
    }, {
        url: "/images/codewords-min.png",
        revision: "8a4317494819b2d5061aaf5b1271048f"
    }, {
        url: "/images/couple-pizza.png",
        revision: "d4dfd8f945b33017ae9111d1a05e8f51"
    }, {
        url: "/images/essia-min-QzNz.png",
        revision: "d9849802c1b9e0f3fb3d9653ea5d26a6"
    }, {
        url: "/images/flycream-travel.png",
        revision: "dcb34b82ce43118ad4beb7038f3823c5"
    }, {
        url: "/images/github-circle.svg",
        revision: "3cb963e92a204c0fd8b8296342e1bd96"
    }, {
        url: "/images/icon-hobbies-Q3Mj.svg",
        revision: "807ef2f77cff17160ccacc6489bed00e"
    }, {
        url: "/images/icon-music-YxNz.svg",
        revision: "5f5d16476040f0988eac45cc968aaacf"
    }, {
        url: "/images/icon-personal-A0OD.svg",
        revision: "3003cfec7a807ea868335503968488c6"
    }, {
        url: "/images/icon-personal-I5OD.svg",
        revision: "3003cfec7a807ea868335503968488c6"
    }, {
        url: "/images/icon-personal-QxMj.svg",
        revision: "3003cfec7a807ea868335503968488c6"
    }, {
        url: "/images/icon-skills-QwMT.svg",
        revision: "df09fe140886d7638bfa1fb7776dfdaf"
    }, {
        url: "/images/icon-skills-U0OT.svg",
        revision: "df09fe140886d7638bfa1fb7776dfdaf"
    }, {
        url: "/images/icon-skills-g1Mj.svg",
        revision: "df09fe140886d7638bfa1fb7776dfdaf"
    }, {
        url: "/images/industrial-pattern.png",
        revision: "3651375dd1031359f403b73151d2f7f6"
    }, {
        url: "/images/jupiter-spaceship.png",
        revision: "4d05775bbf3daf37bbb2d6104c635ba9"
    }, {
        url: "/images/krimi01-min-A0Nj.jpg",
        revision: "2026f5db58a5ba47258946b327583e47"
    }, {
        url: "/images/krimi01-min-MyNj.jpg",
        revision: "2026f5db58a5ba47258946b327583e47"
    }, {
        url: "/images/krimi01-min-Q0MD.jpg",
        revision: "2026f5db58a5ba47258946b327583e47"
    }, {
        url: "/images/krimi02-min-E1Nj.png",
        revision: "9b4ddddbab36a30e857d3a1c0e36f74b"
    }, {
        url: "/images/krimi02-min-U2OD.png",
        revision: "9b4ddddbab36a30e857d3a1c0e36f74b"
    }, {
        url: "/images/krimi02-min-g1Nj.png",
        revision: "9b4ddddbab36a30e857d3a1c0e36f74b"
    }, {
        url: "/images/krimi03-min-E2MT.png",
        revision: "6f30aba575515fc32b8a2fad588744f2"
    }, {
        url: "/images/krimi03-min-Y5OD.png",
        revision: "6f30aba575515fc32b8a2fad588744f2"
    }, {
        url: "/images/krimi03-min-gzMT.png",
        revision: "6f30aba575515fc32b8a2fad588744f2"
    }, {
        url: "/images/krimi04-min-IwNj.png",
        revision: "a3e8d1ea57957b934f929e14347b492c"
    }, {
        url: "/images/krimi04-min-U0OT.png",
        revision: "a3e8d1ea57957b934f929e14347b492c"
    }, {
        url: "/images/krimi04-min-U3Nz.png",
        revision: "a3e8d1ea57957b934f929e14347b492c"
    }, {
        url: "/images/kube-min-g5NT.png",
        revision: "7f6bf000e8bffe4b457302a46b6f2ce4"
    }, {
        url: "/images/linkedin.svg",
        revision: "308e05c91a02be55e39532379e024c58"
    }, {
        url: "/images/logo-dark.svg",
        revision: "c3d86ffb0ad8a307441a991c54d1af77"
    }, {
        url: "/images/logo.svg",
        revision: "3cafb4b9b5bfa0dea8437082d0bd6d09"
    }, {
        url: "/images/loodo-min-c0MD.png",
        revision: "8f57f7fa5507012a398869e0957310d4"
    }, {
        url: "/images/ludoratory-min-A5Nj.png",
        revision: "b6c9948add4a2d78120c9b31d94b8a9f"
    }, {
        url: "/images/ludoratory-min-E2ND.png",
        revision: "b6c9948add4a2d78120c9b31d94b8a9f"
    }, {
        url: "/images/ludoratory-min-kyOD.png",
        revision: "b6c9948add4a2d78120c9b31d94b8a9f"
    }, {
        url: "/images/lumis-min-Y3OT.png",
        revision: "50b26fd3bde5b0e64f01cab7fa91d35b"
    }, {
        url: "/images/lumisxp-min-k2Nj.png",
        revision: "4829dda8e6bc810e6948bb13a4ced497"
    }, {
        url: "/images/marriage-min-IzNj.png",
        revision: "d033295c941e48a3daa3b651a773fcab"
    }, {
        url: "/images/medium.svg",
        revision: "1c0b2ee87eaa239e8adfa9924acc0b57"
    }, {
        url: "/images/mppa-min-cxMD.png",
        revision: "1828a433e4d6c5b3db887fb0d9c46138"
    }, {
        url: "/images/og-image.png",
        revision: "eb1d44cb8169b2a557ea91f3d0003d3e"
    }, {
        url: "/images/raphael-aleixo-Q1Nj.jpg",
        revision: "52960c4959cd32fe71fad308c56c6a14"
    }, {
        url: "/images/sg-A1Nz.png",
        revision: "5167c9cfe960e26f5e80babf23a12d6c"
    }, {
        url: "/images/sg-E4MD.png",
        revision: "5167c9cfe960e26f5e80babf23a12d6c"
    }, {
        url: "/images/sg-I5ND.png",
        revision: "5167c9cfe960e26f5e80babf23a12d6c"
    }, {
        url: "/images/sg01-M5Mj.png",
        revision: "72bd740eee71b3ba34713d35bf44e65e"
    }, {
        url: "/images/sg01-UxND.png",
        revision: "72bd740eee71b3ba34713d35bf44e65e"
    }, {
        url: "/images/sg01-UzOD.png",
        revision: "72bd740eee71b3ba34713d35bf44e65e"
    }, {
        url: "/images/sg02-dm-min-Y3OT.png",
        revision: "d0ce8ba719b14570ac73ccabf091f2d3"
    }, {
        url: "/images/sg02-dm-min-c2OD.png",
        revision: "d0ce8ba719b14570ac73ccabf091f2d3"
    }, {
        url: "/images/sg02-dm-min-kwND.png",
        revision: "d0ce8ba719b14570ac73ccabf091f2d3"
    }, {
        url: "/images/sg02-lm-min-I0ND.png",
        revision: "b4fc862adff49e71d87c753b5d82c3d2"
    }, {
        url: "/images/sg02-lm-min-U1MT.png",
        revision: "b4fc862adff49e71d87c753b5d82c3d2"
    }, {
        url: "/images/sg02-lm-min-gwND.png",
        revision: "b4fc862adff49e71d87c753b5d82c3d2"
    }, {
        url: "/images/sg03a-min-U4Nj.png",
        revision: "dabca76943769b3aa5b2a0dbfd515fb7"
    }, {
        url: "/images/sg03a-min-c2OD.png",
        revision: "dabca76943769b3aa5b2a0dbfd515fb7"
    }, {
        url: "/images/sg03a-min-kzMD.png",
        revision: "dabca76943769b3aa5b2a0dbfd515fb7"
    }, {
        url: "/images/sg03c-min-EwOD.png",
        revision: "9d6816db2afd60bdddaf9daa8f68ef88"
    }, {
        url: "/images/sg03c-min-cyNz.png",
        revision: "9d6816db2afd60bdddaf9daa8f68ef88"
    }, {
        url: "/images/sg03c-min-g5OT.png",
        revision: "9d6816db2afd60bdddaf9daa8f68ef88"
    }, {
        url: "/images/sg03d-min-Q1MT.png",
        revision: "6e0d9fe55762b98a939b47567010c975"
    }, {
        url: "/images/sg03d-min-Y3MT.png",
        revision: "6e0d9fe55762b98a939b47567010c975"
    }, {
        url: "/images/sg03d-min-gxMz.png",
        revision: "6e0d9fe55762b98a939b47567010c975"
    }, {
        url: "/images/sg03e-min-I3Mz.png",
        revision: "4c3f5e0d0a146018b0e272196daa987b"
    }, {
        url: "/images/sg03e-min-IzMT.png",
        revision: "4c3f5e0d0a146018b0e272196daa987b"
    }, {
        url: "/images/sg03e-min-c4MD.png",
        revision: "4c3f5e0d0a146018b0e272196daa987b"
    }, {
        url: "/images/sg04a-min-YzMD.png",
        revision: "b415047cdb0424f90f9f8cecca7bdc84"
    }, {
        url: "/images/sg04a-min-k0NT.png",
        revision: "b415047cdb0424f90f9f8cecca7bdc84"
    }, {
        url: "/images/sg04a-min-k1Mz.png",
        revision: "b415047cdb0424f90f9f8cecca7bdc84"
    }, {
        url: "/images/sg04b-min-E2OD.png",
        revision: "73ca38a7d90f8d49299cb004c91d1c7f"
    }, {
        url: "/images/sg04b-min-E5Nz.png",
        revision: "73ca38a7d90f8d49299cb004c91d1c7f"
    }, {
        url: "/images/sg04b-min-Q4ND.png",
        revision: "73ca38a7d90f8d49299cb004c91d1c7f"
    }, {
        url: "/images/sg04c-min-I3MD.png",
        revision: "5514209dc0a27725648f79efd10955e2"
    }, {
        url: "/images/sg04c-min-M5NT.png",
        revision: "5514209dc0a27725648f79efd10955e2"
    }, {
        url: "/images/sg04c-min-YxOD.png",
        revision: "5514209dc0a27725648f79efd10955e2"
    }, {
        url: "/images/skyline.png",
        revision: "f3293de30c669050c0fd9a364066535d"
    }, {
        url: "/images/twitter.svg",
        revision: "3af8eb4080c65d4919ddaf527a9d4313"
    }, {
        url: "/images/up01-min-QyMT.png",
        revision: "8401a59a6685e1bf0243ced6acf7e979"
    }, {
        url: "/images/up01-min-U0Nj.png",
        revision: "8401a59a6685e1bf0243ced6acf7e979"
    }, {
        url: "/images/up01-min-UyOT.png",
        revision: "8401a59a6685e1bf0243ced6acf7e979"
    }, {
        url: "/mstile-150x150.png",
        revision: "5c1919147b40be589d539e2f8bd5b14c"
    }, {
        url: "/raphael-aleixo-cv.pdf",
        revision: "38622ae6f188d1324e2a38df2f6f82c5"
    }, {
        url: "/safari-pinned-tab.svg",
        revision: "491c6bb1fa0b9877a65d0277ce1760d9"
    }, {
        url: "/site.webmanifest",
        revision: "7e743a43e6fd90a517b1cac984eb7754"
    }, {
        url: "/social.jpg",
        revision: "16fef35ae34722dbaff52c2461995c8f"
    }], {
        ignoreURLParametersMatching: []
    }), e.cleanupOutdatedCaches(), e.registerRoute("/", new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [{
            cacheWillUpdate: async ({
                request: e,
                response: i,
                event: a,
                state: s
            }) => i && "opaqueredirect" === i.type ? new Response(i.body, {
                status: 200,
                statusText: "OK",
                headers: i.headers
            }) : i
        }]
    }), "GET"), e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i, new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 31536e3
        })]
    }), "GET"), e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i, new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 604800
        })]
    }), "GET"), e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i, new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 604800
        })]
    }), "GET"), e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i, new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400
        })]
    }), "GET"), e.registerRoute(/\/_next\/image\?url=.+$/i, new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400
        })]
    }), "GET"), e.registerRoute(/\.(?:mp3|wav|ogg)$/i, new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [new e.RangeRequestsPlugin, new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"), e.registerRoute(/\.(?:mp4)$/i, new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [new e.RangeRequestsPlugin, new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"), e.registerRoute(/\.(?:js)$/i, new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"), e.registerRoute(/\.(?:css|less)$/i, new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"), e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i, new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"), e.registerRoute(/\.(?:json|xml|csv)$/i, new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"), e.registerRoute((({
        url: e
    }) => {
        if (!(self.origin === e.origin)) return !1;
        const i = e.pathname;
        return !i.startsWith("/api/auth/") && !!i.startsWith("/api/")
    }), new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({
            maxEntries: 16,
            maxAgeSeconds: 86400
        })]
    }), "GET"), e.registerRoute((({
        url: e
    }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/")
    }), new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"), e.registerRoute((({
        url: e
    }) => !(self.origin === e.origin)), new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 3600
        })]
    }), "GET")
}));