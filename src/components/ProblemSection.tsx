import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  Cell,
} from "recharts";
import { AlertTriangle } from "lucide-react";
import pollutionImage from "@/assets/pollution-crisis.png";

// --- PERUBAHAN 1: Tambahkan 'description' pada interface ---
interface NewsItem {
  title: string;
  source: string;
  date: string;
  image: string;
  url: string;
  description: string; // Tambahkan properti ini
}

export const ProblemSection = () => {
  // Data untuk bar chart perbandingan PM2.5
  const pm25Data = [
    { name: "WHO Safe Level", value: 10, fill: "#22c55e" },
    { name: "Jakarta Avg", value: 65, fill: "#ef4444" },
    { name: "Indoor (No Filter)", value: 82, fill: "#ef4444" },
    { name: "Moss Panel", value: 18, fill: "#22c55e" },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  // --- PERUBAHAN 2: Tambahkan 'description' unik untuk setiap item berita ---
  const newsItems: NewsItem[] = [
    {
      title: "Jakarta's Air Quality Unhealthy Today, Among World's Worst",
      source: "rri.co.id",
      date: "2025-05-17",
      image: "https://cdn.rri.co.id/berita/English_News/o/1747463410531-718qiwvlacj2il9/d8bhn8kzk7pkf77.jpeg",
      url: "https://rri.co.id/en/archipelago/1522329/jakarta-s-air-quality-unhealthy-today-among-world-s-worst",
      description: "Air quality in Jakarta was categorized as unhealthy, especially for vulnerable people, on Saturday, May 17, 2025, with particulate matter (PM) levels reaching 2.5 and an air quality index (AQI) of 114.",
    },
    {
      title: "WHO says air pollution kills 7 million a year, toughens guidelines",
      source: "ChatEurope",
      date: "2021-09-24",
      image: "https://chateurope.eu/download/en/who-says-air-pollution-kills-7-million-a-year-toughens-guidelines/WebHome/001_9NF8A7_JPEG.jpg?width=1200&rev=1.2",
      url: "https://chateurope.eu/en/who-says-air-pollution-kills-7-million-a-year-toughens-guidelines/",
      description: "The WHO strengthens its air quality guidelines, saying air pollution was now one of the biggest environmental threats to human health, causing seven million premature deaths a year.",
    },
    {
      title: "Indonesia’s air quality: Decline in 2023 due to lack of intervention and El Niño. What about 2024?",
      source: "CREA",
      date: "2024-04-05",
      image: "https://energyandcleanair.org/wp/wp-content/uploads/2024/04/image-2-1536x1079.png",
      url: "https://energyandcleanair.org/publication/indonesias-air-quality-decline-in-2023-due-to-lack-of-intervention-and-el-nino/",
      description: "In 2023, there was an overall decline in air quality across Indonesia, particularly in Jakarta, the capital of Indonesia located on the island of Java, and a number of major cities on the island of Sumatra and Kalimantan.",
    },
    {
      title: "Impact of Air Pollution, Threats Across Generations",
      source: "Kompas",
      date: "2023-11-25",
      image: "https://assetd.kompas.id/dhvYKNXOYwZZp2dQJXAgj9i6xnM=/fit-in/1024x853/filters:format(webp):quality(80)/https://asset.kgnewsroom.com/photo/pre/2019/06/26/06b940c6-389e-4549-ae9a-1efa06ba07c8_jpg.jpg",
      url: "https://www.kompas.id/artikel/en-dampak-polusi-udara-mengancam-transgenerasi",
      description: "Babies born to pregnant women who are exposed to air pollution are at high risk of being born with low birth weight. This condition poses a risk to tengkes which can continue to the next generation.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % newsItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [newsItems.length]);

  return (
    <section className="py-20 bg-gradient-pollution relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-card mb-4 font-['Playfair_Display']">
            The Silent Killer in Our Cities
          </h2>
          <p className="text-xl text-card/80 max-w-3xl mx-auto font-poppins">
            Every breath we take indoors can contain harmful pollutants. The
            crisis is real, and it's happening now.
          </p>
        </div>

        {/* PM2.5 Comparison Bar Chart */}
        <div className="max-w-5xl mx-auto mb-16 animate-fade-in-up">
          {/* ... (kode chart tidak berubah) ... */}
          <Card className="bg-card/95 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6 text-center">
                PM2.5 Levels Comparison (μg/m³)
              </h3>
              <ChartContainer
                config={{
                  value: { label: "PM2.5", color: "#22c55e" },
                }}
                className="w-full h-64"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={pm25Data}
                    barCategoryGap={32}
                    margin={{ left: 32, right: 32, top: 16, bottom: 16 }}
                  >
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#64748b", fontSize: 14 }}
                    />
                    <YAxis
                      type="number"
                      domain={[0, 90]}
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#64748b", fontSize: 14 }}
                    />
                    <Tooltip cursor={{ fill: "#f1f5f9" }} />
                    <Bar dataKey="value" radius={[8, 8, 0, 0]} isAnimationActive>
                      {pm25Data.map((entry, idx) => (
                        <Cell key={`cell-${idx}`} fill={entry.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* News Carousel */}
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {newsItems.map((news, index) => (
                <div key={index} className="min-w-full px-2">
                  <a
                    href={news.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Read more about ${news.title}`}
                  >
                    <Card className="overflow-hidden hover:shadow-strong transition-all duration-300">
                      <CardContent className="p-0">
                        <div className="grid md:grid-cols-2 gap-0">
                          <div className="relative h-64 md:h-auto">
                            <img
                              src={news.image}
                              alt={news.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                          </div>
                          <div className="p-8 flex flex-col justify-center">
                            <div className="text-sm text-destructive font-semibold mb-2">
                              {news.source} • {news.date}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-foreground">
                              {news.title}
                            </h3>
                            {/* --- PERUBAHAN 3: Gunakan news.description --- */}
                            <p className="text-muted-foreground font-poppins">
                              {news.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </div>
              ))}
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {newsItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide
                      ? "w-8 bg-card"
                      : "w-2 bg-card/40"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};