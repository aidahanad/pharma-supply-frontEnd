

function Contact() {
  return <section className="gradient-header1">


    <div className="px-4 mx-auto max-w-screen-md ">
      <h2 className="heading text-center">Contactez-Nous</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text__para">
       avez-vous un probleme technique , un probleme avec un fournisseur ?
      </p>
      <form action="#" className="space-y-8">
        <div>
          <label htmlFor="email" className="form__label">
            Votre Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="example@gmail.com"
            className=" form__input mt-1"
          />
        </div>


        <div >
          <label htmlFor="subject" className="form__label">
            Votre Sujet
          </label>
          <input
            type="text"
            id="subject"
            placeholder="votre sujet..."
            className=" form__input mt-1"
          />
        </div>



        <div className="sm:col-span-2">
          <label htmlFor="message" className="form__label">
            Votre Message
          </label>
          <textarea rows='6'
          
            type="text"
            id="message"
            placeholder="votre probleme..."
            className=" form__input mt-1"
          />
        </div>
        <button type="submit" className="btn rounded sm:w-fit">Envoyez</button>
      </form>
    </div>













  </section>
}

export default Contact