# new-testament-verses



## Project Description

 new-testament-verses is an Airtable and React build where the user is able to get some of the new testament verses.It helps to study and memorize bible verses. It also allows the users to add their favorite verses. 

## Wireframes

The wireframes below depict the homepage and review feed for new-testament-verses in window and phone format. The homepage contains a header displaying the app title and three clickable icons - movies, television and sports - that route to each respective review feed. The review feeds contain an input form and submit button for review data. Below the form is a feed of all past forms, along with a delete button for each post. The screens will center as screen size decreases.

[wireframe](https://whimsical.com/new-testament-verse-9fxRrtMcyb7EfP7iEUF59n)

## Component Hierarchy

[componentHierarchy](https://whimsical.com/new-testament-verse-9fxRrtMcyb7EfP7iEUF59n)

## API and Data Sample

https://airtable.com/shrTv92TftYf4SVZZ

Airtable is returning the data for this base as follows:

```
{
    "records": [
        {
            "id": "recjruUyWVhOO6mJP",
            "fields": {
                "title": "The Godfather",
                "rating": 5,
                "opinion": "A classic cinematic theme executed perfectly. The acting, spearheaded by Marlon Brando, made the story memorable. "
            },
            "createdTime": "2020-10-09T00:27:04.000Z"
        },
        {
            "id": "rec85tP6Ra4a3JiKL",
            "fields": {
                "title": "Independence Day",
                "rating": 3,
                "opinion": "This movie was not very good in terms of cinematic quality, however it smells of nostalgia which I can't help but enjoy every July 4th. "
            },
            "createdTime": "2020-10-09T00:27:04.000Z"
        }
    ],
    "offset": "rec85tP6Ra4a3JiKL"
}

```

### MVP/PostMVP

#### MVP

- Home page with clickable icons that route to each respective feed.
- Get and post film reviews from Airtable.
- Use forms to create reviews and update Airtable.
- Delete posts from the feed and airtable.

#### PostMVP

- Collaborate with a UX student to make the UI more attractive/user-friendly.
- Get and post TV and sports reviews in separate routed icon links.
- Add a search bar to each review page to find reviews via keywords in the title.

## Project Schedule

| Day      | Deliverable                                | Status   |
| -------- | ------------------------------------------ | -------- |
| Oct 9-11 | Proposal Approval / Airtable Setup         | Complete |
| Oct 12   | Component Creation / Get, Set, Delete Data | Complete |
| Oct 13   | Oct. 12 cont'd / CSS Components            | Complete |
| Oct 14   | CSS Components cont'd / MVP                | Complete |
| Oct 15   | Advanced CSS                               | Complete |
| Oct 16   | Presentations                              | Complete |

## Timeframes

| Component                 | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------- | :------: | :------------: | :-----------: | :---------: |
| Proposal                  |    H     |      2hrs      |     2hrs      |    2hrs     |
| Airtable setup            |    H     |     .5hrs      |      1hr      |     1hr     |
| Clickable icons           |    H     |      1hrs      |      1hr      |     1hr     |
| Data population pg 1      |    H     |      3hrs      |     3hrs      |    3hrs     |
| Data population pg 2      |    H     |      3hrs      |     2hrs      |    2hrs     |
| Data population pg 3      |    H     |      3hrs      |     2hrs      |    2hrs     |
| Form creation pg 1        |    H     |      2hrs      |     2hrs      |    2hrs     |
| Form creation pg 2        |    H     |      2hrs      |     1 hr      |    1 hr     |
| Form creation pg 3        |    H     |      2hrs      |     1 hr      |     1hr     |
| Data creation/update pg 1 |    H     |      3hrs      |     3hrs      |    3hrs     |
| Data creation/update pg 2 |    H     |      3hrs      |      1hr      |     1hr     |
| Data creation/update pg 3 |    H     |      3hrs      |      1hr      |     1hr     |
| Data deletion pg 1        |    H     |      2hrs      |      1hr      |     1hr     |
| Data deletion pg 2        |    H     |      2hrs      |      1hr      |     1hr     |
| Data deletion pg 3        |    H     |      2hrs      |      1hr      |     1hr     |
| Component CSS pg 1        |    H     |      3hrs      |     4hrs      |    4hrs     |
| Component CSS pg 2        |    H     |      3hrs      |     4hrs      |    4hrs     |
| Component CSS pg 3        |    H     |      3hrs      |     4hrs      |    4hrs     |
| Total                     |    H     |    42.5hrs     |     35hrs     |    35hrs    |

## SWOT Analysis

### Strengths:

I have a good understanding of what i want my application to look like and what exactly I want it to do. As such, I can better plan for what needs to be done and how long it will take. I also know which labs and excercise I can reference if I get lost along the way.

### Weaknesses:

I am still not terribly clear on CRUD and how to make sure I can carry each aspect out for this project. Additionally, I prefer to stick to functional components but given the parameters of the project, I'll need to use class components, as well. I will likely use most of my research time/manager help on these matters.

### Opportunities:

This project is the culmination of the last 2 weeks and will give me an opportunity to solidify my understanding of react. I also happen to be interested in the function of my app given my interests, so I am motivated to make it look usable and attractive.

### Threats:

Whenever I get stuck with an error or an issue, I tend to go down a rabbit hole of online searches and debugging. Often times, I don't timebox these episodes and lose a lot of time. While this is typically a favorable characteristic in a developer, I'll need to make sure I know when to ask for help.
