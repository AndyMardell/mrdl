<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'database_name');

/** MySQL database username */
define('DB_USER', 'database_username');

/** MySQL database password */
define('DB_PASSWORD', 'database_password');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'J>xX`,xTk#Ly29tf;gG^NXW(1PR}fe`JS~/K[T?dQ;4a|Dn;6_-aM3^.w{;lfXs!');
define('SECURE_AUTH_KEY',  'f)~ff]IiDQg&/wVQlIuODapt`~$@kU`ZBtlK`XCuI@fqOih|~QW<u!<LJEQca3l,');
define('LOGGED_IN_KEY',    'iLHR4Jide_- (beWl*wL7,>8C^8-hGDvw*N~0Q9EO),je~=w&8vD3b$Nj6k)yvn^');
define('NONCE_KEY',        'O>rvi+|C?{N[ugTIbSj-TjY<?:<BZ<Nh?:}8PQ%i3{bYw9W%),B3>xt=x[w-L1]h');
define('AUTH_SALT',        'FMfbcVB3v7mtm8q1#!_>Uj4R4X8r^;{L+j512/XC~t{FD_=r9CwB}1_Z~#:?|^cU');
define('SECURE_AUTH_SALT', '?PQlw|$c8v4UB@Ro5>/h$MrIA)H5!A@j)pDIZDo1+ec=M4dHK#zTdumH1?Ao&IEO');
define('LOGGED_IN_SALT',   'I{k^)3&?=.CXyBnn#ns< &&O]-_Obz5h|fTXc%U<vjl0AAK,yp=}O.9X|wysjvQw');
define('NONCE_SALT',       '^w- CLV+b3#}gG,ZOoq9p$S@Cq|X7775+eR9R/&$RE[t;I3E|[fS}]!tb5lg:~,Q');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'mrdl_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
