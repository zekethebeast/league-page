u<script context="module">
	export const prerender = true;
</script>

<script>
    import { dues } from '$lib/utils/helper';
    let one, oneOne, oneTwo;
    let two, twoOne, twoTwo;
    let three, threeOne, threeTwo, threeThree;
    let four, fourOne, fourTwo, fourThree, fourFour, fourFourOne, fourFive, fourFiveOne, fourSix, fourSixOne, fourSeven; fourEight;
    let five;
    let six;
    let seven;

    const goToSection = (section) => {
        const top = section.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({left: 0, top, behavior: 'smooth'});
    }
</script>

<style>
    .constitution {
        position: relative;
        z-index: 1;
        width: 92%;
        max-width: 800px;
        margin: 8em auto 10em;
    }

    h1 {
        font-size: 2em;
        line-height: 1.2em;
        text-align: center;
        margin: 2em 0 1.5em;
    }

    h2 {
        font-size: 1.5em;
        line-height: 1.2em;
    }

    h3 {
        text-decoration: underline;
        font-size: 1.3em;
        line-height: 1.2em;
    }

    h4 {
        text-decoration: underline;
        margin-left: 2em;
        font-size: 1.2em;
        line-height: 1.2em;
    }

    h5 {
        margin-left: 6em;
        font-size: 0.8em;
        line-height: 1.1em;
    }

    .subBlock {
        margin-left: 2.4em;
    }

    .sectionHeading {
        margin: 4em 0 1.5em;
    }

    .subSectionHeading {
        margin: 1.5em 0 1.5em;
    }

    .underscore {
        text-decoration: underline;
    }

    .right {
        text-align: right;
    }

    .positionMaximums td {
        min-width: 3em;
    }

    .noUnderscore {
        text-decoration: none;
    }

    .clickable {
        cursor: pointer;
    }

    .clickable:hover {
        color: #00316b;
    }

    p {
        color: #777;
    }
</style>

<div class="constitution">
    <h1 class="noUnderscore">LEGENDS LEAGUE CONSTITUTION</h1>
    
    <h2 class="noUnderscore">TABLE OF CONTENTS</h2>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(one)}>Section 1: League Breakdown</h3>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(oneOne)}>1.1  Executive Committee</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(oneTwo)}>1.2  Living Constitution</h4>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(two)}>Section 2: League Financing</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(twoOne)}>2.1 League Fee</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(twoTwo)}>2.2 Prize Money</h4>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(three)}>Section 3: League setup and Competition</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(threeOne)}>3.1 Overview</h4>
	<h4 class="noUnderscore clickable" on:click={() => goToSection(threeTwo)}>3.2 Division Rankings</h4>
	<h4 class="noUnderscore clickable" on:click={() => goToSection(threeThree)}>3.3 Playoffs</h4>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(four)}>Section 4: Rosters and Playoffs</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fourOne)}>4.1 Overview</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fourTwo)}>4.2 The Draft</h4>
	<h4 class="noUnderscore clickable" on:click={() => goToSection(fourThree)}>4.3 Free Agency</h4>
	<h4 class="noUnderscore clickable" on:click={() => goToSection(fourFour)}>4.4 Trades</h4>
	<h4 class="noUnderscore clickable" on:click={() => goToSection(fourFourOne)}>4.4.1 Trade Veto</h4>
	<h4 class="noUnderscore clickable" on:click={() => goToSection(fourFive)}>4.5 Starting Lineups</h4>
	<h4 class="noUnderscore clickable" on:click={() => goToSection(fourFiveOne)}>4.5.1 Position Designations</h4>
	<h4 class="noUnderscore clickable" on:click={() => goToSection(fourSix)}>4.6 Active Ownership Requirements</h4>
	<h4 class="noUnderscore clickable" on:click={() => goToSection(fourSeven)}>4.7 Anti‐Tanking Provision</h4>
	<h4 class="noUnderscore clickable" on:click={() => goToSection(fourEight)}>4.8 Retiring Players</h4>

    <h3 class="noUnderscore clickable" on:click={() => goToSection(five)}>Section 5: Scoring System</h3>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(six)}>Section 6: Offseason Activities</h3>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(seven)}>Section 7: Change Log</h3>
    
    
    <hr />
    
    <h2 class="sectionHeading" bind:this={one}>Section 1: League Breakdown</h2>
    
    <h3 class="subSectionHeading" bind:this={oneOne}>1.1  Executive Committee</h3>
    
    <p>The executive committee for Armchair Football League for 2021 consists of: </p>
<p>Commissioner ‐ Ezekiel McBrayer (205) 907 8922 </p>
<p>Committee Member ‐ Chris Ralph (256) 531 6821 </p>
<p>Committee Member ‐ Jeffrey Leonard (256) 620 1738 </p>
<p>The executive committee will be responsible for resolving all disputes that are not expressly covered by this constitution. If a committee member is involved in the dispute, that member will excuse themselves from the decision process. While all owners are encouraged to submit suggestions to the committee, the committee's decision on all matters is final. 
Committee Members will rotate out one at a time on a 2‐year basis, allowing everyone to eventually be a part of the committee. New members will be announced at the current year’s draft.   
	</p>
    

    <h3 class="subSectionHeading" bind:this={oneTwo}>1.2 Living Constitution</h3>
    
    <p>It is important to note that this is a living, breathing constitution that will change and evolve over the lifetime of this league. Changes will happen between seasons as often as possible and will be effective from that point moving forward. If you have suggestions for changes, please submit them to one of the executive committee members. 
Amendments will be brought up at each year’s draft and will be voted on by the league. The Amendments will need 7 yeas to pass, and if not passed will need to be brought up again the next season. No changes will be made mid‐season.    
</p>
    
   
    
    
    <h2 class="sectionHeading" bind:this={two}>Section 2 League Financing</h2>

	<p>The league fee for Armchair Football League will be charged to each team owner and committee member, payable on League Vault on or before the night of the draft. If a team owner does not have the appropriate entry fee, the executive committee may make other arrangements for payment before the season starts at their discretion. </p>
    
    <h3 bind:this={twoOne}>2.1 League Fees</h3>
    <p>The Armchair Football League fee for the 2021 season will be $75 from each owner. This fee consists of $50 entry fee plus $25 from each owner towards the 2022 season to ensure long term commitment. This fee is due on or before the draft. </p>

    <p>Each subsequent year fee will be $52.50 (half of this years and half of next years) unless changed. $2.50 will go to the website hosting fee. </p>

    <h3 bind:this={twoTwo}>2.2 Prize Money</h3>
    <p>League prize money will be paid out within seven days of the completion of the Armchair Football League Super Bowl. Money will be all three held by the commissioner and will be paid out in the following manner: </p>
	<p>League Champion receives $300 </p>
	<p>League Runner‐Up received $100 </p>
	<p>League Scoring Champion receives $50 </p>
	<p>League Regular Season Champion receives $50 </p>
  
    
  
    <h2 class="sectionHeading" bind:this={three}>Section 3 League Set-up and Competition</h2>

	<p>The Armchair Football League will consist of 10 different teams, broken into two conferences of 5 teams each. The schedule will be randomly generated, with each team playing every other team at least once in head‐to‐head match‐up. Teams will also play their division opponents an additional time for a 14‐ game regular season.   </p>
	<p>In addition, each team will have a weekly game against the league median. Any team who is a top 5 scorer for the week will get a win, while those who don’t receive a loss.   </p>


    <h3 bind:this={threeOne}>3.1 Division Rankings</h3>
	<p>Teams will be ranked within each division based on the following criteria: </p>
<p>Overall Winning Percentage </p>
<p>Division Winning Percentage </p>
<p>Head‐to‐head Winning Percentage </p>
<p>Total Points Scored by the Starters ‐ Year to Date </p>
<p>Total Points Scored by Head‐to‐head Opponents ‐ Year to Date
</p>
	
	<h3 bind:this={threeTwo}>3.2 Playoffs</h3>
    <p>After the completion of the regular season, three teams from each conference will make the playoffs. The top two teams from each division will make the playoffs, and the top two scorers league wide that already do not have a spot will be in the playoffs as wild cards. The championship will be in weeks 17 and 18. Matchups will be adjusted manually as needed. A consolation bracket will be used for everyone who does not make the playoffs.  </p> 
<p>Playoffs will be reseeded each week. The Highest seed will always play the Lowest seed each round. Each division winner will get a bye in the first round of the playoffs.  </p>

    <h2 class="sectionHeading" bind:this={four}>Section 4 Rosters and Lineups</h2>
	
	<p>Rosters in Armchair Football League consist of 29 active players from any NFL team. There are no position limits, and owners are free to have as many players from any position as they like. Only players from the active roster may be used as part of a team's starting lineup. </p>
    
    <h3 bind:this={fourOne}>4.1 The Draft</h3>
    <p>The commissioner will designate a draft night each season. Owners are expected to attend the draft in person and must have all league fees paid before the draft. The draft order in year one will be randomly determined one week before the draft for the first part of the draft.   </p>
<p>The initial draft will consist of three parts.   </p>
<p>∙ 16 round Snake Order draft – Non‐Rookies only, order randomized before draft ∙ 5 round Linear Order draft – Rookies only, order will be reverse order of part 1 ∙ 8 round Linear Order Draft – Supplemental, any player not already taken, same order as round 1 </p>
<p>After year one, the draft will consist of the following: </p>
<p>∙ 3 round Linear Order draft – Rookies only, order based on reverse order of previous year standings </p>
<p>∙ 5 round Linear Order Draft – Supplemental, order based on waiver priority at end of previous season </p>
<p>Owners will have 2 minutes to make their picks. Any owner who does not make their pick in time will be skipped and will only have a 30 second window after the next team has made their selection. If they do not get it in time for the second time, their pick will automatically default to the end of the draft. 
</p>
    
    <h3 bind:this={fourTwo}>4.2 The Roster</h3>
	<p>Roster composition will consist of the following: </p>
	
<p>∙ 10 Starters (detailed in section 4.5) 

<p>∙ 16 Bench Players (No limits on positions) 

<p>∙ 3 Injured Reserve Spots (This included players who miss because of COVID‐19) ∙ 3 Taxi Squad Spots </p>

<p> Players with 3 years experience or less can be on a taxi squad </p>

<p> Players must be placed on the Taxi Squad before the start of the regular season o Once a player is on a Taxi Squad, they will remain there until activated. Once the season begins, no player can be placed on the Taxi Squad.  </p>

	   <h3 bind:this={fourThree}>4.3 Free Agency</h3>
	<p>Free Agency will be Rolling Waiver setting. The order will be randomized after the initial draft. When a player is claimed off waivers, you will be placed at the bottom of the waiver priority. Your position is not lowered until you claim a player. Waivers will clear each Wednesday at 12:05am. A player is held on waivers 2 days after being dropped. A player who is a free agent should not reset your waiver claim status.   </p>
	  
	<h3 bind:this={fourFour}>4.4 Trades</h3>
	<p>Trading is allowed and encouraged in Armchair Football League and may be conducted between any owner. Trades may include multiple players from any position, as well as draft picks. If an owner accepts a trade and that puts them over their roster limit, they must drop other players to stay under the limit. No trades will be allowed after Week 12 of the fantasy football season. </p>
	
	<h3 bind:this={fourFourOne}>4.4.1 Trade Veto</h3>
	<p>The executive committee reserves the right to reverse any trade that they deem inconsistent with league competition and fair‐play standards. This veto will only be invoked in extreme cases where it is obvious that one owner is trying to give another owner an unfair advantage. The owners in question may offer reasons why the trade should be allowed, but the decision of the executive committee is final once it has been rendered. If the trade involves a committee member, they may offer reasons for the trade to be allowed but will not have a say in the final committee decision. </p>
	
	<h3 bind:this={fourFive}>4.5 Starting Lineups</h3>
	<p>Starting lineups in Armchair Football League will consist as follows: </p>
<p>1 quarterback </p>
<p>2 running backs </p>
<p>2 wide receivers </p>
<p>1 tight end </p>
<p>2 flex (running back, wide receiver, or tight end) </p>
<p>1 Rec flex (wide receiver, or tight end) </p>
<p>1 Superflex (quarterback, running back, wide receiver, or tight end) </p>
<p>Players may be added or removed from the starting lineup up until the start of their game. Owners may make changes to their lineups but may not change a player that has already played. For example, if you started your quarterback on Thursday night and he has a bad game, you cannot switch him out for a quarterback who has not played. Also, if you did not start a wide receiver who played on Thursday night
and he scored three touchdowns, you cannot add him to your lineup on Friday. Once the Thursday game begins, players from that game may not be started or benched. </p>

	 
	<h3 bind:this={fourFiveOne}>4.5.1 Position Designations</h3>
	<p>From time to time, the NFL may change their designation of a particular player from one position to another or a player may line up in multiple positions throughout the game. For example, a wide receiver may be switched to a tight end and vice versa. For the purposes of Armchair Football League, a player’s designation will be at the discretion of the Sleeper App. </p>
	
	<h3 bind:this={fourSix}>4.6 Active Ownership</h3>
	<p>Each owner is expected to actively manager their team each week, even if they are eliminated from any playoff consideration. If an owner does not submit a lineup for two consecutive weeks (determined by players on byes starting, injured players in a roster spot, etc.), the executive committee will have the right to assume control of the team and manage it for the rest of the season. A committee run team will not make any trades and is only allowed to add or drop players if the team cannot field a legal starting lineup due to injury or bye weeks. Any prize money won by a committee‐run team will be distributed evenly to the other active owners in the league.   </p>
	
	<h3 bind:this={fourSeven}>4.7 Anti Tanking Provision</h3>
	<p>Armchair Football League is a competitive league, created for the league owners to have fun playing fantasy football. While the competition may be fierce, this is not considered a cut‐throat league. In the spirit of competition and league fairness, owners are not allowed to intentionally create a legal starting lineup that gives the opposing team a clear advantage. The executive committee reserves the right to step in and adjust the starting lineup of a team that is clearly trying to intentionally lose a game. If the committee must adjust a team's lineup in two consecutive weeks or for three or more weeks in any one season, the team will be considered inactive and the executive committee may assume ownership of the team as detailed in the active ownership requirements section. </p>
	
	<h3 bind:this={fourSeven}>4.8 Retiring Players</h3>
	<p>When a player retires, Managers have two options. </p>
	<p>1.) A Manager can retain the players rights. The Manager will inform the Commissioner and they are then able to drop the player to free up a roster spot. If the retired player comes back to play, that Manager has the Right of First Refusal to add that player back to their roster at no penalty (other than needing an open spot). </p>
	<p>2.) A Manager may receive a Supplemental Draft Pick for their player, granted they finish high enough in their respective postion.</p>
	<p>For QB & TE: If the player finished Top 5 the previous season, the Manager would receive a Supplemental Pick at the end of Round 2 of next years draft. If the player finished Top 15 the previous season, the Manager would receive a Supplemental Pick at the end of Round 3 of next years draft.</p>
	<p>For RB & WR: If the player finished Top 10 the previous season, the Manager would receive a Supplemental Pick at the end of Round 2 of next years draft. If the player finished Top 20 the previous season, the Manager would receive a Supplemental Pick at the end of Round 3 of next years draft.</p>
	<p>Any situation not covered above will be decided on based on conversations with the League Commissioner. </p>
	
    <h2 class="sectionHeading" bind:this={five}>Section 5 Scoring System</h2>
	<p>Scoring in Armchair Football League will be computed to two decimal places. This will allow points to be awarded or deducted for every positive or negative yard and will dramatically reduce the chance of a tie game. Players are awarded fantasy points for each week that they are included in the team's starting lineup.   </p>
	<p> The scoring breakdown can be seen on the Sleeper App and Website.</p>
    
  
    <h2 class="sectionHeading" bind:this={six}>Section 6 Offseason Activities</h2>
    <p>Rosters will be locked at the end of each season. Trades may still occur leading up to the Draft, but no free agents will be allowed to be added until after the Supplemental Draft is finished.  </p>
   
    <h2 class="sectionHeading" bind:this={seven}>Section 7 Change Log</h2>
	<p>08/18/2021 - Switched the number of rounds in each year’s draft to 3 Rookie Only (from 5) and 5 Supplemental (from 3) to align with limitations on pick trading within Sleeper. </p>
	<p>01/11/2022 - Changed fee to $52.50 per year to cover maintenance costs. </p>
	<p>08/09/2022 - Updated PPR Scoring and added 4.8 Retiring Players </p>

    
  

</div>
