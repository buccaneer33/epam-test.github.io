'use strict';

 // Подключаемые библиотеки
var gulp          = require('gulp');
var sass          = require('gulp-sass');
var concat        = require('gulp-concat');
var cleanCSS      = require('gulp-clean-css');
var autoprefixer  = require('gulp-autoprefixer');
var sourceMaps    = require('gulp-sourcemaps');
var gulpif        = require('gulp-if');
var clean         = require('gulp-clean');
var browserSync   = require('browser-sync');
var uglify        = require('gulp-uglify');
var rigger        = require('gulp-rigger');


//Дефолтный таск ---------------------------------------------------+
gulp.task('default', ['build', 'server', 'watch']);

// Сервер ----------------------------------------------------------+
var config = {
    server: {
        baseDir: "./build"
    },
    host: 'localhost',
    port: 9000,
};
gulp.task('server', ()=> {
    browserSync(config);
});

// PATH ------------------------------------------------------------+
var path = {
    build: {
        html: 'build/',
        css: 'build/css/',
        js: 'build/js/',
        img: 'build/img/',
        fonts: 'build/fonts/'
    },
    src: {
        html: 'src/*.html',
        // style: 'src/sass/index.scss',
        style: 'src/sass/',
        // js: 'src/js/**/*.js',
        js: 'src/js/index.js',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    watch: {
        html: 'src/*.html',
        style: 'src/sass/**/*.*',
        js: 'src/js/index.js',
        img: 'src/img/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    clean: './build/*'
};

// Сборка тасков build ---------------------------------------------+
gulp.task('build', [
    // 'clean:build',
    'html:build',
    'style:build',
    'js:build',
    'image:build',
    'fonts:build'
]);

//Чистка -----------------------------------------------------------+
gulp.task('clean:build', ()=> {
    return gulp.src(path.clean, {read: false})
        .pipe(clean());
});

// Отслеживание изменений ------------------------------------------+
gulp.task('watch', ()=> {
    gulp.watch([path.watch.html], (event, cb) => {
        gulp.start('html:build');
    });
    gulp.watch([path.watch.style], (event, cb) => {
        gulp.start('style:build');
    });
    gulp.watch([path.watch.html], (event, cb) => {
        gulp.start('js:build');
    });
    gulp.watch([path.watch.style], (event, cb) => {
        gulp.start('image:build');
    });
});

// Сборка html -----------------------------------------------------+
gulp.task('html:build', ()=> {
    gulp.src(path.src.html)
        .pipe(gulp.dest(path.build.html))
        .pipe(browserSync.reload({stream: true}));
});

// Сборка css ----------------------
gulp.task('style:build', ()=> {

    gulp.src(path.src.style + 'index.scss') // 'src/sass/index.scss'
        .pipe(sourceMaps.init())
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(autoprefixer({browsers: ['last 9 versions'], cascade: false}))
        // .pipe(cleanCSS())
        .pipe(concat('style.css'))
        .pipe(sourceMaps.write())
        .pipe(gulp.dest(path.build.css)); // 'build/css/'

    gulp.src(path.src.style + 'm-index.scss') // 'src/sass/m-index.scss'
        .pipe(sourceMaps.init())
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(autoprefixer({browsers: ['last 9 versions'], cascade: false}))
        // .pipe(cleanCSS())
        .pipe(concat('m-style.css'))
        .pipe(sourceMaps.write())
        .pipe(gulp.dest(path.build.css)); // 'build/css/'

    gulp.src(path.src.style + 't-index.scss') // 'src/sass/t-index.scss'
        .pipe(sourceMaps.init())
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(autoprefixer({browsers: ['last 9 versions'], cascade: false}))
        // .pipe(cleanCSS())
        .pipe(concat('t-style.css'))
        .pipe(sourceMaps.write())
        .pipe(gulp.dest(path.build.css)) // 'build/css/'

        .pipe(browserSync.reload({stream: true}));

});

// Сборка js ---------------
gulp.task('js:build', ()=> {
    gulp.src(path.src.js)
        .pipe(rigger())
        // .pipe(uglify())
        .pipe(concat('index.js'))
        .pipe(gulp.dest(path.build.js))
        .pipe(browserSync.reload({stream: true}));
});

// Сборка изображений ---------
gulp.task('image:build', ()=> {
    gulp.src(path.src.img)
        // .pipe(imagemin({
        //     progressive: true,
        //     svgoPlugins: [{removeViewBox: false}],
        //     //use: [pngquant()],
        //     interlaced: true
        // }))
        .pipe(gulp.dest(path.build.img))
        .pipe(browserSync.reload({stream: true}));
});
// Сборка шрифтов-----------
gulp.task('fonts:build', ()=> {
    gulp.src(path.src.fonts)
        // .pipe(imagemin({
        //     progressive: true,
        //     svgoPlugins: [{removeViewBox: false}],
        //     //use: [pngquant()],
        //     interlaced: true
        // }))
        .pipe(gulp.dest(path.build.fonts))
        .pipe(browserSync.reload({stream: true}));
});
