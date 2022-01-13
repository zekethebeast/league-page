/*   STEP 1   */
export const leagueID = "704173918558175232"; // your league ID
export const leagueName = "Armchair Football League"; // your league name
export const dues = 100; // (optional) used in template constitution page
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
     name: "Rival", // Can be anything (usually your rival's name)
      link: 6, // manager array number within this array, or null to link back to all managers page
    image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
  "favoritePlayer": 7242, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
  "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
  "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
  "philosophy": "Take what I get, trade for where I miss",
  "tradingScale": 8, // 1 - 10
  "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
},
//     // {
//     //   "roster": 2,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
//     //   "name": "Your Name",
//     //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
//     //   "location": "Brooklyn", // (optional)
//     //   "bio": "Lorem ipsum...",
//     //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
//     //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
//     //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
//     //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//     //   "rival": {
//     //     name: "Rival", // Can be anything (usually your rival's name)
//     //     link: 6, // manager array number within this array, or null to link back to all managers page
//     //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//     //   },
//     //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
//     //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
//     //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//     //   "philosophy": "Your fantasy team's philosophy",
//     //   "tradingScale": 10, // 1 - 10
//     //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//     // },
//     // {
//     //   "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
//     //   "name": "Your Name",
//     //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
//     //   "location": "Brooklyn", // (optional)
//     //   "bio": "Lorem ipsum...",
//     //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
//     //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
//     //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
//     //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//     //   "rival": {
//     //     name: "Rival", // Can be anything (usually your rival's name)
//     //     link: 6, // manager array number within this array, or null to link back to all managers page
//     //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//     //   },
//     //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
//     //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
//     //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//     //   "philosophy": "Your fantasy team's philosophy",
//     //   "tradingScale": 10, // 1 - 10
//     //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//     // },
  //     // {
//     //   "roster": 4,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
//     //   "name": "Your Name",
//     //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
//     //   "location": "Brooklyn", // (optional)
//     //   "bio": "Lorem ipsum...",
//     //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
//     //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
//     //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
//     //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//     //   "rival": {
//     //     name: "Rival", // Can be anything (usually your rival's name)
//     //     link: 6, // manager array number within this array, or null to link back to all managers page
//     //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//     //   },
//     //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
//     //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
//     //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//     //   "philosophy": "Your fantasy team's philosophy",
//     //   "tradingScale": 10, // 1 - 10
//     //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//     // },//     // {
//     //   "roster": 5,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
//     //   "name": "Your Name",
//     //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
//     //   "location": "Brooklyn", // (optional)
//     //   "bio": "Lorem ipsum...",
//     //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
//     //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
//     //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
//     //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//     //   "rival": {
//     //     name: "Rival", // Can be anything (usually your rival's name)
//     //     link: 6, // manager array number within this array, or null to link back to all managers page
//     //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//     //   },
//     //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
//     //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
//     //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//     //   "philosophy": "Your fantasy team's philosophy",
//     //   "tradingScale": 10, // 1 - 10
//     //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//     // },//     // {
//     //   "roster": 6,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
//     //   "name": "Your Name",
//     //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
//     //   "location": "Brooklyn", // (optional)
//     //   "bio": "Lorem ipsum...",
//     //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
//     //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
//     //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
//     //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//     //   "rival": {
//     //     name: "Rival", // Can be anything (usually your rival's name)
//     //     link: 6, // manager array number within this array, or null to link back to all managers page
//     //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//     //   },
//     //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
//     //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
//     //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//     //   "philosophy": "Your fantasy team's philosophy",
//     //   "tradingScale": 10, // 1 - 10
//     //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//     // },//     // {
//     //   "roster": 7,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
//     //   "name": "Your Name",
//     //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
//     //   "location": "Brooklyn", // (optional)
//     //   "bio": "Lorem ipsum...",
//     //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
//     //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
//     //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
//     //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//     //   "rival": {
//     //     name: "Rival", // Can be anything (usually your rival's name)
//     //     link: 6, // manager array number within this array, or null to link back to all managers page
//     //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//     //   },
//     //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
//     //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
//     //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//     //   "philosophy": "Your fantasy team's philosophy",
//     //   "tradingScale": 10, // 1 - 10
//     //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//     // },//     // {
//     //   "roster": 8,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
//     //   "name": "Your Name",
//     //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
//     //   "location": "Brooklyn", // (optional)
//     //   "bio": "Lorem ipsum...",
//     //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
//     //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
//     //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
//     //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//     //   "rival": {
//     //     name: "Rival", // Can be anything (usually your rival's name)
//     //     link: 6, // manager array number within this array, or null to link back to all managers page
//     //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//     //   },
//     //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
//     //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
//     //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//     //   "philosophy": "Your fantasy team's philosophy",
//     //   "tradingScale": 10, // 1 - 10
//     //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//     // },//     // {
//     //   "roster": 9,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
//     //   "name": "Your Name",
//     //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
//     //   "location": "Brooklyn", // (optional)
//     //   "bio": "Lorem ipsum...",
//     //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
//     //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
//     //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
//     //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//     //   "rival": {
//     //     name: "Rival", // Can be anything (usually your rival's name)
//     //     link: 6, // manager array number within this array, or null to link back to all managers page
//     //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//     //   },
//     //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
//     //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
//     //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//     //   "philosophy": "Your fantasy team's philosophy",
//     //   "tradingScale": 10, // 1 - 10
//     //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//     // },//     // {
//     //   "roster": 10,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
//     //   "name": "Your Name",
//     //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
//     //   "location": "Brooklyn", // (optional)
//     //   "bio": "Lorem ipsum...",
//     //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
//     //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
//     //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
//     //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//     //   "rival": {
//     //     name: "Rival", // Can be anything (usually your rival's name)
//     //     link: 6, // manager array number within this array, or null to link back to all managers page
//     //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//     //   },
//     //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
//     //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
//     //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//     //   "philosophy": "Your fantasy team's philosophy",
//     //   "tradingScale": 10, // 1 - 10
//     //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//     // },
//   ]
  
  
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
