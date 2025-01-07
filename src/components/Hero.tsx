import * as React from "react";
import '../style/Hero.css';

export const Hero: React.FC = () => {
  return (
    <main className="flex justify-center items-center">
      <div className="carousel">
        <img className="logo" src="https://yourway.viettel.vn/images/logo-white.png"/>
        <img className="logo" src="https://vnptgroup.vn/wp-content/uploads/2020/06/logo-vnptgroup.png"/>
        <img className="logo" src="https://static.wixstatic.com/media/9d8ed5_a8f2d6cc583a4feb9b78caadd2aff8bd~mv2.png/v1/fill/w_980,h_613,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/9d8ed5_a8f2d6cc583a4feb9b78caadd2aff8bd~mv2.png"/>
        <img className="logo" src="https://sanfactory.vn/wp-content/uploads/2023/10/logo-vpbank-4-1400x319.png"/>
        <img className="logo" src="https://static.wixstatic.com/media/9d8ed5_03ea4831549b46ecabc9cd0117623d0e~mv2.png/v1/fill/w_568,h_276,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9d8ed5_03ea4831549b46ecabc9cd0117623d0e~mv2.png"/>
        <img className="logo" src="https://hoccontentai.com/wp-content/uploads/2023/07/logo-fpt-2.png"/>
        <img className="logo" src="https://sanfactory.vn/wp-content/uploads/2023/10/logo-vietinbank-11-1400x497.png"/>
        <img className="logo" src="https://www.logo.wine/a/logo/Binance/Binance-Logo.wine.svg"/>
      </div>  
    </main>
  );
}