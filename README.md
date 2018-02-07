# Personal REACT Challenge (Day 5) - Great Quotes App (React + Firebase)

## Personal challenge
I commited myself to get better with React and started 
this challange to create **one simple react app** every 
single day for the next 7 days. 

I was only a beginner at the beginning, I read few tutorials
on the web, but I wanted to know how I can fully work with 
React. So I started this challenge.

I expect to get real know-how of React and start thinking
in "Component-State-Props" philosophy. 

My challange consisted of:
- HTML Markup
- CSS styling with Styled Components
- REACT interactions, components, states
- Firebase realtime database integration

## Firebase
For this challange I decided to use firebase realtime database and hosting to create real and working public app so data is always saved in the database.

## Final build

[Visit website](https://my-great-quotes.firebaseapp.com/)

## Great Quotes App
I decided to build simple web app, which displays the most popular quotes from many inspirational people. 

For this project I got inspired by [this design](https://dribbble.com/shots/1381916-Quotes-Homepage/) from talented [Ramil Derogongun](https://dribbble.com/ramil) at dribbble.

The website consist of 3 components:
#### 1. Menu bar component 
It is simple menu, with input for search. Search is not working currently and links are dead. Syling was done through Styled-Components and Semantic-UI-react css framework.

#### 2. Top 4 popular quotes component
Displays 4 most popular quotes (more likes more popular). Quotes were fetched from firebase database dynamically. 

#### 3. Quotes and Tags panels component
In Quotes panel are displayed all quotes fetched from firebase database with proper information about author and amnout of likes for this quote.
In Tags panel is each tag listed as checkbox for filtering. Filtering is not yet available. Tags are dynamically fetched in real time from firebase.

Visit the app on [this link](https://my-great-quotes.firebaseapp.com/) to learn more.

Thank you for your interest! 