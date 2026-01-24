import Head from "next/head";
import TeamPage from "../../components/team/TeamPage";

const teamData = {
  name: "Geek Room Plaksha Team",
  core: [
    {
      id: 1,
      profile: {
        name: "Armaan Raisinghani",
        profileLink:
          "https://www.linkedin.com/in/armaan-raisinghani-362654240/",
        image: "/images/team/armaan.png"
      },
      role: "President"
    },
    {
      id: 2,
      profile: {
        name: "Shreya Khanna",
        profileLink: "https://www.linkedin.com/in/shreya-khanna-a58a36323/",
        image: "/images/team/shreya.png"
      },
      role: "Co-Operations Lead"
    },
    {
      id: 4,
      profile: {
        name: "Manavi Nakra",
        profileLink: "#",
        image: "/images/team/manavi.jpg"
      },
      role: "Co-Operations Lead"
    },
    {
      id: 5,
      profile: {
        name: "Maan Kumawat",
        profileLink: "#",
        image: "/images/team/maan.png"
      },
      role: "Marketing & Design Lead"
    },
    {
      id: 1,
      profile: {
        name: "Proshita Agarwal",
        profileLink: "#",
        image: "/images/team/proshita.png"
      },
      role: "Content Lead"
    }
  ],
  poc: [],
  members: [
    {
      id: 5,
      profile: {
        name: "Vir Dang",
        profileLink: "https://www.linkedin.com/in/vir-dang-5573782b1",
        image: "/images/team/vir.png"
      },
      role: "Tech"
    },
    {
      id: 6,
      profile: {
        name: "Kuhuk Katiyar",
        profileLink: "https://www.linkedin.com/in/kuhuk-katiyar-72322b303",
        image: "/images/team/kuhuk.png"
      },
      role: "Content"
    },
    {
      id: 7,
      profile: {
        name: "Tista Tewani",
        profileLink: "https://www.instagram.com/t1sta06",
        image: "/images/team/tista.jpg"
      },
      role: "Content"
    },
    {
      id: 8,
      profile: {
        name: "Achintya Mathur",
        profileLink: "https://www.linkedin.com/in/achintya-mathur-b11862381",
        image: "/images/team/achintya.jpg"
      },
      role: "Tech"
    },
    {
      id: 9,
      profile: {
        name: "Ronan Henriques",
        profileLink: "#",
        image: "/images/team/ronan.jpg"
      },
      role: "Tech"
    },
    {
      id: 10,
      profile: {
        name: "Keshava Prasad",
        profileLink:
          "https://www.instagram.com/_keshava_prasad?igsh=cDQ5ZGFrZHEybWZx&utm_source=qr",
        image: "/images/team/Keshava.jpeg"
      },
      role: "Tech"
    },
    {
      id: 11,
      profile: {
        name: "Kavish",
        profileLink: "https://www.instagram.com/kavish_k_30",
        image: "/images/team/kavish.jpeg"
      },
      role: "Marketing"
    },
    {
      id: 12,
      profile: {
        name: "Mudith Daga",
        profileLink: "https://www.linkedin.com/in/mudithdaga",
        image: "/images/team/mudith.jpg"
      },
      role: "Tech"
    },
    {
      id: 13,
      profile: {
        name: "Sahil Patel",
        profileLink:
          "https://www.linkedin.com/in/sahil-patel-772a44323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        image: "/images/team/sahil patel.jpeg"
      },
      role: "Design"
    },
    {
      id: 14,
      profile: {
        name: "Saanvi Bhaskar",
        profileLink: "https://www.linkedin.com/in/saanvi-bhaskar-81366b2ba/",
        image: "/images/team/saanvi.jpg"
      },
      role: "Content"
    },
    {
      id: 15,
      profile: {
        name: "Jaskirat Kaur Anand",
        profileLink:
          "https://www.instagram.com/jaskiratt_kaurr?igsh=MTZvOTI0cG5kbjZuOQ%3D%3D&utm_source=qr",
        image: "/images/team/jaskirat.jpg"
      },
      role: "Marketing"
    },
    {
      id: 16,
      profile: {
        name: "Avni Gaur",
        profileLink:
          "https://www.linkedin.com/in/avni-gaur-246253252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        image: "/images/team/avni.jpeg"
      },
      role: "Tech"
    },
    {
      id: 17,
      profile: {
        name: "Yesha Ravani",
        profileLink:
          "https://www.linkedin.com/in/yesha-ravani-785b23321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        image: "/images/team/yesha.jpeg"
      },
      role: "Tech"
    },
    {
      id: 18,
      profile: {
        name: "Rohan Gupta",
        profileLink: "https://www.linkedin.com/in/rohan-gupta-32474b1a0/",
        image: "/images/team/rohan.jpg"
      },
      role: "Tech"
    }
  ],
  alumni: [
    {
      id: 8,
      profile: {
        name: "Akshat Gupta",
        profileLink: "https://www.linkedin.com/in/akshat-gupta-840740285/",
        image: "/images/team/Akshat.jpg"
      },
      role: "Founding President (2024-25)"
    },
    {
      id: 6,
      profile: {
        name: "Trinav Talukdar",
        profileLink:
          "https://www.linkedin.com/in/trinav-prasad-talukdar-44b34428b/",
        image: "/images/team/trinav.jpg"
      },
      role: "Head of Content (2024-25)"
    },
    {
      id: 3,
      profile: {
        name: "Divy Gupta",
        profileLink:
          "https://www.instagram.com/_divy_gupta_44?igsh=Nm5xN2s2bW9zbjg2&utm_source=qr",
        image: "/images/team/divy.png"
      },
      role: "Robotics (2024-25)"
    },
    {
      id: 1,
      profile: {
        name: "Raghav Sarna",
        profileLink: "https://www.linkedin.com/in/raghav-sarna-4789bb2b3/",
        image: "/images/team/raghav.jpg"
      },
      role: "Founding Operations Lead (2024-25)"
    },
    {
      id: 2,
      profile: {
        name: "Nikunj Agarwal",
        profileLink: "https://www.linkedin.com/in/nikunj-agarwal-2b388b288/",
        image: "/images/team/nikunj.png"
      },
      role: "Head of Robotics (2024-25)"
    },
    {
      id: 7,
      profile: {
        name: "Arunachalam Vijayanand",
        profileLink:
          "https://www.linkedin.com/in/arunachalam-vijayanand-42a263244/",
        image: "/images/team/arun.jpg"
      },
      role: "Tech Lead (2024-25)"
    },
    {
      id: 3,
      profile: {
        name: "Abhijeet Shashwat",
        profileLink: "https://www.linkedin.com/in/asp616848/",
        image: "/images/team/abhi.jpg"
      },
      role: "Tech (2024-25)"
    },
    {
      id: 4,
      profile: {
        name: "Arsh Arora",
        profileLink: "https://www.linkedin.com/in/arsh-arora-6aa00232a/",
        image: "/images/team/arsh.png"
      },
      role: "Design (2024-25)"
    }
  ]
};

teamData.members.sort((a, b) => a.profile.name.localeCompare(b.profile.name));

// Classify and sort alumni: Core alumni first, then Member alumni, both alphabetically
teamData.alumni.sort((a, b) => {
  const coreRoles = ["President", "Head", "Lead", "Founding"];

  const isACoreAlumni = coreRoles.some((role) => a.role.includes(role));
  const isBCoreAlumni = coreRoles.some((role) => b.role.includes(role));

  // If both are Core or both are Members, sort alphabetically by name
  if (isACoreAlumni === isBCoreAlumni) {
    return a.profile.name.localeCompare(b.profile.name);
  }

  // Core alumni come before Member alumni
  return isACoreAlumni ? -1 : 1;
});

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
