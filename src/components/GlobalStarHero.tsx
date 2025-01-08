import * as React from 'react';
import { NavigationItem } from './NavigationItem.tsx';
import { PaymentCard } from './PaymentCard.tsx';
import { Statistic } from './Statistic.tsx';
import '../style/GlobalStarHero.css';

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
  const[isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="flex overflow-hidden flex-col items-center pb-24 bg-slate-50 w-full px-20 max-md:px-5">
      <nav className="flex justify-between items-center w-full bg-slate-50 px-5 py-7 max-md:px-5" role="navigation" aria-label="Main navigation">
        <div className="flex items-center space-x-8">
          <a href="/" aria-label="Global Star home">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/2104ee8c3b1a4036982aceb97afa3b1c/8e8d6eaa1642f538cff9955096e470bdc4ae5d4038915c2c583683c23c6aed24?apiKey=2104ee8c3b1a4036982aceb97afa3b1c&"
              alt="Global Star logo"
              className="object-contain aspect-square w-[42px] max-md:w-[32px]"
              width="42"
              height="42"
            />
          </a>
          <h1 className="ml-2 text-3xl font-semibold tracking-tighter leading-tight text-stone-950 max-md:text-2xl">
            Global Star
          </h1>
          <div className="hidden md:flex md:space-x-8">
            {navigationItems.map((item, index) => (
              <NavigationItem key={index} {...item} />
            ))}
          </div>
        </div>
        <div className="hidden md:flex">
          <button className="flex items-center text-base font-bold text-white bg-blue-600 rounded-lg px-8 py-4 max-md:px-5">
            Liên hệ
          </button>
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-dropdown"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
      </nav>

      <div className={`flex-col ${isMenuOpen ? 'flex' : 'hidden'} md:hidden`}>
        {navigationItems.map((item, index) => (
          <NavigationItem key={index} {...item} />
        ))}
      </div>

      <main className="mt-20 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[33%] max-md:w-full">
            <img 
              src="/young-asia-lady-using-phone.png" 
              alt="Young Asia lady using phone"
              className="w-full h-auto max-md:w-full custom-image-style"
            />
            <div className="mt-64 max-md:mt-50 z-10">
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
                <div className="flex flex-col w-[18%] max-md:hidden">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/2104ee8c3b1a4036982aceb97afa3b1c/23afc6102fc64517981e38538178b3dc9ec3a1b64427e3fef2f52f468edbd079?apiKey=2104ee8c3b1a4036982aceb97afa3b1c&"
                    alt="Global Star feature illustration"
                    className="object-contain shrink-0 self-stretch my-auto max-w-full aspect-[0.96] w-[120px]"
                  />
                </div>
                <div className="flex flex-col ml-5 w-[82%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
                    <div className="flex flex-col max-w-full w-[555px] max-md:w-full">
                      <h1 className="text-6xl font-semibold tracking-tighter leading-[77px] text-stone-950 max-md:text-4xl max-md:leading-[53px]">
                        Chạm công nghệ
                        <br />
                        Mở tương lai
                      </h1>
                      <p className="mt-6 text-base font-medium leading-6 text-gray-500 max-md:text-sm">
                        Global Star cam kết đồng hành cùng khách hàng trên hành
                        trình đổi mới, mang lại sự tối ưu trong quản lý tài
                        chính, hiệu quả trong thanh toán và mở ra những cơ hội
                        phát triển bền vững.
                      </p>
                    </div>
                    <button className="flex gap-6 items-start mt-10 max-w-full text-base font-bold text-center text-white w-[218px] max-md:w-full">
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
      </main>

      <section className="flex gap-10 justify-center items-center mt-14 ml-48 text-stone-950 max-md:mt-10 max-md:ml-0">
        {statistics.map((stat, index) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <div className="shrink-0 self-stretch my-auto w-0 h-12 border border-solid bg-zinc-300 border-zinc-300" />
            )}
            <Statistic {...stat} />
          </React.Fragment>
        ))}
      </section>
    </header>
  );
};