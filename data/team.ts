export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  credentials?: string;
  bio?: string;
  image: string;
  linkedIn?: string;
  email?: string;
}

export const team: TeamMember[] = [
  {
    slug: 'lauren-dunnaway',
    name: 'Lauren Dunnaway',
    role: 'Co-Founder, President & Chief Sales Officer',
    credentials: 'CITP, HMCC',
    image: '/images/team/lauren-dunnaway.png',
    linkedIn: 'https://www.linkedin.com/in/laurendunnaway',
    email: 'lauren@reachmeetings.com',
    bio: `Lauren is a twenty year meetings & events industry veteran, who founded REACH Meetings & Events in 2020 and serves as President & Chief Sales Officer for the growing organization with a consulting bent on events management.

Lauren has served as an Associate Professor at Collin College in the D/FW area where she taught the Introduction to Meetings & Events and Special Event Design courses and has held volunteer positions within the Meeting Professionals International D/FW Chapter as a Board Member from 2009-2014 and the Society of Incentive Travel Executives from 2017-2021.

She received the honor of being recognized as Rising Star for MPI DFW in 2010 and subsequently served the MPI chapter as President from 2012-2013. As a career high honor, the MPI DFW Supplier Sales Blitz, which Lauren created, won a Global Rise Award for Marketplace Excellence in 2018. Lauren was recognized as one of Connect Marketplace's Top 40 Under 40 in the world in 2019. Lauren served as the SITE TX President in 2020, and under her leadership the chapter was recognized with the Global Chapter of The Year, Excellence in Education and Excellence in Membership awards.`,
  },
  {
    slug: 'gretchen-mitchell',
    name: 'Gretchen Mitchell',
    role: 'Co-Founder & CEO',
    image: '/images/team/gretchen-mitchell.png',
    linkedIn: 'https://www.linkedin.com/in/gretchenmitchell',
    email: 'gretchen@reachmeetings.com',
    bio: `Gretchen is fueled by new experiences. She has paid her dues as a road warrior having flown a million miles by the young age of 27. She is passionate about bringing people together to solve problems, learn, and spread joy.

She specializes in bringing strategic thinking and analytical skills to large scale program management. Her three areas of expertise are event management, corporate talent development strategy, and global business executive consulting. She is certified by Cvent in both Venue Sourcing and Event Management.

Gretchen holds an MBA from Kenan-Flagler Business School at University of North Carolina Chapel Hill where she was the recipient of the Richard H. Jenrette Fellowship for analytic excellence and upon graduation received the teamwork award. She also holds an undergraduate degree in Finance from Texas A&M University.

Past and current community service roles include Boys & Girls Clubs of Austin board member, the Eanes ISD Campus Leadership Team, Eanes Education Foundation fundraising, and the Lake Austin Chapter of the National Charity League. She lives in Austin, Texas with her husband and three children.`,
  },
  {
    slug: 'deedee-bailey',
    name: 'DeeDee Bailey',
    role: 'Senior Planner',
    image: '/images/team/deedee-bailey.jpg',
    bio: 'DeeDee brings years of experience in event planning and coordination, ensuring every detail is executed flawlessly.',
  },
  {
    slug: 'nora-bakke',
    name: 'Nora Bakke',
    role: 'Senior Planner',
    image: '/images/team/nora-bakke.jpg',
    bio: 'Nora is a dedicated event professional with a keen eye for detail and a passion for creating memorable experiences.',
  },
  {
    slug: 'traci-colangelo',
    name: 'Traci Colangelo',
    role: 'Senior Sourcing Specialist & Travel Manager',
    image: '/images/team/traci-colangelo.jpg',
    bio: 'Traci combines expertise in venue sourcing with comprehensive travel management to deliver seamless event experiences.',
  },
  {
    slug: 'taylor-brown',
    name: 'Taylor Brown',
    role: 'Meeting Planner',
    image: '/images/team/taylor-brown.png',
    bio: 'Taylor is a skilled meeting planner who excels at coordinating complex events and managing logistics.',
  },
  {
    slug: 'olga-carroll',
    name: 'Olga Carroll',
    role: 'Sourcing Manager',
    image: '/images/team/olga-carroll.png',
    bio: 'Olga leverages her extensive network and industry knowledge to source the perfect venues for every event.',
  },
  {
    slug: 'krista-gibson',
    name: 'Krista Gibson',
    role: 'Sourcing Manager',
    image: '/images/team/krista-gibson.png',
    bio: 'Krista specializes in finding ideal venues and negotiating contracts that maximize value for clients.',
  },
  {
    slug: 'ginger-murchison',
    name: 'Ginger Murchison',
    role: 'Senior Planner',
    image: '/images/team/ginger-murchison.png',
    bio: 'Ginger is a seasoned event planner with expertise in corporate meetings and executive retreats.',
  },
  {
    slug: 'ashley-hellstern',
    name: 'Ashley Hellstern',
    role: 'Travel Agent & Disney Specialist',
    image: '/images/team/ashley-hellstern.png',
    bio: 'Ashley is a dedicated travel professional specializing in Disney vacations and group travel experiences.',
  },
  {
    slug: 'nathalie-proche',
    name: "Nathalie Proche'",
    role: 'Travel Advisor',
    image: '/images/team/nathalie-proche.png',
    bio: 'Nathalie provides personalized travel advisory services, crafting memorable journeys for discerning clients.',
  },
];

export function getTeamMemberBySlug(slug: string): TeamMember | undefined {
  return team.find((member) => member.slug === slug);
}
