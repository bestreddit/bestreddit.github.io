# Bestreddit 🤖

### Intro
Bestreddit :- A site with complete collection of popular and useful subreddits which is completely maintained by opensource community 🚪

#
### How to Contribute 🤝?
 Contributions are the key which runs the entire repo. All kind of Contributions are appreciated.

📝 We mainly focus on building the Data Base which contains the information regarding the Subreddits.

The entire data related to the subreddits are contained in the `/data/data.js`.
`data.js` contains a set of JSON data which holds the data, and it is in the format
```
 {
    "make": "Programming",
    "type": "Programming",
    "Link": "/r/programmin/"
  },
  {
    "make": "Ask your Questions",
    "type": "Information",
    "Link": "/r/AskReddit"
  }
  ```
  `make` :- This can be the sub-reddit name,If the Name is not very specific to the Groups content then you can set the value of `make` key to something that is related to the content of the group.
 If it is too confusing then simply set the value to the subreddit name itself 🍻.

  `type` :- This key is for specifying the category of the subreddit.

  `Link` :- Yah!! Definitely the link of the Group 🏳

 The search is based on multiple factors and hence try to keep the `type` and `make` more focused and straight

 ### Adding Data
 Make a Pull request after adding the data to `data.js`. It is that simple 🤗.

 It will be nice if you could mention that you are updating `data.js` in the pull request title.

 🎇 You can also make change to the `website` and submit a Pull Request. New Suggestions,Features,Bug-Fixes,Color-Changes,UI-Changes etc... All kind of contributions are accepted
 and make sure you keep an eye on `data.js` which is the core of the repo and make effort to increase the DB

 ### To the contributors with love 💓
 We really love to acknowledge your contribution.No matter what you contribute every contribution really means a lot to this open source world.
 You can find the people who have contributed to the project here (https://bestreddit.github.io/thanks.html)


 Yes a special page to thank them !!

Feel free to open an Issue if you get stuck somewhere...
Let's Get Started 🚗🚗

---

### Home Page
![BestReddit](https://github.com/bestreddit/bestreddit-asset/blob/main/bestreddit.PNG)

### Acknowledgement
"Eric Winton"- Codepen.io

### License
This project is licensed under the MIT license, Copyright (c) 2020 Tibin Sunny. For more information see `LICENSE.md`
