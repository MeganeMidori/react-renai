const script = ({playerName, nationality, jobTitle}) => [
  {
    background: ["blackBackground", "classroomBackground"],
    characters: ["mary-neutral", "yamashita"],
    text: 'クラスにようこそ。'
  },
  {
    text: '私の名前はやましたです。げんき学院の先生です。'
  },
  {
    characters: ["yamashita"],
    text: 'みんなさん座ってを下さい。'
  },
  {
    text: '今日は「初めまして」と言います。メアリーさんどうぞ。'
  },
  {
    characters: ["mary-happy"],
    text: 'は〜い！'
  },
  {
    characters: ["mary-neutral"],
    text: '初めまして。メアリー・ハートです。'
  },
  {
    text: 'アリゾナ大学生の学生です。今２年生です。先行は日本語です。'
  },
  {
    text: '19歳です。よろしくお願いします。'
  },
  {
    characters: ["yamashita"],
    text: 'はい。次はきむらさん。'
  },
  {
    characters: ["kimura-neutral"],
    text: '初めまして。きむら・たけしと申します。'
  },
  {
    text: 'さくら大学の学生です。4年生です。先行は歴史です。'
  },
  {
    text: '22歳です。よろしくお願いします。'
  },
  {
    characters: ["yamashita"],
    text: 'はい。次はスーさん。'
  },
  {
    characters: ["sue-neutral"],
    text: '初めまして。スー・キムです。'
  },
  {
    text: 'ソウル大学の学生。3年生です。先行はコンピューター。'
  },
  {
    text: '20歳です。よろしくお願いします。'
  },
  {
    characters: ["yamashita"],
    text: 'はい。次はロバートさん。'
  },
  {
    characters: ["robert-neutral"],
    text: '初めまして。私の名前はロバート・スミスです。22歳です。'
  },
  {
    text: 'ロンドンの大学の学生です。４年生です。先行はビジネスです。'
  },
  {
    text: 'よろしくお願いします。'
  },
  {
    characters: ["yamashita"],
    text: `はい。最後は${playerName}さん。`
  },
  {
    characters: ["yamashita","mary-neutral", "kimuara-neutral", "sue-neutral", "robert-neutral"],
    text: `初めまして。${playerName}です。`
  },
  {
    characters: ["yamashita","mary-neutral", "kimuara-neutral", "sue-neutral", "robert-neutral"],
    text: `初めまして。${playerName}です。`
  },
  {
    text: 'ご出身は…',
    reply: {
      type: 'input',
      variable: 'nationality',
    }
  },
  {
    text: `${nationality}人です。`,
  },
  {
    text: 'お仕事は…',
    reply: {
      type: 'input',
      variable: 'jobTitle',
    }
  },
  {
    text: `お仕事は${jobTitle}です。`,
  },
  {
    text: `これから一所懸命頑張ります。よろしくお願いします。`,
  },
  {
    characters: ["yamashita"],
    text: 'いいの。ありがとうみんなさん。今日のクラスは終わりました。'
  },
  {
    characters: ["mary-happy", "sue-neutral"],
    text: 'ヨ！明日一緒に買い物行っていかない？'
  },
  {
    text: '楽しそうですね。'
  },
  {
    text: 'じゃあ、電話番号は何ですか？'
  },
  {
    text: 'じゃあ、電話番号は何ですか？',
    reply: {
      type: 'input',
    }
  },
  {
    text: 'メアリーさんの電話番号は何ですか？'
  },
  {
    text: '電話番号は９３８の４９２の１０４６です。また明日ね！'
  },
  {
    text: `To be continued...
You reached the end of chapter 1! Would you like to save your progress?`,
    reply: {
      type: "select",
      choices: [
        { name: "Save game", value: "save", navigate: true, saveGame: true },
        { name: "Main menu", value: "menu", navigate: true},
      ],
    },
  }
]

export default script;