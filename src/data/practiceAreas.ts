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
  Scale, 
  Megaphone, 
  Landmark, 
  Laptop, 
  UserX,
  Crosshair
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
    title: "Drink and / or Drug Driving", 
    desc: "Low, Mid, and High-Range PCA, drug driving, and breath analysis matters.",
    urgency: "Immediate action required. Police issue on-the-spot licence suspensions that take effect immediately. Speaking to a lawyer promptly allows proper review of breath analysis procedures.",
    severity: "Severe. Mandatory minimum licence disqualifications, hefty financial penalties, mandatory alcohol interlock installation, and permanent criminal records that impact employment.",
    fullDescription: "Prescribed Concentration of Alcohol (PCA) and DUI offences carry mandatory statutory disqualification periods and interlock requirements under NSW and Queensland traffic laws. Police rely on breath analysis readings, which require breath testing procedures, instrument calibration logs, and roadside detention timelines to strictly adhere to statutory requirements. Frontline Lawyers provides comprehensive representation to review the police brief and technical evidentiary records across Local and Magistrates Courts."
  },
  { 
    slug: "drug-offences", 
    icon: Pill, 
    title: "Drug Possession & Supply", 
    desc: "Personal possession, deemed supply, commercial quantities, and trafficking allegations.",
    urgency: "High. Search procedures, drug weights, and police evidentiary records require thorough scrutiny by experienced defence solicitors.",
    severity: "Extreme. Penalties range from permanent criminal records and international travel bans to substantial mandatory custodial sentences for commercial drug supply matters.",
    fullDescription: "Drug charges are prosecuted under the Drug Misuse and Trafficking Act (NSW) and Drugs Misuse Act (QLD). Police frequently rely on 'deemed supply' provisions where possession of a specified weight legally presumes an intention to supply or distribute. Police search powers under LEPRA and PPRA are subject to strict legal limits, and evidentiary challenges may arise regarding the lawfulness of searches, warrants, or electronic access. Frontline Lawyers provides representation across personal possession, commercial supply, and trafficking allegations."
  },
  { 
    slug: "assault-charges", 
    icon: Hand, 
    title: "Assault & Violent Offences", 
    desc: "Common assault, AOABH, wounding, affray, and self-defence.",
    urgency: "Urgent evidence preservation required. Venue security footage, mobile recordings, 000 calls, and independent witness statements must be secured immediately to substantiate self-defence before memories fade.",
    severity: "Severe. Ranging from recorded criminal convictions to substantial prison sentences. Establishing lawful self-defence operates as a complete legal defence resulting in full acquittal.",
    fullDescription: "Assault charges in New South Wales and Queensland range from common assault and affray to assault occasioning actual bodily harm (AOABH), reckless wounding, and grievous bodily harm (GBH). In many violent confrontation allegations, individuals were acting in lawful self-defence or defence of another. Under Australian law, including Section 418 of the Crimes Act 1900 (NSW), a person is not criminally responsible for an offence if their conduct was carried out in lawful self-defence. Once self-defence is raised on evidence, the prosecution bears the burden of disproving it beyond reasonable doubt. Frontline Lawyers provides rigorous trial preparation, forensic examination of CCTV recordings, medical evidence auditing, and courtroom cross-examination to establish statutory justification and achieve complete acquittals."
  },
  { 
    slug: "court-hearings-trials", 
    icon: Gavel, 
    title: "Court Hearings & Trials", 
    desc: "Contested hearings, committals, and jury trials in Local, District, and Supreme Courts.",
    urgency: "High. Evidence subpoenas, expert forensic reports, and cross-examination strategies require systematic preparation months prior to entering the courtroom.",
    severity: "Maximum. The final determination of innocence or guilt. A guilty verdict results in immediate criminal conviction, sentencing, and potential imprisonment.",
    fullDescription: "Contested hearings and jury trials require systematic forensic preparation, detailed witness cross-examination, and comprehensive legal submissions. Frontline Lawyers represents defendants facing summary hearings in the Local Court and indictable jury trials in District and Supreme Courts, working closely with leading trial barristers and senior barristers."
  },
  { 
    slug: "police-matters", 
    icon: Shield, 
    title: "Police Matters", 
    desc: "Police interviews, search warrants, arrest procedures, and statutory rights.",
    urgency: "Immediate. Contacting defence solicitors prior to speaking with police ensures your matter is managed professionally from the initial stages.",
    severity: "Extreme. Admissions made during police questioning form the cornerstone of prosecution cases.",
    fullDescription: "When individuals are contacted by police regarding an investigation or formal questioning, understanding procedural rules under the Law Enforcement (Powers and Responsibilities) Act (LEPRA) and the Evidence Act is critical. Frontline Lawyers provides strategic pre-interview legal advice, communicates directly with investigating officers, and reviews police evidence across Northern Rivers and South East Queensland to safeguard your legal rights."
  },
  { 
    slug: "firearms-weapons", 
    icon: Crosshair, 
    title: "Firearms & Weapons Offences", 
    desc: "Unlicensed or unregistered firearms, prohibited weapons, knives, and firearms licence issues.",
    urgency: "High. Mandatory reporting, search warrants, and strict statutory safe-keeping requirements demand immediate legal review to contest weapon classifications and protect licencing rights.",
    severity: "Severe. Substantial mandatory minimum custodial penalties under the Firearms Act, automatic 10-year licence revocations, and seizure of all registered firearms and ammunition.",
    fullDescription: "Under the Firearms Act 1996 (NSW) and Weapons Act (QLD), weapons and firearms charges are prosecuted with exceptional severity. Allegations involving unregistered firearms (Section 36), unauthorized pistols or prohibited firearms (Section 7A), or commercial firearms supply (Section 51D) carry significant custodial terms in the District and Supreme Courts. Furthermore, possessing prohibited weapons (such as gel blasters, replica firearms, or flick knives) or knives in a public place under Section 11C of the Summary Offences Act 1988 requires skilled legal representation to establish statutory reasonable excuses or contest unlawful searches. In addition, an AVO or criminal charge triggers automatic firearms licence revocation and seizure by the NSW Firearms Registry. Frontline Lawyers provides strategic defence advocacy in court and represents primary producers, sports shooters, and security personnel in Firearms Appeals before the NSW Civil and Administrative Tribunal (NCAT)."
  },
  { 
    slug: "bail-matters", 
    icon: Key, 
    title: "Bail Applications", 
    desc: "Release applications across Local, Magistrates, District, and Supreme Courts.",
    urgency: "Extreme emergency. Once bail is refused by police and a magistrate, you cannot easily make a second application without demonstrating fresh facts or exceptional change of circumstances.",
    severity: "Immediate and total loss of liberty. Being remanded in custody awaiting trial disrupts family, employment, and defence preparation.",
    fullDescription: "Bail determinations are critical stages in criminal proceedings. Under the NSW Bail Act 2013 and Queensland Bail Act 1980, strict 'Show Cause' provisions and 'unacceptable risk' tests apply to many serious offences. Refusal of bail results in remand in custody awaiting trial. Frontline Lawyers prepares and conducts urgent bail applications in Local, Magistrates, District, and Supreme Courts."
  },
  { 
    slug: "traffic-offences", 
    icon: Navigation, 
    title: "Traffic Offences", 
    desc: "Negligent driving, dangerous operation, excessive speeding, and camera-detected offences.",
    urgency: "Strict statutory deadlines apply. Election to take infringement notices to court or lodging formal appeals must be executed within tight timeframes.",
    severity: "Substantial. Unchecked demerit accumulation, heavy court fines, licence loss, and potential imprisonment for aggravated or dangerous driving charges.",
    fullDescription: "Traffic charges such as negligent driving, dangerous operation, and high-range speed infringements carry significant consequences, including potential convictions, fines, and driving disqualifications. Frontline Lawyers represents motorists across NSW and Queensland courts, assessing speed detection calibration records, road condition evidence, and procedural compliance."
  },
  { 
    slug: "licence-matters", 
    icon: Car, 
    title: "Licence Suspensions & Appeals", 
    desc: "Immediate suspensions, demerit point bans, and licence appeals.",
    urgency: "Extremely time-sensitive. Administrative appeal windows for police-issued immediate suspensions or Transport for NSW cancellation notices must be lodged strictly within 28 days.",
    severity: "Immediate loss of driving privileges, threatening your job, family care responsibilities, business operations, and leading to severe secondary driving-while-disqualified charges.",
    fullDescription: "Losing your driver licence can impact employment, business operations, and family commitments. Following a police-issued immediate suspension or a Notice of Suspension from Transport for NSW or Queensland Transport, statutory appeal processes exist in the Local Court. Frontline Lawyers prepares and advocates licence appeals to present comprehensive mitigating evidence to the court."
  },
  { 
    slug: "appeals", 
    icon: Scale, 
    title: "Appeals", 
    desc: "Appeals against harsh sentences or wrongful convictions.",
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
    slug: "domestic-violence", 
    icon: Home, 
    title: "Domestic Violence & AVOs", 
    desc: "Domestic allegations, AVOs and DVOs, stalking and intimidation.",
    urgency: "Critical. Provisional and interim AVOs/DVOs take effect immediately upon service. Immediate legal representation is required to review police conditions, protect housing and parenting arrangements, and preserve communications records.",
    severity: "Severe. Immediate exclusion from family homes, weapon licence revocation, and strict criminal liability with mandatory custodial risks under Section 14 upon any alleged breach.",
    fullDescription: "Domestic violence proceedings, Apprehended Violence Orders (AVOs/ADVOs) in NSW, and Domestic Violence Orders (DVOs) in Queensland impose restrictive conditions that alter living arrangements, family contact, and professional livelihoods. While an AVO is civil in nature, any alleged breach constitutes a serious criminal offence with a statutory presumption of imprisonment. Furthermore, charges of stalking or intimidation with intent to cause fear of physical or mental harm under Section 13 of the Crimes (Domestic and Personal Violence) Act 2007 carry custodial penalties of up to 5 years, often hinging on disputed text messages, phone logs, and contextual evidence. Frontline Lawyers provides comprehensive defence across contesting provisional orders, negotiating amended conditions or undertakings, preserving electronic message chains, and vigorously defending domestic violence, stalking, and AVO breach allegations in court."
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
    slug: "fraud-financial-crime", 
    icon: Landmark, 
    title: "Fraud & Financial Crime", 
    desc: "Centrelink and Commonwealth fraud, money laundering, and proceeds of crime.",
    urgency: "Extreme. Federal CDPP briefs, Services Australia audits, and Crime Commission asset-freezing orders require prompt financial analysis and structured response coordination.",
    severity: "Catastrophic. Federal sentencing benchmarks, mandatory restitution orders, total asset forfeiture under proceeds of crime statutes, and substantial terms of imprisonment.",
    fullDescription: "Commonwealth prosecutions brought by the Commonwealth Director of Public Prosecutions (CDPP)—including Services Australia / Centrelink overpayments, Medicare fraud, taxation evasion, and money laundering—involve complex administrative evidence, data-matching records, and forensic accounting. Furthermore, under the Proceeds of Crime Act and Criminal Assets Recovery legislation, authorities can freeze personal and business bank accounts, mortgages, and family assets without criminal convictions. Frontline Lawyers provides structured legal defence representation to audit prosecution briefs, challenge financial attribution, protect legitimate family assets from forfeiture, and advocate before Local, District, and Supreme Courts."
  },
  { 
    slug: "rape-sexual-assault", 
    icon: UserX, 
    title: "Sexual Assault Allegations", 
    desc: "Indictable sexual offences, historical allegations, and committal proceedings.",
    urgency: "Extreme emergency. Formal committal proceedings and evidentiary reviews require early, meticulous preparation by defence solicitors.",
    severity: "Catastrophic. Lengthy mandatory minimum prison terms, lifetime placement on the child protection / sex offender registry, and total social ruin.",
    fullDescription: "Indictable sexual offence allegations are investigated extensively and tried before the District and Supreme Courts. These proceedings involve complex rules of evidence, committal hearings, and detailed forensic analysis. Frontline Lawyers provides rigorous representation to defend indictable charges and protect our clients' interests."
  },
  { 
    slug: "murder-manslaughter", 
    icon: Scale, 
    title: "Murder & Manslaughter", 
    desc: "Murder, attempted murder, manslaughter, and dangerous act charges.",
    urgency: "Absolute emergency. Direct representation by defence solicitors at every stage of a homicide investigation, police interview, forensic search, and Supreme Court bail application is critical.",
    severity: "Maximum penalty in the criminal justice system—ranging up to 25 years for manslaughter and life imprisonment for murder in maximum-security correctional facilities.",
    fullDescription: "Homicide allegations—including murder, attempted murder, manslaughter, and fatal incidents involving criminal negligence or dangerous acts—are the most serious prosecutions in the criminal justice system, heard before the Supreme Court. These proceedings involve extensive police strike-force investigations, forensic pathology, digital metadata, ballistics, and complex issues of intent and causation. Frontline Lawyers provides relentless legal representation, pairing Principal Lawyer Adam Ashley with premier Senior Counsel (KC/SC) and seasoned trial barristers to conduct exhaustive evidentiary investigations, challenge prosecution briefs, and deliver formidable courtroom advocacy."
  }
];
