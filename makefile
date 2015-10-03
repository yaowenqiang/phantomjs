# specific test command
test:
	@echo '##############################'
	@echo 'Running PHantomJS　rendering'
	@echo '##############################'
	phantomjs system_api.js jack
# default command
all: test
