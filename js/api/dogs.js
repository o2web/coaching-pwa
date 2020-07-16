const dogsList = [
  {
    "id": "5f109dc5dfce9b7efb7107bf",
    "age": 16,
    "name": "Carolina",
    "gender": "female",
    "used": false,
    "breed": 2,
    "picture": "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/11234019/Bulldog-standing-in-the-grass.jpg"
  },
  {
    "id": "5f109dc523504b2abd00d0c6",
    "age": 1,
    "name": "Miller",
    "gender": "male",
    "used": true,
    "breed": 3,
    "picture": "https://www.lebernard.ca/wp-content/uploads/2015/09/Chiot-beagle.jpg"
  },
  {
    "id": "5f109dc51c0b255d4f458014",
    "age": 4,
    "name": "Bradford",
    "gender": "male",
    "used": true,
    "breed": 5,
    "picture": "https://upload.wikimedia.org/wikipedia/commons/2/26/YellowLabradorLooking_new.jpg"
  },
  {
    "id": "5f109dc502c9bd4b3980771b",
    "age": 17,
    "name": "Trisha",
    "gender": "female",
    "used": false,
    "breed": 6,
    "picture": "https://www.lacitegoldenretriever.com/wp-content/uploads/2017/02/cropped-cropped-golden-retriever-1349045_1920-Copie-2-1024x614.jpg"
  },
  {
    "id": "5f109dc53d51676cb075ff90",
    "age": 20,
    "name": "Aguilar",
    "gender": "male",
    "used": false,
    "breed": 4,
    "picture": "https://www.rover.com/blog/wp-content/uploads/2020/01/french-bulldog-4278114_1920.jpg"
  },
  {
    "id": "5f109dc56a6138e3f219f030",
    "age": 14,
    "name": "Judy",
    "gender": "female",
    "used": true,
    "breed": 2,
    "picture": "https://static.wixstatic.com/media/74af0c_41c7bfb22f854763ae9b85e440322aab~mv2_d_2736_1824_s_2.jpg/v1/fill/w_874,h_874,al_c,q_85,usm_0.66_1.00_0.01/74af0c_41c7bfb22f854763ae9b85e440322aab~mv2_d_2736_1824_s_2.webp"
  },
  {
    "id": "5f109dc5e0e16852510baa27",
    "age": 1,
    "name": "Rowe",
    "gender": "male",
    "used": true,
    "breed": 5,
    "picture": "https://www.lebernard.ca/wp-content/uploads/2015/09/Chiot-labrador-retriever.jpg"
  },
  {
    "id": "5f109dc518c2cfd0e82ce39e",
    "age": 2,
    "name": "Gentry",
    "gender": "male",
    "used": false,
    "breed": 2,
    "picture": "https://vetstreet.brightspotcdn.com/dims4/default/75de412/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F64%2F9b43809e8911e0a2380050568d634f%2Ffile%2FBulldogs-4-645mk062111.jpg"
  },
  {
    "id": "5f109dc55efe70358b831d33",
    "age": 17,
    "name": "Crystal",
    "gender": "female",
    "used": true,
    "breed": 6,
    "picture": "https://www.lacitegoldenretriever.com/wp-content/themes/guideline/images/slides/resting-golden-retriever.jpg"
  },
  {
    "id": "5f109dc56eb2279cb9cb7f5d",
    "age": 8,
    "name": "Walter",
    "gender": "male",
    "used": false,
    "breed": 5,
    "picture": "https://thumbs-prod.si-cdn.com/COt4RVYpNNnDup3bFSpfcyCYFuU=/1072x720/filters:no_upscale()/https://public-media.si-cdn.com/filer/ad/7b/ad7b3860-ad5f-43dc-800e-af57830cd1d3/labrador.jpg"
  },
  {
    "id": "5f109dc5506c956282d2e4d5",
    "age": 1,
    "name": "Carissa",
    "gender": "female",
    "used": true,
    "breed": 4,
    "picture": "https://24ryrdikgsto8d3526ikji7k-wpengine.netdna-ssl.com/wp-content/uploads/Photo-2018.-05.-28.-21-07-34-m%C3%A1solata-1024x784.jpg"
  },
  {
    "id": "5f109dc54f58a3cc751dd4ae",
    "age": 18,
    "name": "Hartman",
    "gender": "male",
    "used": false,
    "breed": 2,
    "picture": "https://i.ytimg.com/vi/zbQNnvlPo7U/maxresdefault.jpg"
  },
  {
    "id": "5f109dc554ddc0145c9a9c73",
    "age": 1,
    "name": "Fern",
    "gender": "female",
    "used": true,
    "breed": 2,
    "picture": "https://i.pinimg.com/originals/d2/33/9a/d2339a636c856482fd03fb3c9b045d62.jpg"
  },
  {
    "id": "5f109dc579f8b1ad4571b7db",
    "age": 1,
    "name": "Adrienne",
    "gender": "female",
    "used": true,
    "breed": 6,
    "picture": "https://i.ytimg.com/vi/a6KGPBflhiM/hqdefault.jpg"
  },
  {
    "id": "5f109dc5ee010407c5b8459d",
    "age": 20,
    "name": "Glenn",
    "gender": "male",
    "used": true,
    "breed": 3,
    "picture": "https://static.toutoupourlechien.com/2019/08/groupe-beagle.jpg"
  },
  {
    "id": "5f109dc526a6888e263e666b",
    "age": 7,
    "name": "Ellen",
    "gender": "female",
    "used": false,
    "breed": 4,
    "picture": "https://thehappypuppysite.com/wp-content/uploads/2019/03/White-French-Bulldog-long-1.jpg"
  },
  {
    "id": "5f109dc54da0e622d33c6d83",
    "age": 4,
    "name": "Beck",
    "gender": "male",
    "used": false,
    "breed": 1,
    "picture": "https://nosamisleschiens.fr/wp-content/uploads/2014/12/AdobeStock_63641115-1080x675.jpeg"
  },
  {
    "id": "5f109dc5d91bfa34bb9766d3",
    "age": 16,
    "name": "Angelique",
    "gender": "female",
    "used": false,
    "breed": 5,
    "picture": "https://storage.tvanouvelles.ca/v1/dynamic_resize/sws_path/tvanouvelles_prod/24e101a0-fe6f-403c-83de-5a75025ddbde/brown-labrador-dog-in-front-of-a-colored-background_16x9_WEB.jpg?quality=80&size=1200x&version=1"
  },
  {
    "id": "5f109dc56b43890bb8063699",
    "age": 7,
    "name": "Oneil",
    "gender": "male",
    "used": false,
    "breed": 3,
    "picture": "https://www.racedechien.info/uploads/thumbs/282x282-crop/dog/553/beagle-13244.jpg"
  },
  {
    "id": "5f109dc5f2c3292a3773cb1b",
    "age": 4,
    "name": "Glover",
    "gender": "male",
    "used": true,
    "breed": 5,
    "picture": "https://todaysveterinarypractice.com/wp-content/uploads/sites/4/2019/01/Chocolate-Lab_shutterstock_405052057_Paul-Ekert.jpg"
  }
];

export { dogsList };
