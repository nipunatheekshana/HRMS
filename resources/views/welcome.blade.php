<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Login</title>
    <link
      href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700|Lato:400,100,300,700,900"
      rel="stylesheet"
      type="text/css"
    />
    <link rel="stylesheet" href="{{asset("CSS/animation.css")}}"/>
    <link rel="stylesheet" href="{{asset("CSS/style.css")}}"/>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
  </head>
  <body>
    <div class="container">
      <div class="top">
        <h1 id="title" class="hidden">
          <span id="logo">Samadhi Funeral Aid Society</span>
        </h1>
      </div>
      <div class="login-box animated fadeInUp">
        <div class="box-header">
          <h2>Log In</h2>
        </div>
        <form id="login-form" action="{{route('login')}}" method="post">
          <div class="input-container">
            <label for="username">Username</label>
            <input type="text" id="username" name="username" />
          </div>
          <div class="input-container">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit">Log In</button>
        </form>
        <div id="error-message" class="error-message"></div>
      </div>
    </div>
    <script src="./Asset/js/script.js"></script>
  </body>
</html>
