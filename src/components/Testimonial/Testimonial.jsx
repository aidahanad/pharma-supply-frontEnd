import React from 'react';
import {Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
 import 'swiper/css/pagination';
 import patientAvatar from '../../assets/images/R.png'
 import starIcon from '../../assets/images/star.png'
 import pharmacien1 from '../../assets/images/pharmacien1.png'
 import pharmacien2 from '../../assets/images/pharmacien2.png'
 import pharmacien3 from '../../assets/images/pharmacien3.png'
 import pharmacien4 from '../../assets/images/pharmacien4.png'
 import pharmacien5 from '../../assets/images/pharmacien5.png'
 

const Testimonial = () => {
  return (
    <div className='mt-[30px] lg:mt-[55px]'>
        <Swiper modules={[Pagination]} spaceBetween={30} slidesPerView={1} pagination={{clickable:true}}
         breakpoints={{
            640:{
                slidesPerView:1,
                spaceBetween:0,
            },
            768:{
                slidesPerView:2,
                spaceBetween:20,
            },
            1024:{
                slidesPerView:3,
                spaceBetween:30,
            }

        }
        }
        
        > 
         <SwiperSlide>
            <div className='py-[30px] px-5 rounded-[13px]'>
                <div className='flex items-center'>
                <img className='rounded-[30%]' src={pharmacien1} alt="" style={{ width: '70px', height: 'auto' }} />

                    <div>
                        <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                            Mr Fares
                        </h4>
                        <div className='flex items-center gap-[2px]'>
                        <span className="text-yellow-400 w-[18px] h-5"> 
                        <img src={starIcon} alt="" /> </span>
                        <span className="text-yellow-400 w-[18px] h-5"> 
                        <img src={starIcon} alt="" /> </span>
                        <span className="text-yellow-400 w-[18px] h-5"> 
                        <img src={starIcon} alt="" /> </span>
                        <span className="text-yellow-400 w-[18px] h-5"> 
                        <img src={starIcon} alt="" /> </span>
                        </div>
                    </div>
                </div>
                <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                J'apprécie la diversité des médicaments proposés par ce fournisseur. 
                    </p>
            </div>
         </SwiperSlide>



         <SwiperSlide>
            <div className='py-[30px] px-5 rounded-[13px]'>
                <div className='flex items-center'>
                <img className='rounded-[30%]' src={pharmacien2} alt="" style={{ width: '70px', height: 'auto' }} />

                    <div>
                        <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                        Dr. Fatima Al-Hassan
                        </h4>
                        <div className='flex items-center gap-[2px]'>
                        <span className="text-yellow-400 w-[18px] h-5"> 
                        <img src={starIcon} alt="" /> </span>
                        <span className="text-yellow-400 w-[18px] h-5"> 
                        <img src={starIcon} alt="" /> </span>
                        <span className="text-yellow-400 w-[18px] h-5"> 
                        <img src={starIcon} alt="" /> </span>
                        <span className="text-yellow-400 w-[18px] h-5"> 
                        <img src={starIcon} alt="" /> </span>
                        <span className="text-yellow-400 w-[18px] h-5"> 
                        <img src={starIcon} alt="" /> </span>
     
      </div>  
                    </div>
                </div>
                <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                Les produits fournis par ce fournisseur sont toujours de haute qualité et conformes aux normes de l'industrie pharmaceutique.
                    </p>
            </div>
         </SwiperSlide>






         <SwiperSlide>
            <div className='py-[30px] px-5 rounded-[13px]'>
                <div className='flex items-center'>
                <img className='rounded-[30%]' src={pharmacien3} alt="" style={{ width: '70px', height: 'auto' }} />

                    <div>
                        <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                        Dr. Leila Omar
                        </h4>
                        <div className='flex items-center gap-[2px]'>
                        <span className="text-yellow-400 w-[18px] h-5"> 
                        <img src={starIcon} alt="" /> </span>
                        <span className="text-yellow-400 w-[18px] h-5"> 
                        <img src={starIcon} alt="" /> </span>
                        <span className="text-yellow-400 w-[18px] h-5"> 
                        <img src={starIcon} alt="" /> </span>
                        <span className="text-yellow-400 w-[18px] h-5"> 
                        <img src={starIcon} alt="" /> </span>
                        <span className="text-yellow-400 w-[18px] h-5"> 
                        <img src={starIcon} alt="" /> </span>
     
      </div>  
                    </div>
                </div>
                <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                La rapidité et la fiabilité de la livraison sont des aspects essentiels pour moi en tant que pharmacien, et ce fournisseur ne me déçoit jamais à cet égard. 
                    </p>
            </div>
         </SwiperSlide>



         <SwiperSlide>
            <div className='py-[30px] px-5 rounded-[13px]'>
                <div className='flex items-center'>
                <img className='rounded-[30%]' src={pharmacien4} alt="" style={{ width: '70px', height: 'auto' }} />

                    <div>
                        <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                        Mr Youssef Ibrahim
                        </h4>
                        <div className='flex items-center gap-[2px]'>
                        <span className="text-yellow-400 w-[18px] h-5"> 
                        <img src={starIcon} alt="" /> </span>
                        <span className="text-yellow-400 w-[18px] h-5"> 
                        <img src={starIcon} alt="" /> </span>
                        <span className="text-yellow-400 w-[18px] h-5"> 
                        <img src={starIcon} alt="" /> </span>
                        <span className="text-yellow-400 w-[18px] h-5"> 
                        <img src={starIcon} alt="" /> </span>
                        <span className="text-yellow-400 w-[18px] h-5"> 
                        <img src={starIcon} alt="" /> </span>
     
      </div>  
                    </div>
                </div>
                <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                Ce fournisseur met l'accent sur le service clientèle, et cela se reflète dans chaque interaction que j'ai eue avec eux.
                    </p>
            </div>
         </SwiperSlide>






         <SwiperSlide>
            <div className='py-[30px] px-5 rounded-[13px]'>
                <div className='flex items-center'>
                <img className='rounded-[30%]' src={pharmacien5} alt="" style={{ width: '70px', height: 'auto' }} />

                    <div>
                        <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                            Mr Omar Farid
                        </h4>
                        <div className='flex items-center gap-[2px]'>
                        <span className="text-yellow-400 w-[18px] h-5"> 
                        <img src={starIcon} alt="" /> </span>
                        <span className="text-yellow-400 w-[18px] h-5"> 
                        <img src={starIcon} alt="" /> </span>
                        <span className="text-yellow-400 w-[18px] h-5"> 
                        <img src={starIcon} alt="" /> </span>
                        <span className="text-yellow-400 w-[18px] h-5"> 
                        <img src={starIcon} alt="" /> </span>
                        <span className="text-yellow-400 w-[18px] h-5"> 
                        <img src={starIcon} alt="" /> </span>
     
      </div>  
                    </div>
                </div>
                <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                Je suis impressionné par l'engagement de ce fournisseur envers l'innovation et la recherche. 
                    </p>
            </div>
         </SwiperSlide>


        </Swiper>
    </div>
  )
}

export default Testimonial