import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (movie) => `
  <h2 class="movie__title">${movie.title}</h2>
  <img class="movie__poster" src="${CONFIG.BASE_IMAGE_URL + movie.poster_path}" alt="${movie.title}" />
  <div class="movie__info">
  <h3>Information</h3>
    <h4>Tagline</h4>
    <p>${movie.tagline}</p>
    <h4>Release Date</h4>
    <p>${movie.release_date}</p>
    <h4>Duration</h4>
    <p>${movie.runtime} minutes</p>
    <h4>Rating</h4>
    <p>${movie.vote_average}</p>
  </div>
  <div class="movie__overview">
    <h3>Overview</h3>
    <p>${movie.overview}</p>
  </div>
`;

const createRestaurantTemplate = (restaurant) => `
<div class="movie-item">
<div class="movie-item__header">
  <img class="movie-item__header__poster" alt="${restaurant.name}"
       src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
  <div class="movie-item__header__rating">
    <p>⭐️<span class="movie-item__header__rating__score">${restaurant.rating}</span></p>
  </div>
</div>
<div class="movie-item__content">
  <h3><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
  <p>${restaurant.description}</p>
</div>
</div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};