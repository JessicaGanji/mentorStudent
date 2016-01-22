# Student.mentor() 

Our project aims to connect low income students to tech mentorship.

If you fork this repo, you must run `npm install` in order for the app to function properly.

[Visit Student.mentor() on Heroku](https://blank.herokuapp.com/)

-

### Technologies Used

* Node.js
* 
* Express

* MongoDB

* Passport.js

* Bootstrap

* Adobe Creative Cloud

-

#### User Stories

| As a .. | I can.. |
|---------|---------|
| Visitor | select to be a student or a mentor |
| Visitor | learn about the site ( '/about' ) |
| Visitor | access resources ( '/resources' ) |
| Visitor | take a quiz to learn more about tech and find my "area of focus" ( '/quiz' ) |
| Student | select an avatar based on your quiz result/area of focus |
| Student | create/edit/delete my student profile |
| Student | browse mentors |
| Student | not browse students |
| Student | filter mentors |
| Student | contact a mentor |
| Student | take a quiz that will help me find my "area of focus" |
| Student | open the quiz in a module, while I am completing my sign up form, as opposed to dealing with a new browser window/tab | 
| Mentor | create/edit/delete my mentor profile |
| Mentor | update my status from availible to unavailible |
| Mentor | recieve notifications/messages/emails from interested students |
| Mentor | not browse students |
| Mentor | login with LinkedIn |

-

#### ERD

![ Student.mentor() ERD ](readme/erd.jpg)

##### Student Model
``` email, password, first_name, last_name, location, area_of_focus, bio, website, parental_consent ```

##### Mentor Model
``` email, password, first_name, last_name, headline, location, area_of_expertise, bio, personal_website, compary_website, experiences, languages, frameworks availibility, status, terms ```

-

#### Wireframes

![ Student.mentor() Landing Page ](readme/wf01.png)
![ Student.mentor() Landing Page ](readme/wf02.png)
![ Student.mentor() Landing Page ](readme/wf03.png)
![ Student.mentor() Landing Page ](readme/wf04.png)

![ Student.mentor() Landing Page ](readme/ux01.png)
![ Student.mentor() Landing Page ](readme/ux02.png)
