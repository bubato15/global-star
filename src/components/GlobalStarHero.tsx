import * as React from 'react';
import { NavigationItem } from './NavigationItem.tsx';
import { PaymentCard } from './PaymentCard.tsx';
import { Statistic } from './Statistic.tsx';

const navigationItems = [
  { label: 'Giới thiệu', isActive: true },
  { label: 'Đối tác', isActive: false },
  { label: 'Sản phẩm', isActive: false },
  { label: 'Đại diện', isActive: false },
  { label: 'Review', isActive: false }
];

const statistics = [
  { value: '10tr+', label: 'Khách hàng' },
  { value: '20+', label: 'Giải thưởng danh giá' }
];

export const GlobalStarHero: React.FC = () => {
  return (
    <section className="flex overflow-hidden flex-col items-center pb-24 bg-slate-50 w-full px-20">
      <nav className="flex overflow-hidden flex-col justify-center items-center self-stretch px-16 py-7 w-full bg-slate-50 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between w-full max-md:max-w-full">
          <div className="flex flex-wrap gap-10 items-center max-md:max-w-full">
            <div className="flex gap-3 items-center self-stretch py-2.5 my-auto text-3xl font-semibold tracking-tighter leading-tight text-center text-stone-950">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/2104ee8c3b1a4036982aceb97afa3b1c/8e8d6eaa1642f538cff9955096e470bdc4ae5d4038915c2c583683c23c6aed24?apiKey=2104ee8c3b1a4036982aceb97afa3b1c&"
                alt="Global Star logo"
                className="object-contain shrink-0 self-stretch my-auto aspect-square w-[42px]"
              />
              <div className="self-stretch my-auto">Global Star</div>
            </div>
            <div className="flex gap-8 items-start self-stretch my-auto text-base min-w-[240px] max-md:max-w-full">
              {navigationItems.map((item, index) => (
                <NavigationItem key={index} {...item} />
              ))}
            </div>
          </div>
          <button className="flex gap-8 items-center self-start mt-1.5 text-base font-bold text-center text-white">
            <div className="gap-2 self-stretch px-8 py-4 my-auto bg-blue-600 rounded-lg w-[126px] max-md:px-5">
              Liên hệ
            </div>
          </button>
        </div>
      </nav>

      <section className="mt-20 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <img 
                src="/young-asia-lady-using-phone.png" 
                alt="Young Asia lady using phone"
                className="w-full h-auto"
                style={{
                    position: 'absolute',
                    width: '373px',
                    left: '10%'
                }}    
              />
            <div className="mt-64 max-md:mt-10 z-10">
              <PaymentCard
                cardType="Mastercard"
                cardNumber="0259"
                amount="+ $4 843.93"
              />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[67%] max-md:ml-0 max-md:w-full">
            <div className="grow max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[18%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/2104ee8c3b1a4036982aceb97afa3b1c/23afc6102fc64517981e38538178b3dc9ec3a1b64427e3fef2f52f468edbd079?apiKey=2104ee8c3b1a4036982aceb97afa3b1c&"
                    alt="Global Star feature illustration"
                    className="object-contain shrink-0 self-stretch my-auto max-w-full aspect-[0.96] w-[120px] max-md:mt-10"
                  />
                </div>
                <div className="flex flex-col ml-5 w-[82%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
                    <div className="flex flex-col max-w-full w-[555px]">
                      <h1 className="text-6xl font-semibold tracking-tighter leading-[77px] text-stone-950 max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
                        Chạm công nghệ
                        <br />
                        Mở tương lai
                      </h1>
                      <p className="mt-6 text-base font-medium leading-6 text-gray-500 max-md:max-w-full">
                        Global Star cam kết đồng hành cùng khách hàng trên hành
                        trình đổi mới, mang lại sự tối ưu trong quản lý tài
                        chính, hiệu quả trong thanh toán và mở ra những cơ hội
                        phát triển bền vững.
                      </p>
                    </div>
                    <button className="flex gap-6 items-start mt-10 max-w-full text-base font-bold text-center text-white w-[218px]">
                      <div className="gap-2 self-stretch px-8 py-4 bg-blue-600 rounded-lg w-[218px] max-md:px-5">
                        Tìm hiểu ngay!
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex gap-10 justify-center items-center mt-14 ml-48 text-stone-950 max-md:mt-10">
        {statistics.map((stat, index) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <div className="shrink-0 self-stretch my-auto w-0 h-12 border border-solid bg-zinc-300 border-zinc-300" />
            )}
            <Statistic {...stat} />
          </React.Fragment>
        ))}
      </section>
    </section>
  );
};