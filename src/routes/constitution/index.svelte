u<script context="module">
	export const prerender = true;
</script>

<script>
    import { dues } from '$lib/utils/helper';
    let one, oneOne, oneTwo;
    let two, twoOne, twoTwo;
    let three, threeOne, threeTwo, threeThree;
    let four, fourOne, fourTwo, fourThree, fourFour, fourFive, fourFiveOne, fourSix, fourSixOne, fourSeven, fourEight;
    let five;
    let six;
    let seven;

    const goToSection = (section) => {
        const top = section.getBoundingClientRect().top;
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
	<h4 class="noUnderscore clickable" on:click={() => goToSection(fourThree)}>4.3 The Roster</h4>
	<h4 class="noUnderscore clickable" on:click={() => goToSection(fourFour)}>4.4 Free Agency</h4>
	<h4 class="noUnderscore clickable" on:click={() => goToSection(fourFive)}>4.5 Trades</h4>
	<h4 class="noUnderscore clickable" on:click={() => goToSection(fourFiveOne)}>4.5.1 Trade Veto</h4>
	<h4 class="noUnderscore clickable" on:click={() => goToSection(fourSix)}>4.6 Starting Lineups</h4>
	<h4 class="noUnderscore clickable" on:click={() => goToSection(fourSixOne)}>4.6.1 Position Designations</h4>
	<h4 class="noUnderscore clickable" on:click={() => goToSection(fourSeven)}>4.7 Active Ownership Requirements</h4>
	<h4 class="noUnderscore clickable" on:click={() => goToSection(fourEight)}>4.8 Anti‐Tanking Provision</h4>

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
    
   
    
    
    <h2 class="sectionHeading" bind:this={two}>Section 2 Drafting</h2>
    
    <h3 bind:this={twoOne}>2.1 Draft Order</h3>
    <p>The draft order each year will be a linear draft in reverse order of the previous year’s regular season standings.</p>

    <h3 bind:this={twoTwo}>2.2 Rookie Drafts</h3>
    <p>Rokkie drafts will consist of 3 round of drafting, with 5 minutes alotted for each pick. To make room for the incoming players, benches will be expanded by (5) spots. These spots will be removed in mid-August, at which point you will need to have cut the necessary players.</p>
    <p>Any spots not filled during the draft, can be filled immediately afterwards from the waiver wire.</p>
    
  
    <h2 class="sectionHeading" bind:this={three}>Section 3 Scoring System</h2>

    <h3 bind:this={threeOne}>3.1 Scoring System</h3>
    <p>The league scoring system breakdown is listed on the Sleeper fantasy app (for the most part, it follows typical .5PPR Scoring). The scoring system will never change without a majority league vote.</p>
    
    <h2 class="sectionHeading" bind:this={four}>Section 4 Postseason</h2>
    
    <h3 bind:this={fourOne}>4.1 Playoffs</h3>
    <p>At the end of the season 6 teams will make the playoffs. The first round of playoffs will commence in week 15. Each team that wins their division and the 4 wild card teams that finish with the best records, will receive a playoff berth. The 2 teams that win their division will receive a bye week in the first round of the playoffs. Each playoff matchup will only last one week and the winner will advance. Week 18 will not be used.</p>
    
    <h3 bind:this={fourTwo}>4.2 Seeding Tiebreakers</h3>
    <p>If two teams finish with the same record the tiebreakers will go as followed:</p>

    <ol>
        <li>Points For</li>
        <li>Head 2 Head Record</li>
        <li>Division Record</li>
        <li>Total Points Against</li>
        <li>Coin Flip</li>
        <li>Duel to the death</li>
    </ol>

    <h2 class="sectionHeading" bind:this={five}>Section 5 Tanking Policy</h2>
    
  
    <h2 class="sectionHeading" bind:this={six}>Section 6 Replacing Managers</h2>
    
   
    <h2 class="sectionHeading" bind:this={seven}>Section 7 League Finances</h2>
    
  

</div>
