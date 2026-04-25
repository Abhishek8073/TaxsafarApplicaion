export const navItems = [
  { label: 'Process', href: '/#process' },
  { label: 'Reviews', href: '/#reviews' },
  { label: 'Login', href: '/auth' },
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
    text: 'Excellent service and highly professional team. They handled everything smoothly and delivered exactly what was promised. Communication was clear throughout the process, and I felt confident at every step. Highly recommended for anyone looking for reliable and efficient service.'
  },
  {
    name: 'Aman Jain',
    role: 'Small Business Owner',
    text: 'Great experience working with this company. Their attention to detail and commitment to customer satisfaction really stand out. They were quick to respond, solved my queries effectively, and ensured everything was completed on time. Will definitely use their services again.'
  },
  {
    name: 'Kavya Mehta',
    role: 'Freelancer',
    text: 'Outstanding support and quality service. The team is knowledgeable, friendly, and truly cares about their clients. They made a complex process simple and stress-free. I appreciate their dedication and would strongly recommend them to others.',
  },
]

export const contactOptions = serviceItems.map((item) => item.title)

export const supportPages = [
  {
    slug: 'terms-of-use',
    title: 'Terms of Use',
    label: 'Terms of Use',
    sourceUrl: 'https://taxsafar.com/terms.php',
    intro:
      'These terms govern the use of TaxSafar, its website, services, and digital tools provided by Swilesure Private Limited.',
    sections: [
      {
        heading: '1. Introduction',
        body:
          'By accessing the platform, users agree to comply with these terms and applicable laws while using TaxSafar services.',
      },
      {
        heading: '2. User Responsibilities',
        points: [
          'Users must provide accurate, current, and complete information while registering or using services.',
          'Login credentials must be kept confidential by the user.',
          'Illegal, fraudulent, or abusive use of the platform is prohibited.',
        ],
      },
      {
        heading: '3. Services and Limitations',
        body:
          'TaxSafar assists with return filing, compliance, registrations, and financial services, but outcomes dependent on government or regulatory decisions cannot be guaranteed.',
      },
      {
        heading: '4. Intellectual Property',
        body:
          'Site content, branding, software, and text are owned by Swilesure Private Limited and protected under applicable intellectual property laws.',
      },
      {
        heading: '5. Third-Party Links',
        body:
          'The website may contain third-party resources, but TaxSafar is not responsible for their content or practices.',
      },
      {
        heading: '6. Termination and Updates',
        body:
          'Access may be suspended for misuse, violations, or legal requirements. Terms may also be updated periodically, and continued use implies acceptance of changes.',
      },
    ],
    contact: ['Email: support@taxsafar.com'],
  },
  {
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    label: 'Privacy Policy',
    sourceUrl: 'https://taxsafar.com/privacy.php',
    intro:
      'TaxSafar explains how personal information is collected, used, disclosed, stored, and protected when users access the platform and related services.',
    sections: [
      {
        heading: '1. Information We Collect',
        body:
          'Personal details may include name, email, contact number, PAN, Aadhaar, address, and payment-related information shared during service use or registration.',
      },
      {
        heading: '2. How Information Is Used',
        points: [
          'To provide, operate, and maintain services.',
          'To improve and personalize platform offerings.',
          'To communicate about updates, queries, and transactions.',
          'To meet legal and regulatory obligations.',
        ],
      },
      {
        heading: '3. Sharing of Data',
        body:
          'TaxSafar states that personal data is not sold. It may be shared with regulators, authorized service providers, or law enforcement when legally required.',
      },
      {
        heading: '4. Cookies and Security',
        body:
          'Cookies and tracking tools are used to improve browsing and analytics, while industry-standard measures are used to protect personal information.',
      },
      {
        heading: '5. Retention and User Rights',
        body:
          'Data is retained only as long as necessary for services and compliance. Users may request access, correction, or deletion of personal data subject to applicable law.',
      },
      {
        heading: '6. Policy Updates',
        body:
          'TaxSafar may revise this policy over time, with updated details posted on the policy page.',
      },
    ],
    contact: ['Email: support@taxsafar.com', 'Phone: +91 90000 00000'],
  },
  {
    slug: 'payment-policy',
    title: 'Payment Policy',
    label: 'Payment Policy',
    sourceUrl: 'https://taxsafar.com/payment-policy.php',
    intro:
      'The payment and refund policy covers vendor commission timelines, refund eligibility, and support for payment-related issues.',
    sections: [
      {
        heading: '1. Vendor Commission Policy',
        points: [
          'Verified commissions are processed within 7 to 15 business days after successful transaction confirmation.',
          'Commission becomes eligible only after payment is confirmed and service delivery is completed.',
          'Commissions are paid to the vendor’s registered bank account.',
          'Disputes should be raised within 7 days of transaction reflection.',
        ],
      },
      {
        heading: '2. Refund Policy',
        points: [
          'Refund requests should be raised within 7 days of payment via email or dashboard.',
          'Refunds may be considered for non-initiated services, duplicate payments, or genuine billing/system errors.',
          'Approved refunds are processed within 7 to 15 business days to the original payment method.',
          'Services already initiated or cases where documents are already submitted may be non-refundable.',
        ],
      },
      {
        heading: '3. Approval and Support',
        body:
          'TaxSafar reserves the right to review refund requests case by case. Users can contact support for commission, payment, or refund assistance.',
      },
    ],
    contact: [
      'Email: support@taxsafar.com',
      'Phone: +91 90000 00000',
      'Support Hours: Monday to Saturday, 10:00 AM to 6:00 PM',
    ],
  },
  {
    slug: 'help-center',
    title: 'Help Center',
    label: 'Help Center',
    sourceUrl: 'https://taxsafar.com/support.php',
    intro:
      'The Help Center answers common questions about account setup, services, vendors, platform status, and technical support.',
    sections: [
      {
        heading: '1. General Support',
        points: [
          'Create an account by signing up with your basic details and verifying your mobile or email.',
          'TaxSafar supports ITR filing, GST returns, registrations, accounting, loan help, and related tax/compliance services.',
          'Users can check service request status from the dashboard under “My Services.”',
        ],
      },
      {
        heading: '2. Services Help',
        points: [
          'ITR filing can be started from the ITR section after login by answering guided questions and uploading documents.',
          'Documents may be updated while the service is still pending or under review.',
          'Priority or fast-track services may be available for additional fees through support.',
        ],
      },
      {
        heading: '3. Vendor Support',
        points: [
          'Vendors can register through the vendor registration flow and are typically verified within 48 hours.',
          'Commission details are available in the vendor dashboard.',
          'Valid commissions are released within 7 to 15 business days after payment verification.',
        ],
      },
      {
        heading: '4. Technical Support',
        points: [
          'Users facing OTP or email issues should check spam or verify profile details.',
          'Website loading issues may improve after clearing cache or switching browsers/incognito mode.',
          'Bugs or errors can be reported to tech@taxsafar.com with a screenshot and short description.',
        ],
      },
      {
        heading: '5. Still Need Help?',
        body:
          'If a user does not find the answer they need, the support team can be contacted directly or through a support ticket.',
      },
    ],
    contact: ['Email: support@taxsafar.com', 'Tech Support: tech@taxsafar.com'],
  },
]
