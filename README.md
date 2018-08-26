# mrdl React/WordPress

A react frontend for the WordPress REST API

## Preperation

Nothing like being prepared. 2 things:

```bash
cp env.dist .env
```

and change the domain to where your WordPress installation will live (e.g. admin.domain.com).

```bash
cp wp-config.dist.php wp-config.php
```

and fill in the appropriate MySql details.

## Installing

Install WordPress using composer

```bash
composer install
```

Build the React App

```bash
npm i
npm run build [--production]
```

## Development

For development, you might want to run

```bash
npm start
```

## Deployment

Make sure you have built the app for production:

```bash
npm run build --production
```

admin.domain.com should point to /admin
domain.com should point to /build

That's about it
