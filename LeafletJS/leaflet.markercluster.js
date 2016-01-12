



<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled is-u2f-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>Leaflet.markercluster/leaflet.markercluster.js at master · Leaflet/Leaflet.markercluster</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="Leaflet/Leaflet.markercluster" name="twitter:title" /><meta content="Leaflet.markercluster - Marker Clustering plugin for Leaflet" name="twitter:description" /><meta content="https://avatars0.githubusercontent.com/u/2854298?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars0.githubusercontent.com/u/2854298?v=3&amp;s=400" property="og:image" /><meta content="Leaflet/Leaflet.markercluster" property="og:title" /><meta content="https://github.com/Leaflet/Leaflet.markercluster" property="og:url" /><meta content="Leaflet.markercluster - Marker Clustering plugin for Leaflet" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="web-socket" href="wss://live.github.com/_sockets/MTYxNzQzNTU6MzUzMTExYzJkNzVmMmQ5MDY4MjRiNDI0NGU2MmU5MGU6YWZiYzlkYmJhZjlmNDJkNDdmY2VmMThkOGE5Y2RkYjg1ZDEyMWU1Yzg5NDJkZjY5MmI2ZTRhNjA1YjNiNjNkMQ==--f4fa04ca0c085589a027c4d632ba751858792fe5">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="43B93111:626C:72E920D:56946F0B" name="octolytics-dimension-request_id" /><meta content="16174355" name="octolytics-actor-id" /><meta content="blacktygeo" name="octolytics-actor-login" /><meta content="dbd8ef085d6bf0add20b08bfb533c7bbdc0f8ddea2e7217b846b4722e01677a1" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />
<meta content="Rails, view, blob#show" data-pjax-transient="true" name="analytics-event" />


  <meta class="js-ga-set" name="dimension1" content="Logged In">



        <meta name="hostname" content="github.com">
    <meta name="user-login" content="blacktygeo">

        <meta name="expected-hostname" content="github.com">

      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta content="484c12d754b5b595b268d5bbf654e27cc476a68f" name="form-nonce" />

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-2cd8e7b7c650541e94a142c9c10fb231b81455e1777c62510eb9b3402cc220b3.css" integrity="sha256-LNjnt8ZQVB6UoULJwQ+yMbgUVeF3fGJRDrmzQCzCILM=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github2-59f5919583cf2e70e57d04603053adbf07b93660733ba65df25454e92d209fe1.css" integrity="sha256-WfWRlYPPLnDlfQRgMFOtvwe5NmBzO6Zd8lRU6S0gn+E=" media="all" rel="stylesheet" />
    
    


    <meta http-equiv="x-pjax-version" content="056c86881be23af5cd8a809fecb37d38">

      
  <meta name="description" content="Leaflet.markercluster - Marker Clustering plugin for Leaflet">
  <meta name="go-import" content="github.com/Leaflet/Leaflet.markercluster git https://github.com/Leaflet/Leaflet.markercluster.git">

  <meta content="2854298" name="octolytics-dimension-user_id" /><meta content="Leaflet" name="octolytics-dimension-user_login" /><meta content="4983184" name="octolytics-dimension-repository_id" /><meta content="Leaflet/Leaflet.markercluster" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="4983184" name="octolytics-dimension-repository_network_root_id" /><meta content="Leaflet/Leaflet.markercluster" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/Leaflet/Leaflet.markercluster/commits/master.atom" rel="alternate" title="Recent Commits to Leaflet.markercluster:master" type="application/atom+xml">

  </head>


  <body class="logged_in   env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



      <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <span aria-hidden="true" class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/Leaflet/Leaflet.markercluster/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/Leaflet/Leaflet.markercluster/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <label class="js-chromeless-input-container form-control">
    <div class="scope-badge">This repository</div>
    <input type="text"
      class="js-site-search-focus js-site-search-field is-clearable chromeless-input"
      data-hotkey="s"
      name="q"
      placeholder="Search"
      aria-label="Search this repository"
      data-global-scope-placeholder="Search GitHub"
      data-repo-scope-placeholder="Search"
      tabindex="1"
      autocapitalize="off">
  </label>
</form>
      </div>

      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item">
      <span class="js-socket-channel js-updatable-content"
        data-channel="notification-changed:blacktygeo"
        data-url="/notifications/header">
      <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
          <span class="mail-status all-read"></span>
          <span aria-hidden="true" class="octicon octicon-bell"></span>
</a>  </span>

  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new…"
       data-ga-click="Header, create new, icon:add">
      <span aria-hidden="true" class="octicon octicon-plus left"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>


  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="Leaflet/Leaflet.markercluster">This repository</span>
  </div>
    <a class="dropdown-item" href="/Leaflet/Leaflet.markercluster/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-sw js-menu-target" href="/blacktygeo"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@blacktygeo" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/16174355?v=3&amp;s=40" width="20" />
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu  dropdown-menu-sw">
        <div class=" dropdown-header header-nav-current-user css-truncate">
            Signed in as <strong class="css-truncate-target">blacktygeo</strong>

        </div>


        <div class="dropdown-divider"></div>

          <a class="dropdown-item" href="/blacktygeo" data-ga-click="Header, go to profile, text:your profile">
            Your profile
          </a>
        <a class="dropdown-item" href="/stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
        <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
          Explore
        </a>
          <a class="dropdown-item" href="/integrations" data-ga-click="Header, go to integrations, text:integrations">
            Integrations
          </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>

          <div class="dropdown-divider"></div>

          <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
            Settings
          </a>

          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/logout" class="logout-form" data-form-nonce="484c12d754b5b595b268d5bbf654e27cc476a68f" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="qSIwNMkCmJ914K1h3pRyLUo5uXAHJTNHiAh91ZToTZ3wKyquCi9O4JmEQ8cCmfYyUe9imM4zrctPem6e1F43hg==" /></div>
            <button class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
              Sign out
            </button>
</form>
      </div>
    </div>
  </li>
</ul>


    
  </div>
</div>

      

      


    <div id="start-of-content" class="accessibility-aid"></div>

      <div id="js-flash-container">
</div>


    <div role="main" class="main-content">
        <div itemscope itemtype="http://schema.org/WebPage">
    <div id="js-repo-pjax-container" class="context-loader-container js-repo-nav-next" data-pjax-container>
      
<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-form-nonce="484c12d754b5b595b268d5bbf654e27cc476a68f" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="eDkCj28mFXlSbZaMmvNZAzZKl8z14yT/e8e5rDDL20LGW51/5UJJ9wdOPtDZE5jHiliIDJl6Gvg8TPonFNDjXg==" /></div>      <input id="repository_id" name="repository_id" type="hidden" value="4983184" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/Leaflet/Leaflet.markercluster/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
            data-ga-click="Repository, click Watch settings, action:blob#show">
            <span class="js-select-button">
              <span aria-hidden="true" class="octicon octicon-eye"></span>
              Watch
            </span>
          </a>
          <a class="social-count js-social-count" href="/Leaflet/Leaflet.markercluster/watchers">
            110
          </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header">
              <span aria-label="Close" class="octicon octicon-x js-menu-close" role="button"></span>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
                  <div class="select-menu-item-text">
                    <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <span aria-hidden="true" class="octicon octicon-eye"></span>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
                  <div class="select-menu-item-text">
                    <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <span aria-hidden="true" class="octicon octicon-eye"></span>
                      Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
                  <div class="select-menu-item-text">
                    <input id="do_ignore" name="do" type="radio" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <span aria-hidden="true" class="octicon octicon-mute"></span>
                      Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/Leaflet/Leaflet.markercluster/unstar" class="js-toggler-form starred js-unstar-button" data-form-nonce="484c12d754b5b595b268d5bbf654e27cc476a68f" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="BOz+koZttkgpYbqK93xqEaRUj8J5uundkrhEVf/VcMruIG1m2OQvVH3WxXA2NTwlEzXkBCsCm7lFWjRjgn88xQ==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar Leaflet/Leaflet.markercluster"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <span aria-hidden="true" class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/Leaflet/Leaflet.markercluster/stargazers">
          1,328
        </a>
</form>
    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/Leaflet/Leaflet.markercluster/star" class="js-toggler-form unstarred js-star-button" data-form-nonce="484c12d754b5b595b268d5bbf654e27cc476a68f" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="c9OaJn/nXq971VD3LgUyhfTzta1pggUx1p2k8/OK5qxdtwlj9X2tH4EGEkjCFD+8P0VmPdIwi4xOuHd/dr7foA==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star Leaflet/Leaflet.markercluster"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <span aria-hidden="true" class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/Leaflet/Leaflet.markercluster/stargazers">
          1,328
        </a>
</form>  </div>

  </li>

  <li>
          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/Leaflet/Leaflet.markercluster/fork" class="btn-with-count" data-form-nonce="484c12d754b5b595b268d5bbf654e27cc476a68f" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="VYzM+47J4saa1u2tYR7rMFwG2WQdrfCxVw9+kpx6uWQxlIps8VgCLWC89AGFHwxeXlOVid2b2Us5pAQUqrz2bg==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of Leaflet/Leaflet.markercluster to your account"
                aria-label="Fork your own copy of Leaflet/Leaflet.markercluster to your account">
              <span aria-hidden="true" class="octicon octicon-repo-forked"></span>
              Fork
            </button>
</form>
    <a href="/Leaflet/Leaflet.markercluster/network" class="social-count">
      447
    </a>
  </li>
</ul>

    <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public ">
  <span aria-hidden="true" class="octicon octicon-repo"></span>
  <span class="author"><a href="/Leaflet" class="url fn" itemprop="url" rel="author"><span itemprop="title">Leaflet</span></a></span><!--
--><span class="path-divider">/</span><!--
--><strong><a href="/Leaflet/Leaflet.markercluster" data-pjax="#js-repo-pjax-container">Leaflet.markercluster</a></strong>

  <span class="page-context-loader">
    <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
  </span>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <a href="/Leaflet/Leaflet.markercluster" aria-label="Code" aria-selected="true" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /Leaflet/Leaflet.markercluster">
    <span aria-hidden="true" class="octicon octicon-code"></span>
    Code
</a>
    <a href="/Leaflet/Leaflet.markercluster/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /Leaflet/Leaflet.markercluster/issues">
      <span aria-hidden="true" class="octicon octicon-issue-opened"></span>
      Issues
      <span class="counter">26</span>
</a>
  <a href="/Leaflet/Leaflet.markercluster/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /Leaflet/Leaflet.markercluster/pulls">
    <span aria-hidden="true" class="octicon octicon-git-pull-request"></span>
    Pull requests
    <span class="counter">2</span>
</a>

  <a href="/Leaflet/Leaflet.markercluster/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /Leaflet/Leaflet.markercluster/pulse">
    <span aria-hidden="true" class="octicon octicon-pulse"></span>
    Pulse
</a>
  <a href="/Leaflet/Leaflet.markercluster/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /Leaflet/Leaflet.markercluster/graphs">
    <span aria-hidden="true" class="octicon octicon-graph"></span>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="/Leaflet/Leaflet.markercluster/blob/ba3c95b275a1e26d6a5393f040551ab3c700c12f/dist/leaflet.markercluster.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:c2d8cbc9daaa122277bc521a7b46ce30 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu js-menu-container js-select-menu left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    title="master"
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span aria-label="Close" class="octicon octicon-x js-menu-close" role="button"></span>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Leaflet/Leaflet.markercluster/blob/gh-pages/dist/leaflet.markercluster.js"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="gh-pages">
                gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Leaflet/Leaflet.markercluster/blob/leaflet-0.7/dist/leaflet.markercluster.js"
               data-name="leaflet-0.7"
               data-skip-pjax="true"
               rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="leaflet-0.7">
                leaflet-0.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/Leaflet/Leaflet.markercluster/blob/master/dist/leaflet.markercluster.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Leaflet/Leaflet.markercluster/blob/prototype-animate-during-zoom/dist/leaflet.markercluster.js"
               data-name="prototype-animate-during-zoom"
               data-skip-pjax="true"
               rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="prototype-animate-during-zoom">
                prototype-animate-during-zoom
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Leaflet/Leaflet.markercluster/tree/v1.0.0-beta.2.0/dist/leaflet.markercluster.js"
              data-name="v1.0.0-beta.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0-beta.2.0">
                v1.0.0-beta.2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Leaflet/Leaflet.markercluster/tree/v0.4.0/dist/leaflet.markercluster.js"
              data-name="v0.4.0"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v0.4.0">
                v0.4.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Leaflet/Leaflet.markercluster/tree/v0.4.0-hotfix.1/dist/leaflet.markercluster.js"
              data-name="v0.4.0-hotfix.1"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v0.4.0-hotfix.1">
                v0.4.0-hotfix.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Leaflet/Leaflet.markercluster/tree/0.4/dist/leaflet.markercluster.js"
              data-name="0.4"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="0.4">
                0.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Leaflet/Leaflet.markercluster/tree/0.3/dist/leaflet.markercluster.js"
              data-name="0.3"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="0.3">
                0.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Leaflet/Leaflet.markercluster/tree/0.2/dist/leaflet.markercluster.js"
              data-name="0.2"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="0.2">
                0.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Leaflet/Leaflet.markercluster/tree/0.1/dist/leaflet.markercluster.js"
              data-name="0.1"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="0.1">
                0.1
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="btn-group right">
    <a href="/Leaflet/Leaflet.markercluster/find/master"
          class="js-show-file-finder btn btn-sm"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/Leaflet/Leaflet.markercluster" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">Leaflet.markercluster</span></a></span></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/Leaflet/Leaflet.markercluster/tree/master/dist" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">dist</span></a></span><span class="separator">/</span><strong class="final-path">leaflet.markercluster.js</strong>
  </div>
</div>


  <div class="commit-tease">
      <span class="right">
        <a class="commit-tease-sha" href="/Leaflet/Leaflet.markercluster/commit/c0b5778dbcb08578ca8b51c715cf64ab1da0622b" data-pjax>
          c0b5778
        </a>
        <time datetime="2014-10-27T20:26:13Z" is="relative-time">Oct 28, 2014</time>
      </span>
      <div>
        <img alt="@danzel" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/393086?v=3&amp;s=40" width="20" />
        <a href="/danzel" class="user-mention" rel="contributor">danzel</a>
          <a href="/Leaflet/Leaflet.markercluster/commit/c0b5778dbcb08578ca8b51c715cf64ab1da0622b" class="message" data-pjax="true" title="Update build">Update build</a>
      </div>

    <div class="commit-tease-contributors">
      <a class="muted-link contributors-toggle" href="#blob_contributors_box" rel="facebox">
        <strong>1</strong>
         contributor
      </a>
      
    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@danzel" height="24" src="https://avatars3.githubusercontent.com/u/393086?v=3&amp;s=48" width="24" />
            <a href="/danzel">danzel</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="btn-group">
      <a href="/Leaflet/Leaflet.markercluster/raw/master/dist/leaflet.markercluster.js" class="btn btn-sm " id="raw-url">Raw</a>
        <a href="/Leaflet/Leaflet.markercluster/blame/master/dist/leaflet.markercluster.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
      <a href="/Leaflet/Leaflet.markercluster/commits/master/dist/leaflet.markercluster.js" class="btn btn-sm " rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="github-windows://openRepo/https://github.com/Leaflet/Leaflet.markercluster?branch=master&amp;filepath=dist%2Fleaflet.markercluster.js"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <span aria-hidden="true" class="octicon octicon-device-desktop"></span>
        </a>

        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/Leaflet/Leaflet.markercluster/edit/master/dist/leaflet.markercluster.js" class="inline-form js-update-url-with-hash" data-form-nonce="484c12d754b5b595b268d5bbf654e27cc476a68f" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="mf113ewtD/sN0WOIhKVrsUf4aJp8pZ13ACBGEtyGHq1mCMiDnVRPaUogyW9zjiCY9E8tN+b+MG1X2DQIGVn1ng==" /></div>
          <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
            <span aria-hidden="true" class="octicon octicon-pencil"></span>
          </button>
</form>        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/Leaflet/Leaflet.markercluster/delete/master/dist/leaflet.markercluster.js" class="inline-form" data-form-nonce="484c12d754b5b595b268d5bbf654e27cc476a68f" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="HxZ11xzjh+Ljlum1pr/JjLkQFp4QyGV3MSmAbIsiaA2YRLvedQUg1Hl9KENh8aaBCQ7jYj6++zOL1wqJEpBloQ==" /></div>
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <span aria-hidden="true" class="octicon octicon-trashcan"></span>
          </button>
</form>  </div>

  <div class="file-info">
      6 lines (6 sloc)
      <span class="file-info-divider"></span>
    28.1 KB
  </div>
</div>

  

  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/*</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> Leaflet.markercluster, Provides Beautiful Animated Marker Clustering functionality for Leaflet, a JS library for interactive maps.</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> https://github.com/Leaflet/Leaflet.markercluster</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> (c) 2012-2013, Dave Leaver, smartrak</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-c">*/</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line">!function(t,e){L.MarkerClusterGroup=L.FeatureGroup.extend({options:{maxClusterRadius:80,iconCreateFunction:null,spiderfyOnMaxZoom:!0,showCoverageOnHover:!0,zoomToBoundsOnClick:!0,singleMarkerMode:!1,disableClusteringAtZoom:null,removeOutsideVisibleBounds:!0,animateAddingMarkers:!1,spiderfyDistanceMultiplier:1,chunkedLoading:!1,chunkInterval:200,chunkDelay:50,chunkProgress:null,polygonOptions:{}},initialize:function(t){L.Util.setOptions(this,t),this.options.iconCreateFunction||(this.options.iconCreateFunction=this._defaultIconCreateFunction),this._featureGroup=L.featureGroup(),this._featureGroup.on(L.FeatureGroup.EVENTS,this._propagateEvent,this),this._nonPointGroup=L.featureGroup(),this._nonPointGroup.on(L.FeatureGroup.EVENTS,this._propagateEvent,this),this._inZoomAnimation=0,this._needsClustering=[],this._needsRemoving=[],this._currentShownBounds=null,this._queue=[]},addLayer:function(t){if(t instanceof L.LayerGroup){var e=[];for(var i in t._layers)e.push(t._layers[i]);return this.addLayers(e)}if(!t.getLatLng)return this._nonPointGroup.addLayer(t),this;if(!this._map)return this._needsClustering.push(t),this;if(this.hasLayer(t))return this;this._unspiderfy&amp;&amp;this._unspiderfy(),this._addLayer(t,this._maxZoom);var n=t,s=this._map.getZoom();if(t.__parent)for(;n.__parent._zoom&gt;=s;)n=n.__parent;return this._currentShownBounds.contains(n.getLatLng())&amp;&amp;(this.options.animateAddingMarkers?this._animationAddLayer(t,n):this._animationAddLayerNonAnimated(t,n)),this},removeLayer:function(t){if(t instanceof L.LayerGroup){var e=[];for(var i in t._layers)e.push(t._layers[i]);return this.removeLayers(e)}return t.getLatLng?this._map?t.__parent?(this._unspiderfy&amp;&amp;(this._unspiderfy(),this._unspiderfyLayer(t)),this._removeLayer(t,!0),this._featureGroup.hasLayer(t)&amp;&amp;(this._featureGroup.removeLayer(t),t.setOpacity&amp;&amp;t.setOpacity(1)),this):this:(!this._arraySplice(this._needsClustering,t)&amp;&amp;this.hasLayer(t)&amp;&amp;this._needsRemoving.push(t),this):(this._nonPointGroup.removeLayer(t),this)},addLayers:function(t){var e,i,n,s,r=this._featureGroup,o=this._nonPointGroup,a=this.options.chunkedLoading,h=this.options.chunkInterval,_=this.options.chunkProgress;if(this._map){var u=0,l=(new Date).getTime(),d=L.bind(function(){for(var e=(new Date).getTime();u&lt;t.length;u++){if(a&amp;&amp;0===u%200){var i=(new Date).getTime()-e;if(i&gt;h)break}if(s=t[u],s.getLatLng){if(!this.hasLayer(s)&amp;&amp;(this._addLayer(s,this._maxZoom),s.__parent&amp;&amp;2===s.__parent.getChildCount())){var n=s.__parent.getAllChildMarkers(),p=n[0]===s?n[1]:n[0];r.removeLayer(p)}}else o.addLayer(s)}_&amp;&amp;_(u,t.length,(new Date).getTime()-l),u===t.length?(this._featureGroup.eachLayer(function(t){t instanceof L.MarkerCluster&amp;&amp;t._iconNeedsUpdate&amp;&amp;t._updateIcon()}),this._topClusterLevel._recursivelyAddChildrenToMap(null,this._zoom,this._currentShownBounds)):setTimeout(d,this.options.chunkDelay)},this);d()}else{for(e=[],i=0,n=t.length;n&gt;i;i++)s=t[i],s.getLatLng?this.hasLayer(s)||e.push(s):o.addLayer(s);this._needsClustering=this._needsClustering.concat(e)}return this},removeLayers:function(t){var e,i,n,s=this._featureGroup,r=this._nonPointGroup;if(!this._map){for(e=0,i=t.length;i&gt;e;e++)n=t[e],this._arraySplice(this._needsClustering,n),r.removeLayer(n);return this}for(e=0,i=t.length;i&gt;e;e++)n=t[e],n.__parent?(this._removeLayer(n,!0,!0),s.hasLayer(n)&amp;&amp;(s.removeLayer(n),n.setOpacity&amp;&amp;n.setOpacity(1))):r.removeLayer(n);return this._topClusterLevel._recursivelyAddChildrenToMap(null,this._zoom,this._currentShownBounds),s.eachLayer(function(t){t instanceof L.MarkerCluster&amp;&amp;t._updateIcon()}),this},clearLayers:function(){return this._map||(this._needsClustering=[],delete this._gridClusters,delete this._gridUnclustered),this._noanimationUnspiderfy&amp;&amp;this._noanimationUnspiderfy(),this._featureGroup.clearLayers(),this._nonPointGroup.clearLayers(),this.eachLayer(function(t){delete t.__parent}),this._map&amp;&amp;this._generateInitialClusters(),this},getBounds:function(){var t=new L.LatLngBounds;this._topClusterLevel&amp;&amp;t.extend(this._topClusterLevel._bounds);for(var e=this._needsClustering.length-1;e&gt;=0;e--)t.extend(this._needsClustering[e].getLatLng());return t.extend(this._nonPointGroup.getBounds()),t},eachLayer:function(t,e){var i,n=this._needsClustering.slice();for(this._topClusterLevel&amp;&amp;this._topClusterLevel.getAllChildMarkers(n),i=n.length-1;i&gt;=0;i--)t.call(e,n[i]);this._nonPointGroup.eachLayer(t,e)},getLayers:function(){var t=[];return this.eachLayer(function(e){t.push(e)}),t},getLayer:function(t){var e=null;return this.eachLayer(function(i){L.stamp(i)===t&amp;&amp;(e=i)}),e},hasLayer:function(t){if(!t)return!1;var e,i=this._needsClustering;for(e=i.length-1;e&gt;=0;e--)if(i[e]===t)return!0;for(i=this._needsRemoving,e=i.length-1;e&gt;=0;e--)if(i[e]===t)return!1;return!(!t.__parent||t.__parent._group!==this)||this._nonPointGroup.hasLayer(t)},zoomToShowLayer:function(t,e){var i=function(){if((t._icon||t.__parent._icon)&amp;&amp;!this._inZoomAnimation)if(this._map.off(&quot;moveend&quot;,i,this),this.off(&quot;animationend&quot;,i,this),t._icon)e();else if(t.__parent._icon){var n=function(){this.off(&quot;spiderfied&quot;,n,this),e()};this.on(&quot;spiderfied&quot;,n,this),t.__parent.spiderfy()}};if(t._icon&amp;&amp;this._map.getBounds().contains(t.getLatLng()))e();else if(t.__parent._zoom&lt;this._map.getZoom())this._map.on(&quot;moveend&quot;,i,this),this._map.panTo(t.getLatLng());else{var n=function(){this._map.off(&quot;movestart&quot;,n,this),n=null};this._map.on(&quot;movestart&quot;,n,this),this._map.on(&quot;moveend&quot;,i,this),this.on(&quot;animationend&quot;,i,this),t.__parent.zoomToBounds(),n&amp;&amp;i.call(this)}},onAdd:function(t){this._map=t;var e,i,n;if(!isFinite(this._map.getMaxZoom()))throw&quot;Map has no maxZoom specified&quot;;for(this._featureGroup.onAdd(t),this._nonPointGroup.onAdd(t),this._gridClusters||this._generateInitialClusters(),e=0,i=this._needsRemoving.length;i&gt;e;e++)n=this._needsRemoving[e],this._removeLayer(n,!0);this._needsRemoving=[],this._zoom=this._map.getZoom(),this._currentShownBounds=this._getExpandedVisibleBounds(),this._map.on(&quot;zoomend&quot;,this._zoomEnd,this),this._map.on(&quot;moveend&quot;,this._moveEnd,this),this._spiderfierOnAdd&amp;&amp;this._spiderfierOnAdd(),this._bindEvents(),i=this._needsClustering,this._needsClustering=[],this.addLayers(i)},onRemove:function(t){t.off(&quot;zoomend&quot;,this._zoomEnd,this),t.off(&quot;moveend&quot;,this._moveEnd,this),this._unbindEvents(),this._map._mapPane.className=this._map._mapPane.className.replace(&quot; leaflet-cluster-anim&quot;,&quot;&quot;),this._spiderfierOnRemove&amp;&amp;this._spiderfierOnRemove(),this._hideCoverage(),this._featureGroup.onRemove(t),this._nonPointGroup.onRemove(t),this._featureGroup.clearLayers(),this._map=null},getVisibleParent:function(t){for(var e=t;e&amp;&amp;!e._icon;)e=e.__parent;return e||null},_arraySplice:function(t,e){for(var i=t.length-1;i&gt;=0;i--)if(t[i]===e)return t.splice(i,1),!0},_removeLayer:function(t,e,i){var n=this._gridClusters,s=this._gridUnclustered,r=this._featureGroup,o=this._map;if(e)for(var a=this._maxZoom;a&gt;=0&amp;&amp;s[a].removeObject(t,o.project(t.getLatLng(),a));a--);var h,_=t.__parent,u=_._markers;for(this._arraySplice(u,t);_&amp;&amp;(_._childCount--,!(_._zoom&lt;0));)e&amp;&amp;_._childCount&lt;=1?(h=_._markers[0]===t?_._markers[1]:_._markers[0],n[_._zoom].removeObject(_,o.project(_._cLatLng,_._zoom)),s[_._zoom].addObject(h,o.project(h.getLatLng(),_._zoom)),this._arraySplice(_.__parent._childClusters,_),_.__parent._markers.push(h),h.__parent=_.__parent,_._icon&amp;&amp;(r.removeLayer(_),i||r.addLayer(h))):(_._recalculateBounds(),i&amp;&amp;_._icon||_._updateIcon()),_=_.__parent;delete t.__parent},_isOrIsParent:function(t,e){for(;e;){if(t===e)return!0;e=e.parentNode}return!1},_propagateEvent:function(t){if(t.layer instanceof L.MarkerCluster){if(t.originalEvent&amp;&amp;this._isOrIsParent(t.layer._icon,t.originalEvent.relatedTarget))return;t.type=&quot;cluster&quot;+t.type}this.fire(t.type,t)},_defaultIconCreateFunction:function(t){var e=t.getChildCount(),i=&quot; marker-cluster-&quot;;return i+=10&gt;e?&quot;small&quot;:100&gt;e?&quot;medium&quot;:&quot;large&quot;,new L.DivIcon({html:&quot;&lt;div&gt;&lt;span&gt;&quot;+e+&quot;&lt;/span&gt;&lt;/div&gt;&quot;,className:&quot;marker-cluster&quot;+i,iconSize:new L.Point(40,40)})},_bindEvents:function(){var t=this._map,e=this.options.spiderfyOnMaxZoom,i=this.options.showCoverageOnHover,n=this.options.zoomToBoundsOnClick;(e||n)&amp;&amp;this.on(&quot;clusterclick&quot;,this._zoomOrSpiderfy,this),i&amp;&amp;(this.on(&quot;clustermouseover&quot;,this._showCoverage,this),this.on(&quot;clustermouseout&quot;,this._hideCoverage,this),t.on(&quot;zoomend&quot;,this._hideCoverage,this))},_zoomOrSpiderfy:function(t){var e=this._map;e.getMaxZoom()===e.getZoom()?this.options.spiderfyOnMaxZoom&amp;&amp;t.layer.spiderfy():this.options.zoomToBoundsOnClick&amp;&amp;t.layer.zoomToBounds(),t.originalEvent&amp;&amp;13===t.originalEvent.keyCode&amp;&amp;e._container.focus()},_showCoverage:function(t){var e=this._map;this._inZoomAnimation||(this._shownPolygon&amp;&amp;e.removeLayer(this._shownPolygon),t.layer.getChildCount()&gt;2&amp;&amp;t.layer!==this._spiderfied&amp;&amp;(this._shownPolygon=new L.Polygon(t.layer.getConvexHull(),this.options.polygonOptions),e.addLayer(this._shownPolygon)))},_hideCoverage:function(){this._shownPolygon&amp;&amp;(this._map.removeLayer(this._shownPolygon),this._shownPolygon=null)},_unbindEvents:function(){var t=this.options.spiderfyOnMaxZoom,e=this.options.showCoverageOnHover,i=this.options.zoomToBoundsOnClick,n=this._map;(t||i)&amp;&amp;this.off(&quot;clusterclick&quot;,this._zoomOrSpiderfy,this),e&amp;&amp;(this.off(&quot;clustermouseover&quot;,this._showCoverage,this),this.off(&quot;clustermouseout&quot;,this._hideCoverage,this),n.off(&quot;zoomend&quot;,this._hideCoverage,this))},_zoomEnd:function(){this._map&amp;&amp;(this._mergeSplitClusters(),this._zoom=this._map._zoom,this._currentShownBounds=this._getExpandedVisibleBounds())},_moveEnd:function(){if(!this._inZoomAnimation){var t=this._getExpandedVisibleBounds();this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,this._zoom,t),this._topClusterLevel._recursivelyAddChildrenToMap(null,this._map._zoom,t),this._currentShownBounds=t}},_generateInitialClusters:function(){var t=this._map.getMaxZoom(),e=this.options.maxClusterRadius,i=e;&quot;function&quot;!=typeof e&amp;&amp;(i=function(){return e}),this.options.disableClusteringAtZoom&amp;&amp;(t=this.options.disableClusteringAtZoom-1),this._maxZoom=t,this._gridClusters={},this._gridUnclustered={};for(var n=t;n&gt;=0;n--)this._gridClusters[n]=new L.DistanceGrid(i(n)),this._gridUnclustered[n]=new L.DistanceGrid(i(n));this._topClusterLevel=new L.MarkerCluster(this,-1)},_addLayer:function(t,e){var i,n,s=this._gridClusters,r=this._gridUnclustered;for(this.options.singleMarkerMode&amp;&amp;(t.options.icon=this.options.iconCreateFunction({getChildCount:function(){return 1},getAllChildMarkers:function(){return[t]}}));e&gt;=0;e--){i=this._map.project(t.getLatLng(),e);var o=s[e].getNearObject(i);if(o)return o._addChild(t),t.__parent=o,void 0;if(o=r[e].getNearObject(i)){var a=o.__parent;a&amp;&amp;this._removeLayer(o,!1);var h=new L.MarkerCluster(this,e,o,t);s[e].addObject(h,this._map.project(h._cLatLng,e)),o.__parent=h,t.__parent=h;var _=h;for(n=e-1;n&gt;a._zoom;n--)_=new L.MarkerCluster(this,n,_),s[n].addObject(_,this._map.project(o.getLatLng(),n));for(a._addChild(_),n=e;n&gt;=0&amp;&amp;r[n].removeObject(o,this._map.project(o.getLatLng(),n));n--);return}r[e].addObject(t,i)}this._topClusterLevel._addChild(t),t.__parent=this._topClusterLevel},_enqueue:function(t){this._queue.push(t),this._queueTimeout||(this._queueTimeout=setTimeout(L.bind(this._processQueue,this),300))},_processQueue:function(){for(var t=0;t&lt;this._queue.length;t++)this._queue[t].call(this);this._queue.length=0,clearTimeout(this._queueTimeout),this._queueTimeout=null},_mergeSplitClusters:function(){this._processQueue(),this._zoom&lt;this._map._zoom&amp;&amp;this._currentShownBounds.intersects(this._getExpandedVisibleBounds())?(this._animationStart(),this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,this._zoom,this._getExpandedVisibleBounds()),this._animationZoomIn(this._zoom,this._map._zoom)):this._zoom&gt;this._map._zoom?(this._animationStart(),this._animationZoomOut(this._zoom,this._map._zoom)):this._moveEnd()},_getExpandedVisibleBounds:function(){if(!this.options.removeOutsideVisibleBounds)return this._map.getBounds();var t=this._map,e=t.getBounds(),i=e._southWest,n=e._northEast,s=L.Browser.mobile?0:Math.abs(i.lat-n.lat),r=L.Browser.mobile?0:Math.abs(i.lng-n.lng);return new L.LatLngBounds(new L.LatLng(i.lat-s,i.lng-r,!0),new L.LatLng(n.lat+s,n.lng+r,!0))},_animationAddLayerNonAnimated:function(t,e){if(e===t)this._featureGroup.addLayer(t);else if(2===e._childCount){e._addToMap();var i=e.getAllChildMarkers();this._featureGroup.removeLayer(i[0]),this._featureGroup.removeLayer(i[1])}else e._updateIcon()}}),L.MarkerClusterGroup.include(L.DomUtil.TRANSITION?{_animationStart:function(){this._map._mapPane.className+=&quot; leaflet-cluster-anim&quot;,this._inZoomAnimation++},_animationEnd:function(){this._map&amp;&amp;(this._map._mapPane.className=this._map._mapPane.className.replace(&quot; leaflet-cluster-anim&quot;,&quot;&quot;)),this._inZoomAnimation--,this.fire(&quot;animationend&quot;)},_animationZoomIn:function(t,e){var i,n=this._getExpandedVisibleBounds(),s=this._featureGroup;this._topClusterLevel._recursively(n,t,0,function(r){var o,a=r._latlng,h=r._markers;for(n.contains(a)||(a=null),r._isSingleParent()&amp;&amp;t+1===e?(s.removeLayer(r),r._recursivelyAddChildrenToMap(null,e,n)):(r.setOpacity(0),r._recursivelyAddChildrenToMap(a,e,n)),i=h.length-1;i&gt;=0;i--)o=h[i],n.contains(o._latlng)||s.removeLayer(o)}),this._forceLayout(),this._topClusterLevel._recursivelyBecomeVisible(n,e),s.eachLayer(function(t){t instanceof L.MarkerCluster||!t._icon||t.setOpacity(1)}),this._topClusterLevel._recursively(n,t,e,function(t){t._recursivelyRestoreChildPositions(e)}),this._enqueue(function(){this._topClusterLevel._recursively(n,t,0,function(t){s.removeLayer(t),t.setOpacity(1)}),this._animationEnd()})},_animationZoomOut:function(t,e){this._animationZoomOutSingle(this._topClusterLevel,t-1,e),this._topClusterLevel._recursivelyAddChildrenToMap(null,e,this._getExpandedVisibleBounds()),this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,t,this._getExpandedVisibleBounds())},_animationZoomOutSingle:function(t,e,i){var n=this._getExpandedVisibleBounds();t._recursivelyAnimateChildrenInAndAddSelfToMap(n,e+1,i);var s=this;this._forceLayout(),t._recursivelyBecomeVisible(n,i),this._enqueue(function(){if(1===t._childCount){var r=t._markers[0];r.setLatLng(r.getLatLng()),r.setOpacity&amp;&amp;r.setOpacity(1)}else t._recursively(n,i,0,function(t){t._recursivelyRemoveChildrenFromMap(n,e+1)});s._animationEnd()})},_animationAddLayer:function(t,e){var i=this,n=this._featureGroup;n.addLayer(t),e!==t&amp;&amp;(e._childCount&gt;2?(e._updateIcon(),this._forceLayout(),this._animationStart(),t._setPos(this._map.latLngToLayerPoint(e.getLatLng())),t.setOpacity(0),this._enqueue(function(){n.removeLayer(t),t.setOpacity(1),i._animationEnd()})):(this._forceLayout(),i._animationStart(),i._animationZoomOutSingle(e,this._map.getMaxZoom(),this._map.getZoom())))},_forceLayout:function(){L.Util.falseFn(e.body.offsetWidth)}}:{_animationStart:function(){},_animationZoomIn:function(t,e){this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,t),this._topClusterLevel._recursivelyAddChildrenToMap(null,e,this._getExpandedVisibleBounds()),this.fire(&quot;animationend&quot;)},_animationZoomOut:function(t,e){this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,t),this._topClusterLevel._recursivelyAddChildrenToMap(null,e,this._getExpandedVisibleBounds()),this.fire(&quot;animationend&quot;)},_animationAddLayer:function(t,e){this._animationAddLayerNonAnimated(t,e)}}),L.markerClusterGroup=function(t){return new L.MarkerClusterGroup(t)},L.MarkerCluster=L.Marker.extend({initialize:function(t,e,i,n){L.Marker.prototype.initialize.call(this,i?i._cLatLng||i.getLatLng():new L.LatLng(0,0),{icon:this}),this._group=t,this._zoom=e,this._markers=[],this._childClusters=[],this._childCount=0,this._iconNeedsUpdate=!0,this._bounds=new L.LatLngBounds,i&amp;&amp;this._addChild(i),n&amp;&amp;this._addChild(n)},getAllChildMarkers:function(t){t=t||[];for(var e=this._childClusters.length-1;e&gt;=0;e--)this._childClusters[e].getAllChildMarkers(t);for(var i=this._markers.length-1;i&gt;=0;i--)t.push(this._markers[i]);return t},getChildCount:function(){return this._childCount},zoomToBounds:function(){for(var t,e=this._childClusters.slice(),i=this._group._map,n=i.getBoundsZoom(this._bounds),s=this._zoom+1,r=i.getZoom();e.length&gt;0&amp;&amp;n&gt;s;){s++;var o=[];for(t=0;t&lt;e.length;t++)o=o.concat(e[t]._childClusters);e=o}n&gt;s?this._group._map.setView(this._latlng,s):r&gt;=n?this._group._map.setView(this._latlng,r+1):this._group._map.fitBounds(this._bounds)},getBounds:function(){var t=new L.LatLngBounds;return t.extend(this._bounds),t},_updateIcon:function(){this._iconNeedsUpdate=!0,this._icon&amp;&amp;this.setIcon(this)},createIcon:function(){return this._iconNeedsUpdate&amp;&amp;(this._iconObj=this._group.options.iconCreateFunction(this),this._iconNeedsUpdate=!1),this._iconObj.createIcon()},createShadow:function(){return this._iconObj.createShadow()},_addChild:function(t,e){this._iconNeedsUpdate=!0,this._expandBounds(t),t instanceof L.MarkerCluster?(e||(this._childClusters.push(t),t.__parent=this),this._childCount+=t._childCount):(e||this._markers.push(t),this._childCount++),this.__parent&amp;&amp;this.__parent._addChild(t,!0)},_expandBounds:function(t){var e,i=t._wLatLng||t._latlng;t instanceof L.MarkerCluster?(this._bounds.extend(t._bounds),e=t._childCount):(this._bounds.extend(i),e=1),this._cLatLng||(this._cLatLng=t._cLatLng||i);var n=this._childCount+e;this._wLatLng?(this._wLatLng.lat=(i.lat*e+this._wLatLng.lat*this._childCount)/n,this._wLatLng.lng=(i.lng*e+this._wLatLng.lng*this._childCount)/n):this._latlng=this._wLatLng=new L.LatLng(i.lat,i.lng)},_addToMap:function(t){t&amp;&amp;(this._backupLatlng=this._latlng,this.setLatLng(t)),this._group._featureGroup.addLayer(this)},_recursivelyAnimateChildrenIn:function(t,e,i){this._recursively(t,0,i-1,function(t){var i,n,s=t._markers;for(i=s.length-1;i&gt;=0;i--)n=s[i],n._icon&amp;&amp;(n._setPos(e),n.setOpacity(0))},function(t){var i,n,s=t._childClusters;for(i=s.length-1;i&gt;=0;i--)n=s[i],n._icon&amp;&amp;(n._setPos(e),n.setOpacity(0))})},_recursivelyAnimateChildrenInAndAddSelfToMap:function(t,e,i){this._recursively(t,i,0,function(n){n._recursivelyAnimateChildrenIn(t,n._group._map.latLngToLayerPoint(n.getLatLng()).round(),e),n._isSingleParent()&amp;&amp;e-1===i?(n.setOpacity(1),n._recursivelyRemoveChildrenFromMap(t,e)):n.setOpacity(0),n._addToMap()})},_recursivelyBecomeVisible:function(t,e){this._recursively(t,0,e,null,function(t){t.setOpacity(1)})},_recursivelyAddChildrenToMap:function(t,e,i){this._recursively(i,-1,e,function(n){if(e!==n._zoom)for(var s=n._markers.length-1;s&gt;=0;s--){var r=n._markers[s];i.contains(r._latlng)&amp;&amp;(t&amp;&amp;(r._backupLatlng=r.getLatLng(),r.setLatLng(t),r.setOpacity&amp;&amp;r.setOpacity(0)),n._group._featureGroup.addLayer(r))}},function(e){e._addToMap(t)})},_recursivelyRestoreChildPositions:function(t){for(var e=this._markers.length-1;e&gt;=0;e--){var i=this._markers[e];i._backupLatlng&amp;&amp;(i.setLatLng(i._backupLatlng),delete i._backupLatlng)}if(t-1===this._zoom)for(var n=this._childClusters.length-1;n&gt;=0;n--)this._childClusters[n]._restorePosition();else for(var s=this._childClusters.length-1;s&gt;=0;s--)this._childClusters[s]._recursivelyRestoreChildPositions(t)},_restorePosition:function(){this._backupLatlng&amp;&amp;(this.setLatLng(this._backupLatlng),delete this._backupLatlng)},_recursivelyRemoveChildrenFromMap:function(t,e,i){var n,s;this._recursively(t,-1,e-1,function(t){for(s=t._markers.length-1;s&gt;=0;s--)n=t._markers[s],i&amp;&amp;i.contains(n._latlng)||(t._group._featureGroup.removeLayer(n),n.setOpacity&amp;&amp;n.setOpacity(1))},function(t){for(s=t._childClusters.length-1;s&gt;=0;s--)n=t._childClusters[s],i&amp;&amp;i.contains(n._latlng)||(t._group._featureGroup.removeLayer(n),n.setOpacity&amp;&amp;n.setOpacity(1))})},_recursively:function(t,e,i,n,s){var r,o,a=this._childClusters,h=this._zoom;if(e&gt;h)for(r=a.length-1;r&gt;=0;r--)o=a[r],t.intersects(o._bounds)&amp;&amp;o._recursively(t,e,i,n,s);else if(n&amp;&amp;n(this),s&amp;&amp;this._zoom===i&amp;&amp;s(this),i&gt;h)for(r=a.length-1;r&gt;=0;r--)o=a[r],t.intersects(o._bounds)&amp;&amp;o._recursively(t,e,i,n,s)},_recalculateBounds:function(){var t,e=this._markers,i=this._childClusters;for(this._bounds=new L.LatLngBounds,delete this._wLatLng,t=e.length-1;t&gt;=0;t--)this._expandBounds(e[t]);for(t=i.length-1;t&gt;=0;t--)this._expandBounds(i[t])},_isSingleParent:function(){return this._childClusters.length&gt;0&amp;&amp;this._childClusters[0]._childCount===this._childCount}}),L.DistanceGrid=function(t){this._cellSize=t,this._sqCellSize=t*t,this._grid={},this._objectPoint={}},L.DistanceGrid.prototype={addObject:function(t,e){var i=this._getCoord(e.x),n=this._getCoord(e.y),s=this._grid,r=s[n]=s[n]||{},o=r[i]=r[i]||[],a=L.Util.stamp(t);this._objectPoint[a]=e,o.push(t)},updateObject:function(t,e){this.removeObject(t),this.addObject(t,e)},removeObject:function(t,e){var i,n,s=this._getCoord(e.x),r=this._getCoord(e.y),o=this._grid,a=o[r]=o[r]||{},h=a[s]=a[s]||[];for(delete this._objectPoint[L.Util.stamp(t)],i=0,n=h.length;n&gt;i;i++)if(h[i]===t)return h.splice(i,1),1===n&amp;&amp;delete a[s],!0},eachObject:function(t,e){var i,n,s,r,o,a,h,_=this._grid;for(i in _){o=_[i];for(n in o)for(a=o[n],s=0,r=a.length;r&gt;s;s++)h=t.call(e,a[s]),h&amp;&amp;(s--,r--)}},getNearObject:function(t){var e,i,n,s,r,o,a,h,_=this._getCoord(t.x),u=this._getCoord(t.y),l=this._objectPoint,d=this._sqCellSize,p=null;for(e=u-1;u+1&gt;=e;e++)if(s=this._grid[e])for(i=_-1;_+1&gt;=i;i++)if(r=s[i])for(n=0,o=r.length;o&gt;n;n++)a=r[n],h=this._sqDist(l[L.Util.stamp(a)],t),d&gt;h&amp;&amp;(d=h,p=a);return p},_getCoord:function(t){return Math.floor(t/this._cellSize)},_sqDist:function(t,e){var i=e.x-t.x,n=e.y-t.y;return i*i+n*n}},function(){L.QuickHull={getDistant:function(t,e){var i=e[1].lat-e[0].lat,n=e[0].lng-e[1].lng;return n*(t.lat-e[0].lat)+i*(t.lng-e[0].lng)},findMostDistantPointFromBaseLine:function(t,e){var i,n,s,r=0,o=null,a=[];for(i=e.length-1;i&gt;=0;i--)n=e[i],s=this.getDistant(n,t),s&gt;0&amp;&amp;(a.push(n),s&gt;r&amp;&amp;(r=s,o=n));return{maxPoint:o,newPoints:a}},buildConvexHull:function(t,e){var i=[],n=this.findMostDistantPointFromBaseLine(t,e);return n.maxPoint?(i=i.concat(this.buildConvexHull([t[0],n.maxPoint],n.newPoints)),i=i.concat(this.buildConvexHull([n.maxPoint,t[1]],n.newPoints))):[t[0]]},getConvexHull:function(t){var e,i=!1,n=!1,s=null,r=null;for(e=t.length-1;e&gt;=0;e--){var o=t[e];(i===!1||o.lat&gt;i)&amp;&amp;(s=o,i=o.lat),(n===!1||o.lat&lt;n)&amp;&amp;(r=o,n=o.lat)}var a=[].concat(this.buildConvexHull([r,s],t),this.buildConvexHull([s,r],t));return a}}}(),L.MarkerCluster.include({getConvexHull:function(){var t,e,i=this.getAllChildMarkers(),n=[];for(e=i.length-1;e&gt;=0;e--)t=i[e].getLatLng(),n.push(t);return L.QuickHull.getConvexHull(n)}}),L.MarkerCluster.include({_2PI:2*Math.PI,_circleFootSeparation:25,_circleStartAngle:Math.PI/6,_spiralFootSeparation:28,_spiralLengthStart:11,_spiralLengthFactor:5,_circleSpiralSwitchover:9,spiderfy:function(){if(this._group._spiderfied!==this&amp;&amp;!this._group._inZoomAnimation){var t,e=this.getAllChildMarkers(),i=this._group,n=i._map,s=n.latLngToLayerPoint(this._latlng);this._group._unspiderfy(),this._group._spiderfied=this,e.length&gt;=this._circleSpiralSwitchover?t=this._generatePointsSpiral(e.length,s):(s.y+=10,t=this._generatePointsCircle(e.length,s)),this._animationSpiderfy(e,t)}},unspiderfy:function(t){this._group._inZoomAnimation||(this._animationUnspiderfy(t),this._group._spiderfied=null)},_generatePointsCircle:function(t,e){var i,n,s=this._group.options.spiderfyDistanceMultiplier*this._circleFootSeparation*(2+t),r=s/this._2PI,o=this._2PI/t,a=[];for(a.length=t,i=t-1;i&gt;=0;i--)n=this._circleStartAngle+i*o,a[i]=new L.Point(e.x+r*Math.cos(n),e.y+r*Math.sin(n))._round();return a},_generatePointsSpiral:function(t,e){var i,n=this._group.options.spiderfyDistanceMultiplier*this._spiralLengthStart,s=this._group.options.spiderfyDistanceMultiplier*this._spiralFootSeparation,r=this._group.options.spiderfyDistanceMultiplier*this._spiralLengthFactor,o=0,a=[];for(a.length=t,i=t-1;i&gt;=0;i--)o+=s/n+5e-4*i,a[i]=new L.Point(e.x+n*Math.cos(o),e.y+n*Math.sin(o))._round(),n+=this._2PI*r/o;return a},_noanimationUnspiderfy:function(){var t,e,i=this._group,n=i._map,s=i._featureGroup,r=this.getAllChildMarkers();for(this.setOpacity(1),e=r.length-1;e&gt;=0;e--)t=r[e],s.removeLayer(t),t._preSpiderfyLatlng&amp;&amp;(t.setLatLng(t._preSpiderfyLatlng),delete t._preSpiderfyLatlng),t.setZIndexOffset&amp;&amp;t.setZIndexOffset(0),t._spiderLeg&amp;&amp;(n.removeLayer(t._spiderLeg),delete t._spiderLeg);i._spiderfied=null}}),L.MarkerCluster.include(L.DomUtil.TRANSITION?{SVG_ANIMATION:function(){return e.createElementNS(&quot;http://www.w3.org/2000/svg&quot;,&quot;animate&quot;).toString().indexOf(&quot;SVGAnimate&quot;)&gt;-1}(),_animationSpiderfy:function(t,i){var n,s,r,o,a=this,h=this._group,_=h._map,u=h._featureGroup,l=_.latLngToLayerPoint(this._latlng);for(n=t.length-1;n&gt;=0;n--)s=t[n],s.setOpacity?(s.setZIndexOffset(1e6),s.setOpacity(0),u.addLayer(s),s._setPos(l)):u.addLayer(s);h._forceLayout(),h._animationStart();var d=L.Path.SVG?0:.3,p=L.Path.SVG_NS;for(n=t.length-1;n&gt;=0;n--)if(o=_.layerPointToLatLng(i[n]),s=t[n],s._preSpiderfyLatlng=s._latlng,s.setLatLng(o),s.setOpacity&amp;&amp;s.setOpacity(1),r=new L.Polyline([a._latlng,o],{weight:1.5,color:&quot;#222&quot;,opacity:d}),_.addLayer(r),s._spiderLeg=r,L.Path.SVG&amp;&amp;this.SVG_ANIMATION){var c=r._path.getTotalLength();r._path.setAttribute(&quot;stroke-dasharray&quot;,c+&quot;,&quot;+c);var f=e.createElementNS(p,&quot;animate&quot;);f.setAttribute(&quot;attributeName&quot;,&quot;stroke-dashoffset&quot;),f.setAttribute(&quot;begin&quot;,&quot;indefinite&quot;),f.setAttribute(&quot;from&quot;,c),f.setAttribute(&quot;to&quot;,0),f.setAttribute(&quot;dur&quot;,.25),r._path.appendChild(f),f.beginElement(),f=e.createElementNS(p,&quot;animate&quot;),f.setAttribute(&quot;attributeName&quot;,&quot;stroke-opacity&quot;),f.setAttribute(&quot;attributeName&quot;,&quot;stroke-opacity&quot;),f.setAttribute(&quot;begin&quot;,&quot;indefinite&quot;),f.setAttribute(&quot;from&quot;,0),f.setAttribute(&quot;to&quot;,.5),f.setAttribute(&quot;dur&quot;,.25),r._path.appendChild(f),f.beginElement()}if(a.setOpacity(.3),L.Path.SVG)for(this._group._forceLayout(),n=t.length-1;n&gt;=0;n--)s=t[n]._spiderLeg,s.options.opacity=.5,s._path.setAttribute(&quot;stroke-opacity&quot;,.5);setTimeout(function(){h._animationEnd(),h.fire(&quot;spiderfied&quot;)},200)},_animationUnspiderfy:function(t){var e,i,n,s=this._group,r=s._map,o=s._featureGroup,a=t?r._latLngToNewLayerPoint(this._latlng,t.zoom,t.center):r.latLngToLayerPoint(this._latlng),h=this.getAllChildMarkers(),_=L.Path.SVG&amp;&amp;this.SVG_ANIMATION;for(s._animationStart(),this.setOpacity(1),i=h.length-1;i&gt;=0;i--)e=h[i],e._preSpiderfyLatlng&amp;&amp;(e.setLatLng(e._preSpiderfyLatlng),delete e._preSpiderfyLatlng,e.setOpacity?(e._setPos(a),e.setOpacity(0)):o.removeLayer(e),_&amp;&amp;(n=e._spiderLeg._path.childNodes[0],n.setAttribute(&quot;to&quot;,n.getAttribute(&quot;from&quot;)),n.setAttribute(&quot;from&quot;,0),n.beginElement(),n=e._spiderLeg._path.childNodes[1],n.setAttribute(&quot;from&quot;,.5),n.setAttribute(&quot;to&quot;,0),n.setAttribute(&quot;stroke-opacity&quot;,0),n.beginElement(),e._spiderLeg._path.setAttribute(&quot;stroke-opacity&quot;,0)));setTimeout(function(){var t=0;for(i=h.length-1;i&gt;=0;i--)e=h[i],e._spiderLeg&amp;&amp;t++;for(i=h.length-1;i&gt;=0;i--)e=h[i],e._spiderLeg&amp;&amp;(e.setOpacity&amp;&amp;(e.setOpacity(1),e.setZIndexOffset(0)),t&gt;1&amp;&amp;o.removeLayer(e),r.removeLayer(e._spiderLeg),delete e._spiderLeg);s._animationEnd()},200)}}:{_animationSpiderfy:function(t,e){var i,n,s,r,o=this._group,a=o._map,h=o._featureGroup;for(i=t.length-1;i&gt;=0;i--)r=a.layerPointToLatLng(e[i]),n=t[i],n._preSpiderfyLatlng=n._latlng,n.setLatLng(r),n.setZIndexOffset&amp;&amp;n.setZIndexOffset(1e6),h.addLayer(n),s=new L.Polyline([this._latlng,r],{weight:1.5,color:&quot;#222&quot;}),a.addLayer(s),n._spiderLeg=s;this.setOpacity(.3),o.fire(&quot;spiderfied&quot;)},_animationUnspiderfy:function(){this._noanimationUnspiderfy()}}),L.MarkerClusterGroup.include({_spiderfied:null,_spiderfierOnAdd:function(){this._map.on(&quot;click&quot;,this._unspiderfyWrapper,this),this._map.options.zoomAnimation&amp;&amp;this._map.on(&quot;zoomstart&quot;,this._unspiderfyZoomStart,this),this._map.on(&quot;zoomend&quot;,this._noanimationUnspiderfy,this),L.Path.SVG&amp;&amp;!L.Browser.touch&amp;&amp;this._map._initPathRoot()},_spiderfierOnRemove:function(){this._map.off(&quot;click&quot;,this._unspiderfyWrapper,this),this._map.off(&quot;zoomstart&quot;,this._unspiderfyZoomStart,this),this._map.off(&quot;zoomanim&quot;,this._unspiderfyZoomAnim,this),this._unspiderfy()},_unspiderfyZoomStart:function(){this._map&amp;&amp;this._map.on(&quot;zoomanim&quot;,this._unspiderfyZoomAnim,this)},_unspiderfyZoomAnim:function(t){L.DomUtil.hasClass(this._map._mapPane,&quot;leaflet-touching&quot;)||(this._map.off(&quot;zoomanim&quot;,this._unspiderfyZoomAnim,this),this._unspiderfy(t))},_unspiderfyWrapper:function(){this._unspiderfy()},_unspiderfy:function(t){this._spiderfied&amp;&amp;this._spiderfied.unspiderfy(t)},_noanimationUnspiderfy:function(){this._spiderfied&amp;&amp;this._spiderfied._noanimationUnspiderfy()},_unspiderfyLayer:function(t){t._spiderLeg&amp;&amp;(this._featureGroup.removeLayer(t),t.setOpacity(1),t.setZIndexOffset(0),this._map.removeLayer(t._spiderLeg),delete t._spiderLeg)}})}(window,document);</td>
      </tr>
</table>

  </div>

</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop"></div>
</div>

    </div>
  </div>

    </div>

        <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>
        <li><a href="https://github.com/pricing" data-ga-click="Footer, go to pricing, text:pricing">Pricing</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span aria-hidden="true" class="mega-octicon octicon-mark-github" title="GitHub "></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2016 <span title="0.07990s from github-fe124-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    
    
    

    <div id="ajax-error-message" class="flash flash-error">
      <span aria-hidden="true" class="octicon octicon-alert"></span>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <span aria-hidden="true" class="octicon octicon-x"></span>
      </button>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" integrity="sha256-7460qJ7p88i3YTMH/liaj1cFgX987ie+xRzl6WMjSr8=" src="https://assets-cdn.github.com/assets/frameworks-ef8eb4a89ee9f3c8b7613307fe589a8f5705817f7cee27bec51ce5e963234abf.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-EZvEsORh7UDNi4EQkE3lUPeIa8Au/SUQnfJ0Ayi65w0=" src="https://assets-cdn.github.com/assets/github-119bc4b0e461ed40cd8b8110904de550f7886bc02efd25109df2740328bae70d.js"></script>
      
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner hidden">
      <span aria-hidden="true" class="octicon octicon-alert"></span>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
  </body>
</html>

