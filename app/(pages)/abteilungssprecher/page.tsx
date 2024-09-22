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

        <div className="flex flex-col h-full ml-[2rem]">
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
              3. Klässner können mit einem Buddy aus der 5. einen Tag die
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
            <li>Schüler dürfen die Microwelle im Lehrerzimmer nutzen</li>
            <li>
              Organisation von Events (Kino, Ausflüge, Schnitzeljagd, etc.)
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
