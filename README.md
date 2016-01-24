# CS:GO Gamestate Example

This is an example created for examining the [CS:GO Gamestate Integration](https://developer.valvesoftware.com/wiki/Counter-Strike:_Global_Offensive_Game_State_Integration) that Valve added in early December 2015.

## Setup

Copy `cfg/gamestate_integration_sample.cfg` to your CS:GO config directory. For example, mine is at `C:\Program Files (x86)\Steam\steamapps\common\Counter-Strike Global Offensive\csgo\cfg`. The file name must start with `gamestate_integration`. The example config provided subscribes to all possible gamestate events, so it's a lot of data coming through.

Once that's in place, set up the app:

* `npm install`
* `node index`

## Usage

Just fire up CS:GO and start playing. All events will be streamed into `sample-data/sample.json`. The example in the repository encompasses me launching the game and playing three rounds with bots.