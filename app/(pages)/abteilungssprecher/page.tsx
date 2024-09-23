import SectionDivider from "@/components/-General/SectionDivider";
import SectionHeading from "@/components/-General/SectionHeading";
import { YouTubeEmbed } from "@next/third-parties/google";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section
        id="projects"
        className="mt-[5rem] flex flex-col justify-center items-center"
      >
        <div className="mt-[4rem] mb-[8rem] flex justify-center items-center w-[300rem] h-[20rem] bg-secondary transform rotate-[3.5deg]">
          <div className="flex flex-col w-full text-mywhite text-center transform -rotate-[3.5deg]">
            <SectionHeading
              size="text-[1.8rem] md:text-[3rem]"
              additional="font-semibold mb-5"
            >
              Abteilungssprecherwahl
            </SectionHeading>
            <SectionHeading
              size="text-[1rem] md:text-[3rem]"
              additional="font-semibold"
            >
              STUPPNIG MARKUS - Abteilungssprecher
            </SectionHeading>
            <SectionHeading
              size="text-[1rem] md:text-[3rem]"
              additional="font-semibold mb-5"
            >
              RYCHKOV SERGEJ - Stellvertreter
            </SectionHeading>
          </div>
        </div>

        <blockquote className="relative">
          <svg className="absolute -top-6 -start-8 size-16" style={{ color: 'lightgrey' }} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z" fill="currentColor"></path>
          </svg>

          <div className="relative z-10">
            <p className="text-xl text-gray-800 md:text-3xl md:leading-normal dark:text-white">
              <em>
                Government of the people, by the people, for the people
              </em>
            </p>
          </div>
        </blockquote>

        <p className="italic text-lg">
          - Abraham Lincoln
        </p>


        <div className="flex flex-col h-full ml-[2rem] mt-[2rem]">
          <div className="mr-[2rem]">
            <YouTubeEmbed videoid="uHgt8giw1LY?autoplay=1" height={400} />
          </div>
          <SectionHeading
            textColor="text-myblack"
            size="text-[2rem] md:text-[3rem]"
            additional="font-semibold mb-5 mt-10"
          >
            Unser Programm
          </SectionHeading>
          <p>
            Uns interessiert es was EUCH wichtig ist. Der Hauptpunkt unseres
            Wahlprogramms ist ein Abstimmungssystem mit der wir EURE Meinungen
            einholen. Wir wollen wissen was EUCH wichtig ist und wie wir die
            Schule für EUCH verbessern können.
          </p>
          <SectionHeading
            textColor="text-myblack"
            size="text-[1rem] md:text-[1rem]"
            additional="font-semibold mb-3 mt-5"
          >
            Hier sind einige Beispiele über die abgestimmt werden kann:
          </SectionHeading>
          <ul className="list-disc">
            <li>Getränkeautomat vom 8. Stock in den 9. Stock verschieben</li>
            <li>
              Laser Tag oder Spa Ausflug um vom Schulstress runter zu kommen
            </li>
            <li>
              3. Klässler können mit einem Buddy aus der 5. einen Tag die
              Spezialiserung schnuppern
            </li>
            <li>
              Bessere Klassenräume (Ausstattung: Beamer, Steckdosen,
              Verlängerungskabel)
            </li>
            <li>
              Überarbeitung der Aula im 9. und 11. Stock (Spinde, Möbel,
              Steckdosen, etc.)
            </li>
            <li>
              Mehr Freiheit bei der Organisation des Meet & Greet
            </li>
            <li>Schüler dürfen die Microwelle im Lehrerzimmer nutzen</li>
            <li>
              Organisation von Events (Kino, Ausflüge, Schnitzeljagd, etc.)
            </li>
            <li>
              Organisation eines Erste-Hilfe Kurs
            </li>
            <li>
              Lehrer-Awards bei den Spirit-of-HIT days!
            </li>
          </ul>

          <SectionHeading
            textColor="text-myblack"
            size="text-[2rem] md:text-[3rem]"
            additional="font-semibold mb-5 mt-10"
          >
            Über uns
          </SectionHeading>
          <SectionHeading
            textColor="text-myblack"
            size="text-[1.5rem] md:text-[2.5rem]"
            additional="font-semibold mb-5"
          >
            Markus Stuppnig 5DHIT
          </SectionHeading>
          <p>
            Ich kandidiere gemeinsam mit Sergej Rychkov als Abteilungssprecher
            der HIT 2024/25. Ich möchte dieser Schule was zurückgeben, nachdem
            der Herr Professor Koppensteiner, der Herr Professor Brein, aber
            auch zahlreiche andere Personen sich für mich und mein
            Auslandssemester eingesetzt haben. Ich möchte mich mit diesem Amt
            dafür bedanken und auch euch eure Träume und Wünsche erfüllen.
          </p>

          <SectionHeading
            textColor="text-myblack"
            size="text-[1.5rem] md:text-[2.5rem]"
            additional="font-semibold mb-5 mt-5"
          >
            Sergej Rychkov 5DHIT
          </SectionHeading>
          <p>
            Ich kandidiere gemeinsam mit Markus Stuppnig als Abteilungssprecher
            der HIT 2024/25.
          </p>

          <p>
            Wählt Markus Stuppnig als Abteilungssprecher und Sergej Rychkov als
            Stellvertreter um uns die Möglichkeit zu geben uns für euch
            einzusetzen!
          </p>
        </div>
      </section>
    </main>
  );
}
