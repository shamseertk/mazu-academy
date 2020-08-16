import { flattenDeep } from 'lodash';
import { categories } from "./alphabets";
import { generateRandomNumber } from "./utils";

export const arabicWords = [{
  id: 1,
  arabic: 'ا',
  arabicAlternative: 'أإ',
  words: [{
    arabic: 'أَسَدٌ', image: 'lion.jpg', english: 'Lion', orderKey: generateRandomNumber(100), category: categories.ANIMAL,
  }, {
    arabic: 'أَرْضٌ', image: 'earth.jpg', english: 'Land', orderKey: generateRandomNumber(100), category: categories.THING,
  }, {
    arabic: 'إِبْنٌ', image: 'son.jpg', english: 'Son', orderKey: generateRandomNumber(100), category: categories.HUMAN,
  }, {
    arabic: 'أَرْنَبٌ', image: 'rabbit.jpg', english: 'Rabbit', orderKey: generateRandomNumber(100), category: categories.ANIMAL,
  }],
}, {
  id: 2,
  arabic: 'ب',
  words: [{
    arabic: 'بَطَّةٌ', image: 'duck.jpg', english: 'Duck', orderKey: generateRandomNumber(100), category: categories.ANIMAL,
  }, {
    arabic: 'بَقَرَةٌ', image: 'cow.jpg', english: 'Cow', orderKey: generateRandomNumber(100), category: categories.ANIMAL,
  }, {
    arabic: 'بَيْتٌ', image: 'home.jpg', english: 'House', orderKey: generateRandomNumber(100), category: categories.THING,
  }, {
    arabic: 'بَابٌ', image: 'door.jpg', english: 'Door', orderKey: generateRandomNumber(100), category: categories.THING,
  }],
}, {
  id: 3,
  arabic: 'ت',
  words: [{
    arabic: 'تُفّآحَةٌ', image: 'apple.jpg', english: 'Apple', orderKey: generateRandomNumber(100), category: categories.FOOD,
  }, {
    arabic: 'تَاجِرٌ', image: 'merchant.jpg', english: 'Merchant', orderKey: generateRandomNumber(100), category: categories.PROFESSION,
  }, {
    arabic: 'تِينٌ', image: 'fig.jpg', english: 'Fig', orderKey: generateRandomNumber(100), category: categories.FRUIT,
  }, {
    arabic: 'تِلْفَازٌ', image: 'television.jpg', english: 'Television', orderKey: generateRandomNumber(100), category: categories.APPLIANCE,
  }],
}, {
  id: 4,
  arabic: 'ث',
  words: [{
    arabic: 'ثَعْلَبٌ', image: 'fox.jpg', english: 'Fox', orderKey: generateRandomNumber(100), category: categories.ANIMAL,
  }, {
    arabic: 'ثَلَّاجَةٌ', image: 'fridge.jpg', english: 'Refrigerator', orderKey: generateRandomNumber(100), category: categories.APPLIANCE,
  }, {
    arabic: 'ثَوْرٌ', image: 'ox.jpg', english: 'Ox', orderKey: generateRandomNumber(100), category: categories.ANIMAL,
  }, {
    arabic: 'ثَوْمٌ', image: 'garlic.jpg', english: 'Garlic', orderKey: generateRandomNumber(100), category: categories.VEGITABLE,
  }],
}, {
  id: 5,
  arabic: 'ج',
  words: [{
    arabic: 'جَمَلٌ', image: 'camel.jpg', english: 'Camel', orderKey: generateRandomNumber(100), category: categories.ANIMAL,
  }, {
    arabic: 'جَبَلٌ', image: 'mountain.jpg', english: 'Mountain', orderKey: generateRandomNumber(100), category: categories.THING,
  }, {
    arabic: 'جَرَادٌ', image: 'locusts.jpg', english: 'Locusts', orderKey: generateRandomNumber(100), category: categories.ANIMAL,
  }, {
    arabic: 'جَسَدٌ', image: 'body.jpg', english: 'Body', orderKey: generateRandomNumber(100), category: categories.HUMAN,
  }, {
    arabic: 'جَدٌّ', image: 'grandfather.jpg', english: 'Grandfather', orderKey: generateRandomNumber(100), category: categories.HUMAN,
  }],
}, {
  id: 6,
  arabic: 'ح',
  words: [{
    arabic: 'حَدِيقَةٌ', image: 'garden.jpg', english: 'Garden', orderKey: generateRandomNumber(100), category: categories.THING,
  }, {
    arabic: 'حِمَارٌ', image: 'donkey.jpg', english: 'Donkey', orderKey: generateRandomNumber(100), category: categories.ANIMAL,
  }, {
    arabic: 'حِصَانٌ', image: 'horse.jpg', english: 'Horse', orderKey: generateRandomNumber(100), category: categories.ANIMAL,
  }, {
    arabic: 'حَاﻓِﻠَﺔ', image: 'bus.jpg', english: 'Bus', orderKey: generateRandomNumber(100), category: categories.VEHICLE,
  }],
}, {
  id: 7,
  arabic: 'خ',
  words: [{
    arabic: 'خَرُوفٌ', image: 'sheep.jpg', english: 'Sheep', orderKey: generateRandomNumber(100), category: categories.ANIMAL,
  }, {
    arabic: 'خُرُوجٌ', image: 'beet.jpg', english: 'Beetroot', orderKey: generateRandomNumber(100), category: categories.VEGITABLE,
  }, {
    arabic: 'خِنْزِيرٌ', image: 'pig.jpg', english: 'Pig', orderKey: generateRandomNumber(100), category: categories.ANIMAL,
  }, {
    arabic: 'خَرِﻳﻄَﺔٌ', image: 'map.jpg', english: 'Map', orderKey: generateRandomNumber(100), category: categories.THING,
  }],
}, {
  id: 8,
  arabic: 'د',
  words: [{
    arabic: 'دَرَّاجَةٌ', image: 'bicycle.jpg', english: 'Bicycle', orderKey: generateRandomNumber(100), category: categories.VEHICLE,
  }, {
    arabic: 'دَوَاءٌ', image: 'medicine.jpg', english: 'Medicine', orderKey: generateRandomNumber(100), category: categories.THING,
  }, {
    arabic: 'دَجَاجَةٌ', image: 'hen.jpg', english: 'Hen', orderKey: generateRandomNumber(100), category: categories.BIRD,
  }, {
    arabic: 'دِيكٌ', image: 'rooster.jpg', english: 'Rooster', orderKey: generateRandomNumber(100), category: categories.BIRD,
  }],
}, {
  id: 9,
  arabic: 'ذ',
  words: [{
    arabic: 'ذُبَابٌ', image: 'fly.jpg', english: 'Fly', orderKey: generateRandomNumber(100), category: categories.ANIMAL,
  }, {
    arabic: 'ذِئْبٌ', image: 'wolf.jpg', english: 'Wolf', orderKey: generateRandomNumber(100), category: categories.ANIMAL,
  }, {
    arabic: 'ذَهَبٌ', image: 'gold.jpg', english: 'Gold', orderKey: generateRandomNumber(100), category: categories.THING,
  }, {
    arabic: 'ذَقْنٌ', image: 'chin.jpg', english: 'Chin', orderKey: generateRandomNumber(100), category: categories.HUMAN,
  }],
}, {
  id: 10,
  arabic: 'ر',
  words: [{
    arabic: 'رُمَانٌ', image: 'pomegranate.jpg', english: 'Pomegranate', orderKey: generateRandomNumber(100), category: categories.FOOD,
  }, {
    arabic: 'رَأْسٌ', image: 'head.jpg', english: 'Head', orderKey: generateRandomNumber(100), category: categories.HUMAN,
  }, {
    arabic: 'رَجُلٌ', image: 'man.jpg', english: 'Man', orderKey: generateRandomNumber(100), category: categories.HUMAN,
  }, {
    arabic: 'رَفٌّ', image: 'rack.jpg', english: 'Rack', orderKey: generateRandomNumber(100), category: categories.THING,
  }],
}, {
  id: 11,
  arabic: 'ز',
  words: [{
    arabic: 'زَرَافَةٌ', image: 'giraffe.jpg', english: 'Giraffe', orderKey: generateRandomNumber(100), category: categories.ANIMAL,
  }, {
    arabic: 'زَهْرَةٌ', image: 'flower.jpg', english: 'Flower', orderKey: generateRandomNumber(100), category: categories.VEGITABLE,
  }, {
    arabic: 'زَيْتٌ', image: 'oil.jpg', english: 'Oil', orderKey: generateRandomNumber(100), category: categories.THING,
  }, {
    arabic: 'زَيْتُونٌ', image: 'olive.jpg', english: 'Olive', orderKey: generateRandomNumber(100), category: categories.VEGITABLE,
  }],
}, {
  id: 12,
  arabic: 'س',
  words: [{
    arabic: 'سَيَّارَةٌ', image: 'car.jpg', english: 'Cat', orderKey: generateRandomNumber(100), category: categories.VEHICLE,
  }, {
    arabic: 'سَاعَةٌ', image: 'watch.jpg', english: 'Watch', orderKey: generateRandomNumber(100), category: categories.THING,
  }, {
    arabic: 'سَمَاءٌ', image: 'sky.jpg', english: 'Sky', orderKey: generateRandomNumber(100), category: categories.THING,
  }, {
    arabic: 'سَمَكَةٌ', image: 'fish.jpg', english: 'Fish', orderKey: generateRandomNumber(100), category: categories.ANIMAL,
  }],
}, {
  id: 13,
  arabic: 'ش',
  words: [{
    arabic: 'شَاحِنَةٌ', image: 'truck.jpg', english: 'Truck', orderKey: generateRandomNumber(100), category: categories.VEHICLE,
  }, {
    arabic: 'شَمْسٌ', image: 'sun.jpg', english: 'Sun', orderKey: generateRandomNumber(100), category: categories.THING,
  }, {
    arabic: 'شَجَرَةٌ', image:'tree.jpg', english: 'Tree', orderKey: generateRandomNumber(100), category: categories.THING,
  }, {
    arabic: 'شَاي', image:'tea.jpg', english: 'Tea', orderKey: generateRandomNumber(100), category: categories.FOOD,
  }],
}, {
  id: 14,
  arabic: 'ص',
  words: [{
    arabic: 'صَبَاحٌ', image: 'morning.jpg', english: 'Morning', orderKey: generateRandomNumber(100), category: categories.THING,
  }, {
    arabic: 'صَيَّادٌ', image: 'hunter.jpg', english: 'Hunter', orderKey: generateRandomNumber(100), category: categories.THING,
  }, {
    arabic: 'صَخْرٌ', image: 'stone.jpg', english: 'Rock', orderKey: generateRandomNumber(100), category: categories.THING,
  }, {
    arabic: 'صَفَارَةٌ', image: 'whistle.jpg', english: 'Whistle', orderKey: generateRandomNumber(100), category: categories.THING,
  }, {
    arabic: 'صَقْرٌ', image: 'falcon.jpg', english: 'Falcon', orderKey: generateRandomNumber(100), category: categories.BIRD,
  }],
}, {
  id: 15,
  arabic: 'ض',
  words: [{
    arabic: 'ضِفْدَعَةٌ', image: 'frog.jpg', english: 'Frog', orderKey: generateRandomNumber(100), category: categories.ANIMAL,
  }, {
    arabic: 'ضَبَعٌ', image: 'hyena.jpg', english: 'Hyena', orderKey: generateRandomNumber(100), category: categories.ANIMAL,
  }, {
    arabic: 'ضَوْءٌ', image: 'light.jpg', english: 'Light', orderKey: generateRandomNumber(100), category: categories.THING,
  }],
}, {
  id: 16,
  arabic: 'ط',
  words: [{
    arabic: 'طَاوِلَةٌ', image: 'table.jpg', english: 'Table', orderKey: generateRandomNumber(100), category: categories.THING,
  }, {
    arabic: 'طَالِبٌ', image: 'student.jpg', english: 'Student', orderKey: generateRandomNumber(100), category: categories.PROFESSION,
  }, {
    arabic: 'طَبِيبٌ', image: 'doctor.jpg', english: 'Doctor', orderKey: generateRandomNumber(100), category: categories.PROFESSION,
  }, {
    arabic: 'طِفْلٌ', image: 'baby.jpg', english: 'Baby', orderKey: generateRandomNumber(100), category: categories.PROFESSION,
  }],
}, {
  id: 17,
  arabic: 'ظ',
  words: [{
    arabic: 'ظَرْفٌ', image: 'envelope.jpg', english: 'Envelope', orderKey: generateRandomNumber(100), category: categories.THING,
  }, {
    arabic: 'ظَبْيٌ', image: 'antelope.jpg', english: 'Antelope', orderKey: generateRandomNumber(100), category: categories.ANIMAL,
  }, {
    arabic: 'ظُفْرٌ', image: 'fingernail.jpg', english: 'Nail', orderKey: generateRandomNumber(100), category: categories.HUMAN,
  }, {
    arabic: 'ظِلٌّ', image: 'shadow.jpg', english: 'Shadow', orderKey: generateRandomNumber(100), category: categories.THING,
  }],
}, {
  id: 18,
  arabic: 'ع',
  words: [{
    arabic: 'عَيْنٌ', image: 'eye.jpg', english: 'Eye', orderKey: generateRandomNumber(100), category: categories.HUMAN,
  }, {
    arabic: 'عَنْكَبُوتٌ', image: 'spider.jpg', english: 'Spider', orderKey: generateRandomNumber(100), category: categories.ANIMAL,
  }, {
    arabic: 'عَجلَةٌ', image: 'wheel.jpg', english: 'Wheel', orderKey: generateRandomNumber(100), category: categories.THING,
  }, {
    arabic: 'عَسَلٌ', image: 'honey.jpg', english: 'Honey', orderKey: generateRandomNumber(100), category: categories.FOOD,
  }],
}, {
  id: 19,
  arabic: 'غ',
  words: [{
    arabic: 'غَابَةٌ', image: 'forest.jpg', english: 'Forest', orderKey: generateRandomNumber(100), category: categories.THING,
  }, {
    arabic: 'غُرْفَةٌ', image: 'room.jpg', english: 'Room', orderKey: generateRandomNumber(100), category: categories.THING,
  }, {
    arabic: 'غَزَالٌ', image: 'deer.jpg', english: 'Deer', orderKey: generateRandomNumber(100), category: categories.ANIMAL,
  }, {
    arabic: 'غَسَّالَةٌ', image: 'washer.jpg', english: 'Washer', orderKey: generateRandomNumber(100), category: categories.APPLIANCE,
  }],
}, {
  id: 20,
  arabic: 'ف',
  words: [{
    arabic: 'فَهْدٌ', image: 'jaguar.jpg', english: 'Jaguar', orderKey: generateRandomNumber(100), category: categories.ANIMAL,
  }, {
    arabic: 'فِيلٌ', image: 'elephant.jpg', english: 'Elephant', orderKey: generateRandomNumber(100), category: categories.ANIMAL,
  }, {
    arabic: 'فَرَاشَةٌ', image: 'butterfly.jpg', english: 'Butterfly', orderKey: generateRandomNumber(100), category: categories.ANIMAL,
  }, {
    arabic: 'فِرَاشٌ', image: 'mattress.jpg', english: 'Mattress', orderKey: generateRandomNumber(100), category: categories.THING,
  }, {
    arabic: 'فَمٌ', image: 'mouth.png', english: 'Mouth', orderKey: generateRandomNumber(100), category: categories.HUMAN,
  }],
}, {
  id: 21,
  arabic: 'ق',
  words: [{
    arabic: 'قِرْدٌ', image: 'monkey.jpg', english: 'Monkey', orderKey: generateRandomNumber(100), category: categories.ANIMAL,
  }, {
    arabic: 'قِطَّةٌ', image: 'cat.jpg', english: 'Cat', orderKey: generateRandomNumber(100), category: categories.ANIMAL,
  }, {
    arabic: 'قِطَارٌ', image: 'train.jpg', english: 'Train', orderKey: generateRandomNumber(100), category: categories.THING,
  }, {
    arabic: 'قَلَمٌ', image: 'pen.jpg', english: 'Pen', orderKey: generateRandomNumber(100), category: categories.THING,
  }],
}, {
  id: 22,
  arabic: 'ك',
  words: [{
    arabic: 'كَلْبٌ', image: 'dog.jpg', english: 'Dog', orderKey: generateRandomNumber(100), category: categories.ANIMAL,
  }, {
    arabic: 'كِتَابٌ', image: 'book.jpg', english: 'Book', orderKey: generateRandomNumber(100), category: categories.THING,
  }, {
    arabic: 'كُرَةٌ', image: 'ball.jpg', english: 'Ball', orderKey: generateRandomNumber(100), category: categories.THING,
  }, {
    arabic: 'كَهْفٌ', image: 'cave.jpg', english: 'Cave', orderKey: generateRandomNumber(100), category: categories.THING,
  }],
}, {
  id: 23,
  arabic: 'ل',
  words: [{
    arabic: 'لَحْمٌ', image: 'meat.jpg', english: 'Meat', orderKey: generateRandomNumber(100), category: categories.FOOD,
  }, {
    arabic: 'لِسَانٌ', image: 'tounge.jpg', english: 'Tounge', orderKey: generateRandomNumber(100), category: categories.HUMAN,
  }, {
    arabic: 'لَيْمُونٌ', image: 'lemon.jpg', english: 'Lemon', orderKey: generateRandomNumber(100), category: categories.FRUIT,
  }, {
    arabic: 'لَبَنٌ', image: 'milk.jpg', english: 'Milk', orderKey: generateRandomNumber(100), category: categories.FOOD,
  }],
}, {
  id: 24,
  arabic: 'م',
  words: [{
    arabic: 'مِفْتَاحٌ', image: 'key.jpg', english: 'Key', orderKey: generateRandomNumber(100), category: categories.THING,
  }, {
    arabic: 'مَدْرَسَةٌ', image: 'school.png', english: 'School', orderKey: generateRandomNumber(100), category: categories.THING,
  }, {
    arabic: 'مَقْعَدٌ', image: 'bench.jpg', english: 'Bench', orderKey: generateRandomNumber(100), category: categories.THING,
  }, {
    arabic: 'مَاءٌ', image: 'water.jpg', english: 'Water', orderKey: generateRandomNumber(100), category: categories.FOOD,
  }, {
    arabic: 'مَسْجِدٌ', image: 'mosque.jpg', english: 'Mosque', orderKey: generateRandomNumber(100), category: categories.THING,
  }],
}, {
  id: 25,
  arabic: 'ن',
  words: [{
    arabic: 'نَمِرٌ', image: 'tiger.jpg', english: 'Tiger', orderKey: generateRandomNumber(100), category: categories.ANIMAL,
  }, {
    arabic: 'نَجْمٌ', image: 'star.jpg', english: 'Star', orderKey: generateRandomNumber(100), category: categories.THING,
  }, {
    arabic: 'نَاسٌ', image: 'people.jpg', english: 'People', orderKey: generateRandomNumber(100), category: categories.THING,
  }, {
    arabic: 'نَحْلٌ', image: 'bee.jpg', english: 'Bee', orderKey: generateRandomNumber(100), category: categories.ANIMAL,
  }, {
    arabic: 'نَجّآرٌ', image: 'carpenter.jpg', english: 'Carpenter', orderKey: generateRandomNumber(100), category: categories.PROFESSION,
  }, {
    arabic: 'نَبَاتٌ', english: 'Plant', orderKey: generateRandomNumber(100), category: categories.PROFESSION,
  }],
}, {
  id: 26,
  arabic: 'ه',
  words: [{
    arabic: 'هُدْهُدْ', image: 'hoopoe.jpg', english: 'Hoopoe', orderKey: generateRandomNumber(100), category: categories.ANIMAL,
  }, {
    arabic: 'هِلَالٌ', image: 'crescent.jpg', english: 'Crescent', orderKey: generateRandomNumber(100), category: categories.THING,
  }, {
    arabic: 'هَرَمٌ', image: 'pyramid.jpg', english: 'Pyramid', orderKey: generateRandomNumber(100), category: categories.THING,
  }, {
    arabic: 'هُرَيْرَةٌ', image: 'kitten.jpg', english: 'Kitten', orderKey: generateRandomNumber(100), category: categories.ANIMAL,
  }],
}, {
  id: 27,
  arabic: 'و',
  words: [{
    arabic: 'وَجْهٌ', image: 'face.jpg', english: 'Face', orderKey: generateRandomNumber(100), category: categories.HUMAN,
  }, {
    arabic: 'وَرْدَةٌ', image: 'rose.jpg', english: 'Rose', orderKey: generateRandomNumber(100), category: categories.VEGITABLE,
  }, {
    arabic: 'وِسَادَةٌ', image: 'pillow.jpg', english: 'Pillow', orderKey: generateRandomNumber(100), category: categories.THING,
  }, {
    arabic: 'وَلَدٌ', image: 'boy.png', english: 'Boy', orderKey: generateRandomNumber(100), category: categories.THING,
  }],
}, {
  id: 28,
  arabic: 'ي',
  words: [{
    arabic: 'يَدٌ', image: 'hand.jpg', english: 'Hand', orderKey: generateRandomNumber(100), category: categories.HUMAN,
  }, {
    arabic: 'يَمَامَةٌ', image: 'dove.jpg', english: 'Dove', orderKey: generateRandomNumber(100), category: categories.ANIMAL,
  }, {
    arabic: 'يَقْطِينٌ', image: 'pumpkin.jpg', english: 'Pumpkin', orderKey: generateRandomNumber(100), category: categories.VEGITABLE,
  }],
}];

export const allWords = flattenDeep(arabicWords.map(ar => [...ar.words]))
