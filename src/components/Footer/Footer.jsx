import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo222.png';
import insta from '../../assets/images/icons8-instagram-401.png';
import facebook from '../../assets/images/icons8-facebook-40.png';
import github from '../../assets/images/icons8-github-48.png';

const socialLinks = [
  {
    path: "https://www.instagram.com/",
    icon: <img src={insta} alt="" />,
  },
  {
    path: "https://www.facebook.com/",
    icon: <img src={facebook} alt="" />,
  },
  {
    path: "https://github.com/aidahanad/pharma-supply.git",
    icon: <img src={github} alt="" />,
  }
];

const Footer = () => {
  const year = new Date().getFullYear();

  const quickLinks = [
  //   {
  //     links: [
  //       {
  //         path: "/home",
  //         display: "Accueil",
  //       },
  //       {
  //         path: "/home",
  //         display: "About us",
  //       },
       
  //     ],
  //     title: "Liens rapides"
  //   },
    {
      links: [
        {
          path: "/fournisseurs",
          display: "Trouvez un fournisseur",
        },
    
        {
          path: "/login",
          display: "Ouvrir votre compte",
        },
        {
          path: "/contact",
          display: "contactez-nous",
        },
        // {
        //   path: "/home",
        //   display: "About us",
        // },
      ],
      title: "Visitez notre site"
    },
    
  ];

  return (
    <footer className='pb-16 pt-10 gradient-header1'>
      <div className='container'>
        <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
          <div>
            <img src={logo} alt="Logo" className="w-24 md:w-35 lg:w-64 xl:w-70 h-auto" />
            <p className='text-[16px] leading-7 font-[400] text-textColor mt-4'>
              copyright {year} developer par EasyTech.
            </p>

            <div className='flex items-center gap-3 mt-4'>
              {socialLinks.map((link, index) => (
                <a key={index} href={link.path} target="_blank" rel="noopener noreferrer" className='w-9 h-9 '>
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {quickLinks.map((section, index) => (
            <div key={index}>
              <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
                {section.title}
              </h2>
              <ul>
                {section.links.map((item, itemIndex) => (
                  <li key={itemIndex} className='mb-4'>
                    <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'> {item.display}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
