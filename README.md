# react-renai
React-renai is a javascript library and game engine for React. It provides react components that can be wired together to build web-based visual novels.

# Quickstart

in the project directory:

```
npm install react-renai
```

in the component you wish to use it:

```
import { components you wish to use } from 'react-renai'
```

# Component API

## GameWindow

Handles game routing and provides game state to the child components.

```
<GameWindow>
  <CustomMenuComponent componentKey="customMenu" index>
  <CustomOptionsComponent componentKey="options">
  <Scene1 componentKey="scene1">
  <Scene2 componentKey="scene2">
</GameWindow>
```

This component only renders 1 of its children at a time depending on the state of the application.

Define the entrypoint of the game by setting the `index` property on whichever child component you would like the game to render on startup. Typically this will be some kind of menu component.

## Scene

Takes a script and renders the scene with all the game assets including character sprites, dialogue text, answer options, and more.


```
import tutorialSceneScript from tutorialScene.js

<Scene script={tutorialSceneScript} />
```
Scripts take the form of a json array where each index is one frame of the scene:

```
# tutorialScene.js
import Manami from "./characters/Manami.jsx"

const tutorialSceneScript = [
  {
    characters: <Manami />,
    text: "This is page 1 of the script"
  }
]
```
Each page of the script accepts the following attributes:
| attribute | type | description |
| --- | --- | --- |
| background | A Background component or a list of Background components. | Renders the specified background on this frame. Backgrounds will persist from the frame they are specified until the background is updated or the scene ends. Lists of backgrounds are stacked with the first background being on the bottom and the last background being on the top, and all backgrounds will be rendered underneath the rest of the scene assets. |
| characters | A Character component or a list of Character components. | Character sprites to render. The character container is a flexbox and lists of characters will be spaced evenly across the screen in left to right order by default. See Character component documentation for details on custom positioning. |
| text | String | Text to be displayed in the textbox. |
| reply | Object | Specifies opportunities for user input. |
| reply.type | String | Can be either "input" or "select". Input renders a text input. Select renders a list of buttons. |
| reply.variable | String | Specifies the variable where the user's answer should be stored in the game state. |
| reply.choices | List | A list of reply choices, only used when `reply.type` is "select". List must contain objects for each option in the form `{name, value}` where name is what will be displayed on the button and value is what will be stored in the game state. |

You can include variables in your scripts by connecting your script to the game state:

<!-- TODO: rethink how scripts get connected to game state lol -->

<!--```
import React, { useState, useContext } from "react";
import GameStateContext from "./components/gameStateContext";
import Manami from "./characters/Manami.jsx"

const { playerName, isHappy } = useContext(GameStateContext);

const gameStateSceneScript = [
  ...
  {
    ...isHappy ? {
        characters: <Manami emotion="happy" />,
        text: `Hi ${playerName}, I heard you like cake!`
      } : {
        characters: <Manami emotion="sad" />,
        text: 'You mean you don't like cake at all!?'
      }
  }
  ...
]
```-->

## Background
Represents a background that can be used in a Scene.

| prop | type | description |
| --- | --- | --- |
| color | string | Accepts a named color or HEX string. Generates a solid colored background asset. |
| url | string | Accepts the url to an image asset. Generates an image background. By default the background will tile infinitely.
| contain | boolean | Specifies that the background should be contained inside the game window. `contain` backgrounds are centered and will not repeat on either axis. They scale up or down to fully fit within the boundaries of the window.
| cover | boolean | Specifies that the background should cover the game window. `cover` backgrounds are centered and will not repeat on either axis. They scale up or down to fully cover the game window. |

A good convention to follow is to define custom Background components for each background in your game so that your backgrounds are easily reusable across your scripts:

```
const SchoolBackground = (props) => (<Background url="school-background.jpg" contain />)
```

## Character
Represents a character sprite that can be used in a Scene.

| prop | type | description |
| --- | --- | --- |
| emotions | list of objects | |

A good convention to follow is to define custom Character components for each character in your game so that they are easily reusable across your scripts:

```
const Manami = (props) => {
  const emotions = [
    {
      emotion: neutral,
      sprite: <img src="manami-neutral.jpg" />
    },
    {
      emotion: angy,
      sprite: <img src="manami-angy.jpg" />
    }
  ]
  return <Character emotions={emotions} {...props} />
}
```

To use the component, import it and specify the emotion to display in props:
```
<Manami emotion="angy" />
```

<!--### Custom character positioning and styling
Because character sprites are react components, custom CSS can be freely applied to the character component.
```
<Manami emotion="neutral" className="peek">
```-->
<!-- TODO: do something more interesting with this example -->
<!-- maybe even with keyframe animations :o -->
<!-- ```
.peek {
  position: absolute;
  left: 0;
}
``` -->