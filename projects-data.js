/* ============================================================
   PROJECTS DATA
   ------------------------------------------------------------
   This is the ONLY file you need to edit to add, remove, or
   change a project on your site. The homepage reads this array
   and builds the ledger + pop-up detail cards automatically.
 
   HOW TO ADD A NEW PROJECT:
   1. Copy one whole { ... } block below (including the commas).
   2. Paste it as a new entry in the projectsData array.
   3. Change the text inside the quotes to describe YOUR project.
   4. category must be one of: "Financial Analysis", "Risk Advisory",
      "Forensic & Audit", "Research"  (or add a new one — the
      filter buttons on the site update automatically).
   5. "learning" is optional but recommended — one sentence on what
      the project taught you and how it connects to your career
      goals. It shows in italics at the bottom of the pop-up.
   6. Save the file and refresh the page. That's it — no HTML
      or CSS editing required.
   ============================================================ */
 
const projectsData = [
  {
    title: "Investor & Customer Reaction to the Vodafone–Idea Merger",
    category: "Financial Analysis",
    year: "2025",
    summary: "A field study on how the Vodafone–Idea merger played out financially and psychologically — for investors and for customers.",
    details: [
      "Compared five years of pre-merger and post-merger financial ratios (profitability, liquidity, leverage, EPS) for Vodafone India, Idea Cellular and the merged entity",
      "Mapped five years of share price movement against key events — the Jio launch, AGR dues, government relief packages",
      "Ran a 26-person investor survey and a 64-person customer survey (using the RATER service-quality model) to capture sentiment on both sides of the deal",
      "Applied behavioural finance concepts — loss aversion, herding, overconfidence — to explain why investor and customer reactions didn't always match the financial data",
      "Concluded that scale alone didn't create value: without customer trust, the merger's synergies never fully reached the bottom line"
    ],
    learning: "This project is where I first saw, in real numbers, that a deal can look sound on paper and still fail if the people affected by it don't trust the outcome. It's built my interest in the human, behavioural side of financial analysis — the gap between what the numbers say and how people actually react to them.",
    link: ""
  },
  {
    title: "GudZest — Go-to-Market Strategy for a Jaggery-Based Lemonade",
    category: "Research",
    year: "2025",
    summary: "Built a full marketing and pricing strategy for a new-to-market, sustainably packaged beverage brand, from segmentation through to launch phasing.",
    details: [
      "Segmented and targeted four consumer groups (youth, office-goers, fitness enthusiasts, families) with distinct value propositions",
      "Chose and justified a penetration pricing strategy (₹30–35 per bottle) against competing colas and juices, with a phased shift toward value-based pricing post-launch",
      "Designed the brand's positioning, packaging and communication strategy, including a multi-channel distribution plan (modern trade, quick commerce, B2B tie-ups)",
      "Built a phased financial and implementation roadmap — from test launch to full market rollout, including revenue projections and break-even timeline"
    ],
    learning: "This project was a good reminder that every business decision — even a pricing call — has a compliance and control angle behind it: contracts, FSSAI approvals, margin assumptions that need to hold up under scrutiny. It's part of why I'm drawn to the advisory side of business rather than just the strategy side.",
    link: ""
  },
  {
    title: "Comparative Study of Mutual Fund Schemes — DSP vs. Baroda AMC",
    category: "Financial Analysis",
    year: "2024",
    summary: "An independent, solo study comparing fund schemes from two asset management companies on performance, risk and regulatory disclosure.",
    details: [
      "Analysed the Baroda BNP Paribas Value Fund's returns, asset allocation and expense ratio across Direct vs. Regular plans",
      "Reviewed risk metrics and portfolio disclosures to assess how transparently each fund reported its position",
      "Compared governance and disclosure practices between the two AMCs, referencing SEBI mutual fund regulations",
      "Weighed strengths (diversification, risk management) against weaknesses (sector concentration, integration risk) to form a balanced view"
    ],
    learning: "This project was really my first real exposure to how a regulated financial product is put together and disclosed — expense ratios, risk categorisation, SEBI compliance. It built my interest in the assessment and compliance side of financial products, rather than the products themselves.",
    link: ""
  },
  {
    title: "Kerala's Financial Health — Debt Sustainability Study",
    category: "Risk Advisory",
    year: "2025",
    summary: "A macro-level study of an Indian state's fiscal health, focusing on my section: the debt-to-GDP ratio and what it signals about long-term sustainability.",
    details: [
      "Calculated Kerala's debt-to-GSDP ratio (34.15% for FY24–25) and traced its five-year trend, including the pandemic-driven peak in FY20–21",
      "Broke down the composition of outstanding debt across internal debt, provident funds, treasury deposits and central loans",
      "Assessed the ratio against the FRBM Act's fiscal prudence targets and identified the key drivers pushing it up (revenue deficits, high interest payments)",
      "Contributed to the group's wider analysis of debt sustainability, drawing on the debt-dynamics model (growth rate vs. effective interest rate) to judge whether Kerala's debt trajectory is stable"
    ],
    learning: "This project took the idea of a 'leverage ratio' out of a single company's balance sheet and applied it at the scale of a state economy — same underlying question of sustainability, much higher stakes. It's given me a genuine feel for risk assessment at scale, which is exactly the muscle I want to build in risk advisory work.",
    link: ""
  },
  {
    title: "Corporate Fraud Case Study — DHFL & Tyco International",
    category: "Forensic & Audit",
    year: "2025",
    summary: "A comparative audit case study of two major corporate frauds — DHFL in India and Tyco in the US — focusing on my section: Tyco's regulatory response and resolution.",
    details: [
      "Traced the SEC's investigation into Tyco's accounting practices and the subsequent civil charges against its executives",
      "Covered the criminal trials of CEO Dennis Kozlowski and CFO Mark Swartz — convictions, sentencing and over $200 million in restitution and fines",
      "Analysed the corporate governance reforms that followed, including board restructuring and the broader push toward the Sarbanes–Oxley Act",
      "Assessed the $2.9 billion shareholder settlement and what it signalled about accountability for auditors (PwC) as well as executives"
    ],
    learning: "Studying how the fraud actually unwound — not just how it happened — is what first pulled me toward forensic accounting and audit as a career path rather than just a case study topic. It's a direct line to the internal audit and forensic review work I've since started doing as an intern: the job is as much about noticing what a clean report doesn't say as it is about the numbers themselves.",
    link: ""
  },
  {
    title: "Fundamental & Technical Analysis of HDFC Bank",
    category: "Financial Analysis",
    year: "2024",
    summary: "A financial statement and credit-strength analysis of HDFC Bank, covering profitability, asset quality, capital adequacy and its published credit ratings.",
    details: [
      "Assessed profitability, asset quality, capital adequacy and liquidity through ratios like ROA, ROE, NIM, CAR and NPA levels",
      "Reviewed HDFC Bank's CRISIL credit ratings and what they signal about its capital strength and risk position",
      "Looked at short-term price indicators (moving averages, MACD, RSI) purely as a secondary, exploratory exercise",
      "Formed a view on the bank's overall financial health, grounded mainly in its ratios and credit rating rather than market price movement"
    ],
    learning: "This project is where financial statement analysis stopped being abstract — reading a bank's NPA levels and capital adequacy ratio and understanding what they actually say about its resilience. That's the analytical instinct I want to keep sharpening, applied toward credit risk and financial due diligence rather than trading or investment calls.",
    link: ""
  }
];
 
