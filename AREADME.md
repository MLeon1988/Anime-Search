# Project Overview

## Project Name

The Anime Search Box

## Project Description

Intent is to be able to search for a random Anime title and get back information and an image for the particular Animw.

## API and Data Sample

const url = 'https://api.jikan.moe/v3/anime'


fetch(url)
  .then(res => res.json())
  .then(res => console.log(res.data));

  Array(25)
0: {mal_id: 1, url: 'https://myanimelist.net/anime/1/Cowboy_Bebop', images: {…},

## Wireframes

Upload images of your wireframes to an image hosting site or add them to an assets folder in your repo and link them here with a description of each specific wireframe.

### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 
*These are examples only. Replace with your own MVP features.*

- Find and use external api 
- Render data on page 
- Allow user to search specific anime titles
- Read specific data of anime titles

#### PostMVP  
*These are examples only. Replace with your own Post-MVP features.*

- Add links for trailer
- Use local storage to save user favorites anime
_ update data storage with the newest anime titles

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations. Lay out the days you anticipate hitting your major milestones. Below is a suggested schedlue. Feel free to adjust it.

|  Day | Deliverable | Status
|---|---| ---|
|June 23| Project Approval / Pseudocode / actual code | 
|June 25| Core Application Structure (HTML, CSS, etc.)  MVP | 
|June 26-27| Run and test code for errors| 
|June 28| Presentations |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
