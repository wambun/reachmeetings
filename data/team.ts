export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  bio?: string;
  image: string;
  linkedIn?: string;
}

export const team: TeamMember[] = [
  {
    slug: 'lauren-dunnaway',
    name: 'Lauren Dunnaway',
    role: 'Co-Founder, President',
    image: '/static/images/team/lauren-dunnaway.jpg',
    bio: 'Lauren brings extensive experience in event management and a passion for creating unforgettable experiences.',
  },
  {
    slug: 'gretchen-mitchell',
    name: 'Gretchen Mitchell',
    role: 'Co-Founder, CEO',
    image: '/static/images/team/gretchen-mitchell.jpg',
    bio: 'Gretchen is a meetings industry veteran with deep experience in global meetings management.',
  },
  {
    slug: 'deedee-bailey',
    name: 'DeeDee Bailey',
    role: 'Senior Planner',
    image: '/static/images/team/deedee-bailey.jpg',
  },
  {
    slug: 'nora-bakke',
    name: 'Nora Bakke',
    role: 'Senior Planner',
    image: '/static/images/team/nora-bakke.jpg',
  },
  {
    slug: 'traci-colangelo',
    name: 'Traci Colangelo',
    role: 'Senior Sourcing Specialist & Travel Manager',
    image: '/static/images/team/traci-colangelo.jpg',
  },
  {
    slug: 'taylor-brown',
    name: 'Taylor Brown',
    role: 'Meeting Planner',
    image: '/static/images/team/taylor-brown.jpg',
  },
  {
    slug: 'olga-carroll',
    name: 'Olga Carroll',
    role: 'Sourcing Manager',
    image: '/static/images/team/olga-carroll.jpg',
  },
  {
    slug: 'krista-gibson',
    name: 'Krista Gibson',
    role: 'Sourcing Manager',
    image: '/static/images/team/krista-gibson.jpg',
  },
  {
    slug: 'ginger-murchison',
    name: 'Ginger Murchison',
    role: 'Senior Planner',
    image: '/static/images/team/ginger-murchison.jpg',
  },
  {
    slug: 'ashley-hellstern',
    name: 'Ashley Hellstern',
    role: 'Travel Agent & Disney Specialist',
    image: '/static/images/team/ashley-hellstern.jpg',
  },
  {
    slug: 'nathalie-proche',
    name: "Nathalie Proche'",
    role: 'Travel Advisor',
    image: '/static/images/team/nathalie-proche.jpg',
  },
];

export function getTeamMemberBySlug(slug: string): TeamMember | undefined {
  return team.find((member) => member.slug === slug);
}
