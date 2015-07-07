/*jslint indent: 4, nomen: true */
/*globals require, module, process, __dirname */
(function () {
    'use strict';
    var yeoman = require('yeoman-generator'),
        chalk = require('chalk'),
        yosay = require('yosay'),
        path = require('path');

    module.exports = yeoman.generators.Base.extend({

        constructor: function () {
            try {
                yeoman.generators.Base.apply(this, arguments);
                // file argument is required
                this.argument('filename', {
                    optional: false,
                    required: true,
                    type: String
                });
            } catch (e) {
                this.filename = false;
            }

        },

        prompting: function () {
            var prompts,
                done = this.async(),
                config = this.fs.read(path.join(__dirname, 'config.json'), 'utf8');
            config = JSON.parse(config);

            prompts = [{
                // prompts for file type
                type: 'list',
                name: 'file_type',
                message: 'Wich File Type ?',
                choices: config.types
            }];

            if (this.filename) {
                // normalize le path
                this.filename = path.normalize(this.filename);
                //
                this.log(yosay(
                    'Welcome to the premium ' + chalk.red('File') + ' generator!'
                ));
                this.prompt(prompts, function (props) {
                    this.props = props;
                    done();
                }.bind(this));

            } else {
                this.log.error(chalk.red('Filename argument is missing. Aborted!'));
                done();
                process.exit(1);
            }
        },

        writing: function () {
            this.fs.copy(
                this.templatePath('_' + this.props.file_type + '.tpl'),
                this.destinationPath(this.filename + '.' + this.props.file_type)
            );
        }

    });
}());
