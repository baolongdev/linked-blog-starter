function Cta() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          {/* CTA box */}
          <div className="bg-blue-600 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl" data-aos="zoom-y-out">

            <div className="flex flex-col lg:flex-row justify-between items-center">

              {/* CTA content */}
              <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left">
                <h3 className="h3 text-white mb-2">Tham gia cộng đồng Discord!</h3>
                <p className="text-white text-lg opacity-75">Đưa ra yêu cầu về tính năng, báo cáo lỗi hoặc trò chuyện với tôi! Nếu không bạn có thể liên hệ với tôi tại <a className="underline" href="mailto:longle12042006a@gmail.com">longle12042006a@gmail.com</a></p>
              </div>

              {/* CTA button */}
              <div>
                <a className="btn text-blue-600 bg-gradient-to-r from-blue-100 to-white w-36" href="">Coming Soon</a>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Cta;