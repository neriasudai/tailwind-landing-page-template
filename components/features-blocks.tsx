import Item from "./ui/item";

export default function FeaturesBlocks() {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">מצא את הפתרון המתאים לעסק שלך</h2>
            <p className="text-xl text-gray-600">
              מתן שירות לעסקים גדולים וקטנים בכל תחום ובכל גודל. ניתן להתאים את
              .השירות לצרכי הלקוח ולמטרות העסק
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {/* 1st item */}
            <Item title="פיתרון ראשון" description="תיאום פגישות ונפגשים" />

            {/* 2nd item */}
            <Item title="פיתרון שני" description="ניהול תיקי לקוחות" />

            {/* 3rd item */}
            <Item title="פיתרון שלישי" description="בניית דפי נחיתה" />

            {/* 4th item */}
            <Item title="פיתרון רביעי" description="שירותי קידום אתרים" />

            {/* 5th item */}
            <Item title="פיתרון חמישי" description="ניהול פרויקטים" />

            {/* 6th item */}
            <Item title="פיתרון שישי" description="שירותי עיצוב גרפי" />
          </div>
        </div>
      </div>
    </section>
  );
}
