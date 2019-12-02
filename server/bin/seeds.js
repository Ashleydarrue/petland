// const mongoose = require('mongoose');	
// const Pet = require('../models/Pet')	


// mongoose
//   .connect('mongodb://localhost/petland', {	  
//     useMongoClient: true	    
//   })	  
//   .then(() => {	  
//     console.log('Connected to Mongo!')


//   }).catch(err => {	  
//     console.error('Error connecting to mongo', err)	    
//   });


//   const petArray = [
//     {
//       petType: 'Dog',
//       location: 'Davie',
//       breed: 'Akita',
//       gender: 'Female',
//       dob: '8/7/19',
//       refId: '9662',
//       name: 'Brooklyn',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Pembroke Pines',
//       breed: 'American Eskim Dog',
//       gender: 'Female',
//       dob: '7/5/19',
//       refId: '19677',
//       name: 'Violet',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Plantation',
//       breed: 'Aussiedoodle',
//       gender: 'Male',
//       dob: '9/24/19',
//       refId: '5317',
//       name: 'Beau',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Kendall',
//       breed: 'Aussiepoo',
//       gender: 'Female',
//       dob: '9/24/19',
//       refId: '2768',
//       name: 'Lizzie',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Davie',
//       breed: 'Aussiepoo',
//       gender: 'Male',
//       dob: '9/24/19',
//       refId: '9737',
//       name: 'Bruno',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Kendall',
//       breed: 'Australian Shepherd',
//       gender: 'Female',
//       dob: '8/11/19',
//       refId: '2632',
//       name: 'Luna',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Davie',
//       breed: 'Australian Shepherd',
//       gender: 'Male',
//       dob: '9/26/19',
//       refId: '9738',
//       name: 'Orion',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Largo',
//       breed: 'Basset Hound',
//       gender: 'Male',
//       dob: '8/16/19',
//       refId: '25485',
//       name: 'Jasper',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Kendall',
//       breed: 'Bernadoodle',
//       gender: 'Female',
//       dob: '9/5/19',
//       refId: '2659',
//       name: 'Lola',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Plantation',
//       breed: 'Bernese Mountain Dog',
//       gender: 'Female',
//       dob: '9/2/19',
//       refId: '5287',
//       name: 'Dora',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Large',
//       breed: 'Bichon Frise',
//       gender: 'Female',
//       dob: '9/27/19',
//       refId: '25594',
//       name: 'Iris',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Pembroke Pines',
//       breed: 'Biewer Terrier',
//       gender: 'Male',
//       dob: '9/7/19',
//       refId: '19901',
//       name: 'Casey',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Largo',
//       breed: 'Biewer Terrier',
//       gender: 'Male',
//       dob: '9/7/19',
//       refId: '25580',
//       name: 'Murphy',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Kendall',
//       breed: 'Boston Terrier',
//       gender: 'Male',
//       dob: '10/1/19',
//       refId: '2787',
//       name: 'n/a',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Largo',
//       breed: 'Boston Terrier',
//       gender: 'Female',
//       dob: '8/7/19',
//       refId: '25404',
//       name: 'Jane',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Pembroke Pines',
//       breed: 'Boxer',
//       gender: 'Male',
//       dob: '9/8/19',
//       refId: '19847',
//       name: 'Mobey',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Pembroke Pines',
//       breed: 'Boxer',
//       gender: 'Male',
//       dob: '9/8/19',
//       refId: '19848',
//       name: 'Cooper',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Kendall',
//       breed: 'Boxer',
//       gender: 'Female',
//       dob: '7/22/19',
//       refId: '2500',
//       name: 'Bitsy',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Kendall',
//       breed: 'Boxer',
//       gender: 'Male',
//       dob: '9/8/19',
//       refId: '2688',
//       name: 'Jax',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Kendall',
//       breed: 'Bulldog',
//       gender: 'Female',
//       dob: '7/20/19',
//       refId: '2501',
//       name: 'Chichi',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Largo',
//       breed: 'Bulldog',
//       gender: 'Male',
//       dob: '9/18/19',
//       refId: '25527',
//       name: 'Jack',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Kendall',
//       breed: 'Bullmastiff',
//       gender: 'Male',
//       dob: '7/19/19',
//       refId: '2656',
//       name: 'Ash',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Davie',
//       breed: 'Bullmastiff',
//       gender: 'Male',
//       dob: '7/19/19',
//       refId: '9631',
//       name: 'Bruno',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Kendall',
//       breed: 'Cavachon',
//       gender: 'Male',
//       dob: '8/30/19',
//       refId: '2666',
//       name: 'Coco',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Kendall',
//       breed: 'Cavachon',
//       gender: 'Female',
//       dob: '9/20/19',
//       refId: '2764',
//       name: 'Sookie',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Plantation',
//       breed: 'Cavachon',
//       gender: 'Male',
//       dob: '8/30/19',
//       refId: '5261',
//       name: 'Maximus',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Davie',
//       breed: 'Cavachon',
//       gender: 'Male',
//       dob: '9/8/19',
//       refId: '9715',
//       name: 'Henry',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Pembroke Pines',
//       breed: 'Cavalier King Charles Spaniel',
//       gender: 'Male',
//       dob: '9/6/19',
//       refId: '19851',
//       name: 'Matthew',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Pembroke Pines',
//       breed: 'Cavalier King Charles Spaniel',
//       gender: 'Male',
//       dob: '8/28/19',
//       refId: '19852',
//       name: 'Mugsy',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Pembroke Pines',
//       breed: 'Cavalier King Charles Spaniel',
//       gender: 'Female',
//       dob: '9/4/19',
//       refId: '19908',
//       name: 'Lady Bird',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Kendall',
//       breed: 'Cavalier King Charles Spaniel',
//       gender: 'Male',
//       dob: '9/4/19',
//       refId: '2663',
//       name: 'Toby',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Kendall',
//       breed: 'Cavalier King Charles Spaniel',
//       gender: 'Female',
//       dob: '9/24/19',
//       refId: '2745',
//       name: 'April',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Kendall',
//       breed: 'Cavalier King Charles Spaniel',
//       gender: 'Male',
//       dob: '9/22/19',
//       refId: '2748',
//       name: 'Rocky',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Kendall',
//       breed: 'Cavalier King Charles Spaniel',
//       gender: 'Male',
//       dob: '8/28/19',
//       refId: '2759',
//       name: 'Bear',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Kendall',
//       breed: 'Cavalier King Charles Spaniel',
//       gender: 'Male',
//       dob: '10/2/19',
//       refId: '2783',
//       name: 'n/a',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Plantation',
//       breed: 'Cavalier King Charles Spaniel',
//       gender: 'Male',
//       dob: '9/24/19',
//       refId: '5305',
//       name: 'Smokey',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Davie',
//       breed: 'Cavalier King Charles Spaniel',
//       gender: 'Male',
//       dob: '9/3/19',
//       refId: '9694',
//       name: 'Zack',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Davie',
//       breed: 'Cavalier King Charles Spaniel',
//       gender: 'Male',
//       dob: '8/23/19',
//       refId: '9695',
//       name: 'Cody',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Davie',
//       breed: 'Cavalier King Charles Spaniel',
//       gender: 'Male',
//       dob: '9/12/19',
//       refId: '9732',
//       name: 'Henry',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Largo',
//       breed: 'Cavalier King Charles Spaniel',
//       gender: 'Male',
//       dob: '8/28/19',
//       refId: '25473',
//       name: 'Gilburt',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Largo',
//       breed: 'Cavalier King Charles Spaniel',
//       gender: 'Male',
//       dob: '9/1/19',
//       refId: '25509',
//       name: 'Max',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Largo',
//       breed: 'Cavalier King Charles Spaniel',
//       gender: 'Female',
//       dob: '9/22/19',
//       refId: '25565',
//       name: 'Pepper',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Largo',
//       breed: 'Cavalier King Charles Spaniel',
//       gender: 'Male',
//       dob: '9/22/19',
//       refId: '25566',
//       name: 'Buddy',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Largo',
//       breed: 'Cavapoo',
//       gender: 'Female',
//       dob: '8/25/19',
//       refId: '25480',
//       name: 'Ziva',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Pembroke Pines',
//       breed: 'Chihuahua',
//       gender: 'Female',
//       dob: '8/25/19',
//       refId: '19797',
//       name: 'Tiny',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Kendall',
//       breed: 'Chihuahua',
//       gender: 'Male',
//       dob: '9/18/19',
//       refId: '2763',
//       name: 'Toby',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Plantation',
//       breed: 'Chihuahua',
//       gender: 'Female',
//       dob: '9/18/19',
//       refId: '5318',
//       name: 'Blueberry',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Largo',
//       breed: 'Chihuahua',
//       gender: 'Male',
//       dob: '7/14/19',
//       refId: '25337',
//       name: 'Simon',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Pembroke Pines',
//       breed: 'Cock a poo',
//       gender: 'Female',
//       dob: '9/17/19',
//       refId: '19902',
//       name: 'Missy',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Pembroke Pines',
//       breed: 'Cock a poo',
//       gender: 'Male',
//       dob: '9/17/19',
//       refId: '19903',
//       name: 'Romeo',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Kendall',
//       breed: 'Cock a poo',
//       gender: 'Male',
//       dob: '9/24/19',
//       refId: '2779',
//       name: 'N/a',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Pembroke Pines',
//       breed: 'Cockapoo 2nd Generation',
//       gender: 'Male',
//       dob: '8/29/19',
//       refId: '19791',
//       name: 'Leo',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Kendall',
//       breed: 'Cockapoo',
//       gender: 'Female',
//       dob: '9/17/19',
//       refId: '2765',
//       name: 'Shirley',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Plantation',
//       breed: 'Cockapoo',
//       gender: 'Female',
//       dob: '9/13/19',
//       refId: '5300',
//       name: 'Charlotte',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Davie',
//       breed: 'Cockapoo',
//       gender: 'Male',
//       dob: '9/24/19',
//       refId: '9740',
//       name: 'Joey',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Largo',
//       breed: 'Cockapoo',
//       gender: 'Female',
//       dob: '9/17/19',
//       refId: '25574',
//       name: 'Bella',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Davie',
//       breed: 'Cockapoo 2nd Generation',
//       gender: 'Male',
//       dob: '9/25/19',
//       refId: '9742',
//       name: 'Buster',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Pembroke Pines',
//       breed: 'Cocker Spaniel',
//       gender: 'Male',
//       dob: '8/13/19',
//       refId: '19759',
//       name: 'Obi',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Kendall',
//       breed: 'Cocker Spaniel',
//       gender: 'Female',
//       dob: '10/2/19',
//       refId: '2785',
//       name: 'n/a',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Largo',
//       breed: 'Cocker Spaniel',
//       gender: 'Female',
//       dob: '10/2/19',
//       refId: '25595',
//       name: 'Tiffany',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Pembroke Pines',
//       breed: 'Dachshund',
//       gender: 'Female',
//       dob: '7/14/19',
//       refId: '19643',
//       name: 'Nella',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Pembroke Pines',
//       breed: 'Dachshund',
//       gender: 'Male',
//       dob: '9/18/19',
//       refId: '19878',
//       name: 'Groot',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Kendall',
//       breed: 'Dachshund',
//       gender: 'Male',
//       dob: '8/15/19',
//       refId: '2617',
//       name: 'Snape',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Kendall',
//       breed: 'Dachshund',
//       gender: 'Female',
//       dob: '9/29/19',
//       refId: '2780',
//       name: 'n/a',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Kendall',
//       breed: 'Dachshund',
//       gender: 'Female',
//       dob: '9/27/19',
//       refId: '2781',
//       name: 'n/a',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Plantation',
//       breed: 'Dachshund',
//       gender: 'Male',
//       dob: '9/16/19',
//       refId: '5290',
//       name: 'Bruno',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Davie',
//       breed: 'Dachshund',
//       gender: 'Female',
//       dob: '9/29/19',
//       refId: '9749',
//       name: 'n/a',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Largo',
//       breed: 'Dachshund',
//       gender: 'Female',
//       dob: '9/22/19',
//       refId: '25558',
//       name: 'Juno',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Largo',
//       breed: 'Dachshund',
//       gender: 'Female',
//       dob: '9/22/19',
//       refId: '25559',
//       name: 'Jada',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Largo',
//       breed: 'Dachshund',
//       gender: 'Male',
//       dob: '9/28/19',
//       refId: '25581',
//       name: 'Shadow',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Plantation',
//       breed: 'Dalmatian',
//       gender: 'Female',
//       dob: '9/23/19',
//       refId: '5322',
//       name: 'Penelope',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Davie',
//       breed: 'Dalmatian',
//       gender: 'Female',
//       dob: '9/23/19',
//       refId: '9736',
//       name: 'Missy',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Pembroke Pines',
//       breed: 'French Bulldog',
//       gender: 'Female',
//       dob: '7/25/19',
//       refId: '19681',
//       name: 'Hailey',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Pembroke Pines',
//       breed: 'French Bulldog',
//       gender: 'Female',
//       dob: '7/25/19',
//       refId: '19682',
//       name: 'Ruby',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Pembroke Pines',
//       breed: 'French Bulldog',
//       gender: 'Female',
//       dob: '8/26/19',
//       refId: '19800',
//       name: 'Athena',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Pembroke Pines',
//       breed: 'French Bulldog',
//       gender: 'Male',
//       dob: '9/5/19',
//       refId: '19866',
//       name: 'Kenny',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Pembroke Pines',
//       breed: 'French Bulldog',
//       gender: 'Male',
//       dob: '9/17/19',
//       refId: '19898',
//       name: 'Bob',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Pembroke Pines',
//       breed: 'French Bulldog',
//       gender: 'Male',
//       dob: '9/7/19',
//       refId: '19910',
//       name: 'Peanut',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Kendall',
//       breed: 'French Bulldog',
//       gender: 'Female',
//       dob: '9/26/19',
//       refId: '2761',
//       name: 'Lisa',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Kendall',
//       breed: 'French Bulldog',
//       gender: 'Female',
//       dob: '9/26/19',
//       refId: '2762',
//       name: 'Iris',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Kendall',
//       breed: 'French Bulldog',
//       gender: 'Female',
//       dob: '9/20/19',
//       refId: '2770',
//       name: 'Darla',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Kendall',
//       breed: 'French Bulldog',
//       gender: 'Female',
//       dob: '6/11/19',
//       refId: '2789',
//       name: 'Katniss',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Davie',
//       breed: 'French Bulldog',
//       gender: 'Female',
//       dob: '7/30/19',
//       refId: '9746',
//       name: 'Daisy',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Largo',
//       breed: 'French Bulldog',
//       gender: 'Female',
//       dob: '8/21/19',
//       refId: '25487',
//       name: 'Honey',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Largo',
//       breed: 'French Bulldog',
//       gender: 'Male',
//       dob: '9/30/19',
//       refId: '25561',
//       name: 'Cody',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Davie',
//       breed: 'French Mastiff',
//       gender: 'Female',
//       dob: '8/20/19',
//       refId: '9677',
//       name: 'Zelda',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Kenall',
//       breed: 'German Shepherd',
//       gender: 'Male',
//       dob: '9/27/19',
//       refId: '2686',
//       name: 'Cody',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Largo',
//       breed: 'Golden Retreiver',
//       gender: 'Female',
//       dob: '10/1/19',
//       refId: '25599',
//       name: 'Buttercup',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Pembroke Pines',
//       breed: 'German Shepherd',
//       gender: 'Female',
//       dob: '9/17/19',
//       refId: '19843',
//       name: 'Abby',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Davie',
//       breed: 'German Shepherd',
//       gender: 'Male',
//       dob: '9/17/19',
//       refId: '9744',
//       name: 'Zeke',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Davie',
//       breed: 'Akita',
//       gender: 'Male',
//       dob: '9/17/19',
//       refId: '25577',
//       name: 'Ziggy',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Davie',
//       breed: 'Akita',
//       gender: 'Female',
//       dob: '9/16/19',
//       refId: '25590',
//       name: 'Hailey',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Davie',
//       breed: 'French Bulldog',
//       gender: 'Male',
//       dob: '9/9/19',
//       refId: '2758',
//       name: 'Cloud',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Pembroke Pines',
//       breed: 'French Bulldog',
//       gender: 'Male',
//       dob: '9/9/19',
//       refId: '25551',
//       name: 'Harley',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Pembroke Pines',
//       breed: 'Akita',
//       gender: 'Male',
//       dob: '9/9/19',
//       refId: '25552',
//       name: 'Snoopy',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Pembroke Pines',
//       breed: 'Akita',
//       gender: 'Male',
//       dob: '9/26/19',
//       refId: '2746',
//       name: 'Jake',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Largo',
//       breed: 'German Shepherd',
//       gender: 'Female',
//       dob: '9/16/19',
//       refId: '2749',
//       name: 'Ariel',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Largo',
//       breed: 'German Shepherd',
//       gender: 'Female',
//       dob: '9/16/19',
//       refId: '2750',
//       name: 'Sookie',
//       img: ''
// },
// {
//       petType: 'Dog',
//       location: 'Davie',
//       breed: 'German Shepherd',
//       gender: 'Male',
//       dob: '9/24/19',
//       refId: '2772',
//       name: 'n/a',
//       img: ''
// }
// ];

// module.exports = petArray;

// Pet.create(petArray)	
//   .then(() => {	
//     console.log('it worked')	 
//   })
//   .catch(() => {	
//     console.log('it didnt work')
//   });
  
