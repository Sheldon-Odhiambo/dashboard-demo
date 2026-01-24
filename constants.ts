
import { Post, UserRole, Opportunity } from './types';

export const MOCK_POSTS: Post[] = [
  {
    id: '1',
    authorId: 'a1',
    authorName: 'Innovate Labs',
    authorAvatar: 'https://picsum.photos/seed/lab/100',
    authorRole: UserRole.ORGANIZATION,
    authorVerified: true,
    type: 'Update',
    title: 'Future of Spatial UI - Breakthrough Update',
    content: 'Our R&D team just finalized the new gesture-control protocol for the upcoming XR headset. We are looking for talented UX interns who are passionate about non-traditional interfaces. Check our talent call!',
    tags: ['XR', 'UIUX', 'Innovation', 'FutureTech'],
    likes: 124,
    comments: [
      { id: 'c1', userId: 'u1', userName: 'Sarah Chen', content: 'This looks incredible! Would love to see more about the research process.', timestamp: '2h ago' },
      { id: 'c2', userId: 'u2', userName: 'Mike Ross', content: 'Gesture controls are the future. Amazing work team.', timestamp: '1h ago' }
    ],
    timestamp: '2h ago',
    isPublic: true
  },
  {
    id: '2',
    authorId: 'a2',
    authorName: 'Alex Rivers',
    authorAvatar: 'https://picsum.photos/seed/alex/100',
    authorRole: UserRole.STUDENT,
    authorVerified: true,
    type: 'Showcase',
    title: 'Project Alpha: Redesigning Community Spaces',
    content: 'Just wrapped up my latest project focusing on how digital twins can improve physical community centers. Used a mix of React, ThreeJS, and massive amounts of user feedback data.',
    tags: ['Portfolio', 'React', 'ThreeJS', 'UrbanDesign'],
    likes: 89,
    comments: [],
    timestamp: '5h ago',
    isPublic: true
  },
  {
    id: '3',
    authorId: 'a3',
    authorName: 'Meta Design Lab',
    authorAvatar: 'https://picsum.photos/seed/meta/100',
    authorRole: UserRole.ORGANIZATION,
    authorVerified: true,
    type: 'Talent Call',
    title: 'Looking for 3D Artist Interns (Fall 2024)',
    content: 'We are expanding our avatar customization team. Seeking students with proficiency in Blender and Substance Painter. Remote/Hybrid options available.',
    tags: ['Hiring', '3D', 'Blender', 'Internship'],
    likes: 245,
    comments: [
      { id: 'c3', userId: 'u3', userName: 'Jordan Lee', content: 'Applied! Hoping for the best.', timestamp: '1h ago' }
    ],
    timestamp: '1d ago',
    isPublic: true
  }
];

export const MOCK_OPPORTUNITIES: Opportunity[] = [
  {
    id: 'o1',
    orgName: 'Meta Design Lab',
    role: 'Product Design Intern',
    type: 'Internship',
    matchScore: 98,
    timeline: 'Sept - Dec',
    hoursPerWeek: 20,
    fit: 'Fits',
    gaps: ['Micro-interactions']
  },
  {
    id: 'o2',
    orgName: 'Future Tech Co',
    role: 'Frontend Apprentice',
    type: 'Apprenticeship',
    matchScore: 82,
    timeline: 'Oct - Jan',
    hoursPerWeek: 15,
    fit: 'Partial',
    gaps: ['State Management']
  }
];
