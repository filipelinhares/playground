module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        precision: 6,
        sourceComments: false,
        outputStyle: 'expanded'
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'src',
          src: ['*.scss'],
          dest: 'dist',
          ext: '.css'
        }]
      }
    },

    cssshrink: {
      dist: {
        files: [{
          expand: true,
          cwd: 'dist',
          src: ['*.css'],
          dest: 'dist',
          ext: '.css'
        }]
      }
    },

    postcss: {
      options: {
        processors: [
          require('autoprefixer-core')({ browsers: ['last 2 versions', 'ie 9'] }),
          require('postcss-import')
        ]
      },
      dist: {
        src: 'dist/*.css'
      },
      test: {
        files: {
          'build/build.css': 'test/test.css'
        }
      }
    },

    parker: {
      options: {
        metrics: [
          'TotalStylesheets',
          'TotalStylesheetSize',
          'TotalRules',
          'TotalSelectors',
          'TotalIdentifiers',
          'TotalDeclarations',
          'SelectorsPerRule',
          'IdentifiersPerSelector',
          'SpecificityPerSelector',
          'TopSelectorSpecificity',
          'TopSelectorSpecificitySelector',
          'TotalIdSelectors',
          'TotalUniqueColours',
          'TotalImportantKeywords',
          'TotalMediaQueries'
        ],
        file: "STATUS.md",
        usePackage: true
      },
      src: [
        'dist/*.css'
      ]
    }
  });

  // Load npm modules
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-parker');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-cssshrink');

  // Generate our files
  grunt.registerTask('compile', ['sass', 'parker', 'cssshrink', 'postcss:dist']);
  grunt.registerTask('test', ['postcss:test']);
};
