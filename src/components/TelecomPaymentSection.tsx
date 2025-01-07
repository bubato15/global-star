import * as React from "react";
import { ServiceDescription } from "./ServiceDescription.tsx";
import { Testimonial } from "./Testimonial.tsx";

export const TelecomPaymentSection: React.FC = () => {
  return (
    <section className="flex overflow-hidden flex-col justify-center items-center px-16 py-28 bg-white max-md:px-5 max-md:pt-24" aria-label="Telecom Payment Services">
      <div className="flex flex-wrap gap-10 items-center max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/2104ee8c3b1a4036982aceb97afa3b1c/7f4fbe2261a31df567a34f3e64952ce765244206e4ff56ab5edcbbfe6c48f8c8?apiKey=2104ee8c3b1a4036982aceb97afa3b1c&"
          alt="Telecom payment services illustration"
          className="object-contain self-stretch my-auto aspect-[0.94] min-w-[240px] w-[437px] max-md:max-w-full"
        />
        <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[486px] max-md:max-w-full">
          <ServiceDescription
            title="Dịch vụ thanh toán viễn thông"
            description="Là đối tác chiến lược của các nhà mạng lớn như Viettel, Vinaphone, Mobifone đồng thời hỗ trợ, cung cấp dịch vụ top-up mã thẻ và thẻ cào."
          />
          <div className="mt-20">
            <Testimonial
              quote="Dịch vụ hỗ trợ nhiệt tình và siêu nhanh chóng. Tôi đã tìm thấy một trải nghiệm khác biệt từ Global Star. Dịch vụ thanh toán hoàn hảo cho tất cả."
              author="Jesica Nguyen"
              role="CTO, HK Group"
              avatarSrc="https://cdn.builder.io/api/v1/image/assets/2104ee8c3b1a4036982aceb97afa3b1c/881cd42bd741e9fe8947e11998f722b47ca0e385e2a9a67cae894ec8a0424df2?apiKey=2104ee8c3b1a4036982aceb97afa3b1c&"
            />
          </div>
        </div>
      </div>
    </section>
  );
};