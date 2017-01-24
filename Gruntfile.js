/*
 After you have changed the settings at "Your code goes here",
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 500,
            suffix: '-medium',
            quality: 30
          }]
        },
        files: [{
          expand: true,
          src: ['**/*.{jpg,gif,png}'],
          cwd: 'images/',
          dest: 'images_fixed/'
        }]
      }
    },
  })

  // Load the plugin that provides the "responsive_images" task.
  grunt.loadNpmTasks('grunt-responsive-images');

  // Default task(s).
  grunt.registerTask('default', ['responsive_images']);
};
