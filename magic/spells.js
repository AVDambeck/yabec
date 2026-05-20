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
     "level": ["Bap"]},

    {"name":"Cure Wounds",
     "desc":"A touched creature heals 1d6+1.",
     "level": ["CL1"]},

    {"name":"Detect Magic",
     "desc":"Enchanted objects, areas, and creatures glow while in the same zone as the caster. If they spend one turn studying a magic object, they learn general details about one of it's affects.</p><p> Lasts until fatigued.",
     "level": ["CL1"]},

    {"name":"Light",
     "desc":"This spell has three uses:</p><ol>\
<li><strong>Conjuring Light:</strong> A object begins to glow.</li>\
<li><strong>Blinding:</strong> A creature becomes blind.</li>\
<li><strong>Cancel Darkness:</strong> cancel a darkness spell.</li>\
</ol><p>Lasts until fatigued.",
     "revName":"Darkness",
     "revDesc":"Fills one zone with magical darkness, preventing both normal sight and infravision. Like light, it can alternitively be used to blind a creature or dispell a light.",
     "level": ["CL1"]},

    {"name":"Protection from Chaos",
     "desc":"Wards the caster or a touched creature from chaotic creatures and magic. Grants -1 to saves and dodges.",
     "revName":"Protection from Law",
     "revDesc":"Provides the same ward against law.",
     "level": ["CL1"]},


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
     "desc":"The cast divines a small amount of knowlage. The caster names or describe a person, place, or object. Three statments come to their mind, 1-2 of which are true.",
     "level": ["CL2"]},

    {"name":"Speak with Animals",
     "desc":"The caster gains the ability to speak with animals. This doesn't make the animals any more friendly or cooperative than normal.</p>\
<p>Lasts until fatigued.",
     "level": ["CL2"]},

    {"name":"Continual Light",
     "desc":"Has the same three effects as light, but the light is day light, can be used to cancel continual darkness, and the spell lasts until dispelled. ",
     "revName":"Continual Darkness",
     "revDesc":"Same as continual light, but creates a sphere of magical darkness, preventing both normal sight and infravision.",
     "level": ["CL3"]},

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
     "level": ["CL3"]},

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
     "desc":"A corpse is restored to live. They must not have been dead for no longer than four days per level of the caster above 7th. The ritual takes 3 turns, and requires 5000 cp of insense and other supplies.</p>
<p>Alternetivly, the spell instantly destroys a single undead monster.</p>",
     "revName":"Finger of Death",
     "revDesc":"Directs a ray of deadly magic at a single target. If the target fails a physical saving throw, it dies instantly.",
     "level": ["CL5"]},

  {"name":"Null",
     "desc":"" ,
     "level": [""]}
]

function spellDesc(spell) {
    let text = "<h3>" + spell.name + "</h3>" + "<p>" + spell.desc + "</p>";
    if (typeof spell.revName !== 'undefined') {
        text += "<h4>" + spell.revName + "</h4>" + "<p>" + spell.revDesc + "</p>";
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
    //    let list = sortSpellAlpha(spells);
    let list = getLevelList("CL1");
    let len = list.length;

    let text = "";
    for (let i = 0; i < len; i++) {
        text += spellDesc(list[i]);
    }
    document.getElementById("spellListAll").innerHTML = text;
}
