const pages = [
  {
    id: 0,
    name: "Website Page",
    logo: "bevariante1.png",
    coverImage: "",
    description: "This is the website home page",
    blogLink: "/blog",
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
      { type: "link", label: "Blog", url: "", action: "" },
      { type: "link", label: "Login", url: "", action: "login" },
    ],
    styles: {
      body: {
        background: "rgb(255,255,255)",
        fontFamily: "Verdana",
      },
      header: {
        topBar: { background: "rgb(4, 60, 148)" },
        headerActive: {
          color: "rgb(255,255,255)",
        },
        headerMenu: {
          color: "rgb(255,255,255)",
        },
        styledMenu: {
          paper: {
            backgroundColor: "rgb(4, 60, 148)",
            color: "rgb(255,255,255)",
          },
        },
        styledMenuItem: {
          root: {
            hover: {
              backgroundColor: "rgb(4, 60, 148)",
            },
          },
        },
        contentModal: {
          contentModalsHeader: {
            background: "rgb(4, 60, 148)",
            color: "rgb(255,255,255)",
          },
          contentModalsBody: {
            background: "rgb(255,255,255)",
          },
          closeButton: {
            root: {
              color: "rgb(255,255,255)",
              backgroundColor: "rgb(4, 60, 148)",
              hover: {
                backgroundColor: "#350909",
              },
            },
          },
        },
        mobileNavBar: {
          paper: {
            background: "rgb(4, 60, 148)",
            color: "rgb(255,255,255)",
          },
          list: {
            width: "180px",
          },
        },
      },
      footer: {
        bottomBar: {
          background: "rgb(4, 60, 148)",
          color: "rgb(255,255,255)",
          fontSize: "13px",
        },
        footerLinks: {
          color: "rgb(255,255,255)",
        },
      },
      modalStyles: {
        header: {
          background: "rgb(4, 60, 148)",
          color: "rgb(255,255,255)",
        },
        body: {
          background: "rgb(255,255,255)",
        },
        closeButton: {
          root: {
            color: "rgb(255,255,255)",
            backgroundColor: "rgb(4, 60, 148)",
            hover: {
              backgroundColor: "#350909",
            },
          },
        },
      },
      detailsModal: {
        detailsHeader: {
          background: "rgb(4, 60, 148)",
          color: "rgb(255,255,255)",
        },
        detailsBody: {
          background: "rgb(255,255,255)",
        },
        closeButton: {
          root: {
            color: "rgb(255,255,255)",
            backgroundColor: "rgb(4, 60, 148)",
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
      social: [
        { link: "http://facebook.com" },
        { link: "http://twitter.com" },
        { link: "http://instagram.com" },
        { link: "http://youtube.com" },
      ],
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
    blogLink: "http://espndeportes.com",
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
        background: "rgb(255,255,255)",
        fontFamily: "Verdana",
        color: "rgb(0,0,0)",
      },
      header: {
        topBar: { background: "rgb(37, 47, 68)" },
        headerActive: {
          color: "rgb(255,255,255)",
        },
        headerMenu: {
          color: "rgb(255,255,255)",
        },
        styledMenu: {
          paper: {
            backgroundColor: "rgb(37, 47, 68)",
            color: "rgb(255,255,255)",
          },
        },
        styledMenuItem: {
          root: {
            hover: {
              backgroundColor: "rgba(37,47,68,0.1)",
            },
          },
        },
        contentModal: {
          contentModalsHeader: {
            background: "#2E3B55",
            color: "rgb(255,255,255)",
          },
          contentModalsBody: {
            background: "rgb(255,255,255)",
          },
          closeButton: {
            root: {
              color: "rgb(255,255,255)",
              backgroundColor: "#2E3B55",
              hover: {
                backgroundColor: "rgb(37, 47, 68)",
              },
            },
          },
        },
        mobileNavBar: {
          paper: {
            background: "rgb(37, 47, 68)",
            color: "rgb(255,255,255)",
          },
          list: {
            width: "180px",
          },
        },
      },
      footer: {
        bottomBar: {
          background: "rgb(37, 47, 68)",
          color: "rgb(255,255,255)",
          fontSize: "13px",
        },
        footerLinks: {
          color: "rgb(255,255,255)",
        },
      },
      modalStyles: {
        header: {
          background: "rgb(37, 47, 68)",
          color: "rgb(255,255,255)",
        },
        body: {
          background: "rgb(255,255,255)",
        },
        closeButton: {
          root: {
            color: "rgb(255,255,255)",
            backgroundColor: "#2E3B55",
            hover: {
              backgroundColor: "rgb(37, 47, 68)",
            },
          },
        },
      },
      detailsModal: {
        detailsHeader: {
          background: "#2E3B55",
          color: "rgb(255,255,255)",
        },
        detailsBody: {
          background: "rgb(255,255,255)",
        },
        closeButton: {
          root: {
            color: "rgb(255,255,255)",
            backgroundColor: "#2E3B55",
            hover: {
              backgroundColor: "rgb(37, 47, 68)",
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
            values: [
              { id: "colR", name: "Red" },
              { id: "colY", name: "Yellow" },
              { id: "colBk", name: "Black" },
              { id: "colBl", name: "Blue" },
              { id: "colPk", name: "Pink" },
              { id: "colBg", name: "Beige" },
            ],
          },
          {
            id: "f3",
            name: "Style",
            values: [
              { id: "ST1898", name: "ST1898" },
              { id: "ST18999", name: "ST18999" },
              { id: "ST1800", name: "ST1800" },
              { id: "ST19000", name: "ST19000" },
            ],
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
            values: [
              { id: "colR", name: "Red" },
              { id: "colY", name: "Yellow" },
              { id: "colBk", name: "Black" },
              { id: "colBl", name: "Blue" },
              { id: "colPk", name: "Pink" },
              { id: "colBg", name: "Beige" },
            ],
          },
          {
            id: "f2",
            name: "Size",
            values: [
              { id: "sm", name: "small" },
              { id: "md", name: "medium" },
              { id: "bg", name: "big" },
            ],
          },

          {
            id: "f3",
            name: "Style",
            values: [
              { id: "ST1898", name: "ST1898" },
              { id: "ST18999", name: "ST18999" },
              { id: "ST1800", name: "ST1800" },
              { id: "ST19000", name: "ST19000" },
            ],
          },
          {
            id: "f4",
            name: "Material",
            values: ["Synthetic", "Mat", "Scrii", "PI"],
            values: [
              { id: "sy", name: "Synthetic" },
              { id: "mt", name: "Mat" },
              { id: "scr", name: "Scrii" },
              { id: "pi", name: "PI" },
            ],
          },
        ],
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
      social: [
        { link: "http://facebook.com" },
        { link: "http://twitter.com" },
        { link: "http://instagram.com" },
        { link: "" },
      ],
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
    blogLink: "",
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
        background: "rgb(255,255,255)",
        fontFamily: "Verdana",
      },
      header: {
        topBar: { background: "rgb(96, 124, 60)" },

        headerActive: {
          color: "rgb(255,255,255)",
        },
        headerMenu: {
          color: "rgb(255,255,255)",
        },
        styledMenu: {
          paper: {
            backgroundColor: "rgb(96, 124, 60)",
            color: "rgb(255,255,255)",
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
            background: "rgb(96, 124, 60)",
            color: "rgb(255,255,255)",
          },
          contentModalsBody: {
            background: "rgb(255,255,255)",
          },
          closeButton: {
            root: {
              color: "rgb(255,255,255)",
              backgroundColor: "rgb(96, 124, 60)",
              hover: {
                backgroundColor: "#4d6330",
              },
            },
          },
        },
        mobileNavBar: {
          paper: {
            background: "rgb(96, 124, 60)",
            color: "rgb(255,255,255)",
          },
          list: {
            width: "180px",
          },
        },
      },
      footer: {
        bottomBar: {
          background: "rgb(96, 124, 60)",
          color: "rgb(255,255,255)",
          fontSize: "13px",
        },
        footerLinks: {
          color: "rgb(255,255,255)",
        },
      },
      modalStyles: {
        header: {
          background: "rgb(96, 124, 60)",
          color: "rgb(255,255,255)",
        },
        body: {
          background: "rgb(255,255,255)",
        },
        closeButton: {
          root: {
            color: "rgb(255,255,255)",
            backgroundColor: "rgb(96, 124, 60)",
            hover: {
              backgroundColor: "#4d6330",
            },
          },
        },
      },
      detailsModal: {
        detailsHeader: {
          background: "rgb(96, 124, 60)",
          color: "rgb(255,255,255)",
        },
        detailsBody: {
          background: "rgb(255,255,255)",
        },
        closeButton: {
          root: {
            color: "rgb(255,255,255)",
            backgroundColor: "rgb(96, 124, 60)",
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
        filters: [
          {
            id: "f1",
            name: "Color",
            values: [
              { id: "colR", name: "Red" },
              { id: "colY", name: "Yellow" },
              { id: "colBk", name: "Black" },
              { id: "colBl", name: "Blue" },
              { id: "colPk", name: "Pink" },
              { id: "colBg", name: "Beige" },
            ],
          },
          {
            id: "f3",
            name: "Style",
            values: [
              { id: "ST1898", name: "ST1898" },
              { id: "ST18999", name: "ST18999" },
              { id: "ST1800", name: "ST1800" },
              { id: "ST19000", name: "ST19000" },
            ],
          },
        ],
      },
      {
        id: "cat6",
        name: "Men",
        filters: [
          {
            id: "f1",
            name: "Color",
            values: [
              { id: "colR", name: "Red" },
              { id: "colY", name: "Yellow" },
              { id: "colBk", name: "Black" },
              { id: "colBl", name: "Blue" },
              { id: "colPk", name: "Pink" },
              { id: "colBg", name: "Beige" },
            ],
          },
          {
            id: "f3",
            name: "Style",
            values: [
              { id: "ST1898", name: "ST1898" },
              { id: "ST18999", name: "ST18999" },
              { id: "ST1800", name: "ST1800" },
              { id: "ST19000", name: "ST19000" },
            ],
          },
        ],
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
      social: [
        { link: "http://facebook.com" },
        { link: "http://twitter.com" },
        { link: "http://instagram.com" },
        { link: "http://youtube.com" },
      ],
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
    blogLink: "/store/3/blog",
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
          color: "rgb(255,255,255)",
        },
        headerMenu: {
          color: "rgb(255,255,255)",
        },
        styledMenu: {
          paper: {
            backgroundColor: "#000",
            color: "rgb(255,255,255)",
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
            color: "rgb(255,255,255)",
          },
          contentModalsBody: {
            background: "#FFC0CB",
          },
          closeButton: {
            root: {
              color: "rgb(255,255,255)",
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
            color: "rgb(255,255,255)",
          },
          list: {
            width: "180px",
          },
        },
      },
      footer: {
        bottomBar: {
          background: "#000",
          color: "rgb(255,255,255)",
          fontSize: "13px",
        },
        footerLinks: {
          color: "rgb(255,255,255)",
        },
      },
      modalStyles: {
        header: {
          background: "#000",
          color: "rgb(255,255,255)",
        },
        body: {
          background: "#FFC0CB",
        },
        closeButton: {
          root: {
            color: "rgb(255,255,255)",
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
          color: "rgb(255,255,255)",
        },
        detailsBody: {
          background: "#FFC0CB",
        },
        closeButton: {
          root: {
            color: "rgb(255,255,255)",
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
        filters: [
          {
            id: "f1",
            name: "Color",
            values: [
              { id: "colR", name: "Red" },
              { id: "colY", name: "Yellow" },
              { id: "colBk", name: "Black" },
              { id: "colBl", name: "Blue" },
              { id: "colPk", name: "Pink" },
              { id: "colBg", name: "Beige" },
            ],
          },
          {
            id: "f3",
            name: "Style",
            values: [
              { id: "ST1898", name: "ST1898" },
              { id: "ST18999", name: "ST18999" },
              { id: "ST1800", name: "ST1800" },
              { id: "ST19000", name: "ST19000" },
            ],
          },
        ],
      },
      {
        id: "cat6",
        name: "Men",
        filters: [
          {
            id: "f1",
            name: "Color",
            values: [
              { id: "colR", name: "Red" },
              { id: "colY", name: "Yellow" },
              { id: "colBk", name: "Black" },
              { id: "colBl", name: "Blue" },
              { id: "colPk", name: "Pink" },
              { id: "colBg", name: "Beige" },
            ],
          },
          {
            id: "f3",
            name: "Style",
            values: [
              { id: "ST1898", name: "ST1898" },
              { id: "ST18999", name: "ST18999" },
              { id: "ST1800", name: "ST1800" },
              { id: "ST19000", name: "ST19000" },
            ],
          },
        ],
      },
    ],
    filters: [
      {
        id: "f1",
        name: "Color",
        values: [
          { id: "colR", name: "Red" },
          { id: "colW", name: "rgb(255,255,255)" },
          { id: "colBk", name: "Black" },
        ],
      },
      {
        id: "f2",
        name: "size",
        values: [
          { id: "sm", name: "small" },
          { id: "md", name: "medium" },
          { id: "bg", name: "big" },
        ],
      },
      {
        id: "f3",
        name: "style",
        values: [
          { id: "ST1898", name: "ST1898" },
          { id: "ST18999", name: "ST18999" },
          { id: "ST1800", name: "ST1800" },
          { id: "ST19000", name: "ST19000" },
        ],
      },
      {
        id: "f4",
        name: "material",
        values: [
          { id: "sy", name: "Synthetic" },
          { id: "mt", name: "Mat" },
          { id: "scr", name: "Scrii" },
          { id: "pi", name: "PI" },
        ],
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
      social: [
        { link: "http://facebook.com" },
        { link: "http://twitter.com" },
        { link: "http://instagram.com" },
        { link: "http://youtube.com" },
      ],
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
    pageId: 0,
    sectionId: "history",
    title: "History",
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
    sectionId: "sitePolicies",
    title: "Site Policies",
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
    sectionId: "membershipPolicies",
    title: "Membership Policies",
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
    sectionId: "customerPolicies",
    title: "Customers Policies",
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
    sectionId: "visitorsPolicies",
    title: "Visitors Policies",
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
    pageId: 1,
    sectionId: "history",
    title: "History",
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
    sectionId: "sitePolicies",
    title: "Site Policies",
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
    sectionId: "membershipPolicies",
    title: "Membership Policies",
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
    sectionId: "customerPolicies",
    title: "Customers Policies",
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
    sectionId: "visitorsPolicies",
    title: "Visitors Policies",
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
    pageId: 2,
    sectionId: "history",
    title: "History",
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
    sectionId: "sitePolicies",
    title: "Site Policies",
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
    sectionId: "membershipPolicies",
    title: "Membership Policies",
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
    sectionId: "customerPolicies",
    title: "Customers Policies",
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
    sectionId: "visitorsPolicies",
    title: "Visitors Policies",
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
  {
    pageId: 3,
    sectionId: "history",
    title: "History",
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
    sectionId: "sitePolicies",
    title: "Site Policies",
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
    sectionId: "membershipPolicies",
    title: "Membership Policies",
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
    sectionId: "customerPolicies",
    title: "Customers Policies",
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
    sectionId: "visitorsPolicies",
    title: "Visitors Policies",
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
      { name: "Color", values: ["red", "rgb(255,255,255)", "black"] },
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
      { name: "Color", values: ["red", "rgb(255,255,255)", "black"] },
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
      { name: "Color", values: ["red", "rgb(255,255,255)", "black"] },
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
      { name: "Color", values: ["red", "rgb(255,255,255)", "black"] },
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
      { name: "Color", values: ["red", "rgb(255,255,255)", "black"] },
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
      { name: "Color", values: ["red", "rgb(255,255,255)", "black"] },
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
      { name: "Color", values: ["red", "rgb(255,255,255)", "black"] },
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
      { name: "Color", values: ["red", "rgb(255,255,255)", "black"] },
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
      { name: "Color", values: ["red", "rgb(255,255,255)", "black"] },
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
      { color: ["red", "rgb(255,255,255)", "black"] },
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
      { color: ["red", "rgb(255,255,255)", "black"] },
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
      { color: ["red", "rgb(255,255,255)", "black"] },
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
      { color: ["red", "rgb(255,255,255)", "black"] },
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
      { color: ["red", "rgb(255,255,255)", "black"] },
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
      { color: ["red", "rgb(255,255,255)", "black"] },
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
      { color: ["red", "rgb(255,255,255)", "black"] },
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
      { color: ["red", "rgb(255,255,255)", "black"] },
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
      { color: ["red", "rgb(255,255,255)", "black"] },
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
      { color: ["red", "rgb(255,255,255)", "black"] },
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
      { color: ["red", "rgb(255,255,255)", "black"] },
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
      { color: ["red", "rgb(255,255,255)", "black"] },
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
