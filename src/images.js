const images = [
  {
    id: 1,
    img: 'https://cdn.pixabay.com/photo/2020/06/14/22/46/the-caucasus-5299607_960_720.jpg',
    type: ['nature', 'mountains', 'clouds', 'cloud', 'snow'],
    title: 'nature'
  },
  
  {
    id: 2,
    img: 'https://cdn.pixabay.com/photo/2020/02/15/04/19/chicken-4849979_960_720.jpg',
    type: ['animals', 'chicken', 'hen', 'feathers'],
    title: 'animals'
  },

  {
    id: 3,
    img: 'https://cdn.pixabay.com/photo/2017/06/20/22/14/man-2425121_960_720.jpg',
    type: ['people', 'woman', 'man', 'dog', 'pug', 'family', 'smile', 'love', 'breakfest'],
    title: 'people'
  },

  {
    id: 4,
    img: 'https://cdn.pixabay.com/photo/2015/06/22/08/38/siblings-817369_960_720.jpg',
    type: ['people', 'girl', 'boy', 'children', 'kids', 'love'],
    title: 'people'
  },

  {
    id: 5,
    img: 'https://cdn.pixabay.com/photo/2017/07/28/14/29/macarons-2548827_960_720.jpg',
    type: ['food', 'sugar', 'sweet', 'pink', 'raspberry', 'raspberries', 'macarons', 'desert'],
    title: 'food'
  },

  {
    id: 6,
    img: 'https://cdn.pixabay.com/photo/2018/03/06/22/57/portrait-3204843_960_720.jpg',
    type: ['people', 'woman', 'girl', 'beauty', 'lady', 'portrait'],
    title: 'people'
  },

  {
    id: 7,
    img: 'https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132_960_720.jpg',
    type: ['food', 'meat', 'beef', 'steak', 'lunch', 'food', 'dinner'],
    title: 'food'
  },

  {
    id: 8,
    img: 'https://cdn.pixabay.com/photo/2016/11/14/05/29/children-1822704_960_720.jpg',
    type: ['people', 'children', 'fun', 'kids', 'boy', 'water', 'game'],
    title: 'people'
  },

  {
    id: 9,
    img: 'https://cdn.pixabay.com/photo/2015/06/24/14/34/durdle-door-820137_960_720.jpg',
    type: ['nature', 'sea', 'water', 'beach', 'sun', 'blue', 'summer'],
    title: 'nature'
  },
  {
    id: 10,
    img: 'https://cdn.pixabay.com/photo/2020/06/15/15/16/the-caucasus-5302236_960_720.jpg',
    type: ['nature', 'mountains', 'water', 'stones', 'river', 'brook', 'creek'],
    title: 'nature'
  },
  {
    id: 11,
    img: 'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg',
    type: ['nature', 'mountains', 'water', 'stones', 'lake', 'tree', 'storm'],
    title: 'nature'
  },
  {
    id: 12,
    img: 'https://cdn.pixabay.com/photo/2019/02/25/00/17/kitten-4018756_960_720.jpg',
    type: ['animals', 'cute', 'kitten', 'cat'],
    title: 'animals'
  },
  {
    id: 13,
    img: 'https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_960_720.jpg',
    type: ['nature', 'mountains', 'hill', 'tree', 'fog', 'sun'],
    title: 'nature'
  },
  {
    id: 14,
    img: 'https://cdn.pixabay.com/photo/2016/10/22/17/46/mountains-1761292_960_720.jpg',
    type: ['nature', 'mountains', 'hill', 'tree', 'sunset', 'sun', 'water', 'road'],
    title: 'nature'
  },{
    id: 15,
    img: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_960_720.jpg',
    type: ['nature', 'tree', 'autumn', 'forrest', 'color', 'leave'],
    title: 'nature'
  },{
    id: 16,
    img: 'https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_960_720.jpg',
    type: ['nature', 'tree', 'sun', 'way', 'road', 'park', 'leave'],
    title: 'nature'
  },
  {
    id: 17,
    img: 'https://cdn.pixabay.com/photo/2019/10/06/10/03/team-4529717_960_720.jpg',
    type: ['people', 'hand', 'nail', 'bracelet', 'together', 'team'],
    title: 'people'
  },
  
  {
    id: 18,
    img: 'https://cdn.pixabay.com/photo/2018/07/31/14/09/young-people-3575167_960_720.jpg',
    type: ['people', 'hand', 'together', 'team', 'friends', 'friendship', 'woman', 'man', 'love'],
    title: 'people'
  },
  {
    id: 19,
    img: 'https://cdn.pixabay.com/photo/2018/04/20/16/25/senior-3336451_960_720.jpg',
    type: ['people', 'hand', 'together', 'team', 'friends', 'friendship', 'woman', 'man', 'love'],
    title: 'people'
  },{
    id: 20,
    img: 'https://cdn.pixabay.com/photo/2017/06/15/11/40/beautiful-2405131_960_720.jpg',
    type: ['people', 'hair', 'woman', 'blond', 'beauty'],
    title: 'people'
  },{
    id: 21,
    img: 'https://cdn.pixabay.com/photo/2015/05/04/10/16/vegetables-752153_960_720.jpg',
    type: ['food', 'vegetables', 'tomato', 'lettuce', 'root', 'paprika', 'mint', 'onion', 'kohlrabi', 'basket', 'garden'],
    title: 'food'
  },
  {
    id: 22,
    img: 'https://cdn.pixabay.com/photo/2016/03/16/15/12/goat-1260967_960_720.jpg',
    type: ['animals', 'goat', 'cute', 'kid'],
    title: 'animals'
  },
  {
    id: 23,
    img: 'https://cdn.pixabay.com/photo/2020/11/11/21/20/lamb-5733685_960_720.jpg',
    type: ['animals', 'lamb', 'cute', 'sheep'],
    title: 'animals'
  },
  
]

export default images;