Das ist ein Testtext für {{ include.version }}.


{% if include.version == 'A' %}
  Ein Bild für A
{% elsif include.version == 'B' %}
  Ein Bild für B
{% endif %}