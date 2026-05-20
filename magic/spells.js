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
