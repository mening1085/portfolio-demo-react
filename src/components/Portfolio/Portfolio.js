import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
// import PortfolioItem from "./PortfolioItem";

// import Swiper core and required modules
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import PhotoAlbum from "react-photo-album";

// const Portfolios = [
//   {
//     title: "TN Logistics",
//     image: require("../../asset/images/project/thumbnail/tnl.jpg"),
//     stack: "VueJS, Laravel",
//     description: "",
//     url: "https://tnlogistic.com/login",
//   },
//   {
//     title: "TCDC Connect by CEA",
//     image: require("../../asset/images/project/thumbnail/connect-cea.png"),
//     stack: "VueJS, Laravel",
//     description:
//       "เป็นเว็บไซต์ที่รวบรวมรายชื่อนักออกแบบในไทยและผลงานต่างๆของพวกเขา จัดทำให้กับทาง  CONNECT by CEA ที่เป็นส่วนหนึ่งในงานบริการภาคธุรกิจและการออกแบบของสำนักงานส่งเสริมเศรษฐกิจสร้างสรรค์(สศส.)",
//     url: "https://connect.cea.or.th/",
//   },
//   {
//     title: "DITP Thai Trade Center",
//     image: require("../../asset/images/project/thumbnail/ditp.jpg"),
//     stack: "VueJS, Laravel",
//     description:
//       "เป็นเว็บไซต์แสดงข้อมูล Event หรือ ข่าวสารต่างๆ ของ The Department of International Trade Promotion",
//     url: "https://thaitradeusa.com",
//   },
//   {
//     title: "AEON METAVERSE virtual Party 2022",
//     image: require("../../asset/images/project/thumbnail/AEON-Metaverse.jpg"),
//     stack: "Laravel",
//     description:
//       "เป็นกิจกรรมที่ทาง AEON จัดขึ้นตอนขึ้นปีใหม่ โดยจะให้ทำกิจกรรมสั้นๆขึ้นมา คือ การแข่งขันเล่นเกมบน เว็บไซต์ ในเว็บจะสามารถแต่งตัวละครของแต่ละคนได้ และจะแบบการเเข่งขั้นออกเป็นกลุ่มสีต่างๆ เกมจะเป็นเกมในรูปแบบคล้ายๆ Cookie run และในเว็บไซต์จะแสดงตาราง Ranking คะแนน รายบุคคลหรือตามกลุ่มสีได้",
//     url: null,
//   },
//   {
//     title: "ASB Marketing System",
//     image: require("../../asset/images/project/thumbnail/ASB-Market.png"),
//     stack: "Laravel",
//     description: "เป็นระบบจัดการเช่าพื้นที่ในการขายของ",
//     url: null,
//   },
//   {
//     title: "Biodiversity Big data",
//     image: require("../../asset/images/project/thumbnail/bedoai.png"),
//     stack: "VueJS, Laravel",
//     description:
//       " เว็บไซต์แสดงข้อมูลทรัพยากรชีวภาพจากฐานข้อมูล ThaiBiodiversity / ข้อมูลทรัพยากรชีวภาพที่มีศักยภาพทางเศรษฐกิจ ของทางสํานักงานพัฒนาเศรษฐกิจจากฐานชีวภาพ(BEDO)",
//     url: "http://www.nbbch.org/",
//   },
//   {
//     title: "Gosure Online",
//     image: require("../../asset/images/project/thumbnail/ASB-Online.png"),
//     stack: "NuxtJS, Laravel",
//     description: "เป็นระบบซื้อประกันรถยนต์ออนไลน์",
//     url: null,
//   },
//   {
//     title: "ระบบจัดการโครงการวิจัยกรมแพทย์ทหารบก(irbrta)",
//     image: require("../../asset/images/project/thumbnail/researcher.png"),
//     stack: "VueJS, Laravel",
//     description:
//       "เป็นระบบจัดทำโครงการวิจัยต่างๆ ภายในหน่วยงาน ของทาง สำนักงานพิจารณาโครงการวิจัย กรมแพทย์ทหารบก",
//     url: "https://irbrta-research.com/",
//   },
//   {
//     title: "ระบบฐานข้อมูลกลางคุณลักษณะเฉพาะสิ่งอุปกรณ์สายแพทย์",
//     image: require("../../asset/images/project/thumbnail/medical-tools.jpeg"),
//     stack: "VueJS, Laravel",
//     description:
//       "เป็นระบบค้นหาข้อมูลกลางคุณลักษณะเฉพาะสิ่งอุปกรณ์สายแพทย์ และ Export ใบสั่งพิมพ์ของอุปกรณ์สายแพทย์ออกมาเป็น PDF file ของทาง กรมแพทย์ทหารบก",
//     url: "https://rtamed.com/",
//   },
//   {
//     title: "MVTV Authen Streaming",
//     image: require("../../asset/images/project/thumbnail/mvtv.png"),
//     stack: "Laravel",
//     description: null,
//     url: "https://auth.sky-cdn.com/",
//   },
//   {
//     title: "OSCC Consulting",
//     image: require("../../asset/images/project/thumbnail/ocss-chat.png"),
//     stack: "VueJS, Laravel",
//     description:
//       " ระบบให้คำปรึกษาและพัฒนาผู้ปฏิบัติงานคุ้มครองเด็กและผู้ถูกกระทำด้วยความรุนแรงใรครอบครัว",
//     url: "https://oscc.consulting/",
//   },
//   {
//     title: "PMUC MediPod System",
//     image: require("../../asset/images/project/thumbnail/pmuc.png"),
//     stack: "VueJS, Laravel",
//     description: null,
//     url: "https://pmuc.ksta.co",
//   },
//   {
//     title: "Powerpod Fitness Club",
//     image: require("../../asset/images/project/thumbnail/gym.png"),
//     stack: "VueJS, Laravel",
//     description:
//       "เป็นเว็บไซต์ที่จะวิเคราะห์ผลการวัดผลทางกายภาพของลูกค้า และแสดงออกมาเป็น Report ทำให้กับทาง Powerpod Fitness Club เป็นโรงยิมสำหรับผู้สูงอายุ คนป่วย และคนอ้วน ในสังคมญี่ปุ่น",
//     url: "https://powerpodfitness.ksta.co",
//   },
//   {
//     title: "ระบบรายงานผู้บาดเจ็บหรือเสียชีวิตจากการตกน้ำ จมน้ำ",
//     image: require("../../asset/images/project/thumbnail/sat-drowing.jpeg"),
//     stack: "VueJS, Laravel",
//     description:
//       "เป็นระบบจัดการรายงานผู้บาดเจ็บหรือเสียชีวิตจากการตกน้ำ จมน้ำ ทำให้กับ กองป้องกันการบาดเจ็บ กรมควบคุมโรค กระทรวงสาธารณสุข",
//     url: "http://dip.ddc.moph.go.th/satdrowning/#/login",
//   },
// ];

const photos = [
  {
    src: require("../../asset/images/project/thumbnail/tnl.jpg"),
    url: "",
    width: 1080,
    height: 780,
  },
  {
    src: require("../../asset/images/project/thumbnail/AEON-Metaverse.jpg"),
    url: "",
    width: 1080,
    height: 780,
  },
  {
    src: require("../../asset/images/project/thumbnail/ASB-Market.png"),
    url: "",
    width: 400,
    height: 780,
  },
  {
    src: require("../../asset/images/project/thumbnail/ASB-Online.png"),
    url: "",
    width: 1000,
    height: 2000,
  },
  {
    src: require("../../asset/images/project/thumbnail/bedoai.png"),
    url: "http://www.nbbch.org/",
    width: 800,
    height: 2200,
  },
  {
    src: require("../../asset/images/project/thumbnail/connect-cea.png"),
    url: "https://connect.cea.or.th/",
    width: 1080,
    height: 600,
  },
  {
    src: require("../../asset/images/project/thumbnail/ditp.jpg"),
    url: "https://thaitradeusa.com",
    width: 1000,
    height: 1900,
  },
  {
    src: require("../../asset/images/project/thumbnail/gym.png"),
    url: "",
    width: 1200,
    height: 700,
  },
  {
    src: require("../../asset/images/project/thumbnail/medical-tools.jpeg"),
    url: "",
    width: 1080,
    height: 1000,
  },
  {
    src: require("../../asset/images/project/thumbnail/mvtv.png"),
    url: "",
    width: 1080,
    height: 780,
  },
  {
    src: require("../../asset/images/project/thumbnail/ocss-chat.png"),
    url: "https://oscc.consulting/",
    width: 1080,
    height: 2200,
  },
  {
    src: require("../../asset/images/project/thumbnail/pmuc.png"),
    url: "",
    width: 1080,
    height: 780,
  },
  {
    src: require("../../asset/images/project/thumbnail/researcher.png"),
    url: "https://irbrta-research.com/",
    width: 900,
    height: 2200,
  },
  {
    src: require("../../asset/images/project/thumbnail/sat-drowing.jpeg"),
    url: "",
    width: 1880,
    height: 1000,
  },
  {
    src: require("../../asset/images/project/thumbnail/tnl.jpg"),
    url: "",
    width: 1080,
    height: 780,
  },
];

// openLightbox
const openLightbox = (index) => {
  console.log("openLightbox", index);
  // open new window
  if (photos[index].url) window.open(photos[index].url, "_blank");
};

export default function Portfolio() {
  return (
    <Container maxWidth="xl">
      {/* <Box
        sx={{
          textDecorationColor: "#ededed",
          marginBottom: "1.5rem",
          fontWeight: "600",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: "500",
            marginBottom: "2rem",
          }}
        >
          Portfolio
        </Typography>

        <Box>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {Portfolios.map((portfolio, i) => (
              <SwiperSlide key={i}>
                <PortfolioItem
                  title={portfolio.title}
                  image={portfolio.image}
                  stack={portfolio.stack}
                  description={portfolio.description}
                  url={portfolio.url}
                  onClick={() =>
                    portfolio.url ? window.open(portfolio.url) : ""
                  }
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box> */}

      <Typography
        variant="h2"
        color={"#fff"}
        sx={{
          fontWeight: "500",
        }}
        className="mb-5"
      >
        Portfolio
      </Typography>
      <PhotoAlbum
        layout="columns"
        columns={(containerWidth) => {
          if (containerWidth < 400) return 1;
          if (containerWidth < 800) return 2;
          if (containerWidth < 1024) return 4;
          return 6;
        }}
        padding={5}
        spacing={5}
        photos={photos}
        onClick={({ index }) => {
          openLightbox(index);
        }}
      />
    </Container>
  );
}
