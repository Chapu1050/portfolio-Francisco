---
title: Design Reflection for BloomScout
layout: doc
---

**Design Reflection**

Phew, it took a while to add all these API routes but it has been done. ON my first implementation, one of my decisions was to have arrays in some of the fields of certain concepts that store data already in the database such as Party which had an Array of Observations for the sharing Observations feature, however I realized this was redundant. It would suffice to store just the ID of these instead. I overall made many changes to be more practical for the database which I did not take into consideration when I made the original design doc.   
One thing that gave me a lot of issues was the organism identification which I ended up not including for this project. To use the íNaturalist computer vision api which will help me identify organisms, I first need to ask for permission which takes a while to approve. In the meantime I decided to try using api calls to gpt-4 to identify the creature but… it was very bad and unreliable. I decided to leave it out until I get the approval. Hopefully this would not take too long but if I cannot get access I might have to leave the feature out entirely or look for alternative methods such as other computer vision models. 