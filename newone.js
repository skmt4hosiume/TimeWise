

function getMultipleRoutes(origin, destination, departureTime) {
    const apiKey = process.env.API_KEY;
    const modes = ['driving', 'walking', 'transit']; // 複数の交通手段を指定
  
    modes.forEach(mode => {
      const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&departure_time=${departureTime}&mo 1 de=${mode}&alternatives=true&key=${apiKey}`;
  
      fetch(url)
        .then(response => response.json())
        .then(data => {
          const routes = data.routes;
          console.log(`交通手段: ${mode}`);
  
          routes.forEach(route => {
            const leg = route.legs[0];
            console.log('ルート:', route.overview_polyline.points);
            console.log(`距離: ${leg.distance.text}`);
            console.log(`所要時間: ${leg.duration.text}`);
            console.log('--------------------');
          });
        })
        .catch(error => {
          console.error(`交通手段 ${mode} でエラーが発生しました:`, error);
        });
    });
  }
  
  // 使用例
  const origin = '東京駅';
  const destination = '新宿駅';
  const departureTime = new Date().getTime() / 1000;
  
  getMultipleRoutes(origin, destination, departureTime);

