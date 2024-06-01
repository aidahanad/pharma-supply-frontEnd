import heroImg from "../assets/images/photo1.webp";
import icon4 from "../assets/images/pharmacist 2.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import FournisseurList from "../components/Fournisseurs/FournisseurList";
import faqImg from "../assets/images/doctors1.png";
import FaqList from "../components/Faq/FaqList";
import Testimonial from "../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      {/* ======= Hero section  ===== */}

      <>
        <section className="hero__section pt-[60px] 2xl:h-fit">
          <div className="container ">
            <div className="flex flex-col lg:flex-grow gap-[90px] items-left justify-between">
              <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between px-4 py-8 md:content-up">
                <div>
                  <div className="mb-8 lg:mb-16 lg:flex lg:justify-start">
                    {" "}
                    {/* Ajout de la marge en bas et spécification du comportement pour les écrans larges */}
                    <div className="lg:w-9/12">
                      {" "}
                      {/* Utilisation de lg:w-9/12 pour spécifier la largeur sur les écrans larges */}
                      <h1 className="text-3xl lg:text-5xl leading-[46px] text-headingColor font-bold md:leading-[70px] text-left">
                        {" "}
                        {/* Modification des classes de taille de texte pour une meilleure lisibilité */}
                        Pharma<span className="text-primaryColor">Supply</span>
                      </h1>
                      <p className="text__para text-left mt-4 md:mt-6 lg:mt-8">
                        {" "}
                        {/* Ajustement de la marge en haut pour chaque taille d'écran */}
                        Votre plateforme centrale pour la collaboration entre
                        fournisseurs de médicaments et pharmaciens
                      </p>
                      <Link to="/fournisseurs">
                        <div className="btn mt-4 md:mt-6 lg:mt-8 w-fit">
                          Faites vos commandes
                        </div>
                      </Link>
                      {/* Ajustement de la marge en haut pour chaque taille d'écran */}
                    </div>
                  </div>

                  <div className="mt-4 lg:mt-0 flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-10 content-down">
                    <div className="mb-4 lg:mb-0 flex-shrink-0">
                      {" "}
                      {/* Ajout de la marge en bas et spécification de la largeur minimale */}
                      <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor text-left">
                        100%
                      </h2>
                      <span className="w-[100px] h-2 bg-[#93d0ea] rounded-full block mt-[-4px]"></span>
                      <p className="text__para text-left mt-[-4px] lg:mt-0">
                        De confiance
                      </p>
                    </div>
                    <div className="mb-4 lg:mb-0 flex-shrink-0">
                      <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor text-left">
                        +150
                      </h2>
                      <span className="w-[100px] h-2 bg-[#8ad2f2] rounded-full block mt-[-4px]"></span>
                      <p className="text__para text-left mt-[-4px] lg:mt-0">
                        Fournisseurs
                      </p>
                    </div>
                    <div className="mb-4 lg:mb-0 flex-shrink-0">
                      <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor text-left">
                        100%
                      </h2>
                      <span className="w-[100px] h-2 bg-[#63b1d3] rounded-full block mt-[-4px]"></span>
                      <p className="text__para text-left mt-[-4px] lg:mt-0">
                        Pharmaciens satisfaits
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center items-center h-screen">
                  <div className="hidden md:block">
                    <img
                      className="w-full md:w-[500px] h-auto rounded-[30px] ml-5"
                      src={heroImg}
                      alt=""
                    />{" "}
                    {/* Ajout de la classe 'rounded-lg' pour arrondir les bords de l'image */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======== recherche fournisseurs ======= */}

        <section className="gradient-header1 ">
          <div className="container">
            <div className="lg:w-[470px] mx-auto">
              <h2 className="heading text-center">
                {" "}
                Fournir <span className=" text-textColor2">
                  les meilleures
                </span>{" "}
                services Pharma<span className="text-textColor2">cetiques</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-col-2 lg:grid-col-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img src={icon4} alt="" />
                </div>

                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[600] text-center">
                    Trouvez votre fournisseur
                  </h2>

                  <Link
                    to="/fournisseurs"
                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none "
                  >
                    <BsArrowRight className="group-hover:text-white w-6 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======== our great fournisseur  ======= */}

        <section className="gradient-header1">
          <div className="container">
            <div className="xl:w-[470px] mx-auto">
              <h2 className="heading text-center ">
                Nos Meilleurs Fournisseurs
              </h2>
              <p className="text__para text-center ">
                vous pouvez leurs faire confiance !
              </p>
            </div>

            <FournisseurList />
          </div>
        </section>

        {/* ======== Question reponses ======= */}

        <section className="gradient-header1">
          <div className="container">
            <div className="flex justify-between gap-[50px] lg:gap-0">
              <div className="w-1/2 hidden md:block ">
                {" "}
                {/* Ajout de la classe ml-4 pour une marge de 4 unités à gauche */}
                <img src={faqImg} alt="" />
              </div>

              <div className="w-full md:w-1/2">
                <h2 className="heading">
                 Les questions qui reviennent le plus !
                </h2>

                <FaqList />
              </div>
            </div>
          </div>
        </section>

        {/* ce que les pharmaciens disent sur nos fournisseurs */}

        <section className="gradient-header1">
          <div className="container">
            <div className=" text-center xl:w-[470px] mx-auto whitespace-normal md:whitespace-nowrap">
              <h2 className="heading text-center ">Ce que les Pharmaciens </h2>
              <h2 className="heading text-center "> disent </h2>
              <p className="text__para text-center  ">Sur Nos Fournisseurs</p>
            </div>
            <Testimonial />
          </div>
        </section>
      </>
    </>
  );
};

export default Home;
