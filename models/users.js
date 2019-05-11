//  MongoDB object modeling tool
const mongoose = require("mongoose");
// Create Schema class under Schema variable
const Schema = mongoose.Schema;

// Create Schema for collectionNameSchema
const ourUser = new Schema({
    id: '',
    name: 
    {
       type: String 
    },
    email: {
        type: String
    },
    images: [
        '',
        '',
    ],
    folders: [
        '',
        '',
        '',
    ]

});


module.exports = mongoose.model("users", ourUser);




users [
  {
      id: 'user1',
      name: 'k',
      email: 'k',
      images: [
      'img1',
      '565656767567',
      'tfftfyttyfft'
      ]
  }

]

images [
  {
      id: 'img1',
      title: "title",
      link: " www.www.",
      userID: "user1"
  },
  {
      id: '3434545354354',
      title: "title",
      link: " www.www.",
      userID: "12321332121"
  },
  {
      id: '3434545354354',
      title: "title",
      link: " www.www.",
      userID: "12321332121"
  },
  {
      id: '3434545354354',
      title: "title",
      link: " www.www.",
      userID: "12321332121"
  },
  {
      id: '3434545354354',
      title: "title",
      link: " www.www.",
      userID: "12321332121"
  },
  {
      id: '3434545354354',
      title: "title",
      link: " www.www.",
      userID: "12321332121"
  },
  {
      id: '3434545354354',
      title: "title",
      link: " www.www.",
      userID: "12321332121"
  },
]