# SmallTheme 3
> Simple Bootstrap 3 starter theme for OctoberCMS

## Installation

### Install OctoberCMS first

> This is only a one of many ways how to install OctoberCMS.

#### Web installer

Download installation file from [http://octobercms.com/download](http://octobercms.com/download).    
Unzip downloaded file, upload to your hosting and visit URL ````/install.php````.

#### Console instalation

> You need php and curl installed!

````sh
curl -s https://octobercms.com/api/installer | php

php artisan october:install
php artisan october:fresh    
php artisan october:update
````

## Useful plugins

````sh
php artisan plugin:install Rainlab.Pages
php artisan plugin:install Rainlab.Blog
php artisan plugin:install Rainlab.GoogleAnalytics
php artisan plugin:install Rainlab.Sitemap

php artisan plugin:install JanVince.SmallExtensions
php artisan plugin:install JanVince.SmallContactForm

php artisan plugin:install Bedard.AnalyticsExtension
php artisan plugin:install Romanov.ClearCacheWidget
````

## Small Theme

Download or clone from **GitHub** into `/themes` dir:

````sh
git clone https://github.com/jan-vince/smalltheme3.git
````

----

## Quick setup guide

This theme is build with [Bootstrap 3 framework](https://getbootstrap.com/docs/3.3/).    
There are some default CSS/LESS, JavaScript and OctoberCMS files ready to be used (or copied) in your web layout.

### Basic stuff

1. Update settings in *Settings > Front-end theme > Customize (SmallTheme 3)*.

2. Create ````/assets/images/theme-preview.png```` image as it is used as a preview in OctoberCMS backend and also as default preview image for sharing in Facebook or Twitted.

3. Put your own ````favicon.png```` and ````favicon.ico```` into directory ````/assets/images````.

### CSS styles

Default styles are defined in ```/assets/css/styles.less``` and linked to default layout file (```/layouts/default.html```) with:

```
{% put stylesheet %}
    <link rel="stylesheet"
            href="{{ ['assets/css/custom.less']|theme }}.css">
{% endput %}
```

### JavaScript files

There is a default JS combiner setup in  ```/partials/scripts.htm```.


### Layouts

There is a default layout file in ```/layouts/default.htm``` that has some logic implemented (and Custom fields templates for Rainlab Static Pages plugin).


### Static Pages (plugin)

There is a default Static page ready that uses default layout and custom fields and is accessible by URL: ```/```.

In backend (with Static pages plugin installed) you can 'build' your layout with some of preinstalled parts (partials) like Header, Banner, CTA, Footer, ...

## Misc

### humans.txt

You can setup humans.txt file content in the theme settings (in OctoberCMS backend) and the file is than available with URL ```/humans.txt```.

*The file is automatically added to page head if you use default layout (or make your own based on it with ```/partials/default/head.htm``` file included).*

### Vendor assets

The theme uses Bower to maintain assets files.

To update vendor files, run command in terminal (in theme root folder): ```bower update```. But it will be updated automatically with every theme update.

----

> Thanks to:    
> [OctoberCMS](http://www.octobercms.com) team members and supporters for this great system.    
> [Ronald Cuyan](https://unsplash.com/@ronaldcuyan) for his photo I have used in the theme preview.    
> [Font Awesome](http://www.fontawesome.io) for great icons.

Created by [Jan Vince](http://www.vince.cz), freelance web designer from Czech Republic.
