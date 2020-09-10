const newGameScript = ({playerName}) => [
  {
    background: ["blackBackground"],
    text: "今日は日本語のクラスは始まります。"
  },
  {
    text: "午前８時半ごろ学校へ行きます。"
  },
  {
    background: ["blackBackground", "schoolBackground"],
    text: "学校で私は少女を見る。",
  },
  {
    characters: ["mary-neutral"],
    text: "おはようございます！げんき学園にようこそ。",
    speaker: "Shelby",
  },
  {
    characters: ["mary-neutral"],
    text: "私の名前はメアリーです。",
    speaker: "Shelby",
  },
  {
    text: "お名前は何ですか？",
    reply: {
      type: "input",
      variable: "playerName",
    },
  },
  {
    characters: ["mary-happy"],
    text: `初めまして${playerName}さん！`,
  },
  {
    characters: ["mary-neutral"],
    text: "私と一緒にクラスへ行きましょうか？",
    // reply: {
    //   type: "select",
    //   choices: [
    //     { name: "はい！", value: "chapter1", navigate: true },
    //   ],
    // },
    navigateTo: "chapter1",
  },
  // {
  //   ...likesGenki === "true"
  //     ? {
  //         characters: ["shelby-happy"],
  //         text: "いいですね！良かったです",
  //       }
  //     : { characters: ["shelby-neutral"], text: "残念ですね" },
  // },
  // {
  //   characters: ["shelby-neutral", "friend"],
  //   text: "お友達の名前は田中さんです",
  //   navigateTo: "scene1",
  // },
];

export default newGameScript;