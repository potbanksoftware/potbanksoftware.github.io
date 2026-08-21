---
layout: post
title:  "My Favourite Games from the GMTK Game Jam July 2026"
date: 2026-08-21 13:43:00 +0100
# last_updated:
categories: game-jam
tags: game game-jam itch gmtk
author: domdfcoding
featured: true
toc:
  beginning: true
table: true

description: "Blog post discussing my favourite games from the 2026 GMTK Game Jam"
thumbnail: assets/img/favourite-games-gmtk-2026-images/top-image.png
og_image:
  image: /assets/img/favourite-games-gmtk-2026-images/top-image.png
---

{% include captioned_figure.liquid
  path="assets/img/favourite-games-gmtk-2026-images/top-image.png"
  alt="Images of some of my favourite games from the GMTK Game Jam 2026"
  caption='Some of my favourite games from the GMTK Game Jam 2026'
%}


<link rel="stylesheet" href="{{ '/assets/css/fav_games_table.css' | relative_url | bust_css_cache }}">

<style>


table.fav-games-table {
  min-height: 680px;

  .cat-col {
    max-width: 45px;
  }

  .rank-col {
    max-width: 75px;
  }

  .name-col {
    max-width: 315px;
  }
}
</style>

After the [GMTK Game Jam 2026](https://itch.io/jam/gmtk-jam-2026/entries) I played and rated 50 games, and tried several more games but couldn't get them to launch. I filtered those down to 19 favourites, and here are my top 6.

<h2 class="invisible">Top Six</h2>

<h3 class="invisible">Outbreak</h3>
<hr>
<iframe frameborder="0" width="552" height="167" src="https://itch.io/embed/4825168"><a href="https://bouncepad-studios.itch.io/outbreak">OUTBREAK by Bouncepad Studios</a></iframe>

In OUTBREAK you play as a virus, jumping from host to host in an attempt to escape. Gameplay appears simple but takes time to master, and as you play (success or fail) you can mutate the virus through upgrades allowing hosts to survive longer or the virus jump longer distances.

The game automatically saves your progress, so you can keep returning and play short sessions.


<h3 class="invisible">Resonance</h3>
<hr>
<iframe frameborder="0" height="167" width="552" src="https://itch.io/embed/4818035"><a href="https://robin-pino.itch.io/resonance">Resonance by Robin Pino, VonLeipenstein</a></iframe>

Resonance is a small puzzle game where doors, spike traps, etc. are all on their own countdown clock. The challenge is putting the right timer onto the right object so the player can move through the map successfully.

The puzzles are challenging but impossible. I'm sure this could be expanded into a larger game, and its simple controls mean it'd work well on phones. A web build would be nice too.

My only suggestion, applicable to games like this in general, is that the clocks should stay on the objects they were placed on if you fail or reset the level. This lets the player remember the combination they just did, especially on the more complex levels where some clocks were inevitably in the right places that attempt.

<h3 class="invisible">Twelve</h3>
<hr>
<iframe height="167" frameborder="0" width="552" src="https://itch.io/embed/4820037"><a href="https://hanbaichuan.itch.io/twelve">Twelve by HanBaichuan</a></iframe>

Twelve is a [Vampire Survivors](https://poncle.itch.io/vampire-survivors)-like game, but the player has control of when attacks happen by placing weapons on a clock. The gameplay takes place within the clock face, with enemies and some attacks coming from the edges of the clock.

The visuals are great and the gameplay is well polished, although it could do with a spellcheck.

I think the idea of using a clock face to determine when attacks happen is a mechanic that would work well in other games.


<h3 class="invisible">Pawn Crusade</h3>
<hr>
<iframe frameborder="0" width="552" height="167" src="https://itch.io/embed/4824942"><a href="https://galhiois.itch.io/pawn-crusade">Pawn Crusade: Vengeance for a fallen King by Galhiois</a></iframe>

Pawn Crusade is set after a game of chess has finished, as a lone pawn attempts to capture the enemy king and avenge his fallen ruler. Similar to [Winning Move](https://www.thetimes.com/puzzles/board-and-card-games) newspaper puzzles or the
[path puzzles in Watch Dogs](https://www.youtube.com/watch?v=rJ_HE3FwvEw),
Pawn Crusade is single-player and requires finding the right path between chess pieces, within the allowed number of moves.

The game has 20 levels of increasing difficulty, although the web version  doesn't seem to solve your progress if you reload the page.


<h3 class="invisible">Ten Fingers</h3>
<hr>
<iframe frameborder="0" height="167" width="552" src="https://itch.io/embed/4827856"><a href="https://nascidev.itch.io/ten-fingers">Ten Fingers by Nasci, HienaDev, PipoDev, PSequeirosDev, Danender</a></iframe>

Ten Fingers is a fast paced, survivors-like, game in which you play as a pair of disembodied hands. Using magical rings to cast spells and fight off other hands, you're rewarded with new rings each round which unlock new attacks and abilities.
Combinations of rings and their positions can give extra benefits, but you can only have one ring per finger, and getting caught takes away a finger and any rings on it!


<h3 class="invisible">Cardbox Puzzle</h3>
<hr>
<iframe frameborder="0" width="552" height="167" src="https://itch.io/embed/4829548"><a href="https://pouny.itch.io/cardbox-puzzle">Cardbox Puzzle by pouny</a></iframe>

Cardbox Puzzle is a short but sweet box-pushing puzzle game. Pushing dice-like boxes reduces their number, which must be matched to pressure plates to open doors.
Later levels add boxes in different colours, and modifiers that add or remove from the box's number when pushed over.

It needs some polish but it's fun and I'm sure could be expanded further.
My only change would be to have the player character move on the grid too, rather than freely as they can now, since the boxes are fixed to the grid.

<hr>

## Complete List
The complete list of my favourite games is shown below. You can view the [collection of them on itch.io](https://itch.io/c/7877468/gmtk-2026-favourites).

<!-- <iframe src="https://itch.io/embed-collection/7877468?border_radius=5&fg_color=ffffff&bg_color=000000&link_color=7777aa" width="800" height="800" frameborder="0"></iframe> -->

<table
  class="fav-games-table"
  id="table"
  data-toggle="table"
  data-sort-class="table-active"
  data-sortable="true"
  data-height="680"
  data-url="/assets/json/gmtk_fav_games_2026.json"
>
  <thead>
    <tr>
      <th data-field="name" data-sortable="true" data-width=315 data-formatter="NameURLFormatter" data-class="name-col">Name</th>
      <th data-field="engine" data-sortable="true" data-class="engine-col">Engine</th>
      <th data-field="url" data-sortable="true" data-visible="false">url</th>
    </tr>
  </thead>
</table>

<br>


### Statistics

#### Engines

18 games were playable in a web browser, with just one only available for Windows, Linux and Mac.

* Unity -- 7
  * Web -- 7
  * Desktop -- 2
* Godot -- 8
  * Web -- 7
  * Desktop -- 4
* GameMaker (Web) -- 2
* Phaser (Web) -- 1
* Raylib (Web) -- 1

#### Themes

Many games settled on the same basic interpretation of "Count Down". Twelve games had a clock or similar, either [until the end of the round](https://nascidev.itch.io/ten-fingers) or [until you pull the trigger](https://lopen.itch.io/count-me-dead).
Four games instead had something else decreasing, such as [a number of moves](https://yanjigames.itch.io/gridbound) or [your mana](https://b-28282.itch.io/short-on-mana).

Surprisingly, only [one](https://flymedusa.itch.io/nightbitten) of these games featured a Vampire Count or similar.

<script>
var bootstrap_table = document.querySelector(".fav-games-table");
</script>

<script src="{{ '/assets/js/jam_name_url_formatter.js' | relative_url }}"></script>
