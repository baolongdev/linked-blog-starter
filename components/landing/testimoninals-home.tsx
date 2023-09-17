import IframeResizer from 'iframe-resizer-react'

function TestimonialsHome() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">What our users say</h1>
            <p className="text-xl text-gray-600">Don't take my word for it. See what our users have to say about Fleeting Notes</p>
          </div>
          <IframeResizer
            log
            src="https://embed.testimonial.to/carousel/all/fleeting-notes-testimonial?theme=light&autoplay=off&showmore=off&one-row=off&same-height=off"
            className="w-full overflow-hidden"
          ></IframeResizer>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsHome;