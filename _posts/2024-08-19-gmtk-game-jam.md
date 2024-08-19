---
layout: post
title:  "Game Maker's Toolkit Game Jam August 2024"
# excerpt: "A test of the blog."
date: 2024-08-19 11:07:50 +0100
categories: game-jam
author: Dominic Davis-Foster

image: assets/images/gmtk-game-jam-2024-images/key-art-800x600.png
image_alt: Size Matters Screenshot
image_caption: Screenshot of my game jam entry "Size Matters"
---

## Introduction

Two game jams in two months. Following [last month's Pirate Software Game Jam](/game-jam/pirate-software-game-jam/)
I decided to enter this month's [Game Maker's Toolkit Game Jam](https://itch.io/jam/gmtk-2024) too.
The theme was "Built to Scale". "It's up to you how you interpret the theme. While the idea is to make games about size, scale, and dimensions, you could make a game about weighing scales, scaling a building, fish scales, musical scales, or whatever!"

I'd already seen the [fox pixel art by Elthen on itch.io](https://elthen.itch.io/2d-pixel-art-fox-sprites) and wanted to make a game with it in the future.
I settled on the idea of having animals of different sizes (the fox, a squirrel and a bear), each with unique attributes.
The squirrel can climb trees but can't jump as high. The bear became a deer, which can jump very high to cross fences.

## Development

"Size Matters" was developed in Godot 4 . I've been using Godot for about 2 months now.

I decided to use the new Godot 4.3 release, which came out just before the jam.
However, I've found it much less stable than 4.2, with frequent segmentation faults.
Hopefully things improve in a patch.
A key change to the engine is the addition of TileMapLayer nodes to replace the old TileMap.
I wanted to try this out as I may migrate my other game over.
I'm not yet convinced there's great improvement over TileMap.

I started by following the [2D Platformer Quick Start Guide](https://www.youtube.com/watch?v=43c-Sm5GMbc) tutorial
by [Chris' Tutorials](https://www.youtube.com/@ChrisTutorialsYT) on YouTube.
That uses the [Pixel Art Asset Pack](https://anokolisa.itch.io/sidescroller-pixelart-sprites-asset-pack-forest-16x16)
by [Anokolisa](https://anokolisa.itch.io/) on itch.io.


## Finished Game

You can play the finished game over at [itch.io](https://potbanksoftware.itch.io/size-matters).


<iframe frameborder="0" src="https://itch.io/embed/2907555" width="552" height="167"><a href="https://potbanksoftware.itch.io/size-matters">Size Matters by potbanksoftware</a></iframe>
