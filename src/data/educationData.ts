import type { Education } from '../types';

export const EDUCATION_DATA: Education[] = [
  {
    degree: 'M.Sc. in Computer Science',
    institution: 'Tech Institute of Technology',
    period: '2022 - 2024',
    description: 'Specialized in Distributed Systems, Cloud Architecture, and Advanced Event-Driven Pipelines.',
    achievements: [
      'Research Thesis on High-Throughput Event Streaming over Kafka Clusters',
      'Graduate Assistant for Systems Programming and Network Protocols classes',
      'Graduated with a cumulative GPA of 3.92/4.00'
    ]
  },
  {
    degree: 'B.Sc. in Computer Science & Engineering',
    institution: 'State Engineering University',
    period: '2018 - 2022',
    description: 'Focused heavily on fundamental Data Structures & Algorithms, OS Kernels, and Database Management.',
    achievements: [
      'Received Capstone Project Award for a local-first offline syncing engine',
      'Rewrote the university administrative portal REST APIs, reducing lookup times by 40%',
      'Graduated Magna Cum Laude'
    ]
  }
];
