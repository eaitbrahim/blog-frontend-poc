import { Article } from './article';

export const ARTICLES: Article[] = [
  {
    id: 1,
    title: 'My first article',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, vero in nemo perferendis sed iure mollitia, quidem alias eveniet laborum laudantium impedit voluptatem ab architecto, quia corrupti debitis culpa consequuntur.',
    description: 'This is my first article! It\'s great! Please read it',
    key: 'my-first-article',
    date: new Date(),
    imageUrl: 'http://angular.io/assets/images/logos/angular/angular.png'
  },
  {
    id: 2,
    title: 'My second article',
    content: '<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur beatae blanditiis aliquid iusto cumque recusandae exercitationem tempora maxime labore dolore, mollitia eius quibusdam amet ab magnam magni. Eligendi, sunt in?</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur beatae blanditiis aliquid iusto cumque recusandae exercitationem tempora maxime labore dolore, mollitia eius quibusdam amet ab magnam magni. Eligendi, sunt in?</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur beatae blanditiis aliquid iusto cumque recusandae exercitationem tempora maxime labore dolore, mollitia eius quibusdam amet ab magnam magni. Eligendi, sunt in?</p>',
    description: 'Also a great article',
    key: 'the-second-article',
    date: new Date(),
    imageUrl: 'http://angular.io/assets/images/logos/angular/angular_solidBlack.png'
  }
];
