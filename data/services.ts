import {
  CalendarDays,
  Building2,
  Trophy,
  Users,
  Microscope,
  Crown,
  TrendingUp,
  Plane,
  Heart,
  LucideIcon,
} from 'lucide-react';

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: LucideIcon;
  features: string[];
  image?: string;
}

export const services: Service[] = [
  {
    slug: 'meeting-management',
    title: 'Full Meeting & Event Management',
    shortDescription:
      'End-to-end event planning with seasoned professionals who conceive, create, design, and deliver events to your highest level of satisfaction.',
    fullDescription:
      'Our team includes seasoned event planners that can conceive, create, design, and deliver events to your highest level of satisfaction. From initial concept to final execution, we handle every detail with precision and care.',
    icon: CalendarDays,
    features: [
      'Complete event concept development',
      'Vendor coordination and management',
      'On-site execution and support',
      'Budget management and tracking',
      'Post-event analysis and reporting',
    ],
  },
  {
    slug: 'venue-sourcing',
    title: 'Venue Sourcing',
    shortDescription:
      'Expert site knowledge and contract negotiation at no cost to our clients.',
    fullDescription:
      'We provide expert site knowledge and contract negotiation at no cost to our clients. Venue Sourcing involves the detailed process of gathering and analyzing available venue options for your upcoming meeting or event.',
    icon: Building2,
    features: [
      'Comprehensive venue research',
      'Site inspections and evaluations',
      'Contract negotiation',
      'Cost analysis and comparison',
      'Vendor relationship management',
    ],
  },
  {
    slug: 'incentive-programs',
    title: 'Incentive Programs',
    shortDescription:
      'Customized incentive trips designed by celebrated leaders in the Incentive Travel industry.',
    fullDescription:
      'Our team includes celebrated leaders in the Incentive Travel industry. We plan customized incentive trips to make them compelling and extremely rewarding to the participants.',
    icon: Trophy,
    features: [
      'Custom trip design and planning',
      'Participant management',
      'Reward fulfillment coordination',
      'ROI tracking and analysis',
      'Memorable experience creation',
    ],
  },
  {
    slug: 'event-staffing',
    title: 'Event Staffing',
    shortDescription:
      'Professional outsourced onsite teams that serve as an extension of your staff.',
    fullDescription:
      'Outsourced onsite teams should always be an extension of your staff. We provide professional, trained event staff who represent your brand with excellence.',
    icon: Users,
    features: [
      'Professional staff sourcing',
      'Comprehensive training',
      'On-site coordination',
      'Quality assurance',
      'Flexible staffing solutions',
    ],
  },
  {
    slug: 'life-science-meetings',
    title: 'Life Science Meetings',
    shortDescription:
      'Specialized expertise in healthcare and life science meeting management with compliance focus.',
    fullDescription:
      'Strengthen talent, standardize methodologies, increase confidence, accomplish goals, achieve a higher level of work. Our expertise in life science meetings ensures compliance and excellence.',
    icon: Microscope,
    features: [
      'Compliance expertise',
      'HCP meeting management',
      'Documentation support',
      'Regulatory adherence',
      'Scientific content coordination',
    ],
  },
  {
    slug: 'executive-retreats',
    title: 'Executive Retreats',
    shortDescription:
      'Premium executive experiences leveraging over 20 years of C-suite consulting expertise.',
    fullDescription:
      'Leveraging over 20 years of C-suite consulting experience, we understand the importance of executive interactions. We consult with our clients to design and deliver the most productive and enjoyable executive retreats imaginable.',
    icon: Crown,
    features: [
      'C-suite event expertise',
      'Strategic planning facilitation',
      'Premium venue curation',
      'VIP management',
      'Confidential handling',
    ],
  },
  {
    slug: 'investor-meetings',
    title: 'Investor Meetings',
    shortDescription:
      'Trusted planning for investor meetings with incomparable expertise for global companies.',
    fullDescription:
      'Our expertise is incomparable as the trusted planner for many of the world\'s foremost companies, for a myriad of meeting types.',
    icon: TrendingUp,
    features: [
      'Roadshow coordination',
      'Presentation setup',
      'Logistics management',
      'Confidentiality protocols',
      'Global reach capability',
    ],
  },
  {
    slug: 'travel-agency',
    title: 'Full Service Travel Agency',
    shortDescription:
      'White glove leisure and corporate travel services with major affiliations worldwide.',
    fullDescription:
      'White glove leisure and corporate travel services with affiliations to major hotel operators, global airlines, Disney, and cruise operators.',
    icon: Plane,
    features: [
      'Corporate travel management',
      'Leisure travel planning',
      'Group bookings',
      'Disney vacation specialist',
      'Cruise coordination',
    ],
  },
  {
    slug: 'wedding-venue-sourcing',
    title: 'Wedding & Social Venue Sourcing',
    shortDescription:
      'Complimentary service for sourcing and negotiating group hotel blocks for weddings and social events.',
    fullDescription:
      'We have a deep expertise in sourcing group hotel blocks. Our complimentary service analyzes and negotiates on your behalf to provide the most preferable venues to our clients.',
    icon: Heart,
    features: [
      'Hotel block negotiation',
      'Venue comparison analysis',
      'Contract support',
      'Group coordination',
      'Budget optimization',
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
