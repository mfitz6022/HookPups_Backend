HookPups Server Repo
=================================

Overview:
---------
HookPups is a mobile social app for connecting dog owners with others. Owners can match their dogs up for play-dates with other dogs in the nearby vicinity using a dating-app like swipe feature. Once matched, owners can chat with each other and set meet-up events in their in-app calendar. 

Component Details:
-----------------

User Authentication / Profile Creation 
-----------------
<img src="https://github.com/HR-Ravenclaw/HookPups/blob/main/photos/login.png" width="250"/> <img src="https://github.com/HR-Ravenclaw/HookPups/blob/main/photos/createaccount.png" width="250"/> <img src="https://github.com/HR-Ravenclaw/HookPups/blob/main/photos/createprofile.png" width="250"/>

New end-users are required to create a user account with log-in details. Upon opening the app, the user will be prompted to provide their log-in details if not already logged in, and/or create a new user account in order to access the app’s functionalities. Additionally, the user will be able to edit their account details and set up their dog’s profile page.

Home Page w/ Swipe Feature
-----------------
<img src="https://github.com/HR-Ravenclaw/HookPups/blob/main/photos/homepage.png" width="250"/> <img src="https://github.com/HR-Ravenclaw/HookPups/blob/main/photos/filter.png" width="250"/>

The user will have the option to select dog friend preferences, and will be given one dog photo at a time allowing them to swipe to match with desired dog friends. Only dogs within a certain radius will be shown.

Events
-----------------
<img src="https://github.com/HR-Ravenclaw/HookPups/blob/main/photos/events.png" width="250"/> <img src="https://github.com/HR-Ravenclaw/HookPups/blob/main/photos/newevent.png" width="250"/>

The calendar page will store the user’s future meetup plans. It will allow the user to add their meetup information by selecting their dog friend from a list of confirmed matches as well as input the date, time, and location of the meet-up.

Matches
-----------------
<img src="https://github.com/HR-Ravenclaw/HookPups/blob/main/photos/matches.png" width="250"/> <img src="https://github.com/HR-Ravenclaw/HookPups/blob/main/photos/chat.png" width="250"/>

Users can view their confirmed matches in addition to their pending patches in a toggled list view. Upon clicking on a confirmed match it will open up a private chat room between the user and their match.

Profile
-----------------
<img src="https://github.com/HR-Ravenclaw/HookPups/blob/main/photos/profile.png" width="250"/>

Users can view their own profile and make edits if needed.

Built With:
-------------
* [React Native](https://reactnative.dev/)
* [Node](https://nodejs.dev/en/)
* [Express](https://expressjs.com/)
* [Babel](https://babeljs.io/)
* [Webpack](https://webpack.js.org/)
* [Axios](https://www.axios.com/)
* [Expo](https://expo.dev/)
* [Firebase](https://firebase.google.com/)


Installation:
-------------
To get a local copy up and running follow these simple steps:

Pre-Installation Requirements:
```
Node v16.16.0
NPM 8.11.0
```
Instructions:

1. Clone both client and server repos

Client: `git clone https://github.com/HR-Ravenclaw/HookPups.git`

Server: `git clone https://github.com/HR-Ravenclaw/HookPups_Backend`

2. Install NPM packages on both

`npm install`

3. In server terminal start the server

`npm start server/server.js`

4. In client terminal run the Expo/XCode simulator

`npm run ios`


Team
-----

### Matt Fitzgerald
<p><a href="https://github.com/mfitz6022"><img src="https://camo.githubusercontent.com/f6d50128cb007f85916b7a899da5d94f654dce35a37331c8d28573aef46f4274/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6769746875622d2532333132313031312e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d676974687562266c6f676f436f6c6f723d7768697465" alt="GitHub" data-canonical-src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&amp;logo=github&amp;logoColor=white" style="max-width: 100%;"></a>
<a href="mailto:mfitz6022@gmail.com"><img src="https://camo.githubusercontent.com/571384769c09e0c66b45e39b5be70f68f552db3e2b2311bc2064f0d4a9f5983b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f476d61696c2d4431343833363f7374796c653d666f722d7468652d6261646765266c6f676f3d676d61696c266c6f676f436f6c6f723d7768697465" alt="Gmail" data-canonical-src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&amp;logo=gmail&amp;logoColor=white" style="max-width: 100%;"></a>
<a href="https://www.linkedin.com/in/matthew-fitzgerald-30b556a9/" rel="nofollow"><img src="https://camo.githubusercontent.com/7e1a1a039c75a7c4d2a91d7f97bf0a1c2adcf7cb49b7dbbfc02963a4f9fdaca4/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c696e6b6564696e2d2532333030373742352e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6c696e6b6564696e266c6f676f436f6c6f723d7768697465" alt="Linkedin" data-canonical-src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&amp;logo=linkedin&amp;logoColor=white" style="max-width: 100%;"></a>
</p>

### Gracie Fogarty
<p><a href="https://github.com/GracieFogarty"><img src="https://camo.githubusercontent.com/f6d50128cb007f85916b7a899da5d94f654dce35a37331c8d28573aef46f4274/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6769746875622d2532333132313031312e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d676974687562266c6f676f436f6c6f723d7768697465" alt="GitHub" data-canonical-src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&amp;logo=github&amp;logoColor=white" style="max-width: 100%;"></a>
<a href="mailto:graciealysse@gmail.com"><img src="https://camo.githubusercontent.com/571384769c09e0c66b45e39b5be70f68f552db3e2b2311bc2064f0d4a9f5983b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f476d61696c2d4431343833363f7374796c653d666f722d7468652d6261646765266c6f676f3d676d61696c266c6f676f436f6c6f723d7768697465" alt="Gmail" data-canonical-src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&amp;logo=gmail&amp;logoColor=white" style="max-width: 100%;"></a>
<a href="https://www.linkedin.com/in/graciefogarty/" rel="nofollow"><img src="https://camo.githubusercontent.com/7e1a1a039c75a7c4d2a91d7f97bf0a1c2adcf7cb49b7dbbfc02963a4f9fdaca4/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c696e6b6564696e2d2532333030373742352e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6c696e6b6564696e266c6f676f436f6c6f723d7768697465" alt="Linkedin" data-canonical-src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&amp;logo=linkedin&amp;logoColor=white" style="max-width: 100%;"></a>
</p>

### Stephen Ho
<p><a href="https://github.com/stephen-ho"><img src="https://camo.githubusercontent.com/f6d50128cb007f85916b7a899da5d94f654dce35a37331c8d28573aef46f4274/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6769746875622d2532333132313031312e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d676974687562266c6f676f436f6c6f723d7768697465" alt="GitHub" data-canonical-src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&amp;logo=github&amp;logoColor=white" style="max-width: 100%;"></a>
<a href="mailto:stephenkho@me.com"><img src="https://camo.githubusercontent.com/571384769c09e0c66b45e39b5be70f68f552db3e2b2311bc2064f0d4a9f5983b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f476d61696c2d4431343833363f7374796c653d666f722d7468652d6261646765266c6f676f3d676d61696c266c6f676f436f6c6f723d7768697465" alt="Gmail" data-canonical-src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&amp;logo=gmail&amp;logoColor=white" style="max-width: 100%;"></a>
<a href="https://www.linkedin.com/in/hostephen/" rel="nofollow"><img src="https://camo.githubusercontent.com/7e1a1a039c75a7c4d2a91d7f97bf0a1c2adcf7cb49b7dbbfc02963a4f9fdaca4/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c696e6b6564696e2d2532333030373742352e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6c696e6b6564696e266c6f676f436f6c6f723d7768697465" alt="Linkedin" data-canonical-src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&amp;logo=linkedin&amp;logoColor=white" style="max-width: 100%;"></a>
</p>

### Daniel Au
<p><a href="https://github.com/dxnau"><img src="https://camo.githubusercontent.com/f6d50128cb007f85916b7a899da5d94f654dce35a37331c8d28573aef46f4274/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6769746875622d2532333132313031312e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d676974687562266c6f676f436f6c6f723d7768697465" alt="GitHub" data-canonical-src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&amp;logo=github&amp;logoColor=white" style="max-width: 100%;"></a>
<a href="mailto:daniel.au05@gmail.com"><img src="https://camo.githubusercontent.com/571384769c09e0c66b45e39b5be70f68f552db3e2b2311bc2064f0d4a9f5983b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f476d61696c2d4431343833363f7374796c653d666f722d7468652d6261646765266c6f676f3d676d61696c266c6f676f436f6c6f723d7768697465" alt="Gmail" data-canonical-src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&amp;logo=gmail&amp;logoColor=white" style="max-width: 100%;"></a>
<a href="https://www.linkedin.com/in/dxnielau" rel="nofollow"><img src="https://camo.githubusercontent.com/7e1a1a039c75a7c4d2a91d7f97bf0a1c2adcf7cb49b7dbbfc02963a4f9fdaca4/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c696e6b6564696e2d2532333030373742352e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6c696e6b6564696e266c6f676f436f6c6f723d7768697465" alt="Linkedin" data-canonical-src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&amp;logo=linkedin&amp;logoColor=white" style="max-width: 100%;"></a>
</p>

### Dan Tran
<p><a href="https://github.com/Dan-T-Tran"><img src="https://camo.githubusercontent.com/f6d50128cb007f85916b7a899da5d94f654dce35a37331c8d28573aef46f4274/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6769746875622d2532333132313031312e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d676974687562266c6f676f436f6c6f723d7768697465" alt="GitHub" data-canonical-src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&amp;logo=github&amp;logoColor=white" style="max-width: 100%;"></a>
<a href="mailto:dan.t.tran505@gmail.com"><img src="https://camo.githubusercontent.com/571384769c09e0c66b45e39b5be70f68f552db3e2b2311bc2064f0d4a9f5983b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f476d61696c2d4431343833363f7374796c653d666f722d7468652d6261646765266c6f676f3d676d61696c266c6f676f436f6c6f723d7768697465" alt="Gmail" data-canonical-src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&amp;logo=gmail&amp;logoColor=white" style="max-width: 100%;"></a>
<a href="https://www.linkedin.com/in/dan-t-tran/" rel="nofollow"><img src="https://camo.githubusercontent.com/7e1a1a039c75a7c4d2a91d7f97bf0a1c2adcf7cb49b7dbbfc02963a4f9fdaca4/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c696e6b6564696e2d2532333030373742352e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6c696e6b6564696e266c6f676f436f6c6f723d7768697465" alt="Linkedin" data-canonical-src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&amp;logo=linkedin&amp;logoColor=white" style="max-width: 100%;"></a>
</p>

### Siming Yum
<p><a href="https://github.com/simingyum"><img src="https://camo.githubusercontent.com/f6d50128cb007f85916b7a899da5d94f654dce35a37331c8d28573aef46f4274/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6769746875622d2532333132313031312e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d676974687562266c6f676f436f6c6f723d7768697465" alt="GitHub" data-canonical-src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&amp;logo=github&amp;logoColor=white" style="max-width: 100%;"></a>
<a href="mailto:zhuandshi@gmail.com"><img src="https://camo.githubusercontent.com/571384769c09e0c66b45e39b5be70f68f552db3e2b2311bc2064f0d4a9f5983b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f476d61696c2d4431343833363f7374796c653d666f722d7468652d6261646765266c6f676f3d676d61696c266c6f676f436f6c6f723d7768697465" alt="Gmail" data-canonical-src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&amp;logo=gmail&amp;logoColor=white" style="max-width: 100%;"></a>
<a href="https://www.linkedin.com/in/simingyum/" rel="nofollow"><img src="https://camo.githubusercontent.com/7e1a1a039c75a7c4d2a91d7f97bf0a1c2adcf7cb49b7dbbfc02963a4f9fdaca4/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c696e6b6564696e2d2532333030373742352e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6c696e6b6564696e266c6f676f436f6c6f723d7768697465" alt="Linkedin" data-canonical-src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&amp;logo=linkedin&amp;logoColor=white" style="max-width: 100%;"></a>
</p>
