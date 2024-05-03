<script setup lang="ts">

interface MaisonRecord {
    adresse: string;
    collectionId: string;
    collectionName: string;
    created: string;
    favori: boolean;
    id: string;
    images: string[];
    nbChambres: number;
    nbSdb: number;
    nomMaison: string;
    prix: number;
    surface: number;
    updated: string;
}

const maisonsListe: MaisonRecord[] =
[
  {
    "adresse": "17 Rue George Clémenceau Montbéliard 25200",
    "collectionId": "nwljrcgvs9mq481",
    "collectionName": "maison",
    "created": "2024-04-11 14:13:45.571Z",
    "favori": true,
    "id": "000000000000001",
    "images": [
      "image1_jIMzSfW1F7.webp",
      "image2_2LP1cOGKsK.webp",
      "image3_IoY4vfS73m.webp",
      "image4_EseVKcOcIu.webp",
      "image5_KVggASHkn7.webp"
    ],
    "nbChambres": 3,
    "nbSdb": 1,
    "nomMaison": "Maison 1 étage à vendre\r\n",
    "prix": 115000,
    "surface": 180,
    "updated": "2024-04-11 14:14:13.779Z"
  },
  {
    "adresse": "630 Travis St NW  Atlanta",
    "collectionId": "nwljrcgvs9mq481",
    "collectionName": "maison",
    "created": "2024-04-11 14:22:02.198Z",
    "favori": false,
    "id": "000000000000002",
    "images": [
      "0_mersey_road_flat_pic_3_91cFNN2ONG.webp",
      "ab67616d00001e02e2ed1a99dde9ccf8ba450d57_3QSDO7HO1B.webp"
    ],
    "nbChambres": 2,
    "nbSdb": 2,
    "nomMaison": "Trap House",
    "prix": 50,
    "surface": 150,
    "updated": "2024-04-11 14:23:10.686Z"
  },
  {
    "adresse": "Bonaugure",
    "collectionId": "nwljrcgvs9mq481",
    "collectionName": "maison",
    "created": "2024-04-11 14:27:38.232Z",
    "favori": false,
    "id": "000000000000003",
    "images": [
      "images_VvXRDpygJo.webp",
      "player_house_1_f_dppt_wEArSdiNRW.webp",
      "wt_a3_Uc4ZpsIEtk.webp"
    ],
    "nbChambres": 1,
    "nbSdb": 1,
    "nomMaison": "Maison du joueur",
    "prix": 2500,
    "surface": 80,
    "updated": "2024-05-02 09:00:26.873Z"
  },
  {
    "adresse": "Houppeville",
    "collectionId": "nwljrcgvs9mq481",
    "collectionName": "maison",
    "created": "2024-04-11 14:30:28.726Z",
    "favori": false,
    "id": "000000000000004",
    "images": [
      "2OGFs5twxsB_Ggq9vKhy7J.webp",
      "3f5JEkkkWEy_ZulJl2Riiv.webp"
    ],
    "nbChambres": 4,
    "nbSdb": 2,
    "nomMaison": "Maison Extraco",
    "prix": 302000,
    "surface": 105,
    "updated": "2024-04-11 14:30:28.726Z"
  },
  {
    "adresse": "Rouen",
    "collectionId": "nwljrcgvs9mq481",
    "collectionName": "maison",
    "created": "2024-04-11 14:31:59.336Z",
    "favori": true,
    "id": "000000000000005",
    "images": [
      "1FnQblk49VB_iMDLVo6sWd.webp",
      "2AWhbFnYr0i_m7bfBaLMYG.webp",
      "3qQBI14QJPb_vQfg7eWcLR.webp",
      "4V0KRohZ2Ch_futrhQJRrI.webp"
    ],
    "nbChambres": 5,
    "nbSdb": 3,
    "nomMaison": "Maison neuve",
    "prix": 395000,
    "surface": 1182,
    "updated": "2024-04-11 14:31:59.336Z"
  }
]
console.log(maisonsListe);


</script>

<template>
  <h1 class="text-2xl">Bonjour monde !</h1>
</template>
