import React, {useContext} from 'react'

import { SaveGameMenu, LoadGameMenu, Background, Text, Character, Scene, MenuBar, MenuButton, GameStateContext, Menu, GameWindow, DialogueHistory,  } from 'react-renai'
import 'react-renai/dist/index.css'

import Mary from './characters/Mary'
import Classroom from './backgrounds/Classroom'
import sampleScript from './scripts/newGame'
import chapter1Script from './scripts/chapter1'
import Yamashita from './characters/Takeshi'
import Kimura from './characters/Kimura'
import Sue from './characters/Sue'
import Robert from './characters/Robert'

const ParkBackground = (props) => {
  return (
    <Background
      url="https://1.bp.blogspot.com/-ulgWMPg2zAg/WoAjyPSLOuI/AAAAAAAADzg/mu4B0wG7LhoP5UcUUA9qGvt4fZrgoFJFgCLcBGAs/s640/BG19_01.jpg"
      contain
    />
  );
};

const SchoolBackground1 = () => {
  return (
    <Background
      url="https://lemmasoft.renai.us/forums/download/file.php?id=15615&mode=view"
      contain
    />
  );
};

const BlackBackground = (props) => {
  return <Background color="black" />;
};

const LLSIFText = (props) => {
  return (
    <Text
      backgroundUrl={''}
      style={{
        backgroundSize: "cover",
        backgroundPosition: "bottom center",
        height: "60px",
        background: 'rgba(255,165,0,0.75)',
        // border: '5px solid orange',
      }}
      nextButtonUrl={'images/nextarrow.png'}
      {...props}
    >
      {props.children}
    </Text>
  );
};

const Shelby = (props) => {
  const neutral = {
    emotion: "neutral",
    sprite: (
      <img
        // src="https://cdn.dribbble.com/users/3862938/screenshots/13114438/media/c260ae2c9fbb7668aef2626c1e72ccca.png"
        src="images/Mary.png"
        style={{ width: "160px", objectFit: "cover" }}
        alt="neutral shelby"
      />
    ),
  };
  const happy = {
    emotion: "happy",
    sprite: (
      <img
        src="https://cdn.dribbble.com/users/3862938/screenshots/13057029/samantha_blushing.png"
        style={{ width: "150px", objectFit: "cover" }}
        alt="happy shelby"
      />
    ),
  };

  return <Character emotions={[neutral, happy]} id="shelby" {...props} />;
};

const Friend = (props) => {
  const neutral = {
    emotion: "neutral",
    sprite: (
      <img
        src="https://cdn.dribbble.com/users/3862938/screenshots/13026802/media/3947055621ecc4f638ea3faf73f6e6e0.png"
        style={{ width: "200px", objectFit: "cover" }}
        alt="neutral friend"
      />
    ),
  };

  return <Character emotions={[neutral]} id="friend" {...props} />;
};

const Scene1 = () => {
  const gameState = useContext(GameStateContext);
  const script = chapter1Script(gameState);

  const assets = [
    <BlackBackground assetId="blackBackground" />,
    <Classroom assetId="classroomBackground" />,
    <Mary flipId="1" assetId="mary-neutral" />,
    <Mary flipId="1"　emotion="happy" assetId="mary-happy" />,
    <Yamashita flipId="2" assetId="yamashita" />,
    <Kimura flipId="3" assetId="kimura-neutral" />,
    <Sue flipId="4" assetId="sue-neutral" />,
    <Robert flipId="5" assetId="robert-neutral" />
  ]

  return (
    <div>
    <GameMenuBar />
    <Scene script={script} assets={assets} textComponent={LLSIFText} />
    </div>
  );
};

const NewGameScene = () => {
  const gameState = useContext(GameStateContext);
  const script = sampleScript(gameState);

  const assets = [
    <Mary assetId="mary-neutral" flipId="1" />,
    <Mary assetId="mary-happy" emotion="happy" flipId="1" />,
    <Friend assetId="friend" flipId="2" />,
    <BlackBackground assetId="blackBackground" />,
    <SchoolBackground1 assetId="schoolBackground" />,
    <LLSIFText assetId="llsif-text" />,
  ]

  return (
    <div>
      <GameMenuBar />
      {/* TODO: textcomponent should also passed in with the script instead of in the props */}
      {/* TODO: but also maybe you can configure a default somewhere? */}
      <Scene script={script} assets={assets} textComponent={LLSIFText} />
    </div>
  );
};

const GameMenuBar = (props) => {
  const gameState = useContext(GameStateContext);

  return (
    <MenuBar>
      <MenuButton toComponent="dialogueHistory">History</MenuButton>
      <MenuButton toComponent="saveGameMenu">Save</MenuButton>
      <MenuButton toComponent="loadGameMenu">Load</MenuButton>
      <MenuButton toComponent="menu" onClick={gameState.resetState}>
        Main menu
      </MenuButton>
    </MenuBar>
  );
};

const MenuBackground = (props) => <div className="genki-background--container">
  <div>GEN</div>
  <div>KI</div>
</div>

const MyGameMenu = () => {
  return (
    <Menu>
      <MenuBackground />
      <MenuButton toComponent={"newGame"}>New Game</MenuButton>
      <MenuButton toComponent={"loadGameMenu"}>Load</MenuButton>
    </Menu>
  );
};

const MyLoadGameMenu = () => {
  return (
    <LoadGameMenu>
      <MenuBackground />
    </LoadGameMenu>
  );
}

const MySaveGameMenu = () => {
  return (
    <SaveGameMenu>
      <MenuBackground />
    </SaveGameMenu>
  );
}

function App() {
  return (
    <div>
    <GameWindow>
      <MyGameMenu componentKey="menu" index />
      <DialogueHistory componentKey="dialogueHistory" />
      <NewGameScene componentKey="newGame" />
      <Scene1 componentKey="chapter1" />
      <MyLoadGameMenu componentKey="loadGameMenu" />
      <MySaveGameMenu componentKey="saveGameMenu" />
    </GameWindow>
    </div>
  );
}

// const App = () => {
//   return <ExampleComponent text="Create React Library Example 😄" />
// }

export default App
