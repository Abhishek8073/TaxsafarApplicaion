export const navItems = [
  { label: 'Why Us', href: '#why-us' },
  { label: 'Process', href: '#process' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Login/Register', href: '#auth' },
  { label: 'Contact', href: '#contact' },
]

export const stats = [
  { value: '50+', label: 'Experts and specialists' },
  { value: '10k+', label: 'Returns and notices supported' },
  { value: '4.8/5', label: 'Average client satisfaction' },
  { value: 'Pan India', label: 'Support across registrations' },
]

export const serviceItems = [
  {
    slug: 'return-filing',
    title: 'Return Filing',
    text: 'GST, ITR, TDS, FSSAI and other filing support handled with speed and accuracy.',
    intro: 'Stay compliant with timely filing support designed for individuals, startups and growing businesses.',
    points: ['GST and ITR filing support', 'TDS and annual return assistance', 'Timely reminders and document guidance'],
  },
  {
    slug: 'notice-resolution',
    title: 'Notice Resolution',
    text: 'Practical help for GST, income tax and compliance notices with expert guidance.',
    intro: 'Reduce stress with a clear expert-led response process for tax and compliance notices.',
    points: ['Notice review and explanation', 'Drafting and response support', 'End-to-end case guidance'],
  },
  {
    slug: 'registration',
    title: 'Registration',
    text: 'Company, GST, MSME, trademark and startup registrations in one guided flow.',
    intro: 'Launch faster with registration support that simplifies each legal and compliance step.',
    points: ['GST, MSME and startup registration', 'Trademark and company setup', 'Clear document checklist'],
  },
  {
    slug: 'virtual-office',
    title: 'Virtual Office',
    text: 'Business address solutions with documents ready for GST and MCA requirements.',
    intro: 'Set up a professional presence with virtual office solutions tailored to compliance needs.',
    points: ['GST-ready documentation', 'Business address support', 'Fast onboarding assistance'],
  },
  {
    slug: 'consulting',
    title: 'Consulting',
    text: 'Tax, compliance and business planning support built around growth-stage teams.',
    intro: 'Get practical business and tax advice that helps founders make smarter decisions early.',
    points: ['Business compliance guidance', 'Tax planning discussions', 'Founder-friendly support'],
  },
  {
    slug: 'accounting',
    title: 'Accounting',
    text: 'Cloud bookkeeping, reconciliations and reporting that keep finances decision-ready.',
    intro: 'Keep your books clean, updated and easy to understand with modern accounting support.',
    points: ['Monthly bookkeeping', 'Reconciliation and reports', 'Decision-ready financial visibility'],
  },
  {
    slug: 'loan-help',
    title: 'Loan Help',
    text: 'Application support, paperwork review and lender-ready documentation assistance.',
    intro: 'Improve your readiness for business funding with better documentation and application support.',
    points: ['Application guidance', 'Document review support', 'Lender-ready preparation'],
  },
  {
    slug: 'financial-planning',
    title: 'Financial Planning',
    text: 'Structured guidance for tax-saving investments, goals and long-term wealth planning.',
    intro: 'Build a stronger financial path with planning support designed around your goals.',
    points: ['Tax-saving planning', 'Goal-based investment direction', 'Long-term financial clarity'],
  },
]

export const whyItems = [
  {
    title: 'Clear next steps',
    text: 'Every section is designed to reduce confusion and move visitors toward the right service quickly.',
  },
  {
    title: 'Business-first language',
    text: 'The copy focuses on outcomes, so founders and individuals instantly understand the value.',
  },
  {
    title: 'Faster trust building',
    text: 'Social proof, response time, service coverage and contact routes are visible early in the journey.',
  },
]

export const processSteps = [
  {
    step: '01',
    title: 'Choose a service',
    text: 'Visitors can scan the service cards and jump to the most relevant business need.',
  },
  {
    step: '02',
    title: 'Share your details',
    text: 'A short enquiry form keeps the lead capture simple and friendly on every device.',
  },
  {
    step: '03',
    title: 'Talk to an expert',
    text: 'The design makes callback and support actions easy to find without overwhelming the page.',
  },
  {
    step: '04',
    title: 'Track progress',
    text: 'Status-focused messaging reassures users that TaxSafar stays with them until completion.',
  },
]

export const reviews = [
  {
    name: 'Riya Sharma',
    role: 'Startup Founder',
    text: 'The experience feels far more premium and trustworthy. The services are easier to understand and compare.',
  },
  {
    name: 'Aman Jain',
    role: 'Small Business Owner',
    text: 'The page now guides me naturally from service discovery to enquiry. It feels simple instead of crowded.',
  },
  {
    name: 'Kavya Mehta',
    role: 'Freelancer',
    text: 'The mobile layout is especially strong. I can scan the key information and reach out without friction.',
  },
]

export const contactOptions = serviceItems.map((item) => item.title)
