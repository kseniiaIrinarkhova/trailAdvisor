# Hiking in National Parks

TrailAdvisor is a Vite + React + Typescript application. It provides opportunity to learn about National Parks in selected state and save the most interesting parks to favorites.

# Technical documentation of the project
## Code specification
### Project structure:
- **public** - directory for static files (images)
- **src** - directory with main code files
    - *vite-env.d.ts* - file with custom types that used in projects    
    - **components** - directory with project components
        1) *FavoriteForm* - component that is used to add/delete from favorites action
        2) *Footer* - component for footer
        3) *NavBar* - component for top nav bar
        4) *SideBar* - component for side nav bar
    - **pages** - directory with project pages
        1) *Favorite.page.tsx* - page with list of favorite parks
        2) *Index.page.tsx* - index page for main page
        3) *ParkInfo.page.tsx* - page with park information
        4) *Parks.page.tsx* - page with parks in state
        5) *ParksIndex.page.tsx* - index page ( when park is not choosen)
    - **services** - directory with additional context
        - *context.tsx* - useContext hook data
        - *pn_api.tsx* - function that calls API
        - *utilities.tsx* - helper functions for the project
    - *router.tsx* - file with all routes information
    - *error-page.tsx* - error page
- *.env.example* - file with templates for environmental variables
- *package.json* - main properties of project



### Main types
- **enum USStates** - enumerator that provides information about state names and codes
- **type Park** - type that provides information about the park.  Contains main properties from park API json response
- **type Favorite** - used to store in LocalStorage information about Favorites

## Installation

1) Clone repository. run `npm install` to get all dependencies
2) Rename `.env.example` file to `.env`
3) Get API key from [NPS API](https://www.nps.gov/subjects/developer/get-started.htm) and put in on `VITE_API_KEY`
4) To run dev scripts use command `npm run dev`

## User guide
### UI user guide
On the main page user should choose State, which national parks would be observed. After this action user could see the list of all National Parks from the chosen state on the left pannel. User could chose any park to see its detailed info. There is an opportunity to add park in favorite list - by clicking on favorite button newr the Park name.

# Author
Project prepared as a part of education in **Software Engineering Bootcamp** at *Per Scholas* by [Kseniia Irinarkhova](https://www.linkedin.com/in/kseniia-irinarkhova/).

# Additional Resources
- (React Router Typesafe)[https://github.com/fredericoo/react-router-typesafe]
- (National Park Service API Documentation)[https://www.nps.gov/subjects/developer/api-documentation.htm#/amenities/getAmenities]
- (Use enum in React select)[https://stackoverflow.com/questions/55601342/using-enumerations-in-react-select]
- (Canva)[https://www.canva.com/] - was used for images
 
