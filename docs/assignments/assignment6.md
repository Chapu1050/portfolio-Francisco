---
title: User Testing for BloomScout
layout: doc
---

Task List:

| Task | Instruction | Rationale |
| :---- | :---- | :---- |
| Post an Observation | Post an Organism picture you found on campus. | Observes how easy it is for a user to post about an organism and their location |
| Find their own post on the map | Can you find your post on the map? | See how users are able to identify their own posts |
| See their own observations | Can you find the page that displays your observations? | See how capable users are in finding their own posts |
| See other’s observations | Can you investigate someone else’s observation | See how able users are using a map |
| Upload historical picture | Can you post from your hometown? | Gauge users on understanding of latitude and longitude |

**User Study 1:**   
The user went on to post however they struggled a bit with the image and with the longitude/latitude. Posting an image requires finding an image URL for it and the longitude/latitude has to be set manually. The manual setting of the longitude/latitude did confuse the user quite a bit. The user got around this by sending me an image in Discord and then using its image link. Perhaps this could be automated by a discord bot for an interesting image hosting solution? Anyways the user then confused the longitude sign and asked if they could edit, which they could not so they had to make a new post. Filtering out other observations worked. Initially confused on where the my-observations tab was. The user noted it could be helpful to display words that correspond to what each icon means in the search bar.     
The user at the end seemed to demonstrate an understanding of how to post with latitude and longitude, however it could be even more helpful if there was not a reason for them to deal with that in the beginning. The Image URL workaround this user showed was very clever, and seems quite easy to automate with Discord’s api. This could lead to a unique image hosting solution which will work great on a small scale. The user noted that the UI mostly felt intuitive, but clearly labeling of words, and automating parts of the posting process could really help make the posting much better. The  map was easy and intuitive to use, however it is quite cluttered with all the google maps pins. Maybe using MapBox which supports all the same features andis less cluttered. 

**User Study 2**  
This user fell on a lot of the same pitfalls as the original. They struggled a bit with posting from a specific longitude and latitude. They also struggled with posting an image from the Image URL so I told this user about the solution the previous Study came up with. The user googled the longitude and latitude from their home town and forgot to include the negative sign when indicating west vs east which also led to some confusion. Overall there were a lot of the same pitfalls and occurrences from the first User Study which showed up again here. This user said the website was cool and all, but overall there was not much to do. I talked about the scrapbook feature, and they said that would definitely help attract them to this site. 

**Possible Improvements:**

1. Make specifying locations easier, maybe integrate addresses instead of longitude and latitude. Also add a fill in location button.   
2. Add a way to host images on MongoDB or some other service. This could be using Google Cloud or maybe even a Discord Bot.   
3. Add labels to the icons on the navbar, they noted it felt responsive but it was hard to tell what each icon did at a glance.   
4. Overall there could be some more content on the site like the scrapbook feature.

