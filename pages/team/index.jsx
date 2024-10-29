import Head from "next/head";
import TeamPage from "../../components/team/TeamPage"; // Adjust the import path as necessary

const teamData = {
  name: "Geek Room Plaksha Team",
  core: [
    {
      id: 1,
      profile: {
        name: "Akshat Gupta",
        profileLink: "https://www.linkedin.com/in/akshat-gupta-840740285/",
        image: "/images/team/Akshat.png"
      },
      role: "President"
    },
    {
      id: 2,
      profile: {
        name: "Raghav Sarna",
        profileLink: "https://www.linkedin.com/in/raghav-sarna-4789bb2b3/",
        image: "/images/team/raghav.jpg"
      },
      role: "Operations Lead"
    },
    {
      id: 3,
      profile: {
        name: "Christopher George",
        profileLink:
          "https://www.linkedin.com/in/christopher-george-13077a216/",
        image: "/images/team/Christopher.jpg"
      },
      role: "Tech Lead"
    },
    {
      id: 4,
      profile: {
        name: "Arunachalam Vijayanand",
        profileLink:
          "https://www.linkedin.com/in/arunachalam-vijayanand-42a263244/",
        image: "/images/team/arun.jpg"
      },
      role: "Emerging-Tech Lead"
    },
    {
      id: 5,
      profile: {
        name: "Manavi Nakra",
        profileLink: "#",
        image: "/images/team/manavi.jpg"
      },
      role: "Marketing & Design Lead"
    },
    {
      id: 6,
      profile: {
        name: "Trinav Talukdar",
        profileLink:
          "https://www.linkedin.com/in/trinav-prasad-talukdar-44b34428b/",
        image: "/images/team/trinav.jpg"
      },
      role: "Co-Content Lead"
    },
    {
      id: 7,
      profile: {
        name: "Suraj Dayma",
        profileLink: "https://www.linkedin.com/in/surajdayma/",
        image: "/images/team/Suraj.jpg"
      },
      role: "Co-Content Lead"
    },
    {
      id: 8,
      profile: {
        name: "Mudasir Rasheed",
        profileLink:
          "https://x.com/MudasirRasheed_?t=CzMYPmtNaLTXNxs2WLJ3Bg&s=09",
        image: "/images/team/Mudasir.jpg"
      },
      role: "Event Management Lead"
    }
  ],

  members: [
    {
      id: 9,
      profile: {
        name: "Niksh Hiremath",
        profileLink: "https://www.linkedin.com/in/nikshhiremath",
        image: "/images/team/niksh.png"
      },
      role: "Tech"
    },
    {
      id: 10,
      profile: {
        name: "Shreya Khanna",
        profileLink: "https://www.linkedin.com/in/shreya-khanna-a58a36323/",
        image: "/images/team/shreya.png"
      },
      role: "Content"
    },
    {
      id: 11,
      profile: {
        name: "Proshita Agarwal",
        profileLink: "#",
        image: "/images/team/proshita.png"
      },
      role: "Content"
    },
    {
      id: 12,
      profile: {
        name: "Harmannat Kaur",
        profileLink: "https://www.linkedin.com/in/harmannat-kaur-5516372b1",
        image: "/images/team/harmannat.png"
      },
      role: "Marketing & Design"
    },
    {
      id: 13,
      profile: {
        name: "Abhijeet Shashwat",
        profileLink: "https://www.linkedin.com/in/asp616848/",
        image: "/images/team/abhi.jpg"
      },
      role: "Tech"
    },
    {
      id: 14,
      profile: {
        name: "Divyannsh Pincha",
        profileLink: "https://www.linkedin.com/in/divyannsh-pincha-9a9862240",
        image: "/images/team/divyannsh.png"
      },
      role: "Research"
    },
    {
      id: 15,
      profile: {
        name: "Eshan Srirambhatla",
        profileLink: "https://www.linkedin.com/in/eshan-srirambhatla-a618ba210",
        image: "/images/team/eshan.png"
      },
      role: "Tech"
    },
    {
      id: 16,
      profile: {
        name: "Maan Kumawat",
        profileLink: "#",
        image: "/images/team/maan.png"
      },
      role: "Marketing & Design"
    },
    {
      id: 17,
      profile: {
        name: "Arsh Arora",
        profileLink: "https://www.linkedin.com/in/arsh-arora-6aa00232a/",
        image: "/images/team/arsh.png"
      },
      role: "Marketing & Design"
    },
    {
      id: 18,
      profile: {
        name: "Avantika Bansal",
        profileLink: "https://www.linkedin.com/in/avantika-bansal-9253b3278",
        image: "/images/team/avantika.png"
      },
      role: "Marketing & Design"
    },
    {
      id: 19,
      profile: {
        name: "Tisha Bhavsar",
        profileLink: "#",
        image: "/images/team/tisha.png"
      },
      role: "Tech"
    },
    {
      id: 20,
      profile: {
        name: "Sahil Gada",
        profileLink:
          "https://www.instagram.com/sahil.gada__/profilecard/?igsh=MXhocWFxcTJ0czhuNg==",
        image: "/images/team/sahil.png"
      },
      role: "Research"
    },
    {
      id: 21,
      profile: {
        name: "Vir Dang",
        profileLink: "https://www.linkedin.com/in/vir-dang-5573782b1",
        image: "/images/team/vir.png"
      },
      role: "Tech"
    },
    {
      id: 22,
      profile: {
        name: "Kuhuk Katiyar",
        profileLink: "https://www.linkedin.com/in/kuhuk-katiyar-72322b303",
        image: "/images/team/kuhuk.png"
      },
      role: "Content"
    },
    {
      id: 23,
      profile: {
        name: "Armaan Raisinghani",
        profileLink:
          "https://www.linkedin.com/in/armaan-raisinghani-362654240/",
        image: "/images/team/armaan.png"
      },
      role: "Tech"
    },
    {
      id: 24,
      profile: {
        name: "Soumya Pandey",
        profileLink: "https://www.linkedin.com/in/soumya-pandey-89825323b/",
        image: "/images/team/soumya.jpg"
      },
      role: "Tech"
    },
    {
      id: 25,
      profile: {
        name: "Rishaan Damani",
        profileLink: "#",
        image: "/images/team/rishaan.png"
      },
      role: "Tech"
    }
  ]
};

teamData.members.sort((a, b) => a.profile.name.localeCompare(b.profile.name));

const TeamTimeLinePage = () => {
  return (
    <div style={{ paddingTop: "120px" }}>
      <Head>
        <title>Team | Geek Room Plaksha</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TeamPage teamData={teamData} />
    </div>
  );
};

export default TeamTimeLinePage;
