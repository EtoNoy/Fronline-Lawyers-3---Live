import { 
  Wine, 
  Pill, 
  Navigation, 
  Car, 
  Home, 
  Hand, 
  Key, 
  Shield, 
  Gavel, 
  AlertTriangle, 
  ShieldCheck, 
  ArrowUpRight, 
  Megaphone, 
  Landmark, 
  DollarSign, 
  Eye, 
  Laptop, 
  UserX, 
  AlertCircle, 
  Skull 
} from 'lucide-react';

export interface PracticeArea {
  slug: string;
  icon: any;
  title: string;
  desc: string;
  urgency: string;
  severity: string;
  fullDescription: string;
}

export const practiceAreasData: PracticeArea[] = [
  { 
    slug: "drink-driving-dui", 
    icon: Wine, 
    title: "Drink Driving / DUI", 
    desc: "Low, Mid, and High-Range PCA, drug driving, and breath analysis matters.",
    urgency: "Immediate action required. Police issue on-the-spot licence suspensions that take effect immediately. Speaking to counsel promptly allows proper review of breath analysis procedures.",
    severity: "Severe. Mandatory minimum licence disqualifications, hefty financial penalties, mandatory alcohol interlock installation, and permanent criminal records that impact employment.",
    fullDescription: "Prescribed Concentration of Alcohol (PCA) and DUI offences carry mandatory statutory disqualification periods and interlock requirements under NSW and Queensland traffic laws. Police rely on breath analysis readings, which require breath testing procedures, instrument calibration logs, and roadside detention timelines to strictly adhere to statutory requirements. Frontline Lawyers provides comprehensive representation to review the police brief and technical evidentiary records across Local and Magistrates Courts."
  },
  { 
    slug: "drug-offences", 
    icon: Pill, 
    title: "Drug Possession & Supply Charges", 
    desc: "Personal possession, deemed supply, commercial quantities, and trafficking allegations.",
    urgency: "High. Search procedures, drug weights, and police evidentiary records require thorough scrutiny by experienced defence counsel.",
    severity: "Extreme. Penalties range from permanent criminal records and international travel bans to substantial mandatory custodial sentences for commercial drug supply matters.",
    fullDescription: "Drug charges are prosecuted under the Drug Misuse and Trafficking Act (NSW) and Drugs Misuse Act (QLD). Police frequently rely on 'deemed supply' provisions where possession of a specified weight legally presumes an intention to supply or distribute. Police search powers under LEPRA and PPRA are subject to strict legal limits, and evidentiary challenges may arise regarding the lawfulness of searches, warrants, or electronic access. Frontline Lawyers provides representation across personal possession, commercial supply, and trafficking allegations."
  },
  { 
    slug: "traffic-offences", 
    icon: Navigation, 
    title: "Traffic Offences & Driving Charges", 
    desc: "Negligent driving, dangerous operation, excessive speeding, and camera-detected offences.",
    urgency: "Strict statutory deadlines apply. Election to take infringement notices to court or lodging formal appeals must be executed within tight timeframes.",
    severity: "Substantial. Unchecked demerit accumulation, heavy court fines, licence loss, and potential imprisonment for aggravated or dangerous driving charges.",
    fullDescription: "Traffic charges such as negligent driving, dangerous operation, and high-range speed infringements carry significant consequences, including potential convictions, fines, and driving disqualifications. Frontline Lawyers represents motorists across NSW and Queensland courts, assessing speed detection calibration records, road condition evidence, and procedural compliance."
  },
  { 
    slug: "licence-matters", 
    icon: Car, 
    title: "Licence Matters & RMS Appeals", 
    desc: "Police immediate suspensions, demerit point bans, and licence appeals.",
    urgency: "Extremely time-sensitive. Administrative appeal windows for police-issued immediate suspensions or Transport agency cancellation notices must be lodged strictly within 28 days.",
    severity: "Immediate loss of driving privileges, threatening your job, family care responsibilities, business operations, and leading to severe secondary driving-while-disqualified charges.",
    fullDescription: "Losing your driver licence can impact employment, business operations, and family commitments. Following a police-issued immediate suspension or a Notice of Suspension from Transport for NSW or Queensland Transport, statutory appeal processes exist in the Local Court. Frontline Lawyers prepares and advocates licence appeals to present comprehensive mitigating evidence to the court."
  },
  { 
    slug: "domestic-violence", 
    icon: Home, 
    title: "Domestic Violence & AVO / DVO Matters", 
    desc: "Domestic allegations, Apprehended Domestic Violence Orders (ADVOs), and order variations.",
    urgency: "Critical. Provisional and interim orders take effect immediately, requiring prompt legal representation to review conditions and prepare court responses.",
    severity: "Severe. Immediate displacement under interim orders, loss of contact, weapon licence cancellations, and mandatory criminal charges and custodial risks for any alleged breach.",
    fullDescription: "Domestic violence proceedings and Apprehended Violence Orders (AVOs) or Domestic Violence Orders (DVOs) involve restrictive conditions that can affect living arrangements and personal contact. While an AVO is a civil order, any alleged breach constitutes a criminal offence. Frontline Lawyers represents clients in contesting provisional orders, negotiating conditions, and defending domestic violence allegations in court."
  },
  { 
    slug: "assault-charges", 
    icon: Hand, 
    title: "Assault Charges & Violent Offences", 
    desc: "Common assault, assault occasioning actual bodily harm (AOABH), wounding, and affray.",
    urgency: "Urgent evidence preservation required. Security CCTV footage, pub recordings, mobile videos, and witness accounts require prompt subpoena and formal requests.",
    severity: "Significant to severe. Ranging from permanent convictions on criminal records to multi-year custodial sentences in maximum-security correctional facilities.",
    fullDescription: "Assault charges range from common assault and affray to assault occasioning actual bodily harm (AOABH) and wounding. Contested hearings often involve critical examination of witness credibility, CCTV recordings, and statutory defence provisions under Australian law. Frontline Lawyers provides strategic trial preparation and courtroom advocacy across all levels of assault allegations."
  },
  { 
    slug: "bail-matters", 
    icon: Key, 
    title: "Bail Applications & Show Cause", 
    desc: "Release applications across Local, Magistrates, District, and Supreme Courts.",
    urgency: "Extreme emergency. Once bail is refused by police and a magistrate, you cannot easily make a second application without demonstrating fresh facts or exceptional change of circumstances.",
    severity: "Immediate and total loss of liberty. Being remanded in custody awaiting trial disrupts family, employment, and defence preparation.",
    fullDescription: "Bail determinations are critical stages in criminal proceedings. Under the NSW Bail Act 2013 and Queensland Bail Act 1980, strict 'Show Cause' provisions and 'unacceptable risk' tests apply to many serious offences. Refusal of bail results in remand in custody awaiting trial. Frontline Lawyers prepares and conducts urgent bail applications in Local, Magistrates, District, and Supreme Courts."
  },
  { 
    slug: "police-matters", 
    icon: Shield, 
    title: "Police Matters & Questioning Rights", 
    desc: "Police station interviews, search warrants, arrest procedures, and statutory rights.",
    urgency: "Immediate. Contacting defence counsel prior to attending a police station ensures your matter is managed professionally from the initial stages.",
    severity: "Extreme. Admissions made during police questioning form the cornerstone of prosecution cases.",
    fullDescription: "When individuals are contacted by police regarding an investigation, interview, or station attendance, understanding procedural rules under the Law Enforcement (Powers and Responsibilities) Act (LEPRA) and the Evidence Act is critical. Frontline Lawyers provides direct representation and station attendances across Northern Rivers and South East Queensland to safeguard your interests."
  },
  { 
    slug: "court-hearings-trials", 
    icon: Gavel, 
    title: "Court Hearings & Contested Trials", 
    desc: "Contested hearings, committals, and jury trials in Local, District, and Supreme Courts.",
    urgency: "High. Evidence subpoenas, expert forensic reports, and cross-examination strategies require systematic preparation months prior to entering the courtroom.",
    severity: "Maximum. The final determination of innocence or guilt. A guilty verdict results in immediate criminal conviction, sentencing, and potential imprisonment.",
    fullDescription: "Contested hearings and jury trials require systematic forensic preparation, detailed witness cross-examination, and comprehensive legal submissions. Frontline Lawyers represents defendants facing summary hearings in the Local Court and indictable jury trials in District and Supreme Courts, working closely with leading trial barristers and Senior Counsel."
  },
  { 
    slug: "avo", 
    icon: AlertTriangle, 
    title: "AVO & Restraining Orders", 
    desc: "Apprehended Violence Orders (AVO), restraining orders, and private application disputes.",
    urgency: "High. First return court dates arrive quickly; agreeing to orders without legal review can affect weapons licences, employment security clearances, and parenting arrangements.",
    severity: "Moderate civil impact escalating to severe criminal liability upon any alleged breach.",
    fullDescription: "Apprehended Violence Orders (AVO) in NSW and Protection Orders in Queensland place significant civil restraints on personal freedom. While the order itself does not generate a criminal record, any alleged contravention is a criminal charge carrying a statutory presumption of imprisonment. Frontline Lawyers represents applicants and respondents in contesting unreasonable orders, negotiating undertakings, and varying conditions."
  },
  { 
    slug: "self-defence", 
    icon: ShieldCheck, 
    title: "Self-Defence & Justification", 
    desc: "Statutory justification under Section 418 Crimes Act, defending persons or property.",
    urgency: "Immediate evidence securing required. Statements from independent patrons, bouncers, and surveillance angles must be locked down before memories fade.",
    severity: "Critical. Establishing lawful self-defence results in a complete acquittal and dismissal of assault or violent charges.",
    fullDescription: "Under Australian law, including Section 418 of the Crimes Act 1900 (NSW), an individual is not criminally responsible for an offence if their actions were carried out in lawful self-defence. Establishing self-defence requires evidence that the response was perceived as necessary and was reasonable in the circumstances. Frontline Lawyers prepares comprehensive trial defences to test prosecution evidence and establish statutory justification."
  },
  { 
    slug: "appeals", 
    icon: ArrowUpRight, 
    title: "District Court Severity & Conviction Appeals", 
    desc: "Appeals against harsh sentences, wrongful convictions, or magistrate errors.",
    urgency: "Strict 28-day statutory appeal deadline from the date of sentence in the Local or Magistrates Court.",
    severity: "High. An appeal is your legal avenue to overturn a wrongful conviction, eliminate a criminal record, or substitute a custodial sentence for a community-based order.",
    fullDescription: "If you have received an unjust conviction or an excessively harsh sentence in the Local Court or Magistrates Court, you have a statutory right of appeal to the District Court. Severity appeals allow a higher court judge to reconsider your penalty afresh, while conviction appeals challenge magistrate errors of fact or law. Frontline Lawyers prepares and argues appeals across NSW and Queensland."
  },
  { 
    slug: "public-nuisance", 
    icon: Megaphone, 
    title: "Public Nuisance & Disorderly Conduct", 
    desc: "Offensive language, offensive behaviour, obstructing police, and affray.",
    urgency: "Moderate to high. Reviewing police body-worn video and venue surveillance must be undertaken promptly.",
    severity: "Fines, community correction orders, and potential criminal records that disrupt international travel and professional accreditations.",
    fullDescription: "Public order offences frequently result from escalated interactions during routine street encounters. Frontline Lawyers examines whether police were acting in the lawful execution of their duty, assesses body-worn camera footage, and defends public nuisance and disorderly allegations in court."
  },
  { 
    slug: "centrelink-fraud", 
    icon: Landmark, 
    title: "Centrelink & Commonwealth Fraud", 
    desc: "Commonwealth DPP investigations, Services Australia overpayments, and taxation fraud.",
    urgency: "High. Complex federal briefs require prompt legal analysis and structured response coordination.",
    severity: "Severe. Commonwealth fraud offences carry strict federal sentencing benchmarks, frequently resulting in substantial restitution orders and federal prison sentences.",
    fullDescription: "Commonwealth prosecutions brought by the Commonwealth Director of Public Prosecutions (CDPP) involve complex data-matching, financial records, and administrative evidence. Frontline Lawyers provides structured legal representation to review Commonwealth briefs of evidence, assess liability, and advocate before the court."
  },
  { 
    slug: "money-laundering", 
    icon: DollarSign, 
    title: "Money Laundering & Proceeds of Crime", 
    desc: "Crime Commission freezing orders, proceeds of crime, and financial transaction charges.",
    urgency: "Extreme. High-level restraining orders freeze bank accounts, mortgages, and business accounts immediately upon application.",
    severity: "Catastrophic. Total loss of personal and family assets, business collapse, and lengthy terms of imprisonment under state and federal proceeds of crime statutes.",
    fullDescription: "Under the Proceeds of Crime Act and Criminal Assets Recovery legislation, authorities can apply to freeze assets during financial investigations. Challenging these orders requires specialist legal advocacy to secure living expense allowances, protect legitimate family assets, and contest forfeiture applications. Frontline Lawyers represents clients in proceeds of crime and financial investigations."
  },
  { 
    slug: "stalk-intimidation", 
    icon: Eye, 
    title: "Stalk or Intimidation Charges", 
    desc: "Personal intimidation, stalking, harassment, and carriage service telecommunications matters.",
    urgency: "High. Electronic records, messaging threads, call histories, and location data must be preserved and forensically backed up immediately.",
    severity: "Substantial. Immediate local court AVOs, criminal records, and potential custodial sentences of up to 5 years under Section 13 of the Crimes (Domestic and Personal Violence) Act.",
    fullDescription: "Stalking and intimidation charges under Section 13 of the Crimes (Domestic and Personal Violence) Act frequently involve electronic communications, social media records, and telecommunications logs. Frontline Lawyers conducts thorough evidentiary audits to evaluate context, message chains, and disputed allegations in court."
  },
  { 
    slug: "cybercrime", 
    icon: Laptop, 
    title: "Cybercrime & Digital Offences", 
    desc: "Unauthorised computer access, data tampering, online fraud, and digital device investigations.",
    urgency: "High. Digital chain of custody and device forensic reports require early legal scrutiny.",
    severity: "Severe state and federal penalties, forfeiture of computing equipment, and long-term supervision or device restrictions.",
    fullDescription: "Cybercrime charges rely heavily on automated IP tracking, server logs, and digital forensics. However, digital evidence is vulnerable to attribution errors, shared Wi-Fi networks, malware, and third-party unauthorised access. Frontline Lawyers provides focused defence representation to challenge technical attribution and evidentiary integrity."
  },
  { 
    slug: "rape-sexual-assault", 
    icon: UserX, 
    title: "Sexual Assault & Indictable Allegations", 
    desc: "Indictable sexual offences, historical allegations, and committal proceedings.",
    urgency: "Extreme emergency. Formal committal proceedings and evidentiary reviews require early, meticulous preparation by defence counsel.",
    severity: "Catastrophic. Lengthy mandatory minimum prison terms, lifetime placement on the child protection / sex offender registry, and total social ruin.",
    fullDescription: "Indictable sexual offence allegations are investigated extensively and tried before the District and Supreme Courts. These proceedings involve complex rules of evidence, committal hearings, and detailed forensic analysis. Frontline Lawyers provides rigorous representation to defend indictable charges and protect our clients' interests."
  },
  { 
    slug: "manslaughter", 
    icon: AlertCircle, 
    title: "Manslaughter & Fatal Incidents", 
    desc: "Criminal negligence, unlawful and dangerous acts, and vehicular manslaughter allegations.",
    urgency: "Extreme. Commissioning independent expert forensic and pathology reviews requires immediate legal coordination.",
    severity: "Maximum. Custodial sentences of up to 25 years, permanent destruction of career, and intense media scrutiny.",
    fullDescription: "Manslaughter allegations involve complex issues of causation, negligence, and expert testimony concerning accidental or unlawful fatal incidents. Frontline Lawyers coordinates independent medical, pathology, and accident reconstruction experts to prepare comprehensive trial defences."
  },
  { 
    slug: "murder-charges", 
    icon: Skull, 
    title: "Murder Charges & Homicide Advocacy", 
    desc: "Murder, homicide, and attempted murder trials in the Supreme Court.",
    urgency: "Absolute emergency. Direct representation by defence counsel at every stage of a homicide investigation is critical.",
    severity: "The ultimate penalty in the criminal justice system—life imprisonment in a maximum-security correctional centre.",
    fullDescription: "Homicide and murder trials are the most serious matters in the criminal justice system, heard before the Supreme Court. Frontline Lawyers provides dedicated legal counsel, pairing Principal Lawyer Adam Ashley with premier Senior Counsel (KC/SC) and seasoned trial barristers to deliver exhaustive defence advocacy."
  }
];
