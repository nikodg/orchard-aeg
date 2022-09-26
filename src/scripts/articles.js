import articlesTemplate from '../pages/partials/articles.hbs';

export default () => {
  const div = document.getElementById('articles');

  div.innerHTML = articlesTemplate({
    articles: [
      {
        title: 'Summer Lunch Menu By Mark Best',
        shortText: 'AEG ambassador Mark Best\'s summer eats are guaranteed to help you make the most of the warmer weather and entertaining at home.',
        imgSrc: '/assets/component-02/Image-01@2x.jpg',
        imgSrcMobile: '/assets/component-02/Image-01.jpg',
        imgAlt: 'Summer Lunch',
      },
      {
        title: 'A Traditional Christmas Eve, Mark Best Style',
        shortText: 'One of Australia\'s best chefs and AEG ambassador, Mark Best, shares his favourite Christmas Eve menu which is sure to impress your guests.',
        imgSrc: '/assets/component-02/Image-02@2x.jpg',
        imgSrcMobile: '/assets/component-02/Image-02.jpg',
        imgAlt: 'Christmas Eve',
      },
      {
        title: 'Taking Taste Further',
        shortText: 'This exclusive cookbook gives you all the know-how you need. We\'ve designed it to make sure you get the most out of our products - and the best out of your food.',
        imgSrc: '/assets/component-02/Image-03@2x.jpg',
        imgSrcMobile: '/assets/component-02/Image-03.jpg',
        imgAlt: 'Taste Further',
      },
    ],
  });
}