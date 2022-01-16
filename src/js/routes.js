
import HomePage from '../pages/home.f7';
import WeekPage from '../pages/week.f7';

var routes = [
  {
    path: '/',
    async: function ({ router, to, resolve }) {

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = to.params.userId;

      navigator.geolocation.getCurrentPosition((success) => {

        let { latitude, longitude } = success.coords;

        app.request.get('https://api.openweathermap.org/data/2.5/onecall?lat=' + latitude + '&lon=' + longitude + '&exclude=hourly,minutely&units=metric&appid=0f8cc38152a549b42988792a53581370')

          .then(function (res) {
            console.log('Load was performed');

            // Hide Preloader
            app.preloader.hide();

            // Resolve route to load page
            resolve(
              {
                component: HomePage,
              },
              {
                props: {
                  weatherData: JSON.parse(res.data),
                }
              }
            );
            //
          }).catch(function (err) {
            console.log(err.xhr)
            console.log(err.status)
            console.log(err.message)
          });
      });
    },
  },
  {
    path: '/week/',
    async: function ({ router, to, resolve }) {

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = to.params.userId;

      navigator.geolocation.getCurrentPosition((success) => {

        let { latitude, longitude } = success.coords;

        app.request.get('https://api.openweathermap.org/data/2.5/onecall?lat=' + latitude + '&lon=' + longitude + '&exclude=hourly,minutely&units=metric&appid=0f8cc38152a549b42988792a53581370')

          .then(function (res) {
            console.log('Load was performed');

            // Hide Preloader
            app.preloader.hide();

            // Resolve route to load page
            resolve(
              {
                component: WeekPage,
              },
              {
                props: {
                  weatherData: JSON.parse(res.data),
                }
              }
            );
            //
          }).catch(function (err) {
            console.log(err.xhr)
            console.log(err.status)
            console.log(err.message)
          });
      });
    },
  }
];

export default routes;