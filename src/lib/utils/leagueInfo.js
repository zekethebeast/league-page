/*   STEP 1   */
export const leagueID = "786753111254519808"; // your league ID
export const leagueName = "Armchair Football League"; // your league name
export const dues = 55; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Welcome to the AFL, the Armchair Football League. This is a 10‐team league that was formed in 2021 by a group of owners who all love fantasy football and wanted more than the average league. This league is designed to be a competition between owners, but it not a cut‐throat league where 
anything goes. I hope this site will be helpful in documenting the league and make it feel more than just the average league. 
</p>
 
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
{
  "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
  "name": "Ezekiel McBrayer",
  "location": "Cullman. AL", // (optional)
  "bio": "Diehard Saints fan. I'll watch basically any competition if it is televised.",
  "photo": "/managers/242924646_10208807188813154_1252338237121455447_n.jpg", // square ratio recommended (no larger than 500x500)
  "fantasyStart": 2010, // (optional) when did the manager start playing fantasy football
  "favoriteTeam": "no", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
  "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
  "rival": {
     name: "Myself", // Can be anything (usually your rival's name)
      link: 1, // manager array number within this array, or null to link back to all managers page
    image: "/managers/242924646_10208807188813154_1252338237121455447_n.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
  "favoritePlayer": 289, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
  "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
  "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
  "philosophy": "Take what I get, trade for where I miss",
  "tradingScale": 8, // 1 - 10
  "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
{
  "roster": 2,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
  "name": "Chris Ralph",
  "location": "Baileyton", // (optional)
  "bio": "I’m a sinner saved by the blood of Jesus,  love church, my family, hunting and fishing and fantasy football.",
  "photo": "/managers/everyone.jpg", // square ratio recommended (no larger than 500x500)
  "fantasyStart": 2002, // (optional) when did the manager start playing fantasy football
  "favoriteTeam": "dal", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
  "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
  "rival": {
        name: "Tyler Berry", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/everyone.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
  "favoritePlayer": 2028, // (optional) this corresponds to the Sleeper player ID (c)
  "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
  "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
  "philosophy": "Trust my process",
  "tradingScale": 10, // 1 - 10
  "preferredContact": "Phone", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
   },
{
  "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
  "name": "Jeffrey Leonard",
  "location": "Cullman, AL", // (optional)
  "bio": "A simple man who is just wondering his way through the galaxy. Huge Gamer, and big ATL fan",
  "photo": "/managers/everyone.jpg", // square ratio recommended (no larger than 500x500)
  "fantasyStart": 2010, // (optional) when did the manager start playing fantasy football
  "favoriteTeam": "atl", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
  "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
  "rival": {
        name: "Zeke", // Can be anything (usually your rival's name)
        link: 1, // manager array number within this array, or null to link back to all managers page
        image: "/managers/everyone.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
  "favoritePlayer": 917, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
  "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
  "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
  "philosophy": "Go with your Gut. Don’t be a rankings whore.",
  "tradingScale": 5, // 1 - 10
  "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
   },
{
  "roster": 4,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
  "name": "Jordan Alston",
  "location": "Addison", // (optional)
  "bio": "32 year old warehouse worker at Cullman Electric.",
  "photo": "/managers/everyone.jpg", // square ratio recommended (no larger than 500x500)
  "fantasyStart": 2012, // (optional) when did the manager start playing fantasy football
  "favoriteTeam": "kan", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
  "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
  "rival": {
        name: "Mason Beck", // Can be anything (usually your rival's name)
        link: 5, // manager array number within this array, or null to link back to all managers page
        image: "/managers/everyone.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
  "favoritePlayer": 4510, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
  "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
  "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
  "philosophy": "Trust the gut",
  "tradingScale": 10, // 1 - 10
  "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
{
  "roster": 5,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
  "name": "Mason Beck",
  "location": "West Point ", // (optional)
  "bio": "Father of 3, happily married, sports fan.",
  "photo": "/managers/everyone.jpg", // square ratio recommended (no larger than 500x500)
  "fantasyStart": 2010, // (optional) when did the manager start playing fantasy football
  "favoriteTeam": "gb, // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
  "mode": "Dynasty(optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
  "rival": {
        name: "Tyler Berry", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/everyone.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
  "favoritePlayer": 96, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
  "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
  "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
  "philosophy": "Win. No RBs in the flex. Play as many WRs as possible",
  "tradingScale": 6, // 1 - 10
  "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
 {
   "roster": 6,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
   "name": "Tyler Berry",
   "location": "Vero Beach", // (optional)
   "bio": "Born in Vero Beach in 92 ended up in Cullman in 03. Love God, Love others , and serve both!",
   "photo": "/managers/everyone.jpg", // square ratio recommended (no larger than 500x500)
   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
   "favoriteTeam": "atl", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
   "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
   "rival": {
        name: "Chris Ralph", // Can be anything (usually your rival's name)
        link: 2, // manager array number within this array, or null to link back to all managers page
        image: "/managers/everyone.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
   "favoritePlayer": 3198, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
   "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
   "philosophy": "Consistency and Volume is King",
   "tradingScale": 10, // 1 - 10
   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    }, 
{
   "roster": 7,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
   "name": "Hufnagle",
   "location": "Falkville", // (optional)
   "bio": "The man with the plan",
   "photo": "/managers/everyone.jpg", // square ratio recommended (no larger than 500x500)
   "fantasyStart": 2017, // (optional) when did the manager start playing fantasy football
   "favoriteTeam": "tb", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
   "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
   "rival": {
        name: "Chris Ralph", // Can be anything (usually your rival's name)
        link: 2, // manager array number within this array, or null to link back to all managers page
        image: "/managers/everyone.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
   "favoritePlayer": 167, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
   "valuePosition": "TE", // (optional) Favorite position (QB, WR, RB, TE, etc.)
   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
   "philosophy": "Have faith in who you draft, don’t fall for stupid trade offers",
   "tradingScale": 2, // 1 - 10
   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
{
   "roster": 8,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
   "name": "Tyler Ballew",
   "location": "Cullman", // (optional)
   "bio": "Live. Laugh. Love.",
   "photo": "/managers/everyone.jpg", // square ratio recommended (no larger than 500x500)
   "fantasyStart": 2010, // (optional) when did the manager start playing fantasy football
   "favoriteTeam": "ten", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
   "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
   "rival": {
        name: "Whoever I;'m Playing", // Can be anything (usually your rival's name)
        link: null, // manager array number within this array, or null to link back to all managers page
        image: "/managers/everyone.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
   "favoritePlayer": 3198, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
   "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
   "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
   "philosophy": "Dominate at all cost",
   "tradingScale": 8, // 1 - 10
   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
{
   "roster": 9,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
   "name": "Zach",
   "location": "Cullman", // (optional)
   "bio": "RTR!",
   "photo": "/managers/everyone.jpg", // square ratio recommended (no larger than 500x500)
   "fantasyStart": 2010, // (optional) when did the manager start playing fantasy football
   "favoriteTeam": "dal", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
   "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
   "rival": {
        name: "Chris Ralph", // Can be anything (usually your rival's name)
        link: 2, // manager array number within this array, or null to link back to all managers page
        image: "/managers/everyone.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
   "favoritePlayer": 6809, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
   "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
   "philosophy": "****",
   "tradingScale": 10, // 1 - 10
   "preferredContact": "Carrier Pigeon", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
{
   "roster": 10,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
   "name": "Clarke Thrower",
   "location": "Cullman", // (optional)
   "bio": "UA grad. Stay at home dad with two girls.",
   "photo": "/managers/everyone.jpg", // square ratio recommended (no larger than 500x500)
   "fantasyStart": 2010, // (optional) when did the manager start playing fantasy football
   "favoriteTeam": "atl", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
   "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
   "rival": {
        name: "Chris Ralph", // Can be anything (usually your rival's name)
        link: 2, // manager array number within this array, or null to link back to all managers page
        image: "/managers/everyone.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
   "favoritePlayer": 917, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
   "philosophy": "Win",
   "tradingScale": 2, // 1 - 10
   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
