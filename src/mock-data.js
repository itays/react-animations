export const panels = [
  {
    id: 1,
    type: 'single',
    panelTitle: 'your rules free tv',
    panelGroups: [
      {
        id: 1,
        groupTitle: '',
        cards: [
          {
            id: 1,
            title: '60+ channels',
            additionalText: '',
            price: '35$',
          },
          {
            id: 2,
            title: '80+ channels',
            additionalText: '',
            price: '50$',
          },
          {
            id: 3,
            title: '100+ channels',
            additionalText: '',
            price: '60$',
          },
          {
            id: 4,
            additionalText: '',
            title: '120+ channels',
            price: '70$',
          },
        ],
      },
    ],
    cards: [
      {
        id: 1,
        title: '60+ channels',
        additionalText: 'Live a little',
        price: '35$',
      },
      {
        id: 2,
        title: '80+ channels',
        additionalText: 'Just right',
        price: '50$',
      },
      {
        id: 3,
        title: '100+ channels',
        additionalText: 'Go big',
        price: '60$',
      },
      {
        id: 4,
        additionalText: 'Gotta have it',
        title: '120+ channels',
        price: '70$',
      },
    ],
  },
  {
    id: 2,
    type: 'multi',
    panelTitle: 'Add some binge worthy channels',
    cards: [
      {
        id: 5,
        title: 'HBO',
        additionalText: '',
        price: '5$',
      },
      {
        id: 6,
        title: 'Cinemax',
        additionalText: '',
        price: '5$',
      },
      {
        id: 7,
        title: 'STARZ',
        additionalText: '',
        price: '5$',
      },
      {
        id: 8,
        title: 'NFL',
        additionalText: '',
        price: '45$',
      },
    ],
    panelGroups: [
      {
        id: 1,
        groupTitle: '',
        headerQuestion: '',
        cards: [
          {
            id: 5,
            title: 'HBO',
            additionalText: '',
            price: '5$',
          },
          {
            id: 6,
            title: 'Cinemax',
            additionalText: '',
            price: '5$',
          },
          {
            id: 7,
            title: 'STARZ',
            additionalText: '',
            price: '5$',
          },
          {
            id: 8,
            title: 'NFL',
            additionalText: '',
            price: '45$',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    type: 'single',
    panelTitle: 'Configure your cloud DVR',
    headerQuestion: 'Record live TV so you can watch  your favorites on your schedule.',
    cards: [
      {
        id: 9,
        title: 'Cloud DVR 20HRS',
        additionalText:
          '20 hours of cloud DVR is included with all TV plans. saved  for 30 days.',
        price: 'Free',
      },
      {
        id: 10,
        title: 'Cloud DVR 100 HRS',
        additionalText:
          '100 hours of cloud DVR to save more of your stuff. saved  for 30 days.',
        price: '10$',
      },
    ],
    panelGroups: [
      {
        id: 1,
        groupTitle: 'Configure your cloud DVR',
        headerQuestion:
          'Record live TV so you can watch  your favorites on your schedule.',
        cards: [
          {
            id: 9,
            title: 'Cloud DVR 20HRS',
            additionalText:
              '20 hours of cloud DVR is included with all TV plans. saved  for 30 days.',
            price: 'Free',
          },
          {
            id: 10,
            title: 'Cloud DVR 100 HRS',
            additionalText:
              '100 hours of cloud DVR to save more of your stuff. saved  for 30 days.',
            price: '10$',
          },
        ],
      },
      {
        id: 2,
        groupTitle: 'Conigure your device streams',
        headerQuestion:
          'All plans include 2 FREE device streams to watch TV at a time',
        cards: [
          {
            id: 11,
            title: 'Stream on 2 Devices',
            additionalText:
              'stream on 2 devices is included with all DirectTV now plans.',
            price: 'FREE',
          },
          {
            id: 12,
            title: 'Stream on 3 Devices',
            additionalText: 'If youre running into streaming problems...',
            price: '5$',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    type: 'single',
    panelTitle: 'Conigure your device streams',
    headerQuestion: 'All plans include 2 FREE device streams to watch TV at a time',
    cards: [
      {
        id: 11,
        title: 'Stream on 2 Devices',
        additionalText: 'Stream on 2 devices is included with all DirectTV now plans.',
        price: 'FREE',
      },
      {
        id: 12,
        title: 'Stream on 3 Devices',
        additionalText: 'If youre running into streaming problems...',
        price: '5$',
      },
    ],
  }
];
