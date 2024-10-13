---
title: Convergent Design for BloomScout
layout: doc
---

**BloomScout**  
BloomScout is a social media app focused on bringing back that feeling of childlike wonder associated with nature. People of all ages can use the app, and easily identify and track plants, animals and other organisms in the local environment. Whether the user is on an adventurous hike, or a stroll through the park, BloomScout will bring the wonders of nature to your fingertips. 

Inspired by the likes of íNaturalist and Pokemon Go, BloomScout features an interactive map where users can log, track, and discover wildlife. Real-time organism identification, community-shared routes and rewarding badges make exploring the outdoors exciting for everyone. Foster a sense of community by exchanging gifts, and exploring content curated by those around you. Whether you are looking to learn more about the world around you, or join friends on a walk, BloomScout brings the magic of the outdoors to your mobile device.

Concepts

1. Real Time Organism Identification:   
   1. Purpose: Allow users to identify plants, animals and other using their mobile camera.  
   2. Principal: The app uses a trained computer vision model such as the íNaturalist api to process images and provide identification.  
   3. States:  
      1. const active: Bool  
      2. const organism: Organism    
   4. Actions:  
      1. identify(img: Image, out org: Organism)  
      2. save(organism: Organism)  
2. Interactive Map with Organisms:  
   1. Purpose: provide a map with observed organisms allowing users to explore local and global biodiversity.  
   2. Principal: The map shows icons representing organism observations which users can see to learn more about each observation.  
   3. State:  
      1. observations: Set\[Observation\]  
      2. map: Map  
   4. Actions:   
      1. addObservation(loc: Location, org: Organism, img: Image)  
      2. filter(options: FilterOptions)  
      3. viewObservation(loc: Location, out obs: Observation)  
3. Routes:   
   1. Purpose: Enable users to create, share and explore user uploaded routes.  
   2. Principle: Users record walks and upload them for others to follow.  
   3. State:  
      1. routes: set\[Route\]  
      2. activeRoute: Route  
   4. Actions:  
      1. startRoute(loc: Location, out route: Route)  
      2. addPOI(loc: Location, obs: Observation, desc: String)  
      3. completeRoute(route: Route)  
      4. uploadRoute(loc: Location, route: Route)  
4. Badge System:  
   1. Purpose: Reward users for completing activities  
   2. Principal: Users earn badges when they complete specific actions, which are displayed on their profile.  
   3. State:  
      1. badges: Map\[ User , Set\[Badge\] \]   
      2. criteria: Conditions  
   4. Actions:  
      1. earnBadge(user: User, badge: Badge)  
      2. viewBadges(user: User, out badges: Set\[Badges\])  
5. Gift Exchange System:  
   1. Purpose: Foster a sense of community by allowing users to send and receive virtual gifts.  
   2. Principal: When a certain action is made such as completing a route, a user can exchange a gift with another user or friend.  
   3. State:   
      1. inventory: Map\[ User, Set\[Gift\] \]  
   4. Actions:  
      1. earnGift(user: User, gift: Gift)  
      2. sendGift(sender: User, recipient: User, gift: Gift)   
6. Party Mode:  
   1. Purpose: Allow groups of users to explore routes together and share observations.  
   2. Principal: Users can form a party to walk a route together with shared progress and synced observations.  
   3. State:  
      1. users: Set\[User\]  
      2. sharedObservations: Array\[Observation\]  
   4. Actions:  
      1. createParty(leader: User, out party: Party)  
      2. joinParty(user: User, party: Party)  
      3. shareObservation(obs: Observation, party: Party)  
7. Scrapbook:  
   1. Purpose: Allow users to have a personalizable scrapbook they can share with others.  
   2. Principal: A set of pages users can pin pictures of observations, badges, and postcards.  
   3. State:  
      1. Posts: Array\[ \[Int, Coordinate, Post \] // Int is page number, Coordinate is location on page and Post is what is being shown off.  
   4. Actions:  
      1. addPost(post: Post, pageNumber: Int, coordinate: Coordinate)  
      2. removePost(post: Post) 

Wireframe:    
[BloomScout Figma Wireframe]("https://www.figma.com/proto/1GOhPAuDII7vDkCkJLIUQm/BloomScoute-basic-Wireframe?node-id=0-1&t=q2qfMsPKwOlQrqhO-1")

Please note that the wireframe is not entirely complete: I still have not gotten around to how to specifically add gift giving and I have not included multiple pages for the scrapbook yet.

Design Tradeoffs:

After making the wireframe, I have some doubts on how I will organize all the features and concepts. Luckily, my app can use a lot of design cues from popular apps like Pokemon Go but even those apps have some shortcomings in organizing all their features which I am not sure I generally like. A lot of issues came with choosing if something will be a pop-up, page or something else. One of these choices was how to display the badges, observations, and postcards someone has in their inventory. I could make an inventory page for all of them or have separate pages for each type of object. Pokemon Go does this in an unsatisfying way where different items have different pages and some have the same and the inventory is somewhat messed up. I decided to go with three different inventories and you can choose which page to go to by clicking a popup that appears after clicking the box icon on the bottom left. 

In the process of making the map, I realized it could be quite easy to get doxxed or tracked. When users upload observations and routes, the location when it was published is made available to everyone. We can mitigate this by allowing users to make observations which only they and their friends can see similar to Instagram Private accounts. We can also let users upload observations anonymously or even add a publish later option which publishes an observation some select time after it was made.  

Overall there are some factors I am still concerned about organizing which I will have to further tune as I develop the app and as I see what will make the most sense in practice.   
