/*
  Spell:
  name: Spell name
  desc: Effect of spells
  level: array of class and level codes. Capital first two letters plus level. i.e cure woulds is CL1, DR2.
  revName: reversed spell name. optional.
  revDesc: revesed description. optional.
 */

let spells = [
    {"name":"Fire Ball",
     "desc":"Boom!!" ,
     "level": ["CL3"]},

    {"name":"Cure Wounds",
     "desc":"So cure, so heal.",
     "level": ["CL1"],
     "revName":"Cause Wounds",
     "revDesc":"die die die"},

    {"name":"Light",
     "desc":"Wow i can seeeeee" ,
     "level": ["CL1"]},

    {"name":"Abracadabra",
     "desc":"939393939393" ,
     "level": ["CL1"]}
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
    let list = getLevelList("CL1");
    let len = list.length;

    let text = "";
    for (let i = 0; i < len; i++) {
        text += spellDesc(list[i]);
    }
    document.getElementById("spellListAll").innerHTML = text;
}
