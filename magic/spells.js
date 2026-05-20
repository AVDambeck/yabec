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

    {"name":"Cure Wmounds",
     "desc":"A touched creature heals 1d6+1.",
     "level": ["CL1"]},

    {"name":"Detect Magic",
     "desc":"Enchanted objects, areas, and creatures glow while in the same zone as the caster. If they spend one turn studying a magic object, they learn general details about one of it's affects.</p><p> Lasts until fatigued.",
     "level": ["CL1", "WI1"]},

    {"name":"Light",
     "desc":"This spell has three uses:</p><ol>\
<li><strong>Conjuring Light:</strong> A object begins to glow.</li>\
<li><strong>Blinding:</strong> A creature becomes blind.</li>\
<li><strong>Cancel Darkness:</strong> cancel a darkness spell.</li>\
</ol><p>Lasts until fatigued.",
     "revName":"Darkness",
     "revDesc":"Fills one zone with magical darkness, preventing both normal sight and infravision. Like light, it can alternitively be used to blind a creature or dispell a light.",
     "level": ["CL1", "WI1"]},

    {"name":"Protection from Chaos",
     "desc":"Wards the caster or a touched creature from chaotic creatures and magic. Grants -1 to saves and dodges.",
     "revName":"Protection from Law",
     "revDesc":"Provides the same ward against law.",
     "level": ["CL1", "WI1"]},


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
     "level": ["CL2"]},

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
     "level": ["CL2"]},

    {"name":"silence",
     "desc":"A zone is magicall silenced. Converation and spell casting are impossible. Noise from outside the area can be heard by those within it.</p>\
<p>Lasts until fatigued twice.",
     "level": ["CL2"]},

    {"name":"Augury",
     "desc":"The cast divines a small amount of knowlage. The caster names or describe a person, place, or object. Three statments come to their mind, 1-2 of which are true.</p><p>If cast on a magic item with a command word, and the caster fails to speak the command word, augury instead reveals a number of random letters from the command word equal to the caster's level.",
     "level": ["CL2", "WI2"]},

    {"name":"Speak with Animals",
     "desc":"The caster gains the ability to speak with animals. This doesn't make the animals any more friendly or cooperative than normal.</p>\
<p>Lasts until fatigued.",
     "level": ["CL2"]},

    {"name":"Continual Light",
     "desc":"Has the same three effects as light, but the light is day light, can be used to cancel continual darkness, and the spell lasts until dispelled. ",
     "revName":"Continual Darkness",
     "revDesc":"Same as continual light, but creates a sphere of magical darkness, preventing both normal sight and infravision.",
     "level": ["CL3", "WI1"]},

    {"name":"Cure Disease",
     "desc":"Cure a touched subject of any disease, inluding those of magical origin. If the subject is a green slime, it is instead killed instantly.",
     "revName":"Cause Disease",
     "revDesc":"Inflict a terrible, withering disease on a victem. The disease has the following effects:",
     "level": ["CL3"]},

    {"name":"Growth",
     "desc":"The effects of this spell depend on alignment:</p><ul>\
<li><strong>Lawful:</strong> One non-magical animal is doulbed in strenght and size. Damage from its attackes are doubled, and it has twice as many slots. Lasts until fatigued twice.</li>\
<li><strong>Neutral:</strong> Any vegitation in one zone becomes fantastically overgrown, forming a thorny jungle. If cast outside, instead affect an area of upto 3,000 square feet chosen by the caster. Only very large creatures can force their way through. Clearing the area becomes an ordeal.</li>\
<li><strong>Chaotic:</strong> The caster doubles in size and strength, as above. Last until fatigued twice.</ul>",
     "level": ["CL3"]},

    {"name":"Locate Object",
     "desc":"The caster magically locates an object. The spell has two modes:</p><ul>\
<li><strong>General:</strong> The nearest object of that type is located, e.g. a stairway, an altar.<li>\
<li><strong>Specific:</strong> The caster must clearly visualize in all aspoects. e.g. my spell book.</li></ul>\
<p>The caster can sense the direction (but not distance) of an object, so long as it is within a qaurter mild. Lasts uintil fatigued.",
     "level": ["CL3", "WI1"]},

    {"name":"Remove Curse",
     "desc":"Instantly remove one harmful magical effect from a touched creature.",
     "revName":"Curse",
     "revDesc":"Places a deleterious effect on a touched creature or object. The effects of the curse are determined by the caster. Maximum possible effects include:</p><ul>\
<li>+2 penalty to saves.</li>\
<li>+4 penalty to AC and AV.</li>\
<li>Reducing an ability score by 50%</li>\
<li>Unablle to put down or unequip the item.</li></ul>",
     "level": ["CL3"]},

    {"name":"Striking",
     "desc":"One weapon is enchanted to deal an additional 1d6 damage, and becomes a magical weapon. Lasts until fatigued.",
     "level": ["CL3"]},

    {"name":"Create Water",
     "desc":"The caster touches a large stone surface, such as a wall or boulder. A magical font appears from that spot. It produces approximeately 50 gallons of water.<p>\
<p><strong>Higher level casters:</strong> If the caster is 9th level or higher, an additional 50 gallons is created for each level above 8th.",
     "revName":"Destroy Water",
     "revDesc":"The spell instead creates a magical drain, which destroys 50 gallons (or more) of water. It remains for one day or until it destroys the maximum amount of water. Creatures made of water, such as elentals take 1d8 damage per gallon drained.",
     "level": ["CL4"]},

    {"name":"Cure Greater Wounds",
     "desc":"A touched creature heals 2d6+2",
     "level": ["CL4"]},

    {"name":"Hold Monster",
     "desc":"A creature is paralized and incapacitated. Lasts 2 turns per level.</p>\
<p><strong>Restriction:</strong> the target must not be undead.",
     "revName":"Free Person",
     "revDesc":"A creature is instantly freed from mundane restraints, and may make an additional saving throw against magical restraints.",
     "level": ["CL4"]},


    {"name":"Neutralize Poison",
     "desc":"The spell removes poison from a touched item, or neutralizes the effect of poison in a touched creature. A creature killed by poison can be revieved within 1 turn.",
     "revName":"Cause Poison",
     "revDesc":"A touched creature becomes poisoned unless they succeed a physical saving throw. Each turn, they take 1d8 damage until they die or are cured.</p><p>Can instead be cast on a object. When the object is consumed or breaks skin, the victem must save or be poisoned in the same way. Lasts until a shift.",
     "level": ["CL4"]},

    {"name":"Protection from Chaos 10' radius",
     "desc":"Wards the caster and all creatures with in a 10' radius from chaotic creatures and magic. Grants -1 to saves and dodges.",
     "revName":"Protection from Law 10' radius",
     "revDesc":"Provides the same ward against law.",
     "level": ["CL4"]},

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
     "level": ["CL5"]},

    {"name":"Commune",
     "desc":"The caster enters into direct communication with divine powers. The communion lasts three turns, where the caster must be fully concentrating.</p>\
<p>The caster may ask three questions per casting. Once per year, they may instead ask six. Each question receives a simple yes or no answer.</p>\
<p>Commune can only be cast once per month.",
     "level": ["CL5"]},

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
     "level": ["CL5"]},

    {"name":"Locate Monster",
     "desc":"The caster magically locates a creature, including magical creatures. The spell has two modes:</p><ul>\
<li><strong>General:</strong> The nearest creature of that type is located, e.g. a unicorn, an elf.<li>\
<li><strong>Specific:</strong> The caster must clearly visualize in all aspoects. e.g. Enelye the Nenyar of Cuivienen.</li></ul>\
<p>The caster can sense the direction (but not distance) of a creature, so long as it is within a qaurter mild. Lasts uintil fatigued.",
     "level": ["CL3"]},

    {"name":"Raise Dead",
     "desc":"A corpse is restored to live. They must not have been dead for no longer than four days per level of the caster above 7th. The ritual takes 3 turns, and requires 5000 cp of insense and other supplies.</p>\
<p>Alternetivly, the spell instantly destroys a single undead monster.</p>",
     "revName":"Finger of Death",
     "revDesc":"Directs a ray of deadly magic at a single target. If the target fails a physical saving throw, it dies instantly.",
     "level": ["CL5"]},

    {"name":"Charm Person",
     "desc":"A person is charmed, as follows:</p><ul>\
<li><strong>Friendship:</strong> The subject regards the caster as its trusted friend and ally.</li>\
<li><strong>Commands:</strong> The caster may give the charmed creature commands, which it will obey, if it understands, if it is not obviously self destructive, and if it does not conflict with their alignment or religion.</li></ul>\
<p><strong>Restrictions:</strong> Undead, and creatures of 4 HD and greater are not affected.</p>\
<p><strong>Duration:</strong> The charm lasts indefinetly, or until the caster or an ally attacks the subject. Additionally, the subject makes new magic saves at intervals depending on it's intelligence:</p><ul>\
<li>≤8: New save each month.</li>\
<li>9–12: New save each week.</li>\
<li>13–17: New save each day.</li>\
<li>18: New save each hour.</li></ul>",
     "level": ["WI1"]},

    {"name":"Floating Disc",
     "desc":"The caster conjures a slightly concave, circular disc of magical force. It appears next to the caster. The disc folows them about and carries loads. The disc is 3' in diameter and 1\" deep at its center. It can hold a maximum of 50 slots, 5,000 coins, or 500 pounds.</p>\
<p>The disc floats at wasit height and remains level, floating along horizontally. The disc winks out after 6 turns; Anything in it is dropped.",
     "level": ["WI1"]},

    {"name":"Hold Portal",
     "desc":"A door, window, or other kind of portal is magically held shut. Lasts for two shifts.</p><p><strong>Opening by magic:</strong> A knock spell opens the portal.</p><p><strong>Opening by force:</strong> Creatures with at least 3 HD more than the caster’s level can open the held portal with one round of effort.",
     "level": ["WI1"]},

    {"name":"Magic Missile",
     "desc":"This spell conjures a glowing dart of energy shoots at a target of the caster’s choice. The missile hits unerringly (no attack roll), and can hit a distant target. The missile inflicts 1d6+1 damage.</p><p><strong>Higher level casters:</strong> May conjure more missiles. They may be directed at a the same or different targets.",
     "level": ["WI1"]},

    {"name":"Read Languages",
     "desc":"The caster may understand any written language, including muncane codes, maps, and othjer written instructions. This spell does not grant any ability to speak nor listen to unknown languages.</p><p>Lasts until fatigued.",
     "revName":"Remove Langages",
     "revDesc":"Cause one subject to loos the ability to speak or understand langauge. Lasts until fatigued.",
     "level": ["WI1"]},

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
     "level": ["WI1"]},

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
     "level": ["WI2"]},

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
Light sources: made invisible (either as part of a creature’s gear or as an individual object), the light it casts is unaffected.",
     "level": ["Test"]},

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


    {"name":"Foo",
     "desc":"Bar",
     "revName":"Zig",
     "revDesc":"Zag",
     "level": ["Test"]},

  {"name":"Null",
     "desc":"" ,
     "level": ["Test"]}
]

function spellDesc(spell) {
    if (spell.level == "Test") {
        return "";
    }
    let text = "<h3>" + spell.name + "</h3>" + "<p>" + spell.desc + "</p>";
    if (typeof spell.revName !== 'undefined') {
        text += "<h4>Reversed: " + spell.revName + "</h4>" + "<p>" + spell.revDesc + "</p>";
    }
    return text;
}

function sortSpellAlpha(list) {
    return list.sort((a, b) => a.name.localeCompare(b.name));
}

function getLevelList(code) {
    let list = spells.filter(spell => Array.isArray(spell.level) && spell.level.includes(code));
    return sortSpellAlpha(list);
}

function spellListAll() {
    //let list = sortSpellAlpha(spells);
    let list = getLevelList("WI2");
    let len = list.length;

    let text = "";
    for (let i = 0; i < len; i++) {
        text += spellDesc(list[i]);
    }
    document.getElementById("spellListAll").innerHTML = text;
}
