function Github() {
  return (
    <section className="github-section" id="github">
      <div className="github-section__content grid grid--col-2">
        <img
          decoding="async"
          loading="lazy"
          alt="Mes statistiques Github"
          src="https://github-readme-stats.vercel.app/api?username=hakinathan&show_icons=true&theme=buefy&hide=stars,contribs&theme=transparent&text_color=364fc7&title_color=7284d8&icon_color =364fc7&locale=fr&hide_border=true"
          height={195}
          width={400}
        />
        <img
          decoding="async"
          loading="lazy"
          alt="Mes statistiques par langage Github"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=hakinathan&size_weigh=0.5&count_weight=0.5&title_color=7284d8&border_color=7284d8&locale=fr"
          height={275}
          width={400}
        />
      </div>
    </section>
  );
}

export default Github;
