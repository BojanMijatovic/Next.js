//  Component Home
const Home = () => {
  return (
    <>
      <nav class='navbar'>
        <div class='container'>
          <div class='navbar-brand'>
            <a class='navbar-item' href='../'>
              <h1>Content Manager App</h1>
            </a>
            <span class='navbar-burger burger' data-target='navbarMenu'>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id='navbarMenu' class='navbar-menu'>
            <div class='navbar-end'>
              <div class=' navbar-item'>
                <div class='control has-icons-left'>
                  <input class='input is-rounded' type='email' placeholder='Search' />
                  <span class='icon is-left'>
                    <i class='fa fa-search'></i>
                  </span>
                </div>
              </div>
              <a class='navbar-item is-active is-size-5 has-text-weight-semibold'>Home</a>
              <a class='navbar-item is-size-5 has-text-weight-semibold'>Examples</a>
              <a class='navbar-item is-size-5 has-text-weight-semibold'>Features</a>
            </div>
          </div>
        </div>
      </nav>

      <section class='hero '>
        <div class='hero-body'>
          <div class='container'>
            <section class='section'>
              <div class='columns'>
                <div class='column is-8 is-offset-2'>
                  <div class='content is-medium'>
                    <h2 class='subtitle is-4'>December 25, 2018</h2>
                    <h1 class='title'>Getting Started</h1>
                    <p>
                      This is a starter template for creating a beautiful, customizable blog with minimal effort. You’ll only have
                      to change a few settings and you’re ready to go. As with all Jigsaw sites, configuration settings can be
                      found in config
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <div class='is-divider'></div>

            <section class='section'>
              <div class='columns'>
                <div class='column is-8 is-offset-2'>
                  <div class='content is-medium'>
                    <h2 class='subtitle is-4'>December 25, 2018</h2>
                    <h1 class='title'>Getting Started</h1>
                    <p>
                      This is a starter template for creating a beautiful, customizable blog with minimal effort. You’ll only have
                      to change a few settings and you’re ready to go. As with all Jigsaw sites, configuration settings can be
                      found in config
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* <!-- newsletter --> */}
      <section class='section'>
        <div class='columns'>
          <div class='column is-10 is-offset-1'>
            <div class='container has-text-centered is-fluid'>
              <div class='hero is-light'>
                <div class='hero-body'>
                  <h2 class='title is-4'>Sign up for our newsletter</h2>
                  <div class='column is-6 is-offset-3'>
                    <div class='field has-addons has-addons-centered'>
                      <div class='control is-expanded'>
                        <input class='input ' type='text' placeholder='Email address' />
                      </div>
                      <div class='control'>
                        <a class='button is-info'>Subscribe</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Articles --> */}

      <section class='hero '>
        <div class='hero-body'>
          <div class='container'>
            <section class='section'>
              <div class='columns is-variable is-8'>
                <div class='column is-5 is-offset-1 '>
                  <div class='content is-medium'>
                    <h2 class='subtitle is-5 has-text-grey'>December 23, 2018</h2>
                    <h1 class='title has-text-black is-3'>Custom 404 Pages</h1>
                    <p class='has-text-dark'>
                      This starter template includes a custom 404 Not Found error page, located at /source/404.blade.php. To
                      preview the 404 page, you can visit /404 in your browser. Depending...
                    </p>
                  </div>
                </div>
                <div class='column is-5'>
                  <div class='content is-medium'>
                    <h2 class='subtitle is-5 has-text-grey'>December 25, 2018</h2>
                    <h1 class='title has-text-black is-3'>Fuse Search</h1>
                    <p class='has-text-dark'>
                      To provide fast, local search of your blog, this starter template comes with a pre-built Vue.js component
                      that uses Fuse.js. Fuse.js is a "lightweight fuzzy-search library with no...
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <div class='is-divider'></div>

            <section class='section'>
              <div class='columns is-variable is-8'>
                <div class='column is-5 is-offset-1'>
                  <div class='content is-medium'>
                    <h2 class='subtitle is-5 has-text-grey'>December 25, 2018</h2>
                    <h1 class='title has-text-black is-3'>Getting Started</h1>
                    <p class='has-text-dark'>
                      This is a starter template for creating a beautiful, customizable blog with minimal effort. You’ll only have
                      to change a few settings and you’re ready to go. As with all Jigsaw sites, configuration settings can be
                      found in config
                    </p>
                  </div>
                </div>
                <div class='column is-5'>
                  <div class='content is-medium'>
                    <h2 class='subtitle is-5 has-text-grey'>December 25, 2018</h2>
                    <h1 class='title has-text-black is-3'>Getting Started</h1>
                    <p class='has-text-dark'>
                      This is a starter template for creating a beautiful, customizable blog with minimal effort. You’ll only have
                      to change a few settings and you’re ready to go. As with all Jigsaw sites, configuration settings can be
                      found in config
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <footer class='footer'>
        <div class='content has-text-centered'>
          <p>
            <strong>Bulma - Blog theme</strong> by <a href='https://gonzalojs.com'>Gonzalo Gutierrez</a>. Based on the{' '}
            <a href='http://jigsaw-blog-staging.tighten.co/'>jigsaw-blog</a>. The source code is licensed
            <a href='http://opensource.org/licenses/mit-license.php'>MIT</a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Home;
