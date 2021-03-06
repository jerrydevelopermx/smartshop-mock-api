const pages = [
  {
    id: 0,
    name: "Website Page",
    logo: "bevariante1.png",
    coverImage: "",
    description: "This is the website home page",
    headerMenu: [
      { type: "link", label: "Home", url: "/#home-scroll", action: "home" },
      {
        type: "submenu",
        id: "submenuStore0",
        label: "Our Services",
        url: "/",
        items: [
          { text: "Our Mission", action: "mission" },
          { text: "Who We Are", action: "who" },
          { text: "Our Board & Staff", action: "board" },
          { text: "Site's Features", action: "features" },
          { text: "Site's Membership", action: "membership" },
          { text: "Events", action: "events" },
          { text: "Tour the Site", action: "tour" },
        ],
      },
      { type: "link", label: "Contact Us", url: "", action: "contact" },
      { type: "logo" },
      { type: "link", label: "Events", url: "/#events-scroll" },
      { type: "link", label: "Blog", url: "", action: "blog" },
      { type: "link", label: "Login", url: "", action: "login" },
    ],
    styles: {
      body: {
        background: "#fff",
        fontFamily: "Verdana",
      },
      header: {
        topBar: { background: "#590F10" },
        headerActive: {
          color: "#fff",
        },
        headerMenu: {
          color: "#fff",
        },
        styledMenu: {
          paper: {
            backgroundColor: "#590F10",
            color: "white",
          },
        },
        styledMenuItem: {
          root: {
            hover: {
              backgroundColor: "#350909",
            },
          },
        },
        contentModal: {
          contentModalsHeader: {
            background: "#590F10",
            color: "#fff",
          },
          contentModalsBody: {
            background: "#fff",
          },
          closeButton: {
            root: {
              color: "#fff",
              backgroundColor: "#590F10",
              hover: {
                backgroundColor: "#350909",
              },
            },
          },
        },
        mobileNavBar: {
          paper: {
            background: "#590F10",
            color: "white",
          },
          list: {
            width: "180px",
          },
        },
      },
      footer: {
        bottomBar: {
          background: "#590F10",
          color: "#fff",
          fontSize: "13px",
        },
        footerLinks: {
          color: "#fff",
        },
      },
      modalStyles: {
        header: {
          background: "#2E3B55",
          color: "#fff",
        },
        body: {
          background: "#fff",
        },
        closeButton: {
          root: {
            color: "#fff",
            backgroundColor: "#590F10",
            hover: {
              backgroundColor: "#350909",
            },
          },
        },
      },
      detailsModal: {
        detailsHeader: {
          background: "#2E3B55",
          color: "#fff",
        },
        detailsBody: {
          background: "#fff",
        },
        closeButton: {
          root: {
            color: "#fff",
            backgroundColor: "#590F10",
            hover: {
              backgroundColor: "#350909",
            },
          },
        },
      },
    },
    slides: [
      {
        img: "banner1.jpg",
        text: null,
      },
    ],
    categories: [
      {
        id: "cat1",
        name: "Accesories",
      },
      {
        id: "cat2",
        name: "Sports",
      },
      {
        id: "cat3",
        name: "Shoes",
      },
      {
        id: "cat4",
        name: "Chothes",
      },
      {
        id: "cat5",
        name: "Women",
      },
      {
        id: "cat6",
        name: "Men",
      },
    ],
    video: {
      autoPlay: false,
      poster: "who-we-are.jpg",
      src: "http://media.w3.org/2010/05/sintel/trailer.mp4",
    },
    offers: [
      {
        img: "offers1.jpg",
        text: null,
      },
    ],
    footer: {
      copyright: "Copyright. 2020 | HLProductions ",
      columns: [
        {
          id: "foo1",
          title: "ABOUT US",
          options: [
            { text: "Who we are", url: "" },
            { text: "History", url: "" },
            { text: "Contact", url: "" },
          ],
        },
        {
          id: "foo2",
          title: "DISCLAIMERS",
          options: [
            { text: "Views expressed", url: "" },
            { text: "Fairs use", url: "" },
            { text: "No responsability", url: "" },
            { text: "Copyright notice", url: "" },
          ],
        },
        {
          id: "foo3",
          title: "TWEETS",
          options: [
            { text: "I would like...", url: "" },
            { text: "I have some...", url: "" },
          ],
        },
        {
          id: "foo4",
          title: "JOIN US",
          options: [{ text: "Subscribe", url: "" }],
          social: ["facebook", "twitter", "instagram", "youtube"],
        },
      ],
    },
  },
  {
    id: 1,
    categoryId: "cat1",
    name: "Bags Store",
    logo: "bevariante2.png",
    coverImage: "bag-store.jpg",
    description: "This is store website",
    headerMenu: [
      { type: "link", label: "Home", url: "/store/1/#home-scroll" },
      {
        type: "submenu",
        id: "submenuStore1",
        label: "Our Services",
        url: "/store/1",
        items: [
          { text: "Our Mission", action: "mission" },
          { text: "Who We Are", action: "who" },
          { text: "Our Board & Staff", action: "board" },
          { text: "Site's Features", action: "features" },
          { text: "Site's Membership", action: "membership" },
          { text: "Events", action: "events" },
          { text: "Tour the Site", action: "tour" },
        ],
      },
      { type: "link", label: "Contact Us", url: "/store/1", action: "contact" },
      { type: "logo" },
      { type: "link", label: "Events", url: "/store/1/#events-scroll" },
      { type: "link", label: "Blog", url: "/store/1", action: "blog" },
      { type: "link", label: "Login", url: "", action: "login" },
    ],
    styles: {
      body: {
        background: "#fff",
        fontFamily: "Verdana",
      },
      header: {
        topBar: { background: "#590F10" },
        headerActive: {
          color: "#fff",
        },
        headerMenu: {
          color: "#fff",
        },
        styledMenu: {
          paper: {
            backgroundColor: "#2E3B55",
            color: "white",
          },
        },
        styledMenuItem: {
          root: {
            hover: {
              backgroundColor: "#252f44",
            },
          },
        },
        contentModal: {
          contentModalsHeader: {
            background: "#2E3B55",
            color: "#fff",
          },
          contentModalsBody: {
            background: "#fff",
          },
          closeButton: {
            root: {
              color: "#fff",
              backgroundColor: "#2E3B55",
              hover: {
                backgroundColor: "#252f44",
              },
            },
          },
        },
        mobileNavBar: {
          paper: {
            background: "#2E3B55",
            color: "white",
          },
          list: {
            width: "180px",
          },
        },
      },
      footer: {
        bottomBar: {
          background: "#2E3B55",
          color: "#fff",
          fontSize: "13px",
        },
        footerLinks: {
          color: "#fff",
        },
      },
      modalStyles: {
        header: {
          background: "#2E3B55",
          color: "#fff",
        },
        body: {
          background: "#fff",
        },
        closeButton: {
          root: {
            color: "#fff",
            backgroundColor: "#2E3B55",
            hover: {
              backgroundColor: "#252f44",
            },
          },
        },
      },
      detailsModal: {
        detailsHeader: {
          background: "#2E3B55",
          color: "#fff",
        },
        detailsBody: {
          background: "#fff",
        },
        closeButton: {
          root: {
            color: "#fff",
            backgroundColor: "#2E3B55",
            hover: {
              backgroundColor: "#252f44",
            },
          },
        },
      },
    },
    slides: [
      {
        img: "banner4.jpg",
        text: null,
      },
      {
        img: "banner5.jpg",
        text: null,
      },
    ],
    categories: [
      {
        id: "cat7",
        name: "Business",
        filters: [
          {
            id: "f1",
            name: "Color",
            values: ["Red", "Yellow", "Black", "Blue", "Pink", "Beige"],
          },
          {
            id: "f3",
            name: "Style",
            values: ["ST1898", "ST18999", "ST1800", "ST19000"],
          },
        ],
      },
      {
        id: "cat8",
        name: "Casual",
        filters: [
          {
            id: "f1",
            name: "Color",
            values: ["Red", "Yellow", "Black", "Blue", "Pink", "Beige"],
          },
          { id: "f2", name: "Size", values: ["small", "medium", "big"] },
          {
            id: "f3",
            name: "Style",
            values: ["ST1898", "ST18999", "ST1800", "ST19000"],
          },
          {
            id: "f4",
            name: "Material",
            values: ["Synthetic", "Mat", "Scrii", "PI"],
          },
        ],
      },
    ],
    filters: [
      {
        id: "f1",
        name: "Color",
        values: ["Red", "Yellow", "Black", "Blue", "Pink", "Beige"],
      },
      { id: "f2", name: "Size", values: ["small", "medium", "big"] },
      {
        id: "f3",
        name: "Style",
        values: ["ST1898", "ST18999", "ST1800", "ST19000"],
      },
      {
        id: "f4",
        name: "Material",
        values: ["Synthetic", "Mat", "Scrii", "PI"],
      },
    ],
    video: {
      autoPlay: false,
      poster: "who-we-are.jpg",
      src: "http://media.w3.org/2010/05/bunny/trailer.mp4",
    },
    offers: [
      {
        img: "offers1.jpg",
        text: null,
      },
      {
        img: "offers4.jpg",
        text: null,
      },
    ],
    footer: {
      copyright: "Copyright. 2020 | HLProductions ",
      columns: [
        {
          id: "foo1",
          title: "ABOUT US",
          options: [
            { text: "Who we are", url: "" },
            { text: "History", url: "" },
            { text: "Contact", url: "" },
          ],
        },
        {
          id: "foo2",
          title: "DISCLAIMERS",
          options: [
            { text: "Views expressed", url: "" },
            { text: "Fairs use", url: "" },
            { text: "No responsability", url: "" },
            { text: "Copyright notice", url: "" },
          ],
        },
        {
          id: "foo3",
          title: "TWEETS",
          options: [
            { text: "I would like...", url: "" },
            { text: "I have some...", url: "" },
          ],
        },
        {
          id: "foo4",
          title: "JOIN US",
          options: [{ text: "Subscribe", url: "" }],
          social: ["facebook", "twitter", "instagram", "youtube"],
        },
      ],
    },
  },
  {
    id: 2,
    categoryId: "cat1",
    name: "Glasses Store",
    logo: "bevariante3.png",
    coverImage: "glasses-store.jpg",
    description: "This is store website",
    headerMenu: [
      { type: "link", label: "Home", url: "/store/2/#home-scroll" },
      {
        type: "submenu",
        id: "submenuStore1",
        label: "Our Services",
        url: "/store/2",
        items: [
          { text: "Our Mission", action: "mission" },
          { text: "Who We Are", action: "who" },
          { text: "Our Board & Staff", action: "board" },
          { text: "Site's Features", action: "features" },
          { text: "Site's Membership", action: "membership" },
          { text: "Events", action: "events" },
          { text: "Tour the Site", action: "tour" },
        ],
      },
      { type: "link", label: "Contact Us", url: "/store/2", action: "contact" },
      { type: "logo" },
      { type: "link", label: "Events", url: "/store/2/#events-scroll" },
      { type: "link", label: "Blog", url: "/store/2", action: "blog" },
      { type: "link", label: "Login", url: "", action: "login" },
    ],
    styles: {
      body: {
        background: "#fff",
        fontFamily: "Verdana",
      },
      header: {
        topBar: { background: "#590F10" },

        headerActive: {
          color: "#fff",
        },
        headerMenu: {
          color: "#fff",
        },
        styledMenu: {
          paper: {
            backgroundColor: "#607c3c",
            color: "white",
          },
        },
        styledMenuItem: {
          root: {
            hover: {
              backgroundColor: "#4d6330",
            },
          },
        },
        contentModal: {
          contentModalsHeader: {
            background: "#607c3c",
            color: "#fff",
          },
          contentModalsBody: {
            background: "#fff",
          },
          closeButton: {
            root: {
              color: "#fff",
              backgroundColor: "#607c3c",
              hover: {
                backgroundColor: "#4d6330",
              },
            },
          },
        },
        mobileNavBar: {
          paper: {
            background: "#607c3c",
            color: "white",
          },
          list: {
            width: "180px",
          },
        },
      },
      footer: {
        bottomBar: {
          background: "#607c3c",
          color: "#fff",
          fontSize: "13px",
        },
        footerLinks: {
          color: "#fff",
        },
      },
      modalStyles: {
        header: {
          background: "#607c3c",
          color: "#fff",
        },
        body: {
          background: "#fff",
        },
        closeButton: {
          root: {
            color: "#fff",
            backgroundColor: "#607c3c",
            hover: {
              backgroundColor: "#4d6330",
            },
          },
        },
      },
      detailsModal: {
        detailsHeader: {
          background: "#607c3c",
          color: "#fff",
        },
        detailsBody: {
          background: "#fff",
        },
        closeButton: {
          root: {
            color: "#fff",
            backgroundColor: "#607c3c",
            hover: {
              backgroundColor: "#4d6330",
            },
          },
        },
      },
    },
    slides: [
      {
        img: "banner6.jpg",
        text: null,
      },
      {
        img: "banner7.jpg",
        text: null,
      },
      {
        img: "banner8.jpg",
        text: null,
      },
    ],
    categories: [
      {
        id: "cat5",
        name: "Women",
      },
      {
        id: "cat6",
        name: "Men",
      },
    ],
    filters: [
      { id: "f1", name: "Color", values: ["red", "white", "black"] },
      { id: "f2", name: "size", values: ["small", "medium", "big"] },
      {
        id: "f3",
        name: "style",
        values: ["ST1898", "ST18999", "ST1800", "ST19000"],
      },
      {
        id: "f4",
        name: "material",
        values: ["Synthetic", "Mat", "Scrii", "PI"],
      },
    ],
    video: {
      autoPlay: true,
      poster: "who-we-are.jpg",
      src: "http://media.w3.org/2010/05/bunny/movie.mp4",
    },
    offers: [
      {
        img: "offers1.jpg",
        text: null,
      },
      {
        img: "offers4.jpg",
        text: null,
      },
    ],
    footer: {
      copyright: "Copyright. 2020 | HLProductions ",
      columns: [
        {
          id: "foo1",
          title: "ABOUT US",
          options: [
            { text: "Who we are", url: "" },
            { text: "History", url: "" },
            { text: "Contact", url: "" },
          ],
        },
        {
          id: "foo2",
          title: "DISCLAIMERS",
          options: [
            { text: "Views expressed", url: "" },
            { text: "Fairs use", url: "" },
            { text: "No responsability", url: "" },
            { text: "Copyright notice", url: "" },
          ],
        },
        {
          id: "foo3",
          title: "TWEETS",
          options: [
            { text: "I would like...", url: "" },
            { text: "I have some...", url: "" },
          ],
        },
        {
          id: "foo4",
          title: "JOIN US",
          options: [{ text: "Subscribe", url: "" }],
          social: ["facebook", "twitter", "instagram", "youtube"],
        },
      ],
    },
  },
  {
    id: 3,
    categoryId: "cat2",
    name: "Sports Store",
    logo: "mardi6blanco1.png",
    coverImage: "sports-store.jpg",
    description: "This is store website",
    headerMenu: [
      { type: "link", label: "Home", url: "/store/3/#home-scroll" },
      {
        type: "submenu",
        id: "submenuStore1",
        label: "Our Services",
        url: "/store/3",
        items: [
          { text: "Our Mission", action: "mission" },
          { text: "Who We Are", action: "who" },
          { text: "Our Board & Staff", action: "board" },
          { text: "Site's Features", action: "features" },
          { text: "Site's Membership", action: "membership" },
          { text: "Events", action: "events" },
          { text: "Tour the Site", action: "tour" },
        ],
      },
      { type: "link", label: "Contact Us", url: "/store/3", action: "contact" },
      { type: "logo" },
      { type: "link", label: "Events", url: "/store/3/#events-scroll" },
      { type: "link", label: "Blog", url: "/store/3", action: "blog" },
      { type: "link", label: "Login", url: "", action: "login" },
    ],
    styles: {
      body: {
        background: "#FFC0CB",
        fontFamily: "Verdana",
      },
      header: {
        topBar: { background: "#000" },
        headerActive: {
          color: "#fff",
        },
        headerMenu: {
          color: "#fff",
        },
        styledMenu: {
          paper: {
            backgroundColor: "#000",
            color: "white",
          },
        },
        styledMenuItem: {
          root: {
            hover: {
              backgroundColor: "#18171c",
            },
          },
        },
        contentModal: {
          contentModalsHeader: {
            background: "#000",
            color: "#fff",
          },
          contentModalsBody: {
            background: "#FFC0CB",
          },
          closeButton: {
            root: {
              color: "#fff",
              backgroundColor: "#000",
              hover: {
                backgroundColor: "#18171c",
              },
            },
          },
        },
        mobileNavBar: {
          paper: {
            background: "#000",
            color: "white",
          },
          list: {
            width: "180px",
          },
        },
      },
      footer: {
        bottomBar: {
          background: "#000",
          color: "#fff",
          fontSize: "13px",
        },
        footerLinks: {
          color: "#fff",
        },
      },
      modalStyles: {
        header: {
          background: "#000",
          color: "#fff",
        },
        body: {
          background: "#FFC0CB",
        },
        closeButton: {
          root: {
            color: "#fff",
            backgroundColor: "#000",
            hover: {
              backgroundColor: "#18171c",
            },
          },
        },
      },
      detailsModal: {
        detailsHeader: {
          background: "#000",
          color: "#fff",
        },
        detailsBody: {
          background: "#FFC0CB",
        },
        closeButton: {
          root: {
            color: "#fff",
            backgroundColor: "#000",
            hover: {
              backgroundColor: "#18171c",
            },
          },
        },
      },
    },
    slides: [
      {
        img: "banner1.jpg",
        text: null,
      },
      {
        img: "banner4.jpg",
        text: null,
      },
      {
        img: "banner8.jpg",
        text: null,
      },
    ],
    categories: [
      {
        id: "cat5",
        name: "Women",
      },
      {
        id: "cat6",
        name: "Men",
      },
    ],
    filters: [
      { id: "f1", name: "Color", values: ["red", "white", "black"] },
      { id: "f2", name: "size", values: ["small", "medium", "big"] },
      {
        id: "f3",
        name: "style",
        values: ["ST1898", "ST18999", "ST1800", "ST19000"],
      },
      {
        id: "f4",
        name: "material",
        values: ["Synthetic", "Mat", "Scrii", "PI"],
      },
    ],
    video: {
      autoPlay: false,
      poster: "who-we-are.jpg",
      src: "http://media.w3.org/2010/05/bunny/movie.mp4",
    },
    offers: [
      {
        img: "offers1.jpg",
        text: null,
      },
      {
        img: "offers4.jpg",
        text: null,
      },
    ],
    footer: {
      copyright: "Copyright. 2020 | HLProductions ",
      columns: [
        {
          id: "foo1",
          title: "ABOUT US",
          options: [
            { text: "Who we are", url: "" },
            { text: "History", url: "" },
            { text: "Contact", url: "" },
          ],
        },
        {
          id: "foo2",
          title: "DISCLAIMERS",
          options: [
            { text: "Views expressed", url: "" },
            { text: "Fairs use", url: "" },
            { text: "No responsability", url: "" },
            { text: "Copyright notice", url: "" },
          ],
        },
        {
          id: "foo3",
          title: "TWEETS",
          options: [
            { text: "I would like...", url: "" },
            { text: "I have some...", url: "" },
          ],
        },
        {
          id: "foo4",
          title: "JOIN US",
          options: [{ text: "Subscribe", url: "" }],
          social: ["facebook", "twitter", "instagram", "youtube"],
        },
      ],
    },
  },
];

const sectionsContent = [
  {
    pageId: 0,
    sectionId: "mission",
    title: "Our Mission",
    content: [
      {
        type: "p",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        type: "p",
        text:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      },
      {
        type: "p",
        text:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
      },
      {
        type: "p",
        text:
          "Vestibulum id euismod augue, nec ultrices mi. Mauris dolor arcu, convallis sed auctor a, maximus sit amet purus. Aenean sed ultrices nulla. Sed sodales mattis leo at congue. In mattis ipsum non lacus venenatis, et placerat dui convallis. Aliquam aliquet, dui nec tristique dapibus, ex nisi tempor ligula, id finibus massa neque nec tellus. Vestibulum dapibus arcu id lacus sodales elementum. Vivamus id erat ante. Curabitur nec ante ex.",
      },
      {
        type: "p",
        text:
          "Cras nec justo congue, facilisis erat vel, porta enim. Sed imperdiet bibendum purus, at tempus lacus interdum eget. Cras et est a ex volutpat faucibus. Nulla rhoncus purus ac lobortis auctor. Aenean consequat libero mi, eget laoreet quam dictum molestie. Morbi eget quam vitae neque consequat viverra sed non turpis. Vivamus ac faucibus nunc, et lobortis tortor. Donec gravida commodo ultrices. Aenean venenatis fringilla ipsum, ut egestas lectus imperdiet et. Nulla sit amet condimentum urna. Vivamus fermentum augue eu neque vestibulum, vel ullamcorper lorem elementum. Quisque sit amet sagittis leo, id placerat ligula. Mauris nec enim et sem bibendum lobortis. Suspendisse ac malesuada leo, sed iaculis libero. Integer enim massa, dapibus ut blandit rhoncus, aliquam ut ex. Maecenas convallis velit a diam hendrerit laoreet. Donec tincidunt, nisl eget commodo volutpat, diam arcu egestas enim, nec ultrices nulla magna at purus. Praesent ut sapien velit. Donec nisi libero, ultrices sit amet volutpat quis, luctus ac nisl. Donec a dui mauris. Etiam venenatis condimentum odio ut dapibus. Pellentesque pulvinar aliquam lectus, ut luctus risus laoreet ac. Integer sed fermentum elit. Nam maximus, odio vitae commodo facilisis, odio mi vulputate odio, vitae aliquam nulla augue eu odio. Donec venenatis ut diam sit amet sagittis. Proin condimentum felis ac purus viverra fringilla. Fusce a quam eget leo sodales aliquam et vitae erat. Quisque volutpat non mauris ut gravida. Nunc at ornare purus, ut iaculis sem. Proin a mauris eu leo ornare commodo eu et diam.",
      },
    ],
  },
  {
    pageId: 0,
    sectionId: "who",
    title: "Who We Are",
    content: [
      {
        type: "p",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        type: "p",
        text:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      },
      {
        type: "p",
        text:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
      },
    ],
  },
  {
    pageId: 0,
    sectionId: "board",
    title: "Our Board",
    content: [
      {
        type: "p",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        type: "p",
        text:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      },
      {
        type: "p",
        text:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
      },
    ],
  },
  {
    pageId: 0,
    sectionId: "features",
    title: "Site's Features",
    content: [
      {
        type: "p",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        type: "p",
        text:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      },
      {
        type: "p",
        text:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
      },
    ],
  },
  {
    pageId: 0,
    sectionId: "membership",
    title: "Membership",
    content: [
      {
        type: "p",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        type: "p",
        text:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      },
      {
        type: "p",
        text:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
      },
    ],
  },
  {
    pageId: 0,
    sectionId: "contact",
    title: "Contact us",
    content: [
      {
        type: "p",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        type: "p",
        text:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      },
    ],
  },
  {
    pageId: 0,
    sectionId: "blog",
    title: "Blog",
    content: [
      {
        type: "p",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        type: "p",
        text:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      },
      {
        type: "p",
        text:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
      },
      {
        type: "p",
        text:
          "Vestibulum id euismod augue, nec ultrices mi. Mauris dolor arcu, convallis sed auctor a, maximus sit amet purus. Aenean sed ultrices nulla. Sed sodales mattis leo at congue. In mattis ipsum non lacus venenatis, et placerat dui convallis. Aliquam aliquet, dui nec tristique dapibus, ex nisi tempor ligula, id finibus massa neque nec tellus. Vestibulum dapibus arcu id lacus sodales elementum. Vivamus id erat ante. Curabitur nec ante ex.",
      },
      {
        type: "p",
        text:
          "Cras nec justo congue, facilisis erat vel, porta enim. Sed imperdiet bibendum purus, at tempus lacus interdum eget. Cras et est a ex volutpat faucibus. Nulla rhoncus purus ac lobortis auctor. Aenean consequat libero mi, eget laoreet quam dictum molestie. Morbi eget quam vitae neque consequat viverra sed non turpis. Vivamus ac faucibus nunc, et lobortis tortor. Donec gravida commodo ultrices. Aenean venenatis fringilla ipsum, ut egestas lectus imperdiet et. Nulla sit amet condimentum urna. Vivamus fermentum augue eu neque vestibulum, vel ullamcorper lorem elementum. Quisque sit amet sagittis leo, id placerat ligula. Mauris nec enim et sem bibendum lobortis. Suspendisse ac malesuada leo, sed iaculis libero. Integer enim massa, dapibus ut blandit rhoncus, aliquam ut ex. Maecenas convallis velit a diam hendrerit laoreet. Donec tincidunt, nisl eget commodo volutpat, diam arcu egestas enim, nec ultrices nulla magna at purus. Praesent ut sapien velit. Donec nisi libero, ultrices sit amet volutpat quis, luctus ac nisl. Donec a dui mauris. Etiam venenatis condimentum odio ut dapibus. Pellentesque pulvinar aliquam lectus, ut luctus risus laoreet ac. Integer sed fermentum elit. Nam maximus, odio vitae commodo facilisis, odio mi vulputate odio, vitae aliquam nulla augue eu odio. Donec venenatis ut diam sit amet sagittis. Proin condimentum felis ac purus viverra fringilla. Fusce a quam eget leo sodales aliquam et vitae erat. Quisque volutpat non mauris ut gravida. Nunc at ornare purus, ut iaculis sem. Proin a mauris eu leo ornare commodo eu et diam.",
      },
    ],
  },
  {
    pageId: 1,
    sectionId: "mission",
    title: "Our Mission",
    content: [
      {
        type: "p",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        type: "p",
        text:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      },
      {
        type: "p",
        text:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
      },
      {
        type: "p",
        text:
          "Vestibulum id euismod augue, nec ultrices mi. Mauris dolor arcu, convallis sed auctor a, maximus sit amet purus. Aenean sed ultrices nulla. Sed sodales mattis leo at congue. In mattis ipsum non lacus venenatis, et placerat dui convallis. Aliquam aliquet, dui nec tristique dapibus, ex nisi tempor ligula, id finibus massa neque nec tellus. Vestibulum dapibus arcu id lacus sodales elementum. Vivamus id erat ante. Curabitur nec ante ex.",
      },
      {
        type: "p",
        text:
          "Cras nec justo congue, facilisis erat vel, porta enim. Sed imperdiet bibendum purus, at tempus lacus interdum eget. Cras et est a ex volutpat faucibus. Nulla rhoncus purus ac lobortis auctor. Aenean consequat libero mi, eget laoreet quam dictum molestie. Morbi eget quam vitae neque consequat viverra sed non turpis. Vivamus ac faucibus nunc, et lobortis tortor. Donec gravida commodo ultrices. Aenean venenatis fringilla ipsum, ut egestas lectus imperdiet et. Nulla sit amet condimentum urna. Vivamus fermentum augue eu neque vestibulum, vel ullamcorper lorem elementum. Quisque sit amet sagittis leo, id placerat ligula. Mauris nec enim et sem bibendum lobortis. Suspendisse ac malesuada leo, sed iaculis libero. Integer enim massa, dapibus ut blandit rhoncus, aliquam ut ex. Maecenas convallis velit a diam hendrerit laoreet. Donec tincidunt, nisl eget commodo volutpat, diam arcu egestas enim, nec ultrices nulla magna at purus. Praesent ut sapien velit. Donec nisi libero, ultrices sit amet volutpat quis, luctus ac nisl. Donec a dui mauris. Etiam venenatis condimentum odio ut dapibus. Pellentesque pulvinar aliquam lectus, ut luctus risus laoreet ac. Integer sed fermentum elit. Nam maximus, odio vitae commodo facilisis, odio mi vulputate odio, vitae aliquam nulla augue eu odio. Donec venenatis ut diam sit amet sagittis. Proin condimentum felis ac purus viverra fringilla. Fusce a quam eget leo sodales aliquam et vitae erat. Quisque volutpat non mauris ut gravida. Nunc at ornare purus, ut iaculis sem. Proin a mauris eu leo ornare commodo eu et diam.",
      },
    ],
  },
  {
    pageId: 1,
    sectionId: "who",
    title: "Who We Are",
    content: [
      {
        type: "p",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        type: "p",
        text:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      },
      {
        type: "p",
        text:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
      },
    ],
  },
  {
    pageId: 1,
    sectionId: "board",
    title: "Our Board",
    content: [
      {
        type: "p",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        type: "p",
        text:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      },
      {
        type: "p",
        text:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
      },
    ],
  },
  {
    pageId: 1,
    sectionId: "features",
    title: "Site's Features",
    content: [
      {
        type: "p",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        type: "p",
        text:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      },
      {
        type: "p",
        text:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
      },
    ],
  },
  {
    pageId: 1,
    sectionId: "membership",
    title: "Membership",
    content: [
      {
        type: "p",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        type: "p",
        text:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      },
      {
        type: "p",
        text:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
      },
    ],
  },
  {
    pageId: 1,
    sectionId: "contact",
    title: "Contact us",
    content: [
      {
        type: "p",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        type: "p",
        text:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      },
    ],
  },
  {
    pageId: 1,
    sectionId: "blog",
    title: "Blog",
    content: [
      {
        type: "p",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        type: "p",
        text:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      },
      {
        type: "p",
        text:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
      },
      {
        type: "p",
        text:
          "Vestibulum id euismod augue, nec ultrices mi. Mauris dolor arcu, convallis sed auctor a, maximus sit amet purus. Aenean sed ultrices nulla. Sed sodales mattis leo at congue. In mattis ipsum non lacus venenatis, et placerat dui convallis. Aliquam aliquet, dui nec tristique dapibus, ex nisi tempor ligula, id finibus massa neque nec tellus. Vestibulum dapibus arcu id lacus sodales elementum. Vivamus id erat ante. Curabitur nec ante ex.",
      },
      {
        type: "p",
        text:
          "Cras nec justo congue, facilisis erat vel, porta enim. Sed imperdiet bibendum purus, at tempus lacus interdum eget. Cras et est a ex volutpat faucibus. Nulla rhoncus purus ac lobortis auctor. Aenean consequat libero mi, eget laoreet quam dictum molestie. Morbi eget quam vitae neque consequat viverra sed non turpis. Vivamus ac faucibus nunc, et lobortis tortor. Donec gravida commodo ultrices. Aenean venenatis fringilla ipsum, ut egestas lectus imperdiet et. Nulla sit amet condimentum urna. Vivamus fermentum augue eu neque vestibulum, vel ullamcorper lorem elementum. Quisque sit amet sagittis leo, id placerat ligula. Mauris nec enim et sem bibendum lobortis. Suspendisse ac malesuada leo, sed iaculis libero. Integer enim massa, dapibus ut blandit rhoncus, aliquam ut ex. Maecenas convallis velit a diam hendrerit laoreet. Donec tincidunt, nisl eget commodo volutpat, diam arcu egestas enim, nec ultrices nulla magna at purus. Praesent ut sapien velit. Donec nisi libero, ultrices sit amet volutpat quis, luctus ac nisl. Donec a dui mauris. Etiam venenatis condimentum odio ut dapibus. Pellentesque pulvinar aliquam lectus, ut luctus risus laoreet ac. Integer sed fermentum elit. Nam maximus, odio vitae commodo facilisis, odio mi vulputate odio, vitae aliquam nulla augue eu odio. Donec venenatis ut diam sit amet sagittis. Proin condimentum felis ac purus viverra fringilla. Fusce a quam eget leo sodales aliquam et vitae erat. Quisque volutpat non mauris ut gravida. Nunc at ornare purus, ut iaculis sem. Proin a mauris eu leo ornare commodo eu et diam.",
      },
    ],
  },
  {
    pageId: 2,
    sectionId: "mission",
    title: "Our Mission",
    content: [
      {
        type: "p",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        type: "p",
        text:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      },
      {
        type: "p",
        text:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
      },
      {
        type: "p",
        text:
          "Vestibulum id euismod augue, nec ultrices mi. Mauris dolor arcu, convallis sed auctor a, maximus sit amet purus. Aenean sed ultrices nulla. Sed sodales mattis leo at congue. In mattis ipsum non lacus venenatis, et placerat dui convallis. Aliquam aliquet, dui nec tristique dapibus, ex nisi tempor ligula, id finibus massa neque nec tellus. Vestibulum dapibus arcu id lacus sodales elementum. Vivamus id erat ante. Curabitur nec ante ex.",
      },
      {
        type: "p",
        text:
          "Cras nec justo congue, facilisis erat vel, porta enim. Sed imperdiet bibendum purus, at tempus lacus interdum eget. Cras et est a ex volutpat faucibus. Nulla rhoncus purus ac lobortis auctor. Aenean consequat libero mi, eget laoreet quam dictum molestie. Morbi eget quam vitae neque consequat viverra sed non turpis. Vivamus ac faucibus nunc, et lobortis tortor. Donec gravida commodo ultrices. Aenean venenatis fringilla ipsum, ut egestas lectus imperdiet et. Nulla sit amet condimentum urna. Vivamus fermentum augue eu neque vestibulum, vel ullamcorper lorem elementum. Quisque sit amet sagittis leo, id placerat ligula. Mauris nec enim et sem bibendum lobortis. Suspendisse ac malesuada leo, sed iaculis libero. Integer enim massa, dapibus ut blandit rhoncus, aliquam ut ex. Maecenas convallis velit a diam hendrerit laoreet. Donec tincidunt, nisl eget commodo volutpat, diam arcu egestas enim, nec ultrices nulla magna at purus. Praesent ut sapien velit. Donec nisi libero, ultrices sit amet volutpat quis, luctus ac nisl. Donec a dui mauris. Etiam venenatis condimentum odio ut dapibus. Pellentesque pulvinar aliquam lectus, ut luctus risus laoreet ac. Integer sed fermentum elit. Nam maximus, odio vitae commodo facilisis, odio mi vulputate odio, vitae aliquam nulla augue eu odio. Donec venenatis ut diam sit amet sagittis. Proin condimentum felis ac purus viverra fringilla. Fusce a quam eget leo sodales aliquam et vitae erat. Quisque volutpat non mauris ut gravida. Nunc at ornare purus, ut iaculis sem. Proin a mauris eu leo ornare commodo eu et diam.",
      },
    ],
  },
  {
    pageId: 2,
    sectionId: "who",
    title: "Who We Are",
    content: [
      {
        type: "p",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        type: "p",
        text:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      },
      {
        type: "p",
        text:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
      },
    ],
  },
  {
    pageId: 2,
    sectionId: "board",
    title: "Our Board",
    content: [
      {
        type: "p",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        type: "p",
        text:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      },
      {
        type: "p",
        text:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
      },
    ],
  },
  {
    pageId: 2,
    sectionId: "features",
    title: "Site's Features",
    content: [
      {
        type: "p",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        type: "p",
        text:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      },
      {
        type: "p",
        text:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
      },
    ],
  },
  {
    pageId: 2,
    sectionId: "membership",
    title: "Membership",
    content: [
      {
        type: "p",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        type: "p",
        text:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      },
      {
        type: "p",
        text:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
      },
    ],
  },
  {
    pageId: 2,
    sectionId: "contact",
    title: "Contact us",
    content: [
      {
        type: "p",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        type: "p",
        text:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      },
    ],
  },
  {
    pageId: 2,
    sectionId: "blog",
    title: "Blog",
    content: [
      {
        type: "p",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        type: "p",
        text:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      },
      {
        type: "p",
        text:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
      },
      {
        type: "p",
        text:
          "Vestibulum id euismod augue, nec ultrices mi. Mauris dolor arcu, convallis sed auctor a, maximus sit amet purus. Aenean sed ultrices nulla. Sed sodales mattis leo at congue. In mattis ipsum non lacus venenatis, et placerat dui convallis. Aliquam aliquet, dui nec tristique dapibus, ex nisi tempor ligula, id finibus massa neque nec tellus. Vestibulum dapibus arcu id lacus sodales elementum. Vivamus id erat ante. Curabitur nec ante ex.",
      },
      {
        type: "p",
        text:
          "Cras nec justo congue, facilisis erat vel, porta enim. Sed imperdiet bibendum purus, at tempus lacus interdum eget. Cras et est a ex volutpat faucibus. Nulla rhoncus purus ac lobortis auctor. Aenean consequat libero mi, eget laoreet quam dictum molestie. Morbi eget quam vitae neque consequat viverra sed non turpis. Vivamus ac faucibus nunc, et lobortis tortor. Donec gravida commodo ultrices. Aenean venenatis fringilla ipsum, ut egestas lectus imperdiet et. Nulla sit amet condimentum urna. Vivamus fermentum augue eu neque vestibulum, vel ullamcorper lorem elementum. Quisque sit amet sagittis leo, id placerat ligula. Mauris nec enim et sem bibendum lobortis. Suspendisse ac malesuada leo, sed iaculis libero. Integer enim massa, dapibus ut blandit rhoncus, aliquam ut ex. Maecenas convallis velit a diam hendrerit laoreet. Donec tincidunt, nisl eget commodo volutpat, diam arcu egestas enim, nec ultrices nulla magna at purus. Praesent ut sapien velit. Donec nisi libero, ultrices sit amet volutpat quis, luctus ac nisl. Donec a dui mauris. Etiam venenatis condimentum odio ut dapibus. Pellentesque pulvinar aliquam lectus, ut luctus risus laoreet ac. Integer sed fermentum elit. Nam maximus, odio vitae commodo facilisis, odio mi vulputate odio, vitae aliquam nulla augue eu odio. Donec venenatis ut diam sit amet sagittis. Proin condimentum felis ac purus viverra fringilla. Fusce a quam eget leo sodales aliquam et vitae erat. Quisque volutpat non mauris ut gravida. Nunc at ornare purus, ut iaculis sem. Proin a mauris eu leo ornare commodo eu et diam.",
      },
    ],
  },
  {
    pageId: 3,
    sectionId: "mission",
    title: "Our Mission",
    content: [
      {
        type: "p",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        type: "p",
        text:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      },
      {
        type: "p",
        text:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
      },
      {
        type: "p",
        text:
          "Vestibulum id euismod augue, nec ultrices mi. Mauris dolor arcu, convallis sed auctor a, maximus sit amet purus. Aenean sed ultrices nulla. Sed sodales mattis leo at congue. In mattis ipsum non lacus venenatis, et placerat dui convallis. Aliquam aliquet, dui nec tristique dapibus, ex nisi tempor ligula, id finibus massa neque nec tellus. Vestibulum dapibus arcu id lacus sodales elementum. Vivamus id erat ante. Curabitur nec ante ex.",
      },
      {
        type: "p",
        text:
          "Cras nec justo congue, facilisis erat vel, porta enim. Sed imperdiet bibendum purus, at tempus lacus interdum eget. Cras et est a ex volutpat faucibus. Nulla rhoncus purus ac lobortis auctor. Aenean consequat libero mi, eget laoreet quam dictum molestie. Morbi eget quam vitae neque consequat viverra sed non turpis. Vivamus ac faucibus nunc, et lobortis tortor. Donec gravida commodo ultrices. Aenean venenatis fringilla ipsum, ut egestas lectus imperdiet et. Nulla sit amet condimentum urna. Vivamus fermentum augue eu neque vestibulum, vel ullamcorper lorem elementum. Quisque sit amet sagittis leo, id placerat ligula. Mauris nec enim et sem bibendum lobortis. Suspendisse ac malesuada leo, sed iaculis libero. Integer enim massa, dapibus ut blandit rhoncus, aliquam ut ex. Maecenas convallis velit a diam hendrerit laoreet. Donec tincidunt, nisl eget commodo volutpat, diam arcu egestas enim, nec ultrices nulla magna at purus. Praesent ut sapien velit. Donec nisi libero, ultrices sit amet volutpat quis, luctus ac nisl. Donec a dui mauris. Etiam venenatis condimentum odio ut dapibus. Pellentesque pulvinar aliquam lectus, ut luctus risus laoreet ac. Integer sed fermentum elit. Nam maximus, odio vitae commodo facilisis, odio mi vulputate odio, vitae aliquam nulla augue eu odio. Donec venenatis ut diam sit amet sagittis. Proin condimentum felis ac purus viverra fringilla. Fusce a quam eget leo sodales aliquam et vitae erat. Quisque volutpat non mauris ut gravida. Nunc at ornare purus, ut iaculis sem. Proin a mauris eu leo ornare commodo eu et diam.",
      },
    ],
  },
  {
    pageId: 3,
    sectionId: "who",
    title: "Who We Are",
    content: [
      {
        type: "p",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        type: "p",
        text:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      },
      {
        type: "p",
        text:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
      },
    ],
  },
  {
    pageId: 3,
    sectionId: "board",
    title: "Our Board",
    content: [
      {
        type: "p",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        type: "p",
        text:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      },
      {
        type: "p",
        text:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
      },
    ],
  },
  {
    pageId: 3,
    sectionId: "features",
    title: "Site's Features",
    content: [
      {
        type: "p",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        type: "p",
        text:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      },
      {
        type: "p",
        text:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
      },
    ],
  },
  {
    pageId: 3,
    sectionId: "membership",
    title: "Membership",
    content: [
      {
        type: "p",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        type: "p",
        text:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      },
      {
        type: "p",
        text:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
      },
    ],
  },
  {
    pageId: 3,
    sectionId: "contact",
    title: "Contact us",
    content: [
      {
        type: "p",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        type: "p",
        text:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      },
    ],
  },
  {
    pageId: 3,
    sectionId: "blog",
    title: "Blog",
    content: [
      {
        type: "p",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        type: "p",
        text:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      },
      {
        type: "p",
        text:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
      },
      {
        type: "p",
        text:
          "Vestibulum id euismod augue, nec ultrices mi. Mauris dolor arcu, convallis sed auctor a, maximus sit amet purus. Aenean sed ultrices nulla. Sed sodales mattis leo at congue. In mattis ipsum non lacus venenatis, et placerat dui convallis. Aliquam aliquet, dui nec tristique dapibus, ex nisi tempor ligula, id finibus massa neque nec tellus. Vestibulum dapibus arcu id lacus sodales elementum. Vivamus id erat ante. Curabitur nec ante ex.",
      },
      {
        type: "p",
        text:
          "Cras nec justo congue, facilisis erat vel, porta enim. Sed imperdiet bibendum purus, at tempus lacus interdum eget. Cras et est a ex volutpat faucibus. Nulla rhoncus purus ac lobortis auctor. Aenean consequat libero mi, eget laoreet quam dictum molestie. Morbi eget quam vitae neque consequat viverra sed non turpis. Vivamus ac faucibus nunc, et lobortis tortor. Donec gravida commodo ultrices. Aenean venenatis fringilla ipsum, ut egestas lectus imperdiet et. Nulla sit amet condimentum urna. Vivamus fermentum augue eu neque vestibulum, vel ullamcorper lorem elementum. Quisque sit amet sagittis leo, id placerat ligula. Mauris nec enim et sem bibendum lobortis. Suspendisse ac malesuada leo, sed iaculis libero. Integer enim massa, dapibus ut blandit rhoncus, aliquam ut ex. Maecenas convallis velit a diam hendrerit laoreet. Donec tincidunt, nisl eget commodo volutpat, diam arcu egestas enim, nec ultrices nulla magna at purus. Praesent ut sapien velit. Donec nisi libero, ultrices sit amet volutpat quis, luctus ac nisl. Donec a dui mauris. Etiam venenatis condimentum odio ut dapibus. Pellentesque pulvinar aliquam lectus, ut luctus risus laoreet ac. Integer sed fermentum elit. Nam maximus, odio vitae commodo facilisis, odio mi vulputate odio, vitae aliquam nulla augue eu odio. Donec venenatis ut diam sit amet sagittis. Proin condimentum felis ac purus viverra fringilla. Fusce a quam eget leo sodales aliquam et vitae erat. Quisque volutpat non mauris ut gravida. Nunc at ornare purus, ut iaculis sem. Proin a mauris eu leo ornare commodo eu et diam.",
      },
    ],
  },
];
//siteGrid --> siteGeneralCMS table
const products = [
  {
    id: 1,
    storeId: 0,
    categoryId: "cat1",
    type: "store",
    name: "Bags Store",
    coverImage: "stores/bag-store.jpg",
    hoverImage: "pbags.png",
  },
  {
    id: 2,
    storeId: 0,
    categoryId: "cat1",
    type: "store",
    name: "Glasses Store",
    coverImage: "stores/glasses-store.jpg",
    hoverImage: "express-optical.png",
  },
  {
    id: 3,
    storeId: 0,
    categoryId: "cat2",
    type: "store",
    name: "Sports Store",
    coverImage: "stores/sports-store.jpg",
    hoverImage: "sports-dace.jpg",
  },
  {
    id: 4,
    storeId: 1,
    type: "product",
    categoryId: "cat7",
    color: "Beige",
    size: "Small",
    style: "ST1898",
    material: "Synthetic",
    name: "Bag 1",
    coverImage: "bag1.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ",
    price: "90",
    specifications:
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse c",
    warranties:
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse c",
    attributes: [
      { name: "Color", values: ["red", "white", "black"] },
      { name: "size", values: ["small", "medium", "big"] },
      { name: "style", values: ["ST1898", "ST18999", "ST1800", "ST19000"] },
      { name: "material", values: ["Synthetic", "Mat", "Scrii", "PI"] },
    ],
    gallery: [
      {
        img: "bag-gallery1.jpg",
        text: null,
      },
      {
        img: "bag-gallery3.jpg",
        text: null,
      },
    ],
  },
  {
    id: 5,
    storeId: 1,
    type: "product",
    categoryId: "cat7",
    color: "Red",
    size: "Medium",
    style: "ST1898",
    material: "Synthetic",
    name: "Bag 2",
    coverImage: "bag2.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ",
    price: "90",
    specifications:
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse c",
    warranties:
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse c",
    category: "1",
    attributes: [
      { name: "Color", values: ["red", "white", "black"] },
      { name: "size", values: ["small", "medium", "big"] },
      { name: "style", values: ["ST1898", "ST18999", "ST1800", "ST19000"] },
      { name: "material", values: ["Synthetic", "Mat", "Scrii", "PI"] },
    ],
  },
  {
    id: 6,
    storeId: 1,
    type: "product",
    categoryId: "cat7",
    color: "Yellow",
    size: "Medium",
    style: "ST1898",
    material: "Synthetic",
    name: "Bag 3",
    coverImage: "bag3.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ",
    price: "90",
    specifications:
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse c",
    warranties:
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse c",
    category: "1",
    attributes: [
      { name: "Color", values: ["red", "white", "black"] },
      { name: "size", values: ["small", "medium", "big"] },
      { name: "style", values: ["ST1898", "ST18999", "ST1800", "ST19000"] },
      { name: "material", values: ["Synthetic", "Mat", "Scrii", "PI"] },
    ],
  },
  {
    id: 7,
    storeId: 1,
    type: "product",
    categoryId: "cat7",
    color: "Black",
    size: "Medium",
    style: "ST1898",
    material: "Synthetic",
    name: "Bag 4",
    coverImage: "bag4.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ",
    price: "90",
    specifications:
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse c",
    warranties:
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse c",
    category: "1",
    attributes: [
      { name: "Color", values: ["red", "white", "black"] },
      { name: "size", values: ["small", "medium", "big"] },
      { name: "style", values: ["ST1898", "ST18999", "ST1800", "ST19000"] },
      { name: "material", values: ["Synthetic", "Mat", "Scrii", "PI"] },
    ],
  },
  {
    id: 8,
    storeId: 1,
    type: "product",
    categoryId: "cat8",
    color: "Beige",
    size: "Medium",
    style: "ST1898",
    material: "Synthetic",
    name: "Bag 5",
    coverImage: "bag5.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ",
    price: "90",
    specifications:
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse c",
    warranties:
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse c",
    category: "1",
    attributes: [
      { name: "Color", values: ["red", "white", "black"] },
      { name: "size", values: ["small", "medium", "big"] },
      { name: "style", values: ["ST1898", "ST18999", "ST1800", "ST19000"] },
      { name: "material", values: ["Synthetic", "Mat", "Scrii", "PI"] },
    ],
  },
  {
    id: 9,
    storeId: 1,
    type: "product",
    categoryId: "cat8",
    color: "Blue",
    size: "Medium",
    style: "ST1898",
    material: "Synthetic",
    name: "Bag 6",
    coverImage: "bag6.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ",
    price: "90",
    specifications:
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse c",
    warranties:
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse c",
    category: "1",
    attributes: [
      { name: "Color", values: ["red", "white", "black"] },
      { name: "size", values: ["small", "medium", "big"] },
      { name: "style", values: ["ST1898", "ST18999", "ST1800", "ST19000"] },
      { name: "material", values: ["Synthetic", "Mat", "Scrii", "PI"] },
    ],
  },
  {
    id: 10,
    categoryId: "cat8",
    storeId: 1,

    type: "product",
    color: "Blue",
    size: "Medium",
    style: "ST1898",
    material: "Synthetic",
    name: "Bag 7",
    coverImage: "bag7.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ",
    price: "90",
    specifications:
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse c",
    warranties:
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse c",
    category: "1",
    attributes: [
      { name: "Color", values: ["red", "white", "black"] },
      { name: "size", values: ["small", "medium", "big"] },
      { name: "style", values: ["ST1898", "ST18999", "ST1800", "ST19000"] },
      { name: "material", values: ["Synthetic", "Mat", "Scrii", "PI"] },
    ],
  },
  {
    id: 11,
    categoryId: "cat8",
    storeId: 1,
    type: "product",
    color: "Pink",
    size: "Medium",
    style: "ST1898",
    material: "Synthetic",
    name: "Bag 8",
    coverImage: "bag8.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ",
    price: "90",
    specifications:
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse c",
    warranties:
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse c",
    category: "1",
    attributes: [
      { name: "Color", values: ["red", "white", "black"] },
      { name: "size", values: ["small", "medium", "big"] },
      { name: "style", values: ["ST1898", "ST18999", "ST1800", "ST19000"] },
      { name: "material", values: ["Synthetic", "Mat", "Scrii", "PI"] },
    ],
  },
  {
    id: 12,
    storeId: 2,
    type: "product",
    categoryId: "cat8",
    name: "Product 1",
    coverImage: "puma1.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ",
    price: "90",
    specifications:
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse c",
    warranties:
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse c",
    category: "1",
    attributes: [
      { name: "Color", values: ["red", "white", "black"] },
      { name: "size", values: ["small", "medium", "big"] },
      { name: "style", values: ["ST1898", "ST18999", "ST1800", "ST19000"] },
      { name: "material", values: ["Synthetic", "Mat", "Scrii", "PI"] },
    ],
  },
  {
    id: 13,
    categoryId: "cat8",
    storeId: 3,
    type: "product",
    name: "Product 1",
    coverImage: "puma1.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse c",
    price: "90",
    specifications: "",
    category: "1",
    attributes: [
      { color: ["red", "white", "black"] },
      { size: ["small", "medium", "big"] },
      { style: ["ST1898", "ST18999", "ST1800", "ST19000"] },
      { material: ["Synthetic", "Mat", "Scrii", "PI"] },
    ],
  },
  {
    id: 14,
    storeId: 3,
    type: "product",
    name: "Product 2",
    coverImage: "puma22.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse c",
    price: "90",
    specifications: "",
    category: "1",
    attributes: [
      { color: ["red", "white", "black"] },
      { size: ["small", "medium", "big"] },
      { style: ["ST1898", "ST18999", "ST1800", "ST19000"] },
      { material: ["Synthetic", "Mat", "Scrii", "PI"] },
    ],
  },
  {
    id: 15,
    storeId: 3,
    type: "product",
    name: "Product 3",
    coverImage: "puma23.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse c",
    price: "90",
    specifications: "",
    category: "1",
    attributes: [
      { color: ["red", "white", "black"] },
      { size: ["small", "medium", "big"] },
      { style: ["ST1898", "ST18999", "ST1800", "ST19000"] },
      { material: ["Synthetic", "Mat", "Scrii", "PI"] },
    ],
  },
  {
    id: 16,
    storeId: 3,
    type: "product",
    name: "Product 4",
    coverImage: "puma24.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse c",
    price: "90",
    specifications: "",
    category: "1",
    attributes: [
      { color: ["red", "white", "black"] },
      { size: ["small", "medium", "big"] },
      { style: ["ST1898", "ST18999", "ST1800", "ST19000"] },
      { material: ["Synthetic", "Mat", "Scrii", "PI"] },
    ],
  },
  {
    id: 17,
    storeId: 3,
    type: "product",
    name: "Product 5",
    coverImage: "puma25.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse c",
    price: "90",
    specifications: "",
    category: "1",
    attributes: [
      { color: ["red", "white", "black"] },
      { size: ["small", "medium", "big"] },
      { style: ["ST1898", "ST18999", "ST1800", "ST19000"] },
      { material: ["Synthetic", "Mat", "Scrii", "PI"] },
    ],
  },
  {
    id: 18,
    storeId: 3,
    type: "product",
    name: "Product 6",
    coverImage: "puma26.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse c",
    price: "90",
    specifications: "",
    category: "1",
    attributes: [
      { color: ["red", "white", "black"] },
      { size: ["small", "medium", "big"] },
      { style: ["ST1898", "ST18999", "ST1800", "ST19000"] },
      { material: ["Synthetic", "Mat", "Scrii", "PI"] },
    ],
  },
  {
    id: 19,
    storeId: 3,
    type: "product",
    name: "Product 7",
    coverImage: "puma27.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse c",
    price: "90",
    specifications: "",
    category: "1",
    attributes: [
      { color: ["red", "white", "black"] },
      { size: ["small", "medium", "big"] },
      { style: ["ST1898", "ST18999", "ST1800", "ST19000"] },
      { material: ["Synthetic", "Mat", "Scrii", "PI"] },
    ],
  },
  {
    id: 20,
    storeId: 3,
    type: "product",
    name: "Product 8",
    coverImage: "puma28.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse c",
    price: "90",
    specifications: "",
    category: "1",
    attributes: [
      { color: ["red", "white", "black"] },
      { size: ["small", "medium", "big"] },
      { style: ["ST1898", "ST18999", "ST1800", "ST19000"] },
      { material: ["Synthetic", "Mat", "Scrii", "PI"] },
    ],
  },
  {
    id: 21,
    storeId: 3,
    type: "product",
    name: "Product 9",
    coverImage: "puma29.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse c",
    price: "90",
    specifications: "",
    category: "1",
    attributes: [
      { color: ["red", "white", "black"] },
      { size: ["small", "medium", "big"] },
      { style: ["ST1898", "ST18999", "ST1800", "ST19000"] },
      { material: ["Synthetic", "Mat", "Scrii", "PI"] },
    ],
  },
  {
    id: 22,
    storeId: 3,
    type: "product",
    name: "Product 10",
    coverImage: "puma31.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse c",
    price: "90",
    specifications: "",
    category: "1",
    attributes: [
      { color: ["red", "white", "black"] },
      { size: ["small", "medium", "big"] },
      { style: ["ST1898", "ST18999", "ST1800", "ST19000"] },
      { material: ["Synthetic", "Mat", "Scrii", "PI"] },
    ],
  },
  {
    id: 23,
    storeId: 3,
    type: "product",
    name: "Product 11",
    coverImage: "puma32.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse c",
    price: "90",
    specifications: "",
    category: "1",
    attributes: [
      { color: ["red", "white", "black"] },
      { size: ["small", "medium", "big"] },
      { style: ["ST1898", "ST18999", "ST1800", "ST19000"] },
      { material: ["Synthetic", "Mat", "Scrii", "PI"] },
    ],
  },
  {
    id: 24,
    storeId: 3,
    type: "product",
    name: "Product 12",
    coverImage: "puma33.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse c",
    price: "90",
    specifications: "",
    category: "1",
    attributes: [
      { color: ["red", "white", "black"] },
      { size: ["small", "medium", "big"] },
      { style: ["ST1898", "ST18999", "ST1800", "ST19000"] },
      { material: ["Synthetic", "Mat", "Scrii", "PI"] },
    ],
  },
];
// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  pages,
  products,
  sectionsContent,
};
