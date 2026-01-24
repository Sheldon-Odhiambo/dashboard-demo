
export enum UserRole {
  STUDENT = 'STUDENT',
  ORGANIZATION = 'ORGANIZATION'
}

export interface User {
  id: string;
  name: string;
  avatar: string;
  role: UserRole;
  headline: string;
  location: string;
  verified: boolean;
  following: number;
  followers: number;
}

export interface StudentProfile extends User {
  role: UserRole.STUDENT;
  completeness: number;
  summary: string;
  skills: string[];
  education: string;
  interests: string[];
  availability: {
    from: string;
    to: string;
    hoursPerWeek: number;
    mode: 'Remote' | 'Onsite' | 'Hybrid';
    notes: string;
  };
}

export interface OrgProfile extends User {
  role: UserRole.ORGANIZATION;
  industry: string;
  mission: string;
  website: string;
  workModes: string[];
}

export interface Post {
  id: string;
  authorId: string;
  authorName: string;
  authorAvatar: string;
  authorRole: UserRole;
  authorVerified: boolean;
  type: string;
  title: string;
  content: string;
  tags: string[];
  likes: number;
  comments: Comment[];
  timestamp: string;
  isPublic: boolean;
}

export interface Comment {
  id: string;
  userId: string;
  userName: string;
  content: string;
  timestamp: string;
}

export interface Opportunity {
  id: string;
  orgName: string;
  role: string;
  type: 'Internship' | 'Attachment' | 'Volunteer' | 'Apprenticeship';
  matchScore: number;
  timeline: string;
  hoursPerWeek: number;
  fit: 'Fits' | 'Partial' | 'No Fit';
  gaps?: string[];
}
