# Student.mentor() 

Our project aims to connect low income students to tech mentorship.

If you fork this repo, you must run `npm install` in order for the app to function properly.

[Visit Student.mentor() on Heroku](https://blank.herokuapp.com/)

-

### Technologies Used

* Node.js

* Express

* MongoDB

* Passport.js

* Bootstrap

* Adobe Creative Cloud

-

#### User Stories

| As a .. | I can.. |
|---------|---------|
| Visitor | learn about the site ( '/about' ) |
| Visitor | take a quiz ( '/quiz' ) |
| Visitor | browse mentors ( '/mentors' ) |
| Visitor | filter mentors ( '/mentors' ) |
| Visitor | sort mentors ( '/mentors' ) |
| Visitor | search mentors ( '/mentors' ) |
| Visitor | contact mentor through an email request form |
| Visitor | access resources ( '/resources' ) |
| Mentor | create/edit/delete my public profile |
| Mentor | create/edit/delete my resources |
| Mentor | create/edit/delete other mentor's resources |
| Mentor | update my status from availible to unavailible |
| Mentor | recieve emails from interested visitor |
-

#### ERD

![ Student.mentor() ERD ](readme/erd.jpg)

##### Student Model
``` email, password, first_name, last_name, location, area_of_focus, bio, website, parental_consent ```

##### Mentor Model
``` email, password, first_name, last_name, headline, location, area_of_expertise, bio, personal_website, compary_website, experiences, skills, availibility, status, terms ```

-

#### Wireframes

![ Student.mentor() Landing Page ](readme/ux01.png)
![ Student.mentor() Landing Page ](readme/ux02.png)
