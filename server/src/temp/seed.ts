require("dotenv").config();
import { ObjectId } from "mongodb";
import { connectDatabase } from "../database";
import { Cat, User } from "../lib/types";

const cats: Cat[] = [
  {
    _id: new ObjectId("5d378db94e84753160e08b30"),
    username: "frito_the_cat",
    profileName: "Frito",
    profileImage:
      "https://images.unsplash.com/photo-1629624467541-f73ef8f12df2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
    bannerImage:
      "https://images.unsplash.com/photo-1512873897628-eea05c840147?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnJpdGlzaCUyMHNob3J0aGFpcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    bio: "Frito the cat | Playful Cat | Born December 2020",
    location: "Berlin, Germany",
    link: "www.frito.com",
    dateJoined: "September 2021",
    followers: 12,
    subscriptionPrice: 10,
    posts: [],
  },
  {
    _id: new ObjectId("5d378db94e84753160e08b31"),
    username: "priscilla_poofball",
    profileName: "Priscilla Poofball",
    profileImage:
      "https://media.istockphoto.com/photos/portrait-of-siberian-kitten-studio-shoot-picture-id824499156?b=1&k=20&m=824499156&s=170667a&w=0&h=Fe2ccDtJbbgelf9oBxiUlybrPyQ4qzavh9-Xnrgpn6w=",
    bannerImage:
      "https://images.unsplash.com/photo-1620072888881-c0f56753769c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9yZXN0JTIwY2F0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    bio: "Priscilla Poofball | Pretty Cat | Born Fevruary 2021",
    location: "Reykjavik, Iceland",
    link: "www.priscpoof.com",
    dateJoined: "November 2021",
    followers: 45,
    subscriptionPrice: 15,
    posts: [],
  },
  {
    _id: new ObjectId("5d378db94e84753160e08b32"),
    username: "priscilla_poofball",
    profileName: "Priscilla Poofball",
    profileImage:
      "https://images.unsplash.com/photo-1617813480540-abeb1ecca79a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bmV2YSUyMG1hc3F1ZXJhZGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    bannerImage:
      "https://images.unsplash.com/photo-1620072888881-c0f56753769c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9yZXN0JTIwY2F0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    bio: "Priscilla Poofball | Pretty Cat | Born February 2021",
    location: "Reykjavik, Iceland",
    link: "www.priscpoof.com",
    dateJoined: "November 2021",
    followers: 45,
    subscriptionPrice: 19,
    posts: [],
  },
  {
    _id: new ObjectId("5d378db94e84753160e08b33"),
    username: "Bento_Boy",
    profileName: "Bento",
    profileImage:
      "https://media.istockphoto.com/photos/portrait-of-cute-siberian-cat-with-green-eyes-copy-space-close-up-picture-id1263522976?b=1&k=20&m=1263522976&s=170667a&w=0&h=PzqguHjdxPwAvK9aPvZzHzdMOWulkyw-hVk_IfzqgA0=",
    bannerImage:
      "https://media.istockphoto.com/photos/siberian-cat-relaxing-on-the-floor-indoors-picture-id1139569345?b=1&k=20&m=1139569345&s=170667a&w=0&h=kS6QBFyNTTVYqTITVvbb1FdDwTwGiZkpRLWvgZx7W1c=",
    bio: "Bento | Cuddly Cat | Born July 2019",
    location: "Melbourne, Australia",
    link: "www.bento-cat.com",
    dateJoined: "October 2021",
    followers: 60,
    subscriptionPrice: 0,
    posts: [],
  },
  {
    _id: new ObjectId("5d378db94e84753160e08b34"),
    username: "Benji_cat",
    profileName: "Benji",
    profileImage:
      "https://media.istockphoto.com/photos/portrait-of-a-bengal-cat-with-bright-green-eyes-on-grass-picture-id157195025?b=1&k=20&m=157195025&s=170667a&w=0&h=c9nEamHpbz8DzzHv7e7zAlfzwYs8B_7e9vSjhju0rMI=",
    bannerImage:
      "https://media.istockphoto.com/photos/cute-bengal-funny-cat-playing-picture-id1071204136?b=1&k=20&m=1071204136&s=170667a&w=0&h=GxA9FwUlM1iXnaJTqAWEI0hi4DQ5Rj9QDIH6_YLW3Sk=",
    bio: "Benji | Slinky Cat | Born January 2021",
    location: "Washington, USA",
    link: "www.benji-cat.com",
    dateJoined: "September 2021",
    followers: 25,
    subscriptionPrice: 9,
    posts: [],
  },
  {
    _id: new ObjectId("5d378db94e84753160e08b35"),
    username: "Lucy_Lamont",
    profileName: "Lucy Lamont",
    profileImage:
      "https://images.unsplash.com/photo-1559914392-48b4bc800d0a?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    bannerImage:
      "https://images.unsplash.com/photo-1559914492-ddd6970ef258?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    bio: "Benji | Slinky Cat | Born January 2021",
    location: "Wellington, New Zealand",
    link: "www.lucy-l.com",
    dateJoined: "October 2021",
    followers: 86,
    subscriptionPrice: 6,
    posts: [],
  },
];

const users: User[] = [
  {
    _id: "61518774ba834050d18261b8",
    token: "token_************",
    name: "Michael Hartman",
    avatar:
      "https://images.unsplash.com/photo-1547037579-f0fc020ac3be?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3Ryb25nJTIwZXllYnJvd3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    contact: "michael@onlycats.com",
    catBucks: 1000,
    accounts: [
      {
        _id: new ObjectId("5d378db94e84753160e08b30"),
        username: "frito_the_cat",
        profileName: "Frito",
        profileImage:
          "https://images.unsplash.com/photo-1629624467541-f73ef8f12df2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
        bannerImage:
          "https://images.unsplash.com/photo-1512873897628-eea05c840147?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnJpdGlzaCUyMHNob3J0aGFpcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        bio: "Frito the cat | Playful Cat | Born December 2020",
        location: "Berlin, Germany",
        link: "www.frito.com",
        dateJoined: "September 2021",
        followers: 12,
        subscriptionPrice: 10,
        posts: [],
      },
    ],
  },
  {
    _id: "61518f71ba834050d18261b9",
    token: "token_************",
    name: "Emily Wilson",
    avatar:
      "https://media.istockphoto.com/photos/learn-to-love-yourself-first-picture-id1291208214?b=1&k=20&m=1291208214&s=170667a&w=0&h=sAq9SonSuefj3d4WKy4KzJvUiLERXge9VgZO-oqKUOo=",
    contact: "emily@onlycats.com",
    catBucks: 1000,
    accounts: [
      {
        _id: new ObjectId("5d378db94e84753160e08b31"),
        username: "priscilla_poofball",
        profileName: "Priscilla Poofball",
        profileImage:
          "https://media.istockphoto.com/photos/portrait-of-siberian-kitten-studio-shoot-picture-id824499156?b=1&k=20&m=824499156&s=170667a&w=0&h=Fe2ccDtJbbgelf9oBxiUlybrPyQ4qzavh9-Xnrgpn6w=",
        bannerImage:
          "https://images.unsplash.com/photo-1620072888881-c0f56753769c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9yZXN0JTIwY2F0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        bio: "Priscilla Poofball | Pretty Cat | Born Fevruary 2021",
        location: "Reykjavik, Iceland",
        link: "www.priscpoof.com",
        dateJoined: "November 2021",
        followers: 45,
        subscriptionPrice: 15,
        posts: [],
      },
    ],
  },
  {
    _id: "61519208ba834050d18261ba",
    token: "token_************",
    name: "Elijah Ferguson",
    avatar:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    contact: "elijah@onlycats.com",
    catBucks: 1000,
    accounts: [
      {
        _id: new ObjectId("5d378db94e84753160e08b32"),
        username: "priscilla_poofball",
        profileName: "Priscilla Poofball",
        profileImage:
          "https://images.unsplash.com/photo-1617813480540-abeb1ecca79a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bmV2YSUyMG1hc3F1ZXJhZGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        bannerImage:
          "https://images.unsplash.com/photo-1620072888881-c0f56753769c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9yZXN0JTIwY2F0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        bio: "Priscilla Poofball | Pretty Cat | Born February 2021",
        location: "Reykjavik, Iceland",
        link: "www.priscpoof.com",
        dateJoined: "November 2021",
        followers: 45,
        subscriptionPrice: 19,
        posts: [],
      },
    ],
  },
  {
    _id: "61519351ba834050d18261bb",
    token: "token_************",
    name: "Hayley Stilton",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    contact: "hayley@onlycats.com",
    catBucks: 1000,
    accounts: [
      {
        _id: new ObjectId("5d378db94e84753160e08b33"),
        username: "Bento_Boy",
        profileName: "Bento",
        profileImage:
          "https://media.istockphoto.com/photos/portrait-of-cute-siberian-cat-with-green-eyes-copy-space-close-up-picture-id1263522976?b=1&k=20&m=1263522976&s=170667a&w=0&h=PzqguHjdxPwAvK9aPvZzHzdMOWulkyw-hVk_IfzqgA0=",
        bannerImage:
          "https://media.istockphoto.com/photos/siberian-cat-relaxing-on-the-floor-indoors-picture-id1139569345?b=1&k=20&m=1139569345&s=170667a&w=0&h=kS6QBFyNTTVYqTITVvbb1FdDwTwGiZkpRLWvgZx7W1c=",
        bio: "Bento | Cuddly Cat | Born July 2019",
        location: "Melbourne, Australia",
        link: "www.bento-cat.com",
        dateJoined: "October 2021",
        followers: 60,
        subscriptionPrice: 0,
        posts: [],
      },
    ],
  },
  {
    _id: "6152cea5125c737535927ff0",
    token: "token_************",
    name: "Harry Johnston",
    avatar:
      "https://images.unsplash.com/photo-1529323982315-dc62007fa693?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fGd1eSUyMGJsb25kZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    contact: "harry@onlycats.com",
    catBucks: 1000,
    accounts: [
      {
        _id: new ObjectId("5d378db94e84753160e08b34"),
        username: "Benji_cat",
        profileName: "Benji",
        profileImage:
          "https://media.istockphoto.com/photos/portrait-of-a-bengal-cat-with-bright-green-eyes-on-grass-picture-id157195025?b=1&k=20&m=157195025&s=170667a&w=0&h=c9nEamHpbz8DzzHv7e7zAlfzwYs8B_7e9vSjhju0rMI=",
        bannerImage:
          "https://media.istockphoto.com/photos/cute-bengal-funny-cat-playing-picture-id1071204136?b=1&k=20&m=1071204136&s=170667a&w=0&h=GxA9FwUlM1iXnaJTqAWEI0hi4DQ5Rj9QDIH6_YLW3Sk=",
        bio: "Benji | Slinky Cat | Born January 2021",
        location: "Washington, USA",
        link: "www.benji-cat.com",
        dateJoined: "September 2021",
        followers: 25,
        subscriptionPrice: 9,
        posts: [],
      },
    ],
  },
  {
    _id: "6152d10c125c737535927ff1",
    token: "token_************",
    name: "Christine Richards",
    avatar:
      "https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGdpcmx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    contact: "christine@onlycats.com",
    catBucks: 1000,
    accounts: [
      {
        _id: new ObjectId("5d378db94e84753160e08b35"),
        username: "Lucy_Lamont",
        profileName: "Lucy Lamont",
        profileImage:
          "https://images.unsplash.com/photo-1559914392-48b4bc800d0a?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        bannerImage:
          "https://images.unsplash.com/photo-1559914492-ddd6970ef258?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        bio: "Benji | Slinky Cat | Born January 2021",
        location: "Wellington, New Zealand",
        link: "www.lucy-l.com",
        dateJoined: "October 2021",
        followers: 86,
        subscriptionPrice: 6,
        posts: [],
      },
    ],
  },
];

const seed = async () => {
  try {
    console.log("[seed] : running...");

    const db = await connectDatabase();

    for (const cat of cats) {
      await db.cats.insertOne(cat);
    }

    for (const user of users) {
      await db.users.insertOne(user);
    }

    console.log("[seed] : Success");
  } catch (error) {
    throw new Error("Failed to seed database: " + error);
  }
};

seed();
