import images from './images';

const sodas = [
  {
    title: 'Ice Cola',
    price: '$5',
    tags: 'IR | 500 ml',
  },
  {
    title: 'Fuzz Cola',
    price: '$4',
    tags: 'FR | 500 ml',
  },
  {
    title: 'Sprite',
    price: '$3',
    tags: 'US | 330 ml',
  },
  {
    title: 'Coca Cola',
    price: '$3',
    tags: 'US | 330 ml',
  },
  {
    title: 'Pepsi',
    price: '$3',
    tags: 'US | 330 ml',
  },
];

const cocktails = [
  {
    title: 'Orange Sunrise',
    price: '$8',
    tags: 'Fresh orange juice | Lemon zest | Soda water | 250 ml',
  },
  {
    title: 'Tropical Storm',
    price: '$7',
    tags: 'Pineapple juice | Coconut water | Slice of lime',
  },
  {
    title: 'Citrus Delight',
    price: '$6',
    tags: 'Lemon juice | Orange juice | Honey | Mint leaves',
  },
  {
    title: 'Berry Bliss',
    price: '$9',
    tags: 'Mixed berry juice | Agave syrup | Lemon twist',
  },
  {
    title: 'Green Detox',
    price: '$10',
    tags: 'Kale juice | Apple juice | Cucumber | Ginger',
  },
];


const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { sodas, cocktails, awards };
