# Yabec
yet another basic/expert clone

Yabec started as a way to codify the Old School Rennessance mix I was running at my table. It now is an open source project for others to work from.

# Changes
This seciont is directed at players of my game. 

Changes fall into four broad catagories:

1. Making the game simpler and easier to run, play, and write.
2. Giving playes more agency.
3. Making the early game more forgiving and transperent. 
4. Correcting mistakes (e.g. dismemberment getting worse with higher con)

These are the most significant changes.

- The formatting is all different. This makes it easier for me to manage on the back end. +simple
- phases (e.g. town, delving) are now player controlled, and there can be more than one per session. +player agency.
- travel is calculated by one person (like you already have been doing) +simple
- Items are in a single list. (advanced items will return at specific in-world shops in the future) +simple
- Hazards are now described in the player-facing rules. +transparent
- Movement is now tracked in zones (i.e a room or hallway) instead of steps or squares. +simple
- Chases are now encorperated into conflict, instead of being submodules. +simple
- max HP at first level. +forgiving
- tweaks to classes. Mostly good things, like getting abilities sooner or more often. +simple +forgiving
- simplified stealth. +simple
- fixed dismemberment. +mistake
- Tweaks to various downtime. +mistake +forgiving +simple
- Disolved weeks. +simple.
- Variety of player roles, with group XP bonuses
=

# Direction
Yabec is under construction! The rules section is mostly finished. 

A lot of effor has been put into develoing a new workflow with markdown and weasyprint. This solution is dynamic and enables me to include a greater variety of functions. See (markuary book)[https://github.com/AVDambeck/markury-book]

Game data is stored either directly in markdown, or markdown is genorated via python. Then that markdown is converted to html, mixed with css, and rendered into a pdf for printing. 

There are three intended distribution points:
1. Raw markdown: intended for nerds who want to fork yabec.
2. Print, via pdf: to be used at game tables.
3. Hypertext: for web.

# Features
what kind of system is yabec? what can you expect?

- 4 basic classes, plus lots of extras
- Apocolypse style player sheets (coming soon)
- b/x math
- hazard die
- relative distances and zones
- mapping guides
- player roles
- object oriented hooks for bite sized rules
- dynamically linked item and spell info (coming soon)

# Printing
Yabec is designed to exist at a physical game table in a bunch of little notebooks. Under the distribution dir, there are print files for each of these booklets.
 
