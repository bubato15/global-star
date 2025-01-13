import * as React from "react";
import { ServiceDescription } from "./ServiceDescription.tsx";
import { Testimonial } from "./Testimonial.tsx";

export const TelecomPaymentSection: React.FC = () => {
  return (
    <section id = 'products' className="flex overflow-hidden flex-col justify-center items-center px-16 py-28 bg-white max-md:px-5 max-md:pt-24" aria-label="Telecom Payment Services">
      <div className="flex flex-wrap gap-10 items-center max-md:max-w-full justify-center">
        <img
          loading="lazy"
          src="/image_pay.svg"
          alt="Telecom payment services illustration"
          className="object-contain self-stretch my-auto aspect-[0.94] max-md:max-w-full"
        />
        <div className="flex flex-col self-stretch my-auto max-md:max-w-full">
          <ServiceDescription
            title="Dịch vụ thanh toán viễn thông"
            description="Là đối tác chiến lược của các nhà mạng lớn như Viettel, Vinaphone, Mobifone đồng thời hỗ trợ, cung cấp dịch vụ top-up mã thẻ và thẻ cào."
          />
          <div className="mt-20">
            <Testimonial
              quote="Dịch vụ hỗ trợ nhiệt tình và siêu nhanh chóng. Tôi đã tìm thấy một trải nghiệm khác biệt từ Global Star. Dịch vụ thanh toán hoàn hảo cho tất cả."
              author="Jesica Nguyen"
              role="CTO, HK Group"
              avatarSrc="/logo_bot.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};