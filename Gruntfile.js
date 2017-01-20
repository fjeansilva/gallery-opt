module.exports = function(grunt) {
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            name: 'medium',
            width: 250,
            suffix: '-medium-',
            quality: 90
          }]
        },
        files: [{
          expand: true,
          src: ['*.{jpg,gif,png}'],
          cwd: 'images/',
          dest: 'dist/'
        }]
      }
    },

    pagespeed: {
      options: {
        nokey: true,
        url: 'https://gallery-opt.herokuapp.com/index.html'
      },
      prod: {
        options: {
          url: 'https://gallery-opt.herokuapp.com/index.html',
          locale: 'pt_BR',
          strategy: 'desktop',
          threshold: 80
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-pagespeed');
  grunt.loadNpmTasks('grunt-responsive-images');

  grunt.registerTask('default', ['responsive_images', 'pagespeed']);
}
