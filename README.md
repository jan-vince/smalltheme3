# SmallTheme 3
> Simple Bootstrap 3 theme for OctoberCMS

## Installation

Install from OctoberCMS marketplace or clone from **GitHub** into `/themes` dir:

````sh
git clone https://github.com/jan-vince/smalltheme3.git
````

----

## Quick setup

This theme is build with [Bootstrap 3 framework](https://getbootstrap.com/docs/3.3/) and is based on one of my designs.

The main idea behind this is to have a single place to put all enhancements from my new projects to be able to reuse them in the future.

I'm keeping all files in ````default```` folders intact and always create ````custom```` folders with edited original files.


### Basic stuff

Update settings in *Settings > Front-end theme > Customize (SmallTheme 3)*.

### CSS styles


### JavaScript files

There is a default JS combiner setup in  ````/partials/scripts.htm````.


### Plugins

This theme will use some of my plugins to show galleries, testimonials, records and contact form.

#### Small Extensions

* Allow Menu notes and Menu images in ````Settings > Small Extensions > Static Pages```` to be able to edit testimonials that are located in ````Pages > Menus > Testimonials````.

#### Small Contact Form

* Add some form fields in ````Settings > Small Contact Form```` to be able to use contact form on Contact page.


## Misc

### humans.txt

You can setup humans.txt file content in the theme settings (in OctoberCMS backend) and the file is than available with URL ```/humans.txt```.

*The file is automatically added to page head if you use default layout (or make your own based on it with ```/partials/default/head.htm``` file included).*

### Vendor assets

The theme uses Bower to maintain assets files.

To update vendor files, run command in terminal (in theme root folder): ```bower update```.

----

> Thanks to:    
> [OctoberCMS](http://www.octobercms.com) team members and supporters for this great system.    
> [Ronald Cuyan](https://unsplash.com/@ronaldcuyan) for his photo I have used in the theme preview.    
> [Rhonda Kay](https://unsplash.com/@rhondak) for her photos I have used in the theme.    
> [Font Awesome](http://www.fontawesome.io) for great icons.

Created by [Jan Vince](http://www.vince.cz), freelance web designer from Czech Republic.
