export interface NavItem {
  name: string;
  href: string;
  description?: string;
}

export interface NavGroup {
  name: string;
  href?: string;
  items?: NavItem[];
}

export const mainNavigation: NavGroup[] = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Who We Are',
    href: '/about',
    items: [
      {
        name: 'Our Story',
        href: '/about#story',
        description: 'Learn about our journey and mission',
      },
      {
        name: 'Our Team',
        href: '/about#team',
        description: 'Meet the experts behind REACH',
      },
      {
        name: 'Our Clients',
        href: '/about#clients',
        description: 'Companies we proudly serve',
      },
    ],
  },
  {
    name: 'What We Do',
    href: '/services',
    items: [
      {
        name: 'Meeting & Event Management',
        href: '/services/meeting-management',
        description: 'End-to-end event planning and execution',
      },
      {
        name: 'Venue Sourcing',
        href: '/services/venue-sourcing',
        description: 'Expert site selection and negotiation',
      },
      {
        name: 'Incentive Programs',
        href: '/services/incentive-programs',
        description: 'Rewarding experiences for your team',
      },
      {
        name: 'Executive Retreats',
        href: '/services/executive-retreats',
        description: 'Premium C-suite event experiences',
      },
      {
        name: 'Travel Agency',
        href: '/services/travel-agency',
        description: 'Corporate and leisure travel services',
      },
      {
        name: 'View All Services',
        href: '/services',
        description: 'Explore our complete service offering',
      },
    ],
  },
  {
    name: 'How We Work',
    href: '/how-we-work',
  },
  {
    name: 'Blog',
    href: '/blog',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
];

export const footerNavigation = {
  services: [
    { name: 'Meeting Management', href: '/services/meeting-management' },
    { name: 'Venue Sourcing', href: '/services/venue-sourcing' },
    { name: 'Incentive Programs', href: '/services/incentive-programs' },
    { name: 'Executive Retreats', href: '/services/executive-retreats' },
    { name: 'Travel Agency', href: '/services/travel-agency' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about#team' },
    { name: 'How We Work', href: '/how-we-work' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/legal/privacy' },
    { name: 'Terms of Service', href: '/legal/terms' },
  ],
};
