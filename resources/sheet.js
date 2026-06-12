const classes = {
	fighter: {
		name: "Fighter",
		hd: "d8",
		armor: "Any",
		weapon: "Any",
		lang: "Common",
		abilitytitle: "Fighter Skills",
		ability: `<p>Choose one skill. Each time you level up, choose another skill. Starting at 5th level, you can choose advanced skills instead (see back).</p>
		<ul>
			<li><strong>Berserker:</strong> While damaged 50% or greater, -4 AV.</li>
			<li><strong>Dualist:</strong> Each time you <em>miss</em>, gain -1 AV until you <em>hit</em> or the dungeon <em>turn</em> ends.</li>
			<li><strong>Taction:</strong> +4 bonus to Stunts.</li>
			<li><strong>Tough:</strong> Dismember with advantage.</li>
			<li><strong>Reckless:</strong> Deal 1 damage to a non-magic weapon to add 1d4 to its damage.</li>
		</ul>`,
		back: `<h2 style="page-break-before: always">Advanced skills</h2>
		<p>Starting at 5th level, you can choose advanced skills instead.</p>
		<ul>
			<li><strong>Beef Cake:</strong> +3 item <em>slots</em>. +2 healing when bandaged.</li>
			<li><strong>Bounty Hunter:</strong> +3 damage with blunt weapons.</li>
			<li><strong>Captain:</strong> You can act as a ship captain.</li>
			<li><strong>Commander:</strong> +2 starting loyalty and renown.</li>
			<li><strong>Dual-Wielding:</strong> When holding two weapons: +d6 damage.</li>
			<li><strong>Forge Master:</strong> You  can do Forging. See Advanced Downtime.</li>
			<li><strong>Sweep Attack:</strong> Make one melee attack against many monsters: Make one roll, AV + number of monsters. Must be using a two-handed weapon.</li>
			<li><strong>Monstrous:</strong> d12 health die. Become <em>monstrous</em>.</li>
			<li><strong>Multiattack:</strong> Make 2 attacks, or an attack + a stunt, or attack once every turn with a slow weapon.</li>
			<li><strong>Negotiator:</strong> +1 to reaction rolls. When in <em>combat</em> after a reactoin roll, enemies have a -1 moral.</li>
			<li><strong>Spell Sword:</strong> Learn a 1st level wizard spell. Inscribing a sword or great sword takes 1 week + 5000cp. Once per day, cast the spell while holding the sword.</li>
		</ul>

		`
	}, 
	cleric: {
		name: "Cleric",
		hd: "d6",
		armor: "Any",
		weapon: "Blunt",
		lang: "Common, Ceremonial",
		abilitytitle: "Cleric Skills",
		ability: `<h3>Tenets</h3>
		<ul>
			<li>Only using blunt weapons.</li>
			<li>Refusal to buy, sell, or use poisons, including alcohol. </li>
			<li>10% tithe to the temple.</li>
			<li>Respect of all royalty. </li>
		</ul>

		<h3>Turn Undead</h3>
		<p>Clerics can invoke the power of their deity to repel undead monsters. To turn the undead, roll 2d6. The Dungeon Master can either tell you the HD of the monster, or consults the table themselves.</p>
		<p>If the result is equal to or greater than the number in the table, the monster is turned. At higher levels, some undead may be automatically <strong>T</strong>urned, or <strong>D</strong>estroyed.</p>
		<p><strong>Excess:</strong> Rolled Hit Dice that are not sufficient to affect a monster are wasted.</p>
		<p><strong>Minimum effect:</strong> At least one undead monster will always be affected on a successful turning.</p>
		<p><strong>Mixed groups:</strong> If the undead are of different types, those with the lowest HD are affected first.</p>
		<p><strong>Recharge:</strong> A cleric can attempt to turn only once per <em>turn</em>.</p>
		<h3>Turning Table</h3>
		<table>
			<thead>
				<tr>
					<th>Lv</th>
					<th>1</th>
					<th>2</th>
					<th>2*</th>
					<th>3</th>
					<th>4</th>
					<th>5</th>
					<th>6</th>
					<th>7</th>
					<th>8+</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>1</td>
					<td>7</td>
					<td>8</td>
					<td>11</td>
					<td>-</td>
					<td>-</td>
					<td>-</td>
					<td>-</td>
					<td>-</td>
					<td>-</td>
				</tr>
				<tr>
					<td>2</td>
					<td>T</td>
					<td>7</td>
					<td>8</td>
					<td>11</td>
					<td>-</td>
					<td>-</td>
					<td>-</td>
					<td>-</td>
					<td>-</td>
				</tr>
				<tr>
					<td>3</td>
					<td>T</td>
					<td>T</td>
					<td>7</td>
					<td>8</td>
					<td>11</td>
					<td>-</td>
					<td>-</td>
					<td>-</td>
					<td>-</td>
				</tr>
				<tr>
					<td>4</td>
					<td>D</td>
					<td>T</td>
					<td>T</td>
					<td>7</td>
					<td>8</td>
					<td>11</td>
					<td>-</td>
					<td>-</td>
					<td>-</td>
				</tr>
				<tr>
					<td>5</td>
					<td>D</td>
					<td>D</td>
					<td>T</td>
					<td>T</td>
					<td>7</td>
					<td>8</td>
					<td>11</td>
					<td>-</td>
					<td>-</td>
				</tr>
				<tr>
					<td>6</td>
					<td>D</td>
					<td>D</td>
					<td>D</td>
					<td>T</td>
					<td>T</td>
					<td>7</td>
					<td>8</td>
					<td>11</td>
					<td>-</td>
				</tr>
				<tr>
					<td>7</td>
					<td>D</td>
					<td>D</td>
					<td>D</td>
					<td>D</td>
					<td>T</td>
					<td>T</td>
					<td>7</td>
					<td>8</td>
					<td>11</td>
				</tr>
				<tr>
					<td>8</td>
					<td>D</td>
					<td>D</td>
					<td>D</td>
					<td>D</td>
					<td>D</td>
					<td>T</td>
					<td>T</td>
					<td>7</td>
					<td>8</td>
				</tr>
				<tr>
					<td>10</td>
					<td>D</td>
					<td>D</td>
					<td>D</td>
					<td>D</td>
					<td>D</td>
					<td>D</td>
					<td>T</td>
					<td>T</td>
					<td>7</td>
				</tr>
				<tr>
					<td>11</td>
					<td>D</td>
					<td>D</td>
					<td>D</td>
					<td>D</td>
					<td>D</td>
					<td>D</td>
					<td>D</td>
					<td>T</td>
					<td>T</td>
				</tr>
				<tr>
					<td>12</td>
					<td>D</td>
					<td>D</td>
					<td>D</td>
					<td>D</td>
					<td>D</td>
					<td>D</td>
					<td>D</td>
					<td>D</td>
					<td>T</td>
				</tr>
				<tr>
					<td>13</td>
					<td>D</td>
					<td>D</td>
					<td>D</td>
					<td>D</td>
					<td>D</td>
					<td>D</td>
					<td>D</td>
					<td>D</td>
					<td>D</td>
				</tr>
				<tr>
					<td>14</td>
					<td>D</td>
					<td>D</td>
					<td>D</td>
					<td>D</td>
					<td>D</td>
					<td>D</td>
					<td>D</td>
					<td>D</td>
					<td>D</td>
				</tr>
			</tbody>
		</table>
		<h3>Magic</h3>
		<p><strong>Spell casting:</strong> Once a cleric has proven their faith (from 2nd level), the character may pray to receive spells. The power and number of spells available to a cleric are determined by the character’s level. Their spell list is found at the bottom of this section.</p>
		<table>
			<thead>
				<tr>
					<th>Lv</th>
					<th>1</th>
					<th>2</th>
					<th>3</th>
					<th>4</th>
					<th>5</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>2</td>
					<td>1</td>
					<td>-</td>
					<td>-</td>
					<td>-</td>
					<td>-</td>
				</tr>
				<tr>
					<td>3</td>
					<td>2</td>
					<td>-</td>
					<td>-</td>
					<td>-</td>
					<td>-</td>
				</tr>
				<tr>
					<td>4</td>
					<td>2</td>
					<td>1</td>
					<td>-</td>
					<td>-</td>
					<td>-</td>
				</tr>
				<tr>
					<td>5</td>
					<td>2</td>
					<td>2</td>
					<td>-</td>
					<td>-</td>
					<td>-</td>
				</tr>
				<tr>
					<td>6</td>
					<td>2</td>
					<td>2</td>
					<td>-</td>
					<td>-</td>
					<td>-</td>
				</tr>
				<tr>
					<td>7</td>
					<td>2</td>
					<td>2</td>
					<td>1</td>
					<td>1</td>
					<td>-</td>
				</tr>
				<tr>
					<td>8</td>
					<td>3</td>
					<td>3</td>
					<td>2</td>
					<td>1</td>
					<td>1</td>
				</tr>
				<tr>
					<td>9</td>
					<td>3</td>
					<td>3</td>
					<td>2</td>
					<td>2</td>
					<td>1</td>
				</tr>
				<tr>
					<td>10</td>
					<td>4</td>
					<td>4</td>
					<td>3</td>
					<td>2</td>
					<td>2</td>
				</tr>
				<tr>
					<td>11</td>
					<td>4</td>
					<td>4</td>
					<td>3</td>
					<td>3</td>
					<td>2</td>
				</tr>
				<tr>
					<td>12</td>
					<td>5</td>
					<td>5</td>
					<td>4</td>
					<td>3</td>
					<td>3</td>
				</tr>
				<tr>
					<td>13</td>
					<td>5</td>
					<td>5</td>
					<td>4</td>
					<td>4</td>
					<td>4</td>
				</tr>
				<tr>
					<td>14</td>
					<td>6</td>
					<td>5</td>
					<td>5</td>
					<td>5</td>
					<td>4</td>
				</tr>
			</tbody>
		</table>`,
		back: `<h2>Cleric Spells</h2>
		<div id="classSpellList"></div>`,
		code: "CL"
	},
	thief: {
		name: "Thief",
		hd: "d4",
		armor: "Leather",
		weapon: "Any",
		lang: "Common",
		abilitytitle: "Thief Skills",
		ability: `<ul>
			<li><strong>Climb sheer surfaces (CS):</strong> A roll is required for each 100’ to be climbed. If the roll fails, the thief falls at the halfway point, suffering fall damage. (1d6 per 10’)</li>
			<li><strong>Check Doors (CD):</strong> A thief gets a bonus to check doors See Adventure, page 9.</li>
			<li><strong>Open locks (OL):</strong> Requires thieves’ tools. A thief can only try this skill once per lock. If the roll fails, the thief may not try the same lock again before gaining an experience level.</li>
			<li><strong>Uncanny Stealth (US):</strong> A thief can attempt to hide motionless in shadows, or sneak past enemies unnoticed.</li>
			<li><strong>Pick pockets (PP):</strong> If the victim is above 5th level, the thief’s roll is penalised by 5% for every level above 5th. There is always at least a 1% chance of failure. A roll of more than twice the percentage is required for the theft to be unnoticed.</li> 
		</ul>
		<p>Checking skills with a percent chance: roll d%. If it is the listed value or less, the skill succeeds. </p>
		<table>
			<thead>
				<tr>
					<th>Lv</th>
					<th>CS</th>
					<th>CD</th>
					<th>OL</th>
					<th>US</th>
					<th>PP</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>1</td>
					<td>87</td>
					<td>+1</td>
					<td>15</td>
					<td>20</td>
					<td>20</td>
				</tr>
				<tr>
					<td>2</td>
					<td>88</td>
					<td>+1</td>
					<td>20</td>
					<td>25</td>
					<td>25</td>
				</tr>
				<tr>
					<td>3</td>
					<td>89</td>
					<td>+2</td>
					<td>25</td>
					<td>30</td>
					<td>30</td>
				</tr>
				<tr>
					<td>4</td>
					<td>90</td>
					<td>+2</td>
					<td>30</td>
					<td>35</td>
					<td>35</td>
				</tr>
				<tr>
					<td>5</td>
					<td>91</td>
					<td>+2</td>
					<td>35</td>
					<td>40</td>
					<td>40</td>
				</tr>
				<tr>
					<td>6</td>
					<td>92</td>
					<td>+2</td>
					<td>45</td>
					<td>50</td>
					<td>50</td>
				</tr>
				<tr>
					<td>7</td>
					<td>93</td>
					<td>+2</td>
					<td>55</td>
					<td>55</td>
					<td>55</td>
				</tr>
				<tr>
					<td>8</td>
					<td>94</td>
					<td>+2</td>
					<td>65</td>
					<td>65</td>
					<td>65</td>
				</tr>
				<tr>
					<td>9</td>
					<td>95</td>
					<td>+3</td>
					<td>75</td>
					<td>75</td>
					<td>75</td>
				</tr>
				<tr>
					<td>10</td>
					<td>96</td>
					<td>+3</td>
					<td>85</td>
					<td>85</td>
					<td>85</td>
				</tr>
				<tr>
					<td>11</td>
					<td>97</td>
					<td>+3</td>
					<td>95</td>
					<td>95</td>
					<td>95</td>
				</tr>
				<tr>
					<td>12</td>
					<td>98</td>
					<td>+3</td>
					<td>96</td>
					<td>96</td>
				</tr>
				<tr>
					<td>13</td>
					<td>99</td>
					<td>+4</td>
					<td>97</td>
					<td>97</td>
					<td>115</td>
				</tr>
				<tr>
					<td>14</td>
					<td>99</td>
					<td>+5</td>
					<td>99</td>
					<td>99</td>
					<td>125</td>
				</tr>
			</tbody>
		</table>
		<h3>Back-Stab</h3>
		<p>When attacking a surprised opponet, a Thief deals double damage. Thievs of 6th level or higher deal triple damage.</p>`,
		back: `<h3>Read Languages</h3>
		<p>A thief of 4th level or higher can decipher critical portions of non-magical text in any language (including dead languages and basic codes) with 80% probability. If the roll does not succeed, the thief may not try to read that particular text again before gaining an experience level.</p>`
	},
	wizard: {
		name: "Wizard",
		hd: "d4",
		armor: "None",
		weapon: "Dagger, Staff, Crossbow",
		lang: "Common",
		abilitytitle: "Arcane Magic",
		ability: `<p>See Magic for full details.</p>
		<p><strong>Spell Book:</strong> Wizards must carry a spell book to use magic. Wizards begin the game with their first spellbook. They begin with Read magic, and two spells of their choice, or three random spells.</p>
		<p><strong>Spell casting:</strong> Wizards carry spell books containing the formulae for arcane spells. The table shows the number they may memorize, determined by the character’s experience level. Their spell list is found at the end of this section.</p>
		<h3>Magic Progression</h3>
		<table>
			<thead>
				<tr>
					<th>Lv</th>
					<th>1</th>
					<th>2</th>
					<th>3</th>
					<th>4</th>
					<th>5</th>
					<th>6</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>1</td>
					<td>1</td>
					<td>–</td>
					<td>–</td>
					<td>–</td>
					<td>–</td>
					<td>–</td>
				</tr>
				<tr>
					<td>2</td>
					<td>2</td>
					<td>–</td>
					<td>–</td>
					<td>–</td>
					<td>–</td>
					<td>–</td>
				</tr>
				<tr>
					<td>3</td>
					<td>2</td>
					<td>1</td>
					<td>–</td>
					<td>–</td>
					<td>–</td>
					<td>–</td>
				</tr>
				<tr>
					<td>4</td>
					<td>2</td>
					<td>2</td>
					<td>–</td>
					<td>–</td>
					<td>–</td>
					<td>–</td>
				</tr>
				<tr>
					<td>5</td>
					<td>2</td>
					<td>2</td>
					<td>1</td>
					<td>–</td>
					<td>–</td>
					<td>–</td>
				</tr>
				<tr>
					<td>6</td>
					<td>2</td>
					<td>2</td>
					<td>2</td>
					<td>–</td>
					<td>–</td>
					<td>–</td>
				</tr>
				<tr>
					<td>7</td>
					<td>3</td>
					<td>2</td>
					<td>2</td>
					<td>1</td>
					<td>–</td>
					<td>–</td>
				</tr>
				<tr>
					<td>8</td>
					<td>3</td>
					<td>3</td>
					<td>2</td>
					<td>2</td>
					<td>–</td>
					<td>–</td>
				</tr>
				<tr>
					<td>9</td>
					<td>3</td>
					<td>3</td>
					<td>3</td>
					<td>2</td>
					<td>1</td>
					<td>–</td>
				</tr>
				<tr>
					<td>10</td>
					<td>3</td>
					<td>3</td>
					<td>3</td>
					<td>3</td>
					<td>2</td>
					<td>–</td>
				</tr>
				<tr>
					<td>11</td>
					<td>4</td>
					<td>3</td>
					<td>3</td>
					<td>3</td>
					<td>2</td>
					<td>1</td>
				</tr>
				<tr>
					<td>12</td>
					<td>4</td>
					<td>4</td>
					<td>3</td>
					<td>3</td>
					<td>3</td>
					<td>2</td>
				</tr>
				<tr>
					<td>13</td>
					<td>4</td>
					<td>4</td>
					<td>4</td>
					<td>3</td>
					<td>3</td>
					<td>3</td>
				</tr>
				<tr>
					<td>14</td>
					<td>4</td>
					<td>4</td>
					<td>4</td>
					<td>4</td>
					<td>3</td>
					<td>3</td>
				</tr>
			</tbody>
		</table>`,
		back: `<div style="break-inside: avoid"><h2>Wizard Spells</h2>
		<div id="classSpellList"></div>
		</div>`,
		code: "WI"
	},
}



function customize() {
	var key = document.getElementById("mySelect").value;	
	var chosenClass = classes[key];
	document.getElementById('playerclass').innerHTML = "Class: " + chosenClass.name;
	document.getElementById('hd').innerHTML = "HD: " + chosenClass.hd;
	document.getElementById('armor').innerHTML = htmlTag("li", "Armor: " + chosenClass.armor);
	document.getElementById('weapon').innerHTML = htmlTag("li", "Weapons: " + chosenClass.weapon);
	document.getElementById('lang').innerHTML = htmlTag("li", "Languages: " + chosenClass.lang);
	document.getElementById('abilitytitle').innerHTML = chosenClass.abilitytitle;
	document.getElementById('ability').innerHTML = chosenClass.ability;
	document.getElementById('back').innerHTML = chosenClass.back;
	if (chosenClass.code !== "") {
		classSpellListShort(chosenClass.code);
	}
	window.print();
}

function htmlTag(tag, text, attribute = "") {
	// returns <tag>text</tag>
	if (attribute !== "") {
		attribute = " " + attribute;
	}
	content = "<" + tag + attribute + ">" + text + "</" + tag + ">";
	return content;
}


