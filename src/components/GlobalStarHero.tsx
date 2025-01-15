import * as React from 'react';
import { PaymentCard } from './PaymentCard.tsx';
import { Statistic } from './Statistic.tsx';
import '../style/GlobalStarHero.css';

interface NavigationItem {
  label: string;
  id: string;
  isActive: boolean;
}

interface GlobalStarHeroProps {
  navigationItems: NavigationItem[];
  onMenuClick: (id: string) => void;
  onclickButton: (id: string) => void;
}

const statistics = [
  { value: '10tr+', label: 'Khách hàng' },
  { value: '20+', label: 'Giải thưởng danh giá' }
];


export const GlobalStarHero: React.FC<GlobalStarHeroProps> = ({ navigationItems, onMenuClick, onclickButton }) => {
  const[isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="flex overflow-hidden flex-col items-center pb-24 bg-slate-50 w-full px-20 max-md:px-5">
      <nav className="flex justify-between items-center w-full bg-slate-50 px-5 py-7 max-md:px-5" role="navigation" aria-label="Main navigation">
        <div className="flex items-center space-x-8">
          <a href="/" aria-label="Global Star home">
            <img
              loading="lazy"
              src="/logo_home.svg"
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
        <div
          key={index}
          className={`cursor-pointer ${
            item.isActive ? 'font-bold text-blue-600' : 'text-gray-500'
          }`}
          onClick={() => onMenuClick(item.id)} // Gọi hàm onMenuClick khi click
        >
          {item.label}
        </div>
      ))}
          </div>
        </div>
        <div className="hidden md:flex">
          <button onClick={() => onclickButton('link_mail')} 
          className="flex items-center text-base font-bold text-white bg-blue-600 rounded-lg px-8 py-4 max-md:px-5">
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
          {isMenuOpen ? (
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          )}
        </button>
      </nav>

      <div 
        className={`flex-col w-full text-3xl font-bold text-gray-500 md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'opacity-100 max-h-[1000px] mt-9 -mb-8' 
            : 'opacity-0 max-h-0 overflow-hidden'
        }`}
        style={{ width: '100vw', background: 'white', position: 'absolute', top: '55px', zIndex: 1000 }}
      >
        {[...navigationItems, { label: 'Liên hệ', id: 'link_mail', isActive: false }].map((item, index) => (
          <div 
            key={index}
            role="menuitem"
            tabIndex={0}
            className={`gap-2.5 self-stretch px-2.5 py-5 w-full flex justify-center items-center transition-all duration-300 ease-in-out transform ${
              isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
            } ${item.isActive ? 'text-white bg-blue-600' : 'bg-white'}`}
            style={{
              transitionDelay: `${index * 100}ms`
            }}
            onClick={() => onMenuClick(item.id)}
          >
            {item.label}
          </div>
        ))}
      </div>

      <main className="mt-20 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[33%] max-md:w-full relative">
            <img 
              src="/young-asia-lady-using-phone.png" 
              alt="Young Asia lady using phone"
              className="w-full h-auto max-md:w-full custom-image-style"
            />
            <div className="mt-64 max-md:mt-50 z-10">
              <PaymentCard
                cardType="Mastercard"
                cardNumber="0259"
                amount="+ $68 392 798"
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
                    <button 
                      onClick={() => onclickButton('link_mail')} 
                      className="flex gap-6 items-start mt-10 max-w-full text-base font-bold text-center text-white w-[218px] max-md:w-full"
                    >
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