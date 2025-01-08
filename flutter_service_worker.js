'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b59829627cf2542213fc6c2213bfcb3b",
".git/config": "f14fcc388f1a7c03bc17d93c0fd96aa9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "364ca7792f0853ea2d73c4210b79ca9f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7a02837620a80eeae1f08e5f1ea334c5",
".git/logs/refs/heads/main": "9119bf987bbca72477d7db3e1893ff2b",
".git/logs/refs/remotes/origin/main": "f675107b85af7551638ce57127d2ff16",
".git/objects/01/7ffb1de54df9e4e8e0419937f0a39cd0365726": "3bfc4793c35c502931397df62076ff34",
".git/objects/03/2080470f0d116c0c04d85f2ddc5968d1b2bdc8": "a31f731363d6e3c4559a7ce6ea0fea08",
".git/objects/04/18265a569a194ad57c0ed6ccb5ad594b85b824": "351ba27c2885286ac13f817ca72484ca",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/09/9f7a1a74f7071be74736dc212be3a168a44018": "066516b4ebb5cf47d7de07c56ff186b5",
".git/objects/0d/96e661e1f7b075a157e367440f783ce850bf09": "d39ecc8e91fa5ce1b4b2e433cb0c4dda",
".git/objects/13/59dc8c729d37747c81e7531e3c59f1f0785444": "670a1a448c8ed59ea51c9dcab30748d8",
".git/objects/19/7e68caa04cd0b009cd44bc8333768d7bea07cd": "1ceeed2a30bc821dd9fffbdf6a10382b",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/23/fe3fa837587bfde7e4b38a997283bb12b59fa2": "fe531751c98341dc87fa11db90fa61af",
".git/objects/25/7b2dcb50e58bd3ed9b185c33703b34f64f6f6f": "f4fc56afabf520e225af8051e00456e5",
".git/objects/26/3e6c30bebdcab9a8c202ceb6c0f4f1f1bc94f4": "3cb09c22ba3e76495648306f8d45f9af",
".git/objects/26/ee60cbbba010b879e8bb25afc9e432e2dc1853": "7d4f61f3e54dbd14ad4cc7522a80df0b",
".git/objects/29/42f5238774a510ce16d0b6c627339666019641": "aa2f5cb3eb7fb377c7628b193b4457e7",
".git/objects/2b/cb137a8b4a4d343f2f10877621d5927827f22f": "f3a20ad5a8477773455351993cb8f291",
".git/objects/2c/e7f0348d75464fbccfe9987579480a6873b989": "f408461433278e5d63231be7b68e3ed9",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/975c6c9ccdf1afa16d758be405eca65d0b8e9f": "35090c6a232148f032ff993b31390597",
".git/objects/2d/dfa41411d810c542f469ab2ea08789f6c61e0a": "71c8902e91d1a01eb227d88c1c9c7291",
".git/objects/31/166c95d2e146b02857e83ccf62d33662bd53d0": "6930b7388e2244d6ce36ca2a30b893de",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/33/4441f085a51dbb6084606bf92f683d072d3cbb": "872cbdc6d14449328f0f39a9be2ec6c4",
".git/objects/34/ceaf0ec45dd5f165d0e38d05a85246cbec81ca": "2c996a9693e5711df8ea13f28d43721d",
".git/objects/38/ca7603cc88e5b2005e9dafa41cacd4bacfb6d7": "549f91f9b0c43e0fd84f2d6d8dd4df0f",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/40/d5328f4dce2e19a412616857154e8a2af2bc63": "fa470fbfc8383eea49fb9a68d1310f52",
".git/objects/41/0b1bf1b7fb6307668512a60b0cb6deab3b45f7": "dc4556ca872261baa7ded65ec2a6db61",
".git/objects/41/258a2a9aeda02c6eaa3db8480eeb4bff1c6087": "27bcf8a70356e60596b1a229f94b0857",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/4537e3c0358e84f341b75059e0ca5fc9a01d0b": "5a2d46d4524c89c324e3acd72adc14ef",
".git/objects/49/5b57ab6db3a192edaffbb39c82b54efeb27a4d": "13d184bf6f4adbbadf8fddb688999c47",
".git/objects/4c/9e112257054c03cbbd7022dfa225be39184ebf": "71229e0785ac02a85a263f3d0737315c",
".git/objects/56/667ffc49aab2059816689edbab6296b52c5e3c": "4d6c95d3e4565e14924319dc373ca786",
".git/objects/5e/e397aeea783c9fda7e5ab7394e842c4178412c": "241118b0d94d67f04613dd26387f32d6",
".git/objects/60/601d7ec680d861b249d249cfb7223c98d9702e": "954996d9045ba0cdc15779e8eccaeea5",
".git/objects/64/8feb985e1a8c862ccf674262defb0e43aca59e": "eecc3861df4407d257ed629d7c11633a",
".git/objects/67/2161d24c68c265a733c14d7b3b89add0c1785e": "4a5ebafedacb2774e3bcff8fd6ce890f",
".git/objects/69/af4c6571670665a9581fd47f249a4f5e691553": "37d7bbd11d130f789a9927053f4ae8d0",
".git/objects/6b/a02e0bc4b58fec26039ebd19cf61af22d60b7b": "e649132cc20fb7ea01416ae43004759d",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6c/6a0c678fb0a52cd9baf0384fba507b51aeb55b": "397df7bfba8b6fc1cf5202fdb0403c4d",
".git/objects/6d/70a8f31eb0d13d08c9e491ffe66f9d8a8e22aa": "2158d168226d284462b285e239eb90ba",
".git/objects/71/27aa8629ca756098a3265d8f08f00d427133b7": "fba479886d12fb6f38be02bbc4518be2",
".git/objects/7f/6a76d615229e7460dbb8b959aa7c5d9d9225d6": "c10ff34e20d61558652af15e4d9cd004",
".git/objects/7f/ca6305710a2467e762c3b474f0c2ebee8082c1": "ab5615cbe866e169a302a5a1470939b1",
".git/objects/81/c9097f666450b3f5dc83c253ac921789758559": "bb26e9c5df7e7a34358b898615a68e61",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/2207f861475609b0dd63a58a41407757accd92": "b5fa4876bb79a3a963d1618f87c7ca91",
".git/objects/87/60307d8e148238508b81b47f339b8da232abf1": "cf92dd2f9d5061153855057e32a1fe05",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/83400ccbacb54320038b58c5c970123c1f636e": "6a42c54edde5a280889aeaf20545075a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/fc763d1cf52c1efc30db8af2af2fa1fbb33f21": "61eec67b79f0d8881d990bb4dc194a61",
".git/objects/8b/d06bd75f1d04f3304fa178d1ffe632ae441305": "cd3b46cba9de16a646ef8176234816d4",
".git/objects/8f/e8f0295cb43c5622c6923e294a7c891faa80c6": "e496444122b89241c025bef72d0cba2f",
".git/objects/90/400fa5cd62409c8c423ee284aacd3d6c87c99f": "c641ae90ae8a57334b1361ecbe08d5fb",
".git/objects/90/9d3705a943f013d885663d41eb8aeacac8bd88": "cf313f06faa184baae27a90cd38d4246",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/93/fd6beb3faea8614a8db0883fdad00bdbb63c86": "1a0098c2fa309393dbd093fdbd9668be",
".git/objects/95/6770d60dc3e1df59dab503d2185c91b307a330": "601142459b79c2cfd51eda8dbaed5942",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9b/81aa8121c3e50c557ed050752ad2ff2979560e": "1a7fa7b7357ebb594cca57168d53addc",
".git/objects/9d/af42319ff9102d7f55c5b2dcb266181b2b9662": "99dd9f7ba74b7cc7ac92f9287a1de297",
".git/objects/a2/6d36671d22904c66d2c3850e1901270efb6f18": "12157e3e870479bbc9a006c375cf9e16",
".git/objects/a2/9ba25a933ec958201be675a04f4b2c28000268": "b5f161a6bf6e9fa0a9ebad172a17656b",
".git/objects/a6/a4dc8539ae6530264a98c6d7614cdbe5206183": "2d3c5dbc4c8403a285ab29a0ec9073ff",
".git/objects/a8/a4d9b99121490ade1d188cf0236ef96c9abc61": "f78734f2fef36afd639f7d5ba1fbed74",
".git/objects/a8/faa14149478dfc1e23ff79f45eb0893796eed0": "dbe3d6fc29ff45b83355de5501b2c3d0",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b2/886414c32dc43ddf1b6673cd44f9a876377b93": "b515c0da0d2303d764a376c7a49cbf25",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/99c7d9e0138ed52309c5e9ccb66f833bbfb3f8": "11751bb5599e5840108835782bdb6f75",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bd/7ff1513188e6d9118bac0dec5b6eec9d5d833f": "9d85b3955df52c0b7cfd1bbbcee5d345",
".git/objects/bd/b53971994e40dba4b46a3ffd8cdc258fd35e3c": "4f13a527131a6bf03055c5cf3e024c2a",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c7/878f803458b9256cc12b0f579cd2cd72008936": "31de90e795eb47dd6ed3569e018187da",
".git/objects/cb/c5d1255c0eced0e2cd293252d828ca1584655f": "000b5e3c8dc1e478bfa6b8e4078270ea",
".git/objects/cb/eef0c072ccb12fd7ad9cb3cff454306e78dce7": "958429f251828ea541877c511490aeb5",
".git/objects/cc/be5db0941be996c796ea931648ccc8476540ac": "4643810fce202242819e9e77340d143b",
".git/objects/ce/aa6381478b4158f1c917c4df6ffe374355ab74": "ce2479f67df51bc62dd58676d658780b",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d1/ece8ac3fee2c5aec162c724fde2a3b9edf199a": "827a45a0720b8ee51d4f3f0f478815f2",
".git/objects/d2/bad288aaa642fee28bbe17860cca169039affc": "220871d0294d7b94c697cebbdcd7b94e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/1ce847f10f81487a5b944e430092df5c2ee789": "f9e1b004a1d285998ee8d8f91dc2a42c",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dd/575eda78235f96bb2e8c574a2511bde8dedd34": "c2da727d57bd5a652f0b477aadcb0adc",
".git/objects/df/19b0eed74126dfe3cd0044a782267fb380ff32": "f0c9cb3217aa855e83889f2a52d4d63c",
".git/objects/e9/14b34fb3c58ec2d8ffde0fe4e052ba482e9a91": "d7b02c611e2a881c3b40dd2395922d3e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/b9637c27a916f48d536c88e37217199ac97e61": "638121af6417fb4aa175edb306415aac",
".git/objects/ef/49da3d998cfc3a141d9441aed494a9ed7ee794": "e9fca8309f0f5e838ce9d821622f6b5f",
".git/objects/ef/bdd135d4cbe647c0b94f67eafe3ec80c7e24e5": "29133c2fc226fc7a05d9f5bbbc8317de",
".git/objects/f1/d6978d7c9f45d5aa7c2d43d096da273c066aa6": "bf24717f2927f18489a6fe85aac960a8",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/e1d97c56f61b99e2ffd71ec7ff3645c967ed68": "c551356d5b16c89672a5d8918fe29e0a",
".git/objects/fb/7eceee4a7317c9887494e05b2b25434f88edc0": "526fe596def2b87d9e1277b57af8dc23",
".git/refs/heads/main": "696bc351dc44229c03021539de976554",
".git/refs/remotes/origin/main": "696bc351dc44229c03021539de976554",
"assets/AssetManifest.bin": "9335708d4372b393a9304ecea139f041",
"assets/AssetManifest.bin.json": "c3547e9f2498cd5c539ca0e6ebc11faf",
"assets/AssetManifest.json": "1c02ea0971ad785686b725f136ae6c59",
"assets/assets/images/0.png": "43fda0543734db675b61879133646d33",
"assets/assets/images/1.png": "7d76030b48b4137e52c389c94d7e727e",
"assets/assets/images/1024.png": "8904d4b959eed355ad68230cc00786ce",
"assets/assets/images/2.png": "113683ed703dc03a13f1209a468d2ea4",
"assets/assets/images/3.png": "45b788294c10e2dfad04ac69331ef962",
"assets/assets/images/5.png": "82994bfe526eca49beb1df53b32c8d94",
"assets/assets/images/apple_icon.png": "0df359eee7e7e79e5b23785b23430ca7",
"assets/assets/images/banner.png": "9ccc57c66dce422bfddef3cef359d527",
"assets/assets/images/bean.png": "26b4e64f63cd9672d57749ce717dab8f",
"assets/assets/images/bg-splash.png": "06bccad77a7a03cf9a4cd48d866d1971",
"assets/assets/images/bg.png": "dfeee82bf13255b57e1b59b6ddf01501",
"assets/assets/images/bike.png": "e63fb456071bd4b923dbe6b25e84943a",
"assets/assets/images/cat1.png": "f7e6f4d0c2e74e6a9671d2b508b5e284",
"assets/assets/images/cat2.png": "2debc5877bf380865bb09d9df6ed7289",
"assets/assets/images/cat3.png": "e7c114b3d811dfcf4010d7d01efe77fe",
"assets/assets/images/cat4.png": "6d9359e43c7a15bc8d31ba833b4898a6",
"assets/assets/images/cat5.png": "5d7d983d93143e15b93b8dfe8a97aa5e",
"assets/assets/images/cenil.png": "39cfa84352c882d653f7cd34428745ab",
"assets/assets/images/coffee.png": "9e50176aa274759b4c6558b782891be4",
"assets/assets/images/coffee1.png": "6eecd9280dfe82c3db6ffdf55404e34e",
"assets/assets/images/coffee2.png": "42d2628e7ce0faad9900c412ad110e84",
"assets/assets/images/coffee3.png": "c51fee126103578a37896d40c11756ff",
"assets/assets/images/coffee4.png": "364efcb9e37228499d4b1749440a5b72",
"assets/assets/images/default_pct.png": "434de483f91017579f1beb3090084293",
"assets/assets/images/drink.png": "12be6f741a94158388b97fbb78f29bf7",
"assets/assets/images/esteh.jpg": "7a3fb101f4036758e723d305316b63da",
"assets/assets/images/facebook_icon.png": "2c38e55047a1cfdeb0414c98bfd26b83",
"assets/assets/images/Food.png": "00957f2d5d5736c8fe1afcd2c742c756",
"assets/assets/images/google_icon.png": "6cbeb006a51f683329b95485e5d4a59b",
"assets/assets/images/ic_arrow_down.png": "6b6c95784d403860d8903e8f920c41a4",
"assets/assets/images/ic_arrow_left.png": "e3acc1589254a96dd7335ee8d00e4b53",
"assets/assets/images/ic_arrow_right.png": "ba2d0128eb4e86d0eed2162c1fa7be65",
"assets/assets/images/ic_bag_border.png": "26f8b7e5fa52f2b3238647ff8f051810",
"assets/assets/images/ic_bg.png": "22594b0769269d9ebe893f410ac509fc",
"assets/assets/images/ic_checkout.png": "f2c31ca0dd6de1898985aa36d96ee1b8",
"assets/assets/images/ic_doc.png": "f3efe58b2d8477afd5e0dfd466addd07",
"assets/assets/images/ic_filter.png": "1e5dac1261ef000c443a867d9f514fb0",
"assets/assets/images/ic_heart_border.png": "9c8d8557b4f2beea8aa8ac026b6ae8d9",
"assets/assets/images/ic_home_border.png": "0903bc0b77499c3391947f06adad61d0",
"assets/assets/images/ic_home_filled.png": "bdf093928fac33d53129ca2b0dfc6e88",
"assets/assets/images/ic_info.png": "6fe3e8f8de2172b645e3021ed5a67de1",
"assets/assets/images/ic_launcher.png": "a067a549f8567315a47f80099a8ba571",
"assets/assets/images/ic_logout.png": "d0fea6c504f5073c9afd852f5aabb4fc",
"assets/assets/images/ic_notification_border.png": "a3c6da12bbebb263beecbd215b0ef3cd",
"assets/assets/images/ic_notify.png": "98d632864c7eb1fe2fe868da3860a8ed",
"assets/assets/images/ic_password.png": "03e43a78dcb44169c78cb1e0d179aeb8",
"assets/assets/images/ic_profile.png": "b9646a89e6774179d70e6cb3f6a387a3",
"assets/assets/images/ic_search.png": "d6d0115e88f59a4a29b4116d205be948",
"assets/assets/images/ic_star_filled.png": "add3d09b2c0f316386010824663a87ef",
"assets/assets/images/image%25201.png": "290f0fedbd517ce0192789b5b2a581dc",
"assets/assets/images/image%25202.png": "2cfd5e05c63c17edb9911f829be85f69",
"assets/assets/images/image%25203.png": "0719e64657d9412cfcdc94e8e1e6dc57",
"assets/assets/images/image%25204.png": "b8d4c3a8e719edacf7b35d67f1c11d11",
"assets/assets/images/milk.png": "69804989cb10bc0a294e5d8bc13adf4f",
"assets/assets/images/nasgor.jpeg": "573436d7d49c5068abe0bbab91433662",
"assets/assets/images/other.png": "387dd73b1b30c6f8b440d31422a7d972",
"assets/assets/images/snack.png": "7a738f17eaa505bf30294bd2bf980d69",
"assets/assets/images/user.png": "6f6bbb16aec97391aefe120ec5a4e6a2",
"assets/assets/images/wingko.jpg": "653081a6c2e191a63e3498a5679c7e36",
"assets/assets/images/wingko.png": "4552c095c7d8eed2fe03bc965b0b5c59",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "03ad13543631d0a11bbf80beeba00d21",
"assets/NOTICES": "0f8913622395ed8c7679c60cb43193f1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "3d1a0631678bb8e20c121558ff518985",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "910d5e124a17080d480e62ccd4760432",
"/": "910d5e124a17080d480e62ccd4760432",
"main.dart.js": "94dc984a53c2de2ea0b1b801118a4231",
"manifest.json": "90d9b0ffc81b8323778b390ceab5febd",
"version.json": "ef75f754b3b3163d63765ce3c4d8eb70"};
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
