/**
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * VITICS KEYWORD INTELLIGENCE FILE
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * This file controls what Vitics searches for on YouTube
 * and other data sources.
 *
 * HOW TO EDIT:
 * - Add new keywords inside any category array
 * - Use quotes around each keyword: "your keyword here"
 * - Separate with commas
 * - Do NOT delete the category names or structure
 * - Save the file and Vitics picks it up automatically
 *
 * Last updated: May 2025
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 */

const VITICS_KEYWORDS = {

  // ── DATE RANGE ──────────────────────────────────────────
  // Controls how far back YouTube searches go
  // Format: YYYY-MM-DD
  date_range: {
    start: "2011-01-01",   // When Nigeria's off-grid solar market began emerging
    end:   "2025-12-31",   // Present day
    sweep_by_year: true,   // true = search year by year for longitudinal data
    priority_years: [      // These years get extra search weight
      "2013", "2015", "2020", "2021", "2022", "2023", "2024", "2025"
    ]
  },

  // ── SOLAR & RENEWABLE PRODUCTS ──────────────────────────
  // Brand names, product types, technology names
  products: [
    "solar panel Nigeria",
    "inverter Nigeria",
    "solar inverter Nigeria",
    "PAYG solar Nigeria",
    "solar home system Nigeria",
    "Lumos Solar Nigeria",
    "Daystar Power Nigeria",
    "Greenlight Planet Nigeria",
    "BBOXX Nigeria",
    "Rensource Energy Nigeria",
    "Arnergy Solar Nigeria",
    "Rubitec Solar Nigeria",
    "EcoFlow Nigeria",
    "EcoFlow Delta 2 Nigeria",
    "PowerTank Nigeria",
    "itel power bank Nigeria",
    "itel energy Nigeria",
    "Sun King Nigeria",
    "solar generator Nigeria",
    "500W solar panel Nigeria",
    "1000W solar inverter Nigeria",
    "hybrid inverter Nigeria",
    "silver cymbal inverter Nigeria",
    "Felicity Solar Nigeria",
    "solar battery Nigeria",
    "lithium battery inverter Nigeria",
    "solar pump Nigeria",
    "solar water pump Nigeria",
    "mini grid Nigeria",
    "solar street light Nigeria",
    "solar refrigerator Nigeria",
    "solar air conditioner Nigeria",
    "clean cooking Nigeria",
    "LPG cooking Nigeria",
    "biogas Nigeria"
  ],

  // ── FOSSIL FUEL & GENERATOR DISCOURSE ───────────────────
  // What consumers say about generators, fuel, grid failures
  fossil_fuel: [
    "generator Nigeria",
    "diesel generator Nigeria",
    "petrol generator Nigeria",
    "generator fuel cost Nigeria",
    "generator wahala Nigeria",
    "fuel scarcity Nigeria",
    "petrol price Nigeria electricity",
    "kerosene lamp Nigeria",
    "generator noise Nigeria",
    "generator alternative Nigeria",
    "switch from generator to solar Nigeria",
    "generator vs solar Nigeria",
    "generator maintenance cost Nigeria",
    "AGO diesel Nigeria price",
    "fuel Nigeria generator",
    "charge it generator Nigeria",
    "generator fuel Nigeria 2024"
  ],

  // ── NIGERIAN GRID & POWER UTILITY DISCOURSE ─────────────
  // What consumers say about NEPA, DISCOs, grid supply
  grid_utility: [
    "NEPA Nigeria",
    "PHCN Nigeria",
    "light Nigeria",
    "no light Nigeria",
    "light don come Nigeria",
    "NEPA wahala",
    "EKEDC Nigeria",
    "Ikeja Electric Nigeria",
    "Eko Electric Nigeria",
    "Abuja Electric Nigeria",
    "IKEDC metering Nigeria",
    "prepaid meter Nigeria",
    "electricity bill Nigeria",
    "power outage Nigeria",
    "load shedding Nigeria",
    "blackout Nigeria",
    "DISCO Nigeria",
    "electricity tariff Nigeria",
    "band A electricity Nigeria",
    "estimated billing Nigeria"
  ],

  // ── NIGERIAN PIDGIN & LOCAL EXPRESSIONS ─────────────────
  // How Nigerians actually talk about energy in everyday language
  pidgin_local: [
    "light don come Nigeria",
    "NEPA take light",
    "when light go Nigeria",
    "generator fuel don finish",
    "solar e dey work Nigeria",
    "inverter spoil Nigeria",
    "battery don die Nigeria",
    "no light since morning Nigeria",
    "NEPA bill too much",
    "wahala with electricity Nigeria",
    "solar na better option Nigeria",
    "buy solar Nigeria review",
    "never see light Nigeria",
    "no light Nigeria",
    "na solar we dey use Nigeria",
    "NEPA light Nigeria",
    "light Nigeria",
    "no fuel Nigeria generator"
  ],

  // ── GEOGRAPHIC LOCATIONS ─────────────────────────────────
  // Nigerian states, cities, LGAs with energy discourse
  locations: [
    "solar energy Lagos",
    "solar energy Kano",
    "solar energy Abuja",
    "solar energy Kaduna",
    "solar energy Rivers State",
    "solar energy Port Harcourt",
    "solar energy Ogun State",
    "solar energy Sokoto",
    "solar energy Katsina",
    "solar energy Borno",
    "solar energy Anambra",
    "solar energy Enugu",
    "solar energy Oyo",
    "solar energy Ibadan",
    "solar energy Maiduguri",
    "solar energy Ondo",
    "solar energy Akure",
    "solar energy Edo",
    "solar energy Benin City",
    "solar energy Jigawa",
    "inverter Lagos",
    "inverter Kano",
    "inverter Abuja",
    "inverter Ibadan",
    "solar panel Lagos",
    "solar panel Kano",
    "solar panel Abuja",
    "mini grid rural Nigeria",
    "off grid energy northern Nigeria",
    "solar energy northeast Nigeria",
    "solar energy northwest Nigeria",
    "rural electrification Nigeria"
  ],

  // ── POLICY & PROGRAMME REFERENCES ───────────────────────
  // How consumers reference government energy programmes
  policy_consumer: [
    "Solar Power Naija",
    "REA Nigeria solar",
    "Rural Electrification Agency Nigeria",
    "NERC Nigeria",
    "mini grid regulation Nigeria",
    "electricity privatisation Nigeria",
    "power sector reform Nigeria",
    "Nigeria energy transition",
    "Electricity Act Nigeria 2023",
    "state electricity market Nigeria",
    "government free solar Nigeria",
    "federal government solar Nigeria",
    "energy subsidy Nigeria",
    "fuel subsidy removal Nigeria electricity"
  ],

  // ── SDG & DEVELOPMENT THEMES ────────────────────────────
  // Energy access, gender, poverty, climate discourse
  sdg_themes: [
    "energy poverty Nigeria",
    "energy access Nigeria",
    "women solar Nigeria",
    "female entrepreneur solar Nigeria",
    "MSME solar Nigeria",
    "small business generator cost Nigeria",
    "energy cost business Nigeria",
    "affordable electricity Nigeria",
    "solar financing Nigeria",
    "PAYG solar affordable Nigeria",
    "carbon emission Nigeria energy",
    "clean energy Nigeria climate",
    "renewable energy jobs Nigeria",
    "solar technician Nigeria",
    "energy inequality Nigeria"
  ],

  // ── EMERGING TECHNOLOGIES ────────────────────────────────
  // New products and models entering the market
  emerging: [
    "battery as a service Nigeria",
    "energy fintech Nigeria",
    "solar BNPL Nigeria",
    "mobile money solar Nigeria",
    "agri solar Nigeria",
    "solar irrigation Nigeria",
    "hybrid wind solar Nigeria",
    "made in Nigeria solar",
    "local solar manufacturer Nigeria",
    "solar cold chain Nigeria",
    "electric vehicle Nigeria solar",
    "net metering Nigeria",
    "Oscarmini solar Nigeria",
    "solar energy review Nigeria 2024",
    "solar energy review Nigeria 2025"
  ],

  // ── YOUTUBE CHANNELS & CREATORS ─────────────────────────
  // Nigerian YouTube channels and creators producing energy content
  // Use as search queries to surface their videos directly
  // These channels have high-quality Nigerian energy consumer discourse
  youtube_channels: [
    "Valor Reviews Nigeria solar",
    "Hardware House Nigeria inverter",
    "Adventure Gear TV Nigeria solar",
    "Oscarmini Nigeria energy",
    "solar panel review Nigeria YouTube",
    "inverter review Nigeria YouTube",
    "EcoFlow Nigeria review YouTube",
    "itel energy Nigeria review",
    "Sun King Nigeria review",
    "PowerTank Nigeria review YouTube",
    "hybrid inverter review Nigeria",
    "solar generator Nigeria review",
    "Delta 2 EcoFlow Nigeria review"
  ],

  // ── HASHTAGS ─────────────────────────────────────────────
  // Social media hashtags used in Nigerian energy discourse
  hashtags: [
    "#SolarNigeria",
    "#inverterNigeria",
    "#NEPAwahala",
    "#NoLight",
    "#SolarPowerNaija",
    "#NigeriaEnergy",
    "#SolarInstallation",
    "#EcoFlow",
    "#PowerTank",
    "#CleanEnergyNigeria",
    "#MiniGrid",
    "#OffGridNigeria",
    "#EnergyTransitionNigeria",
    "#RenewableEnergyNigeria"
  ],

  // ── HUMAN-FLAGGED VIDEO URLs ──────────────────────────────
  // Specific YouTube videos flagged by Vitics team as high value
  // Add video IDs here (the part after ?v= in the YouTube URL)
  flagged_videos: [
    // Example: "dQw4w9WgXcQ"
    // Add high-value Nigerian energy video IDs here
  ],

  // ── EXCLUDED TERMS ───────────────────────────────────────
  // Keywords that return irrelevant results — excluded from search
  excluded: [
    "South Africa",
    "Kenya solar",
    "Ghana solar",
    "Ethiopia solar",
    "solar USA",
    "solar UK",
    "solar India"
  ]

};

// ── SEARCH QUERY BUILDER ──────────────────────────────────
// Builds randomised search queries from keyword categories
// Called by the AI engine on each analysis run

function buildSearchQueries(count = 10) {
  const allQueries = [
    ...VITICS_KEYWORDS.products,
    ...VITICS_KEYWORDS.fossil_fuel,
    ...VITICS_KEYWORDS.grid_utility,
    ...VITICS_KEYWORDS.pidgin_local,
    ...VITICS_KEYWORDS.locations,
    ...VITICS_KEYWORDS.policy_consumer,
    ...VITICS_KEYWORDS.sdg_themes,
    ...VITICS_KEYWORDS.emerging,
    ...VITICS_KEYWORDS.youtube_channels
  ].filter(q =>
    !VITICS_KEYWORDS.excluded.some(ex =>
      q.toLowerCase().includes(ex.toLowerCase())
    )
  );

  // Shuffle and return requested count
  const shuffled = allQueries.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

// ── DATE RANGE QUERY BUILDER ──────────────────────────────
// Builds year-by-year date parameters for longitudinal search

function buildDateRanges() {
  const ranges = [];
  const startYear = parseInt(VITICS_KEYWORDS.date_range.start.split('-')[0]);
  const endYear   = new Date().getFullYear();

  for(let y = startYear; y <= endYear; y++) {
    ranges.push({
      year: y,
      after:  `${y}-01-01T00:00:00Z`,
      before: `${y}-12-31T23:59:59Z`,
      priority: VITICS_KEYWORDS.date_range.priority_years.includes(String(y))
    });
  }
  return ranges;
}

// Export for use by AI engine
if(typeof module !== 'undefined') {
  module.exports = { VITICS_KEYWORDS, buildSearchQueries, buildDateRanges };
}
