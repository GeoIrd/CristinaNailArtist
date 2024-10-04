import React from "react";
import { motion } from "framer-motion";
import "./MyWork.css";

const MyWork = () => {
  const services = [
    // Imagini albe
    "https://res.cloudinary.com/dsqwnuyiw/image/upload/v1727948993/cristina/mywork/albe/IMG_3117_vugkny.jpg",
    "https://res.cloudinary.com/dsqwnuyiw/image/upload/v1727948992/cristina/mywork/albe/IMG_3115_cwlvge.jpg",
    "https://res.cloudinary.com/dsqwnuyiw/image/upload/v1727948991/cristina/mywork/albe/IMG_3114_wi9lmx.jpg",
    "https://res.cloudinary.com/dsqwnuyiw/image/upload/v1727948990/cristina/mywork/albe/IMG_3113_vtqac1.jpg",
    "https://res.cloudinary.com/dsqwnuyiw/image/upload/v1727948989/cristina/mywork/albe/IMG_3112_hjkb9o.jpg",
    "https://res.cloudinary.com/dsqwnuyiw/image/upload/v1727948989/cristina/mywork/albe/IMG_3110_qba8ue.jpg",
    "https://res.cloudinary.com/dsqwnuyiw/image/upload/v1727948989/cristina/mywork/albe/IMG_3109_qy14hu.jpg",
    "https://res.cloudinary.com/dsqwnuyiw/image/upload/v1727948987/cristina/mywork/albe/IMG_3105_bjwosb.jpg",
    "https://res.cloudinary.com/dsqwnuyiw/image/upload/v1727948988/cristina/mywork/albe/IMG_3108_axnupa.jpg",
    "https://res.cloudinary.com/dsqwnuyiw/image/upload/v1727948987/cristina/mywork/albe/IMG_3107_kf2kwv.jpg",
    "https://res.cloudinary.com/dsqwnuyiw/image/upload/v1727948986/cristina/mywork/albe/IMG_3106_txjkow.jpg",
    "https://res.cloudinary.com/dsqwnuyiw/image/upload/v1727948986/cristina/mywork/albe/IMG_3102_ofimuz.jpg",
    "https://res.cloudinary.com/dsqwnuyiw/image/upload/v1727948985/cristina/mywork/albe/IMG_3100_tdyyvj.jpg",
    "https://res.cloudinary.com/dsqwnuyiw/image/upload/v1727948985/cristina/mywork/albe/IMG_3095_wazgyr.jpg",
    "https://res.cloudinary.com/dsqwnuyiw/image/upload/v1727948985/cristina/mywork/albe/IMG_3090_foavnp.jpg",

    // Imagini colorate
    "https://res.cloudinary.com/dsqwnuyiw/image/upload/v1727948916/cristina/mywork/colorate/IMG_3098_gpgrbd.jpg",
    "https://res.cloudinary.com/dsqwnuyiw/image/upload/v1727948914/cristina/mywork/colorate/IMG_3099_bg69ef.jpg",
    "https://res.cloudinary.com/dsqwnuyiw/image/upload/v1727948914/cristina/mywork/colorate/IMG_3103_wpox6u.jpg",
    "https://res.cloudinary.com/dsqwnuyiw/image/upload/v1727948913/cristina/mywork/colorate/IMG_3096_jmijqn.jpg",
    "https://res.cloudinary.com/dsqwnuyiw/image/upload/v1727948913/cristina/mywork/colorate/IMG_3094_ag3bic.jpg",
    "https://res.cloudinary.com/dsqwnuyiw/image/upload/v1727948912/cristina/mywork/colorate/IMG_3092_nsfiyz.jpg",
    "https://res.cloudinary.com/dsqwnuyiw/image/upload/v1727948912/cristina/mywork/colorate/IMG_3091_iepkod.jpg",
    "https://res.cloudinary.com/dsqwnuyiw/image/upload/v1727852072/cristina/mywork/460681809_789021923217398_7061485855270401419_n_jjgxfr.jpg",
    "https://res.cloudinary.com/dsqwnuyiw/image/upload/v1727852072/cristina/mywork/460202560_1194845795424348_7575413557053738227_n_kyownr.jpg",
    "https://res.cloudinary.com/dsqwnuyiw/image/upload/v1727852072/cristina/mywork/460951323_1956846021497594_2598930331636537001_n_nl2y8s.jpg",
    "https://res.cloudinary.com/dsqwnuyiw/image/upload/v1727852072/cristina/mywork/461399417_18455584564015974_638334351515868754_n_yiaazw.jpg",
    "https://res.cloudinary.com/dsqwnuyiw/image/upload/v1727852072/cristina/mywork/461410266_1176534536793406_8752867894165441314_n_aajsyc.jpg",
    "https://res.cloudinary.com/dsqwnuyiw/image/upload/v1727852072/cristina/mywork/460527642_1069669754751884_1244904148399068217_n_jhi0ud.jpg",
    "https://res.cloudinary.com/dsqwnuyiw/image/upload/v1727853185/cristina/mywork/459031340_1444662742882069_4134354805410157666_n_nqcrm2.jpg",
    "https://res.cloudinary.com/dsqwnuyiw/image/upload/v1727853186/cristina/mywork/460325468_1280088402984637_3718105246120637437_n_ephq6q.jpg",
    "https://res.cloudinary.com/dsqwnuyiw/image/upload/v1727853186/cristina/mywork/460016821_1059051635726089_5897765659319533493_n_g06jrp.jpg",

    // Imagini WhatsApp
    "https://res.cloudinary.com/dsqwnuyiw/image/upload/v1728030326/cristina/mywork/whatsapp/WhatsApp_Image_2024-10-04_at_11.18.48_1_r0f4bx.jpg",
    "https://res.cloudinary.com/dsqwnuyiw/image/upload/v1728030326/cristina/mywork/whatsapp/WhatsApp_Image_2024-10-04_at_11.18.48_sbpyvw.jpg",
    "https://res.cloudinary.com/dsqwnuyiw/image/upload/v1728030326/cristina/mywork/whatsapp/WhatsApp_Image_2024-10-04_at_11.18.48_2_ngvevw.jpg",
    "https://res.cloudinary.com/dsqwnuyiw/image/upload/v1728030323/cristina/mywork/whatsapp/WhatsApp_Image_2024-10-04_at_11.18.48_5_edmtrp.jpg",
    "https://res.cloudinary.com/dsqwnuyiw/image/upload/v1728030323/cristina/mywork/whatsapp/WhatsApp_Image_2024-10-04_at_11.18.49_ho2cv4.jpg",
    "https://res.cloudinary.com/dsqwnuyiw/image/upload/v1728030323/cristina/mywork/whatsapp/WhatsApp_Image_2024-10-04_at_11.18.48_4_cbti1x.jpg",
    "https://res.cloudinary.com/dsqwnuyiw/image/upload/v1728030323/cristina/mywork/whatsapp/WhatsApp_Image_2024-10-04_at_11.18.48_3_ksdwhq.jpg",
    "https://res.cloudinary.com/dsqwnuyiw/image/upload/v1728030322/cristina/mywork/whatsapp/WhatsApp_Image_2024-10-04_at_11.18.49_2_zobbkn.jpg",
    "https://res.cloudinary.com/dsqwnuyiw/image/upload/v1728030322/cristina/mywork/whatsapp/WhatsApp_Image_2024-10-04_at_11.18.49_3_a4spmx.jpg",
    "https://res.cloudinary.com/dsqwnuyiw/image/upload/v1728030322/cristina/mywork/whatsapp/WhatsApp_Image_2024-10-04_at_11.18.49_4_qemcfb.jpg",
    "https://res.cloudinary.com/dsqwnuyiw/image/upload/v1728030322/cristina/mywork/whatsapp/WhatsApp_Image_2024-10-04_at_11.18.49_1_f15mck.jpg",
    "https://res.cloudinary.com/dsqwnuyiw/image/upload/v1728030322/cristina/mywork/whatsapp/WhatsApp_Image_2024-10-04_at_11.18.49_5_hpynqs.jpg",
    "https://res.cloudinary.com/dsqwnuyiw/image/upload/v1728030322/cristina/mywork/whatsapp/WhatsApp_Image_2024-10-04_at_11.18.49_6_lipvev.jpg",
  ];

  // Variants for animation
  const imageVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.2, rotate: 90 },
    visible: {
      opacity: 1,
      rotate: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="my-work" id="my-work">
      <div className="content">
        <h2 className="text-2">Lucrările mele</h2>
        <div className="gallery">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="gallery-item"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }} // Trigger animation when in view
              variants={imageVariants}
            >
              <img src={service} alt={`My work ${index + 1}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyWork;
