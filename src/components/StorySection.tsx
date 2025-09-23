import { Heart, Quote, User } from "lucide-react";
import { StoryCard } from "./StoryCard";

interface StorySectionsProps {
  sections: any;
  language: "es" | "pt";
}

export const StorySection: React.FC<StorySectionsProps> = ({
  sections,
  language,
}) => {
  const sectionEntries = Object.entries(sections).filter(
    ([key, section]: [string, any]) =>
      section && section.title && section.content
  );
  const quoteTranslations = {
    es: "La esperanza es lo último que se pierde. Con su ayuda, puedo volver a caminar y demostrar que los sueños nunca mueren, solo esperan el momento adecuado para hacerse realidad.",
    pt: "A esperança é a última a morrer. Com sua ajuda, posso voltar a caminhar e provar que os sonhos nunca morrem, apenas esperam o momento certo para se tornarem realidade.",
  };

  return (
    <div className="relative section-padding">
      {/* Section Header */}
      <div className="text-center mb-12 animate-fadeInUp">
        <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200/50 px-5 py-2 rounded-full shadow-sm mb-5">
          <User className="h-5 w-5 text-blue-500" />
          <span className="text-sm font-semibold text-blue-700">
            {language === "es" ? "Mi Historia" : "Minha História"}
          </span>
        </div>

        <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent mb-4">
          {language === "es" ? "Conoce Mi Historia" : "Conheça Minha História"}
        </h2>

        <p className="text-lg text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
          {language === "es"
            ? "Cada historia tiene un propósito. La mía es inspirar esperanza y demostrar que con apoyo, podemos superar cualquier obstáculo y volver a caminar hacia nuestros sueños."
            : "Cada história tem um propósito. A minha é inspirar esperança e provar que, com apoio, podemos superar qualquer obstáculo e voltar a caminhar rumo aos nossos sonhos."}
        </p>
      </div>

      {/* Story Cards Grid */}
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {sectionEntries.map(([key, section]: [string, any], index) => (
          <StoryCard
            key={key}
            title={section.title}
            content={section.content}
            index={index}
          />
        ))}
      </div>

      {/* Inspirational Quote Section */}
      <div className="mt-16 text-center animate-fadeInUp animation-delay-400">
        <div className="max-w-3xl mx-auto glass-quote rounded-2xl p-10 relative overflow-hidden shadow-xl">
          {/* Decoración de fondo */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-100/30 via-purple-100/20 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-purple-100/30 via-blue-100/20 to-transparent rounded-full blur-xl"></div>

          <div className="relative z-10">
            {/* Icono principal */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-8 shadow-lg animate-glow">
              <Heart className="h-8 w-8 text-white animate-heartbeat drop-shadow-sm" />
            </div>

            {/* Quote icon decorativo */}
            <div className="absolute top-8 left-8 opacity-10">
              <Quote className="h-12 w-12 text-blue-500" />
            </div>
            <div className="absolute bottom-8 right-8 opacity-10 rotate-180">
              <Quote className="h-12 w-12 text-purple-500" />
            </div>

            {/* Texto del quote */}
            <blockquote className="text-xl lg:text-2xl font-medium text-primary italic mb-8 leading-relaxed relative">
              <span className="relative z-10">
                {quoteTranslations[language]}
              </span>
            </blockquote>

            {/* Línea decorativa */}
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6"></div>

            {/* Autor */}
            <cite className="text-lg font-bold text-blue-600 not-italic">
              Cesar Maicol Rodriguez Salvia
            </cite>

            {/* Título/subtítulo */}
            <p className="text-secondary text-base mt-2 font-medium">
              {language === "es"
                ? "Luchador incansable por la vida"
                : "Lutador incansável pela vida"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
