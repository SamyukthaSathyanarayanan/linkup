import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

export const posts = [
  {
    _id: uuid(),
    content: "Just returned from an amazing hiking trip in the mountains! 🏞️ #adventure #nature",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "sam_sathya123",
    createdAt: "2023-06-02T07:50:35+05:30",
    updatedAt: formatDate(),
    profileImg: "https://writestylesonline.com/wp-content/uploads/2019/01/What-To-Wear-For-Your-Professional-Profile-Picture-or-Headshot.jpg"
  },
  {
    _id: uuid(),
    content: "Feeling inspired after attending a painting workshop. Can't wait to create more art! 🎨 #art #creativity",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "r5mYhTBx-b",
          firstName: "Michael",
          lastName: "Johnson",
          username: "michael_johnson",
          followers: [],
          following: [],
          createdAt: formatDate(),
          updatedAt: formatDate(),
          profileImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcRuis3naVOidfr-89QVZTFyAwnncSVE-FanR0eUO44l2T0-42F31HNW0aSrrQSmXEcyI&usqp=CAU"
        }
      ],
      dislikedBy: [],
    },
    username: "emma_smith",
    createdAt: "2023-06-13T07:50:35+05:30",
    updatedAt: formatDate(),
    profileImg: "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-6.jpg"
  },
  {
    _id: uuid(),
    content: "Successfully deployed my first coding project! 💻 #coding #developerlife",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "isabella_jones",
    createdAt: "2023-06-06T07:50:35+05:30",
    updatedAt: formatDate(),
    profileImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ446DjpChVJ1GGgZLhvOLaNei0z2hxeHDeRGEeMEmLgdQ8dJrpFUjPBBaY0olI2uQ_etU&usqp=CAU"
  },
  {
    _id: uuid(),
    content: "Just had a wonderful time with friends at the beach! 🏖️ #beachlife #friends",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "anna_murphy",
    createdAt: "2023-06-10T12:30:00+05:30",
    updatedAt: formatDate(),
    profileImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL8VLZVDzsYkRX7BvB6naWciwPf9mo6N84WW5g7kj1OYivbgT4Bswe1Oyh5ZRhS3kiF1k&usqp=CAU"
  },
  {
    _id: uuid(),
    content: "New year, new goals! Setting ambitious targets for 2023. 💪 #newyearresolutions",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "w2gKfUEo-g",
          firstName: "Ethan",
          lastName: "Anderson",
          username: "ethan_anderson",
          followers: [],
          following: [],
          createdAt: formatDate(),
          updatedAt: formatDate(),
          profileImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ__3UTlcM24tmkeDRxJXpw9GH-teby4KOJIi3XoOxHT0W4FZPpSgR_OO6n75s8ddkCgPI&usqp=CAU"
        },
        {
          _id: "m1qAbCDr-b",
          firstName: "Olivia",
          lastName: "Brown",
          username: "olivia_brown",
          followers: [],
          following: [],
          createdAt: formatDate(),
          updatedAt: formatDate(),
          profileImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTObO69po1QllYI9cEzlfAPQF7DX8221EsKxg&usqp=CAU"
        }
        
      ],
      dislikedBy: [],
    },
    username: "sam_sathya123",
    createdAt: "2023-06-15T18:45:20+05:30",
    updatedAt: formatDate(),
    profileImg: "https://writestylesonline.com/wp-content/uploads/2019/01/What-To-Wear-For-Your-Professional-Profile-Picture-or-Headshot.jpg"
  },
  {
    _id: uuid(),
    content: "Trying out a new vegan recipe today! 🌱 #vegan #cooking",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "emma_smith",
    createdAt: "2023-06-07T11:10:40+05:30",
    updatedAt: formatDate(),
    profileImg: "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-6.jpg"
  },
  {
    _id: uuid(),
    content: "Can't wait for the upcoming music festival! 🎶 #music #festivalseason",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "emma_smith",
    createdAt: "2023-06-09T09:20:15+05:30",
    updatedAt: formatDate(),
    profileImg: "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-6.jpg"
  },
  {
    _id: uuid(),
    content: "Just finished reading an intriguing mystery novel. Highly recommended! 📖 #booklover #mystery",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "x9rEfGhi-c",
          firstName: "Emma",
          lastName: "Smith",
          username: "emma_smith",
          followers: [],
          following: [],
          createdAt: formatDate(),
          updatedAt: formatDate(),
          profileImg: "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-6.jpg"
        }
      ],
      dislikedBy: [],
    },
    username: "isabella_jones",
    createdAt: "2023-06-12T15:55:00+05:30",
    updatedAt: formatDate(),
    profileImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ446DjpChVJ1GGgZLhvOLaNei0z2hxeHDeRGEeMEmLgdQ8dJrpFUjPBBaY0olI2uQ_etU&usqp=CAU"
  },
  {
    _id: uuid(),
    content: "Working on a new project with my coding buddies! Exciting times ahead. 👩‍💻 #coding",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "isabella_jones",
    createdAt: "2023-06-14T08:30:10+05:30",
    updatedAt: formatDate(),
    profileImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ446DjpChVJ1GGgZLhvOLaNei0z2hxeHDeRGEeMEmLgdQ8dJrpFUjPBBaY0olI2uQ_etU&usqp=CAU"
  },
  {
    _id: uuid(),
    content: "Exploring new destinations and capturing breathtaking views! 📷 #travel #photography",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "anna_murphy",
    createdAt: "2023-06-17T13:20:30+05:30",
    updatedAt: formatDate(),
    profileImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL8VLZVDzsYkRX7BvB6naWciwPf9mo6N84WW5g7kj1OYivbgT4Bswe1Oyh5ZRhS3kiF1k&usqp=CAU"
  },
  {
    _id: uuid(),
    content: "Sharing my thoughts on the latest technology trends. Let's stay ahead of the curve! 🚀 #technology",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "anna_murphy",
    createdAt: "2023-06-18T09:45:25+05:30",
    updatedAt: formatDate(),
    profileImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL8VLZVDzsYkRX7BvB6naWciwPf9mo6N84WW5g7kj1OYivbgT4Bswe1Oyh5ZRhS3kiF1k&usqp=CAU"
  },
  {
    _id: uuid(),
    content: "Late-night coding sessions are the best! 🔥 #coding #programming",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "sam_sathya123",
    createdAt: "2023-06-20T02:15:50+05:30",
    updatedAt: formatDate(),
    profileImg: "https://writestylesonline.com/wp-content/uploads/2019/01/What-To-Wear-For-Your-Professional-Profile-Picture-or-Headshot.jpg"
  },
  {
    _id: uuid(),
    content: "Cherishing the memories of an amazing trip to the mountains! 🏔️ #adventure #nature",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "sam_sathya123",
    createdAt: "2023-06-21T19:30:00+05:30",
    updatedAt: formatDate(),
    profileImg: "https://writestylesonline.com/wp-content/uploads/2019/01/What-To-Wear-For-Your-Professional-Profile-Picture-or-Headshot.jpg"
  },
  {
    _id: uuid(),
    content: "Exploring new hiking trails with friends! Nature never ceases to amaze me. 🌿 #nature #hiking",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "anna_murphy",
    createdAt: "2023-06-23T11:40:15+05:30",
    updatedAt: formatDate(),
    profileImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL8VLZVDzsYkRX7BvB6naWciwPf9mo6N84WW5g7kj1OYivbgT4Bswe1Oyh5ZRhS3kiF1k&usqp=CAU"
  },
];
