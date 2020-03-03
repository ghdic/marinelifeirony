window.GLIFFY = window.GLIFFY || {};
GLIFFY.ENV = GLIFFY.ENV || {};

/*
 * this controls whether the app uses the experimental identity API. If this
 * is true, the manifest must also declare "experimental"
 */
GLIFFY.ENV.useIdentityApi = false;

/*
 * this is used to control whether the app uses the canary sync file system.
 * If this is true, the manifest must also declare "syncFileSystem"
 */
GLIFFY.ENV.useSyncFileSystemApi = false;

/*
 * this controls whether the app shows the google drive tie-in menu item
 */
GLIFFY.ENV.installDriveMenu = true;

