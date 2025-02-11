import Head from "next/head";
import TeamPage from "../../components/team/TeamPage";

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
      id: 4,
      profile: {
        name: "Arunachalam Vijayanand",
        profileLink:
          "https://www.linkedin.com/in/arunachalam-vijayanand-42a263244/",
        image: "/images/team/arun.jpg"
      },
      role: "Tech Lead"
    },
    {
      id: 9,
      profile: {
        name: "Nikunj Agarwal",
        profileLink: "https://www.linkedin.com/in/nikunj-agarwal-2b388b288/",
        image: "/images/team/nikunj.png"
      },
      role: "Robotics Lead"
    },
    {
      id: 6,
      profile: {
        name: "Trinav Talukdar",
        profileLink:
          "https://www.linkedin.com/in/trinav-prasad-talukdar-44b34428b/",
        image: "/images/team/trinav.jpg"
      },
      role: "Content Lead"
    },
    {
      id: 5,
      profile: {
        name: "Manavi Nakra",
        profileLink: "#",
        image: "/images/team/manavi.jpg"
      },
      role: "Marketing & Design Lead"
    }
  ],

  members: [
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
      role: "Robotics"
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
      id: 26,
      profile: {
        name: "Divy Gupta",
        profileLink:
          "https://www.instagram.com/_divy_gupta_44?igsh=Nm5xN2s2bW9zbjg2&utm_source=qr",
        image: "/images/team/divy.png"
      },
      role: "Robotics"
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
