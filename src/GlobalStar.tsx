import * as React from "react";
import { ReviewCard } from "./components/ReviewCard.tsx";
import { TeamMember } from "./components/TeamMember.tsx";
import { Statistic } from "./components/Statistic.tsx";
import { FeatureCard } from "./components/FeatureCard.tsx";

const teamMembers = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2a3a28a9db43dc56737e767b017c9cd5db3aa62efddc5b05890b734a71f63235?placeholderIfAbsent=true&apiKey=ca0f76b4bd974916a748ef3dbbcaecaf",
    name: "Đỗ Trọng Nghĩa",
    role: "CEO, Founder",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f0f81796a1c33e793827c6a179ee8b1d1d7d8a7f0070c1e257ff6ad657173221?placeholderIfAbsent=true&apiKey=ca0f76b4bd974916a748ef3dbbcaecaf",
    name: "Lương Phi Hùng",
    role: "CFO",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/7c0588b73f25afd3e26f8ee812ee90325639b9b96abdf4ee07af9621ad29cdbc?placeholderIfAbsent=true&apiKey=ca0f76b4bd974916a748ef3dbbcaecaf",
    name: "Lê Thanh Tú",
    role: "Co-Founder",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/25f602ffbcc8ec6994357f3d75ed0f99e934fcffc6a206266b2ce568ebb0a31c?placeholderIfAbsent=true&apiKey=ca0f76b4bd974916a748ef3dbbcaecaf",
    name: "Mike Tran",
    role: "CTO",
  },
];

const reviews = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/de64b5c48e4a7c6a37be0fb91e36051ffe2782a5368393afd93aaf3e70a09cbd?placeholderIfAbsent=true&apiKey=ca0f76b4bd974916a748ef3dbbcaecaf",
    name: "Savannah Nguyen",
    role: "CEO Sans Brothers",
    review:
      "Dịch vụ của họ đã thay đổi cách chúng tôi quản lý tài chính. Từ một doanh nghiệp gặp khó khăn về dòng tiền, giờ đây chúng tôi đã có lộ trình rõ ràng và hiệu quả hơn bao giờ hết.",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/de64b5c48e4a7c6a37be0fb91e36051ffe2782a5368393afd93aaf3e70a09cbd?placeholderIfAbsent=true&apiKey=ca0f76b4bd974916a748ef3dbbcaecaf",
    name: "Eleanor Pena",
    role: "CEO Sans Brothers",
    review:
      "Không chỉ tư vấn, họ thực sự đồng hành cùng chúng tôi trong từng giai đoạn. Tầm nhìn chiến lược mà họ mang lại đã giúp công ty tối ưu hóa chi phí và gia tăng lợi nhuận.",
  },
];

const features = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/707f8c383da3930601d19e0f1b08dfc657f9b0a8506bebf0e13761739602bb00?placeholderIfAbsent=true&apiKey=ca0f76b4bd974916a748ef3dbbcaecaf",
    title: "Chuyên môn vượt trội và uy tín trong ngành",
    description:
      "Đội ngũ chuyên gia có kiến thức sâu rộng, kinh nghiệm thực tiễn và khả năng đưa ra các giải pháp tài chính tối ưu, được công nhận bởi khách hàng và đối tác trong nhiều lĩnh vực.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b510364cc5fdae4efabe38e356a1e426c26fae82c9cbdb76bfcc4227b69a5487?placeholderIfAbsent=true&apiKey=ca0f76b4bd974916a748ef3dbbcaecaf",
    title: "Hiệu quả và giá trị bền vững",
    description:
      "Thành công trong việc cải thiện cấu trúc tài chính, tối ưu hóa nguồn vốn và nâng cao hiệu quả hoạt động, giúp doanh nghiệp phát triển bền vững và đạt được lợi thế cạnh tranh lâu dài.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/567828ccbca146eacf5fea95cf57d3f7b03588e54f6a09b5588c4f48d031d6c0?placeholderIfAbsent=true&apiKey=ca0f76b4bd974916a748ef3dbbcaecaf",
    title: "Tận tâm và đồng hành cùng khách hàng",
    description:
      "Đặt lợi ích của khách hàng lên hàng đầu, xây dựng mối quan hệ bền chặt dựa trên sự tin cậy, minh bạch và cam kết mang lại giải pháp phù hợp nhất cho từng nhu cầu riêng biệt.",
  },
];

export const GlobalStar = () => {
  return (
    <main className="flex overflow-hidden flex-col justify-center items-center bg-white">
      <nav className="flex overflow-hidden flex-col pb-24 w-full bg-slate-50 max-md:max-w-full">
        <div className="flex overflow-hidden flex-col justify-center items-center px-16 py-7 w-full bg-slate-50 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-wrap gap-5 justify-between w-full max-w-[1200px] max-md:max-w-full">
            <div className="flex flex-wrap gap-10 items-center max-md:max-w-full">
              <div className="flex gap-3 items-center self-stretch py-2.5 my-auto text-3xl font-semibold tracking-tighter leading-tight text-center text-stone-950">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e8d6eaa1642f538cff9955096e470bdc4ae5d4038915c2c583683c23c6aed24?placeholderIfAbsent=true&apiKey=ca0f76b4bd974916a748ef3dbbcaecaf"
                  alt="Global Star logo"
                  className="object-contain shrink-0 self-stretch my-auto aspect-square w-[42px]"
                />
                <div className="self-stretch my-auto">Global Star</div>
              </div>
              <div className="flex gap-8 items-start self-stretch my-auto text-base text-gray-500 min-w-[240px] max-md:max-w-full">
                <div className="font-bold text-blue-600">Giới thiệu</div>
                <div>Đối tác</div>
                <div>Sản phẩm</div>
                <div>Đại diện</div>
                <div>Review</div>
              </div>
            </div>
            <button className="flex gap-8 items-center self-start mt-1.5 text-base font-bold text-center text-white">
              <div className="gap-2 self-stretch px-8 py-4 my-auto bg-blue-600 rounded-lg w-[126px] max-md:px-5">
                Liên hệ
              </div>
            </button>
          </div>
        </div>

        {/* Hero Section */}
        <section className="flex flex-wrap gap-5 justify-between self-center mt-20 w-full max-w-[1200px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-8 justify-center items-start p-4 my-auto bg-white rounded-2xl shadow-2xl">
            <div className="flex gap-2 items-end">
              <div className="flex w-[76px]">
                <div className="flex shrink-0 -mr-5 w-12 h-12 bg-red-600 rounded-full" />
                <div className="flex shrink-0 w-12 h-12 bg-amber-300 rounded-full" />
              </div>
              <div className="flex flex-col justify-center text-sm font-medium text-gray-500">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6fb263c5013350fe7c02fc563a51d467daa29cc78f40fd91ae3474d394108d3f?placeholderIfAbsent=true&apiKey=ca0f76b4bd974916a748ef3dbbcaecaf"
                  alt=""
                  className="object-contain aspect-[2.25] w-[54px]"
                />
                <div className="mt-2">Mastercard ~ 0259</div>
              </div>
            </div>
            <div className="text-sm font-bold text-lime-600">+ $4 843.93</div>
          </div>

          <div className="flex flex-col max-md:max-w-full">
            <div className="flex flex-col w-full max-md:max-w-full">
              <div className="flex flex-col max-w-full w-[555px]">
                <h1 className="text-6xl font-semibold tracking-tighter leading-[77px] text-stone-950 max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
                  Chạm công nghệ
                  <br />
                  Mở tương lai
                </h1>
                <p className="mt-6 text-base font-medium leading-6 text-gray-500 max-md:max-w-full">
                  Global Star cam kết đồng hành cùng khách hàng trên hành trình
                  đổi mới, mang lại sự tối ưu trong quản lý tài chính, hiệu quả
                  trong thanh toán và mở ra những cơ hội phát triển bền vững.
                </p>
              </div>
              <button className="flex gap-6 items-start mt-10 max-w-full text-base font-bold text-center text-white w-[218px]">
                <div className="gap-2 self-stretch px-8 py-4 bg-blue-600 rounded-lg w-[218px] max-md:px-5">
                  Tìm hiểu ngay!
                </div>
              </button>
            </div>
            <div className="flex gap-10 justify-center items-center self-start mt-14 text-stone-950 max-md:mt-10">
              <Statistic number="10tr+" label="Khách hàng" />
              <div className="shrink-0 self-stretch my-auto w-0 h-12 border border-solid bg-zinc-300 border-zinc-300" />
              <Statistic number="20+" label="Giải thưởng danh giá" />
            </div>
          </div>
        </section>
      </nav>

      {/* Features Section */}
      <section className="overflow-hidden px-20 py-16 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col max-w-full w-[571px]">
                <h2 className="text-4xl font-semibold tracking-tighter leading-[52px] text-stone-950 max-md:max-w-full">
                  Giải pháp tài chính
                  <br />
                  Nền tảng thành công
                </h2>
                <p className="mt-4 text-base font-medium leading-7 text-gray-500 max-md:max-w-full">
                  Tự hào là công ty dẫn đầu trong lĩnh vực tài chính doanh
                  nghiệp, đưa ra tư vấn, hỗ trợ cơ cấu đồng thời cung cấp giải
                  pháp tài chính cho doanh nghiệp.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-6 w-full max-md:mt-10 max-md:max-w-full">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="flex overflow-hidden flex-col justify-center items-center px-20 py-28 w-full bg-slate-50 max-md:px-5 max-md:py-24 max-md:max-w-full">
        <div className="flex flex-col mb-0 w-full max-w-[1200px] max-md:mb-2.5 max-md:max-w-full">
          <div className="flex flex-wrap items-center w-full">
            <h2 className="self-stretch my-auto text-5xl font-bold leading-[58px] text-stone-950 w-[552px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
              Làm quen với những đại diện của chúng tôi
            </h2>
            <div className="flex flex-1 shrink self-stretch basis-0 h-[116px] w-[101px]" />
            <p className="self-stretch my-auto text-base font-medium leading-7 text-gray-500 w-[547px] max-md:max-w-full">
              Chúng tôi quy tụ những chuyên gia hàng đầu với nhiều năm kinh
              nghiệm, am hiểu sâu sắc ngành nghề và giàu tầm nhìn chiến lược.
              <br />
              Đội ngũ cam kết đồng hành cùng khách hàng, mang lại giá trị vượt
              trội và định hướng thành công bền vững.
            </p>
          </div>
          <div className="flex flex-wrap gap-8 items-start mt-14 max-md:mt-10 max-md:max-w-full">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="flex overflow-hidden flex-col justify-end items-center py-28 w-full bg-white max-md:py-24 max-md:max-w-full">
        <div className="text-sm font-bold text-center text-blue-600">
          REVIEW
        </div>
        <h2 className="mt-3 text-5xl font-semibold tracking-tighter text-center leading-[58px] text-neutral-800 w-[694px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
          Khách hàng nói gì về <br />
          Global Star?
        </h2>
        <div className="flex gap-10 items-center self-stretch mt-16 max-md:mt-10">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="flex overflow-hidden flex-col justify-center items-center px-16 py-28 w-full bg-white max-md:px-5 max-md:pt-24 max-md:max-w-full">
        <div className="overflow-hidden pl-20 max-w-full bg-blue-600 rounded-2xl w-[1181px] max-md:pl-5">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col justify-center self-stretch my-auto mr-0 w-full text-base max-md:mt-10 max-md:max-w-full">
                <h2 className="max-w-full text-5xl font-bold text-white leading-[58px] w-[645px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                  Liên hệ ngay với chúng tôi để được tư vấn chuyên sâu!
                </h2>
                <p className="mt-7 font-medium leading-7 text-gray-200 max-md:max-w-full">
                  Hãy để lại email và đội ngũ chuyên gia của chúng tôi sẽ liên
                  hệ với bạn để trao đổi chi tiết, giúp bạn đưa ra quyết định
                  thông minh và hiệu quả nhất.
                </p>
                <form className="flex flex-wrap gap-4 mt-7 max-w-full rounded-[100px] w-[543px]">
                  <div className="flex flex-col grow shrink-0 self-start mt-4 font-medium text-white basis-0 w-fit">
                    <label htmlFor="email" className="self-start">
                      Enter your email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="shrink-0 mt-4 h-px border border-solid border-stone-300 bg-transparent"
                      aria-label="Enter your email"
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex-1 shrink gap-2 self-stretch px-8 py-4 font-bold text-center text-blue-600 whitespace-nowrap bg-white min-h-[56px] rounded-[100px] max-md:px-5"
                  >
                    Gửi
                  </button>
                </form>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex relative z-10 flex-col items-start px-20 pt-24 pb-96 -mr-32 min-h-[548px] max-md:px-5 max-md:py-24 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6933f785f19f85afc63f9052b74ecd7042e4ba287eb73d5837d8d5d9d9376b46?placeholderIfAbsent=true&apiKey=ca0f76b4bd974916a748ef3dbbcaecaf"
                  alt=""
                  className="object-cover absolute inset-0 size-full"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/56930363297e75388766a7eee0e9f881691def5a9f5211bdad2346d4c335d6f1?placeholderIfAbsent=true&apiKey=ca0f76b4bd974916a748ef3dbbcaecaf"
                  alt=""
                  className="object-contain max-w-full aspect-[1.92] fill-white w-[146px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex overflow-hidden flex-col w-full bg-white max-md:max-w-full">
        <div className="flex flex-col px-20 pt-20 pb-10 w-full bg-blue-600 fill-blue-600 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col max-md:max-w-full">
            <h2 className="gap-10 self-stretch text-6xl font-semibold tracking-tighter text-white leading-[77px] w-[762px] max-md:mr-1.5 max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
              Cùng Global Star
              <br />
              phát triển vững bền
            </h2>
            <div className="flex flex-wrap gap-10 items-start self-start mt-16 max-md:mt-10 max-md:max-w-full">
              <address className="flex flex-wrap gap-3.5 items-start min-w-[240px] max-md:max-w-full not-italic">
                <div className="flex flex-col items-center w-[46px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d79fecb7de6976b708b62e1346037645e78691f62733b24d88e3308ab81c183?placeholderIfAbsent=true&apiKey=ca0f76b4bd974916a748ef3dbbcaecaf"
                    alt=""
                    className="object-contain aspect-square w-[46px]"
                  />
                </div>
                <div className="flex flex-col justify-center text-base text-white min-w-[240px] max-md:max-w-full">
                  <div className="flex gap-3 items-start max-md:max-w-full">
                    <div className="text-right w-[108px]">Trụ sở chính: </div>
                    <div className="leading-6 w-[360px]">
                      Biệt thự E24 N05 khu đô thị Dịch Vọng, Cầu Giấy, Hà Nội
                    </div>
                  </div>
                  <div className="flex gap-3 items-start mt-2 max-md:max-w-full">
                    <div className="text-right w-[108px]">VP Miền Bắc:</div>
                    <div className="leading-6 w-[360px]">
                      Tầng 2 toà nhà Imedia, 508 Trường Chinh, Đống Đa , Hà Nội.
                    </div>
                  </div>
                  <div className="flex gap-3 items-start mt-2 max-md:max-w-full">
                    <div className="text-right w-[108px]">VP Miền Nam: </div>
                    <div className="leading-6 w-[360px]">
                      Tầng 3 toà nhà MB Bank thị xã Chơn Thành, tỉnh Bình Phước.
                    </div>
                  </div>
                </div>
              </address>
              <div className="flex gap-3.5 items-center">
                <div className="flex flex-col items-center self-stretch my-auto w-[46px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1fcaee7bb960efe5f77a5aae5cf5638396d3202e24baf51a643066fd2883668?placeholderIfAbsent=true&apiKey=ca0f76b4bd974916a748ef3dbbcaecaf"
                    alt=""
                    className="object-contain aspect-square w-[46px]"
                  />
                </div>
                <a
                  href="mailto:hello@mikeday.co"
                  className="self-stretch my-auto text-base text-white"
                >
                  hello@mikeday.co
                </a>
              </div>
            </div>
            <div className="shrink-0 mt-16 h-0.5 border-2 border-blue-500 border-solid max-md:mt-10 max-md:max-w-full" />
            <div className="flex flex-wrap gap-5 justify-between mt-10 w-full text-base text-white max-md:mr-1 max-md:max-w-full">
              <div>© Global Star by Mike Tran</div>
              <div className="flex gap-10 items-start">
                <a href="#terms">Terms & Conditions</a>
                <a href="#privacy">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
