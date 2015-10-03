# specific test command
# Usage: make taskname
# i.e,make test
test:
	@echo '##############################'
	@echo 'Running PHantomJS　rendering'
	@echo '##############################'
	phantomjs system_api.js jack
# default command
# just run make and the default task will run
all: test
