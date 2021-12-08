const questions = [
    {
      id: 1,
      content: {
        imgsrc : '/images/q1.png',
        question: '친구와의 약속이 취소되었을 때 나는',
        options: [
          { id: 1, title: '아쉬운 마음에 다른 친구를 찾는다' },
          { id: 2, title: '은근히 기쁜 마음으로 혼자 쉰다' },
        ],
      },
    },
    {
      id: 2,
      content: {
        imgsrc : '/images/q2.png',
        question: '모임에서 처음 본 사람을 만났을 때 나는',
        options: [
          { id: 1, title: '굳이 내가 먼저 말 걸지 않는다' },
          { id: 2, title: '친해져서 나쁠 건 없으니 먼저 말 건다' },
        ],
      },
    },
    {
      id: 3,
      content: {
        imgsrc : '/images/q3.png',
        question: '내가 진정한 휴식시간이라고 생각하는 시간은',
        options: [
          { id: 1, title: '혼자 생각에 잠겨 내 자신을 돌아볼 때' },
          { id: 2, title: '친구들과 근황에 대해 이야기하며 함께할 때' },
        ],
      },
    },
    {
      id: 4,
      content: {
        imgsrc : '/images/q4.png',
        question: '사과를 떠올렸을 때 가장 먼저 생각나는 키워드는',
        options: [
          { id: 1, title: '과일, 빨간색, 동그라미 등 사과의 외형과 속성' },
          { id: 2, title: '뉴턴, 백설공주, 애플 등 사과에 관련된 이야깃거리' },
        ],
      },
    },
    {
      id: 5,
      content: {
        imgsrc : '/images/q5.png',
        question: '일할 때 나는',
        options: [
          { id: 1, title: '스스로 나만의 방법을 만드는 것이 좋다' },
          { id: 2, title: '남들이 하는 대로 따라가는 것이 좋다' },
        ],
      },
    },
    {
      id: 6,
      content: {
        imgsrc : '/images/q6.png',
        question: '주변 사람들이 나에게 하는 말은',
        options: [
          { id: 1, title: '꾸준하고 참을성이 있다' },
          { id: 2, title: '창의적이고 독창적이다' },
        ],
      },
    },
    {
      id: 7,
      content: {
        imgsrc : '/images/q7.png',
        question: '내게 최고의 칭찬은',
        options: [
          { id: 1, title: '넌 정말 똑똑하고 이성적이야' },
          { id: 2, title: '넌 정말 친절하고 다정해' },
        ],
      },
    },
    {
      id: 8,
      content: {
        imgsrc : '/images/q8.png',
        question: '상대방과 언쟁할 때 나는',
        options: [
          { id: 1, title: '할 말이 많지만 상대를 불쾌하지 않는 것이 더 중요하다' },
          { id: 2, title: '상대방의 기분보다는 이치에 맞는 말을 하는 것이 더 중요하다' },
        ],
      },
    },
    {
      id: 9,
      content: {
        imgsrc : '/images/q9.png',
        question: '책 읽다 내 생각이 났다며 친구에게 연락이 왔을 때',
        options: [
          { id: 1, title: '우와! 그게 무슨 책인데?' },
          { id: 2, title: '고마워, 감동이야~' },
        ],
      },
    },
    {
      id: 10,
      content: {
        imgsrc : '/images/q10.png',
        question: '기대하던 여행을 준비하는 과정에서 나는',
        options: [
          { id: 1, title: '여행지에서는 발 닿는 모든 곳이 구경거리다' },
          { id: 2, title: '여행 계획은 철저히 세워 둬야 보람찬 여행이다' },
        ],
      },
    },
    {
        id: 11,
        content: {
          imgsrc : '/images/q11.png',
          question: '내 업무 스타일은',
          options: [
            { id: 1, title: '체계적이고 조직적으로 수행한다' },
            { id: 2, title: '그때그떄 상황에 맞게 조정하며 수행한다' },
          ],
        },
      },
      {
        id: 12,
        content: {
          imgsrc : '/images/q12.png',
          question: '생각했던 스케줄에 변동이 생겼다',
          options: [
            { id: 1, title: '어쩔 수 없는 것은 알지만 스트레스를 받는다' },
            { id: 2, title: '예상치 못한 새로운 상황에 흥분된다' },
          ],
        },
      },
  ];

  const scores = {
    1: {
        1: {
        //  e     i     n     s     f     t     p     j
          1: 5, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0
        },
        2: {
          1: 0, 2: 5, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0
        },
      },
    2: {
      1: {
        1: 0, 2: 5, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0
      },
      2: {
        1: 5, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0
      },
    },
    3: {
      1: {
        1: 0, 2: 5, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0
      },
      2: {
        1: 5, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0
      },
    },
    4: {
      1: {
        1: 0, 2: 0, 3: 0, 4: 5, 5: 0, 6: 0, 7: 0, 8: 0
      },
      2: {
        1: 0, 2: 0, 3: 5, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0
      },
    },
    5: {
      1: {
        1: 0, 2: 0, 3: 5, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0
      },
      2: {
        1: 0, 2: 0, 3: 0, 4: 5, 5: 0, 6: 0, 7: 0, 8: 0
      },
    },
    6: {
      1: {
        1: 0, 2: 0, 3: 0, 4: 5, 5: 0, 6: 0, 7: 0, 8: 0
      },
      2: {
        1: 0, 2: 0, 3: 5, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0
      },
    },
    7: {
      1: {
        1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 5, 7: 0, 8: 0
      },
      2: {
        1: 0, 2: 0, 3: 0, 4: 0, 5: 5, 6: 0, 7: 0, 8: 0
      },
    },
    8: {
      1: {
        1: 0, 2: 0, 3: 0, 4: 0, 5: 5, 6: 0, 7: 0, 8: 0
      },
      2: {
        1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 5, 7: 0, 8: 0
      },
    },
    9: {
      1: {
        1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 5, 7: 0, 8: 0
      },
      2: {
        1: 0, 2: 0, 3: 0, 4: 0, 5: 5, 6: 0, 7: 0, 8: 0
      },
    },
    10: {
      1: {
        1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 5, 8: 0
      },
      2: {
        1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 5
      },
    },
    10: {
      1: {
        1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 5
      },
      2: {
        1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 5, 8: 0
      },
    },
    10: {
        1: {
          1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 5
        },
        2: {
          1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 5, 8: 0
        },
      },
  };

  const results = [
    {
      id: 'entj',
      partner : 'isfp',
      content: {
        name: '대담한 통솔자',
        imgsrc : '/images/entj.png',
        description : '대담하면서도 상상력이 풍부한 강한 의지의 소유자로 다양한 방법을 모색하거나 여의치 않을 경우 새로운 방안을 창출하는 리더형',
      },
    },
    {
      id: 'intj',
      partner : 'esfp',
      content: {
        name: '용의주도한 전략가',
        imgsrc : '/images/intj.png',
        description : '상상력이 풍부하며 철두철미한 계획을 세우는 전략가형',
      },
    },
    {
      id: 'intp',
      partner : 'esfj',
      content: {
        name: '논리적인 사색가',
        imgsrc :'/images/intp.png',
        description : '끊임없이 새로운 지식에 목말라 하는 혁신가형',
      },
    },
    {
      id: 'entp',
      partner : 'isfj',
      content: {
        name: '뜨거운 논쟁을 즐기는 변론가',
        imgsrc : '/images/entp.png',
        description : '지적인 도전을 두려워하지 않는 똑똑한 호기심형',
      },
    },
    {
      id: 'infj',
      partner : 'entp',
      content: {
        name: '선의의 옹호자',
        imgsrc : '/images/infj.png',
        description : '조용하고 신비로우며 샘솟는 영감으로 지칠 줄 모르는 이상주의자',
      },
    },
    {
      id: 'infp',
      partner : 'estj',
      content: {
        name: '열정적인 중재자',
        imgsrc : '/images/infp.png',
        description : '상냥한 성격의 이타주의자로 건강하고 밝은 사회 건설에 앞장서는 낭만형',
      },
    },
    {
      id: 'enfj',
      partner : 'istp',
      content: {
        name: '정의로운 사회운동가',
        imgsrc : '/images/enfj.png',
        description : '넘치는 카리스마와 영향력으로 청중을 압도하는 리더형',
      },
    },
    {
      id: 'enfp',
      partner : 'intj',
      content: {
        name: '재기발랄한 활동가',
        imgsrc : '/images/enfp.png',
        description : '창의적이며 항상 웃을 거리를 찾아다니는 활발한 성격으로 사람들과 자유롭게 어울리기를 좋아하는 넘치는 열정의 소유자',
      },
    },
    {
        id: 'istj',
        partner : 'enfp',
        content: {
          name: '청렴결백한 논리주의자',
          imgsrc : '/images/istj.png',
          description : '사실에 근거하여 사고하며 이들의 행동이나 결정 사항에 한 치의 의심을 사지 않는 현실주의자형',
        },
    },
    {
        id: 'isfj',
        partner : 'entp',
        content: {
          name: '용감한 수호자',
          imgsrc : '/images/isfj.png',
          description : '소중한 이들을 수호하는 데 심혈을 기울이는 헌신적이며 성실한 방어자형',
        },
      },{
        id: 'estj',
        partner : 'infp',
        content: {
          name: '엄격한 관리자',
          imgsrc : '/images/estj.png',
          description : '사물이나 사람을 관리하는 데 타의 추종을 불허하는 뛰어난 실력을 갖춘 관리자형',
        },
      },{
        id: 'esfj',
        partner : 'intp',
        content: {
          name: '사교적인 외교관',
          imgsrc : '/images/esfj.png',
          description : '타인을 향한 세심한 관심과 사교적인 성향으로 사람들 내에서 인기가 많으며, 타인을 돕는데 열성적인 세심형',
        },
      },{
        id: 'istp',
        partner : 'enfj',
        content: {
          name: '만능 재주꾼',
          imgsrc : '/images/istp.png',
          description : '대담하고 현실적인 성향으로 다양한 도구 사용에 능숙한 탐험형',
        },
      },{
        id: 'isfp',
        partner : 'entj',
        content: {
          name: '호기심 많은 예술가',
          imgsrc : '/images/isfp.png',
          description : '항시 새로운 것을 찾아 시도하거나 도전할 준비가 되어 있는 융통성 있는 성격의 매력 넘치는 예술가형',
        },
      },{
        id: 'estp',
        partner : 'infj',
        content: {
          name: '모험을 즐기는 사업가',
          imgsrc : '/images/estp.png',
          description : '벼랑 끝의 아슬아슬한 삶을 진정으로 즐길 줄 아는 이들로 명석한 두뇌와 에너지, 그리고 뛰어난 직관력을 가지고 있는 유형',
        },
      },{
        id: 'esfp',
        partner : 'intj',
        content: {
          name: '자유로운 영혼의 연예인',
          imgsrc : '/images/esfp.png',
          description : '주위에 있으면 인생이 지루할 새가 없을 정도로 즉흥적이며 열정과 에너지가 넘치는 연예인형',
        },
      },
];

export {questions, scores, results};