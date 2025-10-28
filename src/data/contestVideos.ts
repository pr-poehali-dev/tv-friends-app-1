export interface ContestVideo {
  id: number;
  title: string;
  thumbnail: string;
  duration: string;
  author: {
    firstName: string;
    lastName: string;
    patronymic: string;
    age: number;
    city: string;
  };
  likes: number;
  views: number;
  isLeader: boolean;
  addedDate?: string;
}

export const contestVideos: ContestVideo[] = [
  {
    id: 1,
    title: 'Завтрак в кафе у моря',
    thumbnail: 'https://cdn.poehali.dev/projects/3478e400-ff84-4126-9411-8f9e5adbc820/files/882ccc88-2d7b-43fc-a77a-df961c88135e.jpg',
    duration: '2:15',
    author: {
      firstName: 'Анна',
      lastName: 'Петрова',
      patronymic: 'Сергеевна',
      age: 28,
      city: 'Санкт-Петербург'
    },
    likes: 243,
    views: 1200,
    isLeader: false,
    addedDate: '28 октября 2025'
  },
  {
    id: 2,
    title: 'Прогулка по парку Горького',
    thumbnail: 'https://cdn.poehali.dev/projects/3478e400-ff84-4126-9411-8f9e5adbc820/files/d3b93a43-e25d-4ffa-bd01-e0fec3eb1f89.jpg',
    duration: '3:42',
    author: {
      firstName: 'Дмитрий',
      lastName: 'Соколов',
      patronymic: 'Александрович',
      age: 35,
      city: 'Москва'
    },
    likes: 187,
    views: 890,
    isLeader: false,
    addedDate: '27 октября 2025'
  },
  {
    id: 3,
    title: 'Уличная еда в Казани',
    thumbnail: 'https://cdn.poehali.dev/projects/3478e400-ff84-4126-9411-8f9e5adbc820/files/2a8f3e9a-faad-4ad3-a12f-c98f876f6ca6.jpg',
    duration: '1:58',
    author: {
      firstName: 'Елена',
      lastName: 'Иванова',
      patronymic: 'Викторовна',
      age: 31,
      city: 'Казань'
    },
    likes: 521,
    views: 2800,
    isLeader: true,
    addedDate: '26 октября 2025'
  }
];
