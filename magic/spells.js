function spellDesc(spell) {
    if (spell.level !== "Test") {
        let text = htmlTag("h3", spell.name) + htmlTag("p", spell.desc)
        if (typeof spell.revName !== 'undefined') {
            text += htmlTag("h4", "Reversed: " + spell.revName) + htmlTag("p", spell.revDesc);
        }
        return text;
    }
}

function getLevelList(code) {
    // Creates a list of the spells for a certain class and level, for example, WIzard2, by filtering from the full list of spells.
    let list = spells.filter(spell => Array.isArray(spell.level) && spell.level.includes(code));
    return sortSpellAlpha(list);
}
function formatList(list) {
    let len = list.length;

    let text = '<div class="columns">';
    for (let i = 0; i < len; i++) {
        text += spellDesc(list[i]);
    }
    text += "</div>"
    return text
}

// Display
function spellListAll() {
    //under construction
    let list = sortSpellAlpha(spells);
    let text = formatList(list)
    document.getElementById("spellListAll").innerHTML = text;
}

function classSpellList(codeBit) {
    levels = ["null", "1st", "2nd", "3rd", "4th", "5th", "6th"]
    elementList = document.getElementById("classSpellList")

    for (let level = 1; level < 7; level++) {
        let code = codeBit + level

        let list = getLevelList(code);
        if (list.length !== 0) {
            console.log(list)
            const myDiv = document.createElement('div');
            myDiv.id = code;
            elementList.appendChild(myDiv);

            let text = htmlTag("h2", levels[level] + " Level")
            text += formatList(list)

            myDiv.innerHTML = text;
        }
    }
}


// Utility
function sortSpellAlpha(list) {
    //sorts an array of objects by their name
    let listSorted = list.sort((a, b) => a.name.localeCompare(b.name));
    return listSorted
}

function htmlTag(tag, text) {
    // returns <tag>text</tag>
    content = "<" + tag + ">" +

 text + "</" + tag + ">"
    return content
}

/*
  w
  Spell:
  name: Spell name
  desc: Effect of spells
  level: array of class and level codes. Capital first two letters plus level. i.e cure woulds is CL1, DR2.
  revName: reversed spell name. optional.
  revDesc: revesed description. optional.
*/

let spells = [
    {"name":"Foo",
     "desc":"Bar",
     "revName":"Zig",
     "revDesc":"Zag",
     "level": ["Test"]},

    {"name":"Cure Wounds",
     "desc":"A touched creature heals 1d6+1.",
     "level": ["CL1", "DR2"]},

    {"name":"Detect Magic",
     "desc":"Enchanted objects, areas, and creatures glow while in the same zone as the caster. If they spend one turn studying a magic object, they learn general details about one of it's affects.</p><p> Lasts until fatigued.",
     "level": ["CL1", "WI1", "WA1"]},

    {"name":"Light",
     "desc":"This spell has three uses:</p><ol>\
<li><strong>Conjuring Light:</strong> A object begins to glow.</li>\
<li><strong>Blinding:</strong> A creature becomes blind.</li>\
<li><strong>Cancel Darkness:</strong> cancel a darkness spell.</li>\
</ol><p>Lasts until fatigued.",
     "revName":"Darkness",
     "revDesc":"Fills one zone with magical darkness, preventing both normal sight and infravision. Like light, it can alternitively be used to blind a creature or dispell a light.",
     "level": ["CL1", "WI1", "WA1"]},

    {"name":"Protection from Chaos",
     "desc":"Wards the caster or a touched creature from chaotic creatures and magic. Grants -1 to saves and dodges.",
     "revName":"Protection from Law",
     "revDesc":"Provides the same ward against law.",
     "level": ["CL1", "WI1", "WA3"]},


    {"name":"Purify Food and Water",
     "desc":"Makes spoiled, rotten, poisonous, or otherwise contaminated foor and water pure and suitable for eating. Affects 6 quarts of fluid, one ration, or 12 people's worth of unpreserved food.",
     "level": ["CL1"]},


    {"name":"Remove Fear",
     "desc":"The touched creature is calmed and warded against fear. Magically induced fear is dispelled.</p><p>Lasts until fatigued",
     "revName":"Cause Fear",
     "revDesc":"A chosen creature becomes overwhelmed with fear and begins to flee. </p><p>Lasts until fatigued.",
     "level": ["CL1"]},

    {"name":"Bless",
     "desc":"Allies who are not yet in battle gain a +1 to damage and loyalty, and -1 to AV.</p><p>Lasts until fatigued.",
     "revName":"Blight",
     "revDesc":"Enemies not yet in battle gain the opposite penalty.",
     "level": ["CL2"]},

    {"name":"Find Traps",
     "desc":"Magical and mundane objects or areas that pose a danger to wellbeing glow while in the same zone as the caster. No knowlage about the nature or method of the trap is gained.</p><p>Lasts until fatigued.",
     "revName":"Create Trap",
     "revDesc":"Using chalk, outline an area up to 10' in any direction. When a creature comes within 1' of touching the area, the whole area erupts in flames, dealing 1d8 damage. A physical save can be made for half damage. Then the trap is dispelled.</p>\
<p>A password may be spoken while the spell is cast. Speaking the password will allow the speaker to pass without activating the trap for 1 round.</p>\
<p>If the chalk line is broken, the trap is dispelled.",
     "level": ["CL2"]},

    {"name":"Hold Person",
     "desc":"A person is paralized and incapacitated. Lasts 2 turns per level.</p>\
<p><strong>Restriction:</strong> the target must be humanoid (human, dwarf, elf, etc) or goblinoid, must have 3 HD or less, and not be undead.",
     "revName":"Free Person",
     "revDesc":"A single person is instantly freed from mundane restraints, and may make an additional saving throw against magical restraints.",
     "level": ["CL2", "WI3", "WA2"]},

    {"name":"Know Alignment",
     "desc":"The caster gains immediate knowlage of the alighnment of one character, monster, object, or location.",
     "level": ["CL2"]},

    {"name":"Protection from Fire",
     "desc":"All creatures in the same zone as the caster are warded against fire:</p><ul>\
<li><strong>Normal Heat:</strong> unharmed by mundane heat or fire.</li>\
<li><strong>Save bonus:</strong> -2 bonus to saves versus fire based magic and breath attacks.</li>\
<li><strong>Fire-based damage:</strong> is reduced by 1 per die rolled.</li></ul>\
<p>Lasts until fatigued.",
     "revName":"Protection from Cold",
     "revDesc":"Protects from cold and ice instead of heat and fire.",
     "level": ["CL2", "DR3"]},

    {"name":"silence",
     "desc":"A zone is magicall silenced. Converation and spell casting are impossible. Noise from outside the area can be heard by those within it.</p>\
<p>Lasts until fatigued twice.",
     "level": ["CL2", "WA2"]},

    {"name":"Augury",
     "desc":"The cast divines a small amount of knowlage. The caster names or describe a person, place, or object. Three statments come to their mind, 1-2 of which are true.</p><p>If cast on a magic item with a command word, and the caster fails to speak the command word, augury instead reveals a number of random letters from the command word equal to the caster's level.",
     "level": ["CL2", "WI2"]},

    {"name":"Speak with Animals",
     "desc":"The caster gains the ability to speak with animals. This doesn't make the animals any more friendly or cooperative than normal.</p>\
<p>Lasts until fatigued.",
     "level": ["CL2", "DR1"]},

    {"name":"Continual Light",
     "desc":"Has the same three effects as light, but the light is day light, can be used to cancel continual darkness, and the spell lasts until dispelled. ",
     "revName":"Continual Darkness",
     "revDesc":"Same as continual light, but creates a sphere of magical darkness, preventing both normal sight and infravision.",
     "level": ["CL3", "WI1", "WA3"]},

    {"name":"Cure Disease",
     "desc":"Cure a touched subject of any disease, inluding those of magical origin. If the subject is a green slime, it is instead killed instantly.",
     "revName":"Cause Disease",
     "revDesc":"Inflict a terrible, withering disease on a victem. The disease has the following effects:",
     "level": ["CL3", "WA3"]},

    {"name":"Growth",
     "desc":"The effects of this spell depend on alignment:</p><ul>\
<li><strong>Lawful:</strong> One non-magical animal is doulbed in strenght and size. Damage from its attackes are doubled, and it has twice as many slots. Lasts until fatigued twice.</li>\
<li><strong>Neutral:</strong> Any vegitation in one zone becomes fantastically overgrown, forming a thorny jungle. If cast outside, instead affect an area of upto 3,000 square feet chosen by the caster. Only very large creatures can force their way through. Clearing the area becomes an ordeal.</li>\
<li><strong>Chaotic:</strong> The caster doubles in size and strength, as above. Last until fatigued twice.</ul>",
     "level": ["CL3", "WI4", "DR3"]},

    {"name":"Locate Object",
     "desc":"The caster magically locates an object. The spell has two modes:</p><ul>\
<li><strong>General:</strong> The nearest object of that type is located, e.g. a stairway, an altar.<\li>\
<li><strong>Specific:</strong> The caster must clearly visualize in all aspoects. e.g. my spell book.</li></ul>\
<p>The caster can sense the direction (but not distance) of an object, so long as it is within a qaurter mild. Lasts uintil fatigued.",
     "level": ["CL3", "WI1", "WA3"]},

    {"name":"Remove Curse",
     "desc":"Instantly remove one harmful magical effect from a touched creature.",
     "revName":"Curse",
     "revDesc":"Places a deleterious effect on a touched creature or object. The effects of the curse are determined by the caster. Maximum possible effects include:</p><ul>\
<li>+2 penalty to saves.</li>\
<li>+4 penalty to AC and AV.</li>\
<li>Reducing an ability score by 50%</li>\
<li>Unablle to put down or unequip the item.</li></ul>",
     "level": ["CL3", "WI4", "WA3"]},

    {"name":"Striking",
     "desc":"One weapon is enchanted to deal an additional 1d6 damage, and becomes a magical weapon. Lasts until fatigued.",
     "level": ["CL3", "WA3"]},

    {"name":"Create Water",
     "desc":"The caster touches a large stone surface, such as a wall or boulder. A magical font appears from that spot. It produces approximeately 50 gallons of water.<p>\
<p><strong>Higher level casters:</strong> If the caster is 9th level or higher, an additional 50 gallons is created for each level above 8th.",
     "revName":"Destroy Water",
     "revDesc":"The spell instead creates a magical drain, which destroys 50 gallons (or more) of water. It remains for one day or until it destroys the maximum amount of water. Creatures made of water, such as elentals take 1d8 damage per gallon drained.",
     "level": ["CL4", "DR2"]},

    {"name":"Cure Greater Wound",
     "desc":"A touched creature heals 2d6+2",
     "level": ["CL4", "WA5", "DR4"]},

    {"name":"Hold Monster",
     "desc":"A creature is paralized and incapacitated. Lasts 2 turns per level.</p>\
<p><strong>Restriction:</strong> the target must not be undead.",
     "revName":"Free Monster",
     "revDesc":"A creature is instantly freed from mundane restraints, and may make an additional saving throw against magical restraints.",
     "level": ["CL4", "WI5", "DR4"]},


    {"name":"Neutralize Poison",
     "desc":"The spell removes poison from a touched item, or neutralizes the effect of poison in a touched creature. A creature killed by poison can be revieved within 1 turn.",
     "revName":"Cause Poison",
     "revDesc":"A touched creature becomes poisoned unless they succeed a physical saving throw. Each turn, they take 1d8 damage until they die or are cured.</p><p>Can instead be cast on a object. When the object is consumed or breaks skin, the victem must save or be poisoned in the same way. Lasts until a shift.",
     "level": ["CL4", "WA4", "DR3"]},

    {"name":"Protection from Chaos 10' radius",
     "desc":"Wards the caster and all creatures with in a 10' radius from chaotic creatures and magic. Grants -1 to saves and dodges.",
     "revName":"Protection from Law 10' radius",
     "revDesc":"Provides the same ward against law.",
     "level": ["CL4", "WI3"]},

    {"name":"Sticks to Snakes",
     "desc":"2d8 normal sticks are miraculously transformed into snakes that follow their caster's orders. When killed or the spell ends, they revert to sticks.</p>\
<p><strong>Poison:</strong> There is a 50% chance of the snakes being poisonous.</p>\
<p>Lasts until fatigued",
     "level": ["CL4"]},

    {"name":"Charge",
     "desc":"The caster commands a subject to preform or avoid a specific action, or charges them with a quest.</p>\
<p><strong>Examples:</strong> Bringin a specific item to the caster, eating or drinking without restraint, keeping a certain fact secret, rescuing a prisoner, killing a specific monster.</p>\
<p><strong>Impossible or deadly tasks:</strong> If an impossible or directly deadly charge instead affects the caster.</p>\
<p><strong>Avoidance:</strong> If the subject refuses to follow the charge, they accumulate gradual, increasing, and eventually deadly penalties.",
     "level": ["CL5", "WI5"]},

    {"name":"Commune",
     "desc":"The caster enters into direct communication with divine powers. The communion lasts three turns, where the caster must be fully concentrating.</p>\
<p>The caster may ask three questions per casting. Once per year, they may instead ask six. Each question receives a simple yes or no answer.</p>\
<p>Commune can only be cast once per month.",
     "level": ["CL5", "DR5"]},

    {"name":"Create Food",
     "desc":"The caster reaches into an empty sack. From it, they magically produce food for twelve humans and twelve mounts for one day.</p>\
<p><strong>Higher level casters:</strong> If the caster is higher than 8th level, food sufficient for an additional 12 humans and mounts is produced for each level beyond 8th.",
     "revName":"Destroy Food",
     "revDesc":"The same amount of food crumbles to dust.",
     "level": ["CL5"]},

    {"name":"Dispel Evil",
     "desc":"The spell has two uses:</p><ul>\
<li><strong>Ward:</strong> By fully concentrating for up to one turn, enchanted or undead monsters that come close to the caster may be banished or destroyed. Each monster may make a magic save to avoid banishment or destruction. If a monster's save succeeds, it is turned instead.</li>\
<li><strong>Single Monster:</strong> Instantly banish or destroy a single enchanted or undead monster. It makes a magic save with a disadvantage to avoid banishment or destruction, likewise being turned on a success.</li></ul>",
     "revName":"Conjure Evil",
     "revDesc":"The caster first spends a turn drawing a ritual circle on the ground with chalk. Then after a second turn of chanting, a 6 HD fiend, typically a succubus, or a 6 HD celestial, typically an acheron, is conjured either inside, or outside of the circle. While the caster maintains concentration, the creature is magically bound do obey, and can not cross the circle.</p>\
<p>If the caster breaks consentration, there is a 1-in-6 chance they loose control of the creature before returning it to its home plane. If the circle has been broken, the chance is 5-in-6.",
     "level": ["CL5", "WA5"]},

    {"name":"Locate Monster",
     "desc":"The caster magically locates a creature, including magical creatures. The spell has two modes:</p><ul>\
<li><strong>General:</strong> The nearest creature of that type is located, e.g. a unicorn, an elf.<li>\
<li><strong>Specific:</strong> The caster must clearly visualize in all aspoects. e.g. the terrible half-camel, half-leopard: the beast Glatisant!.</li></ul>\
<p>The caster can sense the direction (but not distance) of a creature, so long as it is within a qaurter mild. Lasts uintil fatigued.",
     "level": ["CL3", "WI4", "WA4"]},

    {"name":"Raise Dead",
     "desc":"A corpse is restored to live. They must not have been dead for no longer than four days per level of the caster above 7th. The ritual takes 3 turns, and requires 5000 cp of insense and other supplies.</p>\
<p>Alternetivly, the spell instantly destroys a single undead monster.</p>",
     "revName":"Finger of Death",
     "revDesc":"Directs a ray of deadly magic at a single target. If the target fails a physical saving throw, it dies instantly.",
     "level": ["CL5"]},

    {"name":"Lesser Charm",
     "desc":"A person is charmed, as follows:</p><ul>\
<li><strong>Friendship:</strong> The subject regards the caster as its trusted friend and ally.</li>\
<li><strong>Commands:</strong> The caster may give the charmed creature commands, which it will obey, if it understands, if it is not obviously self destructive, and if it does not conflict with their alignment or religion.</li></ul>\
<p><strong>Restrictions:</strong> Undead, and creatures of 4 HD and greater are not affected.</p>\
<p><strong>Duration:</strong> The charm lasts indefinetly, or until the caster or an ally attacks the subject. Additionally, the subject makes new magic saves at intervals depending on it's intelligence:</p><ul>\
<li>≤8: New save each month.</li>\
<li>9–12: New save each week.</li>\
<li>13–17: New save each day.</li>\
<li>18: New save each hour.</li></ul>",
     "level": ["WI1", "WA1"]},

    {"name":"Floating Disc",
     "desc":"The caster conjures a slightly concave, circular disc of magical force. It appears next to the caster. The disc folows them about and carries loads. The disc is 3' in diameter and 1\" deep at its center. It can hold a maximum of 50 slots, 5,000 coins, or 500 pounds.</p>\
<p>The disc floats at wasit height and remains level, floating along horizontally. The disc winks out after 6 turns; Anything in it is dropped.",
     "level": ["WI1"]},

    {"name":"Hold Portal",
     "desc":"A door, window, or other kind of portal is magically held shut. Lasts for two shifts.</p><p><strong>Opening by magic:</strong> A knock spell opens the portal.</p><p><strong>Opening by force:</strong> Creatures with at least 3 HD more than the caster’s level can open the held portal with one round of effort.",
     "level": ["WI1", "WA1"]},

    {"name":"Magic Missile",
     "desc":"This spell conjures a glowing dart of energy shoots at a target of the caster’s choice. The missile hits unerringly (no attack roll), and can hit a distant target. The missile inflicts 1d6+1 damage.</p><p><strong>Higher level casters:</strong> May conjure more missiles. They may be directed at a the same or different targets.",
     "level": ["WI1", "WA2"]},

    {"name":"Read Languages",
     "desc":"The caster may understand any written language, including muncane codes, maps, and othjer written instructions. This spell does not grant any ability to speak nor listen to unknown languages.</p><p>Lasts until fatigued.",
     "revName":"Remove Langages",
     "revDesc":"Cause one subject to loos the ability to speak or understand langauge. Lasts until fatigued.",
     "level": ["WI1", "WA4"]},

    {"name":"Read Magic",
     "desc":"Allows the caster to understand magical writing for one turn. They can identify spell scrolls, spell books, and other magical runes and inscriptions. Once read, the caster is able to read that particular writing without the use of a spell.",
     "level": ["WI1"]},

    {"name":"Shield",
     "desc":"Creates a field of force that protects the caster for two turns. The shield is nearly invisible, appearing like spider silk or polished glass.</p><ul>\
<li><strong>Against missile attacks:</strong> The caster’s AC is 2.</li>\
<li><strong>Against other attacks:</strong> The caster’s AC is 4.</li>\
<li><strong>Against Magic:</strong> Breath attacks and magic that allow a save for half damage, instead deal no damage with a successful save.</li>\
<li><strong>Against Magic Missile:</strong> Shield will completely prevent Magic Missile.,</li>\
</ul>",
     "level": ["WI1", "WA4"]},

    {"name":"sleep",
     "desc":"A sleep spell causes a magical slumber for 4d4 turns. The spell may target either:</p><ul><li>A single creature with 4 HD,</li><li>A total of 2d8 HD of creatures of 4 HD or lower each.</li></ul>\
<p>Undead are unaffected. Targets do not get a save versus spells.</p>\
<p>When targeting multiple creatures, sleep targets creatures with the least HD are first. Rolled HD not sufficient to affect a creature are wasted.</p>\
<p>Creatures enchanted by this spell are helpless and can be killed instantly with a bladed weapon. Slapping or wounding awakens an affected creature.</p>",
     "level": ["WI1"]},

    {"name":"Ventriloquism",
     "desc":"The caster may make their voice appear to come from another location or source (e.g. a statue or animal).</p><p>Lasts until fatigued.",
     "level": ["WI1"]},

    {"name":"See Invisible",
     "desc":"The caster can see invisible creatures and items in the same zone.</p><p>Lasts until fatigued.",
     "level": ["WI2", "DR1"]},

    {"name":"Telepathy",
     "desc":"Grants the caster the ability to perceive and understand the thoughts of other creatures. When the spell begins, the caster is assaulted by the thoughts of all creatures distant or closer. They are incomprehensible, but reveal the location of the creature.</p>\
<p>By fully concentrating on single creature, the caster can perceive and understand that creatures thoughts.</p>\
<p>The thoughts of magical creatures may be dangerous. Lasts one turn per level<\p>\
<p><strong>Obstructions: </strong>The ability to perceive thoughts is obstructed by a thin layer of lead or by rock of 2’ thick or greater.",
     "level": ["WI2"]},

    {"name":"Invisibility",
     "desc":"The caster or another creature or object becomes invisible:</p>\
<p>If cast on a creature: Any gear the subject is carrying is also rendered invisible. Items dropped or put down by an invisible creature become visible. If the subject attacks or casts a spell, the invisibility is broken, ending the spell.</p>\
<p>If cast on an object: The invisibility is permanent.</p>\
<p>Light sources: made invisible (either as part of a creature’s gear or as an individual object), the light it casts is unaffected.",
     "level": ["WI2", "WA2"]},

    {"name":"Knock",
     "desc":"The caster touches a door, which is magically opened by a loud sound. Knock opens stuck, barred, or locked door, as well as gates, chests, and so forth, including magically held doors (e.g. Hold Portal, Wizard Lock).",
     "level": ["WI2"]},

    {"name":"Levitate",
     "desc":"This enchantment allows the caster to float through the air. The caster is not granted any additional movement, and must push against solid objects to move. If encumbered, they will sink to the ground.</p><p>Lasts until fatigued.",
     "level": ["WI2"]},


    {"name":"Mirror Image",
     "desc":"1d4 illusory duplicates of the caster appear. The mirror images look and behave exactly as the caster. Attacks on the caster destroy one of the mirror images (even if the attack misses).</p><p>Ends when fatigued, or when the last duplicate is destroyed.",
     "level": ["WI2"]},


    {"name":"Phantasmal Force",
     "desc":"A visual illusion of the caster’s choosing manifests in a 20’ cube area, within sight. Three types of illusions may be created:</p><ul>\
<li>An illusionary monster: That can be directed to attack. The monster has an Armour Class of 9 and will vanish if hit in combat.</li>\
<li>An illusionary attack: For example, an avalanche, a falling ceiling, a magic missile, etc. Targets who save versus spells are unaffected. </li>\
<li>A scene: Either changing the appearance of the affected area or creating the appearance of something new. The scene disappears if touched.</li>\
</ul><p><strong>Restrictions:</strong> The following apply:</p><ul>\
<li>Full concentration</li>\
<li>Illusionary monsters or attacks: May appear to be harmful but no real damage is ever inflicted. A character who appears to die actually falls unconscious, a character turned to stone will actually be paralyzed, and so on. Such effects last for 1d4 turns.</li></ul>",
     "level": ["WI2"]},

    {"name":"Web",
     "desc":"Conjures a many-layered mass of strong, sticky threads, blocking up to a 10' area. The web has an AC of 9, and 10 HP.</p>\
<p><strong>Entanglement:</strong> Creatures caught within a web become entangled among the gluey fibres. Entangled creatures are restrained, but can make attacks against the web.</p>\
<p><strong>Flammable:</strong> The strands of the web are flammable and can be destroyed by fire in two rounds. All creatures caught within flaming webs suffer 1d6 damage from the flames.</p>",
     "level": ["WI2"]},

    {"name":"Wizard Lock",
     "desc":"A wizard lock spell magically locks a touched door, gate, or any item that has a lock or latch. The magical lock is permanent but may be temporarily bypassed as follows:</p></ul>\
<li><strong>Password:</strong> The caster may speak a password at the time of casting. Speaking the password disables the lock for one round.</li>\
<li><strong>A Knock spell:</strong> Disables the lock for one round.</li></ul>\
<p><strong>Higher level casters:</strong> Any magic-using character who is at least 3 levels higher than the caster of the wizard lock may pass through unimpeded.",
     "level": ["WI2"]},

    {"name":"Marionette",
     "desc":"A small wooden doll springs to life while the caster concentrates. The doll is an automoton, which the caster telepathically directs. The doll has 1 HP, an AC of 9, and can't attack. However, it has 1 slot, 3 strength, 3 dexterity, and can move freely within one zone of the caster, even out of sight (the caster must visualize the unseen area, as no new senses are granted).",
     "level": ["WI2"]},

    {"name":"Clairvoyance",
     "desc":"The caster gains the ability to see through the eyes of other living creatures. To establish a connection, caster must fully concentrate for one turn. Then, the visual perceptions of the last connected creature are realyed to the caster. The caster is blind to their own vision.</p>\
<p><strong>Restrictions:</strong> The spell is blocked by a thin layer of lead, or by rock of 2' thick or greater. The ability lasts until fatigued twice.",
     "level": ["WI3"]},

    {"name":"Dispel Magic",
     "desc":"One magical effect is ended. If the level of the caster of the effect to be dispelled is higher than the level of the caster of dispel magic, there is a 5% chance per level difference that the attempt to dispel will fail.</p><p>Magic items are unaffected, unless the caster is of 9th level or higher.",
     "level": ["WI3", "DR4"]},

    {"name":"Fireball",
     "desc":"Flame streaks towards a point within sight, and detonates an entire zone (or a 40' diameter sphere). Creatures caught in the fireball suffer 1d6 damage per level of the caster, with a successful physical save preventing half of the damage.",
     "level": ["WI3"]},

    {"name":"Fly",
     "desc":"A touched creature sprouts wings, gaining the ability to fly through the air. They can fly four times faster than they would be able to run. It's possible to move in any direction, and to hover in mid-air.</p><p>Lasts until fatigued three times.",
     "level": ["WI3", "WA4"]},

    {"name":"Haste",
     "desc":"Up to 24 creatures are enchanted to be able to move and act twice as quickly as normal:</p><ul>\
<li><strong>Movement:</strong> Where they would normally move one step, they can move two.</li>\
<li><strong>Attacks:</strong> Each round, they can make two attacks, or one attack and one stunt.</li>\
<li><strong>Magic:</strong> The number of spells and uses of magical devices per round is are not doubled</li>\
</ul>Lasts until a shift. Then all subjects are fatigued.",
     "revName":"Slow",
     "revDesc":"Up to 4d8 HD of creatures 4HD or less, or one creature of 4HD or more is affected. The creature(s) move half as quickly, only acting every other round.",
     "level": ["WI3"]},

    {"name":"Infravision",
     "desc":"A touched creature is able to see in the dark with infravision. If the caster is higher than 5th level, an additional creature can be affected for each level beyond 5th.</p><p>Lasts one day",
     "level": ["WI3"]},

    {"name":"Invisibility 10' Radius",
     "desc":"The caster gains an aura of invisibility. When the spell is cast, the caster and creatures within 10' become invisible. The 10' radius moves with the caster, and subjects that move out of it become visable.</p>\
<p>Any gear the subject is carrying is also rendered invisible. Items dropped or put down by an invisible creature become visible. If the subject attacks or casts a spell, the invisibility is broken, ending the spell.</p>\
<p>Light sources are made invisible  the light it casts is unaffected.</p>\
<p>Lasts for as long as the caster concentrates</p>",
     "level": ["WI2"]},

    {"name":"Locate Person",
     "desc":"The caster magically locates a person. The spell has two modes:</p><ul>\
<li><strong>General:</strong> The nearest person of that type is located, e.g. a potter, a thief.<li>\
<li><strong>Specific:</strong> The caster must clearly visualize in all aspoects. e.g. Enelye the Nenyar of Cuivienen.</li></ul>\
<p>The caster can sense the direction (but not distance) of an person, so long as they are within a qaurter mild. Lasts uintil fatigued.",
     "level": ["WI3", "WA2", "DR2"]},

    {"name":"Lightning Bolt",
     "desc":"A powerful stroke of electrical energy extends from the caster’s fingers. It is 180’ long and 5’ wide. Creatures caught in the lightning bolt suffer 1d6 damage per level of the caster. A successful save versus spells prevents half of the damage.</p><p>Bounce: If the lightning bolt hits a solid barrier before its full length is reached, it is reflected and continues to its full length.",
     "level": ["WI3", "DR3"]},

    {"name":"Shadow Hound",
     "desc":"A dog made of black smoke appears before the caster. It obeys all spoken orders with absolute obedience until it is destroyed.</p><p>Lasts until fatigued.",
     "level": ["WI3"]},

    {"name":"Speak with Dead",
     "desc":"The caster gains the ability to speak with corpses and undead. This doesn't make them any more friendly or cooperative than they would have been in life.</p><p>Lasts until fatigued.",
     "level": ["WI3", "WA2", "DR4"]},

    {"name":"Water Breathing",
     "desc":"A touched creature can breathe water freely by means of this spell.The spell does not affect the subject’s ability to breathe air. No additional proficiency at swimming is granted</p><p>Lasts one day.",
     "revName":"Air Breathing",
     "revDesc":"Allows a subject to breath air. No additional walking ability is granted.",
     "level": ["WI3", "WA4", "DR3"]},

    {"name":"Confusion",
     "desc":"This spell causes creatures become charmed for 1 turn. Choose a distant zone. 3d6 subjects become charmed. Subjects are selected weakest first, and then randomly.</p><ul>\
<li><strong>Subjects of 2 HD or greater:</strong> May make a magic save each round to resist the spell’s effect, acting normally each round they succeed.</li>\
<li><strong>Subjects of 2 HD or lower:</strong> May not make a save.</li></ul>\
<p><strong>Behavior:</strong> Roll on the table separately for each affected subject each round to determine how that subject acts:</p>\
<table><tr><th>2d6</th><th>Behavior</th></tr><tr><td>2-5</td><td>Behave normally</td></tr><tr><td>6-8</td><td>No action</td></tr><tr><td>9-12</td><td>Att</td></tr></table>",
     "level": ["WI4", "WA5"]},

    {"name":"Dimension Door",
     "desc":"A touched creature is instantly transferred to another location up to 360’ away. The destination may be selected in two ways:</p>\
<p><strong>Known location:</strong> A location, within 360’, known to the caster.</p>\
<p><strong>An unknown location:</strong> Specified by a series of offsets (e.g. 120’ north, 160’ east, 80’ up) totaling not more than 360’.</p>\
<p><strong>Restrictions:</strong> If the destination is occupied By a solid body, the spell fails.",
     "level": ["WI4", "DR5"]},

    {"name":"Greater Charm",
     "desc":"A single creature, or or a group 3d6 creatures of 3 HD or less, is charmed, as follows:</p><ul>\
<li><strong>Friendship:</strong> The subject regards the caster as its trusted friend and ally.</li>\
<li><strong>Commands:</strong> The caster may give the charmed creature commands, which it will obey, if it understands, if it is not obviously self destructive, and if it does not conflict with their alignment or religion.</li></ul>\
<p><strong>Restrictions:</strong> Undead are not affected.</p>\
<p><strong>Duration:</strong> The charm lasts indefinetly, or until the caster or an ally attacks the subject. Additionally, the subject makes new magic saves at intervals depending on it's intelligence:</p><ul>\
<li>≤8: New save each month.</li>\
<li>9–12: New save each week.</li>\
<li>13–17: New save each day.</li>\
<li>18: New save each hour.</li></ul>",
     "level": ["WI4", "WA5"]},

    {"name":"Hallucinatory Terrain",
     "desc":"Hallucinatory terrain either conjures an illusory terrain feature (e.g. a hill, wood, marsh, etc.) or hides an existing terrain feature. The illusion must fit completely within the a 240’ radius of the caster.</p>\
<p>If the illusion is touched by an intelligent being, the spell is ended.",
     "level": ["WI4"]},

    {"name":"Massmorph",
     "desc":"A force of human-sized creatures within a 240’ diameter area is veiled by illusion to appear as a copse of trees or orchard. Once the illusion is in place, even creatures moving among the veiled subjects are deceived. Subjects who leave the affected area cease to be veiled.</p>\
<p>The caster may dismiss the illusion in its entirety at any time.",
     "level": ["WI4"]},

    {"name":"Polymorph",
     "desc":"A creature is changed into another type of creature, as chosen by the caster:</p><ul>\
<li>HD: The new form may not have more Hit Dice than the subject.</li>\
<li>Damage: The subject retains the same amount of damage.</li>\
<li>Abilities: The subject truly becomes the new form: all special abilities are acquired, along with behavioral patterns, tendencies, and intelligence.</li>\
<li>Specific individuals: The spell cannot be used to duplicate a specific individual.</li>\
<li>Stats: If cast on themselve, the caster retains their own intelligence, hit points, saving throws, but gains the strength, attacks, and AV of the new form. Otherwise, the subject gains all stats of the new form.</li>\
<li>Casting spells: While polymorphed, the subject is unable to cast spells.</li>\
<li>Reversion: If the subject dies, it returns to its original form.</li>\
</ul><p>Lasts until <em>fatigued</em> twice.</p>\
<p>If the caster is of at least 10th level, they may choose to have the spell never end.",
     "level": ["WI4"]},

    {"name":"Water Breathing 10' radius",
     "desc":"The caster, and all creatures within 10' of them can breathe water freely. If a subject leaves the radius, they loose water breathing until they reenter it. The spell does not affect the subject’s ability to breathe air. No additional proficiency at swimming is granted</p><p>Lasts one day.",
     "revName":"Air Breathing",
     "revDesc":"Allows a subject to breath air. No additional walking ability is granted.",
     "level": ["WI4"]},

    {"name":"Wall of Fire",
     "desc":"An immobile, opaque curtain of fire springs into existence. It remains as long as the caster fully concentrates.</p><ul>\
<li>The wall can be any size, shape, and dimensions the caster desires, up to 1,200 sq. ft. The wall may not appears where objects are.</li>\
<li>Monsters with <4 HD cannot pass the wall of flames. Monsters with ≥4 HD take 1d6 hit points of damage when they pass through the wall. The wall deals double damage to undead creatures or creatures that use cold or are accustomed to cold.</li></ul>",
     "revName":"Wall of Ice",
     "revDesc":"An immobile, translucent, wall of ice springs into existence. Functions the same as wall of fire with the following changes:</p><ul>\
<li>Damage: extra damage is dealt to creatures that use fire or are accustomed to fire.</li>\
<li>Concentration: The wall does not require concentration, instead it melts partly after two shifts, and completely after three, unless it is in a cold area.</li></ul>",
     "level": ["WI4", "DR5"]},

    {"name":"Wizard Eye",
     "desc":"One of the casters eyes pops harmlessly out of their head. It becomes transparent, nearly invisible and begins to fly.</p><ul>\
<li><strong>Movement:</strong> The eye is mentally directed by the caster. It can be moves up to 120’ per <em>turn</em>, and up to 240’ total from the caster. Solid barriers block passage, but it can pass through a hole or space as small as 1 inch in diameter</li>\
<li><strong>Seeing through the eye:</strong> By concentrating, the caster can see through the eye, but becomes blind to their own vision.</li>\
<li><strong>Types of vision:</strong> The magical eye grants both normal vision and infravision.</li></ul>\
<p>When the caster becomes <em>fatigued</em>, the eye floats slowly to the ground. If not placed in the casters head within 1 <em>turn</em>, the eye is destroyed.",
     "level": ["WI4"]},

    {"name":"Animate Dead",
     "desc":"This spell turns the bones or bodies of dead creatures into undead skeletons or zombies:</p><ul>\
<li><strong>Obedient:</strong> They obey the caster’s commands. They have a loyalty of 12.</li>\
<li><strong>Special abilities:</strong> They are unable to use any special abilities that they possessed in life.</li>\
<li><strong>Number:</strong> The spell animates a number of Hit Dice of zombies or skeletons equal to the caster’s level.</li>\
<li><strong>Hireling:</strong> After one day, the caster must either take the undead as <em>hireling</em>, or end the spell</li></ul>",
     "level": ["WI4", "WA3"]},


    {"name":"Cloudkill",
     "desc":"A poisonous fog streams from the caster’s fingertips, filling a <em>zone</em> within <em>sight</em>. </p><ul>\
<li><strong>Movement:</strong> Each <em>turn</em>, the fog moves to an adjacent <em>zone</em>, driven by the wind.</li>\
<li><strong>Sinking:</strong> Because the fog is heavier than air, it sinks to the lowest level of the land, even pouring down den or sink hole openings.</li>\
<li><strong>Damage:</strong> All creatures in contact with the vapors take 1 damage per <em>round</em>.</li>\
<li><strong>Creatures with <5 HD:</strong> Must also make a <em>physical save</em> (once per round) or die.</li></ul>",
     "level": ["WI5"]},


    {"name":"Conjure Elemental",
     "desc":"A 16 HD elemental is summoned from an elemental plane of the caster’s choice (air, earth, fire, water) to do the caster’s bidding.</p><ul>\
<li><strong>Materials:</strong> The summons requires a large volume of the appropriate element.</li>\
<li><strong>Full Concentration:</strong> Is required to command an elemental.</li>\
<li><strong>Dismissing:</strong> While control over the elemental is maintained, the caster may dismiss it at any time, sending it back to its plane of origin.</li>\
<li><strong>Disruption:</strong> If the caster’s <em>concentration</em> is disturbed, the command over the elemental ends. It is, henceforth, a free willed entity and will immediately try to kill the caster and any who get in its way.</li></ul>",
     "level": ["WI5", "WA5"]},


    {"name":"Contact Higher Plane",
     "desc":"The caster has can ask a powerful, otherworldly being for advice and knowledge on any subject.</p>\
		<p><strong>Plane:</strong> The caster must choose which plane of existence to contact. Higher planes are home to more powerful and knowledgeable beings. The spell lasts one <em>turn</em> per level of the plane, and requires full <em>concentration</em>.</p>\
		<p><strong>Questions:</strong> The caster may then ask a number of yes/no questions equal to the number of the plane contacted.</p>\
		<p><strong>Answers:</strong> For each question asked, there is a chance of the contacted being not knowing the answer, or of answering untruthfully. </p>\
		<p><strong>Restrictions:</strong> Contact may be cast at most once per month.</p>\
		<p><strong>Insanity:</strong> Contact has a chance of causing insanity. Insane characters are incapable of action or communication. the recovery time is a number of weeks equal to the number of the plane. For every level of the caster above 10, this chance is reduced by 5%.</p>\
<table><tr><th>Plane</th><th>Don’t</th><th>Know</th><th>Truth</th><th>Insanity</th></tr>\
<tr><td>3rd</td><td>75%</td><td>50%</td><td>5%</td></tr>\
<tr><td>4th</td><td>70%</td><td>55%</td><td>10%</td></tr>\
<tr><td>5th</td><td>65%</td><td>60%</td><td>15%</td></tr>\
<tr><td>6th</td><td>60%</td><td>65%</td><td>20%</td></tr>\
<tr><td>7th</td><td>50%</td><td>70%</td><td>25%</td></tr>\
<tr><td>8th</td><td>40%</td><td>75%</td><td>30%</td></tr>\
<tr><td>9th</td><td>30%</td><td>80%</td><td>35%</td></tr>\
<tr><td>10th</td><td>20%</td><td>85%</td><td>40%</td></tr>\
<tr><td>11th</td><td>10%</td><td>90%</td><td>45%</td></tr>\
<tr><td>12th</td><td>5%</td><td>95%</td><td>50%</td></table>",
     "level": ["WI5", "WA5"]},


    {"name":"Feeblemind",
     "desc":"An arcane spell caster within sight must <em>succeed</em> a <em>magic save</em> (at a –4 penalty) or become an imbecile, unable to think clearly or cast spells.",
     "level": ["WI5"]},


    {"name":"Pass-Wall",
     "desc":"The caster touches solid stone. A 5’ diameter hole is temporarily opened, forming a passage-way up to 10’ deep.</p>\
		<p>After a shift, the passage seals, without a trace.",
     "level": ["WI5"]},

    {"name":"Telekinesis",
     "desc":"The caster concentrates for up to six <em>rounds</em>. During that time, they are able to mentally move objects or creatures within a long distance.</p><ul>\
			<li>Weight: Up to 2 item slots, or 50 lb, per level of the caster may be moved at once.</li>\
			<li>Movement: The target may be moved up to 2 squares per <em>round</em>, in whatever direction the caster wishes</li></ul>",
     "level": ["WI5"]},


    {"name":"Teleport",
     "desc":"A touched creature disappears and reappears at a location of the caster’s choosing, including its gear</p>\
The destination may be at any distance, but must be known to the caster. The destination must be an open space at ground level. (It is not possible to intentionally teleport the subject into mid-air or into solid matter.)</p>>\
		<p>There is a risk of accidentally arriving above or below ground level. The chance of a successful teleportation depends on the caster’s knowledge of the destination (see right). Roll d% and consult the table</p><table>\
<tr><th>Know.</th><th>of</th><th>Dest.</th><th>Ground</th><th>Level</th><th>Too</th><th>High</th><th>Too</th><th>Low</th></tr>\
<tr><td>Scant</td><td>01–50</td><td>51–75</td><td>76–00</td></tr>\
<tr><td>Medium</td><td>01–80</td><td>81–90</td><td>91–00</td></tr>\
<tr><td>Exact</td><td>01–95</td><td>96–99</td><td>0</td></table>\
<ul><li>Ground level: The subject appears at the desired destination.</li>\
<li>Too high: The subject appears 1d10×10’ above the intended destination. Should this location already be occupied by solid matter, the subject is instantly killed. Otherwise, the subject falls from a height.</li>\
<li>Too low: The subject appears in the ground and is killed instantly.</li></ul>\
<p>Knowledge of destination: The caster’s knowledge of the destination is rated as follows:</p><ul>\
<li>Scant: A location that the caster has visited once or twice, has seen by magical scrying, or has heard of from descriptions.</li>\
<li>Moderate: A location that the caster has visited often or has studied via scrying for several weeks.</li>\
<li>Exact: A location that the caster has made a detailed study of, in person</li></ul>",
     "level": ["WI5"]},


    {"name":"Wall of Stone",
     "desc":"A wall of solid rock appears. The wall may be of whatever shape the caster desires and is of 1,000 cubic feet in volume. (For example, a 2’ thick wall, 50’ long and 10’ high.) The wall must rest upon a solid surface and may not be evoked so that it appears where objects are.",
     "revName":"Wall of Air",
     "revDesc":"The wall functions the same as the wall of stone, but is made of an invisible air current. It lasts until <em>fatigued</em> twice.",
     "level": ["WI5", "DR5"]},


    {"name":"Anti-Magic Shell",
     "desc":"An anti-magic barrier is created around the caster. It’s a 10’ radius sphere. It moves with the caster. The caster must <em>concentrate</em> to maintain it. No spells or spell effects can pass through this barrier, whether from inside or outside. The effects of magic items and other spells are supressed while in the sphere.</p>\
		<p>Lasts until <em>fatigued</em> twice.",
     "level": ["WI6"]},

    {"name":"Control Weather ",
     "desc":"By fully <em>concentrating</em> the caster can control the weather in a quarter mile radius. When <em>concentration</em> is broken, weather returns to normal.</p><p>This spell only functions outdoors.",
     "revName":"Control Earth",
     "revDesc":"<p>Earth (but not stone) within within a quarter mile, that the caster can see, is rearranged as the caster wishes.</p>\
		<p><strong>Movement rate:</strong> The caster can move earth in the area at up to 60’ per <em>turn</em>.</p>\
		<p><strong>Excavations:</strong> The range of the spell also extends downwards, allowing excavations to be made.",
     "level": ["WI6", "DR5"]},


    {"name":"Disintegrate",
     "desc":"The material form of a single, non-magical, <em>distant</em> or closer, creature or object is instantly and permanently destroyed.</p>\
		<p>If a creature is targeted: It may make a <em>physical save</em> to resist disintegration.</p>\
		<p>Examples of objects: The following might be targeted: a tree, a ship, a 1 <em>square</em> section of wall.</p>",
     "level": ["WI6"]},

    {"name":"Invisible Stalker",
     "desc":"An invisible stalker is summoned to the caster’s presence and magically bound to perform a mission of the caster’s choosing.</p><ul>\
<li><strong>Wording:</strong> The caster must be careful with the wording of the mission. Invisible stalkers will follow the letter of the command while twisting the intent.</li>\
<li><strong>Duration:</strong> The creature is bound to attempt the mission until it succeeds or is destroyed.</li>\
<li><strong>Banishing:</strong> The spell Dispel Evil will banish an invisible stalker, ending the spell.</li></u>",
     "level": ["WI6", "WA5"]},


    {"name":"Part Water",
     "desc":"The caster creates a path 10’ wide and a maximum of 120’ long through water, such as a pond, lake, or other body. Lasts six <em>turns</em>. The caster can dismiss the spell’s effect before the duration ends.</p>",
     "level": ["CL5"]},


    {"name":"Projected Image",
     "desc":"An illusory duplicate of the caster appears within range. Lasts for six <em>turns</em>.</p><ul>\
<li><strong>Duplicate:</strong> The image is an exact duplicate of the caster that can only be differentiated by touch.</li>\
<li><strong>Subsequent spells cast:</strong> Appear to originate from the image. (Targets must still be visible to the caster, however.)</li>\
<li><strong>Spells and missiles:</strong> The image appears unaffected by spells or missile weapons.</li>\
<li><strong>Melee or touch:</strong> If the image is touched or hit in melee, it disappears.</li>\
<li><strong>Range:</strong> The image must remain distant or closer to the caster.</li></u>",
     "level": ["WI6"]},


    {"name":"Reincarnation ",
     "desc":"A dead character is returned to life in a new physical form that manifests in the presence of the caster. The character’s new body is not necessarily the same as the original; it is determined by rolling on the Reincarnated Class table. The roll indicates either a character class or a monster:</p>\
		<p>The character is of experience level 1d6 lower than they were in life. There is a 2-in-6 chance they are the same class, a 1-in-6 chance they are a different human class, 2-in-6 they are a different demihuman class, and a 1-in-6 chance they are instead a monster of the same alighnment and number if hit dice.</p>",
     "revName":"Death Spell",
     "revDesc":"Choose a zone within 240’. Up to 4d8 Hit Dice of creatures make a physical save or die, instantly. Undead and creatures with >7 HD are unaffected.",
     "level": ["WI6"]},

    {"name":"Stone to Flesh ",
     "desc":"This spell transforms stone into living flesh. It is especially useful for restoring life to a petrified creature and its equipment to its normal state.",
     "revName":"Flesh to Stone",
     "revDesc":"Turns one creature into a statue, including all gear and any items currently held.",
     "level": ["CL5", "WI6"]},

    {"name":"Empower Armor",
     "desc":"The armor of a touched creature glow purple, casting dim light for 10’. They gain a -2 bonus to AC, and a +2 penalty to AV. </p>\
	<p>If the targets isn’t wearing armor, the spell fails.",
     "revName":"Disempower Armor",
     "revDesc":"Instead, the armor glows red and the target gain a -2 to AV, and a +2 to AC.",
     "level": ["WA1"]},

    {"name":"Shadow Hound",
     "desc":"A dog made of black smoke appears before the caster. It obeys all spoken orders with absolute obedience until it is destroyed.</p>\
		<p>The dog dissappers when <em>fatigued</em>.",
     "level": ["WA1"]},

    {"name":"False Debis",
     "desc":"1 object upto 3' in any dimension, or up to 300 coins appear to be worthless debris for the duration. This illusion is solid to the touch, but will be revealed as an illusion by Detect Magic.</p><p>The spell lasts for three <em>turns</em> while the caster concentrates.",
     "revName":"False Gold",
     "revDesc":"The caster, or a chosen creature, has 3d6x10 sp appear on their person. The coins appear real on inspection, but will be revealed as an illusion by Detect Magic. </p><p>The spell lasts for three <em>turns</em> while the caster concentrates. Then the coins <em>turn</em> to dust.",
     "level": ["WA2"]},
/*
Druid
st Level
1 	Animal Friendship
3 	Entangle
4 	Locate Plant or Animal
5 	Predict Weather
2nd Level
1 	Barkskin
4 	Heat Metal
6 	Obscuring Mist / Clear Mist
7 	Protection from Poison
8 	Speak with Plants
3rd Level
d8 	Spell
6 	Tree Shape
8 	Warp Wood
4th Level
d6 	Spell
4 	Protection from Fire and Lightning
6 	Summon Animals
5th Level
d6 	Spell
4 	Speak with Stones
     */
    {"name":"Foo",
     "desc":"Bar",
     "revName":"Zig",
     "revDesc":"Zag",
     "level": ["Test"]},

    {"name":"Null",
     "desc":"" ,
     "level": ["Test"]}
]
