/**
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * VITICS POLICY KNOWLEDGE BASE
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * Nigeria's energy policy timeline — from a CONSUMER
 * perspective. Not what policies said on paper.
 * What consumers actually experienced, felt, and said.
 *
 * This file is read by Claude before every analysis run.
 * It shapes how the AI interprets consumer discourse
 * against the policy backdrop.
 *
 * Last updated: May 2025
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 */

const VITICS_POLICY_KNOWLEDGE = {

  context: `
    Nigeria has produced over 24 major energy policies since 2001.
    The central challenge is that Nigerian consumers have rarely
    experienced the promised outcomes of these policies.
    The gap between policy intent and lived consumer reality is
    the most important intelligence signal Vitics tracks.
    When analysing consumer content, look for:
    - Direct or indirect references to policy effects
    - Consumer behaviour changes that correlate with policy launches
    - The language of disappointment, surprise, or unmet expectation
    - Moments when a policy DID reach consumers vs when it did not
  `,

  policies: [

    {
      id: "NEPP_2001",
      year: 2001,
      name: "National Electric Power Policy (NEPP)",
      short: "NEPP 2001",
      paper_promise: "Restructure the electricity sector, attract private investment, improve supply reliability",
      consumer_reality: `
        Consumers saw almost no change. NEPA (National Electric Power Authority)
        continued to be synonymous with darkness and failure. The policy set the
        legal groundwork but delivered nothing to households or businesses.
        Generator sales increased in this period as consumers lost faith in grid
        improvement. "NEPA wahala" became embedded in Nigerian daily vocabulary.
      `,
      consumer_impact_score: 1, // 1-10, how much consumers felt it
      consumer_search_terms: [
        "NEPA Nigeria", "light Nigeria 2001", "electricity Nigeria reform",
        "PHCN Nigeria"
      ],
      sentiment_expected: "negative",
      sdg_relevance: ["SDG7"],
      transition_marker: false
    },

    {
      id: "NEP_2003",
      year: 2003,
      name: "National Energy Policy (NEP)",
      short: "NEP 2003",
      paper_promise: "Comprehensive framework covering all energy sources including renewables",
      consumer_reality: `
        This policy was largely invisible to consumers. It created planning
        frameworks but no direct consumer-facing programmes. Households and
        businesses continued to rely on generators as primary backup.
        Kerosene remained the dominant cooking and lighting fuel in rural areas.
        No measurable consumer behaviour change attributable to this policy.
      `,
      consumer_impact_score: 1,
      consumer_search_terms: [
        "Nigeria energy policy", "kerosene Nigeria 2003"
      ],
      sentiment_expected: "neutral",
      sdg_relevance: ["SDG7"],
      transition_marker: false
    },

    {
      id: "EPSRA_2005",
      year: 2005,
      name: "Electric Power Sector Reform Act (EPSRA)",
      short: "EPSRA 2005",
      paper_promise: "Break up NEPA, create competitive electricity market, privatise generation and distribution",
      consumer_reality: `
        The beginning of PHCN (Power Holding Company of Nigeria) replacing NEPA —
        consumers noticed the rebrand but not the improvement. Bills continued,
        supply worsened, and the joke became that PHCN stood for
        "Please Have Candles Nearby." The Act laid the legal foundation for the
        2013 privatisation but consumers experienced no benefit in this period.
        Generator dependency deepened significantly through 2005-2010.
      `,
      consumer_impact_score: 2,
      consumer_search_terms: [
        "PHCN Nigeria", "electricity reform Nigeria", "power sector Nigeria 2005",
        "PHCN candles joke Nigeria"
      ],
      sentiment_expected: "negative",
      sdg_relevance: ["SDG7"],
      transition_marker: false
    },

    {
      id: "REMP_2005",
      year: 2005,
      name: "Renewable Energy Master Plan (REMP)",
      short: "REMP 2005",
      paper_promise: "Develop Nigeria's renewable energy resources, target 10% renewable electricity by 2025",
      consumer_reality: `
        Almost entirely invisible to consumers for the first decade.
        Solar panels were present in Nigeria but only for affluent households,
        telecoms towers, and NGO-funded rural projects. No mass consumer market.
        The plan's existence was unknown to ordinary Nigerians. Its targets were
        never met. However it created the regulatory language that later enabled
        the off-grid solar market to emerge post-2011.
      `,
      consumer_impact_score: 1,
      consumer_search_terms: [
        "solar Nigeria 2005", "renewable energy Nigeria 2005"
      ],
      sentiment_expected: "neutral",
      sdg_relevance: ["SDG7", "SDG13"],
      transition_marker: false
    },

    {
      id: "REPG_2006",
      year: 2006,
      name: "Renewable Electricity Policy Guidelines (REPG)",
      short: "REPG 2006",
      paper_promise: "Guidelines for renewable electricity development and grid integration",
      consumer_reality: `
        No direct consumer visibility. Technical regulatory document.
        The solar market in Nigeria in 2006 was limited to off-grid
        installations for the wealthy and institutional users.
        Consumer awareness of renewable options was near zero.
      `,
      consumer_impact_score: 1,
      consumer_search_terms: ["solar electricity Nigeria 2006"],
      sentiment_expected: "neutral",
      sdg_relevance: ["SDG7"],
      transition_marker: false
    },

    {
      id: "REAP_2006",
      year: 2006,
      name: "Renewable Electricity Action Programme (REAP)",
      short: "REAP 2006",
      paper_promise: "Action plan to implement renewable electricity targets",
      consumer_reality: `
        Like REPG, this was a planning document without consumer-facing
        implementation. No programmes reached households or MSMEs in this period.
        The off-grid solar market in Nigeria did not meaningfully exist yet.
      `,
      consumer_impact_score: 1,
      consumer_search_terms: ["renewable electricity Nigeria", "solar programme Nigeria 2006"],
      sentiment_expected: "neutral",
      sdg_relevance: ["SDG7"],
      transition_marker: false
    },

    {
      id: "BIOFUEL_2007",
      year: 2007,
      name: "Nigerian Biofuel Policy and Incentives",
      short: "Biofuel Policy 2007",
      paper_promise: "Develop biofuel industry, blend ethanol with petrol, reduce fossil fuel imports",
      consumer_reality: `
        Consumers experienced this primarily through the lens of petrol prices
        and availability rather than clean energy. The biofuel blending targets
        were never achieved at scale. Nigeria remained completely dependent on
        imported refined petroleum products. No consumer-visible biofuel market
        emerged. Fuel queues and petrol scarcity defined this period more than
        any clean energy transition.
      `,
      consumer_impact_score: 1,
      consumer_search_terms: [
        "fuel scarcity Nigeria 2007", "petrol queue Nigeria", "fuel price Nigeria"
      ],
      sentiment_expected: "negative",
      sdg_relevance: ["SDG7", "SDG13"],
      transition_marker: false
    },

    {
      id: "NEEDS_2008",
      year: 2008,
      name: "National Economic Empowerment and Development Strategy — Energy Components (NEEDS)",
      short: "NEEDS Energy 2008",
      paper_promise: "Energy access as part of broader economic development strategy",
      consumer_reality: `
        Consumers in this period were experiencing peak generator dependency.
        The NEEDS framework was invisible at street level. MSMEs were spending
        25-40% of operating costs on diesel for generators. Small businesses
        in Lagos, Kano, and Abuja routinely cited electricity costs as their
        primary operational burden. No policy intervention reached them.
      `,
      consumer_impact_score: 1,
      consumer_search_terms: [
        "generator cost Nigeria business", "diesel cost Nigeria 2008",
        "MSME electricity Nigeria"
      ],
      sentiment_expected: "negative",
      sdg_relevance: ["SDG7", "SDG8"],
      transition_marker: false
    },

    {
      id: "PRIVATISATION_2013",
      year: 2013,
      name: "Power Sector Privatisation Completion",
      short: "Privatisation 2013",
      paper_promise: "Transfer of electricity distribution companies (DISCOs) to private operators. Competition would improve service, attract investment, fix the grid.",
      consumer_reality: `
        This is a landmark moment in consumer discourse — and largely a moment
        of betrayed expectation. Consumers had been told privatisation would
        fix the lights. It did not. New DISCO owners inherited decrepit
        infrastructure and passed costs to consumers through tariff hikes.
        "Band A, B, C, D, E" tariff classification created new frustrations.
        Post-2013 is when Nigerian solar consumer discourse began to grow
        meaningfully — consumers started looking for alternatives.
        Key consumer sentiment: deep cynicism about government electricity promises,
        rising interest in off-grid solutions.
        This is the FIRST real transition marker — the year consumers began
        genuinely searching for alternatives to the grid.
      `,
      consumer_impact_score: 7,
      consumer_search_terms: [
        "electricity privatisation Nigeria", "DISCO Nigeria", "Ikeja Electric",
        "Eko Electric", "electricity tariff increase Nigeria",
        "solar alternative Nigeria 2013", "off grid Nigeria 2013",
        "PHCN privatisation review"
      ],
      sentiment_expected: "negative",
      sdg_relevance: ["SDG7", "SDG10"],
      transition_marker: true,
      transition_note: "First major consumer shift toward off-grid alternatives"
    },

    {
      id: "NREEEP_2015",
      year: 2015,
      name: "National Renewable Energy and Energy Efficiency Policy (NREEEP)",
      short: "NREEEP 2015",
      paper_promise: "Comprehensive renewable energy and efficiency targets. 30% renewable by 2030.",
      consumer_reality: `
        Consumers in 2015 were still experiencing severe grid failure.
        However 2015 is also when the off-grid solar market began to
        visibly grow in Nigeria — international companies like Lumos, BBOXX,
        and Greenlight Planet were expanding. Consumer awareness of solar
        as a real option (not just for the rich) began to emerge.
        The policy itself was invisible to consumers but the market it
        enabled was becoming visible. Early "solar review Nigeria" searches
        begin appearing from this period.
      `,
      consumer_impact_score: 3,
      consumer_search_terms: [
        "solar Nigeria 2015", "off grid solar Nigeria", "Lumos Solar Nigeria",
        "solar home system Nigeria", "renewable energy Nigeria 2015"
      ],
      sentiment_expected: "cautiously positive",
      sdg_relevance: ["SDG7", "SDG13"],
      transition_marker: true,
      transition_note: "Off-grid solar market becomes visible to ordinary consumers"
    },

    {
      id: "MINIGRID_2015",
      year: 2015,
      name: "Mini-Grid Regulation Framework",
      short: "Mini-Grid Regs 2015",
      paper_promise: "Legal framework for private mini-grid operators. Enable investment in rural electrification.",
      consumer_reality: `
        This policy had real but slow consumer impact. The framework enabled
        companies like Rensource and rural electrification programmes to operate
        legally. Consumers in rural areas began to encounter mini-grid projects
        from 2016 onwards. The discourse among rural communities shifted from
        "we have no light" to "they are bringing solar" in some areas.
        Urban consumers were unaware of this policy but rural community
        discourse changed in states like Kaduna, Niger, and Ogun.
      `,
      consumer_impact_score: 4,
      consumer_search_terms: [
        "mini grid Nigeria", "rural electricity Nigeria", "solar village Nigeria",
        "Rensource Nigeria", "mini grid Kaduna", "rural solar Nigeria 2016"
      ],
      sentiment_expected: "positive in rural areas",
      sdg_relevance: ["SDG7", "SDG10"],
      transition_marker: true,
      transition_note: "Rural consumer energy discourse begins to shift"
    },

    {
      id: "RESIP_2016",
      year: 2016,
      name: "Rural Electrification Strategy and Implementation Plan (RESIP)",
      short: "RESIP 2016",
      paper_promise: "Structured plan to electrify rural Nigeria through mini-grids and solar home systems",
      consumer_reality: `
        The Rural Electrification Agency (REA) became more active from this point.
        Consumer discourse in rural areas began referencing REA projects.
        However implementation was uneven — some communities got projects,
        most did not. Consumer frustration with selective implementation was
        visible in forum discussions. "REA project" became a keyword in
        Nigerian energy discourse — sometimes hopeful, sometimes cynical.
        Urban consumers remained largely on generators with growing solar interest.
      `,
      consumer_impact_score: 4,
      consumer_search_terms: [
        "REA Nigeria", "Rural Electrification Agency Nigeria",
        "REA project Nigeria", "rural solar Nigeria",
        "solar village Nigeria", "electrification Nigeria 2016"
      ],
      sentiment_expected: "mixed",
      sdg_relevance: ["SDG7", "SDG10"],
      transition_marker: false
    },

    {
      id: "ETP_DISCUSSIONS_2017",
      year: 2017,
      name: "Nigeria Energy Transition Discussions Intensify",
      short: "ETP Discussions 2017",
      paper_promise: "Nigeria begins serious discussion about long-term energy transition pathway",
      consumer_reality: `
        This was largely an elite and institutional discourse in 2017.
        Consumer awareness of "energy transition" as a concept was near zero.
        However the market was visibly changing. Solar panel prices had dropped
        significantly globally. Nigerian importers were bringing in cheaper
        Chinese panels. Consumer-level solar became more financially accessible.
        YouTube reviews of solar products in Nigeria begin to multiply from 2017.
        This is when consumer-generated energy content starts becoming searchable
        at scale on digital platforms.
      `,
      consumer_impact_score: 3,
      consumer_search_terms: [
        "solar panel price Nigeria", "cheap solar Nigeria",
        "Chinese solar panels Nigeria", "solar installation cost Nigeria 2017",
        "solar review Nigeria 2017"
      ],
      sentiment_expected: "positive with cost concerns",
      sdg_relevance: ["SDG7", "SDG13"],
      transition_marker: true,
      transition_note: "Consumer solar content on digital platforms becomes searchable at scale"
    },

    {
      id: "EEI_2018",
      year: 2018,
      name: "Energizing Economies Initiative (EEI)",
      short: "EEI 2018",
      paper_promise: "Electrify major markets and economic clusters with solar. Target Sabon Gari Kano, Ariaria Aba, UTC Abuja.",
      consumer_reality: `
        This is one of the few policies that consumers actually noticed.
        The EEI targeted major Nigerian markets — Sabon Gari in Kano,
        Ariaria market in Aba, Sura Shopping complex in Lagos.
        Market traders and small business owners in targeted areas
        experienced solar power directly. Testimonials appeared online.
        "Solar market Nigeria" searches increased. However coverage was
        limited to specific clusters and most SMEs remained on generators.
        Consumer discourse: "government brought solar to [market name]" —
        genuine positive sentiment where projects landed.
      `,
      consumer_impact_score: 6,
      consumer_search_terms: [
        "Energizing Economies Initiative Nigeria",
        "solar market Nigeria", "Sabon Gari solar Kano",
        "Ariaria market solar", "REA market solar Nigeria",
        "solar for business Nigeria 2018"
      ],
      sentiment_expected: "positive where implemented",
      sdg_relevance: ["SDG7", "SDG8"],
      transition_marker: true,
      transition_note: "First large-scale programme consumers could physically see and discuss"
    },

    {
      id: "SOLAR_NAIJA_PLANNING_2019",
      year: 2019,
      name: "Solar Power Naija Programme Planning",
      short: "Solar Naija Planning 2019",
      paper_promise: "Planning phase for mass solar home system distribution programme",
      consumer_reality: `
        Announcement effects in 2019 — consumers began discussing the
        upcoming programme. "Solar Power Naija" entered Nigerian digital
        vocabulary. Some skepticism from consumers who had heard government
        energy promises before. "Another government programme wey dem go
        chop the money" was a common sentiment. However the announcement
        itself raised awareness of solar as a policy priority.
      `,
      consumer_impact_score: 3,
      consumer_search_terms: [
        "Solar Power Naija", "government solar Nigeria 2019",
        "federal government solar homes Nigeria"
      ],
      sentiment_expected: "skeptical but aware",
      sdg_relevance: ["SDG7"],
      transition_marker: false
    },

    {
      id: "SOLAR_NAIJA_2020",
      year: 2020,
      name: "Solar Power Naija Programme",
      short: "Solar Power Naija 2020",
      paper_promise: "Electrify 5 million Nigerian homes with solar. Target underserved communities. REA implementation.",
      consumer_reality: `
        This is the most discussed government solar programme in Nigerian
        consumer digital discourse. The target of 5 million homes was ambitious.
        Implementation was partial and geographically uneven. Consumers in
        beneficiary communities were genuinely positive. The majority of
        Nigerians did not receive systems and expressed cynicism.
        COVID-19 disrupted implementation in 2020.
        Key consumer discourse patterns:
        - "Solar Power Naija reach my area?" — hopeful inquiry
        - "Solar Power Naija na scam" — disappointed non-beneficiaries
        - "I get solar from government" — positive testimonials
        Overall: mixed sentiment but highest consumer awareness of any
        government solar programme ever. Search volume for "Solar Power Naija"
        peaked significantly in 2020-2021.
        Also notable: fuel subsidy discussions intensified in 2020 alongside
        solar discourse — two competing narratives about energy affordability.
      `,
      consumer_impact_score: 7,
      consumer_search_terms: [
        "Solar Power Naija", "5 million homes solar Nigeria",
        "government solar Nigeria 2020", "REA solar homes Nigeria",
        "Solar Power Naija beneficiary", "free solar Nigeria government",
        "Solar Power Naija review", "did Solar Power Naija reach my area"
      ],
      sentiment_expected: "mixed — positive for beneficiaries, cynical for majority",
      sdg_relevance: ["SDG7", "SDG10"],
      transition_marker: true,
      transition_note: "Highest consumer awareness of government solar ever — search volume peaked"
    },

    {
      id: "PIA_2021",
      year: 2021,
      name: "Petroleum Industry Act (PIA)",
      short: "PIA 2021",
      paper_promise: "Reform Nigeria's oil and gas sector, restructure NNPC, manage fuel subsidies",
      consumer_reality: `
        Consumers felt the PIA primarily through fuel prices and subsidy discussions.
        The Act set the legal framework for eventual subsidy removal.
        Consumer discourse in 2021: deep anxiety about fuel price implications.
        "PIA fuel price Nigeria" was a significant search term.
        Indirectly, PIA concerns accelerated solar interest — consumers who feared
        higher diesel prices began researching solar alternatives more seriously.
        This is an important indirect transition signal: fossil fuel policy anxiety
        driving clean energy curiosity.
      `,
      consumer_impact_score: 5,
      consumer_search_terms: [
        "PIA Nigeria fuel price", "petroleum industry act Nigeria",
        "fuel subsidy Nigeria 2021", "diesel price increase Nigeria",
        "solar alternative fuel price Nigeria"
      ],
      sentiment_expected: "anxious about cost, increasing solar curiosity",
      sdg_relevance: ["SDG7", "SDG13"],
      transition_marker: false
    },

    {
      id: "ETP_2021",
      year: 2021,
      name: "Nigeria Energy Transition Plan (ETP)",
      short: "ETP 2021",
      paper_promise: "Net-zero emissions by 2060. Structured pathway for Nigeria's full energy transition.",
      consumer_reality: `
        Almost completely invisible to ordinary Nigerian consumers in 2021.
        "Energy transition" remained an elite and international development
        vocabulary. However among Nigerian energy entrepreneurs, investors,
        and educated urban professionals, the ETP created genuine excitement.
        Startup discourse on LinkedIn, Twitter/X, and YouTube began referencing
        "Nigeria's energy transition" more frequently.
        Consumer impact was indirect — it attracted international investment
        attention to Nigeria's energy market, which accelerated company expansion
        and product availability. Lumos, BBOXX, and international solar brands
        cited ETP in their Nigeria expansion communications.
      `,
      consumer_impact_score: 3,
      consumer_search_terms: [
        "Nigeria energy transition plan", "net zero Nigeria",
        "Nigeria 2060 energy", "energy transition Nigeria investment",
        "ETP Nigeria solar"
      ],
      sentiment_expected: "positive among informed urban consumers, invisible to mass market",
      sdg_relevance: ["SDG7", "SDG13"],
      transition_marker: false
    },

    {
      id: "NIIMIP_2022",
      year: 2022,
      name: "National Integrated Infrastructure Master Plan — Energy Components",
      short: "NIIMIP Energy 2022",
      paper_promise: "Long-term infrastructure investment roadmap for Nigeria's energy sector",
      consumer_reality: `
        Invisible to consumers. Planning document.
        However 2022 saw significant real-world consumer behaviour change
        driven not by this policy but by worsening grid supply and rising
        fuel costs. Solar panel and inverter imports surged.
        Consumer YouTube content about solar installation grew substantially.
        "How to install solar in Nigeria" became a high-search query.
        Battery storage discussions began entering mainstream consumer discourse.
      `,
      consumer_impact_score: 1,
      consumer_search_terms: [
        "solar installation Nigeria 2022", "inverter installation Nigeria",
        "how to install solar Nigeria", "solar panel import Nigeria",
        "battery inverter Nigeria 2022"
      ],
      sentiment_expected: "positive about solar, negative about grid",
      sdg_relevance: ["SDG7"],
      transition_marker: false
    },

    {
      id: "ELECTRICITY_ACT_2023",
      year: 2023,
      name: "Electricity Act 2023",
      short: "Electricity Act 2023",
      paper_promise: "Deregulate electricity sector. Allow states to generate, transmit, and distribute power independently. Enable competitive electricity market.",
      consumer_reality: `
        2023 was the most significant year for consumer energy discourse in
        Nigerian digital history — but the driver was not the Electricity Act.
        It was the fuel subsidy removal in May 2023. Petrol prices tripled
        overnight. Generator costs became catastrophic for households and businesses.
        This is the single biggest consumer transition moment:
        "Generator don too expensive — I need solar now" became the dominant
        narrative. Solar sales surged. YouTube solar review content exploded.
        The Electricity Act was discussed by investors and state governments
        but consumers talked about the subsidy removal, fuel prices, and solar.
        Key signals: "subsidy removal Nigeria solar", "petrol price generator",
        "solar better than generator Nigeria 2023".
        This is THE watershed moment for Vitics data — everything accelerates from here.
      `,
      consumer_impact_score: 9,
      consumer_search_terms: [
        "Electricity Act Nigeria 2023",
        "fuel subsidy removal Nigeria",
        "petrol price generator Nigeria 2023",
        "generator too expensive Nigeria",
        "switch to solar Nigeria 2023",
        "solar vs generator Nigeria 2023",
        "solar demand Nigeria 2023",
        "state electricity Nigeria",
        "inverter Nigeria 2023",
        "solar installation surge Nigeria"
      ],
      sentiment_expected: "urgent solar adoption — fuel crisis driving transition",
      sdg_relevance: ["SDG7", "SDG8", "SDG13"],
      transition_marker: true,
      transition_note: "WATERSHED MOMENT — fuel subsidy removal drives mass solar adoption discourse"
    },

    {
      id: "STATE_MARKETS_2024",
      year: 2024,
      name: "State Electricity Market Reforms Begin",
      short: "State Markets 2024",
      paper_promise: "States begin implementing independent electricity generation and distribution under the 2023 Act",
      consumer_reality: `
        Lagos, Kano, Rivers, and Kaduna states began expressing intent to
        develop state electricity markets. Consumer discourse is cautiously
        watching. "Lagos electricity company" and "state power Nigeria" begin
        appearing as search terms. However consumers remain deeply skeptical
        based on 20+ years of disappointment.
        The more dominant 2024 consumer story is continued solar adoption growth,
        battery storage becoming mainstream, and inverter market maturing.
        "Best inverter Nigeria 2024", "solar battery review Nigeria",
        and "energy fintech Nigeria" are the high-engagement topics.
        Solar adoption in northern states — Kano, Kaduna, Sokoto, Katsina —
        accelerated significantly in 2024.
      `,
      consumer_impact_score: 4,
      consumer_search_terms: [
        "state electricity Nigeria 2024", "Lagos electricity",
        "best inverter Nigeria 2024", "solar battery Nigeria 2024",
        "energy storage Nigeria", "solar north Nigeria 2024",
        "Kano solar 2024", "Kaduna solar 2024",
        "battery backup Nigeria 2024", "energy fintech Nigeria"
      ],
      sentiment_expected: "skeptical about grid reforms, enthusiastic about solar products",
      sdg_relevance: ["SDG7", "SDG8", "SDG10"],
      transition_marker: false
    },

    {
      id: "NIEP_2025",
      year: 2025,
      name: "National Integrated Electricity Policy (NIEP)",
      short: "NIEP 2025",
      paper_promise: "Consolidate electricity sector reforms, integrate renewables at scale, define long-term grid and off-grid development pathway",
      consumer_reality: `
        As of 2025 this policy is newly launched. Consumer awareness is low.
        However the market context in 2025 is fundamentally different from 2001.
        Nigeria now has a mature off-grid solar consumer market. Consumers are
        sophisticated buyers — comparing brands, financing options, battery specs.
        The conversation has shifted from "should I get solar?" to
        "which solar brand is best?" and "PAYG or outright purchase?"
        Battery-as-a-service models are emerging. Energy fintech is growing.
        Agri-solar is expanding in northern states.
        NIEP's consumer relevance will be determined by whether it enables
        or obstructs the thriving off-grid market.
        Vitics will track consumer response to NIEP in real time as it emerges.
      `,
      consumer_impact_score: 3,
      consumer_search_terms: [
        "NIEP Nigeria 2025", "Nigeria electricity policy 2025",
        "best solar Nigeria 2025", "PAYG solar Nigeria 2025",
        "battery as a service Nigeria", "energy fintech Nigeria 2025",
        "agri solar Nigeria 2025", "solar north Nigeria 2025"
      ],
      sentiment_expected: "market-sophisticated — policy awareness low, product awareness high",
      sdg_relevance: ["SDG7", "SDG8", "SDG13"],
      transition_marker: false
    }

  ],

  // ── KEY TRANSITION MOMENTS ───────────────────────────────
  // The years that actually changed consumer behaviour
  // Used to weight historical YouTube search queries
  transition_moments: [
    {
      year: 2013,
      event: "Power sector privatisation — consumers lose faith in grid, begin seeking alternatives",
      search_weight: "high"
    },
    {
      year: 2015,
      event: "Off-grid solar becomes visible and accessible to ordinary consumers",
      search_weight: "high"
    },
    {
      year: 2017,
      event: "Solar content on YouTube Nigeria becomes searchable at scale",
      search_weight: "high"
    },
    {
      year: 2018,
      event: "EEI brings visible government solar to major markets — first touchable policy",
      search_weight: "medium"
    },
    {
      year: 2020,
      event: "Solar Power Naija — highest consumer awareness of government solar ever",
      search_weight: "very high"
    },
    {
      year: 2023,
      event: "FUEL SUBSIDY REMOVAL — catapults solar adoption — watershed moment",
      search_weight: "critical"
    },
    {
      year: 2024,
      event: "Solar adoption mainstream — market matures, product sophistication rises",
      search_weight: "very high"
    },
    {
      year: 2025,
      event: "Energy fintech, battery-as-a-service, agri-solar emerge as next wave",
      search_weight: "very high"
    }
  ],

  // ── CLAUDE ANALYSIS INSTRUCTIONS ────────────────────────
  // How Claude should use this knowledge when analysing content
  analysis_instructions: `
    When analysing Nigerian energy consumer content, use this policy
    knowledge base as follows:

    1. IDENTIFY POLICY REFERENCES
       Look for direct mentions (policy names, programme names) and
       indirect references (effects consumers describe without naming
       the policy). Map them to the policy timeline above.

    2. DETECT TRANSITION SIGNALS
       Pay special attention to content from transition marker years
       (2013, 2015, 2017, 2018, 2020, 2023, 2024, 2025).
       These are the years when consumer behaviour actually changed.

    3. MEASURE THE GAP
       When consumers describe energy policy effects, assess whether
       their experience matches the policy promise. The policy-to-reality
       gap is a core Vitics intelligence signal.

    4. TRACK THE 2023 WATERSHED
       The May 2023 fuel subsidy removal is the single most important
       event in recent Nigerian energy consumer history. Content from
       2023 onwards should be read against this backdrop.

    5. NEVER ASSUME POLICY AWARENESS
       Most Nigerian consumers are not aware of specific policy names.
       They experience effects — higher bills, new solar projects, fuel
       prices, government men installing things. Code these effects back
       to policies, not the other way around.
  `

};

// Export for use by AI engine
if(typeof module !== 'undefined') {
  module.exports = { VITICS_POLICY_KNOWLEDGE };
}
