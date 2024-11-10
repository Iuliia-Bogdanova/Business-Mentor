const gulp = require("gulp");

// Подключение задач из dev.js и docs.js
require("./gulp/dev.js");
require("./gulp/docs.js");

// Задача для разработки
gulp.task(
    "default",
    gulp.series(
        "clean:dev",
        gulp.parallel(
            "html:dev",
            "sass:dev",
            "images:dev",
            "fonts:dev",
            "files:dev",
            "js:dev"
        ),
        gulp.parallel("server:dev", "watch:dev")
    )
);

// Задача для документации
gulp.task(
    "docs",
    gulp.series(
        "clean:docs",
        gulp.parallel(
            "html:docs",
            "sass:docs",
            "images:docs",
            "fonts:docs",
            "files:docs",
            "js:docs"
        ),
        gulp.parallel("server:docs")
    )
);

// Задача для сборки
gulp.task(
    "build",
    gulp.series(
        "clean:dev",
        gulp.parallel(
            "html:dev",
            "sass:prod",
            "images:prod",
            "fonts:dev",
            "files:dev",
            "js:prod"
        ),
        "docs"
    )
);
