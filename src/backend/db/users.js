import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "x9rEfGhi-c",
    firstName: "Sam",
    lastName: "Sathya",
    username: "sam_sathya123",
    bookmarks: [],
    followers: [],
    following: [],
    password: "JDp@ssW0rd",
    bio: "Seeking adventures around the world!",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profileImg: "https://writestylesonline.com/wp-content/uploads/2019/01/What-To-Wear-For-Your-Professional-Profile-Picture-or-Headshot.jpg"
  },
  {
    _id: "m1qAbCDr-b",
    firstName: "Emma",
    lastName: "Smith",
    username: "emma_smith",
    bookmarks: [],
    followers: [],
    following: [],
    password: "E$mithPassw0rd",
    bio: "Passionate about painting and photography!",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profileImg: "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-6.jpg"
  },
  {
    _id: "s2pXjVEq-a",
    firstName: "Isabella",
    lastName: "Jones",
    username: "isabella_jones",
    password: "IsabellaJones123",
    bio: "Adventurer by day, coder by night!",
    bookmarks: [],
    followers: [],
    following: [],
    createdAt: "2022-02-15T15:30:45+05:30",
    updatedAt: "2023-05-20T09:12:30+05:30",
    profileImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ446DjpChVJ1GGgZLhvOLaNei0z2hxeHDeRGEeMEmLgdQ8dJrpFUjPBBaY0olI2uQ_etU&usqp=CAU"
  },
  {
    _id: "r5mYhTBx-b",
    firstName: "Michael",
    lastName: "Johnson",
    username: "michael_johnson",
    password: "M1chael_J0hnson",
    followers: [],
    following: [],
    bio: "Dream big, achieve bigger!",
    bookmarks: [],
    createdAt: "2022-03-10T08:45:12+05:30",
    updatedAt: "2023-06-05T11:20:15+05:30",
    profileImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcRuis3naVOidfr-89QVZTFyAwnncSVE-FanR0eUO44l2T0-42F31HNW0aSrrQSmXEcyI&usqp=CAU"
  },
  {
    _id: "u8nZkQCv-c",
    firstName: "Anna",
    lastName: "Murphy",
    username: "anna_murphy",
    password: "MurphyAnna_22",
    followers: [],
    following: [],
    bio: "Passion fuels progress!",
    bookmarks: [],
    createdAt: "2022-04-22T16:20:30+05:30",
    updatedAt: "2023-06-09T14:05:50+05:30",
    profileImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL8VLZVDzsYkRX7BvB6naWciwPf9mo6N84WW5g7kj1OYivbgT4Bswe1Oyh5ZRhS3kiF1k&usqp=CAU"
  },
  {
    _id: "p3lSdYFu-d",
    firstName: "Olivia",
    lastName: "Turner",
    username: "olivia_turner",
    password: "Turn3rOl1v!a",
    bio: "Spread love and kindness!",
    bookmarks: [],
    followers: [],
    following: [],
    createdAt: "2022-05-05T12:10:25+05:30",
    updatedAt: "2023-06-10T08:35:40+05:30",
    profileImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTObO69po1QllYI9cEzlfAPQF7DX8221EsKxg&usqp=CAU"
  },
  {
    _id: "m9vXrDJy-f",
    firstName: "Olivia",
    lastName: "Brown",
    username: "olivia_brown",
    password: "0l!v!@_Br0wn",
    bio: "Believe in yourself!",
    bookmarks: [],
    followers: [],
    following: [],
    createdAt: "2022-07-01T14:30:15+05:30",
    updatedAt: "2023-06-10T12:15:10+05:30",
    profileImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8lhE9UpdBkX1Sv94pmC3NTSkxT5ytXBKveaJ5OcDYCr4ChNEVjzz_WalE6YsGQA6EksQ&usqp=CAU"
  },
  {
    _id: "w2gKfUEo-g",
    firstName: "Ethan",
    lastName: "Anderson",
    username: "ethan_anderson",
    password: "A@nd3rs0nEthan",
    bio: "Chase your dreams!",
    followers: [],
    following: [],
    bookmarks: [],
    createdAt: "2022-08-14T09:25:50+05:30",
    updatedAt: "2023-06-10T14:45:05+05:30",
    profileImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ__3UTlcM24tmkeDRxJXpw9GH-teby4KOJIi3XoOxHT0W4FZPpSgR_OO6n75s8ddkCgPI&usqp=CAU"
  }
];
