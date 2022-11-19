   Route::get('pop', function () {
        $ch = curl_init();
      // Simple temp service which returns your IP
       $url = 'http://ip-api.com/json';
       $proxy = 'socks5://37.221.193.221:26685';
       curl_setopt($ch, CURLOPT_URL, $url);
       curl_setopt($ch, CURLOPT_PROXY, $proxy);
       curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
       curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 
       $curl_scraped_page = curl_exec($ch);
       echo $curl_scraped_page;
       curl_close($ch);
      
    });
