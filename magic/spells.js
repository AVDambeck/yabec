/*
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
     "level": ["Bap"]},

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
Resist Fire / Resist Cold

    {"name":"Protection from Fire",
     "desc":"All creatures in the same zone as the caster are warded against fire:</p><ul>\
<li><strong>Normal Heat:</strong> unharmed by mundane heat or fire.</li>\
<li><strong>Save bonus:</strong> -2 bonus to saves versus fire based magic and breath attacks.</li>\
<li><strong>Fire-based damage:</strong> is reduced by 1 per die rolled.</li>\
<p>Lasts until fatigued.",
     "revName":"Protection from Cold",
     "revDesc":"Protects from cold and ice instead of heat and fire.",
     "level": ["CL2"]},


Silence / Noise

    {"name":"Foo",
     "desc":"Bar",
     "revName":"Zig",
     "revDesc":"Zag",
     "level": ["Bap"]},



Snake Charm

    {"name":"Foo",
     "desc":"Bar",
     "level": ["Bap"]},


Speak with Animals

    {"name":"Foo",
     "desc":"Bar",
     "level": ["Bap"]},



  {"name":"Null",
     "desc":"" ,
     "level": [""]}
]

function spellDesc(spell) {
    let text = "<h2>" + spell.name + "</h2>" + "<p>" + spell.desc + "</p>";
    if (typeof spell.revName !== 'undefined') {
        text += "<h3>" + spell.revName + "</h3>" + "<p>" + spell.desc + "</p>";
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
    let list = getLevelList("CL2");
    let len = list.length;

    let text = "";
    for (let i = 0; i < len; i++) {
        text += spellDesc(list[i]);
    }
    document.getElementById("spellListAll").innerHTML = text;
}
