BASE=https://openbikesensor.org
CMD=qrencode -d 300

URLS := \
	/bauanleitung \
	/bauanleitung/classic

all:

define url-rule
$(2).png:
	$(CMD) "$(BASE)$(1)" -o $$@
all: $(2).png
endef

$(foreach url,$(URLS), \
	$(eval $(call url-rule,$(url),$(shell echo "$(url)" | sed -r 's/[^a-z0-9]+/-/g' | sed -r 's/^-|-$$//g' ))))

clean: 
	rm *.png
